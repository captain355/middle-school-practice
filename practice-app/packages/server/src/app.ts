import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { routes } from './routes/index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// 跨域中间件
app.use(cors());

// 解析 JSON 请求体
app.use(express.json());

// 注册 API 路由
app.use(routes);

// 托管前端静态文件（生产模式）
const clientDist = path.resolve(__dirname, '../../client/dist');
app.use(express.static(clientDist));

// SPA 回退：所有未匹配的 GET 请求返回 index.html
app.get('*', (_req: express.Request, res: express.Response) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

// 全局错误处理中间件
app.use((err: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  // 处理 Zod 验证错误
  if (err && typeof err === 'object' && 'issues' in err) {
    const zodError = err as { issues: Array<{ message: string; path: (string | number)[] }> };
    res.status(400).json({
      code: 400,
      message: '请求参数验证失败',
      details: zodError.issues.map((issue) => ({
        field: issue.path.join('.'),
        message: issue.message,
      })),
    });
    return;
  }

  // 处理其他错误
  const status = (err && typeof err === 'object' && 'status' in err)
    ? (err as { status: number }).status
    : 500;
  const message = (err && typeof err === 'object' && 'message' in err)
    ? (err as { message: string }).message
    : '服务器内部错误';

  console.error('Unhandled error:', err);
  res.status(status).json({
    code: status,
    message,
  });
});

export { app };
