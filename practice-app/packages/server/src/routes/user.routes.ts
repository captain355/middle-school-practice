import { Router, Request, Response } from 'express';
import { z } from 'zod';
import * as userService from '../services/user.service.js';
import { success, error } from '../utils/response.js';
import { requireAdmin } from '../middleware/admin.js';

const userRoutes = Router();

// 修改密码请求参数校验
const changePasswordSchema = z.object({
  oldPassword: z.string().min(1, '旧密码不能为空'),
  newPassword: z.string().min(6, '新密码至少6个字符').max(100, '新密码最多100个字符'),
});

// 管理员重置密码参数校验
const resetPasswordSchema = z.object({
  userId: z.string().min(1, '用户ID不能为空'),
  newPassword: z.string().min(4, '密码至少4个字符').max(100, '密码最多100个字符'),
});

// 修改角色参数校验
const updateRoleSchema = z.object({
  userId: z.string().min(1, '用户ID不能为空'),
  role: z.enum(['admin', 'student', 'teacher'], { message: '无效的角色' }),
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

/**
 * PUT /me/profile - 更新自己的资料
 */
userRoutes.put('/me/profile', async (req: Request, res: Response) => {
  const parsed = z.object({
    displayName: z.string().min(1).max(50).optional(),
    avatar: z.string().max(500).optional().nullable(),
  }).safeParse(req.body);

  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }

  try {
    const userId = req.user!.userId;
    await userService.updateProfile(userId, parsed.data);
    success(res, null, '资料更新成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '资料更新失败';
    error(res, 500, message);
  }
});

// ---- 以下接口需要管理员权限 ----

/**
 * GET /admin/users - 获取所有用户列表
 */
userRoutes.get('/admin/users', requireAdmin, async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers();
    success(res, users);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取用户列表失败';
    error(res, 500, message);
  }
});

/**
 * POST /admin/users/:userId/reset-password - 管理员重置用户密码
 */
userRoutes.post('/admin/users/:userId/reset-password', requireAdmin, async (req: Request, res: Response) => {
  const parsed = z.object({
    newPassword: z.string().min(4, '密码至少4个字符').max(100),
  }).safeParse(req.body);

  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }

  try {
    await userService.resetUserPassword(req.params.userId, parsed.data.newPassword);
    success(res, null, '密码已重置');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '重置密码失败';
    error(res, message === '用户不存在' ? 404 : 500, message);
  }
});

/**
 * PUT /admin/users/:userId/role - 修改用户角色
 */
userRoutes.put('/admin/users/:userId/role', requireAdmin, async (req: Request, res: Response) => {
  const parsed = z.object({
    role: z.enum(['admin', 'student', 'teacher']),
  }).safeParse(req.body);

  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }

  try {
    await userService.updateRole(req.params.userId, parsed.data.role);
    success(res, null, '角色已更新');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '修改角色失败';
    error(res, message === '用户不存在' ? 404 : 500, message);
  }
});

/**
 * PUT /admin/users/:userId/toggle-disabled - 停用/启用用户
 */
userRoutes.put('/admin/users/:userId/toggle-disabled', requireAdmin, async (req: Request, res: Response) => {
  try {
    await userService.toggleUserDisabled(req.params.userId);
    success(res, null, '操作成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '操作失败';
    error(res, message === '用户不存在' ? 404 : 500, message);
  }
});

/**
 * DELETE /admin/users/:userId - 删除用户
 */
userRoutes.delete('/admin/users/:userId', requireAdmin, async (req: Request, res: Response) => {
  try {
    await userService.deleteUser(req.params.userId);
    success(res, null, '用户已删除');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '删除用户失败';
    error(res, message === '用户不存在' ? 404 : 500, message);
  }
});

export { userRoutes };
