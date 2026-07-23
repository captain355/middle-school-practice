import { useState, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { exportAsJSON, importFromJSON, clearAllData, getDataSummary } from '../utils/exportImport';

export default function SettingsPage() {
  const { user } = useAuth();
  const fileRef = useRef(null);
  const [importStatus, setImportStatus] = useState(null);
  const [summary, setSummary] = useState(null);

  const handleExport = () => {
    exportAsJSON();
    setImportStatus({ type: 'success', message: '数据已导出为 JSON 文件' });
  };

  const handleImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const count = await importFromJSON(file);
      setImportStatus({ type: 'success', message: `成功导入 ${count} 条数据，请刷新页面查看` });
    } catch (err) {
      setImportStatus({ type: 'error', message: err.message });
    }
    e.target.value = '';
  };

  const handleClear = () => {
    if (!confirm('确定要清除所有练习数据吗？此操作不可恢复！')) return;
    if (!confirm('再次确认：清除所有数据？')) return;
    clearAllData();
    setImportStatus({ type: 'success', message: '所有数据已清除' });
    setSummary(null);
  };

  const handleShowSummary = () => {
    setSummary(getDataSummary());
  };

  if (!user) return (
    <div style={{ maxWidth: 600, margin: '80px auto', padding: '0 24px', textAlign: 'center', color: '#94A3B8' }}>
      请先登录
    </div>
  );

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: '0 24px' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B', marginBottom: 24 }}>数据管理</h1>

      {/* Export */}
      <div style={{ padding: 24, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 16 }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', marginBottom: 8 }}>导出数据</h3>
        <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 16 }}>
          将你的练习记录、错题本、进度等数据导出为 JSON 文件备份
        </p>
        <button onClick={handleExport} style={{
          padding: '10px 20px', borderRadius: 10, border: 'none',
          background: '#3B82F6', color: '#fff', fontWeight: 600, cursor: 'pointer',
          fontSize: '0.9375rem',
        }}>导出备份</button>
      </div>

      {/* Import */}
      <div style={{ padding: 24, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 16 }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', marginBottom: 8 }}>导入数据</h3>
        <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 16 }}>
          从 JSON 备份文件恢复数据（会覆盖已有数据）
        </p>
        <input ref={fileRef} type="file" accept=".json" onChange={handleImport} style={{ display: 'none' }} />
        <button onClick={() => fileRef.current.click()} style={{
          padding: '10px 20px', borderRadius: 10, border: '1px solid #E2E8F0',
          background: '#fff', color: '#1E293B', fontWeight: 600, cursor: 'pointer',
          fontSize: '0.9375rem',
        }}>选择文件导入</button>
      </div>

      {/* Summary */}
      <div style={{ padding: 24, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 16 }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#1E293B', marginBottom: 8 }}>数据概览</h3>
        <button onClick={handleShowSummary} style={{
          padding: '10px 20px', borderRadius: 10, border: '1px solid #E2E8F0',
          background: '#fff', color: '#1E293B', fontWeight: 600, cursor: 'pointer',
          fontSize: '0.9375rem', marginBottom: summary ? 16 : 0,
        }}>查看概览</button>
        {summary && (
          <div className="grid-3">
            {[
              { label: '注册用户', value: summary.userCount },
              { label: '练习记录', value: summary.historyCount + '条' },
              { label: '错题记录', value: summary.wrongCount + '条' },
              { label: '学习进度', value: summary.progressCount },
              { label: '打卡记录', value: summary.streakCount },
            ].map((item, i) => (
              <div key={i} style={{ padding: 12, background: '#F8FAFC', borderRadius: 10, textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#3B82F6' }}>{item.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748B' }}>{item.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Clear */}
      <div style={{ padding: 24, background: '#fff', borderRadius: 16, border: '1px solid #FEE2E2', marginBottom: 16 }}>
        <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#EF4444', marginBottom: 8 }}>清除数据</h3>
        <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 16 }}>
          清除所有本地数据（包括用户、练习记录、错题本等）
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
          fontSize: '0.9375rem',
        }}>{importStatus.message}</div>
      )}
    </div>
  );
}