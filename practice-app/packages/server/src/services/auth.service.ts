import { prisma } from '../config/database.js';
import { comparePassword, hashPassword } from '../utils/password.js';
import { signAccessToken, signRefreshToken, verifyToken } from '../utils/jwt.js';

// 登录返回结构
type LoginResult = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    username: string;
    displayName: string;
    role: string;
    avatar: string | null;
  };
};

/**
 * 用户登录
 * @param username 用户名
 * @param password 密码
 * @returns 登录结果（令牌和用户信息）
 */
export async function login(username: string, password: string): Promise<LoginResult> {
  // 查找用户
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) {
    throw new Error('用户名或密码错误');
  }

  // 检查账号是否被禁用
  if (user.isDisabled) {
    throw new Error('账号已被禁用，请联系管理员');
  }

  // 验证密码
  const isValid = await comparePassword(password, user.passwordHash);
  if (!isValid) {
    throw new Error('用户名或密码错误');
  }

  // 更新最后登录时间
  await prisma.user.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  });

  // 签发令牌
  const accessToken = signAccessToken(user.id, user.role);
  const refreshToken = signRefreshToken(user.id);

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      role: user.role,
      avatar: user.avatar,
    },
  };
}

/**
 * 用户注册
 * @param username 用户名
 * @param password 密码
 * @param displayName 显示名称
 * @returns 注册结果（令牌和用户信息）
 */
export async function register(
  username: string,
  password: string,
  displayName: string,
): Promise<LoginResult> {
  // 检查用户名是否已存在
  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing) {
    throw new Error('用户名已被占用');
  }

  // 判断是否为第一个注册用户（自动成为管理员）
  const userCount = await prisma.user.count();
  const role = userCount === 0 ? 'admin' : 'student';

  // 加密密码
  const passwordHash = await hashPassword(password);

  // 创建用户
  const user = await prisma.user.create({
    data: {
      username,
      passwordHash,
      displayName,
      role,
    },
  });

  // 签发令牌
  const accessToken = signAccessToken(user.id, user.role);
  const refreshToken = signRefreshToken(user.id);

  return {
    accessToken,
    refreshToken,
    user: {
      id: user.id,
      username: user.username,
      displayName: user.displayName,
      role: user.role,
      avatar: user.avatar,
    },
  };
}

/**
 * 刷新访问令牌
 * @param token 刷新令牌
 * @returns 新的访问令牌
 */
export async function refreshToken(token: string): Promise<{ accessToken: string }> {
  // 验证刷新令牌
  const payload = verifyToken(token);
  if (!payload) {
    throw new Error('刷新令牌无效或已过期');
  }

  // 确认用户存在
  const user = await prisma.user.findUnique({ where: { id: payload.userId } });
  if (!user) {
    throw new Error('用户不存在');
  }

  if (user.isDisabled) {
    throw new Error('账号已被禁用');
  }

  // 签发新的访问令牌
  const accessToken = signAccessToken(user.id, user.role);

  return { accessToken };
}
