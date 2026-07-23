/**
 * 用户相关 API 模块
 * 提供用户信息获取、密码修改等接口
 */

import { get, put } from './client';

/**
 * 用户资料数据结构
 */
export interface UserProfile {
  /** 用户唯一标识 */
  id: string;
  /** 用户名（登录账号） */
  username: string;
  /** 显示名称 */
  displayName: string;
  /** 用户角色 */
  role: string;
  /** 账号是否被禁用 */
  isDisabled: boolean;
  /** 所属学校 ID（可选） */
  schoolId?: string;
  /** 所属班级 ID（可选） */
  classId?: string;
  /** 年级（可选） */
  grade?: number;
  /** 账号创建时间 */
  createdAt: string;
}

/**
 * 用户 API 对象
 * 封装所有与用户相关的远程调用
 */
export const usersApi = {
  /**
   * 获取当前登录用户的资料
   * @returns 用户资料
   */
  getMe: () =>
    get<UserProfile>('/users/me'),

  /**
   * 修改当前用户密码
   * @param oldPassword - 旧密码
   * @param newPassword - 新密码
   * @returns 操作结果
   */
  changePassword: (oldPassword: string, newPassword: string) =>
    put('/users/me/password', { oldPassword, newPassword }),
};
