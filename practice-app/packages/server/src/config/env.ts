import { z } from 'zod';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// 加载 .env 文件（尝试多个可能路径，兼容不同的工作目录）
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const candidatePaths = [
  path.resolve(__dirname, '../../../../.env'),  // 从 packages/server/src/config/ 到项目根
  path.resolve(__dirname, '../../../.env'),    // 从 packages/server/src/config/ 到 packages/server
  path.resolve(__dirname, '../../.env'),      // 从 packages/server/src/config/ 到 packages/server/src
  path.resolve('/opt/middle-school-practice/practice-app/.env'), // 生产环境绝对路径
];

for (const envPath of candidatePaths) {
  try {
    if (dotenv.config({ path: envPath }).parsed) {
      console.log(`Loaded .env from: ${envPath}`);
      break;
    }
  } catch {
    // 忽略文件读取错误
  }
}

// 环境变量校验模式
const envSchema = z.object({
  // 数据库连接地址（必填，但提供默认值兜底）
  DATABASE_URL: z.string().default('file:./data/practice.db'),
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
