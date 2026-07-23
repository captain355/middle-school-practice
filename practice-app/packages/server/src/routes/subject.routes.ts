import { Router, Request, Response } from 'express';
import * as subjectService from '../services/subject.service.js';
import { success, error } from '../utils/response.js';

const subjectRoutes = Router();

/**
 * GET / - 获取所有学科列表
 */
subjectRoutes.get('/', async (_req: Request, res: Response) => {
  try {
    const subjects = await subjectService.findAll();
    success(res, subjects);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取学科列表失败';
    error(res, 500, message);
  }
});

/**
 * GET /:id - 获取学科详情（含教材版本）
 */
subjectRoutes.get('/:id', async (req: Request, res: Response) => {
  try {
    const subject = await subjectService.findById(req.params.id);
    if (!subject) {
      error(res, 404, '学科不存在');
      return;
    }
    success(res, subject);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取学科详情失败';
    error(res, 500, message);
  }
});

/**
 * GET /:id/textbooks - 获取学科下的教材版本列表
 */
subjectRoutes.get('/:id/textbooks', async (req: Request, res: Response) => {
  try {
    const textbooks = await subjectService.getTextbooks(req.params.id);
    success(res, textbooks);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : '获取教材列表失败';
    error(res, 500, message);
  }
});

export { subjectRoutes };
