import { prisma } from '../config/database.js';
import { comparePassword, hashPassword } from '../utils/password.js';

// 用户详细信息类型
type UserDetail = {
  id: string;
  username: string;
  displayName: string;
  role: string;
  avatar: string | null;
 schoolId: string | null;
  classId: string | null;
  grade: number | null;
 createdAt: Date;
};

/**
 * 根据ID查找用户
 * @param id 用户ID
 * @returns 用户信息，不存在则返回 null
 */
export async function findById(id: string): Promise<UserDetail | null> {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      username: true,
      displayName: true,
      role: true,
      avatar: true,
      schoolId: true,
      classId: true,
      grade: true,
      createdAt: true,
    },
  });
  return user;
}

/**
 * 获取当前用户详情（含学校和班级信息）
 * @param userId 用户ID
 * @returns 用户详细信息
 */
export async function getMe(userId: string): Promise<Record<string, unknown>> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      username: true,
      displayName: true,
      role: true,
      avatar: true,
      schoolId: true,
      classId: true,
      grade: true,
      isDisabled: true,
      lastLoginAt: true,
      createdAt: true,
      studentClass: {
        select: {
          id: true,
          name: true,
          grade: true,
          school: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    throw new Error('用户不存在');
  }

  return user as unknown as Record<string, unknown>;
}

/**
 * 修改用户密码
 * @param id 用户ID
 * @param oldPassword 旧密码
 * @param newPassword 新密码
 */
export async function updatePassword(
  id: string,
  oldPassword: string,
  newPassword: string,
): Promise<void> {
  // 查找用户并获取密码哈希
  const user = await prisma.user.findUnique({
    where: { id },
    select: { passwordHash: true },
  });

  if (!user) {
    throw new Error('用户不存在');
  }

  // 验证旧密码
  const isValid = await comparePassword(oldPassword, user.passwordHash);
  if (!isValid) {
    throw new Error('旧密码不正确');
  }

  // 加密新密码并更新
  const newHash = await hashPassword(newPassword);
  await prisma.user.update({
    where: { id },
    data: { passwordHash: newHash },
  });
}
