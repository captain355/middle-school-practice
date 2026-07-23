import express from 'express';
import cors from 'cors';
import { routes } from './routes/index.js';

const app = express();

// 跨域中间件
app.use(cors());

// 解析 JSON 请求体
app.use(express.json());

// 注册路由
app.use(routes);

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
