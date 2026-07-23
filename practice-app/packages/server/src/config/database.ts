import { PrismaClient } from '@prisma/client';

// Prisma 客户端单例
let prismaInstance: PrismaClient | null = null;

function getPrismaClient(): PrismaClient {
  if (!prismaInstance) {
    prismaInstance = new PrismaClient();
    console.log('Database connected');
  }
  return prismaInstance;
}

// 导出 prisma 实例
export const prisma = getPrismaClient();
