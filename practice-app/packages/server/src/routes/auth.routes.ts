import { Router, Request, Response } from 'express';
import { z } from 'zod';
import * as authService from '../services/auth.service.js';
import { success, error } from '../utils/response.js';

const authRoutes = Router();

// 登录请求参数校验
const loginSchema = z.object({
  username: z.string().min(1, '用户名不能为空'),
  password: z.string().min(1, '密码不能为空'),
});

// 注册请求参数校验
const registerSchema = z.object({
  username: z.string().min(2, '用户名至少2个字符').max(50, '用户名最多50个字符'),
  password: z.string().min(6, '密码至少6个字符').max(100, '密码最多100个字符'),
  displayName: z.string().min(1, '显示名称不能为空').max(50, '显示名称最多50个字符'),
});

// 刷新令牌请求参数校验
const refreshSchema = z.object({
  refreshToken: z.string().min(1, '刷新令牌不能为空'),
});

/**
 * POST /login - 用户登录
 */
authRoutes.post('/login', async (req: Request, res: Response) => {
  const parsed = loginSchema.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }

  try {
    const result = await authService.login(parsed.data.username, parsed.data.password);
    success(res, result, '登录成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '登录失败';
    error(res, 401, message);
  }
});

/**
 * POST /register - 用户注册
 */
authRoutes.post('/register', async (req: Request, res: Response) => {
  const parsed = registerSchema.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }

  try {
    const result = await authService.register(
      parsed.data.username,
      parsed.data.password,
      parsed.data.displayName,
    );
    success(res, result, '注册成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '注册失败';
    error(res, 400, message);
  }
});

/**
 * POST /refresh - 刷新访问令牌
 */
authRoutes.post('/refresh', async (req: Request, res: Response) => {
  const parsed = refreshSchema.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }

  try {
    const result = await authService.refreshToken(parsed.data.refreshToken);
    success(res, result, '令牌刷新成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '令牌刷新失败';
    error(res, 401, message);
  }
});

export { authRoutes };
