#!/bin/bash
# ============================================
# 初中各学科知识体系专项练习库 - 一键部署脚本
# 适用于 Ubuntu/Debian/CentOS/Alibaba Cloud Linux 等
# 前端构建产物已包含在仓库中，无需在服务器上构建
# ============================================

set -e

echo "=========================================="
echo "  初中各学科知识体系专项练习库 - 部署"
echo "=========================================="

# 检测系统
if [ -f /etc/os-release ]; then
  . /etc/os-release
  echo "[1/6] 操作系统: $PRETTY_NAME"
else
  echo "[1/6] 操作系统: 未知"
fi

# 检测包管理器
echo "[2/6] 检测包管理器..."
if command -v dnf &>/dev/null; then
  PKG="dnf"
  echo "  使用 dnf"
elif command -v yum &>/dev/null; then
  PKG="yum"
  echo "  使用 yum"
elif command -v apt-get &>/dev/null; then
  PKG="apt"
  echo "  使用 apt-get"
else
  echo "  错误: 未找到包管理器(dnf/yum/apt-get)"
  exit 1
fi

# 安装 Node.js 20
echo "[3/6] 安装 Node.js 20..."
NODE_EXISTS=false
if command -v node &>/dev/null; then
  NODE_VER=$(node -v 2>/dev/null || echo "")
  NODE_MAJOR=$(echo "$NODE_VER" | sed 's/v//' | cut -d'.' -f1)
  if [ -n "$NODE_MAJOR" ] && [ "$NODE_MAJOR" -ge 18 ] 2>/dev/null; then
    NODE_EXISTS=true
    echo "  已安装 Node.js $NODE_VER，跳过安装"
  fi
fi
if [ "$NODE_EXISTS" = "false" ]; then
  if [ "$PKG" = "dnf" ] || [ "$PKG" = "yum" ]; then
    curl -fsSL https://rpm.nodesource.com/setup_20.x | bash -
    $PKG install -y nodejs
  else
    curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
    apt-get install -y nodejs
  fi
fi
echo "  Node.js $(node -v) 安装完成"

# 安装 PM2（进程管理器，保持服务运行）
echo "[4/6] 安装 PM2..."
npm install -g pm2 2>&1 | tail -1
echo "  PM2 安装完成"

# 克隆项目
echo "[5/6] 克隆项目..."
APP_DIR="/opt/middle-school-practice"
if [ -d "$APP_DIR" ]; then
  echo "  目录已存在，更新代码..."
  cd "$APP_DIR" && git pull origin main
else
  git clone https://github.com/captain355/middle-school-practice.git "$APP_DIR"
fi
cd "$APP_DIR/practice-app"

# 安装后端依赖（前端已预构建，无需安装前端依赖）
echo "[5/6] 安装后端依赖..."
cd packages/server
rm -rf node_modules package-lock.json
npm install

# 初始化数据库
echo "[5/6] 初始化数据库..."
npx prisma generate
npx prisma migrate deploy
npx tsx prisma/seed.ts
cd ../..

# 生成 JWT 密钥
JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")

# 创建生产环境配置
cat > .env << EOF
DATABASE_URL=file:./data/practice.db
JWT_SECRET=${JWT_SECRET}
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
SERVER_PORT=3000
NODE_ENV=production
VITE_API_URL=/api/v1
EOF

# 创建数据目录
mkdir -p data

# 检查前端构建产物是否存在
if [ ! -d "packages/client/dist" ]; then
  echo "  错误: packages/client/dist 不存在！前端构建产物缺失。"
  echo "  请在本地执行: cd packages/client && npx vite build"
  exit 1
fi
echo "  前端构建产物已就绪"

# 开放防火墙端口
echo "[6/6] 配置防火墙..."
if command -v firewall-cmd &>/dev/null; then
  firewall-cmd --permanent --add-port=3000/tcp 2>/dev/null || true
  firewall-cmd --reload 2>/dev/null || true
  echo "  已开放 3000 端口（系统防火墙）"
elif command -v ufw &>/dev/null; then
  ufw allow 3000/tcp 2>/dev/null || true
  echo "  已开放 3000 端口（系统防火墙）"
fi

# 使用 PM2 启动服务
pm2 delete practice-app 2>/dev/null || true
pm2 start "npx tsx packages/server/src/index.ts" --name practice-app --cwd . --env .env
pm2 save
pm2 startup 2>/dev/null || true

# 获取服务器IP
SERVER_IP=$(curl -s ifconfig.me 2>/dev/null || curl -s ip.sb 2>/dev/null || echo "39.107.64.163")

echo ""
echo "=========================================="
echo "  部署完成！"
echo "=========================================="
echo "  访问地址: http://${SERVER_IP}:3000"
echo "  管理命令:"
echo "    pm2 logs practice-app    查看日志"
echo "    pm2 restart practice-app 重启服务"
echo "    pm2 stop practice-app    停止服务"
echo "=========================================="
echo ""
echo "  重要: 如果无法访问，请在阿里云安全组中开放 3000 端口"
echo "  路径: ECS控制台 -> 安全组 -> 入方向规则 -> 添加 3000/TCP"
