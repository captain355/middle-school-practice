# 构建阶段
FROM node:20-alpine AS builder

WORKDIR /app

# 复制 package 文件
COPY package*.json ./
COPY packages/client/package*.json ./packages/client/
COPY packages/server/package*.json ./packages/server/

# 安装依赖
RUN npm install
RUN cd packages/client && npm install
RUN cd packages/server && npm install

# 复制源代码
COPY . .

# 构建前端（API 地址使用相对路径）
RUN cd packages/client && npx vite build

# 生成 Prisma Client
RUN cd packages/server && npx prisma generate

# 生产阶段
FROM node:20-alpine AS runner

WORKDIR /app

# 复制依赖
COPY package*.json ./
COPY packages/server/package*.json ./packages/server/
COPY node_modules ./node_modules/

# 复制 server 代码和前端构建产物
COPY packages/server ./packages/server/
COPY packages/client/dist ./packages/client/dist/

# 复制 Prisma schema
COPY packages/server/prisma ./packages/server/prisma/

# 创建数据目录（用于 Fly.io Volume 挂载）
RUN mkdir -p /app/data

ENV NODE_ENV=production
ENV PORT=8080
ENV DATABASE_URL=file:/app/data/practice.db
ENV VITE_API_URL=/api/v1
ENV JWT_SECRET=change-me-to-random-string

EXPOSE 8080

# 启动前运行迁移和种子
CMD ["sh", "-c", "cd packages/server && npx prisma migrate deploy && npx tsx prisma/seed.ts && npx tsx src/index.ts"]
