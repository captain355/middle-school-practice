import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function LoginPage() {
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username.trim() || !password.trim()) {
      setError('请填写用户名和密码');
      return;
    }
    if (password.length < 4) {
      setError('密码至少4位');
      return;
    }
    setSubmitting(true);
    try {
      const result = isRegister
        ? await register(username.trim(), password, displayName.trim())
        : await login(username.trim(), password);
      if (result.success) {
        navigate('/');
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err.message || '操作失败，请检查网络连接');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '80px auto', padding: '0 24px' }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
        {/* 标题区域 */}
        {!isRegister && (
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <h2 style={{
              fontSize: '1.5rem', fontWeight: 800, color: '#1E293B', margin: '0 0 6px 0',
              lineHeight: 1.4,
            }}>
              初中各学科知识体系
            </h2>
            <h2 style={{
              fontSize: '1.5rem', fontWeight: 800, margin: 0, lineHeight: 1.4,
              background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              专项练习
            </h2>
          </div>
        )}
        {isRegister && (
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, color: '#1E293B', marginBottom: 24 }}>
            注册账号
          </h2>
        )}
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>昵称</label>
              <input value={displayName} onChange={e => setDisplayName(e.target.value)} placeholder="你的昵称" style={inputStyle} />
            </div>
          )}
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>用户名</label>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="输入用户名" style={inputStyle} />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>密码</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="输入密码" style={inputStyle} />
          </div>
          {error && <div style={{ color: '#EF4444', fontSize: '0.875rem', marginBottom: 16 }}>{error}</div>}
          <button type="submit" style={{
            width: '100%', padding: '12px', borderRadius: 12, border: 'none',
            background: '#3B82F6', color: '#fff', fontSize: '1rem', fontWeight: 600, cursor: 'pointer',
          }}>
            {submitting ? '请稍候...' : isRegister ? '注册' : '登录'}
          </button>
        </form>
        <div style={{ textAlign: 'center', marginTop: 16 }}>
          <span style={{ fontSize: '0.875rem', color: '#64748B' }}>
            {isRegister ? '已有账号？' : '没有账号？'}
          </span>
          <button onClick={() => { setIsRegister(!isRegister); setError(''); }} style={{
            border: 'none', background: 'none', color: '#3B82F6', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 500,
          }}>
            {isRegister ? '去登录' : '去注册'}
          </button>
        </div>
      </div>
    </div>
  );
}

const labelStyle = { display: 'block', fontSize: '0.875rem', color: '#64748B', marginBottom: 6, fontWeight: 500 };
const inputStyle = { width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #E2E8F0', fontSize: '0.9375rem', outlineColor: '#3B82F6', boxSizing: 'border-box' };
