import React, { useState } from 'react';

// ─── Цветовая карта (единый источник истины) ───────────────────────────────────
const C = {
  bgPage:    '#020617',
  bgDark:    '#0f172a',
  bgCard:    '#1e293b',
  bgInput:   '#0f172a',
  border:    '#334155',
  green:     '#10b981',
  greenDark: '#059669',
  cyan:      '#06b6d4',
  blue:      '#3b82f6',
  error:     '#ef4444',
  white:     '#ffffff',
  muted:     '#cbd5e1',
  faint:     '#94a3b8',
  ghost:     '#64748b',
} as const;

// ─── Типы ──────────────────────────────────────────────────────────────────────
type AppState = {
  action?: string;
  errorMessage?: string | null;
};

type Branding = {
  companyName?: string;
  logo?: string | false;
};

// ─── Компонент ────────────────────────────────────────────────────────────────
export default function Login(): JSX.Element {
  const { action = '/admin/login', errorMessage } =
    ((window as any).__APP_STATE__ ?? {}) as AppState;
  const branding: Branding =
    (window as any).REDUX_STATE?.branding ?? {};

  const [hover, setHover] = useState<string | null>(null);

  return (
    <div style={s.page}>
      {/* ── Центрированная карточка ───────────────────────────────────────── */}
      <div style={s.card}>

        {/* ── Левая панель — брендинг ───────────────────────────────────── */}
        <div style={s.left}>
          {/* Логотип / название */}
          <div style={s.brand}>
            <div style={s.brandDot} />
            <span style={s.brandName}>
              {branding.companyName ?? 'Netcourse Admin'}
            </span>
          </div>

          {/* Большой заголовок */}
          <h1 style={s.welcome}>Добро<br />пожаловать</h1>

          {/* Подзаголовок */}
          <p style={s.welcomeSub}>
            Панель управления платформой Netcourse.
            Доступ только для авторизованных администраторов.
          </p>

          {/* Декоративные плашки */}
          <div style={s.decorRow}>
            <div style={{ ...s.decorChip, borderColor: C.green, color: C.green }}>
              Пользователи
            </div>
            <div style={{ ...s.decorChip, borderColor: C.cyan, color: C.cyan }}>
              Курсы
            </div>
            <div style={{ ...s.decorChip, borderColor: C.blue, color: C.blue }}>
              Аналитика
            </div>
          </div>

          {/* Декоративная сетка точек */}
          <svg style={s.dots} viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            {Array.from({ length: 6 }, (_, row) =>
              Array.from({ length: 8 }, (_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={col * 16 + 8}
                  cy={row * 13 + 6}
                  r="1.5"
                  fill="rgba(255,255,255,0.15)"
                />
              ))
            )}
          </svg>
        </div>

        {/* ── Правая панель — форма ─────────────────────────────────────── */}
        <form action={action} method="POST" style={s.right}>
          <h2 style={s.formTitle}>Вход в систему</h2>
          <p style={s.formSub}>Введите ваши учётные данные</p>

          {/* Ошибка */}
          {errorMessage && (
            <div style={s.errorBox}>
              <span style={s.errorDot}>●</span>
              {errorMessage}
            </div>
          )}

          {/* Email */}
          <div style={s.field}>
            <label htmlFor="login-email" style={s.label}>
              Email <span style={{ color: C.error }}>*</span>
            </label>
            <input
              id="login-email"
              name="email"
              type="email"
              placeholder="admin@example.com"
              autoComplete="email"
              required
              style={s.input}
              onFocus={e => {
                setHover('email');
                (e.target as HTMLInputElement).style.borderColor = C.green;
                (e.target as HTMLInputElement).style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
              }}
              onBlur={e => {
                setHover(null);
                (e.target as HTMLInputElement).style.borderColor = C.border;
                (e.target as HTMLInputElement).style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Password */}
          <div style={s.field}>
            <label htmlFor="login-password" style={s.label}>
              Пароль <span style={{ color: C.error }}>*</span>
            </label>
            <input
              id="login-password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
              style={s.input}
              onFocus={e => {
                setHover('password');
                (e.target as HTMLInputElement).style.borderColor = C.green;
                (e.target as HTMLInputElement).style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
              }}
              onBlur={e => {
                setHover(null);
                (e.target as HTMLInputElement).style.borderColor = C.border;
                (e.target as HTMLInputElement).style.boxShadow = 'none';
              }}
            />
          </div>

          {/* Кнопка */}
          <button
            type="submit"
            style={s.btn}
            onMouseEnter={e =>
              ((e.target as HTMLButtonElement).style.background =
                `linear-gradient(135deg, ${C.greenDark}, #047857)`)
            }
            onMouseLeave={e =>
              ((e.target as HTMLButtonElement).style.background =
                `linear-gradient(135deg, ${C.green}, ${C.greenDark})`)
            }
          >
            Войти
          </button>

          <p style={s.hint}>
            Проблемы со входом? Обратитесь к системному администратору.
          </p>
        </form>
      </div>
    </div>
  );
}

// ─── Стили ────────────────────────────────────────────────────────────────────
const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: C.bgPage,
    fontFamily: "'Roboto', sans-serif",
    padding: '24px',
    boxSizing: 'border-box',
  },

  card: {
    display: 'flex',
    width: '100%',
    maxWidth: 900,
    minHeight: 520,
    borderRadius: 16,
    overflow: 'hidden',
    border: `1px solid ${C.border}`,
    boxShadow: '0 25px 50px rgba(0,0,0,0.6)',
  },

  // ── Левая панель ────────────────────────────────────────────────────────────
  left: {
    flex: '0 0 380px',
    background: `linear-gradient(145deg, #0d2d20 0%, #0a2540 100%)`,
    borderRight: `1px solid ${C.border}`,
    padding: '48px 40px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },

  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 40,
  },

  brandDot: {
    width: 10,
    height: 10,
    borderRadius: '50%',
    backgroundColor: C.green,
    boxShadow: `0 0 8px ${C.green}`,
  },

  brandName: {
    fontSize: 13,
    fontWeight: 600,
    color: C.faint,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },

  welcome: {
    fontSize: 36,
    fontWeight: 700,
    color: C.white,
    lineHeight: 1.2,
    marginBottom: 16,
    letterSpacing: '-0.5px',
  },

  welcomeSub: {
    fontSize: 14,
    color: C.faint,
    lineHeight: 1.65,
    marginBottom: 32,
  },

  decorRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 'auto',
  },

  decorChip: {
    fontSize: 11,
    fontWeight: 500,
    padding: '4px 10px',
    borderRadius: 20,
    border: '1px solid',
    letterSpacing: '0.05em',
    opacity: 0.7,
  },

  dots: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 120,
    height: 80,
    opacity: 0.6,
    pointerEvents: 'none',
  },

  // ── Правая панель ────────────────────────────────────────────────────────────
  right: {
    flex: 1,
    backgroundColor: C.bgDark,
    padding: '48px 44px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  formTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: C.white,
    marginBottom: 6,
    letterSpacing: '-0.3px',
  },

  formSub: {
    fontSize: 13,
    color: C.ghost,
    marginBottom: 32,
  },

  errorBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '10px 14px',
    backgroundColor: 'rgba(239,68,68,0.1)',
    border: `1px solid rgba(239,68,68,0.3)`,
    borderRadius: 8,
    fontSize: 13,
    color: C.error,
    marginBottom: 20,
  },

  errorDot: {
    fontSize: 8,
    lineHeight: 1,
    color: C.error,
  },

  field: {
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },

  label: {
    fontSize: 13,
    fontWeight: 500,
    color: C.faint,
  },

  input: {
    width: '100%',
    padding: '11px 14px',
    backgroundColor: C.bgInput,
    color: C.white,
    border: `1px solid ${C.border}`,
    borderRadius: 8,
    fontSize: 14,
    outline: 'none',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
    boxSizing: 'border-box',
    // Фикс автозаполнения браузера
    WebkitTextFillColor: C.white,
  },

  btn: {
    width: '100%',
    padding: '12px',
    background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`,
    color: C.white,
    border: 'none',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 600,
    cursor: 'pointer',
    marginTop: 8,
    letterSpacing: '0.02em',
    transition: 'background 0.15s ease',
  },

  hint: {
    marginTop: 20,
    fontSize: 12,
    color: C.ghost,
    textAlign: 'center',
    lineHeight: 1.5,
  },
};
