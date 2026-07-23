import { Request, Response, NextFunction } from 'express';

/**
 * 管理员权限中间件
 * 必须在 authenticate 中间件之后使用
 */
export function requireAdmin(req: Request, res: Response, next: NextFunction): void {
  if (req.user?.role !== 'admin') {
    res.status(403).json({ code: 403, message: '需要管理员权限' });
    return;
  }
  next();
}
