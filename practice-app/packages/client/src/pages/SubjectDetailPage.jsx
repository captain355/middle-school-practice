import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { subjectsApi } from '../api/subjects';
import { getSubjectById } from '../data/subjects';

export default function SubjectDetailPage() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();

  // 静态展示数据（tags、gradeRange、knowledgeMap 不在数据库中）
  const staticSubject = getSubjectById(subjectId);

  // 从 API 获取教材列表（含章节数据）
  const [subjectDetail, setSubjectDetail] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await subjectsApi.detail(subjectId);
        setSubjectDetail(data);
      } catch (err) {
        console.error('Failed to load subject detail:', err);
      } finally {
        setPageLoading(false);
      }
    }
    if (subjectId) loadData();
  }, [subjectId]);

  // 合并数据：静态展示属性 + API 返回的教材列表
  const subject = subjectDetail
    ? {
        ...staticSubject,
        textbooks: subjectDetail.textbooks || [],
      }
    : null;

  if (authLoading || pageLoading) {
    return (
      <div style={{ textAlign: 'center', padding: 80, color: '#64748B' }}>
        <div style={{ fontSize: '1.125rem', marginBottom: 8 }}>加载中...</div>
      </div>
    );
  }

  if (!subject || !staticSubject) return <div style={{ textAlign: 'center', padding: 80 }}>学科不存在</div>;

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px' }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 24 }}>
        <Link to="/" style={{ color: '#64748B', textDecoration: 'none' }}>首页</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span style={{ color: subject.color, fontWeight: 600 }}>{subject.name}</span>
      </div>

      {/* Subject Header */}
      <div style={{ display: 'flex', gap: 32, marginBottom: 40, padding: 32, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <span style={{ fontSize: '2.5rem' }}>{subject.emoji}</span>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1E293B' }}>{subject.name}</h1>
          </div>
          <p style={{ color: '#64748B', marginBottom: 16 }}>{subject.description}</p>
          <div style={{ display: 'flex', gap: 8 }}>
            {subject.tags.map(t => (
              <span key={t} style={{
                padding: '4px 12px', borderRadius: 8, fontSize: '0.8125rem',
                background: subject.color + '18', color: subject.color, fontWeight: 500,
              }}>{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Textbook Versions */}
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: 4 }}>选择教材版本</h2>
      <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 20 }}>不同版本的教材知识点编排略有差异，请选择你使用的教材</p>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(subject.textbooks.length, 4)}, 1fr)`, gap: 16, marginBottom: 48 }}>
        {subject.textbooks.map(tb => (
          <Link key={tb.id} to={`/practice/${subjectId}/${tb.code}`} style={{
            padding: 24, background: '#fff', borderRadius: 16,
            borderTop: `4px solid ${subject.color}`, textDecoration: 'none', color: 'inherit',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)', display: 'block',
          }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1E293B', marginBottom: 4 }}>{tb.name}</h3>
            <p style={{ fontSize: '0.8125rem', color: '#64748B', marginBottom: 16 }}>{tb.publisher}</p>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              <span style={{ padding: '2px 8px', borderRadius: 6, fontSize: '0.75rem', background: '#F1F5F9', color: '#64748B' }}>
                {subject.gradeRange.map(g => g + '年级').join('~')}
              </span>
              <span style={{ padding: '2px 8px', borderRadius: 6, fontSize: '0.75rem', background: subject.color + '18', color: subject.color }}>
                {(tb.chapters || []).reduce((sum, ch) => sum + (ch.knowledgePoints || 0), 0)}个知识点
              </span>
            </div>
            <button onClick={e => { if (!user) { e.preventDefault(); navigate('/login'); } }} style={{
              width: '100%', padding: '10px', borderRadius: 8, border: 'none',
              background: subject.color, color: '#fff', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer',
            }}>进入练习</button>
          </Link>
        ))}
      </div>

      {/* Knowledge Map */}
      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1E293B', marginBottom: 4 }}>知识体系概览</h2>
      <p style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 20 }}>{subject.name}核心板块及其子知识点</p>
      <div style={{ display: 'grid', gap: 16 }}>
        {Object.entries(subject.knowledgeMap).map(([branch, topics], i) => {
          const colors = [subject.color, '#3B82F6', '#22C55E', '#F59E0B', '#8B5CF6'];
          return (
            <div key={branch} style={{ display: 'flex', gap: 16, padding: 20, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
              <div style={{ width: 4, borderRadius: 2, background: colors[i % colors.length], flexShrink: 0 }} />
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1E293B', marginBottom: 10 }}>{branch}</h3>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {topics.map(t => (
                    <span key={t} style={{
                      padding: '6px 12px', borderRadius: 8, fontSize: '0.8125rem',
                      background: '#F8FAFC', border: '1px solid #E2E8F0', color: '#475569',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
