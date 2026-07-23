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
      const data = await authApi.login(username, password);
      // client.ts 已自动解包 data 字段，直接拿到 { accessToken, refreshToken, user }
      localStorage.setItem('practice_app_access_token', data.accessToken);
      localStorage.setItem('practice_app_refresh_token', data.refreshToken);
      localStorage.setItem('practice_app_user', JSON.stringify(data.user));
      setUser(data.user);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message || '登录失败，请检查网络连接' };
    }
  };

  const register = async (username, password, displayName) => {
    try {
      const data = await authApi.register(username, password, displayName);
      // client.ts 已自动解包 data 字段
      localStorage.setItem('practice_app_access_token', data.accessToken);
      localStorage.setItem('practice_app_refresh_token', data.refreshToken);
      localStorage.setItem('practice_app_user', JSON.stringify(data.user));
      setUser(data.user);
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

  // 管理员标识
  const isAdmin = user?.role === 'admin';

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
