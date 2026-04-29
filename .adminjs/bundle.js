(function (React) {
    'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    var React__default = /*#__PURE__*/_interopDefault(React);

    const C$1 = {
      bgPage: '#020617',
      bgDark: '#0f172a',
      bgInput: '#0f172a',
      border: '#334155',
      green: '#10b981',
      greenDark: '#059669',
      cyan: '#06b6d4',
      blue: '#3b82f6',
      error: '#ef4444',
      white: '#ffffff',
      faint: '#94a3b8',
      ghost: '#64748b'
    };
    function Login() {
      const {
        action = '/admin/login',
        errorMessage
      } = window.__APP_STATE__ ?? {};
      const branding = window.REDUX_STATE?.branding ?? {};
      const [hover, setHover] = React.useState(null);
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: s.page
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: s.card
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: s.left
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: s.brand
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: s.brandDot
      }), /*#__PURE__*/React__default.default.createElement("span", {
        style: s.brandName
      }, branding.companyName ?? 'Netcourse Admin')), /*#__PURE__*/React__default.default.createElement("h1", {
        style: s.welcome
      }, "\u0414\u043E\u0431\u0440\u043E", /*#__PURE__*/React__default.default.createElement("br", null), "\u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C"), /*#__PURE__*/React__default.default.createElement("p", {
        style: s.welcomeSub
      }, "\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439 Netcourse. \u0414\u043E\u0441\u0442\u0443\u043F \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u0432."), /*#__PURE__*/React__default.default.createElement("div", {
        style: s.decorRow
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          ...s.decorChip,
          borderColor: C$1.green,
          color: C$1.green
        }
      }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          ...s.decorChip,
          borderColor: C$1.cyan,
          color: C$1.cyan
        }
      }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          ...s.decorChip,
          borderColor: C$1.blue,
          color: C$1.blue
        }
      }, "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430")), /*#__PURE__*/React__default.default.createElement("svg", {
        style: s.dots,
        viewBox: "0 0 120 80",
        xmlns: "http://www.w3.org/2000/svg"
      }, Array.from({
        length: 6
      }, (_, row) => Array.from({
        length: 8
      }, (_, col) => (/*#__PURE__*/React__default.default.createElement("circle", {
        key: `${row}-${col}`,
        cx: col * 16 + 8,
        cy: row * 13 + 6,
        r: "1.5",
        fill: "rgba(255,255,255,0.15)"
      })))))), /*#__PURE__*/React__default.default.createElement("form", {
        action: action,
        method: "POST",
        style: s.right
      }, /*#__PURE__*/React__default.default.createElement("h2", {
        style: s.formTitle
      }, "\u0412\u0445\u043E\u0434 \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0443"), /*#__PURE__*/React__default.default.createElement("p", {
        style: s.formSub
      }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0438 \u0443\u0447\u0451\u0442\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"), errorMessage && (/*#__PURE__*/React__default.default.createElement("div", {
        style: s.errorBox
      }, /*#__PURE__*/React__default.default.createElement("span", {
        style: s.errorDot
      }, "\u25CF"), errorMessage)), /*#__PURE__*/React__default.default.createElement("div", {
        style: s.field
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "login-email",
        style: s.label
      }, "Email ", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          color: C$1.error
        }
      }, "*")), /*#__PURE__*/React__default.default.createElement("input", {
        id: "login-email",
        name: "email",
        type: "email",
        placeholder: "admin@example.com",
        autoComplete: "email",
        required: true,
        style: s.input,
        onFocus: e => {
          setHover('email');
          e.target.style.borderColor = C$1.green;
          e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
        },
        onBlur: e => {
          setHover(null);
          e.target.style.borderColor = C$1.border;
          e.target.style.boxShadow = 'none';
        }
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: s.field
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "login-password",
        style: s.label
      }, "\u041F\u0430\u0440\u043E\u043B\u044C ", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          color: C$1.error
        }
      }, "*")), /*#__PURE__*/React__default.default.createElement("input", {
        id: "login-password",
        name: "password",
        type: "password",
        placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
        autoComplete: "current-password",
        required: true,
        style: s.input,
        onFocus: e => {
          setHover('password');
          e.target.style.borderColor = C$1.green;
          e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
        },
        onBlur: e => {
          setHover(null);
          e.target.style.borderColor = C$1.border;
          e.target.style.boxShadow = 'none';
        }
      })), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        style: s.btn,
        onMouseEnter: e => e.target.style.background = `linear-gradient(135deg, ${C$1.greenDark}, #047857)`,
        onMouseLeave: e => e.target.style.background = `linear-gradient(135deg, ${C$1.green}, ${C$1.greenDark})`
      }, "\u0412\u043E\u0439\u0442\u0438"), /*#__PURE__*/React__default.default.createElement("p", {
        style: s.hint
      }, "\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u044B \u0441\u043E \u0432\u0445\u043E\u0434\u043E\u043C? \u041E\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044C \u043A \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u043C\u0443 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0443."))));
    }
    const s = {
      page: {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: C$1.bgPage,
        fontFamily: "'Roboto', sans-serif",
        padding: '24px',
        boxSizing: 'border-box'
      },
      card: {
        display: 'flex',
        width: '100%',
        maxWidth: 900,
        minHeight: 520,
        borderRadius: 16,
        overflow: 'hidden',
        border: `1px solid ${C$1.border}`,
        boxShadow: '0 25px 50px rgba(0,0,0,0.6)'
      },
      left: {
        flex: '0 0 380px',
        background: `linear-gradient(145deg, #0d2d20 0%, #0a2540 100%)`,
        borderRight: `1px solid ${C$1.border}`,
        padding: '48px 40px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      },
      brand: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 40
      },
      brandDot: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: C$1.green,
        boxShadow: `0 0 8px ${C$1.green}`
      },
      brandName: {
        fontSize: 13,
        fontWeight: 600,
        color: C$1.faint,
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      },
      welcome: {
        fontSize: 36,
        fontWeight: 700,
        color: C$1.white,
        lineHeight: 1.2,
        marginBottom: 16,
        letterSpacing: '-0.5px'
      },
      welcomeSub: {
        fontSize: 14,
        color: C$1.faint,
        lineHeight: 1.65,
        marginBottom: 32
      },
      decorRow: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 'auto'
      },
      decorChip: {
        fontSize: 11,
        fontWeight: 500,
        padding: '4px 10px',
        borderRadius: 20,
        border: '1px solid',
        letterSpacing: '0.05em',
        opacity: 0.7
      },
      dots: {
        position: 'absolute',
        bottom: 24,
        right: 24,
        width: 120,
        height: 80,
        opacity: 0.6,
        pointerEvents: 'none'
      },
      right: {
        flex: 1,
        backgroundColor: C$1.bgDark,
        padding: '48px 44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      formTitle: {
        fontSize: 24,
        fontWeight: 700,
        color: C$1.white,
        marginBottom: 6,
        letterSpacing: '-0.3px'
      },
      formSub: {
        fontSize: 13,
        color: C$1.ghost,
        marginBottom: 32
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
        color: C$1.error,
        marginBottom: 20
      },
      errorDot: {
        fontSize: 8,
        lineHeight: 1,
        color: C$1.error
      },
      field: {
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 6
      },
      label: {
        fontSize: 13,
        fontWeight: 500,
        color: C$1.faint
      },
      input: {
        width: '100%',
        padding: '11px 14px',
        backgroundColor: C$1.bgInput,
        color: C$1.white,
        border: `1px solid ${C$1.border}`,
        borderRadius: 8,
        fontSize: 14,
        outline: 'none',
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
        boxSizing: 'border-box',
        WebkitTextFillColor: C$1.white
      },
      btn: {
        width: '100%',
        padding: '12px',
        background: `linear-gradient(135deg, ${C$1.green}, ${C$1.greenDark})`,
        color: C$1.white,
        border: 'none',
        borderRadius: 8,
        fontSize: 15,
        fontWeight: 600,
        cursor: 'pointer',
        marginTop: 8,
        letterSpacing: '0.02em',
        transition: 'background 0.15s ease'
      },
      hint: {
        marginTop: 20,
        fontSize: 12,
        color: C$1.ghost,
        textAlign: 'center',
        lineHeight: 1.5
      }
    };

    const C = {
      bgPage: '#020617',
      bgCard: '#1e293b',
      border: '#334155',
      green: '#10b981',
      greenLight: '#34d399',
      greenDark: '#059669',
      cyan: '#06b6d4',
      blue: '#3b82f6',
      error: '#ef4444',
      textPrimary: '#ffffff',
      textMuted: '#cbd5e1',
      textFaint: '#94a3b8',
      textGhost: '#64748b'
    };
    const styles = {
      page: {
        padding: 24,
        minHeight: '100vh',
        backgroundColor: C.bgPage,
        color: C.textPrimary,
        fontFamily: "'Roboto', sans-serif"
      },
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 28,
        paddingBottom: 20,
        borderBottom: `1px solid ${C.border}`
      },
      title: {
        margin: 0,
        fontSize: 24,
        fontWeight: 700,
        color: C.textPrimary,
        letterSpacing: '-0.3px'
      },
      subtitle: {
        marginTop: 4,
        fontSize: 13,
        color: C.textGhost
      },
      timestamp: {
        fontSize: 12,
        color: C.textGhost,
        textAlign: 'right',
        marginTop: 4
      },
      metricsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: 16,
        marginBottom: 24
      },
      metricCard: accentColor => ({
        backgroundColor: C.bgCard,
        border: `1px solid ${C.border}`,
        borderTop: `3px solid ${accentColor}`,
        borderRadius: 10,
        padding: '18px 20px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease'
      }),
      metricLabel: {
        fontSize: 11,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: C.textGhost,
        marginBottom: 8
      },
      metricValue: {
        fontSize: 32,
        fontWeight: 700,
        color: C.textPrimary,
        lineHeight: 1,
        marginBottom: 8
      },
      metricLink: {
        fontSize: 12,
        color: C.greenLight,
        textDecoration: 'none'
      },
      metricSub: {
        fontSize: 12,
        color: C.textGhost
      },
      widgetsRow: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 16
      },
      widget: {
        backgroundColor: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 10,
        padding: '20px 22px'
      },
      widgetTitle: {
        margin: '0 0 14px 0',
        fontSize: 15,
        fontWeight: 600,
        color: C.textMuted
      },
      btnGreen: {
        display: 'inline-block',
        padding: '8px 14px',
        background: `linear-gradient(135deg, ${C.green}, ${C.greenDark})`,
        color: '#fff',
        borderRadius: 7,
        textDecoration: 'none',
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: '0.01em'
      },
      btnBlue: {
        display: 'inline-block',
        padding: '8px 14px',
        background: `linear-gradient(135deg, ${C.blue}, #2563eb)`,
        color: '#fff',
        borderRadius: 7,
        textDecoration: 'none',
        fontSize: 13,
        fontWeight: 500,
        letterSpacing: '0.01em'
      },
      noteBox: {
        marginTop: 12,
        padding: '10px 14px',
        backgroundColor: 'rgba(16,185,129,0.08)',
        border: `1px solid rgba(16,185,129,0.25)`,
        borderRadius: 7,
        fontSize: 12,
        color: C.textFaint
      },
      errorBox: {
        padding: '14px 18px',
        backgroundColor: 'rgba(239,68,68,0.1)',
        border: `1px solid rgba(239,68,68,0.3)`,
        borderRadius: 10,
        fontSize: 14,
        color: C.error
      },
      loadingBox: {
        padding: '14px 18px',
        backgroundColor: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: 10,
        fontSize: 14,
        color: C.textFaint
      },
      tipBox: {
        padding: '12px 14px',
        backgroundColor: 'rgba(6,182,212,0.08)',
        border: `1px solid rgba(6,182,212,0.2)`,
        borderRadius: 7,
        fontSize: 13,
        color: C.textFaint,
        lineHeight: 1.55
      },
      metricGlow: accentColor => ({
        position: 'absolute',
        top: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: '0 10px 0 60px',
        backgroundColor: accentColor,
        opacity: 0.08,
        pointerEvents: 'none'
      })
    };
    function buildDashboardUrl() {
      const base = window.location.pathname.replace(/\/$/, '');
      return `${base}/api/dashboard`;
    }
    const TIPS = ['Используйте фильтры, чтобы быстро найти пользователей по роли.', 'Данные из таблиц можно экспортировать через встроенную кнопку CSV.', 'Скройте чувствительные поля (например, password) в представлении списка.', 'Включите AUTOLOAD_DB=true, чтобы AdminJS обнаруживал таблицы БД автоматически.', 'Обязательно задайте надёжный COOKIE_SECRET перед открытием панели в продакшене.'];
    function MetricCard({
      label,
      value,
      sub,
      accent
    }) {
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.metricCard(accent)
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.metricGlow(accent)
      }), /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.metricLabel
      }, label), /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.metricValue
      }, value), sub && /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.metricSub
      }, sub));
    }
    function Dashboard() {
      const [data, setData] = React.useState(null);
      const [loading, setLoading] = React.useState(true);
      const [fetchError, setFetchError] = React.useState(null);
      const [tip, setTip] = React.useState(TIPS[0]);
      React.useEffect(() => {
        const url = buildDashboardUrl();
        let mounted = true;
        async function fetchData() {
          setLoading(true);
          setFetchError(null);
          try {
            const res = await fetch(url, {
              credentials: 'same-origin'
            });
            if (!res.ok) throw new Error(`Network error: ${res.status} ${res.statusText}`);
            const json = await res.json();
            if (!mounted) return;
            setData(json);
          } catch (err) {
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
      React.useEffect(() => {
        let idx = 1;
        const id = setInterval(() => {
          setTip(TIPS[idx % TIPS.length]);
          idx++;
        }, 10_000);
        return () => clearInterval(id);
      }, []);
      const adminBase = window.location.pathname.replace(/\/$/, '');
      const linkTo = resourceId => `${adminBase}/resources/${resourceId}`;
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.page
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.header
      }, /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("h1", {
        style: styles.title
      }, "Admin Dashboard"), /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.subtitle
      }, "\u041E\u0431\u0437\u043E\u0440 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0445 \u043C\u0435\u0442\u0440\u0438\u043A \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B")), /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.timestamp
      }, data?.timestamp ? `Обновлено: ${new Date(data.timestamp).toLocaleString('ru-RU')}` : '\u00a0')), loading ? (/*#__PURE__*/React__default.default.createElement("div", {
        style: styles.loadingBox
      }, "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u043C\u0435\u0442\u0440\u0438\u043A\u2026")) : fetchError ? (/*#__PURE__*/React__default.default.createElement("div", {
        style: styles.errorBox
      }, "\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u0448\u0431\u043E\u0440\u0434\u0430: ", fetchError)) : (/*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.metricsGrid
      }, /*#__PURE__*/React__default.default.createElement(MetricCard, {
        label: "\u041F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F",
        value: data?.visits ?? '—',
        sub: "\u0422\u0430\u0431\u043B\u0438\u0446\u0430 site_visits",
        accent: C.cyan
      }), /*#__PURE__*/React__default.default.createElement(MetricCard, {
        label: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438",
        value: data?.users ?? '—',
        sub: /*#__PURE__*/React__default.default.createElement("a", {
          href: linkTo('users'),
          style: styles.metricLink
        }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 \u2192"),
        accent: C.blue
      }), /*#__PURE__*/React__default.default.createElement(MetricCard, {
        label: "\u041A\u0443\u0440\u0441\u044B",
        value: data?.courses ?? '—',
        sub: /*#__PURE__*/React__default.default.createElement("a", {
          href: linkTo('courses'),
          style: styles.metricLink
        }, "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043A\u0443\u0440\u0441\u044B \u2192"),
        accent: C.green
      }), /*#__PURE__*/React__default.default.createElement(MetricCard, {
        label: "\u0417\u0430\u043F\u0438\u0441\u0438",
        value: data?.enrollments ?? '—',
        sub: "\u0412\u0441\u0435\u0433\u043E \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u043A\u0443\u0440\u0441\u044B",
        accent: C.greenLight
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.widgetsRow
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.widget
      }, /*#__PURE__*/React__default.default.createElement("h3", {
        style: styles.widgetTitle
      }, "\u0421\u0432\u043E\u0434\u043A\u0430 \u043F\u043E \u0441\u0430\u0439\u0442\u0443"), /*#__PURE__*/React__default.default.createElement("p", {
        style: {
          margin: '0 0 8px',
          fontSize: 14,
          color: C.textFaint,
          lineHeight: 1.6
        }
      }, "\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u043E\u0439 Netcourse. \u0414\u043E\u0441\u0442\u0443\u043F \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u043D\u044B\u0445 \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u043E\u0432."), data?.note && (/*#__PURE__*/React__default.default.createElement("div", {
        style: styles.noteBox
      }, /*#__PURE__*/React__default.default.createElement("strong", {
        style: {
          color: C.greenLight
        }
      }, "\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u0435:\u00A0"), data.note))), /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.widget
      }, /*#__PURE__*/React__default.default.createElement("h3", {
        style: styles.widgetTitle
      }, "\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          gap: 10,
          marginBottom: 18,
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React__default.default.createElement("a", {
        href: linkTo('users'),
        style: styles.btnBlue
      }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"), /*#__PURE__*/React__default.default.createElement("a", {
        href: linkTo('courses'),
        style: styles.btnGreen
      }, "\u041A\u0443\u0440\u0441\u044B")), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: 600,
          color: C.textGhost,
          marginBottom: 8,
          textTransform: 'uppercase',
          letterSpacing: '0.07em'
        }
      }, "\u0421\u043E\u0432\u0435\u0442"), /*#__PURE__*/React__default.default.createElement("div", {
        style: styles.tipBox
      }, tip))))));
    }

    AdminJS.UserComponents = {};
    AdminJS.UserComponents.Login = Login;
    AdminJS.UserComponents.Dashboard = Dashboard;

})(React);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvbG9naW4uanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvZGFzaGJvYXJkLmpzIiwiZW50cnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgQyA9IHtcbiAgICBiZ1BhZ2U6ICcjMDIwNjE3JyxcbiAgICBiZ0Rhcms6ICcjMGYxNzJhJyxcbiAgICBiZ0NhcmQ6ICcjMWUyOTNiJyxcbiAgICBiZ0lucHV0OiAnIzBmMTcyYScsXG4gICAgYm9yZGVyOiAnIzMzNDE1NScsXG4gICAgZ3JlZW46ICcjMTBiOTgxJyxcbiAgICBncmVlbkRhcms6ICcjMDU5NjY5JyxcbiAgICBjeWFuOiAnIzA2YjZkNCcsXG4gICAgYmx1ZTogJyMzYjgyZjYnLFxuICAgIGVycm9yOiAnI2VmNDQ0NCcsXG4gICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgICBtdXRlZDogJyNjYmQ1ZTEnLFxuICAgIGZhaW50OiAnIzk0YTNiOCcsXG4gICAgZ2hvc3Q6ICcjNjQ3NDhiJyxcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgICBjb25zdCB7IGFjdGlvbiA9ICcvYWRtaW4vbG9naW4nLCBlcnJvck1lc3NhZ2UgfSA9ICh3aW5kb3cuX19BUFBfU1RBVEVfXyA/PyB7fSk7XG4gICAgY29uc3QgYnJhbmRpbmcgPSB3aW5kb3cuUkVEVVhfU1RBVEU/LmJyYW5kaW5nID8/IHt9O1xuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMucGFnZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMuY2FyZCB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzLmxlZnQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMuYnJhbmQgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzLmJyYW5kRG90IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiBzLmJyYW5kTmFtZSB9LCBicmFuZGluZy5jb21wYW55TmFtZSA/PyAnTmV0Y291cnNlIEFkbWluJykpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IHN0eWxlOiBzLndlbGNvbWUgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDE0XFx1MDQzRVxcdTA0MzFcXHUwNDQwXFx1MDQzRVwiLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDQzRlxcdTA0M0VcXHUwNDM2XFx1MDQzMFxcdTA0M0JcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQ0Q1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiBzLndlbGNvbWVTdWIgfSwgXCJcXHUwNDFGXFx1MDQzMFxcdTA0M0RcXHUwNDM1XFx1MDQzQlxcdTA0NEMgXFx1MDQ0M1xcdTA0M0ZcXHUwNDQwXFx1MDQzMFxcdTA0MzJcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQ0RiBcXHUwNDNGXFx1MDQzQlxcdTA0MzBcXHUwNDQyXFx1MDQ0NFxcdTA0M0VcXHUwNDQwXFx1MDQzQ1xcdTA0M0VcXHUwNDM5IE5ldGNvdXJzZS4gXFx1MDQxNFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0NDNcXHUwNDNGIFxcdTA0NDJcXHUwNDNFXFx1MDQzQlxcdTA0NENcXHUwNDNBXFx1MDQzRSBcXHUwNDM0XFx1MDQzQlxcdTA0NEYgXFx1MDQzMFxcdTA0MzJcXHUwNDQyXFx1MDQzRVxcdTA0NDBcXHUwNDM4XFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDNEXFx1MDQ0QlxcdTA0NDUgXFx1MDQzMFxcdTA0MzRcXHUwNDNDXFx1MDQzOFxcdTA0M0RcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDQwXFx1MDQzMFxcdTA0NDJcXHUwNDNFXFx1MDQ0MFxcdTA0M0VcXHUwNDMyLlwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMuZGVjb3JSb3cgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IC4uLnMuZGVjb3JDaGlwLCBib3JkZXJDb2xvcjogQy5ncmVlbiwgY29sb3I6IEMuZ3JlZW4gfSB9LCBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzQlxcdTA0NENcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQzOFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IC4uLnMuZGVjb3JDaGlwLCBib3JkZXJDb2xvcjogQy5jeWFuLCBjb2xvcjogQy5jeWFuIH0gfSwgXCJcXHUwNDFBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQ0QlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IC4uLnMuZGVjb3JDaGlwLCBib3JkZXJDb2xvcjogQy5ibHVlLCBjb2xvcjogQy5ibHVlIH0gfSwgXCJcXHUwNDEwXFx1MDQzRFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDM4XFx1MDQzQVxcdTA0MzBcIikpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgeyBzdHlsZTogcy5kb3RzLCB2aWV3Qm94OiBcIjAgMCAxMjAgODBcIiwgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB9LCBBcnJheS5mcm9tKHsgbGVuZ3RoOiA2IH0sIChfLCByb3cpID0+IEFycmF5LmZyb20oeyBsZW5ndGg6IDggfSwgKF8sIGNvbCkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJjaXJjbGVcIiwgeyBrZXk6IGAke3Jvd30tJHtjb2x9YCwgY3g6IGNvbCAqIDE2ICsgOCwgY3k6IHJvdyAqIDEzICsgNiwgcjogXCIxLjVcIiwgZmlsbDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMTUpXCIgfSkpKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgYWN0aW9uOiBhY3Rpb24sIG1ldGhvZDogXCJQT1NUXCIsIHN0eWxlOiBzLnJpZ2h0IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGU6IHMuZm9ybVRpdGxlIH0sIFwiXFx1MDQxMlxcdTA0NDVcXHUwNDNFXFx1MDQzNCBcXHUwNDMyIFxcdTA0NDFcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDM1XFx1MDQzQ1xcdTA0NDNcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBzdHlsZTogcy5mb3JtU3ViIH0sIFwiXFx1MDQxMlxcdTA0MzJcXHUwNDM1XFx1MDQzNFxcdTA0MzhcXHUwNDQyXFx1MDQzNSBcXHUwNDMyXFx1MDQzMFxcdTA0NDhcXHUwNDM4IFxcdTA0NDNcXHUwNDQ3XFx1MDQ1MVxcdTA0NDJcXHUwNDNEXFx1MDQ0QlxcdTA0MzUgXFx1MDQzNFxcdTA0MzBcXHUwNDNEXFx1MDQzRFxcdTA0NEJcXHUwNDM1XCIpLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzLmVycm9yQm94IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHMuZXJyb3JEb3QgfSwgXCJcXHUyNUNGXCIpLFxuICAgICAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMuZmllbGQgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgaHRtbEZvcjogXCJsb2dpbi1lbWFpbFwiLCBzdHlsZTogcy5sYWJlbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJFbWFpbCBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgY29sb3I6IEMuZXJyb3IgfSB9LCBcIipcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBpZDogXCJsb2dpbi1lbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwiYWRtaW5AZXhhbXBsZS5jb21cIiwgYXV0b0NvbXBsZXRlOiBcImVtYWlsXCIsIHJlcXVpcmVkOiB0cnVlLCBzdHlsZTogcy5pbnB1dCwgb25Gb2N1czogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG92ZXIoJ2VtYWlsJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBDLmdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IGAwIDAgMCAzcHggcmdiYSgxNiwxODUsMTI5LDAuMTUpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQmx1cjogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG92ZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBDLmJvcmRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMuZmllbGQgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgaHRtbEZvcjogXCJsb2dpbi1wYXNzd29yZFwiLCBzdHlsZTogcy5sYWJlbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDFGXFx1MDQzMFxcdTA0NDBcXHUwNDNFXFx1MDQzQlxcdTA0NEMgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IGNvbG9yOiBDLmVycm9yIH0gfSwgXCIqXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgaWQ6IFwibG9naW4tcGFzc3dvcmRcIiwgbmFtZTogXCJwYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOiBcIlxcdTIwMjJcXHUyMDIyXFx1MjAyMlxcdTIwMjJcXHUyMDIyXFx1MjAyMlxcdTIwMjJcXHUyMDIyXCIsIGF1dG9Db21wbGV0ZTogXCJjdXJyZW50LXBhc3N3b3JkXCIsIHJlcXVpcmVkOiB0cnVlLCBzdHlsZTogcy5pbnB1dCwgb25Gb2N1czogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG92ZXIoJ3Bhc3N3b3JkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBDLmdyZWVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IGAwIDAgMCAzcHggcmdiYSgxNiwxODUsMTI5LDAuMTUpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uQmx1cjogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG92ZXIobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBDLmJvcmRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgc3R5bGU6IHMuYnRuLCBvbk1vdXNlRW50ZXI6IGUgPT4gKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7Qy5ncmVlbkRhcmt9LCAjMDQ3ODU3KWApLCBvbk1vdXNlTGVhdmU6IGUgPT4gKGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPVxuICAgICAgICAgICAgICAgICAgICAgICAgYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7Qy5ncmVlbn0sICR7Qy5ncmVlbkRhcmt9KWApIH0sIFwiXFx1MDQxMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MlxcdTA0MzhcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBzdHlsZTogcy5oaW50IH0sIFwiXFx1MDQxRlxcdTA0NDBcXHUwNDNFXFx1MDQzMVxcdTA0M0JcXHUwNDM1XFx1MDQzQ1xcdTA0NEIgXFx1MDQ0MVxcdTA0M0UgXFx1MDQzMlxcdTA0NDVcXHUwNDNFXFx1MDQzNFxcdTA0M0VcXHUwNDNDPyBcXHUwNDFFXFx1MDQzMVxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0MzhcXHUwNDQyXFx1MDQzNVxcdTA0NDFcXHUwNDRDIFxcdTA0M0EgXFx1MDQ0MVxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzVcXHUwNDNDXFx1MDQzRFxcdTA0M0VcXHUwNDNDXFx1MDQ0MyBcXHUwNDMwXFx1MDQzNFxcdTA0M0NcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0VcXHUwNDQwXFx1MDQ0My5cIikpKSkpO1xufVxuY29uc3QgcyA9IHtcbiAgICBwYWdlOiB7XG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdQYWdlLFxuICAgICAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIsXG4gICAgICAgIHBhZGRpbmc6ICcyNHB4JyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgfSxcbiAgICBjYXJkOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6IDkwMCxcbiAgICAgICAgbWluSGVpZ2h0OiA1MjAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMTYsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICAgICAgYm94U2hhZG93OiAnMCAyNXB4IDUwcHggcmdiYSgwLDAsMCwwLjYpJyxcbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgICAgZmxleDogJzAgMCAzODBweCcsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCAjMGQyZDIwIDAlLCAjMGEyNTQwIDEwMCUpYCxcbiAgICAgICAgYm9yZGVyUmlnaHQ6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgICAgICBwYWRkaW5nOiAnNDhweCA0MHB4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB9LFxuICAgIGJyYW5kOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGdhcDogMTAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNDAsXG4gICAgfSxcbiAgICBicmFuZERvdDoge1xuICAgICAgICB3aWR0aDogMTAsXG4gICAgICAgIGhlaWdodDogMTAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5ncmVlbixcbiAgICAgICAgYm94U2hhZG93OiBgMCAwIDhweCAke0MuZ3JlZW59YCxcbiAgICB9LFxuICAgIGJyYW5kTmFtZToge1xuICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgY29sb3I6IEMuZmFpbnQsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4xZW0nLFxuICAgIH0sXG4gICAgd2VsY29tZToge1xuICAgICAgICBmb250U2l6ZTogMzYsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgY29sb3I6IEMud2hpdGUsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICAgICAgbWFyZ2luQm90dG9tOiAxNixcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXG4gICAgfSxcbiAgICB3ZWxjb21lU3ViOiB7XG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgY29sb3I6IEMuZmFpbnQsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuNjUsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMzIsXG4gICAgfSxcbiAgICBkZWNvclJvdzoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgIGdhcDogOCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXG4gICAgfSxcbiAgICBkZWNvckNoaXA6IHtcbiAgICAgICAgZm9udFNpemU6IDExLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIHBhZGRpbmc6ICc0cHggMTBweCcsXG4gICAgICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCcsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjA1ZW0nLFxuICAgICAgICBvcGFjaXR5OiAwLjcsXG4gICAgfSxcbiAgICBkb3RzOiB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBib3R0b206IDI0LFxuICAgICAgICByaWdodDogMjQsXG4gICAgICAgIHdpZHRoOiAxMjAsXG4gICAgICAgIGhlaWdodDogODAsXG4gICAgICAgIG9wYWNpdHk6IDAuNixcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH0sXG4gICAgcmlnaHQ6IHtcbiAgICAgICAgZmxleDogMSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmJnRGFyayxcbiAgICAgICAgcGFkZGluZzogJzQ4cHggNDRweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICB9LFxuICAgIGZvcm1UaXRsZToge1xuICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgY29sb3I6IEMud2hpdGUsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogNixcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjNweCcsXG4gICAgfSxcbiAgICBmb3JtU3ViOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgY29sb3I6IEMuZ2hvc3QsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMzIsXG4gICAgfSxcbiAgICBlcnJvckJveDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBnYXA6IDgsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDE0cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIzOSw2OCw2OCwwLjEpJyxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkIHJnYmEoMjM5LDY4LDY4LDAuMylgLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgY29sb3I6IEMuZXJyb3IsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgfSxcbiAgICBlcnJvckRvdDoge1xuICAgICAgICBmb250U2l6ZTogOCxcbiAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgY29sb3I6IEMuZXJyb3IsXG4gICAgfSxcbiAgICBmaWVsZDoge1xuICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBnYXA6IDYsXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgY29sb3I6IEMuZmFpbnQsXG4gICAgfSxcbiAgICBpbnB1dDoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBwYWRkaW5nOiAnMTFweCAxNHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmJnSW5wdXQsXG4gICAgICAgIGNvbG9yOiBDLndoaXRlLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBXZWJraXRUZXh0RmlsbENvbG9yOiBDLndoaXRlLFxuICAgIH0sXG4gICAgYnRuOiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmc6ICcxMnB4JyxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7Qy5ncmVlbn0sICR7Qy5ncmVlbkRhcmt9KWAsXG4gICAgICAgIGNvbG9yOiBDLndoaXRlLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIG1hcmdpblRvcDogOCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDJlbScsXG4gICAgICAgIHRyYW5zaXRpb246ICdiYWNrZ3JvdW5kIDAuMTVzIGVhc2UnLFxuICAgIH0sXG4gICAgaGludDoge1xuICAgICAgICBtYXJnaW5Ub3A6IDIwLFxuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGNvbG9yOiBDLmdob3N0LFxuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgfSxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdTaWRlYmFyOiAnIzBmMTcyYScsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdDYXJkSG92ZXI6ICcjMjQzMjQ3JyxcbiAgICBib3JkZXI6ICcjMzM0MTU1JyxcbiAgICBncmVlbjogJyMxMGI5ODEnLFxuICAgIGdyZWVuTGlnaHQ6ICcjMzRkMzk5JyxcbiAgICBncmVlbkRhcms6ICcjMDU5NjY5JyxcbiAgICBjeWFuOiAnIzA2YjZkNCcsXG4gICAgYmx1ZTogJyMzYjgyZjYnLFxuICAgIGVycm9yOiAnI2VmNDQ0NCcsXG4gICAgdGV4dFByaW1hcnk6ICcjZmZmZmZmJyxcbiAgICB0ZXh0TXV0ZWQ6ICcjY2JkNWUxJyxcbiAgICB0ZXh0RmFpbnQ6ICcjOTRhM2I4JyxcbiAgICB0ZXh0R2hvc3Q6ICcjNjQ3NDhiJyxcbn07XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgcGFnZToge1xuICAgICAgICBwYWRkaW5nOiAyNCxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdQYWdlLFxuICAgICAgICBjb2xvcjogQy50ZXh0UHJpbWFyeSxcbiAgICAgICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDI4LFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIGNvbG9yOiBDLnRleHRQcmltYXJ5LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuM3B4JyxcbiAgICB9LFxuICAgIHN1YnRpdGxlOiB7XG4gICAgICAgIG1hcmdpblRvcDogNCxcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBjb2xvcjogQy50ZXh0R2hvc3QsXG4gICAgfSxcbiAgICB0aW1lc3RhbXA6IHtcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBjb2xvcjogQy50ZXh0R2hvc3QsXG4gICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgbWFyZ2luVG9wOiA0LFxuICAgIH0sXG4gICAgbWV0cmljc0dyaWQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKScsXG4gICAgICAgIGdhcDogMTYsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjQsXG4gICAgfSxcbiAgICBtZXRyaWNDYXJkOiAoYWNjZW50Q29sb3IpID0+ICh7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5iZ0NhcmQsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIGJvcmRlclRvcDogYDNweCBzb2xpZCAke2FjY2VudENvbG9yfWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgICAgIHBhZGRpbmc6ICcxOHB4IDIwcHgnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZScsXG4gICAgfSksXG4gICAgbWV0cmljTGFiZWw6IHtcbiAgICAgICAgZm9udFNpemU6IDExLFxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wOGVtJyxcbiAgICAgICAgY29sb3I6IEMudGV4dEdob3N0LFxuICAgICAgICBtYXJnaW5Cb3R0b206IDgsXG4gICAgfSxcbiAgICBtZXRyaWNWYWx1ZToge1xuICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgY29sb3I6IEMudGV4dFByaW1hcnksXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogOCxcbiAgICB9LFxuICAgIG1ldHJpY0xpbms6IHtcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBjb2xvcjogQy5ncmVlbkxpZ2h0LFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gICAgbWV0cmljU3ViOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgY29sb3I6IEMudGV4dEdob3N0LFxuICAgIH0sXG4gICAgd2lkZ2V0c1Jvdzoge1xuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpJyxcbiAgICAgICAgZ2FwOiAxNixcbiAgICB9LFxuICAgIHdpZGdldDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdDYXJkLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICBwYWRkaW5nOiAnMjBweCAyMnB4JyxcbiAgICB9LFxuICAgIHdpZGdldFRpdGxlOiB7XG4gICAgICAgIG1hcmdpbjogJzAgMCAxNHB4IDAnLFxuICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgY29sb3I6IEMudGV4dE11dGVkLFxuICAgIH0sXG4gICAgYnRuR3JlZW46IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBhZGRpbmc6ICc4cHggMTRweCcsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuZ3JlZW59LCAke0MuZ3JlZW5EYXJrfSlgLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDcsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMWVtJyxcbiAgICB9LFxuICAgIGJ0bkJsdWU6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBhZGRpbmc6ICc4cHggMTRweCcsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuYmx1ZX0sICMyNTYzZWIpYCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA3LFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDFlbScsXG4gICAgfSxcbiAgICBub3RlQm94OiB7XG4gICAgICAgIG1hcmdpblRvcDogMTIsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDE0cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE2LDE4NSwxMjksMC4wOCknLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgcmdiYSgxNiwxODUsMTI5LDAuMjUpYCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA3LFxuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGNvbG9yOiBDLnRleHRGYWludCxcbiAgICB9LFxuICAgIGVycm9yQm94OiB7XG4gICAgICAgIHBhZGRpbmc6ICcxNHB4IDE4cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIzOSw2OCw2OCwwLjEpJyxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkIHJnYmEoMjM5LDY4LDY4LDAuMylgLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgIGNvbG9yOiBDLmVycm9yLFxuICAgIH0sXG4gICAgbG9hZGluZ0JveDoge1xuICAgICAgICBwYWRkaW5nOiAnMTRweCAxOHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmJnQ2FyZCxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBjb2xvcjogQy50ZXh0RmFpbnQsXG4gICAgfSxcbiAgICB0aXBCb3g6IHtcbiAgICAgICAgcGFkZGluZzogJzEycHggMTRweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNiwxODIsMjEyLDAuMDgpJyxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkIHJnYmEoNiwxODIsMjEyLDAuMilgLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDcsXG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgY29sb3I6IEMudGV4dEZhaW50LFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLjU1LFxuICAgIH0sXG4gICAgbWV0cmljR2xvdzogKGFjY2VudENvbG9yKSA9PiAoe1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDYwLFxuICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwIDEwcHggMCA2MHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY2NlbnRDb2xvcixcbiAgICAgICAgb3BhY2l0eTogMC4wOCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH0pLFxufTtcbmZ1bmN0aW9uIGJ1aWxkRGFzaGJvYXJkVXJsKCkge1xuICAgIGNvbnN0IGJhc2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICByZXR1cm4gYCR7YmFzZX0vYXBpL2Rhc2hib2FyZGA7XG59XG5jb25zdCBUSVBTID0gW1xuICAgICfQmNGB0L/QvtC70YzQt9GD0LnRgtC1INGE0LjQu9GM0YLRgNGLLCDRh9GC0L7QsdGLINCx0YvRgdGC0YDQviDQvdCw0LnRgtC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC5INC/0L4g0YDQvtC70LguJyxcbiAgICAn0JTQsNC90L3Ri9C1INC40Lcg0YLQsNCx0LvQuNGGINC80L7QttC90L4g0Y3QutGB0L/QvtGA0YLQuNGA0L7QstCw0YLRjCDRh9C10YDQtdC3INCy0YHRgtGA0L7QtdC90L3Rg9GOINC60L3QvtC/0LrRgyBDU1YuJyxcbiAgICAn0KHQutGA0L7QudGC0LUg0YfRg9Cy0YHRgtCy0LjRgtC10LvRjNC90YvQtSDQv9C+0LvRjyAo0L3QsNC/0YDQuNC80LXRgCwgcGFzc3dvcmQpINCyINC/0YDQtdC00YHRgtCw0LLQu9C10L3QuNC4INGB0L/QuNGB0LrQsC4nLFxuICAgICfQktC60LvRjtGH0LjRgtC1IEFVVE9MT0FEX0RCPXRydWUsINGH0YLQvtCx0YsgQWRtaW5KUyDQvtCx0L3QsNGA0YPQttC40LLQsNC7INGC0LDQsdC70LjRhtGLINCR0JQg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LguJyxcbiAgICAn0J7QsdGP0LfQsNGC0LXQu9GM0L3QviDQt9Cw0LTQsNC50YLQtSDQvdCw0LTRkdC20L3Ri9C5IENPT0tJRV9TRUNSRVQg0L/QtdGA0LXQtCDQvtGC0LrRgNGL0YLQuNC10Lwg0L/QsNC90LXQu9C4INCyINC/0YDQvtC00LDQutGI0LXQvdC1LicsXG5dO1xuZnVuY3Rpb24gTWV0cmljQ2FyZCh7IGxhYmVsLCB2YWx1ZSwgc3ViLCBhY2NlbnQsIH0pIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLm1ldHJpY0NhcmQoYWNjZW50KSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5tZXRyaWNHbG93KGFjY2VudCkgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLm1ldHJpY0xhYmVsIH0sIGxhYmVsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljVmFsdWUgfSwgdmFsdWUpLFxuICAgICAgICBzdWIgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljU3ViIH0sIHN1YikpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbZmV0Y2hFcnJvciwgc2V0RmV0Y2hFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbdGlwLCBzZXRUaXBdID0gdXNlU3RhdGUoVElQU1swXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gYnVpbGREYXNoYm9hcmRVcmwoKTtcbiAgICAgICAgbGV0IG1vdW50ZWQgPSB0cnVlO1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgc2V0RmV0Y2hFcnJvcihudWxsKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7IGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pO1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5ldHdvcmsgZXJyb3I6ICR7cmVzLnN0YXR1c30gJHtyZXMuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1vdW50ZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzZXREYXRhKGpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmICghbW91bnRlZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHNldEZldGNoRXJyb3IoU3RyaW5nKGVyci5tZXNzYWdlID8/IGVycikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vdW50ZWQpXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZldGNoRGF0YSwgMzBfMDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIG1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgaWR4ID0gMTtcbiAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaXAoVElQU1tpZHggJSBUSVBTLmxlbmd0aF0pO1xuICAgICAgICAgICAgaWR4Kys7XG4gICAgICAgIH0sIDEwXzAwMCk7XG4gICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgYWRtaW5CYXNlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgY29uc3QgbGlua1RvID0gKHJlc291cmNlSWQpID0+IGAke2FkbWluQmFzZX0vcmVzb3VyY2VzLyR7cmVzb3VyY2VJZH1gO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMucGFnZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5oZWFkZXIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogc3R5bGVzLnRpdGxlIH0sIFwiQWRtaW4gRGFzaGJvYXJkXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLnN1YnRpdGxlIH0sIFwiXFx1MDQxRVxcdTA0MzFcXHUwNDM3XFx1MDQzRVxcdTA0NDAgXFx1MDQzQVxcdTA0M0JcXHUwNDRFXFx1MDQ0N1xcdTA0MzVcXHUwNDMyXFx1MDQ0QlxcdTA0NDUgXFx1MDQzQ1xcdTA0MzVcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcXHUwNDNBIFxcdTA0M0ZcXHUwNDNCXFx1MDQzMFxcdTA0NDJcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQ0QlwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy50aW1lc3RhbXAgfSwgZGF0YT8udGltZXN0YW1wID8gYNCe0LHQvdC+0LLQu9C10L3QvjogJHtuZXcgRGF0ZShkYXRhLnRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ3J1LVJVJyl9YCA6ICdcXHUwMGEwJykpLFxuICAgICAgICBsb2FkaW5nID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLmxvYWRpbmdCb3ggfSwgXCJcXHUwNDE3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzMCBcXHUwNDNDXFx1MDQzNVxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0M0FcXHUyMDI2XCIpKSA6IGZldGNoRXJyb3IgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMuZXJyb3JCb3ggfSxcbiAgICAgICAgICAgIFwiXFx1MDQxRVxcdTA0NDhcXHUwNDM4XFx1MDQzMVxcdTA0M0FcXHUwNDMwIFxcdTA0MzdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDM4IFxcdTA0MzRcXHUwNDMwXFx1MDQ0OFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0MzRcXHUwNDMwOiBcIixcbiAgICAgICAgICAgIGZldGNoRXJyb3IpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljc0dyaWQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1ldHJpY0NhcmQsIHsgbGFiZWw6IFwiXFx1MDQxRlxcdTA0M0VcXHUwNDQxXFx1MDQzNVxcdTA0NDlcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGXCIsIHZhbHVlOiBkYXRhPy52aXNpdHMgPz8gJ+KAlCcsIHN1YjogXCJcXHUwNDIyXFx1MDQzMFxcdTA0MzFcXHUwNDNCXFx1MDQzOFxcdTA0NDZcXHUwNDMwIHNpdGVfdmlzaXRzXCIsIGFjY2VudDogQy5jeWFuIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWV0cmljQ2FyZCwgeyBsYWJlbDogXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0MzhcIiwgdmFsdWU6IGRhdGE/LnVzZXJzID8/ICfigJQnLCBzdWI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogbGlua1RvKCd1c2VycycpLCBzdHlsZTogc3R5bGVzLm1ldHJpY0xpbmsgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0FcXHUwNDQwXFx1MDQ0QlxcdTA0NDJcXHUwNDRDIFxcdTA0M0ZcXHUwNDNFXFx1MDQzQlxcdTA0NENcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQzNVxcdTA0MzkgXFx1MjE5MlwiKSwgYWNjZW50OiBDLmJsdWUgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXRyaWNDYXJkLCB7IGxhYmVsOiBcIlxcdTA0MUFcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDRCXCIsIHZhbHVlOiBkYXRhPy5jb3Vyc2VzID8/ICfigJQnLCBzdWI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogbGlua1RvKCdjb3Vyc2VzJyksIHN0eWxlOiBzdHlsZXMubWV0cmljTGluayB9LCBcIlxcdTA0MUVcXHUwNDQyXFx1MDQzQVxcdTA0NDBcXHUwNDRCXFx1MDQ0MlxcdTA0NEMgXFx1MDQzQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0NEIgXFx1MjE5MlwiKSwgYWNjZW50OiBDLmdyZWVuIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWV0cmljQ2FyZCwgeyBsYWJlbDogXCJcXHUwNDE3XFx1MDQzMFxcdTA0M0ZcXHUwNDM4XFx1MDQ0MVxcdTA0MzhcIiwgdmFsdWU6IGRhdGE/LmVucm9sbG1lbnRzID8/ICfigJQnLCBzdWI6IFwiXFx1MDQxMlxcdTA0NDFcXHUwNDM1XFx1MDQzM1xcdTA0M0UgXFx1MDQzN1xcdTA0MzBcXHUwNDNGXFx1MDQzOFxcdTA0NDFcXHUwNDM1XFx1MDQzOSBcXHUwNDNEXFx1MDQzMCBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQ0QlwiLCBhY2NlbnQ6IEMuZ3JlZW5MaWdodCB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy53aWRnZXRzUm93IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMud2lkZ2V0IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7IHN0eWxlOiBzdHlsZXMud2lkZ2V0VGl0bGUgfSwgXCJcXHUwNDIxXFx1MDQzMlxcdTA0M0VcXHUwNDM0XFx1MDQzQVxcdTA0MzAgXFx1MDQzRlxcdTA0M0UgXFx1MDQ0MVxcdTA0MzBcXHUwNDM5XFx1MDQ0MlxcdTA0NDNcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDhweCcsIGZvbnRTaXplOiAxNCwgY29sb3I6IEMudGV4dEZhaW50LCBsaW5lSGVpZ2h0OiAxLjYgfSB9LCBcIlxcdTA0MUZcXHUwNDMwXFx1MDQzRFxcdTA0MzVcXHUwNDNCXFx1MDQ0QyBcXHUwNDQzXFx1MDQzRlxcdTA0NDBcXHUwNDMwXFx1MDQzMlxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGIFxcdTA0M0ZcXHUwNDNCXFx1MDQzMFxcdTA0NDJcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQzRVxcdTA0MzkgTmV0Y291cnNlLiBcXHUwNDE0XFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQ0M1xcdTA0M0YgXFx1MDQzRVxcdTA0MzNcXHUwNDQwXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQ0N1xcdTA0MzVcXHUwNDNEIFxcdTA0MzRcXHUwNDNCXFx1MDQ0RiBcXHUwNDMwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQ0MFxcdTA0MzhcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0M0RcXHUwNDRCXFx1MDQ0NSBcXHUwNDMwXFx1MDQzNFxcdTA0M0NcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0VcXHUwNDQwXFx1MDQzRVxcdTA0MzIuXCIpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhPy5ub3RlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5ub3RlQm94IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIHsgc3R5bGU6IHsgY29sb3I6IEMuZ3JlZW5MaWdodCB9IH0sIFwiXFx1MDQxRlxcdTA0NDBcXHUwNDM4XFx1MDQzQ1xcdTA0MzVcXHUwNDQ3XFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNTpcXHUwMEEwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5ub3RlKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLndpZGdldCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgeyBzdHlsZTogc3R5bGVzLndpZGdldFRpdGxlIH0sIFwiXFx1MDQxMVxcdTA0NEJcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDRCXFx1MDQzNSBcXHUwNDM0XFx1MDQzNVxcdTA0MzlcXHUwNDQxXFx1MDQ0MlxcdTA0MzJcXHUwNDM4XFx1MDQ0RlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxMCwgbWFyZ2luQm90dG9tOiAxOCwgZmxleFdyYXA6ICd3cmFwJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IGxpbmtUbygndXNlcnMnKSwgc3R5bGU6IHN0eWxlcy5idG5CbHVlIH0sIFwiXFx1MDQxRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDM4XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBsaW5rVG8oJ2NvdXJzZXMnKSwgc3R5bGU6IHN0eWxlcy5idG5HcmVlbiB9LCBcIlxcdTA0MUFcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDRCXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQy50ZXh0R2hvc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjA3ZW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LCBcIlxcdTA0MjFcXHUwNDNFXFx1MDQzMlxcdTA0MzVcXHUwNDQyXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy50aXBCb3ggfSwgdGlwKSkpKSkpKTtcbn1cbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9sb2dpbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuTG9naW4gPSBMb2dpblxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvZGFzaGJvYXJkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5EYXNoYm9hcmQgPSBEYXNoYm9hcmQiXSwibmFtZXMiOlsiQyIsImJnUGFnZSIsImJnRGFyayIsImJnQ2FyZCIsImJnSW5wdXQiLCJib3JkZXIiLCJncmVlbiIsImdyZWVuRGFyayIsImN5YW4iLCJibHVlIiwiZXJyb3IiLCJ3aGl0ZSIsIm11dGVkIiwiZmFpbnQiLCJnaG9zdCIsIkxvZ2luIiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwid2luZG93IiwiX19BUFBfU1RBVEVfXyIsImJyYW5kaW5nIiwiUkVEVVhfU1RBVEUiLCJob3ZlciIsInNldEhvdmVyIiwidXNlU3RhdGUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInMiLCJwYWdlIiwiY2FyZCIsImxlZnQiLCJicmFuZCIsImJyYW5kRG90IiwiYnJhbmROYW1lIiwiY29tcGFueU5hbWUiLCJ3ZWxjb21lIiwid2VsY29tZVN1YiIsImRlY29yUm93IiwiZGVjb3JDaGlwIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsImRvdHMiLCJ2aWV3Qm94IiwieG1sbnMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwicm93IiwiY29sIiwia2V5IiwiY3giLCJjeSIsInIiLCJmaWxsIiwibWV0aG9kIiwicmlnaHQiLCJmb3JtVGl0bGUiLCJmb3JtU3ViIiwiZXJyb3JCb3giLCJlcnJvckRvdCIsImZpZWxkIiwiaHRtbEZvciIsImxhYmVsIiwiaWQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b0NvbXBsZXRlIiwicmVxdWlyZWQiLCJpbnB1dCIsIm9uRm9jdXMiLCJlIiwidGFyZ2V0IiwiYm94U2hhZG93Iiwib25CbHVyIiwiYnRuIiwib25Nb3VzZUVudGVyIiwiYmFja2dyb3VuZCIsIm9uTW91c2VMZWF2ZSIsImhpbnQiLCJtaW5IZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250RmFtaWx5IiwicGFkZGluZyIsImJveFNpemluZyIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJmbGV4IiwiYm9yZGVyUmlnaHQiLCJmbGV4RGlyZWN0aW9uIiwicG9zaXRpb24iLCJnYXAiLCJtYXJnaW5Cb3R0b20iLCJoZWlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsImxpbmVIZWlnaHQiLCJmbGV4V3JhcCIsIm9wYWNpdHkiLCJib3R0b20iLCJwb2ludGVyRXZlbnRzIiwib3V0bGluZSIsInRyYW5zaXRpb24iLCJXZWJraXRUZXh0RmlsbENvbG9yIiwiY3Vyc29yIiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwiYmdTaWRlYmFyIiwiYmdDYXJkSG92ZXIiLCJncmVlbkxpZ2h0IiwidGV4dFByaW1hcnkiLCJ0ZXh0TXV0ZWQiLCJ0ZXh0RmFpbnQiLCJ0ZXh0R2hvc3QiLCJzdHlsZXMiLCJoZWFkZXIiLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyQm90dG9tIiwidGl0bGUiLCJtYXJnaW4iLCJzdWJ0aXRsZSIsInRpbWVzdGFtcCIsIm1ldHJpY3NHcmlkIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1ldHJpY0NhcmQiLCJhY2NlbnRDb2xvciIsImJvcmRlclRvcCIsIm1ldHJpY0xhYmVsIiwibWV0cmljVmFsdWUiLCJtZXRyaWNMaW5rIiwidGV4dERlY29yYXRpb24iLCJtZXRyaWNTdWIiLCJ3aWRnZXRzUm93Iiwid2lkZ2V0Iiwid2lkZ2V0VGl0bGUiLCJidG5HcmVlbiIsImJ0bkJsdWUiLCJub3RlQm94IiwibG9hZGluZ0JveCIsInRpcEJveCIsIm1ldHJpY0dsb3ciLCJ0b3AiLCJidWlsZERhc2hib2FyZFVybCIsImJhc2UiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVwbGFjZSIsIlRJUFMiLCJNZXRyaWNDYXJkIiwidmFsdWUiLCJzdWIiLCJhY2NlbnQiLCJEYXNoYm9hcmQiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hFcnJvciIsInNldEZldGNoRXJyb3IiLCJ0aXAiLCJzZXRUaXAiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJtb3VudGVkIiwiZmV0Y2hEYXRhIiwicmVzIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwianNvbiIsImVyciIsIlN0cmluZyIsIm1lc3NhZ2UiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImlkeCIsImFkbWluQmFzZSIsImxpbmtUbyIsInJlc291cmNlSWQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJGcmFnbWVudCIsInZpc2l0cyIsInVzZXJzIiwiaHJlZiIsImNvdXJzZXMiLCJlbnJvbGxtZW50cyIs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
