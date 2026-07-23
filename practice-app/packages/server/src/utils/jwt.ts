import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

// JWT 载荷类型
type JwtPayload = {
  userId: string;
  role: string;
};

/**
 * 签发访问令牌
 * @param userId 用户ID
 * @param role 用户角色
 * @returns 访问令牌字符串
 */
export function signAccessToken(userId: string, role: string): string {
  return jwt.sign(
    { userId, role } as JwtPayload,
    env.JWT_SECRET,
    { expiresIn: env.JWT_ACCESS_EXPIRES_IN } as jwt.SignOptions,
  );
}

/**
 * 签发刷新令牌
 * @param userId 用户ID
 * @returns 刷新令牌字符串
 */
export function signRefreshToken(userId: string): string {
  return jwt.sign(
    { userId } as JwtPayload,
    env.JWT_SECRET,
    { expiresIn: env.JWT_REFRESH_EXPIRES_IN } as jwt.SignOptions,
  );
}

/**
 * 验证令牌并返回载荷
 * @param token JWT 令牌字符串
 * @returns 载荷对象，验证失败返回 null
 */
export function verifyToken(token: string): JwtPayload | null {
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as JwtPayload;
    return {
      userId: decoded.userId,
      role: decoded.role,
    };
  } catch {
    // 令牌无效或已过期
    return null;
  }
}
