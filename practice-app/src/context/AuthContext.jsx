import { createContext, useContext, useState, useEffect } from 'react';
import { getUsers, saveUsers, getCurrentUser, setCurrentUser, clearCurrentUser } from '../utils/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = getCurrentUser();
    if (saved) setUser(saved);
    setLoading(false);
  }, []);

  const login = (username, password) => {
    const users = getUsers();
    const found = users.find(u => u.username === username && u.password === password);
    if (!found) return { success: false, message: '用户名或密码错误' };
    setUser(found);
    setCurrentUser(found);
    return { success: true };
  };

  const register = (username, password, displayName) => {
    const users = getUsers();
    if (users.find(u => u.username === username)) {
      return { success: false, message: '用户名已存在' };
    }
    const newUser = { username, password, displayName: displayName || username, createdAt: Date.now() };
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

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}