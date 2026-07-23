import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { practiceApi } from '../api/practice';
import { subjectsApi } from '../api/subjects';

export default function StatsPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalPractice: 0, totalQuestions: 0, totalCorrect: 0, accuracy: 0, subjectStats: [] });
  const [streak, setStreak] = useState({ streakCount: 0, totalDays: 0, lastDate: null, checkedInToday: false });
  const [records, setRecords] = useState([]);
  const [subjectMap, setSubjectMap] = useState({});

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    let cancelled = false;
    setLoading(true);

    Promise.all([
      practiceApi.stats(),
      practiceApi.records(1, 20),
      practiceApi.getStreak(),
      subjectsApi.list().catch(() => []),
    ]).then(([statsData, recordsData, streakData, subjectsList]) => {
      if (cancelled) return;
      const map = {};
      (Array.isArray(subjectsList) ? subjectsList : []).forEach(s => { map[s.id] = s; });
      setSubjectMap(map);
      setStats(statsData || { totalPractice: 0, totalQuestions: 0, totalCorrect: 0, accuracy: 0, subjectStats: [] });
      setRecords((recordsData && recordsData.list) || []);
      setStreak(streakData || { streakCount: 0, totalDays: 0, lastDate: null, checkedInToday: false });
      setLoading(false);
    }).catch(() => {
      if (!cancelled) setLoading(false);
    });

    return () => { cancelled = true; };
  }, [user]);

  if (!user) return <div style={{ textAlign: 'center', padding: 80, color: '#64748B' }}>请先登录查看练习记录</div>;

  if (loading) return <div style={{ textAlign: 'center', padding: 80, color: '#64748B' }}>加载中...</div>;

  const subjectStats = stats.subjectStats || [];

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1E293B', marginBottom: 24 }}>练习记录</h1>

      {/* Overview Cards */}
      <div className="grid-4" style={{ marginBottom: 32 }}>
        {[
          { label: '总练习次数', value: stats.totalPractice, icon: '📝' },
          { label: '总答题数', value: stats.totalQuestions, icon: '📋' },
          { label: '正确率', value: `${stats.accuracy}%`, icon: '🎯' },
          { label: '连续打卡', value: `${streak.streakCount}天`, icon: '🔥' },
        ].map((item, i) => (
          <div key={i} style={{ padding: 20, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: 8 }}>{item.icon}</div>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3B82F6' }}>{item.value}</div>
            <div style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: 4 }}>{item.label}</div>
          </div>
        ))}
      </div>

      {/* Per-subject stats */}
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: 16 }}>各学科表现</h2>
      {subjectStats.length === 0 ? (
        <div style={{ padding: 40, textAlign: 'center', color: '#94A3B8', background: '#fff', borderRadius: 16 }}>暂无练习记录</div>
      ) : (
        <div style={{ display: 'grid', gap: 12, marginBottom: 32 }}>
          {subjectStats.map(s => (
            <div key={s.subjectId} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: '#fff', borderRadius: 12, boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
              <span style={{ fontSize: '1.5rem' }}>{s.emoji || ''}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: '#1E293B' }}>{s.name}</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>练习 {s.count} 次 · 答对 {s.correct}/{s.total}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700, color: s.accuracy >= 80 ? '#22C55E' : s.accuracy >= 60 ? '#F59E0B' : '#EF4444' }}>{s.accuracy}%</div>
                <div style={{ width: 80, height: 4, borderRadius: 2, background: '#E2E8F0', marginTop: 4 }}>
                  <div style={{ width: `${s.accuracy}%`, height: 4, borderRadius: 2, background: s.color || '#3B82F6' }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recent history */}
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: 16 }}>最近练习</h2>
      {records.length === 0 ? (
        <div style={{ padding: 40, textAlign: 'center', color: '#94A3B8', background: '#fff', borderRadius: 16 }}>暂无记录</div>
      ) : (
        <div style={{ display: 'grid', gap: 8 }}>
          {records.map((r, i) => {
            const subj = subjectMap[r.subjectId] || (stats.subjectStats || []).find(s => s.subjectId === r.subjectId);
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 12, background: '#fff', borderRadius: 10 }}>
                <span>{subj?.emoji || '📚'}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500, color: '#1E293B', fontSize: '0.9375rem' }}>{r.subjectId}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{subj?.name || ''} · {new Date(r.createdAt).toLocaleString('zh-CN')}</div>
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.9375rem', color: r.score >= 80 ? '#22C55E' : r.score >= 60 ? '#F59E0B' : '#EF4444' }}>
                  {r.score}分
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}