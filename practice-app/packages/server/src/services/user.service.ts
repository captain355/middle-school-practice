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
  isDisabled: boolean;
  lastLoginAt: Date | null;
  createdAt: Date;
  school?: { id: string; name: string } | null;
  studentClass?: { id: string; name: string; grade: number } | null;
};

/**
 * 根据ID查找用户
 */
export async function findById(id: string): Promise<UserDetail | null> {
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true, username: true, displayName: true, role: true, avatar: true,
      schoolId: true, classId: true, grade: true, isDisabled: true,
      lastLoginAt: true, createdAt: true,
      studentClass: { select: { id: true, name: true, grade: true } },
    },
  });
  return user;
}

/**
 * 获取当前用户详情（含学校和班级信息）
 */
export async function getMe(userId: string): Promise<UserDetail> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true, username: true, displayName: true, role: true, avatar: true,
      schoolId: true, classId: true, grade: true, isDisabled: true,
      lastLoginAt: true, createdAt: true,
      studentClass: {
        select: {
          id: true, name: true, grade: true,
          school: { select: { id: true, name: true } },
        },
      },
    },
  });
  if (!user) throw new Error('用户不存在');
  return user as UserDetail;
}

/**
 * 获取所有用户列表（管理员用）
 */
export async function getAllUsers(): Promise<UserDetail[]> {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'asc' },
    select: {
      id: true, username: true, displayName: true, role: true, avatar: true,
      schoolId: true, classId: true, grade: true, isDisabled: true,
      lastLoginAt: true, createdAt: true,
      studentClass: { select: { id: true, name: true, grade: true } },
    },
  });
  return users as UserDetail[];
}

/**
 * 修改用户密码（用户自己修改）
 */
export async function updatePassword(id: string, oldPassword: string, newPassword: string): Promise<void> {
  const user = await prisma.user.findUnique({ where: { id }, select: { passwordHash: true } });
  if (!user) throw new Error('用户不存在');
  const isValid = await comparePassword(oldPassword, user.passwordHash);
  if (!isValid) throw new Error('旧密码不正确');
  const newHash = await hashPassword(newPassword);
  await prisma.user.update({ where: { id }, data: { passwordHash: newHash } });
}

/**
 * 管理员重置用户密码
 */
export async function resetUserPassword(userId: string, newPassword: string): Promise<void> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('用户不存在');
  const newHash = await hashPassword(newPassword);
  await prisma.user.update({ where: { id: userId }, data: { passwordHash: newHash } });
}

/**
 * 管理员修改用户角色
 */
export async function updateUserRole(userId: string, newRole: string): Promise<void> {
  if (!['admin', 'student', 'teacher'].includes(newRole)) {
    throw new Error('无效的角色');
  }
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('用户不存在');
  await prisma.user.update({ where: { id: userId }, data: { role: newRole } });
}

/**
 * 管理员停用/启用用户
 */
export async function toggleUserDisabled(userId: string): Promise<void> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('用户不存在');
  await prisma.user.update({ where: { id: userId }, data: { isDisabled: !user.isDisabled } });
}

/**
 * 管理员删除用户
 */
export async function deleteUser(userId: string): Promise<void> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) throw new Error('用户不存在');
  await prisma.user.delete({ where: { id: userId } });
}

/**
 * 更新用户资料
 */
export async function updateProfile(userId: string, data: { displayName?: string; avatar?: string }): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data: {
      ...(data.displayName && { displayName: data.displayName }),
      ...(data.avatar !== undefined && { avatar: data.avatar }),
    },
  });
}
