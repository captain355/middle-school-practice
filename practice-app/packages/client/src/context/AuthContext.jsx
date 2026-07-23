import { createContext, useContext, useState, useEffect } from 'react';
import { authApi, usersApi } from '../api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 从 localStorage 恢复 token 和用户信息
  useEffect(() => {
    const token = localStorage.getItem('practice_app_access_token');
    const savedUser = localStorage.getItem('practice_app_user');
    if (token && savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch {
        localStorage.removeItem('practice_app_access_token');
        localStorage.removeItem('practice_app_refresh_token');
        localStorage.removeItem('practice_app_user');
      }
    }
    setLoading(false);
  }, []);

  const login = async (username, password) => {
    try {
      const res = await authApi.login(username, password);
      if (!res.success) return { success: false, message: res.message || '用户名或密码错误' };
      // 存储 token 和用户信息
      localStorage.setItem('practice_app_access_token', res.data.accessToken);
      localStorage.setItem('practice_app_refresh_token', res.data.refreshToken);
      localStorage.setItem('practice_app_user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message || '登录失败，请检查网络连接' };
    }
  };

  const register = async (username, password, displayName) => {
    try {
      const res = await authApi.register(username, password, displayName);
      if (!res.success) return { success: false, message: res.message || '注册失败' };
      localStorage.setItem('practice_app_access_token', res.data.accessToken);
      localStorage.setItem('practice_app_refresh_token', res.data.refreshToken);
      localStorage.setItem('practice_app_user', JSON.stringify(res.data.user));
      setUser(res.data.user);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message || '注册失败，请检查网络连接' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('practice_app_access_token');
    localStorage.removeItem('practice_app_refresh_token');
    localStorage.removeItem('practice_app_user');
  };

  // 管理员操作 — 这些仍依赖 localStorage 中的本地用户列表
  // 后续将迁移到管理员 API
  const isAdmin = user?.role === 'admin';

  const deleteUser = (username) => {
    if (!isAdmin) return false;
    try {
      const users = JSON.parse(localStorage.getItem('practice_app_users') || '[]');
      const filtered = users.filter(u => u.username !== username);
      localStorage.setItem('practice_app_users', JSON.stringify(filtered));
      return true;
    } catch { return false; }
  };

  const toggleUserRole = (username) => {
    if (!isAdmin) return false;
    try {
      const users = JSON.parse(localStorage.getItem('practice_app_users') || '[]');
      const target = users.find(u => u.username === username);
      if (!target) return false;
      target.role = target.role === 'admin' ? 'user' : 'admin';
      localStorage.setItem('practice_app_users', JSON.stringify(users));
      if (username === user.username) {
        const updated = { ...user, role: target.role };
        setUser(updated);
        localStorage.setItem('practice_app_user', JSON.stringify(updated));
      }
      return true;
    } catch { return false; }
  };

  const resetUserPassword = (username, newPassword) => {
    if (!isAdmin) return false;
    try {
      const users = JSON.parse(localStorage.getItem('practice_app_users') || '[]');
      const target = users.find(u => u.username === username);
      if (!target) return false;
      target.password = newPassword;
      localStorage.setItem('practice_app_users', JSON.stringify(users));
      return true;
    } catch { return false; }
  };

  const toggleUserDisabled = (username) => {
    if (!isAdmin) return false;
    try {
      const users = JSON.parse(localStorage.getItem('practice_app_users') || '[]');
      const target = users.find(u => u.username === username);
      if (!target) return false;
      target.disabled = !target.disabled;
      localStorage.setItem('practice_app_users', JSON.stringify(users));
      return true;
    } catch { return false; }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAdmin, deleteUser, toggleUserRole, resetUserPassword, toggleUserDisabled }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
