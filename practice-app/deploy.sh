#!/bin/bash
# ============================================
# 初中各学科知识体系专项练习库 - 一键部署脚本
# 适用于 Ubuntu/Debian/CentOS 系统
# 使用方法: ssh 到服务器后执行:
#   bash <(curl -fsSL https://raw.githubusercontent.com/captain355/middle-school-practice/main/deploy.sh)
#   或手动下载后: bash deploy.sh
# ============================================

set -e

echo "=========================================="
echo "  初中各学科知识体系专项练习库 - 部署"
echo "=========================================="

# 检测系统
if [ -f /etc/os-release ]; then
  . /etc/os-release
  OS=$ID
  echo "[1/7] 操作系统: $PRETTY_NAME"
else
  OS="unknown"
  echo "[1/7] 操作系统: 未知"
fi

# 安装 Node.js 20
echo "[2/7] 安装 Node.js 20..."
if command -v node &>/dev/null; then
  NODE_VERSION=$(node -v | cut -d'v' -f1 | cut -d'.' -f1)
  echo "  已安装 Node.js $(node -v)，跳过安装"
else
  if [ "$OS" = "ubuntu" ] || [ "$OS" = "debian" ]; then
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
  elif [ "$OS" = "centos" ] || [ "$OS" = "rhel" ] || [ "$OS" = "almalinux" ] || [ "$OS" = "rocky" ]; then
    curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
    yum install -y nodejs
  else
    echo "  不支持的系统，尝试通用安装..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs 2>/dev/null || yum install -y nodejs
  fi
fi
echo "  Node.js $(node -v) 安装完成"

# 安装 PM2（进程管理器，保持服务运行）
echo "[3/7] 安装 PM2..."
npm install -g pm2

# 克隆项目
echo "[4/7] 克隆项目..."
APP_DIR="/opt/middle-school-practice"
if [ -d "$APP_DIR" ]; then
  echo "  目录已存在，更新代码..."
  cd "$APP_DIR" && git pull origin main
else
  git clone https://github.com/captain355/middle-school-practice.git "$APP_DIR"
  cd "$APP_DIR/practice-app"
fi

cd "$APP_DIR/practice-app"

# 安装依赖
echo "[5/7] 安装依赖..."
npm install

# 构建前端
echo "[6/7] 构建前端..."
cd packages/client
npx vite build
cd ../..

# 运行数据库迁移和种子
echo "[6/7] 初始化数据库..."
cd packages/server
npx prisma generate
npx prisma migrate deploy
npx tsx prisma/seed.ts
cd ../..

# 生成 JWT 密钥
JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")

# 创建生产环境配置
cat > practice-app/.env << EOF
DATABASE_URL=file:./data/practice.db
JWT_SECRET=${JWT_SECRET}
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
SERVER_PORT=3000
NODE_ENV=production
VITE_API_URL=/api/v1
EOF

# 创建数据目录
mkdir -p practice-app/data

# 使用 PM2 启动服务
echo "[7/7] 启动服务..."
cd practice-app
pm2 delete practice-app 2>/dev/null || true
pm2 start "npx tsx packages/server/src/index.ts" --name practice-app --cwd . --env .env
pm2 save
pm2 startup 2>/dev/null || true

echo ""
echo "=========================================="
echo "  部署完成！"
echo "=========================================="
echo "  访问地址: http://$(curl -s ifconfig.me 2>/dev/null || echo 'YOUR_SERVER_IP'):3000"
echo "  管理命令:"
echo "    pm2 logs practice-app  - 查看日志"
echo "    pm2 restart practice-app - 重启服务"
echo "    pm2 stop practice-app   - 停止服务"
echo "=========================================="
