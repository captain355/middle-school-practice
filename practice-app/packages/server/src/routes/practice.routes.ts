import { Router, Request, Response } from 'express';
import { z } from 'zod';
import * as practiceService from '../services/practice.service.js';
import { success, error, paginated } from '../utils/response.js';

const practiceRoutes = Router();

// 提交练习的请求参数校验
const submitSchema = z.object({
  chapterId: z.string().uuid('章节ID格式不正确'),
  subjectId: z.string().min(1, '学科ID不能为空'),
  textbookId: z.string().uuid('教材ID格式不正确').optional(),
  score: z.number().int().min(0, '分数不能为负数'),
  correct: z.number().int().min(0, '正确数不能为负数'),
  total: z.number().int().min(1, '总题数至少为1'),
  duration: z.number().int().min(0, '时长不能为负数').optional(),
  // 错题列表：每项包含题目ID和用户答案
  wrongAnswers: z.array(z.object({
    questionId: z.string().uuid('题目ID格式不正确'),
    userAnswer: z.string(),
  })).optional(),
});

// 分页参数校验
const paginationSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

/**
 * POST /submit - 提交练习结果
 */
practiceRoutes.post('/submit', async (req: Request, res: Response) => {
  const parsed = submitSchema.safeParse(req.body);
  if (!parsed.success) {
    error(res, 400, '请求参数错误', parsed.error.issues);
    return;
  }

  try {
    const userId = req.user!.userId;
    const result = await practiceService.submitPractice(userId, parsed.data);
    success(res, result, '练习提交成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '练习提交失败';
    error(res, 500, message);
  }
});

/**
 * GET /records - 获取练习记录（分页）
 */
practiceRoutes.get('/records', async (req: Request, res: Response) => {
  const query = paginationSchema.safeParse(req.query);
  if (!query.success) {
    error(res, 400, '分页参数错误', query.error.issues);
    return;
  }

  try {
    const userId = req.user!.userId;
    const { page, pageSize } = query.data;
    const { list, total } = await practiceService.getRecords(userId, page, pageSize);
    paginated(res, list, total, page, pageSize);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取练习记录失败';
    error(res, 500, message);
  }
});

/**
 * GET /progress - 获取学习进度
 */
practiceRoutes.get('/progress', async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    const progress = await practiceService.getProgress(userId);
    success(res, progress);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取学习进度失败';
    error(res, 500, message);
  }
});

/**
 * GET /wrong - 获取错题列表
 */
practiceRoutes.get('/wrong', async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    const wrongQuestions = await practiceService.getWrongQuestions(userId);
    success(res, wrongQuestions);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取错题列表失败';
    error(res, 500, message);
  }
});

/**
 * DELETE /wrong/:id - 删除错题记录
 */
practiceRoutes.delete('/wrong/:id', async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    await practiceService.removeWrongQuestion(userId, req.params.id);
    success(res, null, '错题已删除');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '删除错题失败';
    const statusCode = message === '错题记录不存在' ? 404 : 500;
    error(res, statusCode, message);
  }
});

/**
 * POST /checkin - 每日打卡
 */
practiceRoutes.post('/checkin', async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    const streak = await practiceService.checkin(userId);
    success(res, streak, '打卡成功');
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '打卡失败';
    error(res, 400, message);
  }
});

/**
 * GET /checkin - 获取打卡信息
 */
practiceRoutes.get('/checkin', async (req: Request, res: Response) => {
  try {
    const userId = req.user!.userId;
    const streak = await practiceService.getStreak(userId);
    success(res, streak);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取打卡信息失败';
    error(res, 500, message);
  }
});

export { practiceRoutes };
