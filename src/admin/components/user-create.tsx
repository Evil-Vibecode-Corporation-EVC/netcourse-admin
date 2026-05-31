import React, { useState } from 'react';

const C = {
  bgPage: '#020617',
  bgCard: '#1e293b',
  bgInput: '#0f172a',
  border: '#334155',
  green: '#10b981',
  greenDark: '#059669',
  faint: '#94a3b8',
  ghost: '#64748b',
  white: '#ffffff',
} as const;

const ROLES = [
  { value: 'STUDENT', label: 'Студент' },
  { value: 'USER', label: 'Пользователь' },
  { value: 'ADMIN', label: 'Администратор' },
];

export default function UserCreate(props: any): JSX.Element {
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
        alert(data.notice?.message || 'Ошибка при создании пользователя');
      }
    } catch (err: any) {
      alert(`Ошибка: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: 24, minHeight: '100vh', backgroundColor: C.bgPage, color: C.white, fontFamily: "'Roboto', sans-serif" }}>
      <form method="POST" onSubmit={handleSubmit} style={{ maxWidth: 500, margin: '0 auto' }}>
        <h1 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700 }}>Создание пользователя</h1>
        <p style={{ margin: '0 0 24px', fontSize: 13, color: C.ghost }}>
          Email, пароль и роль — всё сразу
        </p>

        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>Email *</label>
          <input type="email" name="email" placeholder="user@example.com" style={inputStyle} required />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>Пароль *</label>
          <input type="password" name="password" placeholder="Минимум 8 символов" style={inputStyle} required />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>Имя пользователя</label>
          <input type="text" name="username" placeholder="username" style={inputStyle} />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={labelStyle}>Роль</label>
          <select name="role" style={inputStyle}>
            {ROLES.map(r => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>

        <button type="submit" disabled={submitting} style={submitBtnStyle}>
          {submitting ? 'Создание…' : 'Создать пользователя'}
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

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '9px 12px',
  background: C.bgInput,
  color: '#fff',
  border: `1px solid ${C.border}`,
  borderRadius: 6,
  fontSize: 14,
  outline: 'none',
  boxSizing: 'border-box',
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
