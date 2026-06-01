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
type Lesson = { title: string; content_type: string; video_url?: string; text_content?: string; quiz_title?: string; questions?: Question[] };
type Section = { title: string; lessons: Lesson[] };

const CONTENT_TYPES = [
  { value: 'text', label: 'Текст' },
  { value: 'video', label: 'Видео' },
  { value: 'quiz', label: 'Тест' },
];

const QUESTION_TYPES = [
  { value: 'single', label: 'Один вариант' },
  { value: 'multiple', label: 'Несколько вариантов' },
  { value: 'text', label: 'Текстовый ответ' },
];

const CATEGORIES = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'devops', label: 'DevOps' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'design', label: 'Design' },
  { value: 'other', label: 'Другое' },
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

// ─── AnswerRow ──────────────────────────────────────────────────────────────────
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

// ─── QuestionBlock ──────────────────────────────────────────────────────────────
function QuestionBlock({
  question,
  onChange,
  onRemove,
}: {
  question: Question;
  onChange: (q: Question) => void;
  onRemove: () => void;
}) {
  const addAnswer = () => {
    onChange({ ...question, answers: [...question.answers, { answer_text: '', is_correct: false }] });
  };
  const updateAnswer = (i: number, a: Answer) => {
    const next = [...question.answers];
    next[i] = a;
    onChange({ ...question, answers: next });
  };
  const removeAnswer = (i: number) => {
    onChange({ ...question, answers: question.answers.filter((_, idx) => idx !== i) });
  };

  return (
    <div style={{ marginBottom: 10, padding: 12, background: '#0a1628', border: `1px solid ${C.border}`, borderRadius: 6 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 8 }}>
        <input
          type="text"
          placeholder="Текст вопроса"
          value={question.question_text}
          onChange={e => onChange({ ...question, question_text: e.target.value })}
          style={{ ...inputStyle, flex: 1 }}
        />
        <select
          value={question.question_type}
          onChange={e => onChange({ ...question, question_type: e.target.value })}
          style={selectStyle}
        >
          {QUESTION_TYPES.map(qt => (
            <option key={qt.value} value={qt.value}>{qt.label}</option>
          ))}
        </select>
        <button onClick={onRemove} style={btnDanger}>✕</button>
      </div>
      {question.question_type !== 'text' && (
        <>
          {question.answers.map((ans, ai) => (
            <AnswerRow key={ai} answer={ans} onChange={a => updateAnswer(ai, a)} onRemove={() => removeAnswer(ai)} />
          ))}
          <button type="button" onClick={addAnswer} style={btnAdd}>+ Вариант ответа</button>
        </>
      )}
    </div>
  );
}

// ─── LessonRow ──────────────────────────────────────────────────────────────────
function LessonRow({
  lesson,
  onChange,
  onRemove,
}: {
  lesson: Lesson;
  onChange: (l: Lesson) => void;
  onRemove: () => void;
}) {
  const addQuestion = () => {
    onChange({
      ...lesson,
      questions: [...(lesson.questions || []), { question_text: '', question_type: 'single', answers: [{ answer_text: '', is_correct: false }] }],
    });
  };
  const updateQuestion = (i: number, q: Question) => {
    const next = [...(lesson.questions || [])];
    next[i] = q;
    onChange({ ...lesson, questions: next });
  };
  const removeQuestion = (i: number) => {
    onChange({ ...lesson, questions: (lesson.questions || []).filter((_, idx) => idx !== i) });
  };

  const isQuiz = lesson.content_type === 'quiz';
  const isVideo = lesson.content_type === 'video';
  const isText = lesson.content_type === 'text';

  return (
    <div style={{ marginBottom: 8, padding: '10px 12px', background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 6 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
        <input
          type="text"
          placeholder="Название урока"
          value={lesson.title}
          onChange={e => onChange({ ...lesson, title: e.target.value })}
          style={{ ...inputStyle, flex: 1 }}
        />
        <select
          value={lesson.content_type}
          onChange={e => onChange({ ...lesson, content_type: e.target.value })}
          style={selectStyle}
        >
          {CONTENT_TYPES.map(ct => (
            <option key={ct.value} value={ct.value}>{ct.label}</option>
          ))}
        </select>
        <button onClick={onRemove} style={btnDanger}>✕</button>
      </div>
      {isVideo && (
        <input
          type="text"
          placeholder="Ссылка на видео (YouTube/Vimeo…)"
          value={lesson.video_url || ''}
          onChange={e => onChange({ ...lesson, video_url: e.target.value })}
          style={{ ...inputStyle, width: '100%' }}
        />
      )}
      {isText && (
        <textarea
          placeholder="Текстовое содержание урока"
          value={lesson.text_content || ''}
          onChange={e => onChange({ ...lesson, text_content: e.target.value })}
          rows={3}
          style={{ ...inputStyle, width: '100%', resize: 'vertical' as const }}
        />
      )}
      {isQuiz && (
        <div style={{ marginTop: 8 }}>
          <input
            type="text"
            placeholder="Название теста"
            value={lesson.quiz_title || ''}
            onChange={e => onChange({ ...lesson, quiz_title: e.target.value })}
            style={{ ...inputStyle, width: '100%', marginBottom: 8 }}
          />
          {(lesson.questions || []).map((q, qi) => (
            <QuestionBlock key={qi} question={q} onChange={a => updateQuestion(qi, a)} onRemove={() => removeQuestion(qi)} />
          ))}
          <button type="button" onClick={addQuestion} style={btnAdd}>+ Вопрос</button>
        </div>
      )}
    </div>
  );
}

// ─── SectionBlock ───────────────────────────────────────────────────────────────
function SectionBlock({
  section,
  index,
  onChange,
  onRemove,
}: {
  section: Section;
  index: number;
  onChange: (s: Section) => void;
  onRemove: () => void;
}) {
  const addLesson = () => {
    onChange({ ...section, lessons: [...section.lessons, { title: '', content_type: 'text' }] });
  };
  const updateLesson = (li: number, lesson: Lesson) => {
    const next = [...section.lessons];
    next[li] = lesson;
    onChange({ ...section, lessons: next });
  };
  const removeLesson = (li: number) => {
    onChange({ ...section, lessons: section.lessons.filter((_, i) => i !== li) });
  };

  return (
    <div style={{ marginBottom: 16, padding: 16, background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: C.cyan }}>Раздел {index + 1}</span>
        <input
          type="text"
          placeholder="Название раздела"
          value={section.title}
          onChange={e => onChange({ ...section, title: e.target.value })}
          style={{ ...inputStyle, flex: 1 }}
        />
        <button onClick={onRemove} style={btnDanger}>✕</button>
      </div>
      {section.lessons.map((lesson, li) => (
        <LessonRow key={li} lesson={lesson} onChange={l => updateLesson(li, l)} onRemove={() => removeLesson(li)} />
      ))}
      <button type="button" onClick={addLesson} style={btnAdd}>+ Урок</button>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────────
export default function CourseCreate(props: any): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('frontend');
  const [requireQuiz, setRequireQuiz] = useState(true);
  const [minScore, setMinScore] = useState(65);
  const [sections, setSections] = useState<Section[]>([
    { title: '', lessons: [{ title: '', content_type: 'video' }] },
  ]);
  const [submitting, setSubmitting] = useState(false);

  const addSection = () => {
    setSections([...sections, { title: '', lessons: [{ title: '', content_type: 'text' }] }]);
  };
  const updateSection = (i: number, section: Section) => {
    const next = [...sections];
    next[i] = section;
    setSections(next);
  };
  const removeSection = (i: number) => {
    setSections(sections.filter((_, idx) => idx !== i));
  };

  const totalLessons = sections.reduce((s, sec) => s + sec.lessons.length, 0);
  const apiUrl = window.location.pathname.replace(/^\/resources\//, '/api/resources/');

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
        alert(data.notice?.message || 'Ошибка при создании курса');
      }
    } catch (err: any) {
      alert(`Ошибка: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: 24, minHeight: '100vh', backgroundColor: C.bgPage, color: C.white, fontFamily: "'Roboto', sans-serif" }}>
      <form method="POST" onSubmit={handleSubmit} style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700 }}>Создание курса</h1>
        <p style={{ margin: '0 0 24px', fontSize: 13, color: C.ghost }}>
          Курс, разделы, уроки и тесты — всё за один шаг
        </p>

        {/* Course fields */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelStyle}>Название курса *</label>
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              name="title"
              placeholder="Например: JavaScript с нуля"
              style={fullInputStyle}
              required
            />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelStyle}>Описание</label>
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              name="description"
              placeholder="Краткое описание курса — чему научится студент"
              rows={3}
              style={{ ...fullInputStyle, resize: 'vertical' as const }}
            />
          </div>
          <div>
            <label style={labelStyle}>Категория</label>
            <select value={category} onChange={e => setCategory(e.target.value)} name="category" style={fullInputStyle}>
              {CATEGORIES.map(c => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={requireQuiz}
                onChange={e => setRequireQuiz(e.target.checked)}
                name="require_quiz_completion"
                style={{ accentColor: C.green }}
              />
              Требовать прохождение теста
            </label>
            {requireQuiz && (
              <div style={{ marginTop: 8 }}>
                <label style={labelStyle}>Минимальный балл</label>
                <input
                  type="number"
                  value={minScore}
                  onChange={e => setMinScore(Number(e.target.value))}
                  name="min_quiz_score"
                  min={0}
                  max={100}
                  style={{ ...fullInputStyle, width: 120 }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Sections */}
        <h2 style={{ fontSize: 16, fontWeight: 600, color: C.muted, margin: '0 0 12px' }}>
          Разделы и уроки
          <span style={{ fontSize: 12, color: C.ghost, fontWeight: 400, marginLeft: 8 }}>
            ({sections.length} разд., {totalLessons} уроков)
          </span>
        </h2>

        <input type="hidden" name="sections_json" value={JSON.stringify(sections)} />

        {sections.map((section, i) => (
          <SectionBlock
            key={i}
            section={section}
            index={i}
            onChange={s => updateSection(i, s)}
            onRemove={() => removeSection(i)}
          />
        ))}

        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          <button type="button" onClick={addSection} style={addSectionBtnStyle}>+ Добавить раздел</button>
        </div>

        <button
          type="submit"
          disabled={submitting}
          style={submitBtnStyle}
        >
          {submitting ? 'Создание…' : 'Создать курс'}
        </button>
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

const addSectionBtnStyle: React.CSSProperties = {
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
