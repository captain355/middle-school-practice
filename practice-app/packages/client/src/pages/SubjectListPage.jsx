import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { subjectsApi } from '../api/subjects';

export default function SubjectListPage() {
  const [search, setSearch] = useState('');
  const [subjectStats, setSubjectStats] = useState({});

  useEffect(() => {
    async function loadSubjectStats() {
      try {
        const list = await subjectsApi.list();
        const stats = {};
        for (const s of list) {
          const totalKP = (s.textbooks || []).reduce(
            (sum, tb) => sum + (tb.chapters || []).reduce(
              (cSum, ch) => cSum + (ch.knowledgePoints || 0), 0
            ), 0
          );
          stats[s.id] = {
            textbooks: (s.textbooks || []).length,
            knowledgePoints: totalKP,
          };
        }
        setSubjectStats(stats);
      } catch (err) {
        console.error('Failed to load subject stats:', err);
      }
    }
    loadSubjectStats();
  }, []);

  const filtered = subjects.filter(s =>
    s.name.includes(search) || s.description.includes(search)
  );

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1E293B', marginBottom: 8 }}>学科目录</h1>
      <p style={{ color: '#64748B', marginBottom: 24 }}>选择一个学科开始练习</p>
      <input value={search} onChange={e => setSearch(e.target.value)} placeholder="搜索学科..." style={{
        width: '100%', maxWidth: 360, padding: '10px 16px', borderRadius: 12,
        border: '1px solid #E2E8F0', fontSize: '0.9375rem', marginBottom: 32, outlineColor: '#3B82F6',
      }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
        {filtered.map(s => {
          const kp = subjectStats[s.id]?.knowledgePoints
            || (s.textbooks || []).reduce((sum, tb) => sum + (tb.knowledgePoints || 0), 0);
          const tbCount = subjectStats[s.id]?.textbooks || (s.textbooks || []).length;
          return (
            <Link key={s.id} to={`/subject/${s.id}`} style={{
              padding: 24, background: '#fff', borderRadius: 16,
              borderTop: `4px solid ${s.color}`, textDecoration: 'none', color: 'inherit',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)', transition: 'box-shadow 0.2s',
            }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>{s.emoji}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: 6 }}>{s.name}</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 12 }}>{s.description}</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {s.tags.map(t => (
                  <span key={t} style={{
                    padding: '2px 8px', borderRadius: 6, fontSize: '0.75rem',
                    background: s.color + '18', color: s.color,
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#94A3B8', marginTop: 12 }}>
                {kp}个知识点 · {tbCount}个教材版本
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
