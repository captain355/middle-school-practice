import { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { practiceApi } from '../api/practice';
import { subjectsApi } from '../api/subjects';
import { useAuth } from '../context/AuthContext';

export default function PracticePage() {
  const { subjectId, textbookId } = useParams();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();

  // ---- 后端数据 ----
  const [subjectDetail, setSubjectDetail] = useState(null); // { id, name, emoji, color, ...textbooks: [...] }
  const [progressList, setProgressList] = useState([]);     // ProgressItem[]
  const [pageLoading, setPageLoading] = useState(true);
  const [questionsLoading, setQuestionsLoading] = useState(false);

  // ---- UI 状态 ----
  const [activeGrade, setActiveGrade] = useState(null);
  const [activeChapter, setActiveChapter] = useState(null);
  const [quizState, setQuizState] = useState(null); // { questions, currentIndex, answers, submittedIds, submitted }
  const [results, setResults] = useState(null);

  // ---- 派生数据 ----
  // 从 subjectDetail 中找到当前 textbook
  const subject = subjectDetail;
  const textbook = useMemo(() => {
    if (!subjectDetail?.textbooks) return null;
    return subjectDetail.textbooks.find(t => t.code === textbookId) || null;
  }, [subjectDetail, textbookId]);

  // 从 textbook.chapters 按 grade 分组（类似原来 chapterData 的结构）
  const chaptersByGrade = useMemo(() => {
    if (!textbook?.chapters) return null;
    const map = {};
    textbook.chapters.forEach(ch => {
      const g = String(ch.grade);
      if (!map[g]) map[g] = [];
      map[g].push(ch);
    });
    // 每个 grade 内按 sortOrder 排序
    Object.keys(map).forEach(g => {
      map[g].sort((a, b) => a.sortOrder - b.sortOrder);
    });
    return map;
  }, [textbook]);

  const gradeKeys = chaptersByGrade ? Object.keys(chaptersByGrade).sort((a, b) => Number(a) - Number(b)) : [];

  // 进度 Map<chapterId, progressItem>
  const progressMap = useMemo(() => {
    const map = {};
    progressList.forEach(p => {
      if (p.chapterId) map[p.chapterId] = p;
    });
    return map;
  }, [progressList]);

  // 初始化 activeGrade
  useEffect(() => {
    if (gradeKeys.length > 0 && !activeGrade) {
      setActiveGrade(gradeKeys[0]);
    }
  }, [gradeKeys]);

  // ---- 页面加载：获取学科详情 + 进度 + 打卡 ----
  useEffect(() => {
    if (authLoading) return;
    if (!user) { navigate('/login'); return; }

    let cancelled = false;

    const loadData = async () => {
      setPageLoading(true);
      try {
        const [detail, prog] = await Promise.all([
          subjectsApi.detail(subjectId),
          practiceApi.progress(),
        ]);
        if (cancelled) return;
        setSubjectDetail(detail);
        setProgressList(prog || []);
      } catch (err) {
        console.error('Failed to load practice page data:', err);
      } finally {
        if (!cancelled) setPageLoading(false);
      }
    };

    loadData();

    // 尝试打卡（静默，不影响主流程）
    practiceApi.checkin().catch(() => {});

    return () => { cancelled = true; };
  }, [subjectId, authLoading, user]);

  // ---- 题目判断逻辑 ----
  const isQuestionCorrect = (q, userAnswer) => {
    if (!userAnswer && userAnswer !== 0) return false;
    if (q.type === 'shortanswer') {
      return q.acceptableAnswers?.some(keyword =>
        String(userAnswer).includes(keyword)
      ) || false;
    }
    if (q.type === 'matching') {
      const correctPairs = q.answer.split(',').map(p => p.trim());
      const userPairs = String(userAnswer).split(',').map(p => p.trim());
      if (correctPairs.length !== userPairs.length) return false;
      return correctPairs.every(cp => userPairs.includes(cp));
    }
    return userAnswer === q.answer || String(userAnswer).trim() === String(q.answer).trim();
  };

  // ---- 开始练习：从 API 加载题目 ----
  const startQuiz = async (chapter) => {
    setQuestionsLoading(true);
    try {
      const questions = await practiceApi.questionsByChapter(chapter.id);
      if (!questions || !questions.length) {
        alert('该章节暂无题目，敬请期待！');
        setQuestionsLoading(false);
        return;
      }
      // 字段映射：后端 questionText → 前端 question
      const mapped = questions.map(q => ({ ...q, question: q.questionText }));
      setActiveChapter(chapter);
      setQuizState({ questions: mapped, currentIndex: 0, answers: {}, submittedIds: [], submitted: false });
      setResults(null);
    } catch (err) {
      console.error('Failed to load questions:', err);
      alert('加载题目失败，请重试');
    } finally {
      setQuestionsLoading(false);
    }
  };

  // ---- 提交当前题目答案 ----
  const submitAnswer = () => {
    const q = quizState.questions[quizState.currentIndex];
    const userAnswer = quizState.answers[q.id];
    if (!userAnswer && userAnswer !== 0 && q.type !== 'fill' && q.type !== 'shortanswer' && q.type !== 'matching') return;
    if ((q.type === 'fill' || q.type === 'shortanswer') && (!userAnswer || !String(userAnswer).trim())) return;
    if (q.type === 'matching') {
      const pairs = q.pairs || [];
      const currentAnswer = String(userAnswer || '');
      const allSelected = pairs.every(p => currentAnswer.includes(p.left + '-'));
      if (!allSelected) return;
    }
    if (!quizState.submittedIds.includes(q.id)) {
      setQuizState({ ...quizState, submittedIds: [...quizState.submittedIds, q.id] });
    }
  };

  // ---- 下一题 / 完成练习 ----
  const nextQuestion = () => {
    if (quizState.currentIndex < quizState.questions.length - 1) {
      setQuizState({ ...quizState, currentIndex: quizState.currentIndex + 1 });
    } else {
      // 完成练习
      const finalAnswers = quizState.answers;
      const correct = quizState.questions.filter(q => {
        return isQuestionCorrect(q, finalAnswers[q.id]);
      }).length;
      const total = quizState.questions.length;
      const score = Math.round((correct / total) * 100);
      const wrongList = quizState.questions.filter(q => {
        return !isQuestionCorrect(q, finalAnswers[q.id]);
      });

      // 构建 wrongAnswers 数组（使用后端题目 UUID）
      const wrongAnswers = wrongList.map(q => ({
        questionId: q.id,
        userAnswer: String(finalAnswers[q.id] || ''),
      }));

      // 计算练习时长（秒）
      const duration = 0; // 暂不追踪时长

      // 提交练习到后端 API
      practiceApi.submit({
        subjectId,
        chapterId: activeChapter.id,
        textbookId: textbookId,
        score,
        correct,
        total,
        duration,
        wrongAnswers,
      }).then(() => {
        // 提交成功后刷新进度
        practiceApi.progress().then(prog => {
          setProgressList(prog || []);
        }).catch(() => {});
      }).catch(err => {
        console.error('Failed to submit practice:', err);
      });

      setResults({ correct, total, score, wrongList, answers: finalAnswers });
    }
  };

  const resetQuiz = () => {
    setActiveChapter(null);
    setQuizState(null);
    setResults(null);
  };

  // ---- 加载状态 ----
  if (authLoading || pageLoading || !user) {
    return <div style={{ textAlign: 'center', padding: 80, color: '#94A3B8' }}>加载中...</div>;
  }

  if (!subject || !textbook) {
    return <div style={{ textAlign: 'center', padding: 80 }}>页面不存在</div>;
  }

  // ---- 题目加载中状态 ----
  if (questionsLoading) {
    return (
      <div style={{ textAlign: 'center', padding: 80, color: '#64748B' }}>
        <div style={{ fontSize: '1.125rem', marginBottom: 8 }}>正在加载题目...</div>
        <div style={{ color: '#94A3B8' }}>请稍候</div>
      </div>
    );
  }

  // ---- 做题视图 ----
  if (quizState && activeChapter) {
    const q = quizState.questions[quizState.currentIndex];
    const isAnswered = quizState.submittedIds.includes(q.id);
    const isCorrect = isAnswered && isQuestionCorrect(q, quizState.answers[q.id]);

    // 为连线题生成稳定的打乱顺序
    const matchingShuffled = (() => {
      if (q.type !== 'matching' || !q.pairs) return [];
      const rights = [...new Set(q.pairs.map(p => p.right))];
      const hash = q.id.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
      return [...rights].sort((a, b) => {
        const ha = a.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + hash;
        const hb = b.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) + hash;
        return ha - hb;
      });
    })();

    if (results) {
      return (
        <div style={{ maxWidth: 800, margin: '40px auto', padding: '0 24px' }}>
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 700, color: '#1E293B', marginBottom: 8 }}>练习完成！</h2>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <span style={{ fontSize: '3rem', fontWeight: 700, color: results.score >= 80 ? '#22C55E' : results.score >= 60 ? '#F59E0B' : '#EF4444' }}>{results.score}</span>
              <span style={{ fontSize: '1.25rem', color: '#64748B' }}>分</span>
              <div style={{ color: '#64748B', marginTop: 8 }}>答对 {results.correct}/{results.total} 题</div>
            </div>
            <div style={{ marginBottom: 24 }}>
              {quizState.questions.map((item, i) => {
                const a = results.answers[item.id];
                const correct = isQuestionCorrect(item, a);
                const formatAnswer = (ans) => {
                  if (!ans) return '未作答';
                  if (item.type === 'matching') {
                    return ans.split(',').map(p => {
                      const parts = p.split('-');
                      return parts[0] + ' → ' + parts.slice(1).join('-');
                    }).join('；');
                  }
                  return ans;
                };
                return (
                  <div key={item.id} style={{ padding: 16, marginBottom: 12, borderRadius: 12, border: '1px solid', borderColor: correct ? '#22C55E' : '#EF4444', background: correct ? '#F0FDF4' : '#FEF2F2' }}>
                    <div style={{ fontWeight: 600, marginBottom: 6, color: '#1E293B' }}>第{i+1}题 {correct ? '✅' : '❌'}</div>
                    <div style={{ color: '#475569', marginBottom: 4 }}>{item.question}</div>
                    <div style={{ fontSize: '0.875rem' }}>
                      <span>你的答案：<span style={{ color: correct ? '#22C55E' : '#EF4444', fontWeight: 600 }}>{formatAnswer(a)}</span></span>
                      {!correct && <span style={{ marginLeft: 16, display: 'inline-block' }}>正确答案：<span style={{ color: '#22C55E', fontWeight: 600 }}>{formatAnswer(item.answer)}</span></span>}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#64748B', marginTop: 4, fontStyle: 'italic' }}>{item.explanation}</div>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button onClick={resetQuiz} style={{ flex: 1, padding: '12px', borderRadius: 12, border: '1px solid #E2E8F0', background: '#fff', color: '#1E293B', fontWeight: 600, cursor: 'pointer' }}>返回章节</button>
              <button onClick={() => { resetQuiz(); startQuiz(activeChapter); }} style={{ flex: 1, padding: '12px', borderRadius: 12, border: 'none', background: '#3B82F6', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>重新练习</button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div style={{ maxWidth: 800, margin: '40px auto', padding: '0 24px' }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 16 }}>
          <Link to={`/practice/${subjectId}/${textbookId}`} style={{ color: '#64748B', textDecoration: 'none' }}>返回章节列表</Link>
        </div>
        {/* Progress bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, height: 6, borderRadius: 3, background: '#E2E8F0' }}>
            <div style={{ width: `${((quizState.currentIndex + 1) / quizState.questions.length) * 100}%`, height: 6, borderRadius: 3, background: subject.color }} />
          </div>
          <span style={{ fontSize: '0.875rem', color: '#64748B' }}>{quizState.currentIndex + 1}/{quizState.questions.length}</span>
        </div>
        {/* Question card */}
        <div style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <span style={{ padding: '2px 8px', borderRadius: 6, fontSize: '0.75rem', background: subject.color + '18', color: subject.color, fontWeight: 600 }}>
              {q.type === 'choice' ? '选择题' : q.type === 'fill' ? '填空题' : q.type === 'truefalse' ? '判断题' : q.type === 'matching' ? '连线题' : '简答题'}
            </span>
            <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>难度: {'★'.repeat(q.difficulty)}{'☆'.repeat(3 - q.difficulty)}</span>
          </div>
          <h3 style={{ fontSize: '1.125rem', color: '#1E293B', marginBottom: 24, lineHeight: 1.6 }}>{q.question}</h3>

          {q.type === 'choice' || q.type === 'truefalse' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => {
                  if (!isAnswered) setQuizState({ ...quizState, answers: { ...quizState.answers, [q.id]: opt[0] } });
                }} style={{
                  padding: '14px 16px', borderRadius: 12, border: `2px solid ${isAnswered ? (opt[0] === q.answer ? '#22C55E' : opt[0] === quizState.answers[q.id] ? '#EF4444' : '#E2E8F0') : (quizState.answers[q.id] === opt[0] ? '#3B82F6' : '#E2E8F0')}`,
                  background: isAnswered ? (opt[0] === q.answer ? '#F0FDF4' : opt[0] === quizState.answers[q.id] ? '#FEF2F2' : '#fff') : (quizState.answers[q.id] === opt[0] ? '#EFF6FF' : '#fff'),
                  cursor: isAnswered ? 'default' : 'pointer', textAlign: 'left', fontSize: '0.9375rem', color: '#1E293B',
                  transition: 'all 0.15s',
                }}>{opt}</button>
              ))}
            </div>
          ) : q.type === 'matching' ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(() => {
                const currentAnswer = quizState.answers[q.id] || '';
                const userPairs = currentAnswer ? currentAnswer.split(',') : [];
                const userMap = {};
                userPairs.forEach(pair => {
                  const [l, ...r] = pair.split('-');
                  userMap[l] = r.join('-');
                });
                return q.pairs.map((pair, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px', background: '#F8FAFC', borderRadius: 8 }}>
                    <span style={{ flex: 1, fontWeight: 600, color: '#1E293B', textAlign: 'right' }}>{pair.left}</span>
                    <span style={{ color: '#94A3B8' }}>&rarr;</span>
                    <select
                      disabled={isAnswered}
                      value={userMap[pair.left] || ''}
                      onChange={e => {
                        const newUserMap = { ...userMap, [pair.left]: e.target.value };
                        const newAnswerStr = q.pairs.map(p => `${p.left}-${newUserMap[p.left] || ''}`).join(',');
                        setQuizState({ ...quizState, answers: { ...quizState.answers, [q.id]: newAnswerStr } });
                      }}
                      style={{ flex: 1, padding: '8px 12px', borderRadius: 8, border: '2px solid #E2E8F0', fontSize: '0.9375rem', background: '#fff', color: '#1E293B', outline: 'none' }}
                    >
                      <option value="">请选择</option>
                      {matchingShuffled.map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                ));
              })()}
            </div>
          ) : q.type === 'shortanswer' ? (
            <textarea
              disabled={isAnswered}
              value={quizState.answers[q.id] || ''}
              onChange={e => setQuizState({ ...quizState, answers: { ...quizState.answers, [q.id]: e.target.value } })}
              placeholder="请输入你的答案..."
              rows={4}
              style={{
                width: '100%', padding: '12px 16px', borderRadius: 12,
                border: `2px solid ${isAnswered ? (isCorrect ? '#22C55E' : '#EF4444') : '#E2E8F0'}`,
                fontSize: '1rem', outline: 'none', background: '#F8FAFC', resize: 'vertical',
                lineHeight: 1.6,
              }}
            />
          ) : (
            <input
              disabled={isAnswered}
              value={quizState.answers[q.id] || ''}
              onChange={e => setQuizState({ ...quizState, answers: { ...quizState.answers, [q.id]: e.target.value } })}
              placeholder="输入你的答案"
              style={{
                width: '100%', padding: '12px 16px', borderRadius: 12,
                border: `2px solid ${isAnswered ? (isCorrect ? '#22C55E' : '#EF4444') : '#E2E8F0'}`,
                fontSize: '1rem', outline: 'none', background: '#F8FAFC',
              }}
            />
          )}

          {isAnswered && (
            <div style={{ marginTop: 16, padding: 16, borderRadius: 12, background: isCorrect ? '#F0FDF4' : '#FEF2F2', border: `1px solid ${isCorrect ? '#BBF7D0' : '#FECACA'}` }}>
              <div style={{ fontWeight: 600, color: isCorrect ? '#15803D' : '#DC2626', marginBottom: 4 }}>{isCorrect ? '✅ 回答正确' : '❌ 回答错误'}</div>
              <div style={{ fontSize: '0.875rem', color: '#475569' }}>解析：{q.explanation}</div>
            </div>
          )}

          <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
            {!isAnswered && (() => {
              const canSubmit = (() => {
                const a = quizState.answers[q.id];
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
                <button onClick={submitAnswer} disabled={!canSubmit} style={{
                  flex: 1, padding: '14px', borderRadius: 12, border: 'none',
                  background: canSubmit ? '#3B82F6' : '#CBD5E1', color: '#fff',
                  fontWeight: 600, cursor: canSubmit ? 'pointer' : 'not-allowed', fontSize: '1rem',
                }}>提交答案</button>
              );
            })()}
            {isAnswered && (
              <button onClick={nextQuestion} style={{
                flex: 1, padding: '14px', borderRadius: 12, border: 'none',
                background: subject.color, color: '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '1rem',
              }}>
                {quizState.currentIndex < quizState.questions.length - 1 ? '下一题' : '完成练习'}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---- 章节列表视图 ----
  // 计算进度统计
  const completedChaptersCount = Object.values(progressMap).filter(p => p && p.chapterId).length;
  const totalChaptersCount = textbook?.chapters?.length || 0;

  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px' }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: '0.875rem', color: '#64748B', marginBottom: 24 }}>
        <Link to="/" style={{ color: '#64748B', textDecoration: 'none' }}>首页</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <Link to={`/subject/${subjectId}`} style={{ color: '#64748B', textDecoration: 'none' }}>{subject.name}</Link>
        <span style={{ margin: '0 8px' }}>›</span>
        <span style={{ color: subject.color, fontWeight: 600 }}>{textbook.name}</span>
      </div>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, padding: 24, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1E293B' }}>{subject.name} · {textbook.name}</h1>
          <p style={{ fontSize: '0.875rem', color: '#64748B', marginTop: 4 }}>{textbook.publisher}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>学习进度</div>
          <div style={{ width: 120, height: 6, borderRadius: 3, background: '#E2E8F0', marginTop: 4 }}>
            <div style={{ width: `${totalChaptersCount > 0 ? Math.min(completedChaptersCount / totalChaptersCount * 100, 100) : 0}%`, height: 6, borderRadius: 3, background: subject.color }} />
          </div>
        </div>
      </div>

      {!chaptersByGrade || gradeKeys.length === 0 ? (
        <div style={{ textAlign: 'center', padding: 60, color: '#64748B' }}>
          该教材版本的章节内容正在准备中，敬请期待。
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', gap: 0, marginBottom: 24, borderBottom: '2px solid #E2E8F0' }}>
            {gradeKeys.map(g => (
              <button key={g} onClick={() => setActiveGrade(g)} style={{
                padding: '10px 24px', border: 'none', background: 'none',
                fontSize: '1rem', fontWeight: activeGrade === g ? 600 : 400,
                color: activeGrade === g ? subject.color : '#64748B',
                borderBottom: activeGrade === g ? `3px solid ${subject.color}` : '3px solid transparent',
                cursor: 'pointer', marginBottom: -2,
              }}>{g}年级</button>
            ))}
          </div>

          {/* Chapter List */}
          {activeGrade && chaptersByGrade[activeGrade] && (
            <div style={{ display: 'grid', gap: 12 }}>
              {chaptersByGrade[activeGrade].map((ch, i) => {
                const p = progressMap[ch.id];
                const status = p ? 'completed' : 'not-started';
                return (
                  <div key={ch.id} onClick={() => startQuiz(ch)} style={{
                    display: 'flex', alignItems: 'center', gap: 16, padding: 20,
                    background: '#fff', borderRadius: 12, cursor: 'pointer',
                    borderLeft: `4px solid ${status === 'completed' ? '#22C55E' : '#E2E8F0'}`,
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)', transition: 'box-shadow 0.2s',
                  }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: status === 'completed' ? '#DCFCE7' : '#F1F5F9',
                      color: status === 'completed' ? '#22C55E' : '#64748B', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0,
                    }}>
                      {status === 'completed' ? '✓' : `第${i + 1}章`}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: '#1E293B', marginBottom: 2 }}>{ch.name}</div>
                      <div style={{ fontSize: '0.8125rem', color: '#64748B' }}>{ch.knowledgePoints}个知识点 · {ch.exercises}道练习题</div>
                    </div>
                    {p && (
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: p.bestScore >= 80 ? '#22C55E' : '#F59E0B' }}>
                        最高 {p.bestScore}分
                      </div>
                    )}
                    <span style={{ color: '#CBD5E1', fontSize: '1.25rem' }}>›</span>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}
