/**
 * 认证相关 API 模块
 * 处理用户登录、注册、令牌刷新等接口
 */

import { post } from './client';

/**
 * 登录/注册接口的响应数据结构
 */
export interface LoginResponse {
  /** 访问令牌，用于后续请求的身份验证 */
  accessToken: string;
  /** 刷新令牌，用于在访问令牌过期后获取新的访问令牌 */
  refreshToken: string;
  /** 用户基本信息 */
  user: {
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
  };
}

/**
 * 认证 API 对象
 * 封装所有与认证相关的远程调用
 */
export const authApi = {
  /**
   * 用户登录
   * @param username - 用户名
   * @param password - 密码
   * @returns 登录响应数据（包含 Token 和用户信息）
   */
  login: (username: string, password: string) =>
    post<LoginResponse>('/auth/login', { username, password }),

  /**
   * 用户注册
   * 注册成功后自动登录，返回与登录相同的响应数据
   * @param username - 用户名
   * @param password - 密码
   * @param displayName - 显示名称
   * @returns 注册响应数据（包含 Token 和用户信息）
   */
  register: (username: string, password: string, displayName: string) =>
    post<LoginResponse>('/auth/register', { username, password, displayName }),

  /**
   * 刷新访问令牌
   * 一般由 HTTP 客户端自动调用，外部通常不需要直接使用
   * @returns 包含新访问令牌的响应数据
   */
  refresh: () =>
    post<{ accessToken: string }>('/auth/refresh'),
};
