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

type Lesson = { title: string; content_type: string };
type Section = { title: string; lessons: Lesson[] };

const CONTENT_TYPES = [
  { value: 'text', label: 'Текст' },
  { value: 'video', label: 'Видео' },
  { value: 'quiz', label: 'Тест' },
];

const CATEGORIES = [
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'devops', label: 'DevOps' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'design', label: 'Design' },
  { value: 'other', label: 'Другое' },
];

const PRESETS = [
  {
    name: 'Стандартный',
    icon: '★',
    color: C.green,
    get: () => ({
      title: '',
      description: 'Полный курс по теме. Подходит для начинающих и продвинутых.',
      category: 'frontend',
      require_quiz_completion: true,
      min_quiz_score: 65,
      sections: [
        { title: 'Введение', lessons: [{ title: 'Вводный урок', content_type: 'video' }, { title: 'Обзор материалов', content_type: 'text' }] },
        { title: 'Основная часть', lessons: [{ title: 'Основы', content_type: 'video' }, { title: 'Практика', content_type: 'text' }, { title: 'Тест', content_type: 'quiz' }] },
        { title: 'Заключение', lessons: [{ title: 'Итоговый проект', content_type: 'text' }, { title: 'Финальный тест', content_type: 'quiz' }] },
      ],
    }),
  },
  {
    name: 'Премиум',
    icon: '◆',
    color: C.cyan,
    get: () => ({
      title: '',
      description: 'Продвинутый курс с углублённым изучением и большим количеством практики.',
      category: 'backend',
      require_quiz_completion: true,
      min_quiz_score: 80,
      sections: [
        { title: 'Введение', lessons: [{ title: 'Введение в курс', content_type: 'video' }, { title: 'Архитектура', content_type: 'text' }] },
        { title: 'Модуль 1', lessons: [{ title: 'Теория', content_type: 'video' }, { title: 'Лабораторная', content_type: 'text' }, { title: 'Тест', content_type: 'quiz' }] },
        { title: 'Модуль 2', lessons: [{ title: 'Теория', content_type: 'video' }, { title: 'Практика', content_type: 'text' }, { title: 'Тест', content_type: 'quiz' }] },
      ],
    }),
  },
  {
    name: 'Вебинар',
    icon: '●',
    color: C.blue,
    get: () => ({
      title: '',
      description: 'Бесплатный вебинар с записью. Без обязательных тестов.',
      category: 'other',
      require_quiz_completion: false,
      min_quiz_score: 0,
      sections: [
        { title: 'Вебинар', lessons: [{ title: 'Запись вебинара', content_type: 'video' }, { title: 'Материалы', content_type: 'text' }] },
      ],
    }),
  },
];

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
          placeholder="Название раздела"
          value={section.title}
          onChange={e => onChange({ ...section, title: e.target.value })}
          style={inputStyle}
        />
        <button onClick={onRemove} style={removeBtnStyle}>✕</button>
      </div>
      {section.lessons.map((lesson, li) => (
        <div key={li} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <span style={{ fontSize: 12, color: C.ghost, minWidth: 18 }}>{li + 1}.</span>
          <input
            placeholder="Название урока"
            value={lesson.title}
            onChange={e => updateLesson(li, { ...lesson, title: e.target.value })}
            style={{ ...inputStyle, flex: 1 }}
          />
          <select
            value={lesson.content_type}
            onChange={e => updateLesson(li, { ...lesson, content_type: e.target.value })}
            style={selectStyle}
          >
            {CONTENT_TYPES.map(ct => (
              <option key={ct.value} value={ct.value}>{ct.label}</option>
            ))}
          </select>
          <button onClick={() => removeLesson(li)} style={smallRemoveBtnStyle}>✕</button>
        </div>
      ))}
      <button onClick={addLesson} style={addBtnStyle}>+ Урок</button>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  flex: 1,
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

const removeBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: C.error,
  fontSize: 16,
  cursor: 'pointer',
  padding: '4px 8px',
  borderRadius: 4,
};

const smallRemoveBtnStyle: React.CSSProperties = {
  ...removeBtnStyle,
  fontSize: 12,
  padding: '2px 6px',
};

const addBtnStyle: React.CSSProperties = {
  padding: '6px 12px',
  background: 'transparent',
  color: C.green,
  border: `1px dashed ${C.green}`,
  borderRadius: 6,
  fontSize: 12,
  cursor: 'pointer',
  marginTop: 4,
};

export default function CourseCreate(): JSX.Element {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('frontend');
  const [requireQuiz, setRequireQuiz] = useState(true);
  const [minScore, setMinScore] = useState(65);
  const [sections, setSections] = useState<Section[]>([
    { title: '', lessons: [{ title: '', content_type: 'video' as const }] },
  ]);

  const applyPreset = (preset: typeof PRESETS[number]) => {
    const p = preset.get();
    setTitle(p.title);
    setDescription(p.description);
    setCategory(p.category);
    setRequireQuiz(p.require_quiz_completion);
    setMinScore(p.min_quiz_score);
    setSections(p.sections);
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    if (!title.trim()) {
      e.preventDefault();
      alert('Введите название курса');
      return;
    }
  };

  return (
    <div style={{ padding: 24, minHeight: '100vh', backgroundColor: C.bgPage, color: C.white, fontFamily: "'Roboto', sans-serif" }}>
      <form method="POST" action="" onSubmit={handleSubmit} style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700 }}>Создание курса</h1>
        <p style={{ margin: '0 0 24px', fontSize: 13, color: C.ghost }}>Заполните форму — курс, разделы и уроки будут созданы за один шаг</p>

        {/* Presets */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {PRESETS.map(p => (
            <button
              key={p.name}
              type="button"
              onClick={() => applyPreset(p)}
              style={{
                padding: '10px 16px',
                background: 'transparent',
                color: p.color,
                border: `1px solid ${p.color}`,
                borderRadius: 8,
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = p.color; (e.target as HTMLButtonElement).style.color = '#000'; }}
              onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = 'transparent'; (e.target as HTMLButtonElement).style.color = p.color; }}
            >
              {p.icon} {p.name}
            </button>
          ))}
        </div>

        {/* Course fields */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelStyle}>Название курса *</label>
            <input value={title} onChange={e => setTitle(e.target.value)} name="title" placeholder="Например: JavaScript Basics" style={fullInputStyle} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={labelStyle}>Описание</label>
            <textarea value={description} onChange={e => setDescription(e.target.value)} name="description" placeholder="Краткое описание курса" rows={3} style={{ ...fullInputStyle, resize: 'vertical' as const }} />
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
                <label style={labelStyle}>Мин. балл</label>
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
          <span style={{ fontSize: 12, color: C.ghost, fontWeight: 400, marginLeft: 8 }}>({sections.reduce((s, sec) => s + sec.lessons.length, 0)} уроков)</span>
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

        <button type="submit" style={submitBtnStyle}>Создать курс</button>
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
