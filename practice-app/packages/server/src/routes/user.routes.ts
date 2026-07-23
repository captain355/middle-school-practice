import { Router, Request, Response } from 'express';
import { z } from 'zod';
import * as userService from '../services/user.service.js';
import { success, error } from '../utils/response.js';

const userRoutes = Router();

// 修改密码请求参数校验
const changePasswordSchema = z.object({
  oldPassword: z.string().min(1, '旧密码不能为空'),
  newPassword: z.string().min(6, '新密码至少6个字符').max(100, '新密码最多100个字符'),
});

/**
 * GET /me - 获取当前用户信息
 */
userRoutes.get('/me', async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    const user = await userService.getMe(userId);
    success(res, user);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取用户信息失败';
    error(res, 500, message);
  }
});

/**
 * PUT /me/password - 修改自己的密码
 */
userRoutes.put('/me/password', async (req: Request, res: Response) => {
  const parsed = changePasswordSchema.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }

  try {
    const userId = req.user!.userId;
    await userService.updatePassword(userId, parsed.data.oldPassword, parsed.data.newPassword);
    success(res, null, '密码修改成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '密码修改失败';
    const statusCode = message === '旧密码不正确' ? 400 : 500;
    error(res, statusCode, message);
  }
});

export { userRoutes };
