/**
 * 用户相关 API 模块
 * 提供用户信息获取、密码修改、管理员用户管理等接口
 */

import { get, put, post, del } from './client';

/**
 * 用户资料数据结构
 */
export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  role: string;
  avatar: string | null;
  isDisabled: boolean;
  schoolId: string | null;
  classId: string | null;
  grade: number | null;
  lastLoginAt: string | null;
  createdAt: string;
  studentClass?: { id: string; name: string; grade: number } | null;
  school?: { id: string; name: string } | null;
}

/**
 * 用户 API 对象
 */
export const usersApi = {
  /** 获取当前登录用户的资料 */
  getMe: () =>
    get<UserProfile>('/users/me'),

  /** 修改当前用户密码 */
  changePassword: (oldPassword: string, newPassword: string) =>
    put('/users/me/password', { oldPassword, newPassword }),

  /** 更新当前用户资料 */
  updateProfile: (data: { displayName?: string; avatar?: string }) =>
    put('/users/me/profile', data),

  // ---- 管理员接口 ----

  /** 获取所有用户列表 */
  list: () =>
    get<UserProfile[]>('/users/admin/users'),

  /** 管理员重置用户密码 */
  resetPassword: (userId: string, newPassword: string) =>
    post(`/users/admin/users/${userId}/reset-password`, { newPassword }),

  /** 管理员修改用户角色 */
  updateRole: (userId: string, role: string) =>
    put(`/users/admin/users/${userId}/role`, { role }),

  /** 管理员停用/启用用户 */
  toggleDisabled: (userId: string) =>
    put(`/users/admin/users/${userId}/toggle-disabled`),

  /** 管理员删除用户 */
  deleteUser: (userId: string) =>
    del(`/users/admin/users/${userId}`),
};
