import { prisma } from '../config/database.js';

/**
 * 获取所有学校列表
 */
export async function getAllSchools() {
  return prisma.school.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      _count: { select: { classes: true, users: true } },
    },
  });
}

/**
 * 获取学校详情（含班级列表）
 */
export async function getSchoolById(id: string) {
  return prisma.school.findUnique({
    where: { id },
    include: {
      classes: {
        include: {
          _count: { select: { students: true } },
          teacher: { select: { id: true, username: true, displayName: true } },
        },
        orderBy: { grade: 'asc' },
      },
      _count: { select: { users: true } },
    },
  });
}

/**
 * 创建学校
 */
export async function createSchool(data: { name: string; code?: string; address?: string; contactName?: string; contactPhone?: string; maxStudents?: number }) {
  return prisma.school.create({ data });
}

/**
 * 更新学校信息
 */
export async function updateSchool(id: string, data: { name?: string; code?: string; address?: string; contactName?: string; contactPhone?: string; maxStudents?: number; isActive?: boolean }) {
  const school = await prisma.school.findUnique({ where: { id } });
  if (!school) throw new Error('学校不存在');
  return prisma.school.update({ where: { id }, data });
}

/**
 * 删除学校
 */
export async function deleteSchool(id: string) {
  const school = await prisma.school.findUnique({ where: { id } });
  if (!school) throw new Error('学校不存在');
  return prisma.school.delete({ where: { id } });
}

/**
 * 获取学校的所有班级
 */
export async function getClassesBySchool(schoolId: string) {
  return prisma.class.findMany({
    where: { schoolId },
    orderBy: { grade: 'asc' },
    include: {
      _count: { select: { students: true } },
      teacher: { select: { id: true, username: true, displayName: true } },
    },
  });
}

/**
 * 创建班级
 */
export async function createClass(data: { schoolId: string; name: string; grade: number; teacherId?: string }) {
  return prisma.class.create({ data });
}

/**
 * 更新班级信息
 */
export async function updateClass(id: string, data: { name?: string; grade?: number; teacherId?: string | null }) {
  const cls = await prisma.class.findUnique({ where: { id } });
  if (!cls) throw new Error('班级不存在');
  return prisma.class.update({ where: { id }, data });
}

/**
 * 删除班级
 */
export async function deleteClass(id: string) {
  const cls = await prisma.class.findUnique({ where: { id } });
  if (!cls) throw new Error('班级不存在');
  return prisma.class.delete({ where: { id } });
}

/**
 * 将用户分配到班级
 */
export async function assignUserToClass(userId: string, classId: string) {
  return prisma.user.update({
    where: { id: userId },
    data: { classId, grade: undefined }, // grade 由 class 推断
  });
}

/**
 * 将用户从班级中移除
 */
export async function removeUserFromClass(userId: string) {
  return prisma.user.update({
    where: { id: userId },
    data: { classId: null },
  });
}
