import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { authRoutes } from './auth.routes.js';
import { userRoutes } from './user.routes.js';
import { subjectRoutes } from './subject.routes.js';
import { practiceRoutes } from './practice.routes.js';
import { schoolRoutes } from './school.routes.js';

const routes = Router();

// 认证路由（公开）
routes.use('/api/v1/auth', authRoutes);

// 学科路由（公开）
routes.use('/api/v1/subjects', subjectRoutes);

// 学校/班级路由（需要认证，写操作需要管理员权限）
routes.use('/api/v1', authenticate, schoolRoutes);

// 用户路由（需要认证）
routes.use('/api/v1/users', authenticate, userRoutes);

// 练习路由（需要认证）
routes.use('/api/v1/practice', authenticate, practiceRoutes);

export { routes };
