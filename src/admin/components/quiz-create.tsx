import React, { useState } from 'react';

const C = {
  bgPage: '#020617',
  bgCard: '#1e293b',
  bgInput: '#0f172a',
  border: '#334155',
  green: '#10b981',
  greenDark: '#059669',
  cyan: '#06b6d4',
  blue: '#3b82f6',
  error: '#ef4444',
  white: '#ffffff',
  muted: '#cbd5e1',
  faint: '#94a3b8',
  ghost: '#64748b',
} as const;

type Answer = { answer_text: string; is_correct: boolean };
type Question = { question_text: string; question_type: string; answers: Answer[] };

const QUESTION_TYPES = [
  { value: 'single', label: 'Один вариант' },
  { value: 'multiple', label: 'Несколько вариантов' },
  { value: 'text', label: 'Текстовый ответ' },
];

const inputStyle: React.CSSProperties = {
  padding: '8px 10px',
  background: C.bgInput,
  color: C.white,
  border: `1px solid ${C.border}`,
  borderRadius: 6,
  fontSize: 13,
  outline: 'none',
  boxSizing: 'border-box',
};

const selectStyle: React.CSSProperties = {
  padding: '8px 10px',
  background: C.bgInput,
  color: C.white,
  border: `1px solid ${C.border}`,
  borderRadius: 6,
  fontSize: 13,
  outline: 'none',
  cursor: 'pointer',
};

const btnDanger: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: C.error,
  fontSize: 14,
  cursor: 'pointer',
  padding: '4px 8px',
  borderRadius: 4,
};

const btnAdd: React.CSSProperties = {
  padding: '6px 12px',
  background: 'transparent',
  color: C.green,
  border: `1px dashed ${C.green}`,
  borderRadius: 6,
  fontSize: 12,
  cursor: 'pointer',
  marginTop: 4,
};

function AnswerRow({
  answer,
  onChange,
  onRemove,
}: {
  answer: Answer;
  onChange: (a: Answer) => void;
  onRemove: () => void;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
      <input
        type="text"
        placeholder="Вариант ответа"
        value={answer.answer_text}
        onChange={e => onChange({ ...answer, answer_text: e.target.value })}
        style={{ ...inputStyle, flex: 1 }}
      />
      <label style={{ fontSize: 12, color: C.faint, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer', whiteSpace: 'nowrap' }}>
        <input
          type="checkbox"
          checked={answer.is_correct}
          onChange={e => onChange({ ...answer, is_correct: e.target.checked })}
          style={{ accentColor: C.green }}
        />
        верно
      </label>
      <button onClick={onRemove} style={btnDanger}>✕</button>
    </div>
  );
}

export default function QuizCreate(props: any): JSX.Element {
  const [title, setTitle] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([
    { question_text: '', question_type: 'single', answers: [{ answer_text: '', is_correct: false }] },
  ]);

  const apiUrl = window.location.pathname.replace(/^\/resources\//, '/api/resources/');

  const addQuestion = () => {
    setQuestions([...questions, { question_text: '', question_type: 'single', answers: [{ answer_text: '', is_correct: false }] }]);
  };

  const updateQuestion = (i: number, q: Question) => {
    const next = [...questions];
    next[i] = q;
    setQuestions(next);
  };

  const removeQuestion = (i: number) => {
    setQuestions(questions.filter((_, idx) => idx !== i));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const form = e.target as HTMLFormElement;
      const fd = new FormData(form);
      const params = new URLSearchParams();
      for (const [key, val] of fd.entries()) {
        params.append(key, val as string);
      }
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params,
      });
      const data = await res.json();
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        alert(data.notice?.message || 'Ошибка при создании теста');
      }
    } catch (err: any) {
      alert(`Ошибка: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: 24, minHeight: '100vh', backgroundColor: C.bgPage, color: C.white, fontFamily: "'Roboto', sans-serif" }}>
      <form method="POST" onSubmit={handleSubmit} style={{ maxWidth: 640, margin: '0 auto' }}>
        <h1 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700 }}>Создание теста</h1>
        <p style={{ margin: '0 0 24px', fontSize: 13, color: C.ghost }}>
          Тест с вопросами и ответами за один шаг
        </p>

        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>Название теста *</label>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            name="title"
            placeholder="Например: Входной тест по JavaScript"
            style={fullInputStyle}
            required
          />
        </div>

        <input type="hidden" name="questions_json" value={JSON.stringify(questions)} />

        <h2 style={{ fontSize: 16, fontWeight: 600, color: C.muted, margin: '0 0 12px' }}>
          Вопросы
          <span style={{ fontSize: 12, color: C.ghost, fontWeight: 400, marginLeft: 8 }}>({questions.length})</span>
        </h2>

        {questions.map((q, qi) => (
          <div key={qi} style={{ marginBottom: 12, padding: 12, background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
              <input
                type="text"
                placeholder="Текст вопроса"
                value={q.question_text}
                onChange={e => updateQuestion(qi, { ...q, question_text: e.target.value })}
                name={`question_${qi}`}
                style={{ ...inputStyle, flex: 1 }}
              />
              <select
                value={q.question_type}
                onChange={e => updateQuestion(qi, { ...q, question_type: e.target.value })}
                style={selectStyle}
              >
                {QUESTION_TYPES.map(qt => (
                  <option key={qt.value} value={qt.value}>{qt.label}</option>
                ))}
              </select>
              <button onClick={() => removeQuestion(qi)} style={btnDanger}>✕</button>
            </div>
            {q.question_type !== 'text' && (
              <>
                {q.answers.map((a, ai) => (
                  <AnswerRow
                    key={ai}
                    answer={a}
                    onChange={ans => {
                      const next = [...q.answers];
                      next[ai] = ans;
                      updateQuestion(qi, { ...q, answers: next });
                    }}
                    onRemove={() => {
                      updateQuestion(qi, { ...q, answers: q.answers.filter((_, idx) => idx !== ai) });
                    }}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => updateQuestion(qi, { ...q, answers: [...q.answers, { answer_text: '', is_correct: false }] })}
                  style={btnAdd}
                >
                  + Вариант ответа
                </button>
              </>
            )}
          </div>
        ))}

        <button type="button" onClick={addQuestion} style={addQuestionBtnStyle}>+ Добавить вопрос</button>

        <div style={{ marginTop: 24 }}>
          <button type="submit" disabled={submitting} style={submitBtnStyle}>
            {submitting ? 'Создание…' : 'Создать тест'}
          </button>
        </div>
      </form>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 12,
  fontWeight: 500,
  color: C.faint,
  marginBottom: 4,
};

const fullInputStyle: React.CSSProperties = {
  width: '100%',
  padding: '9px 12px',
  background: C.bgInput,
  color: C.white,
  border: `1px solid ${C.border}`,
  borderRadius: 6,
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
};

const addQuestionBtnStyle: React.CSSProperties = {
  padding: '8px 16px',
  background: 'transparent',
  color: C.cyan,
  border: `1px dashed ${C.cyan}`,
  borderRadius: 6,
  fontSize: 13,
  cursor: 'pointer',
};

const submitBtnStyle: React.CSSProperties = {
  padding: '12px 32px',
  background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`,
  color: '#fff',
  border: 'none',
  borderRadius: 8,
  fontSize: 15,
  fontWeight: 600,
  cursor: 'pointer',
};
