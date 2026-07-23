import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { useAuth } from '../context/AuthContext';
import { subjectsApi } from '../api/subjects';

export default function HomePage() {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);

  useEffect(() => {
    async function loadStats() {
      try {
        const list = await subjectsApi.list();
        let totalKP = 0, totalQuestions = 0, totalTextbooks = 0;
        for (const s of list) {
          totalTextbooks += (s.textbooks || []).length;
          for (const tb of (s.textbooks || [])) {
            for (const ch of (tb.chapters || [])) {
              totalKP += ch.knowledgePoints || 0;
              totalQuestions += ch.questionCount || 0;
            }
          }
        }
        setStats({ subjects: list.length, knowledgePoints: totalKP, questions: totalQuestions, textbooks: totalTextbooks });
      } catch (err) {
        console.error('Failed to load stats:', err);
      }
    }
    loadStats();
  }, []);

  return (
    <div>
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #DBEAFE 0%, #F8FAFC 100%)', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1E293B', marginBottom: 12 }}>
          初中各学科知识体系专项练习库
        </h1>
        <p style={{ fontSize: '1.0625rem', color: '#64748B', maxWidth: 560, margin: '0 auto 24px' }}>
          系统梳理知识脉络，精准攻克薄弱环节，助力中考全面提升
        </p>
        <Link to={user ? '/subjects' : '/login'} style={{
          display: 'inline-block', padding: '12px 32px', borderRadius: 12,
          background: '#3B82F6', color: '#fff', textDecoration: 'none',
          fontWeight: 600, fontSize: '1rem', boxShadow: '0 4px 12px rgba(59,130,246,0.3)',
        }}>
          开始练习
        </Link>
      </section>

      {/* Subject Grid */}
      <section style={{ maxWidth: 1100, margin: '40px auto', padding: '0 24px' }}>
        <div className="grid-3">
          {subjects.map(s => (
            <Link key={s.id} to={`/subject/${s.id}`} style={{
              display: 'flex', alignItems: 'center', padding: '20px',
              background: '#fff', borderRadius: 16, borderLeft: `4px solid ${s.color}`,
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)', textDecoration: 'none', color: 'inherit',
              transition: 'all 0.2s', cursor: 'pointer',
            }}>
              <span style={{ fontSize: '2rem', marginRight: 16 }}>{s.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: '1.125rem', color: '#1E293B' }}>{s.name}</div>
                <div style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: 4 }}>{s.description}</div>
              </div>
              <span style={{ color: '#CBD5E1', fontSize: '1.25rem' }}>›</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ maxWidth: 1100, margin: '0 auto 40px', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '24px', background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
          {[
            { label: '大学科', value: stats ? `${stats.subjects}` : '9' },
            { label: '知识点', value: stats ? `${stats.knowledgePoints}` : '500+' },
            { label: '精选题', value: stats ? `${stats.questions}` : '2000+' },
            { label: '教材版本', value: stats ? `${stats.textbooks}` : '30+' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#3B82F6' }}>{item.value}</div>
              <div style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: 4 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
