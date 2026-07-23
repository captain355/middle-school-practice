import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.js';

// 扩展 Express Request 类型，添加 user 属性
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        role: string;
      };
    }
  }
}

/**
 * 身份认证中间件
 * 从 Authorization 请求头中提取 Bearer 令牌并验证
 */
export function authenticate(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  // 检查 Authorization 头是否存在
  if (!authHeader) {
    res.status(401).json({ code: 401, message: '未提供认证令牌' });
    return;
  }

  // 提取 Bearer 令牌
  const parts = authHeader.split(' ');
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    res.status(401).json({ code: 401, message: '认证令牌格式错误' });
    return;
  }

  const token = parts[1];
  const payload = verifyToken(token);

  // 令牌无效
  if (!payload) {
    res.status(401).json({ code: 401, message: '认证令牌无效或已过期' });
    return;
  }

  // 将用户信息挂载到请求对象上
  req.user = {
    userId: payload.userId,
    role: payload.role,
  };

  next();
}
