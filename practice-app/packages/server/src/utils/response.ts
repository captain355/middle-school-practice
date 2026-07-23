import { Response } from 'express';

/**
 * 成功响应
 * @param res Express 响应对象
 * @param data 响应数据
 * @param message 成功提示信息
 */
export function success(res: Response, data?: unknown, message = 'ok'): void {
  res.json({
    code: 0,
    message,
    data,
  });
}

/**
 * 错误响应
 * @param res Express 响应对象
 * @param code 错误码
 * @param message 错误信息
 * @param details 错误详情
 */
export function error(res: Response, code: number, message: string, details?: unknown): void {
  res.status(code >= 400 ? code : 400).json({
    code,
    message,
    ...(details !== undefined && { details }),
  });
}

/**
 * 分页响应
 * @param res Express 响应对象
 * @param list 数据列表
 * @param total 总条数
 * @param page 当前页码
 * @param pageSize 每页条数
 */
export function paginated(
  res: Response,
  list: unknown[],
  total: number,
  page: number,
  pageSize: number,
): void {
  res.json({
    code: 0,
    data: {
      list,
      total,
      page,
      pageSize,
    },
  });
}
