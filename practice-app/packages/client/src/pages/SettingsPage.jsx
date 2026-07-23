import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { exportAsJSON, importFromJSON, clearAllData, getDataSummary } from '../utils/exportImport';
import { getUsers } from '../utils/storage';

export default function SettingsPage() {
  const { user, logout, isAdmin, deleteUser, toggleUserRole, resetUserPassword, toggleUserDisabled } = useAuth();
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const [importStatus, setImportStatus] = useState(null);
  const [summary, setSummary] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [resetPwdTarget, setResetPwdTarget] = useState(null);
  const [newPassword, setNewPassword] = useState('');
  const [adminMsg, setAdminMsg] = useState(null);

  // 进入页面时自动加载数据概览
  useEffect(() => {
    if (user) {
      setSummary(getDataSummary());
      if (isAdmin) {
        setAllUsers(getUsers());
      }
    }
  }, [user, isAdmin]);

  const handleExport = () => {
    try {
      exportAsJSON();
      setImportStatus({ type: 'success', message: '数据已成功导出为 JSON 文件，请查收下载' });
    } catch (err) {
      setImportStatus({ type: 'error', message: '导出失败：' + err.message });
    }
  };

  const handleImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const count = await importFromJSON(file);
      setImportStatus({ type: 'success', message: `成功导入 ${count} 条数据。请重新登录以刷新用户状态。` });
      setSummary(getDataSummary());
    } catch (err) {
      setImportStatus({ type: 'error', message: err.message });
    }
    e.target.value = '';
  };

  const handleClear = () => {
    if (!confirm('确定要清除所有数据吗？包括用户账号、练习记录、错题本、学习进度等，此操作不可恢复！')) return;
    if (!confirm('再次确认：真的要清除所有数据吗？')) return;
    clearAllData();
    logout();
    navigate('/login');
  };

  // 管理员操作
  const handleDeleteUser = (username) => {
    if (username === user.username) {
      setAdminMsg({ type: 'error', message: '不能删除当前登录的管理员账号' });
      return;
    }
    if (!confirm(`确定要删除用户"${username}"吗？该用户的所有数据（练习记录、错题本等）将保留。`)) return;
    deleteUser(username);
    setAllUsers(getUsers());
    setAdminMsg({ type: 'success', message: `已删除用户"${username}"` });
  };

  const handleToggleRole = (username, currentRole) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';
    if (username === user.username && newRole === 'user') {
      // 如果把当前管理员降为普通用户，需要确认
      if (!confirm('将你的账号从管理员降为普通用户后，需要重新登录才能生效。确定继续吗？')) return;
    }
    toggleUserRole(username);
    setAllUsers(getUsers());
    setAdminMsg({ type: 'success', message: `已将"${username}"的角色变更为${newRole === 'admin' ? '管理员' : '普通用户'}` });
    if (username === user.username && newRole === 'user') {
      setTimeout(() => { logout(); navigate('/login'); }, 1500);
    }
  };

  const handleResetPwd = () => {
    if (!resetPwdTarget || !newPassword.trim()) return;
    if (newPassword.length < 4) {
      setAdminMsg({ type: 'error', message: '密码至少4位' });
      return;
    }
    resetUserPassword(resetPwdTarget, newPassword.trim());
    setAdminMsg({ type: 'success', message: `已重置用户"${resetPwdTarget}"的密码` });
    setResetPwdTarget(null);
    setNewPassword('');
  };

  const handleToggleDisabled = (username, displayName, isCurrentlyDisabled) => {
    if (username === user.username) {
      setAdminMsg({ type: 'error', message: '不能停用当前登录的管理员账号' });
      return;
    }
    const action = isCurrentlyDisabled ? '启用' : '停用';
    if (!confirm(`确定要${action}用户"${displayName}"吗？${isCurrentlyDisabled ? '启用后该用户可以正常登录。' : '停用后该用户将无法登录，但数据会保留。'}`)) return;
    toggleUserDisabled(username);
    setAllUsers(getUsers());
    setAdminMsg({ type: 'success', message: `已${action}用户"${displayName}"` });
  };

  if (!user) return (
    <div style={{ maxWidth: 700, margin: '80px auto', padding: '0 24px', textAlign: 'center', color: '#94A3B8' }}>
      请先登录
    </div>
  );

  const cardStyle = { padding: 24, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 16 };

  return (
    <div style={{ maxWidth: 700, margin: '40px auto', padding: '0 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B', margin: 0 }}>数据管理</h1>
        {isAdmin && (
          <span style={{ padding: '2px 10px', borderRadius: 6, fontSize: '0.75rem', background: '#FEF3C7', color: '#92400E', fontWeight: 600 }}>管理员</span>
        )}
      </div>

      {/* 当前用户信息 */}
      <div style={cardStyle}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', marginBottom: 12 }}>当前用户</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%', background: '#EFF6FF',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem',
          }}>👤</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600, color: '#1E293B' }}>{user.displayName || user.username}</div>
            <div style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>
              用户名：{user.username}
              {isAdmin && <span style={{ marginLeft: 12, color: '#F59E0B' }}>管理员</span>}
            </div>
          </div>
          <button onClick={() => { logout(); navigate('/login'); }} style={{
            padding: '8px 16px', borderRadius: 8, border: '1px solid #E2E8F0',
            background: '#fff', color: '#64748B', fontSize: '0.8125rem', cursor: 'pointer',
          }}>退出登录</button>
        </div>
      </div>

      {/* 用户管理（仅管理员可见） */}
      {isAdmin && (
        <div style={cardStyle}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', marginBottom: 8 }}>用户管理</h3>
          <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 16 }}>
            管理所有注册用户：查看信息、修改角色、重置密码、删除账号
          </p>

          {adminMsg && (
            <div style={{
              padding: 12, borderRadius: 8, marginBottom: 16,
              background: adminMsg.type === 'success' ? '#F0FDF4' : '#FEF2F2',
              border: `1px solid ${adminMsg.type === 'success' ? '#BBF7D0' : '#FECACA'}`,
              color: adminMsg.type === 'success' ? '#15803D' : '#DC2626',
              fontSize: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span>{adminMsg.message}</span>
              <button onClick={() => setAdminMsg(null)} style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer', fontSize: '0.8125rem' }}>✕</button>
            </div>
          )}

          {/* 重置密码弹窗 */}
          {resetPwdTarget && (
            <div style={{ padding: 16, marginBottom: 16, background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 12 }}>
              <div style={{ fontWeight: 600, color: '#92400E', marginBottom: 8 }}>重置密码 - {resetPwdTarget}</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  placeholder="输入新密码（至少4位）"
                  style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '1px solid #E2E8F0', fontSize: '0.9375rem', outline: 'none' }}
                  onKeyDown={e => { if (e.key === 'Enter') handleResetPwd(); }}
                />
                <button onClick={handleResetPwd} style={{
                  padding: '8px 16px', borderRadius: 8, border: 'none',
                  background: '#F59E0B', color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.875rem',
                }}>确认重置</button>
                <button onClick={() => { setResetPwdTarget(null); setNewPassword(''); }} style={{
                  padding: '8px 16px', borderRadius: 8, border: '1px solid #E2E8F0',
                  background: '#fff', color: '#64748B', cursor: 'pointer', fontSize: '0.875rem',
                }}>取消</button>
              </div>
            </div>
          )}

          {/* 用户列表 */}
          {allUsers.length === 0 ? (
            <div style={{ padding: 32, textAlign: 'center', color: '#94A3B8' }}>暂无注册用户</div>
          ) : (
            <div style={{ display: 'grid', gap: 8 }}>
              {allUsers.map(u => (
                <div key={u.username} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: 14,
                  background: u.disabled ? '#F9FAFB' : u.username === user.username ? '#F0F9FF' : '#F8FAFC',
                  borderRadius: 10,
                  border: u.disabled ? '1px solid #E5E7EB' : u.username === user.username ? '1px solid #BAE6FD' : '1px solid #E2E8F0',
                  opacity: u.disabled ? 0.7 : 1,
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: u.disabled ? '#F3F4F6' : u.role === 'admin' ? '#FEF3C7' : '#EFF6FF',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem',
                    color: u.disabled ? '#9CA3AF' : u.role === 'admin' ? '#92400E' : '#3B82F6',
                    fontWeight: 700, position: 'relative',
                  }}>
                    {u.role === 'admin' ? '盾' : '人'}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, color: u.disabled ? '#9CA3AF' : '#1E293B', fontSize: '0.9375rem' }}>
                      {u.displayName || u.username}
                      {u.username === user.username && <span style={{ fontSize: '0.75rem', color: '#3B82F6', marginLeft: 8 }}>(当前)</span>}
                      {u.disabled && <span style={{ fontSize: '0.75rem', color: '#EF4444', marginLeft: 8, fontWeight: 500 }}>已停用</span>}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: 2 }}>
                      @{u.username} · {u.role === 'admin' ? '管理员' : '普通用户'}
                      · 注册于 {u.createdAt ? new Date(u.createdAt).toLocaleDateString('zh-CN') : '未知'}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                    <button
                      onClick={() => handleToggleRole(u.username, u.role)}
                      title={u.role === 'admin' ? '降为普通用户' : '升为管理员'}
                      disabled={u.disabled}
                      style={{
                        padding: '6px 10px', borderRadius: 6, fontSize: '0.75rem', cursor: u.disabled ? 'not-allowed' : 'pointer',
                        border: `1px solid ${u.role === 'admin' ? '#F59E0B' : '#3B82F6'}`,
                        background: u.disabled ? '#F3F4F6' : u.role === 'admin' ? '#FFFBEB' : '#EFF6FF',
                        color: u.disabled ? '#9CA3AF' : u.role === 'admin' ? '#92400E' : '#1D4ED8',
                        opacity: u.disabled ? 0.5 : 1,
                      }}
                    >
                      {u.role === 'admin' ? '降级' : '升级'}
                    </button>
                    <button
                      onClick={() => { setResetPwdTarget(u.username); setNewPassword(''); setAdminMsg(null); }}
                      disabled={u.disabled}
                      style={{
                        padding: '6px 10px', borderRadius: 6, fontSize: '0.75rem', cursor: u.disabled ? 'not-allowed' : 'pointer',
                        border: '1px solid #E2E8F0', background: '#fff', color: u.disabled ? '#9CA3AF' : '#475569',
                        opacity: u.disabled ? 0.5 : 1,
                      }}
                    >
                      重置密码
                    </button>
                    {u.username !== user.username && (
                      <button
                        onClick={() => handleToggleDisabled(u.username, u.displayName || u.username, !!u.disabled)}
                        style={{
                          padding: '6px 10px', borderRadius: 6, fontSize: '0.75rem', cursor: 'pointer',
                          border: `1px solid ${u.disabled ? '#22C55E' : '#F59E0B'}`,
                          background: u.disabled ? '#F0FDF4' : '#FFFBEB',
                          color: u.disabled ? '#15803D' : '#92400E',
                        }}
                      >
                        {u.disabled ? '启用' : '停用'}
                      </button>
                    )}
                    {u.username !== user.username && (
                      <button
                        onClick={() => handleDeleteUser(u.username)}
                        style={{
                          padding: '6px 10px', borderRadius: 6, fontSize: '0.75rem', cursor: 'pointer',
                          border: '1px solid #FCA5A5', background: '#fff', color: '#DC2626',
                        }}
                      >
                        删除
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Export */}
      <div style={cardStyle}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', marginBottom: 8 }}>导出数据</h3>
        <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 16 }}>
          将所有用户数据（练习记录、错题本、学习进度等）导出为 JSON 文件备份。<br/>
          <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>注：密码不会被导出</span>
        </p>
        <button onClick={handleExport} style={{
          padding: '10px 20px', borderRadius: 10, border: 'none',
          background: '#3B82F6', color: '#fff', fontWeight: 600, cursor: 'pointer',
          fontSize: '0.9375rem',
        }}>导出备份</button>
      </div>

      {/* Import */}
      <div style={cardStyle}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', marginBottom: 8 }}>导入数据</h3>
        <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 16 }}>
          从 JSON 备份文件恢复数据。导入后会与现有数据合并。<br/>
          <span style={{ fontSize: '0.75rem', color: '#F59E0B' }}>提示：用户密码不会被导入，如忘记密码需重新注册或联系管理员重置</span>
        </p>
        <input ref={fileRef} type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
        <button onClick={() => fileRef.current.click()} style={{
          padding: '10px 20px', borderRadius: 10, border: '1px solid #E2E8F0',
          background: '#fff', color: '#1E293B', fontWeight: 600, cursor: 'pointer',
          fontSize: '0.9375rem',
        }}>选择文件导入</button>
      </div>

      {/* Summary */}
      <div style={cardStyle}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', marginBottom: 0 }}>数据概览</h3>
          <button onClick={() => setSummary(getDataSummary())} style={{
            padding: '6px 12px', borderRadius: 6, border: '1px solid #E2E8F0',
            background: '#fff', color: '#64748B', fontSize: '0.75rem', cursor: 'pointer',
          }}>刷新</button>
        </div>
        {summary && (
          <div className="grid-3">
            {[
              { label: '注册用户', value: summary.userCount + '人' },
              { label: '练习记录', value: summary.historyCount + '条' },
              { label: '错题记录', value: summary.wrongCount + '条' },
              { label: '有进度章节', value: summary.progressCount + '个' },
              { label: '打卡用户', value: summary.streakCount + '人' },
            ].map((item, i) => (
              <div key={i} style={{ padding: 12, background: '#F8FAFC', borderRadius: 10, textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#3B82F6' }}>{item.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginTop: 4 }}>{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Clear */}
      <div style={{ ...cardStyle, border: '1px solid #FEE2E2' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#EF4444', marginBottom: 8 }}>清除所有数据</h3>
        <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 16 }}>
          清除系统中的所有本地数据，包括所有用户账号、练习记录、错题本、学习进度等。此操作不可恢复！
        </p>
        <button onClick={handleClear} style={{
          padding: '10px 20px', borderRadius: 10, border: '1px solid #EF4444',
          background: '#fff', color: '#EF4444', fontWeight: 600, cursor: 'pointer',
          fontSize: '0.9375rem',
        }}>清除所有数据</button>
      </div>

      {/* Status messages */}
      {importStatus && (
        <div style={{
          padding: 16, borderRadius: 12, marginBottom: 16,
          background: importStatus.type === 'success' ? '#F0FDF4' : '#FEF2F2',
          border: `1px solid ${importStatus.type === 'success' ? '#BBF7D0' : '#FECACA'}`,
          color: importStatus.type === 'success' ? '#15803D' : '#DC2626',
          fontSize: '0.9375rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span>{importStatus.message}</span>
          <button onClick={() => setImportStatus(null)} style={{ border: 'none', background: 'none', color: 'inherit', cursor: 'pointer', fontSize: '0.8125rem' }}>关闭</button>
        </div>
      )}
    </div>
  );
}
