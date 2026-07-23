import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// 加载 .env 文件（尝试多个可能路径，兼容不同的工作目录）
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const candidatePaths = [
  path.resolve(__dirname, '../../../../.env'),  // 从 packages/server/src/config/ 到根
  path.resolve(__dirname, '../../../.env'),    // 从 packages/server/src/config/ 到 packages/
  path.resolve(__dirname, '../../.env'),      // 从 packages/server/src/config/ 到 packages/server/
];

for (const envPath of candidatePaths) {
  if (dotenv.config({ path: envPath }).parsed) {
    break;
  }
}

// 环境变量校验模式
const envSchema = z.object({
  // 数据库连接地址（必填）
  DATABASE_URL: z.string().min(1, 'DATABASE_URL 环境变量未设置'),
  // JWT 密钥
  JWT_SECRET: z.string().default('practice-app-default-jwt-secret-change-me'),
  // 服务端口
  SERVER_PORT: z.coerce.number().default(3000),
  // 访问令牌过期时间
  JWT_ACCESS_EXPIRES_IN: z.string().default('15m'),
  // 刷新令牌过期时间
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),
});

// 解析并导出环境变量
export const env = envSchema.parse({
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  SERVER_PORT: process.env.SERVER_PORT,
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN,
});
