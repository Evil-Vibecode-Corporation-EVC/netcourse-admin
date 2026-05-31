import React, { useState } from 'react';

const C = {
  bgPage: '#020617',
  bgCard: '#1e293b',
  bgInput: '#0f172a',
  border: '#334155',
  green: '#10b981',
  greenDark: '#059669',
  error: '#ef4444',
  white: '#ffffff',
  muted: '#cbd5e1',
  faint: '#94a3b8',
  ghost: '#64748b',
} as const;

type Reply = { id: number; body: string; user_id: number; user_email: string; created_at: string };

export default function ForumEdit(props: any): JSX.Element {
  const record = props.record?.params || {};
  const initialReplies: Reply[] = (() => {
    try { return record.replies_json ? JSON.parse(record.replies_json) : []; } catch { return []; }
  })();
  const [replies] = useState<Reply[]>(initialReplies);
  const [toDelete, setToDelete] = useState<Set<number>>(new Set());
  const [submitting, setSubmitting] = useState(false);

  const apiUrl = window.location.pathname.replace(/^\/resources\//, '/api/resources/');

  const toggleDelete = (id: number) => {
    setToDelete(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
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
        alert(data.notice?.message || 'Ошибка при сохранении');
      }
    } catch (err: any) {
      alert(`Ошибка: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ padding: 24, minHeight: '100vh', backgroundColor: C.bgPage, color: C.white, fontFamily: "'Roboto', sans-serif" }}>
      <form method="POST" onSubmit={handleSubmit} style={{ maxWidth: 700, margin: '0 auto' }}>
        <h1 style={{ margin: '0 0 4px', fontSize: 22, fontWeight: 700 }}>Редактирование поста</h1>
        <p style={{ margin: '0 0 24px', fontSize: 13, color: C.ghost }}>
          Отметьте ответы для удаления
        </p>

        <div style={{ marginBottom: 24, padding: 16, background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: 8 }}>
          <h2 style={{ fontSize: 16, fontWeight: 600, color: C.muted, margin: '0 0 12px' }}>
            Ответы
            <span style={{ fontSize: 12, color: C.ghost, fontWeight: 400, marginLeft: 8 }}>({replies.length})</span>
          </h2>

          {replies.length === 0 && (
            <p style={{ fontSize: 13, color: C.ghost }}>Нет ответов</p>
          )}

          {replies.map((reply) => {
            const marked = toDelete.has(reply.id);
            return (
              <div
                key={reply.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 8,
                  marginBottom: 8,
                  padding: 10,
                  background: C.bgInput,
                  border: `1px solid ${marked ? C.error : C.border}`,
                  borderRadius: 6,
                  opacity: marked ? 0.5 : 1,
                }}
              >
                <input
                  type="checkbox"
                  checked={marked}
                  onChange={() => toggleDelete(reply.id)}
                  style={{ marginTop: 4, accentColor: C.error }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, color: C.ghost, marginBottom: 4 }}>
                    #{reply.id} — {reply.user_email || `user#${reply.user_id}`} · {new Date(reply.created_at).toLocaleString()}
                  </div>
                  <div style={{ fontSize: 13, color: C.white, whiteSpace: 'pre-wrap' }}>{reply.body}</div>
                </div>
              </div>
            );
          })}

          <input type="hidden" name="delete_reply_ids" value={JSON.stringify([...toDelete])} />
        </div>

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
