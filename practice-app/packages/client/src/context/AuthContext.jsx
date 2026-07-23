import { createContext, useContext, useState, useEffect } from 'react';
import { getUsers, saveUsers, getCurrentUser, setCurrentUser, clearCurrentUser } from '../utils/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = getCurrentUser();
    if (saved) {
      // 兼容旧用户数据：没有 role 字段时补全
      if (!saved.role) {
        const users = getUsers();
        const fullUser = users.find(u => u.username === saved.username);
        if (fullUser) {
          if (!fullUser.role) {
            fullUser.role = users[0]?.username === fullUser.username ? 'admin' : 'user';
            saveUsers(users);
          }
          setUser(fullUser);
          setCurrentUser(fullUser);
        } else {
          setUser(saved);
        }
      } else {
        setUser(saved);
      }
    }
    setLoading(false);
  }, []);

  const login = (username, password) => {
    const users = getUsers();
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) return { success: false, message: '用户名或密码错误' };
    // 检查账号是否被停用
    if (found.disabled) return { success: false, message: '该账号已被停用，请联系管理员' };
    // 兼容旧用户数据：如果没有 role 字段，第一个用户默认为管理员
    if (!found.role) {
      found.role = users[0]?.username === found.username ? 'admin' : 'user';
      saveUsers(users);
    }
    setUser(found);
    setCurrentUser(found);
    return { success: true };
  };

  const register = (username, password, displayName) => {
    const users = getUsers();
    if (users.find(u => u.username === username)) {
      return { success: false, message: '用户名已存在' };
    }
    // 第一个注册的用户自动成为管理员
    const role = users.length === 0 ? 'admin' : 'user';
    const newUser = { username, password, displayName: displayName || username, role, createdAt: Date.now() };
    users.push(newUser);
    saveUsers(users);
    setUser(newUser);
    setCurrentUser(newUser);
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    clearCurrentUser();
  };

  // 管理员操作
  const isAdmin = user?.role === 'admin';

  const deleteUser = (username) => {
    if (!isAdmin) return false;
    const users = getUsers().filter(u => u.username !== username);
    saveUsers(users);
    return true;
  };

  const toggleUserRole = (username) => {
    if (!isAdmin) return false;
    const users = getUsers();
    const target = users.find(u => u.username === username);
    if (!target) return false;
    target.role = target.role === 'admin' ? 'user' : 'admin';
    saveUsers(users);
    // 如果修改的是当前用户，更新 context
    if (username === user.username) {
      setUser({ ...user, role: target.role });
      setCurrentUser({ ...user, role: target.role });
    }
    return true;
  };

  const resetUserPassword = (username, newPassword) => {
    if (!isAdmin) return false;
    const users = getUsers();
    const target = users.find(u => u.username === username);
    if (!target) return false;
    target.password = newPassword;
    saveUsers(users);
    return true;
  };

  const toggleUserDisabled = (username) => {
    if (!isAdmin) return false;
    const users = getUsers();
    const target = users.find(u => u.username === username);
    if (!target) return false;
    target.disabled = !target.disabled;
    saveUsers(users);
    return true;
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