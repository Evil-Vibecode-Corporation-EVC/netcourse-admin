import React, { useState } from 'react';

const C = {
  bgPage: '#020617',
  bgCard: '#1e293b',
  bgInput: '#0f172a',
  border: '#334155',
  green: '#10b981',
  greenDark: '#059669',
  cyan: '#06b6d4',
  error: '#ef4444',
  white: '#ffffff',
  muted: '#cbd5e1',
  faint: '#94a3b8',
  ghost: '#64748b',
} as const;

const inputStyle: React.CSSProperties = {
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

type Row = Record<string, any>;

function SectionBlock({ title, count, children }: { title: string; count?: number; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24, padding: 16, background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 8 }}>
      <h2 style={{ fontSize: 16, fontWeight: 600, color: C.muted, margin: '0 0 12px' }}>
        {title}
        {count !== undefined && (
          <span style={{ fontSize: 12, color: C.ghost, fontWeight: 400, marginLeft: 8 }}>({count})</span>
        )}
      </h2>
      {children}
    </div>
  );
}

function Table({ rows, cols, table, onDeleted }: {
  rows: Row[];
  cols: { key: string; label: string; render?: (v: any) => string }[];
  table?: string;
  onDeleted?: () => void;
}) {
  const [deleting, setDeleting] = useState<Set<number>>(new Set());

  const doDelete = async (id: number) => {
    if (!table) return;
    setDeleting(prev => new Set(prev).add(id));
    try {
      const url = window.location.pathname.replace(/^\/resources\//, '/api/resources/');
      const params = new URLSearchParams();
      params.append('_quick_delete_table', table);
      params.append('_quick_delete_id', String(id));
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params,
      });
      const data = await res.json();
      if (data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        onDeleted?.();
      }
    } catch {
      setDeleting(prev => { const n = new Set(prev); n.delete(id); return n; });
    }
  };

  if (rows.length === 0) return <p style={{ fontSize: 13, color: C.ghost }}>Нет записей</p>;
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
        <thead>
          <tr style={{ color: C.faint, borderBottom: `1px solid ${C.border}` }}>
            {table && <th style={{ padding: '6px 8px', textAlign: 'left', width: 30 }}></th>}
            {cols.map(c => <th key={c.key} style={{ padding: '6px 8px', textAlign: 'left', whiteSpace: 'nowrap' }}>{c.label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id} style={{ borderBottom: `1px solid ${C.border}` }}>
              {table && (
                <td style={{ padding: '6px 8px' }}>
                  <button
                    type="button"
                    disabled={deleting.has(r.id)}
                    onClick={() => doDelete(r.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: C.error,
                      cursor: 'pointer',
                      fontSize: 16,
                      padding: '2px 4px',
                      opacity: deleting.has(r.id) ? 0.4 : 1,
                    }}
                    title="Удалить"
                  >✕</button>
                </td>
              )}
              {cols.map(c => (
                <td key={c.key} style={{ padding: '6px 8px', color: C.white, whiteSpace: 'nowrap' }}>
                  {c.render ? c.render(r[c.key]) : String(r[c.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function UserEdit(props: any): JSX.Element {
  const p = props.record?.params || {};
  const userId = p.id;

  const parse = (key: string): Row[] => { try { return JSON.parse(p[key] || '[]'); } catch { return []; } };

  const [email, setEmail] = useState(p.email || '');
  const [username, setUsername] = useState(p.username || '');
  const [bio, setBio] = useState(p.bio || '');
  const [role, setRole] = useState(p.role || 'USER');
  const [avatarUrl, setAvatarUrl] = useState(p.avatar_url || '');
  const [password, setPassword] = useState('');

  const [enrollments] = useState<Row[]>(parse('_enrollments_json'));
  const [progress] = useState<Row[]>(parse('_progress_json'));
  const [quizAttempts] = useState<Row[]>(parse('_quiz_attempts_json'));
  const [badges] = useState<Row[]>(parse('_badges_json'));
  const [certs] = useState<Row[]>(parse('_certifications_json'));
  const [socials] = useState<Row[]>(parse('_social_links_json'));
  const [ratings] = useState<Row[]>(parse('_ratings_json'));
  const allCourses = parse('_all_courses_json');
  const allBadges = parse('_all_badges_json');

  const existingCourseIds = new Set(enrollments.map((e: any) => e.course_id));
  const existingBadgeIds = new Set(badges.map((b: any) => b.badge_id));
  const availableCourses = allCourses.filter((c: any) => !existingCourseIds.has(c.id));
  const availableBadges = allBadges.filter((b: any) => !existingBadgeIds.has(b.id));

  const [newCourseId, setNewCourseId] = useState<string>('');
  const [newBadgeId, setNewBadgeId] = useState<string>('');
  const [refreshKey, setRefreshKey] = useState(0);

  const [submitting, setSubmitting] = useState(false);

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
        alert(data.notice?.message || 'Ошибка при сохранении');
      }
    } catch (err: any) {
      alert(`Ошибка: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  const ROLES = [
    { value: 'ADMIN', label: 'Администратор' },
    { value: 'USER', label: 'Пользователь' },
    { value: 'STUDENT', label: 'Студент' },
  ];

  return (
    <div style={{ padding: 24, minHeight: '100vh', backgroundColor: C.bgPage, color: C.white, fontFamily: "'Roboto', sans-serif" }}>
      <form method="POST" onSubmit={handleSubmit} style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700 }}>Пользователь #{userId}</h1>
        <p style={{ margin: '0 0 24px', fontSize: 13, color: C.ghost }}>
          Все данные и связи профиля
        </p>

        {/* Основные поля */}
        <SectionBlock title="Основная информация">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label style={labelStyle}>Email</label>
              <input value={email} onChange={e => setEmail(e.target.value)} name="email" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Имя пользователя</label>
              <input value={username} onChange={e => setUsername(e.target.value)} name="username" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Роль</label>
              <select value={role} onChange={e => setRole(e.target.value)} name="role" style={inputStyle}>
                {ROLES.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>Avatar URL</label>
              <input value={avatarUrl} onChange={e => setAvatarUrl(e.target.value)} name="avatar_url" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Новый пароль (оставьте пустым без изменений)</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="password" style={inputStyle} placeholder="Новый пароль" />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={labelStyle}>Bio</label>
              <textarea value={bio} onChange={e => setBio(e.target.value)} name="bio" rows={3} style={{ ...inputStyle, resize: 'vertical' }} />
            </div>
          </div>
        </SectionBlock>

        {/* Enrollments */}
        <SectionBlock title="Записи на курсы" count={enrollments.length}>
          <Table
            key={`enroll-${refreshKey}`}
            rows={enrollments}
            table="enrollments"
            onDeleted={() => setRefreshKey(k => k + 1)}
            cols={[
              { key: 'id', label: 'ID' },
              { key: 'course_id', label: 'Курс' },
              { key: 'course_title', label: 'Название' },
              { key: 'enrolled_at', label: 'Дата', render: v => v ? new Date(v).toLocaleDateString() : '' },
            ]}
          />
          {availableCourses.length > 0 && (
            <div style={{ display: 'flex', gap: 8, marginTop: 8, alignItems: 'center' }}>
              <select value={newCourseId} onChange={e => setNewCourseId(e.target.value)} style={{ ...inputStyle, width: 280 }}>
                <option value="">— Добавить курс —</option>
                {availableCourses.map((c: any) => (
                  <option key={c.id} value={c.id}>{c.title} (#{c.id})</option>
                ))}
              </select>
              {newCourseId && <input type="hidden" name="add_enrollment_course_id" value={newCourseId} />}
            </div>
          )}
        </SectionBlock>

        {/* Badges */}
        <SectionBlock title="Бейджи и медали" count={badges.length}>
          <Table
            key={`badge-${refreshKey}`}
            rows={badges}
            table="user_badges"
            onDeleted={() => setRefreshKey(k => k + 1)}
            cols={[
              { key: 'id', label: 'ID' },
              { key: 'badge_id', label: 'Бейдж' },
              { key: 'badge_name', label: 'Название' },
              { key: 'badge_desc', label: 'Описание' },
              { key: 'awarded_at', label: 'Получен', render: v => v ? new Date(v).toLocaleDateString() : '' },
            ]}
          />
          {availableBadges.length > 0 && (
            <div style={{ display: 'flex', gap: 8, marginTop: 8, alignItems: 'center' }}>
              <select value={newBadgeId} onChange={e => setNewBadgeId(e.target.value)} style={{ ...inputStyle, width: 280 }}>
                <option value="">— Добавить бейдж —</option>
                {availableBadges.map((b: any) => (
                  <option key={b.id} value={b.id}>{b.name} (#{b.id})</option>
                ))}
              </select>
              {newBadgeId && <input type="hidden" name="add_badge_id" value={newBadgeId} />}
            </div>
          )}
        </SectionBlock>

        {/* Certifications */}
        <SectionBlock title="Сертификаты" count={certs.length}>
          <Table
            key={`cert-${refreshKey}`}
            rows={certs}
            table="certifications"
            onDeleted={() => setRefreshKey(k => k + 1)}
            cols={[
              { key: 'id', label: 'ID' },
              { key: 'course_id', label: 'Курс' },
              { key: 'certificate_code', label: 'Код' },
              { key: 'issued_at', label: 'Выдан', render: v => v ? new Date(v).toLocaleDateString() : '' },
            ]}
          />
        </SectionBlock>

        {/* Social Links */}
        <SectionBlock title="Социальные сети" count={socials.length}>
          <Table
            key={`social-${refreshKey}`}
            rows={socials}
            table="user_social_links"
            onDeleted={() => setRefreshKey(k => k + 1)}
            cols={[
              { key: 'id', label: 'ID' },
              { key: 'platform', label: 'Платформа' },
              { key: 'url', label: 'URL', render: v => v?.substring(0, 50) },
            ]}
          />
        </SectionBlock>

        {/* Quiz Attempts (read-only) */}
        <SectionBlock title="Попытки тестов" count={quizAttempts.length}>
          <Table
            rows={quizAttempts}
            cols={[
              { key: 'id', label: 'ID' },
              { key: 'quiz_id', label: 'Тест' },
              { key: 'quiz_title', label: 'Название' },
              { key: 'score', label: 'Балл' },
              { key: 'passed', label: 'Пройден', render: v => v ? 'Да' : 'Нет' },
              { key: 'completed_at', label: 'Дата', render: v => v ? new Date(v).toLocaleDateString() : '' },
            ]}
          />
        </SectionBlock>

        {/* Progress (read-only) */}
        <SectionBlock title="Прогресс по курсам" count={progress.length}>
          <Table
            rows={progress}
            cols={[
              { key: 'id', label: 'ID' },
              { key: 'course_id', label: 'Курс' },
              { key: 'status', label: 'Статус' },
              { key: 'updated_at', label: 'Обновлён', render: v => v ? new Date(v).toLocaleDateString() : '' },
            ]}
          />
        </SectionBlock>

        {/* Ratings (read-only) */}
        <SectionBlock title="Оценки курсов" count={ratings.length}>
          <Table
            rows={ratings}
            cols={[
              { key: 'id', label: 'ID' },
              { key: 'course_id', label: 'Курс' },
              { key: 'course_title', label: 'Название' },
              { key: 'rating', label: 'Оценка' },
              { key: 'created_at', label: 'Дата', render: v => v ? new Date(v).toLocaleDateString() : '' },
            ]}
          />
        </SectionBlock>

        <button
          type="submit"
          disabled={submitting}
          style={{
            padding: '12px 32px',
            background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`,
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 15,
            fontWeight: 600,
            cursor: submitting ? 'not-allowed' : 'pointer',
          }}
        >
          {submitting ? 'Сохранение…' : 'Сохранить'}
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
