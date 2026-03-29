import React, { useEffect, useState } from 'react';

type DashboardData = {
  visits?: number;
  users?: number;
  courses?: number;
  enrollments?: number;
  timestamp?: string;
  note?: string;
  error?: string;
};

const cardStyle: React.CSSProperties = {
  background: '#fff',
  borderRadius: 8,
  padding: '16px',
  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
  minWidth: 160,
  flex: '1 1 0',
};

const headerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 16,
};

const gridStyle: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  marginBottom: 16,
  flexWrap: 'wrap' as const,
};

const widgetStyle: React.CSSProperties = {
  ...cardStyle,
  minWidth: 320,
};

const smallMuted: React.CSSProperties = {
  color: '#666',
  fontSize: 12,
};

function buildDashboardUrl() {
  // AdminJS serves the dashboard handler at <adminRoot>/api/dashboard
  // Compute admin root from current path (strip trailing slash)
  const base = window.location.pathname.replace(/\/$/, '');
  return `${base}/api/dashboard`;
}

export default function Dashboard(): JSX.Element {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tip, setTip] = useState<string>('Welcome to Netcourse Admin!');

  useEffect(() => {
    const url = buildDashboardUrl();

    let mounted = true;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url, { credentials: 'same-origin' });
        if (!res.ok) {
          throw new Error(`Network error: ${res.status} ${res.statusText}`);
        }
        const json = await res.json();
        if (!mounted) return;
        setData(json);
        if (json?.note) {
          setTip(json.note);
        }
      } catch (err: any) {
        if (!mounted) return;
        setError(String(err.message ?? err));
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchData();

    // refresh periodically
    const interval = setInterval(fetchData, 30_000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  // simple client-side random tips for the second widget
  useEffect(() => {
    const tips = [
      'Pro tip: Use filters to quickly find users by role.',
      'You can export data from the resource list using the built-in CSV button.',
      'Consider hiding sensitive fields (e.g., password) from list views.',
      'Enable AUTOLOAD_DB=true to let AdminJS discover DB tables automatically.',
      'Remember to set a strong COOKIE_SECRET before exposing the panel.',
    ];
    const id = setInterval(() => {
      setTip(tips[Math.floor(Math.random() * tips.length)]);
    }, 10_000);
    return () => clearInterval(id);
  }, []);

  const adminBase = window.location.pathname.replace(/\/$/, '');
  const linkTo = (resourceId: string) => `${adminBase}/resources/${resourceId}`;

  return (
    <div style={{ padding: 24 }}>
      <div style={headerStyle}>
        <div>
          <h1 style={{ margin: 0 }}>Admin Dashboard</h1>
          <div style={smallMuted}>Quick overview of site metrics</div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 12, color: '#999' }}>
            {data?.timestamp ? `Updated: ${new Date(data.timestamp).toLocaleString()}` : ''}
          </div>
        </div>
      </div>

      {loading ? (
        <div style={{ ...cardStyle }}>Loading metrics…</div>
      ) : error ? (
        <div style={{ ...cardStyle, color: 'red' }}>Failed to load dashboard: {error}</div>
      ) : (
        <>
          <div style={gridStyle}>
            <div style={cardStyle}>
              <div style={{ fontSize: 12, color: '#777' }}>Site visits</div>
              <div style={{ fontSize: 28, fontWeight: 600 }}>{data?.visits ?? '—'}</div>
              <div style={smallMuted}>Proxy: visits table (if exists)</div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: 12, color: '#777' }}>Users</div>
              <div style={{ fontSize: 28, fontWeight: 600 }}>{data?.users ?? '—'}</div>
              <div style={smallMuted}>
                <a href={linkTo('users')}>Open users</a>
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: 12, color: '#777' }}>Courses</div>
              <div style={{ fontSize: 28, fontWeight: 600 }}>{data?.courses ?? '—'}</div>
              <div style={smallMuted}>
                <a href={linkTo('courses')}>Open courses</a>
              </div>
            </div>

            <div style={cardStyle}>
              <div style={{ fontSize: 12, color: '#777' }}>Enrollments</div>
              <div style={{ fontSize: 28, fontWeight: 600 }}>{data?.enrollments ?? '—'}</div>
              <div style={smallMuted}>Total enrollments</div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' as const }}>
            <div style={widgetStyle}>
              <h3 style={{ marginTop: 0 }}>Site summary</h3>
              <p style={{ margin: '8px 0' }}>This is site Dashboard, access restricted, especialy for blacks</p>
              {data?.note && <div style={{ marginTop: 8, color: '#666', fontSize: 13 }}>Note: {data.note}</div>}
            </div>

            <div style={widgetStyle}>
              <h3 style={{ marginTop: 0 }}>Quick actions</h3>
              <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                <a
                  href={linkTo('users')}
                  className="btn"
                  style={{
                    padding: '8px 12px',
                    background: '#2563eb',
                    color: '#fff',
                    borderRadius: 6,
                    textDecoration: 'none',
                  }}
                >
                  Manage Users
                </a>
                <a
                  href={linkTo('courses')}
                  className="btn"
                  style={{
                    padding: '8px 12px',
                    background: '#10b981',
                    color: '#fff',
                    borderRadius: 6,
                    textDecoration: 'none',
                  }}
                >
                  Manage Courses
                </a>
              </div>

              <h4 style={{ marginBottom: 8 }}>Tip</h4>
              <div style={{ color: '#333' }}>{tip}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
