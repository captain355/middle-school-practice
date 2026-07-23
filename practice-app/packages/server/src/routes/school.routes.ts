import { Router, Request, Response } from 'express';
import { z } from 'zod';
import * as schoolService from '../services/school.service.js';
import { success, error } from '../utils/response.js';
import { requireAdmin } from '../middleware/admin.js';

const schoolRoutes = Router();

const createSchoolSchema = z.object({
  name: z.string().min(1, '学校名称不能为空').max(100),
  code: z.string().max(50).optional(),
  address: z.string().max(200).optional(),
  contactName: z.string().max(50).optional(),
  contactPhone: z.string().max(20).optional(),
  maxStudents: z.number().int().min(1).optional(),
});

const createClassSchema = z.object({
  schoolId: z.string().min(1, '学校ID不能为空'),
  name: z.string().min(1, '班级名称不能为空').max(50),
  grade: z.number().int().min(1).max(12, '年级必须在1-12之间'),
  teacherId: z.string().optional(),
});

// ---- 学校接口 ----

/**
 * GET /schools - 获取所有学校列表
 */
schoolRoutes.get('/schools', async (req: Request, res: Response) => {
  try {
    const schools = await schoolService.getAllSchools();
    success(res, schools);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取学校列表失败';
    error(res, 500, message);
  }
});

/**
 * GET /schools/:id - 获取学校详情（含班级列表）
 */
schoolRoutes.get('/schools/:id', async (req: Request, res: Response) => {
  try {
    const school = await schoolService.getSchoolById(req.params.id);
    if (!school) { error(res, 404, '学校不存在'); return; }
    success(res, school);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取学校详情失败';
    error(res, 500, message);
  }
});

/**
 * POST /schools - 创建学校（管理员）
 */
schoolRoutes.post('/schools', requireAdmin, async (req: Request, res: Response) => {
  const parsed = createSchoolSchema.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }
  try {
    const school = await schoolService.createSchool(parsed.data);
    success(res, school, '学校创建成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '创建学校失败';
    error(res, 500, message);
  }
});

/**
 * PUT /schools/:id - 更新学校（管理员）
 */
schoolRoutes.put('/schools/:id', requireAdmin, async (req: Request, res: Response) => {
  const parsed = createSchoolSchema.partial().safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }
  try {
    const school = await schoolService.updateSchool(req.params.id, parsed.data);
    success(res, school, '学校更新成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '更新学校失败';
    error(res, message === '学校不存在' ? 404 : 500, message);
  }
});

/**
 * DELETE /schools/:id - 删除学校（管理员）
 */
schoolRoutes.delete('/schools/:id', requireAdmin, async (req: Request, res: Response) => {
  try {
    await schoolService.deleteSchool(req.params.id);
    success(res, null, '学校已删除');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '删除学校失败';
    error(res, message === '学校不存在' ? 404 : 500, message);
  }
});

// ---- 班级接口 ----

/**
 * GET /schools/:schoolId/classes - 获取学校的班级列表
 */
schoolRoutes.get('/schools/:schoolId/classes', async (req: Request, res: Response) => {
  try {
    const classes = await schoolService.getClassesBySchool(req.params.schoolId);
    success(res, classes);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取班级列表失败';
    error(res, 500, message);
  }
});

/**
 * POST /classes - 创建班级（管理员）
 */
schoolRoutes.post('/classes', requireAdmin, async (req: Request, res: Response) => {
  const parsed = createClassSchema.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }
  try {
    const cls = await schoolService.createClass(parsed.data);
    success(res, cls, '班级创建成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '创建班级失败';
    error(res, 500, message);
  }
});

/**
 * PUT /classes/:id - 更新班级（管理员）
 */
schoolRoutes.put('/classes/:id', requireAdmin, async (req: Request, res: Response) => {
  const parsed = createClassSchema.partial().omit({ schoolId: true }).safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }
  try {
    const cls = await schoolService.updateClass(req.params.id, parsed.data);
    success(res, cls, '班级更新成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '更新班级失败';
    error(res, message === '班级不存在' ? 404 : 500, message);
  }
});

/**
 * DELETE /classes/:id - 删除班级（管理员）
 */
schoolRoutes.delete('/classes/:id', requireAdmin, async (req: Request, res: Response) => {
  try {
    await schoolService.deleteClass(req.params.id);
    success(res, null, '班级已删除');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '删除班级失败';
    error(res, message === '班级不存在' ? 404 : 500, message);
  }
});

export { schoolRoutes };
