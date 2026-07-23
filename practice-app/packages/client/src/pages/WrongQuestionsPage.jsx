import { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { practiceApi } from '../api/practice';

export default function WrongQuestionsPage() {
  const { user } = useAuth();
  const [allWrong, setAllWrong] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterSubject, setFilterSubject] = useState('all');
  const [filterChapter, setFilterChapter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);
  const [quizMode, setQuizMode] = useState(null);

  useEffect(() => {
    if (!user) { setLoading(false); return; }
    let cancelled = false;
    setLoading(true);
    practiceApi.wrongQuestions()
      .then(list => { if (!cancelled) { setAllWrong(Array.isArray(list) ? list : []); setLoading(false); } })
      .catch(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [user]);

  const wrongList = useMemo(() => {
    let list = allWrong;
    if (filterSubject !== 'all') list = list.filter(q => q.subjectId === filterSubject);
    if (filterChapter !== 'all') list = list.filter(q => q.chapterName === filterChapter);
    return list;
  }, [allWrong, filterSubject, filterChapter]);

  const chapterOptions = useMemo(() => {
    let list = allWrong;
    if (filterSubject !== 'all') list = list.filter(q => q.subjectId === filterSubject);
    const chapters = [...new Set(list.map(q => q.chapterName))];
    return chapters.filter(Boolean);
  }, [allWrong, filterSubject]);

  const subjectFilters = useMemo(() => {
    const seen = {};
    return allWrong.filter(q => q.subjectId && !seen[q.subjectId] && (seen[q.subjectId] = true));
  }, [allWrong]);

  const reloadWrong = () => {
    if (!user) return;
    practiceApi.wrongQuestions().then(list => setAllWrong(Array.isArray(list) ? list : []));
  };

  const handleRemove = (qId) => {
    practiceApi.removeWrong(qId).then(() => reloadWrong());
  };

  const handleClearFiltered = () => {
    // 后端暂不支持批量删除，保留为空操作
  };

  const handleClearAll = () => {
    // 后端暂不支持批量删除，保留为空操作
  };

  const startRetryQuiz = () => {
    if (wrongList.length === 0) return;
    setQuizMode({
      questions: wrongList.slice(0, 20),
      currentIndex: 0,
      answers: {},
      submittedIds: [],
      submitted: false,
    });
  };

  const submitRetryAnswer = () => {
    const q = quizMode.questions[quizMode.currentIndex];
    const a = quizMode.answers[q.id];
    if (!a && a !== 0 && q.type !== 'fill' && q.type !== 'shortanswer' && q.type !== 'matching') return;
    if ((q.type === 'fill' || q.type === 'shortanswer') && (!a || !String(a).trim())) return;
    if (q.type === 'matching') {
      const pairs = q.pairs || [];
      const cur = String(a || '');
      const allSelected = pairs.every(p => cur.includes(p.left + '-'));
      if (!allSelected) return;
    }
    if (!quizMode.submittedIds.includes(q.id)) {
      setQuizMode({ ...quizMode, submittedIds: [...quizMode.submittedIds, q.id] });
    }
  };

  const nextRetryQuestion = () => {
    if (quizMode.currentIndex < quizMode.questions.length - 1) {
      setQuizMode({ ...quizMode, currentIndex: quizMode.currentIndex + 1 });
    } else {
      setQuizMode({ ...quizMode, submitted: true });
    }
  };

  const finishRetry = () => {
    setQuizMode(null);
    reloadWrong();
  };

  const resetFilter = () => {
    setFilterSubject('all');
    setFilterChapter('all');
  };

  if (!user) return <div style={{ textAlign: 'center', padding: 80, color: '#64748B' }}>请先登录查看错题本</div>;

  if (loading) return <div style={{ textAlign: 'center', padding: 80, color: '#64748B' }}>加载中...</div>;

  if (quizMode) {
    const q = quizMode.questions[quizMode.currentIndex];
    const subjColor = q.subjectColor || '#3B82F6';
    const isAnswered = quizMode.submittedIds.includes(q.id);
    const isCorrect = isAnswered && (
      q.type === 'matching' ? (() => {
        const correctPairs = q.answer.split(',').map(p => p.trim());
        const userPairs = String(quizMode.answers[q.id]).split(',').map(p => p.trim());
        if (correctPairs.length !== userPairs.length) return false;
        return correctPairs.every(cp => userPairs.includes(cp));
      })() : q.type === 'shortanswer' ? (q.acceptableAnswers?.some(kw => String(quizMode.answers[q.id]).includes(kw)) || false) :
      quizMode.answers[q.id] === q.answer ||
      String(quizMode.answers[q.id]).trim() === String(q.answer).trim()
    );

    if (quizMode.submitted) {
      const correct = quizMode.questions.filter(item => {
        const a = quizMode.answers[item.id];
        if (item.type === 'matching') {
          const correctPairs = item.answer.split(',').map(p => p.trim());
          const userPairs = String(a || '').split(',').map(p => p.trim());
          if (correctPairs.length !== userPairs.length) return false;
          return correctPairs.every(cp => userPairs.includes(cp));
        }
        if (item.type === 'shortanswer') {
          return item.acceptableAnswers?.some(kw => String(a || '').includes(kw)) || false;
        }
        return a === item.answer || String(a).trim() === String(item.answer).trim();
      }).length;
      const total = quizMode.questions.length;
      const score = Math.round((correct / total) * 100);

      return (
        <div style={{ maxWidth: 800, margin: '40px auto', padding: '0 24px' }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, color: '#1E293B', marginBottom: 8 }}>错题重练完成</h2>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, color: score >= 80 ? '#22C55E' : score >= 60 ? '#F59E0B' : '#EF4444' }}>{score}</span>
              <span style={{ fontSize: '1.25rem', color: '#64748B' }}>分</span>
              <div style={{ color: '#64748B', marginTop: 8 }}>答对 {correct}/{total} 题</div>
            </div>
            <div style={{ display: 'grid', gap: 12 }}>
              {quizMode.questions.map((item, i) => {
                const a = quizMode.answers[item.id];
                let ok = false;
                if (item.type === 'matching') {
                  const correctPairs = item.answer.split(',').map(p => p.trim());
                  const userPairs = String(a || '').split(',').map(p => p.trim());
                  ok = correctPairs.length === userPairs.length && correctPairs.every(cp => userPairs.includes(cp));
                } else if (item.type === 'shortanswer') {
                  ok = item.acceptableAnswers?.some(kw => String(a || '').includes(kw)) || false;
                } else {
                  ok = a === item.answer || String(a || '').trim() === String(item.answer).trim();
                }
                return (
                  <div key={i} style={{ padding: 16, borderRadius: 12, border: '1px solid', borderColor: ok ? '#22C55E' : '#EF4444', background: ok ? '#F0FDF4' : '#FEF2F2' }}>
                    <div style={{ fontWeight: 600, marginBottom: 6, color: '#1E293B' }}>第{i+1}题 {ok ? '✅' : '❌'}</div>
                    <div style={{ color: '#475569', marginBottom: 4 }}>{item.questionText}</div>
                    <div style={{ fontSize: '0.875rem' }}>
                      <span>你的答案：<span style={{ color: ok ? '#22C55E' : '#EF4444', fontWeight: 600 }}>{a || '未作答'}</span></span>
                      {!ok && <span style={{ marginLeft: 16 }}>正确答案：<span style={{ color: '#22C55E', fontWeight: 600 }}>{item.answer}</span></span>}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: 4, fontStyle: 'italic' }}>{item.explanation}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 12 }}>
              <button onClick={finishRetry} style={{ flex: 1, padding: '12px', borderRadius: 12, border: '1px solid #E2E8F0', background: '#fff', color: '#1E293B', fontWeight: 600, cursor: 'pointer' }}>返回错题本</button>
              <button onClick={() => startRetryQuiz()} style={{ flex: 1, padding: '12px', borderRadius: 12, border: 'none', background: '#3B82F6', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>再练一次</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{ maxWidth: 800, margin: '40px auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, height: 6, borderRadius: 3, background: '#E2E8F0' }}>
            <div style={{ width: `${((quizMode.currentIndex + 1) / quizMode.questions.length) * 100}%`, height: 6, borderRadius: 3, background: subjColor }} />
          </div>
          <span style={{ fontSize: '0.875rem', color: '#64748B' }}>{quizMode.currentIndex + 1}/{quizMode.questions.length}</span>
        </div>
        <div style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ padding: '2px 8px', borderRadius: 6, fontSize: '0.75rem', background: subjColor + '18', color: subjColor, fontWeight: 600 }}>
              {q.type === 'choice' ? '选择题' : q.type === 'fill' ? '填空题' : q.type === 'matching' ? '连线题' : q.type === 'shortanswer' ? '简答题' : '判断题'}
            </span>
            <span style={{ padding: '2px 8px', borderRadius: 6, fontSize: '0.75rem', background: '#FEF3C7', color: '#92400E' }}>错题重练</span>
          </div>
          <h3 style={{ fontSize: '1.125rem', color: '#1E293B', marginBottom: 24, lineHeight: 1.6 }}>{q.questionText}</h3>
          {q.type === 'choice' || q.type === 'truefalse' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => {
                  if (!isAnswered) setQuizMode({ ...quizMode, answers: { ...quizMode.answers, [q.id]: opt[0] } });
                }} style={{
                  padding: '14px 16px', borderRadius: 12,
                  border: `2px solid ${isAnswered ? (opt[0] === q.answer ? '#22C55E' : opt[0] === quizMode.answers[q.id] ? '#EF4444' : '#E2E8F0') : (quizMode.answers[q.id] === opt[0] ? '#3B82F6' : '#E2E8F0')}`,
                  background: isAnswered ? (opt[0] === q.answer ? '#F0FDF4' : opt[0] === quizMode.answers[q.id] ? '#FEF2F2' : '#fff') : (quizMode.answers[q.id] === opt[0] ? '#EFF6FF' : '#fff'),
                  cursor: isAnswered ? 'default' : 'pointer', textAlign: 'left', fontSize: '0.9375rem', color: '#1E293B',
                  transition: 'all 0.15s',
                }}>{opt}</button>
              ))}
            </div>
          ) : q.type === 'matching' ? (() => {
            const currentAnswer = quizMode.answers[q.id] || '';
            const userPairs = currentAnswer ? currentAnswer.split(',') : [];
            const userMap = {};
            userPairs.forEach(pair => {
              const [l, ...r] = pair.split('-');
              userMap[l] = r.join('-');
            });
            const rights = [...new Set((q.pairs || []).map(p => p.right))];
            return (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {(q.pairs || []).map((pair, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px', background: '#F8FAFC', borderRadius: 8 }}>
                    <span style={{ flex: 1, fontWeight: 600, color: '#1E293B', textAlign: 'right' }}>{pair.left}</span>
                    <span style={{ color: '#94A3B8' }}>&rarr;</span>
                    <select
                      disabled={isAnswered}
                      value={userMap[pair.left] || ''}
                      onChange={e => {
                        const newUserMap = { ...userMap, [pair.left]: e.target.value };
                        const newAnswerStr = q.pairs.map(p => `${p.left}-${newUserMap[p.left] || ''}`).join(',');
                        setQuizMode({ ...quizMode, answers: { ...quizMode.answers, [q.id]: newAnswerStr } });
                      }}
                      style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '2px solid #E2E8F0', fontSize: '0.9375rem', background: '#fff', color: '#1E293B', outline: 'none' }}
                    >
                      <option value="">请选择</option>
                      {rights.map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            );
          })() : q.type === 'shortanswer' ? (
            <textarea
              disabled={isAnswered}
              value={quizMode.answers[q.id] || ''}
              onChange={e => setQuizMode({ ...quizMode, answers: { ...quizMode.answers, [q.id]: e.target.value } })}
              placeholder="请输入你的答案..."
              rows={4}
              style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: `2px solid ${isAnswered ? (isCorrect ? '#22C55E' : '#EF4444') : '#E2E8F0'}`, fontSize: '1rem', outline: 'none', background: '#F8FAFC', resize: 'vertical', lineHeight: 1.6 }}
            />
          ) : (
            <input
              disabled={isAnswered}
              value={quizMode.answers[q.id] || ''}
              onChange={e => setQuizMode({ ...quizMode, answers: { ...quizMode.answers, [q.id]: e.target.value } })}
              placeholder="输入你的答案"
              style={{ width: '100%', padding: '12px 16px', borderRadius: 12, border: `2px solid ${isAnswered ? (isCorrect ? '#22C55E' : '#EF4444') : '#E2E8F0'}`, fontSize: '1rem', outline: 'none', background: '#F8FAFC' }}
            />
          )}
          {isAnswered && (
            <div style={{ marginTop: 16, padding: 16, borderRadius: 12, background: isCorrect ? '#F0FDF4' : '#FEF2F2', border: `1px solid ${isCorrect ? '#BBF7D0' : '#FECACA'}` }}>
              <div style={{ fontWeight: 600, color: isCorrect ? '#15803D' : '#DC2626', marginBottom: 4 }}>{isCorrect ? '回答正确' : '回答错误'}</div>
              <div style={{ fontSize: '0.875rem', color: '#475569' }}>解析：{q.explanation}</div>
            </div>
          )}
          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            {!isAnswered && (() => {
              const canSubmit = (() => {
                const a = quizMode.answers[q.id];
                if (q.type === 'choice' || q.type === 'truefalse') return !!a;
                if (q.type === 'fill' || q.type === 'shortanswer') return a && String(a).trim().length > 0;
                if (q.type === 'matching') {
                  const pairs = q.pairs || [];
                  const cur = String(a || '');
                  return pairs.every(p => cur.includes(p.left + '-'));
                }
                return !!a;
              })();
              return (
                <button onClick={submitRetryAnswer} disabled={!canSubmit} style={{ flex: 1, padding: '14px', borderRadius: 12, border: 'none', background: canSubmit ? '#3B82F6' : '#CBD5E1', color: '#fff', fontWeight: 600, cursor: canSubmit ? 'pointer' : 'not-allowed', fontSize: '1rem' }}>提交答案</button>
              );
            })()}
            {isAnswered && (
              <button onClick={nextRetryQuestion} style={{ flex: 1, padding: '14px', borderRadius: 12, border: 'none', background: subjColor, color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '1rem' }}>
                {quizMode.currentIndex < quizMode.questions.length - 1 ? '下一题' : '完成'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 700, color: '#1E293B' }}>错题本</h1>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {wrongList.length > 0 && (
            <>
              <button onClick={startRetryQuiz} style={{ padding: '8px 16px', borderRadius: 8, border: 'none', background: '#3B82F6', color: '#fff', fontSize: '0.875rem', cursor: 'pointer', fontWeight: 600 }}>错题重练</button>
            </>
          )}
        </div>
      </div>

      {/* 筛选区域 */}
      <div style={{ padding: 16, background: '#fff', borderRadius: 12, marginBottom: 24, boxShadow: '0 2px 6px rgba(0,0,0,0.04)' }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: chapterOptions.length > 0 ? 12 : 0, flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8125rem', color: '#94A3B8', marginRight: 4 }}>学科：</span>
          <button onClick={() => { setFilterSubject('all'); setFilterChapter('all'); }} style={{
            padding: '5px 12px', borderRadius: 6, border: `1px solid ${filterSubject === 'all' ? '#3B82F6' : '#E2E8F0'}`,
            background: filterSubject === 'all' ? '#3B82F6' : '#fff', color: filterSubject === 'all' ? '#fff' : '#64748B', cursor: 'pointer', fontSize: '0.8125rem',
          }}>全部</button>
          {subjectFilters.map(q => (
            <button key={q.subjectId} onClick={() => { setFilterSubject(q.subjectId); setFilterChapter('all'); }} style={{
              padding: '5px 12px', borderRadius: 6, border: `1px solid ${filterSubject === q.subjectId ? (q.subjectColor || '#E2E8F0') : '#E2E8F0'}`,
              background: filterSubject === q.subjectId ? (q.subjectColor || '#3B82F6') : '#fff', color: filterSubject === q.subjectId ? '#fff' : '#64748B', cursor: 'pointer', fontSize: '0.8125rem',
            }}>{q.subjectName || q.subjectId}</button>
          ))}
        </div>
        {chapterOptions.length > 0 && (
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: '0.8125rem', color: '#94A3B8', marginRight: 4 }}>章节：</span>
            <button onClick={() => setFilterChapter('all')} style={{
              padding: '5px 12px', borderRadius: 6, border: `1px solid ${filterChapter === 'all' ? '#3B82F6' : '#E2E8F0'}`,
              background: filterChapter === 'all' ? '#3B82F6' : '#fff', color: filterChapter === 'all' ? '#fff' : '#64748B', cursor: 'pointer', fontSize: '0.8125rem',
            }}>全部章节</button>
            {chapterOptions.map(ch => (
              <button key={ch} onClick={() => setFilterChapter(ch)} style={{
                padding: '5px 12px', borderRadius: 6, border: `1px solid ${filterChapter === ch ? '#64748B' : '#E2E8F0'}`,
                background: filterChapter === ch ? '#64748B' : '#fff', color: filterChapter === ch ? '#fff' : '#64748B', cursor: 'pointer', fontSize: '0.8125rem',
              }}>{ch}</button>
            ))}
          </div>
        )}
        <div style={{ marginTop: 8, fontSize: '0.75rem', color: '#94A3B8' }}>
          当前显示 {wrongList.length} 道错题
          {(filterSubject !== 'all' || filterChapter !== 'all') && (
            <button onClick={resetFilter} style={{ marginLeft: 12, border: 'none', background: 'none', color: '#3B82F6', cursor: 'pointer', fontSize: '0.75rem', textDecoration: 'underline' }}>重置筛选</button>
          )}
        </div>
      </div>

      {wrongList.length === 0 ? (
        <div style={{ padding: 60, textAlign: 'center', background: '#fff', borderRadius: 16, color: '#94A3B8' }}>
          <div style={{ fontSize: '3rem', marginBottom: 12 }}>🎉</div>
          <div>{(filterSubject !== 'all' || filterChapter !== 'all') ? '当前筛选条件下暂无错题' : '暂无错题，继续保持！'}</div>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: 12 }}>
          {wrongList.map((q, i) => {
            const isExpanded = expandedId === q.id;
            return (
              <div key={`${q.id}-${q.lastWrongAt}`} style={{ padding: 20, background: '#fff', borderRadius: 12, borderLeft: `4px solid ${q.subjectColor || '#EF4444'}`, boxShadow: '0 2px 6px rgba(0,0,0,0.04)', cursor: 'pointer' }} onClick={() => setExpandedId(isExpanded ? null : q.id)}>
                <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: 8, marginBottom: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ padding: '2px 8px', borderRadius: 6, fontSize: '0.75rem', background: (q.subjectColor || '#EF4444') + '18', color: q.subjectColor || '#EF4444' }}>{q.subjectName || ''}</span>
                      {q.chapterName && <span style={{ padding: '2px 8px', borderRadius: 6, fontSize: '0.75rem', background: '#F1F5F9', color: '#64748B' }}>{q.chapterName}</span>}
                      <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>错 {q.wrongCount || 1} 次</span>
                      <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{new Date(q.lastWrongAt).toLocaleDateString()}</span>
                    </div>
                    <div style={{ fontWeight: 600, color: '#1E293B', marginBottom: 4, lineHeight: 1.5 }}>{q.questionText}</div>
                    {!isExpanded && (
                      <div style={{ fontSize: '0.8125rem', color: '#94A3B8' }}>点击展开详情 ▾</div>
                    )}
                    {isExpanded && (
                      <div style={{ marginTop: 8 }}>
                        <div style={{ fontSize: '0.875rem', color: '#EF4444', marginBottom: 4 }}>你的答案：{q.userAnswer || '未作答'}</div>
                        <div style={{ fontSize: '0.875rem', color: '#22C55E', marginBottom: 8 }}>正确答案：{q.answer}</div>
                        <div style={{ fontSize: '0.8125rem', color: '#64748B', fontStyle: 'italic', padding: 12, background: '#F8FAFC', borderRadius: 8 }}>{q.explanation}</div>
                      </div>
                    )}
                  </div>
                  <button onClick={(e) => { e.stopPropagation(); handleRemove(q.id); }} title="移除此错题" style={{
                    flexShrink: 0, width: 32, height: 32, borderRadius: 8, border: '1px solid #E2E8F0',
                    background: '#fff', color: '#94A3B8', cursor: 'pointer', fontSize: '0.875rem',
                  }}>✕</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
