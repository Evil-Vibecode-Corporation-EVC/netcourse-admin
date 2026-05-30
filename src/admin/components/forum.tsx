import React from 'react';

export default function Forum(): JSX.Element {
  return (
    <div style={{ padding: 24, color: '#fff', fontFamily: "'Roboto', sans-serif" }}>
      <h1 style={{ marginTop: 0 }}>Форум</h1>
      <p style={{ color: '#cbd5e1' }}>Здесь будут виджеты и управление разделами форума (темы, сообщения, модерация).</p>
      <div style={{ marginTop: 16, padding: 12, background: '#0f172a', border: '1px solid #334155', borderRadius: 8 }}>
        <strong>Пока заглушка</strong>
        <div style={{ marginTop: 8, color: '#94a3b8' }}>Добавьте источник данных в DB/adapter и зарегистрируйте ресурс в src/admin/options.ts</div>
      </div>
    </div>
  );
}
