import { useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { getPracticeHistory, getProgress, getStreak } from '../utils/storage';
import { getSubjectById } from '../data/subjects';

export default function StatsPage() {
  const { user } = useAuth();
  const history = useMemo(() => user ? getPracticeHistory(user.username) : [], [user]);
  const progress = useMemo(() => user ? getProgress(user.username) : {}, [user]);
  const streak = useMemo(() => user ? getStreak(user.username) : { count: 0 }, [user]);

  const stats = useMemo(() => {
    if (!history.length) return { total: 0, correct: 0, accuracy: 0 };
    const total = history.reduce((s, r) => s + r.total, 0);
    const correct = history.reduce((s, r) => s + r.correct, 0);
    return { total, correct, accuracy: total ? Math.round((correct / total) * 100) : 0 };
  }, [history]);

  const subjectStats = useMemo(() => {
    const map = {};
    history.forEach(r => {
      if (!map[r.subjectId]) map[r.subjectId] = { total: 0, correct: 0, count: 0 };
      map[r.subjectId].total += r.total;
      map[r.subjectId].correct += r.correct;
      map[r.subjectId].count += 1;
    });
    return Object.entries(map).map(([id, s]) => ({
      ...getSubjectById(id), ...s, accuracy: s.total ? Math.round((s.correct / s.total) * 100) : 0,
    }));
  }, [history]);

  if (!user) return <div style={{ textAlign: 'center', padding: 80, color: '#64748B' }}>请先登录查看练习记录</div>;

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1E293B', marginBottom: 24 }}>练习记录</h1>

      {/* Overview Cards */}
      <div className="grid-4" style={{ marginBottom: 32 }}>
        {[
          { label: '总练习次数', value: history.length, icon: '📝' },
          { label: '总答题数', value: stats.total, icon: '📋' },
          { label: '正确率', value: `${stats.accuracy}%`, icon: '🎯' },
          { label: '连续打卡', value: `${streak.count}天`, icon: '🔥' },
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
            <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 16, background: '#fff', borderRadius: 12, boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
              <span style={{ fontSize: '1.5rem' }}>{s.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: '#1E293B' }}>{s.name}</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>练习 {s.count} 次 · 答对 {s.correct}/{s.total}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 700, color: s.accuracy >= 80 ? '#22C55E' : s.accuracy >= 60 ? '#F59E0B' : '#EF4444' }}>{s.accuracy}%</div>
                <div style={{ width: 80, height: 4, borderRadius: 2, background: '#E2E8F0', marginTop: 4 }}>
                  <div style={{ width: `${s.accuracy}%`, height: 4, borderRadius: 2, background: s.color }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Recent history */}
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: 16 }}>最近练习</h2>
      {history.length === 0 ? (
        <div style={{ padding: 40, textAlign: 'center', color: '#94A3B8', background: '#fff', borderRadius: 16 }}>暂无记录</div>
      ) : (
        <div style={{ display: 'grid', gap: 8 }}>
          {[...history].reverse().slice(0, 20).map((r, i) => {
            const subj = getSubjectById(r.subjectId);
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 12, background: '#fff', borderRadius: 10 }}>
                <span>{subj?.emoji || '📚'}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 500, color: '#1E293B', fontSize: '0.9375rem' }}>{r.chapterName}</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{subj?.name || ''} · {new Date(r.timestamp).toLocaleString('zh-CN')}</div>
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