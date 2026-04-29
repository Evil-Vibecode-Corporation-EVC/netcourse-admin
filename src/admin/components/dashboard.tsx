import React, { useEffect, useState } from 'react';

// ─── Цветовая карта ────────────────────────────────────────────────────────────
const C = {
  // фон
  bgPage: '#020617',
  bgSidebar: '#0f172a',
  bgCard: '#1e293b',
  bgCardHover: '#243247',
  border: '#334155',

  // основной акцент
  green: '#10b981',
  greenLight: '#34d399',
  greenDark: '#059669',

  // вторичные акценты
  cyan: '#06b6d4',
  blue: '#3b82f6',

  // ошибки
  error: '#ef4444',

  // текст
  textPrimary: '#ffffff',
  textMuted: '#cbd5e1',
  textFaint: '#94a3b8',
  textGhost: '#64748b',
} as const;

// ─── Стили ─────────────────────────────────────────────────────────────────────
const styles = {
  page: {
    padding: 24,
    minHeight: '100vh',
    backgroundColor: C.bgPage,
    color: C.textPrimary,
    fontFamily: "'Roboto', sans-serif",
  } as React.CSSProperties,

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 28,
    paddingBottom: 20,
    borderBottom: `1px solid ${C.border}`,
  } as React.CSSProperties,

  title: {
    margin: 0,
    fontSize: 24,
    fontWeight: 700,
    color: C.textPrimary,
    letterSpacing: '-0.3px',
  } as React.CSSProperties,

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: C.textGhost,
  } as React.CSSProperties,

  timestamp: {
    fontSize: 12,
    color: C.textGhost,
    textAlign: 'right' as const,
    marginTop: 4,
  } as React.CSSProperties,

  // ── Сетка метрик ────────────────────────────────────────────────────────────
  metricsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: 16,
    marginBottom: 24,
  } as React.CSSProperties,

  metricCard: (accentColor: string): React.CSSProperties => ({
    backgroundColor: C.bgCard,
    border: `1px solid ${C.border}`,
    borderTop: `3px solid ${accentColor}`,
    borderRadius: 10,
    padding: '18px 20px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
  }),

  metricLabel: {
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
    color: C.textGhost,
    marginBottom: 8,
  } as React.CSSProperties,

  metricValue: {
    fontSize: 32,
    fontWeight: 700,
    color: C.textPrimary,
    lineHeight: 1,
    marginBottom: 8,
  } as React.CSSProperties,

  metricLink: {
    fontSize: 12,
    color: C.greenLight,
    textDecoration: 'none',
  } as React.CSSProperties,

  metricSub: {
    fontSize: 12,
    color: C.textGhost,
  } as React.CSSProperties,

  // ── Виджеты ─────────────────────────────────────────────────────────────────
  widgetsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: 16,
  } as React.CSSProperties,

  widget: {
    backgroundColor: C.bgCard,
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    padding: '20px 22px',
  } as React.CSSProperties,

  widgetTitle: {
    margin: '0 0 14px 0',
    fontSize: 15,
    fontWeight: 600,
    color: C.textMuted,
  } as React.CSSProperties,

  // ── Кнопки ──────────────────────────────────────────────────────────────────
  btnGreen: {
    display: 'inline-block',
    padding: '8px 14px',
    background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`,
    color: '#fff',
    borderRadius: 7,
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.01em',
  } as React.CSSProperties,

  btnBlue: {
    display: 'inline-block',
    padding: '8px 14px',
    background: `linear-gradient(135deg, ${C.blue}, #2563eb)`,
    color: '#fff',
    borderRadius: 7,
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: '0.01em',
  } as React.CSSProperties,

  // ── Уведомления ─────────────────────────────────────────────────────────────
  noteBox: {
    marginTop: 12,
    padding: '10px 14px',
    backgroundColor: 'rgba(16,185,129,0.08)',
    border: `1px solid rgba(16,185,129,0.25)`,
    borderRadius: 7,
    fontSize: 12,
    color: C.textFaint,
  } as React.CSSProperties,

  errorBox: {
    padding: '14px 18px',
    backgroundColor: 'rgba(239,68,68,0.1)',
    border: `1px solid rgba(239,68,68,0.3)`,
    borderRadius: 10,
    fontSize: 14,
    color: C.error,
  } as React.CSSProperties,

  loadingBox: {
    padding: '14px 18px',
    backgroundColor: C.bgCard,
    border: `1px solid ${C.border}`,
    borderRadius: 10,
    fontSize: 14,
    color: C.textFaint,
  } as React.CSSProperties,

  tipBox: {
    padding: '12px 14px',
    backgroundColor: 'rgba(6,182,212,0.08)',
    border: `1px solid rgba(6,182,212,0.2)`,
    borderRadius: 7,
    fontSize: 13,
    color: C.textFaint,
    lineHeight: 1.55,
  } as React.CSSProperties,

  // ── Декоративная полоса на карточке метрики ──────────────────────────────────
  metricGlow: (accentColor: string): React.CSSProperties => ({
    position: 'absolute',
    top: 0,
    right: 0,
    width: 60,
    height: 60,
    borderRadius: '0 10px 0 60px',
    backgroundColor: accentColor,
    opacity: 0.08,
    pointerEvents: 'none',
  }),
};

// ─── Типы ──────────────────────────────────────────────────────────────────────
type DashboardData = {
  visits?: number;
  users?: number;
  courses?: number;
  enrollments?: number;
  timestamp?: string;
  note?: string;
  error?: string;
};

// ─── Утилиты ───────────────────────────────────────────────────────────────────
function buildDashboardUrl() {
  const base = window.location.pathname.replace(/\/$/, '');
  return `${base}/api/dashboard`;
}

const TIPS = [
  'Используйте фильтры, чтобы быстро найти пользователей по роли.',
  'Данные из таблиц можно экспортировать через встроенную кнопку CSV.',
  'Скройте чувствительные поля (например, password) в представлении списка.',
  'Включите AUTOLOAD_DB=true, чтобы AdminJS обнаруживал таблицы БД автоматически.',
  'Обязательно задайте надёжный COOKIE_SECRET перед открытием панели в продакшене.',
];

// ─── Компонент карточки метрики ────────────────────────────────────────────────
function MetricCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: number | string;
  sub?: React.ReactNode;
  accent: string;
}) {
  return (
    <div style={styles.metricCard(accent)}>
      {/* декоративный светящийся угол */}
      <div style={styles.metricGlow(accent)} />
      <div style={styles.metricLabel}>{label}</div>
      <div style={styles.metricValue}>{value}</div>
      {sub && <div style={styles.metricSub}>{sub}</div>}
    </div>
  );
}

// ─── Основной компонент ────────────────────────────────────────────────────────
export default function Dashboard(): JSX.Element {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [tip, setTip] = useState<string>(TIPS[0]);

  // Загрузка данных дашборда
  useEffect(() => {
    const url = buildDashboardUrl();
    let mounted = true;

    async function fetchData() {
      setLoading(true);
      setFetchError(null);
      try {
        const res = await fetch(url, { credentials: 'same-origin' });
        if (!res.ok) throw new Error(`Network error: ${res.status} ${res.statusText}`);
        const json = await res.json();
        if (!mounted) return;
        setData(json);
      } catch (err: any) {
        if (!mounted) return;
        setFetchError(String(err.message ?? err));
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    const interval = setInterval(fetchData, 30_000);
    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  // Ротация подсказок
  useEffect(() => {
    let idx = 1;
    const id = setInterval(() => {
      setTip(TIPS[idx % TIPS.length]);
      idx++;
    }, 10_000);
    return () => clearInterval(id);
  }, []);

  const adminBase = window.location.pathname.replace(/\/$/, '');
  const linkTo = (resourceId: string) => `${adminBase}/resources/${resourceId}`;

  return (
    <div style={styles.page}>
      {/* ── Заголовок ──────────────────────────────────────────────────────── */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.title}>Admin Dashboard</h1>
          <div style={styles.subtitle}>Обзор ключевых метрик платформы</div>
        </div>
        <div style={styles.timestamp}>
          {data?.timestamp ? `Обновлено: ${new Date(data.timestamp).toLocaleString('ru-RU')}` : '\u00a0'}
        </div>
      </div>

      {/* ── Метрики ────────────────────────────────────────────────────────── */}
      {loading ? (
        <div style={styles.loadingBox}>Загрузка метрик…</div>
      ) : fetchError ? (
        <div style={styles.errorBox}>Ошибка загрузки дашборда: {fetchError}</div>
      ) : (
        <>
          <div style={styles.metricsGrid}>
            <MetricCard label="Посещения" value={data?.visits ?? '—'} sub="Таблица site_visits" accent={C.cyan} />
            <MetricCard
              label="Пользователи"
              value={data?.users ?? '—'}
              sub={
                <a href={linkTo('users')} style={styles.metricLink}>
                  Открыть пользователей →
                </a>
              }
              accent={C.blue}
            />
            <MetricCard
              label="Курсы"
              value={data?.courses ?? '—'}
              sub={
                <a href={linkTo('courses')} style={styles.metricLink}>
                  Открыть курсы →
                </a>
              }
              accent={C.green}
            />
            <MetricCard
              label="Записи"
              value={data?.enrollments ?? '—'}
              sub="Всего записей на курсы"
              accent={C.greenLight}
            />
          </div>

          {/* ── Виджеты ──────────────────────────────────────────────────── */}
          <div style={styles.widgetsRow}>
            {/* Сводка */}
            <div style={styles.widget}>
              <h3 style={styles.widgetTitle}>Сводка по сайту</h3>
              <p style={{ margin: '0 0 8px', fontSize: 14, color: C.textFaint, lineHeight: 1.6 }}>
                Панель управления платформой Netcourse. Доступ ограничен для авторизованных администраторов.
              </p>
              {data?.note && (
                <div style={styles.noteBox}>
                  <strong style={{ color: C.greenLight }}>Примечание:&nbsp;</strong>
                  {data.note}
                </div>
              )}
            </div>

            {/* Быстрые действия */}
            <div style={styles.widget}>
              <h3 style={styles.widgetTitle}>Быстрые действия</h3>
              <div style={{ display: 'flex', gap: 10, marginBottom: 18, flexWrap: 'wrap' as const }}>
                <a href={linkTo('users')} style={styles.btnBlue}>
                  Пользователи
                </a>
                <a href={linkTo('courses')} style={styles.btnGreen}>
                  Курсы
                </a>
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: C.textGhost,
                  marginBottom: 8,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.07em',
                }}
              >
                Совет
              </div>
              <div style={styles.tipBox}>{tip}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
