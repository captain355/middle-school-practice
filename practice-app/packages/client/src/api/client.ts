/**
 * HTTP 客户端封装模块
 * 提供统一的请求方法，自动处理 Token 注入、刷新和错误重试
 */

// 从环境变量读取后端 API 地址，默认使用本地开发地址
const BASE_URL: string = import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1';

// localStorage 中存储 Token 的键名
const ACCESS_TOKEN_KEY = 'practice_app_access_token';
const REFRESH_TOKEN_KEY = 'practice_app_refresh_token';

// 标记是否正在刷新 Token，防止并发刷新请求
let isRefreshing = false;

// 等待 Token 刷新完成的请求队列
let pendingRequests: Array<{ resolve: () => void; reject: (reason?: unknown) => void }> = [];

/**
 * 从 localStorage 获取访问令牌
 */
function getAccessToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

/**
 * 从 localStorage 获取刷新令牌
 */
function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

/**
 * 将访问令牌存入 localStorage
 */
function setAccessToken(token: string): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

/**
 * 将刷新令牌存入 localStorage
 */
function setRefreshToken(token: string): void {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
}

/**
 * 清除本地存储的所有 Token
 */
function clearTokens(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

/**
 * 通用 HTTP 请求函数
 * @param method - HTTP 方法（GET / POST / PUT / DELETE）
 * @param path - 请求路径（相对于 BASE_URL）
 * @param data - 请求体数据（GET 请求时不传）
 * @param retryCount - 当前请求已重试次数（内部使用，外部不要传）
 * @returns 解析后的 JSON 响应数据
 */
async function request<T = unknown>(
  method: string,
  path: string,
  data?: unknown,
  retryCount: number = 0,
): Promise<T> {
  // 拼接完整请求地址
  const url = `${BASE_URL}${path}`;

  // 构建请求头
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  // 自动附加 Authorization 请求头
  const token = getAccessToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  // 构建请求配置
  const options: RequestInit = {
    method,
    headers,
  };

  // GET / HEAD 请求不发送请求体
  if (data !== undefined && method !== 'GET' && method !== 'HEAD') {
    options.body = JSON.stringify(data);
  }

  // 发起请求
  const response = await fetch(url, options);

  // 请求失败时抛出错误
  if (!response.ok) {
    // 401 未授权，尝试刷新 Token
    if (response.status === 401 && retryCount === 0) {
      const refreshed = await tryRefreshToken();
      if (refreshed) {
        // 刷新成功，使用新 Token 重新发起原始请求（重试次数 +1 防止死循环）
        return request<T>(method, path, data, retryCount + 1);
      } else {
        // 刷新失败，清除 Token 并跳转到登录页
        clearTokens();
        window.location.href = '/login';
        throw new Error('登录已过期，请重新登录');
      }
    }

    // 其他错误，尝试读取错误信息
    let errorMsg = `请求失败: ${response.status} ${response.statusText}`;
    try {
      const errorData = await response.json();
      if (errorData.message) {
        errorMsg = errorData.message;
      }
    } catch {
      // 无法解析错误响应体，使用默认错误信息
    }
    throw new Error(errorMsg);
  }

  // 204 No Content 不返回数据
  if (response.status === 204) {
    return undefined as T;
  }

  // 解析 JSON 响应（后端统一格式 { code, message, data }，自动解包 data 字段）
  const json = await response.json();
  if (json && typeof json === 'object' && 'code' in json && 'data' in json) {
    return json.data as T;
  }
  return json as T;
}

/**
 * 尝试使用刷新令牌获取新的访问令牌
 * @returns 刷新是否成功
 */
async function tryRefreshToken(): Promise<boolean> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    return false;
  }

  // 如果已经在刷新中，等待刷新完成后返回结果（防止并发刷新）
  if (isRefreshing) {
    return new Promise<boolean>((resolve, reject) => {
      pendingRequests.push({ resolve: () => resolve(true), reject });
    });
  }

  isRefreshing = true;

  try {
    // 发送刷新请求（注意：此请求使用原始 refresh token，不走 request 方法，避免递归）
    const response = await fetch(`${BASE_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${refreshToken}`,
      },
      body: JSON.stringify({}),
    });

    if (!response.ok) {
      // 刷新失败，清除所有 Token
      clearTokens();
      return false;
    }

    const result = await response.json();

    // 保存新的 Token
    if (result.accessToken) {
      setAccessToken(result.accessToken);
    }
    if (result.refreshToken) {
      setRefreshToken(result.refreshToken);
    }

    // 通知所有等待中的请求，刷新已完成
    pendingRequests.forEach((p) => p.resolve());
    pendingRequests = [];

    return true;
  } catch {
    // 刷新请求异常，清除 Token
    clearTokens();
    pendingRequests.forEach((p) => p.reject(new Error('Token 刷新失败')));
    pendingRequests = [];
    return false;
  } finally {
    isRefreshing = false;
  }
}

/**
 * GET 请求快捷方法
 * @param path - 请求路径
 * @returns 解析后的 JSON 响应数据
 */
export function get<T = unknown>(path: string): Promise<T> {
  return request<T>('GET', path);
}

/**
 * POST 请求快捷方法
 * @param path - 请求路径
 * @param data - 请求体数据
 * @returns 解析后的 JSON 响应数据
 */
export function post<T = unknown>(path: string, data?: unknown): Promise<T> {
  return request<T>('POST', path, data);
}

/**
 * PUT 请求快捷方法
 * @param path - 请求路径
 * @param data - 请求体数据
 * @returns 解析后的 JSON 响应数据
 */
export function put<T = unknown>(path: string, data?: unknown): Promise<T> {
  return request<T>('PUT', path, data);
}

/**
 * DELETE 请求快捷方法
 * @param path - 请求路径
 * @returns 解析后的 JSON 响应数据
 */
export function del<T = unknown>(path: string): Promise<T> {
  return request<T>('DELETE', path);
}
