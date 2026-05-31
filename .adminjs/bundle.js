(function (React) {
    'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    var React__default = /*#__PURE__*/_interopDefault(React);

    const C$2 = {
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
        action = '/login',
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
          borderColor: C$2.green,
          color: C$2.green
        }
      }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          ...s.decorChip,
          borderColor: C$2.cyan,
          color: C$2.cyan
        }
      }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          ...s.decorChip,
          borderColor: C$2.blue,
          color: C$2.blue
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
          color: C$2.error
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
          e.target.style.borderColor = C$2.green;
          e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
        },
        onBlur: e => {
          setHover(null);
          e.target.style.borderColor = C$2.border;
          e.target.style.boxShadow = 'none';
        }
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: s.field
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "login-password",
        style: s.label
      }, "\u041F\u0430\u0440\u043E\u043B\u044C ", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          color: C$2.error
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
          e.target.style.borderColor = C$2.green;
          e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
        },
        onBlur: e => {
          setHover(null);
          e.target.style.borderColor = C$2.border;
          e.target.style.boxShadow = 'none';
        }
      })), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        style: s.btn,
        onMouseEnter: e => e.target.style.background = `linear-gradient(135deg, ${C$2.greenDark}, #047857)`,
        onMouseLeave: e => e.target.style.background = `linear-gradient(135deg, ${C$2.green}, ${C$2.greenDark})`
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
        backgroundColor: C$2.bgPage,
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
        border: `1px solid ${C$2.border}`,
        boxShadow: '0 25px 50px rgba(0,0,0,0.6)'
      },
      left: {
        flex: '0 0 380px',
        background: `linear-gradient(145deg, #0d2d20 0%, #0a2540 100%)`,
        borderRight: `1px solid ${C$2.border}`,
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
        backgroundColor: C$2.green,
        boxShadow: `0 0 8px ${C$2.green}`
      },
      brandName: {
        fontSize: 13,
        fontWeight: 600,
        color: C$2.faint,
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      },
      welcome: {
        fontSize: 36,
        fontWeight: 700,
        color: C$2.white,
        lineHeight: 1.2,
        marginBottom: 16,
        letterSpacing: '-0.5px'
      },
      welcomeSub: {
        fontSize: 14,
        color: C$2.faint,
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
        backgroundColor: C$2.bgDark,
        padding: '48px 44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      formTitle: {
        fontSize: 24,
        fontWeight: 700,
        color: C$2.white,
        marginBottom: 6,
        letterSpacing: '-0.3px'
      },
      formSub: {
        fontSize: 13,
        color: C$2.ghost,
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
        color: C$2.error,
        marginBottom: 20
      },
      errorDot: {
        fontSize: 8,
        lineHeight: 1,
        color: C$2.error
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
        color: C$2.faint
      },
      input: {
        width: '100%',
        padding: '11px 14px',
        backgroundColor: C$2.bgInput,
        color: C$2.white,
        border: `1px solid ${C$2.border}`,
        borderRadius: 8,
        fontSize: 14,
        outline: 'none',
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
        boxSizing: 'border-box',
        WebkitTextFillColor: C$2.white
      },
      btn: {
        width: '100%',
        padding: '12px',
        background: `linear-gradient(135deg, ${C$2.green}, ${C$2.greenDark})`,
        color: C$2.white,
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
        color: C$2.ghost,
        textAlign: 'center',
        lineHeight: 1.5
      }
    };

    const C$1 = {
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
      ghost: '#64748b'
    };
    const CONTENT_TYPES = [{
      value: 'text',
      label: 'Текст'
    }, {
      value: 'video',
      label: 'Видео'
    }, {
      value: 'quiz',
      label: 'Тест'
    }];
    const CATEGORIES = [{
      value: 'frontend',
      label: 'Frontend'
    }, {
      value: 'backend',
      label: 'Backend'
    }, {
      value: 'devops',
      label: 'DevOps'
    }, {
      value: 'mobile',
      label: 'Mobile'
    }, {
      value: 'design',
      label: 'Design'
    }, {
      value: 'other',
      label: 'Другое'
    }];
    const PRESETS = [{
      name: 'Стандартный',
      icon: '★',
      color: C$1.green,
      get: () => ({
        title: '',
        description: 'Полный курс по теме. Подходит для начинающих и продвинутых.',
        category: 'frontend',
        require_quiz_completion: true,
        min_quiz_score: 65,
        sections: [{
          title: 'Введение',
          lessons: [{
            title: 'Вводный урок',
            content_type: 'video'
          }, {
            title: 'Обзор материалов',
            content_type: 'text'
          }]
        }, {
          title: 'Основная часть',
          lessons: [{
            title: 'Основы',
            content_type: 'video'
          }, {
            title: 'Практика',
            content_type: 'text'
          }, {
            title: 'Тест',
            content_type: 'quiz'
          }]
        }, {
          title: 'Заключение',
          lessons: [{
            title: 'Итоговый проект',
            content_type: 'text'
          }, {
            title: 'Финальный тест',
            content_type: 'quiz'
          }]
        }]
      })
    }, {
      name: 'Премиум',
      icon: '◆',
      color: C$1.cyan,
      get: () => ({
        title: '',
        description: 'Продвинутый курс с углублённым изучением и большим количеством практики.',
        category: 'backend',
        require_quiz_completion: true,
        min_quiz_score: 80,
        sections: [{
          title: 'Введение',
          lessons: [{
            title: 'Введение в курс',
            content_type: 'video'
          }, {
            title: 'Архитектура',
            content_type: 'text'
          }]
        }, {
          title: 'Модуль 1',
          lessons: [{
            title: 'Теория',
            content_type: 'video'
          }, {
            title: 'Лабораторная',
            content_type: 'text'
          }, {
            title: 'Тест',
            content_type: 'quiz'
          }]
        }, {
          title: 'Модуль 2',
          lessons: [{
            title: 'Теория',
            content_type: 'video'
          }, {
            title: 'Практика',
            content_type: 'text'
          }, {
            title: 'Тест',
            content_type: 'quiz'
          }]
        }]
      })
    }, {
      name: 'Вебинар',
      icon: '●',
      color: C$1.blue,
      get: () => ({
        title: '',
        description: 'Бесплатный вебинар с записью. Без обязательных тестов.',
        category: 'other',
        require_quiz_completion: false,
        min_quiz_score: 0,
        sections: [{
          title: 'Вебинар',
          lessons: [{
            title: 'Запись вебинара',
            content_type: 'video'
          }, {
            title: 'Материалы',
            content_type: 'text'
          }]
        }]
      })
    }];
    function SectionBlock({
      section,
      index,
      onChange,
      onRemove
    }) {
      const addLesson = () => {
        onChange({
          ...section,
          lessons: [...section.lessons, {
            title: '',
            content_type: 'text'
          }]
        });
      };
      const updateLesson = (li, lesson) => {
        const next = [...section.lessons];
        next[li] = lesson;
        onChange({
          ...section,
          lessons: next
        });
      };
      const removeLesson = li => {
        onChange({
          ...section,
          lessons: section.lessons.filter((_, i) => i !== li)
        });
      };
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 16,
          padding: 16,
          background: C$1.bgCard,
          border: `1px solid ${C$1.border}`,
          borderRadius: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 12
        }
      }, /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 13,
          fontWeight: 600,
          color: C$1.cyan
        }
      }, "\u0420\u0430\u0437\u0434\u0435\u043B ", index + 1), /*#__PURE__*/React__default.default.createElement("input", {
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0430",
        value: section.title,
        onChange: e => onChange({
          ...section,
          title: e.target.value
        }),
        style: inputStyle
      }), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: onRemove,
        style: removeBtnStyle
      }, "\u2715")), section.lessons.map((lesson, li) => (/*#__PURE__*/React__default.default.createElement("div", {
        key: li,
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          marginBottom: 6
        }
      }, /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 12,
          color: C$1.ghost,
          minWidth: 18
        }
      }, li + 1, "."), /*#__PURE__*/React__default.default.createElement("input", {
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0440\u043E\u043A\u0430",
        value: lesson.title,
        onChange: e => updateLesson(li, {
          ...lesson,
          title: e.target.value
        }),
        style: {
          ...inputStyle,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("select", {
        value: lesson.content_type,
        onChange: e => updateLesson(li, {
          ...lesson,
          content_type: e.target.value
        }),
        style: selectStyle
      }, CONTENT_TYPES.map(ct => (/*#__PURE__*/React__default.default.createElement("option", {
        key: ct.value,
        value: ct.value
      }, ct.label)))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: () => removeLesson(li),
        style: smallRemoveBtnStyle
      }, "\u2715")))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: addLesson,
        style: addBtnStyle
      }, "+ \u0423\u0440\u043E\u043A"));
    }
    const inputStyle = {
      flex: 1,
      padding: '8px 10px',
      background: C$1.bgInput,
      color: C$1.white,
      border: `1px solid ${C$1.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const selectStyle = {
      padding: '8px 10px',
      background: C$1.bgInput,
      color: C$1.white,
      border: `1px solid ${C$1.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      cursor: 'pointer'
    };
    const removeBtnStyle = {
      background: 'none',
      border: 'none',
      color: C$1.error,
      fontSize: 16,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 4
    };
    const smallRemoveBtnStyle = {
      ...removeBtnStyle,
      fontSize: 12,
      padding: '2px 6px'
    };
    const addBtnStyle = {
      padding: '6px 12px',
      background: 'transparent',
      color: C$1.green,
      border: `1px dashed ${C$1.green}`,
      borderRadius: 6,
      fontSize: 12,
      cursor: 'pointer',
      marginTop: 4
    };
    function CourseCreate() {
      const [title, setTitle] = React.useState('');
      const [description, setDescription] = React.useState('');
      const [category, setCategory] = React.useState('frontend');
      const [requireQuiz, setRequireQuiz] = React.useState(true);
      const [minScore, setMinScore] = React.useState(65);
      const [sections, setSections] = React.useState([{
        title: '',
        lessons: [{
          title: '',
          content_type: 'video'
        }]
      }]);
      const applyPreset = preset => {
        const p = preset.get();
        setTitle(p.title);
        setDescription(p.description);
        setCategory(p.category);
        setRequireQuiz(p.require_quiz_completion);
        setMinScore(p.min_quiz_score);
        setSections(p.sections);
      };
      const addSection = () => {
        setSections([...sections, {
          title: '',
          lessons: [{
            title: '',
            content_type: 'text'
          }]
        }]);
      };
      const updateSection = (i, section) => {
        const next = [...sections];
        next[i] = section;
        setSections(next);
      };
      const removeSection = i => {
        setSections(sections.filter((_, idx) => idx !== i));
      };
      const handleSubmit = e => {
        if (!title.trim()) {
          e.preventDefault();
          alert('Введите название курса');
          return;
        }
      };
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          padding: 24,
          minHeight: '100vh',
          backgroundColor: C$1.bgPage,
          color: C$1.white,
          fontFamily: "'Roboto', sans-serif"
        }
      }, /*#__PURE__*/React__default.default.createElement("form", {
        method: "POST",
        action: "",
        onSubmit: handleSubmit,
        style: {
          maxWidth: 800,
          margin: '0 auto'
        }
      }, /*#__PURE__*/React__default.default.createElement("h1", {
        style: {
          margin: '0 0 4px',
          fontSize: 22,
          fontWeight: 700
        }
      }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430"), /*#__PURE__*/React__default.default.createElement("p", {
        style: {
          margin: '0 0 24px',
          fontSize: 13,
          color: C$1.ghost
        }
      }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0444\u043E\u0440\u043C\u0443 \u2014 \u043A\u0443\u0440\u0441, \u0440\u0430\u0437\u0434\u0435\u043B\u044B \u0438 \u0443\u0440\u043E\u043A\u0438 \u0431\u0443\u0434\u0443\u0442 \u0441\u043E\u0437\u0434\u0430\u043D\u044B \u0437\u0430 \u043E\u0434\u0438\u043D \u0448\u0430\u0433"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          gap: 8,
          marginBottom: 24
        }
      }, PRESETS.map(p => (/*#__PURE__*/React__default.default.createElement("button", {
        key: p.name,
        type: "button",
        onClick: () => applyPreset(p),
        style: {
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
          transition: 'all 0.15s'
        },
        onMouseEnter: e => {
          e.target.style.background = p.color;
          e.target.style.color = '#000';
        },
        onMouseLeave: e => {
          e.target.style.background = 'transparent';
          e.target.style.color = p.color;
        }
      }, p.icon, " ", p.name)))), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
          marginBottom: 24
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          gridColumn: '1 / -1'
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430 *"), /*#__PURE__*/React__default.default.createElement("input", {
        value: title,
        onChange: e => setTitle(e.target.value),
        name: "title",
        placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: JavaScript Basics",
        style: fullInputStyle
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          gridColumn: '1 / -1'
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"), /*#__PURE__*/React__default.default.createElement("textarea", {
        value: description,
        onChange: e => setDescription(e.target.value),
        name: "description",
        placeholder: "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430",
        rows: 3,
        style: {
          ...fullInputStyle,
          resize: 'vertical'
        }
      })), /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"), /*#__PURE__*/React__default.default.createElement("select", {
        value: category,
        onChange: e => setCategory(e.target.value),
        name: "category",
        style: fullInputStyle
      }, CATEGORIES.map(c => (/*#__PURE__*/React__default.default.createElement("option", {
        key: c.value,
        value: c.value
      }, c.label))))), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: {
          ...labelStyle,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer'
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "checkbox",
        checked: requireQuiz,
        onChange: e => setRequireQuiz(e.target.checked),
        name: "require_quiz_completion",
        style: {
          accentColor: C$1.green
        }
      }), "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"), requireQuiz && (/*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginTop: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "\u041C\u0438\u043D. \u0431\u0430\u043B\u043B"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "number",
        value: minScore,
        onChange: e => setMinScore(Number(e.target.value)),
        name: "min_quiz_score",
        min: 0,
        max: 100,
        style: {
          ...fullInputStyle,
          width: 120
        }
      }))))), /*#__PURE__*/React__default.default.createElement("h2", {
        style: {
          fontSize: 16,
          fontWeight: 600,
          color: C$1.muted,
          margin: '0 0 12px'
        }
      }, "\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0438 \u0443\u0440\u043E\u043A\u0438", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 12,
          color: C$1.ghost,
          fontWeight: 400,
          marginLeft: 8
        }
      }, "(", sections.reduce((s, sec) => s + sec.lessons.length, 0), " \u0443\u0440\u043E\u043A\u043E\u0432)")), /*#__PURE__*/React__default.default.createElement("input", {
        type: "hidden",
        name: "sections_json",
        value: JSON.stringify(sections)
      }), sections.map((section, i) => (/*#__PURE__*/React__default.default.createElement(SectionBlock, {
        key: i,
        section: section,
        index: i,
        onChange: s => updateSection(i, s),
        onRemove: () => removeSection(i)
      }))), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          gap: 8,
          marginBottom: 24
        }
      }, /*#__PURE__*/React__default.default.createElement("button", {
        type: "button",
        onClick: addSection,
        style: addSectionBtnStyle
      }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B")), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        style: submitBtnStyle
      }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043A\u0443\u0440\u0441")));
    }
    const labelStyle = {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: C$1.faint,
      marginBottom: 4
    };
    const fullInputStyle = {
      width: '100%',
      padding: '9px 12px',
      background: C$1.bgInput,
      color: C$1.white,
      border: `1px solid ${C$1.border}`,
      borderRadius: 6,
      fontSize: 14,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const addSectionBtnStyle = {
      padding: '8px 16px',
      background: 'transparent',
      color: C$1.cyan,
      border: `1px dashed ${C$1.cyan}`,
      borderRadius: 6,
      fontSize: 13,
      cursor: 'pointer'
    };
    const submitBtnStyle = {
      padding: '12px 32px',
      background: `linear-gradient(135deg, ${C$1.green}, ${C$1.greenDark})`,
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer'
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
          flexWrap: 'wrap'
        }
      }, /*#__PURE__*/React__default.default.createElement("a", {
        href: linkTo('users'),
        style: styles.btnBlue
      }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"), /*#__PURE__*/React__default.default.createElement("a", {
        href: linkTo('courses'),
        style: styles.btnGreen
      }, "\u041A\u0443\u0440\u0441\u044B")))))));
    }

    AdminJS.UserComponents = {};
    AdminJS.UserComponents.Login = Login;
    AdminJS.UserComponents.CourseQuickCreate = CourseCreate;
    AdminJS.UserComponents.Dashboard = Dashboard;

})(React);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvbG9naW4uanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvY291cnNlLWNyZWF0ZS5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQuanMiLCJlbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBDID0ge1xuICAgIGJnUGFnZTogJyMwMjA2MTcnLFxuICAgIGJnRGFyazogJyMwZjE3MmEnLFxuICAgIGJnQ2FyZDogJyMxZTI5M2InLFxuICAgIGJnSW5wdXQ6ICcjMGYxNzJhJyxcbiAgICBib3JkZXI6ICcjMzM0MTU1JyxcbiAgICBncmVlbjogJyMxMGI5ODEnLFxuICAgIGdyZWVuRGFyazogJyMwNTk2NjknLFxuICAgIGN5YW46ICcjMDZiNmQ0JyxcbiAgICBibHVlOiAnIzNiODJmNicsXG4gICAgZXJyb3I6ICcjZWY0NDQ0JyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIG11dGVkOiAnI2NiZDVlMScsXG4gICAgZmFpbnQ6ICcjOTRhM2I4JyxcbiAgICBnaG9zdDogJyM2NDc0OGInLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICAgIGNvbnN0IHsgYWN0aW9uID0gJy9sb2dpbicsIGVycm9yTWVzc2FnZSB9ID0gKHdpbmRvdy5fX0FQUF9TVEFURV9fID8/IHt9KTtcbiAgICBjb25zdCBicmFuZGluZyA9IHdpbmRvdy5SRURVWF9TVEFURT8uYnJhbmRpbmcgPz8ge307XG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5wYWdlIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5jYXJkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMubGVmdCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5icmFuZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMuYnJhbmREb3QgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHMuYnJhbmROYW1lIH0sIGJyYW5kaW5nLmNvbXBhbnlOYW1lID8/ICdOZXRjb3Vyc2UgQWRtaW4nKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgc3R5bGU6IHMud2VsY29tZSB9LFxuICAgICAgICAgICAgICAgICAgICBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0NDBcXHUwNDNFXCIsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDNGXFx1MDQzRVxcdTA0MzZcXHUwNDMwXFx1MDQzQlxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRDXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHMud2VsY29tZVN1YiB9LCBcIlxcdTA0MUZcXHUwNDMwXFx1MDQzRFxcdTA0MzVcXHUwNDNCXFx1MDQ0QyBcXHUwNDQzXFx1MDQzRlxcdTA0NDBcXHUwNDMwXFx1MDQzMlxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGIFxcdTA0M0ZcXHUwNDNCXFx1MDQzMFxcdTA0NDJcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQzRVxcdTA0MzkgTmV0Y291cnNlLiBcXHUwNDE0XFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQ0M1xcdTA0M0YgXFx1MDQ0MlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0M0FcXHUwNDNFIFxcdTA0MzRcXHUwNDNCXFx1MDQ0RiBcXHUwNDMwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQ0MFxcdTA0MzhcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0M0RcXHUwNDRCXFx1MDQ0NSBcXHUwNDMwXFx1MDQzNFxcdTA0M0NcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0VcXHUwNDQwXFx1MDQzRVxcdTA0MzIuXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5kZWNvclJvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgLi4ucy5kZWNvckNoaXAsIGJvcmRlckNvbG9yOiBDLmdyZWVuLCBjb2xvcjogQy5ncmVlbiB9IH0sIFwiXFx1MDQxRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDM4XCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgLi4ucy5kZWNvckNoaXAsIGJvcmRlckNvbG9yOiBDLmN5YW4sIGNvbG9yOiBDLmN5YW4gfSB9LCBcIlxcdTA0MUFcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDRCXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgLi4ucy5kZWNvckNoaXAsIGJvcmRlckNvbG9yOiBDLmJsdWUsIGNvbG9yOiBDLmJsdWUgfSB9LCBcIlxcdTA0MTBcXHUwNDNEXFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0MzhcXHUwNDNBXFx1MDQzMFwiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHN0eWxlOiBzLmRvdHMsIHZpZXdCb3g6IFwiMCAwIDEyMCA4MFwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sIEFycmF5LmZyb20oeyBsZW5ndGg6IDYgfSwgKF8sIHJvdykgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogOCB9LCAoXywgY29sKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7IGtleTogYCR7cm93fS0ke2NvbH1gLCBjeDogY29sICogMTYgKyA4LCBjeTogcm93ICogMTMgKyA2LCByOiBcIjEuNVwiLCBmaWxsOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4xNSlcIiB9KSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IGFjdGlvbiwgbWV0aG9kOiBcIlBPU1RcIiwgc3R5bGU6IHMucmlnaHQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZTogcy5mb3JtVGl0bGUgfSwgXCJcXHUwNDEyXFx1MDQ0NVxcdTA0M0VcXHUwNDM0IFxcdTA0MzIgXFx1MDQ0MVxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzVcXHUwNDNDXFx1MDQ0M1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiBzLmZvcm1TdWIgfSwgXCJcXHUwNDEyXFx1MDQzMlxcdTA0MzVcXHUwNDM0XFx1MDQzOFxcdTA0NDJcXHUwNDM1IFxcdTA0MzJcXHUwNDMwXFx1MDQ0OFxcdTA0MzggXFx1MDQ0M1xcdTA0NDdcXHUwNDUxXFx1MDQ0MlxcdTA0M0RcXHUwNDRCXFx1MDQzNSBcXHUwNDM0XFx1MDQzMFxcdTA0M0RcXHUwNDNEXFx1MDQ0QlxcdTA0MzVcIiksXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMuZXJyb3JCb3ggfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogcy5lcnJvckRvdCB9LCBcIlxcdTI1Q0ZcIiksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5maWVsZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImxvZ2luLWVtYWlsXCIsIHN0eWxlOiBzLmxhYmVsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkVtYWlsIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyBjb2xvcjogQy5lcnJvciB9IH0sIFwiKlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGlkOiBcImxvZ2luLWVtYWlsXCIsIG5hbWU6IFwiZW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJhZG1pbkBleGFtcGxlLmNvbVwiLCBhdXRvQ29tcGxldGU6IFwiZW1haWxcIiwgcmVxdWlyZWQ6IHRydWUsIHN0eWxlOiBzLmlucHV0LCBvbkZvY3VzOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcignZW1haWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAwIDNweCByZ2JhKDE2LDE4NSwxMjksMC4xNSlgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25CbHVyOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuYm9yZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5maWVsZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImxvZ2luLXBhc3N3b3JkXCIsIHN0eWxlOiBzLmxhYmVsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdTA0MUZcXHUwNDMwXFx1MDQ0MFxcdTA0M0VcXHUwNDNCXFx1MDQ0QyBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgY29sb3I6IEMuZXJyb3IgfSB9LCBcIipcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBpZDogXCJsb2dpbi1wYXNzd29yZFwiLCBuYW1lOiBcInBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MjAyMlxcdTIwMjJcXHUyMDIyXFx1MjAyMlxcdTIwMjJcXHUyMDIyXFx1MjAyMlxcdTIwMjJcIiwgYXV0b0NvbXBsZXRlOiBcImN1cnJlbnQtcGFzc3dvcmRcIiwgcmVxdWlyZWQ6IHRydWUsIHN0eWxlOiBzLmlucHV0LCBvbkZvY3VzOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcigncGFzc3dvcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAwIDNweCByZ2JhKDE2LDE4NSwxMjksMC4xNSlgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25CbHVyOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuYm9yZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBzdHlsZTogcy5idG4sIG9uTW91c2VFbnRlcjogZSA9PiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVuRGFya30sICMwNDc4NTcpYCksIG9uTW91c2VMZWF2ZTogZSA9PiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCkgfSwgXCJcXHUwNDEyXFx1MDQzRVxcdTA0MzlcXHUwNDQyXFx1MDQzOFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiBzLmhpbnQgfSwgXCJcXHUwNDFGXFx1MDQ0MFxcdTA0M0VcXHUwNDMxXFx1MDQzQlxcdTA0MzVcXHUwNDNDXFx1MDQ0QiBcXHUwNDQxXFx1MDQzRSBcXHUwNDMyXFx1MDQ0NVxcdTA0M0VcXHUwNDM0XFx1MDQzRVxcdTA0M0M/IFxcdTA0MUVcXHUwNDMxXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NEMgXFx1MDQzQSBcXHUwNDQxXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQzNVxcdTA0M0NcXHUwNDNEXFx1MDQzRVxcdTA0M0NcXHUwNDQzIFxcdTA0MzBcXHUwNDM0XFx1MDQzQ1xcdTA0MzhcXHUwNDNEXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzRVxcdTA0NDBcXHUwNDQzLlwiKSkpKSk7XG59XG5jb25zdCBzID0ge1xuICAgIHBhZ2U6IHtcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5iZ1BhZ2UsXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgcGFkZGluZzogJzI0cHgnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogOTAwLFxuICAgICAgICBtaW5IZWlnaHQ6IDUyMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDI1cHggNTBweCByZ2JhKDAsMCwwLDAuNiknLFxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgICBmbGV4OiAnMCAwIDM4MHB4JyxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMwZDJkMjAgMCUsICMwYTI1NDAgMTAwJSlgLFxuICAgICAgICBib3JkZXJSaWdodDogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIHBhZGRpbmc6ICc0OHB4IDQwcHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIH0sXG4gICAgYnJhbmQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgZ2FwOiAxMCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA0MCxcbiAgICB9LFxuICAgIGJyYW5kRG90OiB7XG4gICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmdyZWVuLFxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgOHB4ICR7Qy5ncmVlbn1gLFxuICAgIH0sXG4gICAgYnJhbmROYW1lOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBjb2xvcjogQy5mYWludCxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjFlbScsXG4gICAgfSxcbiAgICB3ZWxjb21lOiB7XG4gICAgICAgIGZvbnRTaXplOiAzNixcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBjb2xvcjogQy53aGl0ZSxcbiAgICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDE2LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcbiAgICB9LFxuICAgIHdlbGNvbWVTdWI6IHtcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBjb2xvcjogQy5mYWludCxcbiAgICAgICAgbGluZUhlaWdodDogMS42NSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAzMixcbiAgICB9LFxuICAgIGRlY29yUm93OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgICAgZ2FwOiA4LFxuICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICB9LFxuICAgIGRlY29yQ2hpcDoge1xuICAgICAgICBmb250U2l6ZTogMTEsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgcGFkZGluZzogJzRweCAxMHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDVlbScsXG4gICAgICAgIG9wYWNpdHk6IDAuNyxcbiAgICB9LFxuICAgIGRvdHM6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGJvdHRvbTogMjQsXG4gICAgICAgIHJpZ2h0OiAyNCxcbiAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgaGVpZ2h0OiA4MCxcbiAgICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdEYXJrLFxuICAgICAgICBwYWRkaW5nOiAnNDhweCA0NHB4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgZm9ybVRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBjb2xvcjogQy53aGl0ZSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA2LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuM3B4JyxcbiAgICB9LFxuICAgIGZvcm1TdWI6IHtcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBjb2xvcjogQy5naG9zdCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAzMixcbiAgICB9LFxuICAgIGVycm9yQm94OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGdhcDogOCxcbiAgICAgICAgcGFkZGluZzogJzEwcHggMTRweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjM5LDY4LDY4LDAuMSknLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsMC4zKWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBjb2xvcjogQy5lcnJvcixcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICB9LFxuICAgIGVycm9yRG90OiB7XG4gICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICBjb2xvcjogQy5lcnJvcixcbiAgICB9LFxuICAgIGZpZWxkOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGdhcDogNixcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBjb2xvcjogQy5mYWludCxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmc6ICcxMXB4IDE0cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdJbnB1dCxcbiAgICAgICAgY29sb3I6IEMud2hpdGUsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIHRyYW5zaXRpb246ICdib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIFdlYmtpdFRleHRGaWxsQ29sb3I6IEMud2hpdGUsXG4gICAgfSxcbiAgICBidG46IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgcGFkZGluZzogJzEycHgnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICAgICAgY29sb3I6IEMud2hpdGUsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgIGZvbnRTaXplOiAxNSxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgbWFyZ2luVG9wOiA4LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMmVtJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQgMC4xNXMgZWFzZScsXG4gICAgfSxcbiAgICBoaW50OiB7XG4gICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgY29sb3I6IEMuZ2hvc3QsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdJbnB1dDogJyMwZjE3MmEnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgY3lhbjogJyMwNmI2ZDQnLFxuICAgIGJsdWU6ICcjM2I4MmY2JyxcbiAgICBlcnJvcjogJyNlZjQ0NDQnLFxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgbXV0ZWQ6ICcjY2JkNWUxJyxcbiAgICBmYWludDogJyM5NGEzYjgnLFxuICAgIGdob3N0OiAnIzY0NzQ4YicsXG59O1xuY29uc3QgQ09OVEVOVF9UWVBFUyA9IFtcbiAgICB7IHZhbHVlOiAndGV4dCcsIGxhYmVsOiAn0KLQtdC60YHRgicgfSxcbiAgICB7IHZhbHVlOiAndmlkZW8nLCBsYWJlbDogJ9CS0LjQtNC10L4nIH0sXG4gICAgeyB2YWx1ZTogJ3F1aXonLCBsYWJlbDogJ9Ci0LXRgdGCJyB9LFxuXTtcbmNvbnN0IENBVEVHT1JJRVMgPSBbXG4gICAgeyB2YWx1ZTogJ2Zyb250ZW5kJywgbGFiZWw6ICdGcm9udGVuZCcgfSxcbiAgICB7IHZhbHVlOiAnYmFja2VuZCcsIGxhYmVsOiAnQmFja2VuZCcgfSxcbiAgICB7IHZhbHVlOiAnZGV2b3BzJywgbGFiZWw6ICdEZXZPcHMnIH0sXG4gICAgeyB2YWx1ZTogJ21vYmlsZScsIGxhYmVsOiAnTW9iaWxlJyB9LFxuICAgIHsgdmFsdWU6ICdkZXNpZ24nLCBsYWJlbDogJ0Rlc2lnbicgfSxcbiAgICB7IHZhbHVlOiAnb3RoZXInLCBsYWJlbDogJ9CU0YDRg9Cz0L7QtScgfSxcbl07XG5jb25zdCBQUkVTRVRTID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ9Ch0YLQsNC90LTQsNGA0YLQvdGL0LknLFxuICAgICAgICBpY29uOiAn4piFJyxcbiAgICAgICAgY29sb3I6IEMuZ3JlZW4sXG4gICAgICAgIGdldDogKCkgPT4gKHtcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0J/QvtC70L3Ri9C5INC60YPRgNGBINC/0L4g0YLQtdC80LUuINCf0L7QtNGF0L7QtNC40YIg0LTQu9GPINC90LDRh9C40L3QsNGO0YnQuNGFINC4INC/0YDQvtC00LLQuNC90YPRgtGL0YUuJyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnZnJvbnRlbmQnLFxuICAgICAgICAgICAgcmVxdWlyZV9xdWl6X2NvbXBsZXRpb246IHRydWUsXG4gICAgICAgICAgICBtaW5fcXVpel9zY29yZTogNjUsXG4gICAgICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgdGl0bGU6ICfQktCy0LXQtNC10L3QuNC1JywgbGVzc29uczogW3sgdGl0bGU6ICfQktCy0L7QtNC90YvQuSDRg9GA0L7QuicsIGNvbnRlbnRfdHlwZTogJ3ZpZGVvJyB9LCB7IHRpdGxlOiAn0J7QsdC30L7RgCDQvNCw0YLQtdGA0LjQsNC70L7QsicsIGNvbnRlbnRfdHlwZTogJ3RleHQnIH1dIH0sXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogJ9Ce0YHQvdC+0LLQvdCw0Y8g0YfQsNGB0YLRjCcsIGxlc3NvbnM6IFt7IHRpdGxlOiAn0J7RgdC90L7QstGLJywgY29udGVudF90eXBlOiAndmlkZW8nIH0sIHsgdGl0bGU6ICfQn9GA0LDQutGC0LjQutCwJywgY29udGVudF90eXBlOiAndGV4dCcgfSwgeyB0aXRsZTogJ9Ci0LXRgdGCJywgY29udGVudF90eXBlOiAncXVpeicgfV0gfSxcbiAgICAgICAgICAgICAgICB7IHRpdGxlOiAn0JfQsNC60LvRjtGH0LXQvdC40LUnLCBsZXNzb25zOiBbeyB0aXRsZTogJ9CY0YLQvtCz0L7QstGL0Lkg0L/RgNC+0LXQutGCJywgY29udGVudF90eXBlOiAndGV4dCcgfSwgeyB0aXRsZTogJ9Ck0LjQvdCw0LvRjNC90YvQuSDRgtC10YHRgicsIGNvbnRlbnRfdHlwZTogJ3F1aXonIH1dIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ9Cf0YDQtdC80LjRg9C8JyxcbiAgICAgICAgaWNvbjogJ+KXhicsXG4gICAgICAgIGNvbG9yOiBDLmN5YW4sXG4gICAgICAgIGdldDogKCkgPT4gKHtcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAn0J/RgNC+0LTQstC40L3Rg9GC0YvQuSDQutGD0YDRgSDRgSDRg9Cz0LvRg9Cx0LvRkdC90L3Ri9C8INC40LfRg9GH0LXQvdC40LXQvCDQuCDQsdC+0LvRjNGI0LjQvCDQutC+0LvQuNGH0LXRgdGC0LLQvtC8INC/0YDQsNC60YLQuNC60LguJyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnYmFja2VuZCcsXG4gICAgICAgICAgICByZXF1aXJlX3F1aXpfY29tcGxldGlvbjogdHJ1ZSxcbiAgICAgICAgICAgIG1pbl9xdWl6X3Njb3JlOiA4MCxcbiAgICAgICAgICAgIHNlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgeyB0aXRsZTogJ9CS0LLQtdC00LXQvdC40LUnLCBsZXNzb25zOiBbeyB0aXRsZTogJ9CS0LLQtdC00LXQvdC40LUg0LIg0LrRg9GA0YEnLCBjb250ZW50X3R5cGU6ICd2aWRlbycgfSwgeyB0aXRsZTogJ9CQ0YDRhdC40YLQtdC60YLRg9GA0LAnLCBjb250ZW50X3R5cGU6ICd0ZXh0JyB9XSB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6ICfQnNC+0LTRg9C70YwgMScsIGxlc3NvbnM6IFt7IHRpdGxlOiAn0KLQtdC+0YDQuNGPJywgY29udGVudF90eXBlOiAndmlkZW8nIH0sIHsgdGl0bGU6ICfQm9Cw0LHQvtGA0LDRgtC+0YDQvdCw0Y8nLCBjb250ZW50X3R5cGU6ICd0ZXh0JyB9LCB7IHRpdGxlOiAn0KLQtdGB0YInLCBjb250ZW50X3R5cGU6ICdxdWl6JyB9XSB9LFxuICAgICAgICAgICAgICAgIHsgdGl0bGU6ICfQnNC+0LTRg9C70YwgMicsIGxlc3NvbnM6IFt7IHRpdGxlOiAn0KLQtdC+0YDQuNGPJywgY29udGVudF90eXBlOiAndmlkZW8nIH0sIHsgdGl0bGU6ICfQn9GA0LDQutGC0LjQutCwJywgY29udGVudF90eXBlOiAndGV4dCcgfSwgeyB0aXRsZTogJ9Ci0LXRgdGCJywgY29udGVudF90eXBlOiAncXVpeicgfV0gfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0pLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAn0JLQtdCx0LjQvdCw0YAnLFxuICAgICAgICBpY29uOiAn4pePJyxcbiAgICAgICAgY29sb3I6IEMuYmx1ZSxcbiAgICAgICAgZ2V0OiAoKSA9PiAoe1xuICAgICAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICfQkdC10YHQv9C70LDRgtC90YvQuSDQstC10LHQuNC90LDRgCDRgSDQt9Cw0L/QuNGB0YzRji4g0JHQtdC3INC+0LHRj9C30LDRgtC10LvRjNC90YvRhSDRgtC10YHRgtC+0LIuJyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnb3RoZXInLFxuICAgICAgICAgICAgcmVxdWlyZV9xdWl6X2NvbXBsZXRpb246IGZhbHNlLFxuICAgICAgICAgICAgbWluX3F1aXpfc2NvcmU6IDAsXG4gICAgICAgICAgICBzZWN0aW9uczogW1xuICAgICAgICAgICAgICAgIHsgdGl0bGU6ICfQktC10LHQuNC90LDRgCcsIGxlc3NvbnM6IFt7IHRpdGxlOiAn0JfQsNC/0LjRgdGMINCy0LXQsdC40L3QsNGA0LAnLCBjb250ZW50X3R5cGU6ICd2aWRlbycgfSwgeyB0aXRsZTogJ9Cc0LDRgtC10YDQuNCw0LvRiycsIGNvbnRlbnRfdHlwZTogJ3RleHQnIH1dIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9KSxcbiAgICB9LFxuXTtcbmZ1bmN0aW9uIFNlY3Rpb25CbG9jayh7IHNlY3Rpb24sIGluZGV4LCBvbkNoYW5nZSwgb25SZW1vdmUsIH0pIHtcbiAgICBjb25zdCBhZGRMZXNzb24gPSAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4uc2VjdGlvbiwgbGVzc29uczogWy4uLnNlY3Rpb24ubGVzc29ucywgeyB0aXRsZTogJycsIGNvbnRlbnRfdHlwZTogJ3RleHQnIH1dIH0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlTGVzc29uID0gKGxpLCBsZXNzb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IFsuLi5zZWN0aW9uLmxlc3NvbnNdO1xuICAgICAgICBuZXh0W2xpXSA9IGxlc3NvbjtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5zZWN0aW9uLCBsZXNzb25zOiBuZXh0IH0pO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlTGVzc29uID0gKGxpKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4uc2VjdGlvbiwgbGVzc29uczogc2VjdGlvbi5sZXNzb25zLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gbGkpIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAxNiwgcGFkZGluZzogMTYsIGJhY2tncm91bmQ6IEMuYmdDYXJkLCBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCBib3JkZXJSYWRpdXM6IDggfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA4LCBtYXJnaW5Cb3R0b206IDEyIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBDLmN5YW4gfSB9LFxuICAgICAgICAgICAgICAgIFwiXFx1MDQyMFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCIFwiLFxuICAgICAgICAgICAgICAgIGluZGV4ICsgMSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDMwXCIsIHZhbHVlOiBzZWN0aW9uLnRpdGxlLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLnNlY3Rpb24sIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IGlucHV0U3R5bGUgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiByZW1vdmVCdG5TdHlsZSB9LCBcIlxcdTI3MTVcIikpLFxuICAgICAgICBzZWN0aW9uLmxlc3NvbnMubWFwKChsZXNzb24sIGxpKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGtleTogbGksIHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgbWFyZ2luQm90dG9tOiA2IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogQy5naG9zdCwgbWluV2lkdGg6IDE4IH0gfSxcbiAgICAgICAgICAgICAgICBsaSArIDEsXG4gICAgICAgICAgICAgICAgXCIuXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgcGxhY2Vob2xkZXI6IFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM3XFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzBcIiwgdmFsdWU6IGxlc3Nvbi50aXRsZSwgb25DaGFuZ2U6IGUgPT4gdXBkYXRlTGVzc29uKGxpLCB7IC4uLmxlc3NvbiwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCBmbGV4OiAxIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgdmFsdWU6IGxlc3Nvbi5jb250ZW50X3R5cGUsIG9uQ2hhbmdlOiBlID0+IHVwZGF0ZUxlc3NvbihsaSwgeyAuLi5sZXNzb24sIGNvbnRlbnRfdHlwZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiBzZWxlY3RTdHlsZSB9LCBDT05URU5UX1RZUEVTLm1hcChjdCA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogY3QudmFsdWUsIHZhbHVlOiBjdC52YWx1ZSB9LCBjdC5sYWJlbCkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogKCkgPT4gcmVtb3ZlTGVzc29uKGxpKSwgc3R5bGU6IHNtYWxsUmVtb3ZlQnRuU3R5bGUgfSwgXCJcXHUyNzE1XCIpKSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogYWRkTGVzc29uLCBzdHlsZTogYWRkQnRuU3R5bGUgfSwgXCIrIFxcdTA0MjNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcIikpKTtcbn1cbmNvbnN0IGlucHV0U3R5bGUgPSB7XG4gICAgZmxleDogMSxcbiAgICBwYWRkaW5nOiAnOHB4IDEwcHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogQy53aGl0ZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTMsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxufTtcbmNvbnN0IHNlbGVjdFN0eWxlID0ge1xuICAgIHBhZGRpbmc6ICc4cHggMTBweCcsXG4gICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgIGNvbG9yOiBDLndoaXRlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG59O1xuY29uc3QgcmVtb3ZlQnRuU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGNvbG9yOiBDLmVycm9yLFxuICAgIGZvbnRTaXplOiAxNixcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBwYWRkaW5nOiAnNHB4IDhweCcsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxufTtcbmNvbnN0IHNtYWxsUmVtb3ZlQnRuU3R5bGUgPSB7XG4gICAgLi4ucmVtb3ZlQnRuU3R5bGUsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIHBhZGRpbmc6ICcycHggNnB4Jyxcbn07XG5jb25zdCBhZGRCdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnNnB4IDEycHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IEMuZ3JlZW4sXG4gICAgYm9yZGVyOiBgMXB4IGRhc2hlZCAke0MuZ3JlZW59YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG1hcmdpblRvcDogNCxcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VDcmVhdGUoKSB7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2NhdGVnb3J5LCBzZXRDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnZnJvbnRlbmQnKTtcbiAgICBjb25zdCBbcmVxdWlyZVF1aXosIHNldFJlcXVpcmVRdWl6XSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFttaW5TY29yZSwgc2V0TWluU2NvcmVdID0gdXNlU3RhdGUoNjUpO1xuICAgIGNvbnN0IFtzZWN0aW9ucywgc2V0U2VjdGlvbnNdID0gdXNlU3RhdGUoW1xuICAgICAgICB7IHRpdGxlOiAnJywgbGVzc29uczogW3sgdGl0bGU6ICcnLCBjb250ZW50X3R5cGU6ICd2aWRlbycgfV0gfSxcbiAgICBdKTtcbiAgICBjb25zdCBhcHBseVByZXNldCA9IChwcmVzZXQpID0+IHtcbiAgICAgICAgY29uc3QgcCA9IHByZXNldC5nZXQoKTtcbiAgICAgICAgc2V0VGl0bGUocC50aXRsZSk7XG4gICAgICAgIHNldERlc2NyaXB0aW9uKHAuZGVzY3JpcHRpb24pO1xuICAgICAgICBzZXRDYXRlZ29yeShwLmNhdGVnb3J5KTtcbiAgICAgICAgc2V0UmVxdWlyZVF1aXoocC5yZXF1aXJlX3F1aXpfY29tcGxldGlvbik7XG4gICAgICAgIHNldE1pblNjb3JlKHAubWluX3F1aXpfc2NvcmUpO1xuICAgICAgICBzZXRTZWN0aW9ucyhwLnNlY3Rpb25zKTtcbiAgICB9O1xuICAgIGNvbnN0IGFkZFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFNlY3Rpb25zKFsuLi5zZWN0aW9ucywgeyB0aXRsZTogJycsIGxlc3NvbnM6IFt7IHRpdGxlOiAnJywgY29udGVudF90eXBlOiAndGV4dCcgfV0gfV0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlU2VjdGlvbiA9IChpLCBzZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4uc2VjdGlvbnNdO1xuICAgICAgICBuZXh0W2ldID0gc2VjdGlvbjtcbiAgICAgICAgc2V0U2VjdGlvbnMobmV4dCk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVTZWN0aW9uID0gKGkpID0+IHtcbiAgICAgICAgc2V0U2VjdGlvbnMoc2VjdGlvbnMuZmlsdGVyKChfLCBpZHgpID0+IGlkeCAhPT0gaSkpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICAgICAgaWYgKCF0aXRsZS50cmltKCkpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGFsZXJ0KCfQktCy0LXQtNC40YLQtSDQvdCw0LfQstCw0L3QuNC1INC60YPRgNGB0LAnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgcGFkZGluZzogMjQsIG1pbkhlaWdodDogJzEwMHZoJywgYmFja2dyb3VuZENvbG9yOiBDLmJnUGFnZSwgY29sb3I6IEMud2hpdGUsIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIiB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgbWV0aG9kOiBcIlBPU1RcIiwgYWN0aW9uOiBcIlwiLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCBzdHlsZTogeyBtYXhXaWR0aDogODAwLCBtYXJnaW46ICcwIGF1dG8nIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCA0cHgnLCBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sIFwiXFx1MDQyMVxcdTA0M0VcXHUwNDM3XFx1MDQzNFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQzQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0MzBcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCAyNHB4JywgZm9udFNpemU6IDEzLCBjb2xvcjogQy5naG9zdCB9IH0sIFwiXFx1MDQxN1xcdTA0MzBcXHUwNDNGXFx1MDQzRVxcdTA0M0JcXHUwNDNEXFx1MDQzOFxcdTA0NDJcXHUwNDM1IFxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDQzIFxcdTIwMTQgXFx1MDQzQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MSwgXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0QiBcXHUwNDM4IFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDM4IFxcdTA0MzFcXHUwNDQzXFx1MDQzNFxcdTA0NDNcXHUwNDQyIFxcdTA0NDFcXHUwNDNFXFx1MDQzN1xcdTA0MzRcXHUwNDMwXFx1MDQzRFxcdTA0NEIgXFx1MDQzN1xcdTA0MzAgXFx1MDQzRVxcdTA0MzRcXHUwNDM4XFx1MDQzRCBcXHUwNDQ4XFx1MDQzMFxcdTA0MzNcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMjQgfSB9LCBQUkVTRVRTLm1hcChwID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsga2V5OiBwLm5hbWUsIHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IGFwcGx5UHJlc2V0KHApLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnMTBweCAxNnB4JyxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHAuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke3AuY29sb3J9YCxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIGdhcDogNixcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjE1cycsXG4gICAgICAgICAgICAgICAgfSwgb25Nb3VzZUVudGVyOiBlID0+IHsgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IHAuY29sb3I7IGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyMwMDAnOyB9LCBvbk1vdXNlTGVhdmU6IGUgPT4geyBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gJ3RyYW5zcGFyZW50JzsgZS50YXJnZXQuc3R5bGUuY29sb3IgPSBwLmNvbG9yOyB9IH0sXG4gICAgICAgICAgICAgICAgcC5pY29uLFxuICAgICAgICAgICAgICAgIFwiIFwiLFxuICAgICAgICAgICAgICAgIHAubmFtZSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmcicsIGdhcDogMTYsIG1hcmdpbkJvdHRvbTogMjQgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBncmlkQ29sdW1uOiAnMSAvIC0xJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM3XFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQzQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0MzAgKlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdmFsdWU6IHRpdGxlLCBvbkNoYW5nZTogZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSksIG5hbWU6IFwidGl0bGVcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxRFxcdTA0MzBcXHUwNDNGXFx1MDQ0MFxcdTA0MzhcXHUwNDNDXFx1MDQzNVxcdTA0NDA6IEphdmFTY3JpcHQgQmFzaWNzXCIsIHN0eWxlOiBmdWxsSW5wdXRTdHlsZSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFFXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHsgdmFsdWU6IGRlc2NyaXB0aW9uLCBvbkNoYW5nZTogZSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSksIG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxQVxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0FcXHUwNDNFXFx1MDQzNSBcXHUwNDNFXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQzMFwiLCByb3dzOiAzLCBzdHlsZTogeyAuLi5mdWxsSW5wdXRTdHlsZSwgcmVzaXplOiAndmVydGljYWwnIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFBXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzM1xcdTA0M0VcXHUwNDQwXFx1MDQzOFxcdTA0NEZcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogY2F0ZWdvcnksIG9uQ2hhbmdlOiBlID0+IHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJjYXRlZ29yeVwiLCBzdHlsZTogZnVsbElucHV0U3R5bGUgfSwgQ0FURUdPUklFUy5tYXAoYyA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogYy52YWx1ZSwgdmFsdWU6IGMudmFsdWUgfSwgYy5sYWJlbCkpKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiB7IC4uLmxhYmVsU3R5bGUsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgY3Vyc29yOiAncG9pbnRlcicgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiByZXF1aXJlUXVpeiwgb25DaGFuZ2U6IGUgPT4gc2V0UmVxdWlyZVF1aXooZS50YXJnZXQuY2hlY2tlZCksIG5hbWU6IFwicmVxdWlyZV9xdWl6X2NvbXBsZXRpb25cIiwgc3R5bGU6IHsgYWNjZW50Q29sb3I6IEMuZ3JlZW4gfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyMlxcdTA0NDBcXHUwNDM1XFx1MDQzMVxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRDIFxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDVcXHUwNDNFXFx1MDQzNlxcdTA0MzRcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlUXVpeiAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpblRvcDogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MUNcXHUwNDM4XFx1MDQzRC4gXFx1MDQzMVxcdTA0MzBcXHUwNDNCXFx1MDQzQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwibnVtYmVyXCIsIHZhbHVlOiBtaW5TY29yZSwgb25DaGFuZ2U6IGUgPT4gc2V0TWluU2NvcmUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSksIG5hbWU6IFwibWluX3F1aXpfc2NvcmVcIiwgbWluOiAwLCBtYXg6IDEwMCwgc3R5bGU6IHsgLi4uZnVsbElucHV0U3R5bGUsIHdpZHRoOiAxMjAgfSB9KSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMubXV0ZWQsIG1hcmdpbjogJzAgMCAxMnB4JyB9IH0sXG4gICAgICAgICAgICAgICAgXCJcXHUwNDIwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRCIFxcdTA0MzggXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzhcIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMiwgY29sb3I6IEMuZ2hvc3QsIGZvbnRXZWlnaHQ6IDQwMCwgbWFyZ2luTGVmdDogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiKFwiLFxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9ucy5yZWR1Y2UoKHMsIHNlYykgPT4gcyArIHNlYy5sZXNzb25zLmxlbmd0aCwgMCksXG4gICAgICAgICAgICAgICAgICAgIFwiIFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDNFXFx1MDQzMilcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJzZWN0aW9uc19qc29uXCIsIHZhbHVlOiBKU09OLnN0cmluZ2lmeShzZWN0aW9ucykgfSksXG4gICAgICAgICAgICBzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGkpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25CbG9jaywgeyBrZXk6IGksIHNlY3Rpb246IHNlY3Rpb24sIGluZGV4OiBpLCBvbkNoYW5nZTogcyA9PiB1cGRhdGVTZWN0aW9uKGksIHMpLCBvblJlbW92ZTogKCkgPT4gcmVtb3ZlU2VjdGlvbihpKSB9KSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiA4LCBtYXJnaW5Cb3R0b206IDI0IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogYWRkU2VjdGlvbiwgc3R5bGU6IGFkZFNlY3Rpb25CdG5TdHlsZSB9LCBcIisgXFx1MDQxNFxcdTA0M0VcXHUwNDMxXFx1MDQzMFxcdTA0MzJcXHUwNDM4XFx1MDQ0MlxcdTA0NEMgXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBzdHlsZTogc3VibWl0QnRuU3R5bGUgfSwgXCJcXHUwNDIxXFx1MDQzRVxcdTA0MzdcXHUwNDM0XFx1MDQzMFxcdTA0NDJcXHUwNDRDIFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcIikpKSk7XG59XG5jb25zdCBsYWJlbFN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBjb2xvcjogQy5mYWludCxcbiAgICBtYXJnaW5Cb3R0b206IDQsXG59O1xuY29uc3QgZnVsbElucHV0U3R5bGUgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiAnOXB4IDEycHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogQy53aGl0ZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxufTtcbmNvbnN0IGFkZFNlY3Rpb25CdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IEMuY3lhbixcbiAgICBib3JkZXI6IGAxcHggZGFzaGVkICR7Qy5jeWFufWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG5jb25zdCBzdWJtaXRCdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnMTJweCAzMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBmb250U2l6ZTogMTUsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgQyA9IHtcbiAgICBiZ1BhZ2U6ICcjMDIwNjE3JyxcbiAgICBiZ1NpZGViYXI6ICcjMGYxNzJhJyxcbiAgICBiZ0NhcmQ6ICcjMWUyOTNiJyxcbiAgICBiZ0NhcmRIb3ZlcjogJyMyNDMyNDcnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5MaWdodDogJyMzNGQzOTknLFxuICAgIGdyZWVuRGFyazogJyMwNTk2NjknLFxuICAgIGN5YW46ICcjMDZiNmQ0JyxcbiAgICBibHVlOiAnIzNiODJmNicsXG4gICAgZXJyb3I6ICcjZWY0NDQ0JyxcbiAgICB0ZXh0UHJpbWFyeTogJyNmZmZmZmYnLFxuICAgIHRleHRNdXRlZDogJyNjYmQ1ZTEnLFxuICAgIHRleHRGYWludDogJyM5NGEzYjgnLFxuICAgIHRleHRHaG9zdDogJyM2NDc0OGInLFxufTtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBwYWdlOiB7XG4gICAgICAgIHBhZGRpbmc6IDI0LFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5iZ1BhZ2UsXG4gICAgICAgIGNvbG9yOiBDLnRleHRQcmltYXJ5LFxuICAgICAgICBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIsXG4gICAgfSxcbiAgICBoZWFkZXI6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjgsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IDIwLFxuICAgICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgIH0sXG4gICAgdGl0bGU6IHtcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBmb250U2l6ZTogMjQsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgY29sb3I6IEMudGV4dFByaW1hcnksXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICctMC4zcHgnLFxuICAgIH0sXG4gICAgc3VidGl0bGU6IHtcbiAgICAgICAgbWFyZ2luVG9wOiA0LFxuICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgIGNvbG9yOiBDLnRleHRHaG9zdCxcbiAgICB9LFxuICAgIHRpbWVzdGFtcDoge1xuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGNvbG9yOiBDLnRleHRHaG9zdCxcbiAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnLFxuICAgICAgICBtYXJnaW5Ub3A6IDQsXG4gICAgfSxcbiAgICBtZXRyaWNzR3JpZDoge1xuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpJyxcbiAgICAgICAgZ2FwOiAxNixcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyNCxcbiAgICB9LFxuICAgIG1ldHJpY0NhcmQ6IChhY2NlbnRDb2xvcikgPT4gKHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmJnQ2FyZCxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICAgICAgYm9yZGVyVG9wOiBgM3B4IHNvbGlkICR7YWNjZW50Q29sb3J9YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgcGFkZGluZzogJzE4cHggMjBweCcsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlJyxcbiAgICB9KSxcbiAgICBtZXRyaWNMYWJlbDoge1xuICAgICAgICBmb250U2l6ZTogMTEsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjA4ZW0nLFxuICAgICAgICBjb2xvcjogQy50ZXh0R2hvc3QsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogOCxcbiAgICB9LFxuICAgIG1ldHJpY1ZhbHVlOiB7XG4gICAgICAgIGZvbnRTaXplOiAzMixcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBjb2xvcjogQy50ZXh0UHJpbWFyeSxcbiAgICAgICAgbGluZUhlaWdodDogMSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA4LFxuICAgIH0sXG4gICAgbWV0cmljTGluazoge1xuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGNvbG9yOiBDLmdyZWVuTGlnaHQsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgfSxcbiAgICBtZXRyaWNTdWI6IHtcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBjb2xvcjogQy50ZXh0R2hvc3QsXG4gICAgfSxcbiAgICB3aWRnZXRzUm93OiB7XG4gICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSknLFxuICAgICAgICBnYXA6IDE2LFxuICAgIH0sXG4gICAgd2lkZ2V0OiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5iZ0NhcmQsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgICAgIHBhZGRpbmc6ICcyMHB4IDIycHgnLFxuICAgIH0sXG4gICAgd2lkZ2V0VGl0bGU6IHtcbiAgICAgICAgbWFyZ2luOiAnMCAwIDE0cHggMCcsXG4gICAgICAgIGZvbnRTaXplOiAxNSxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBjb2xvcjogQy50ZXh0TXV0ZWQsXG4gICAgfSxcbiAgICBidG5HcmVlbjoge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcGFkZGluZzogJzhweCAxNHB4JyxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7Qy5ncmVlbn0sICR7Qy5ncmVlbkRhcmt9KWAsXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIGJvcmRlclJhZGl1czogNyxcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjAxZW0nLFxuICAgIH0sXG4gICAgYnRuQmx1ZToge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcGFkZGluZzogJzhweCAxNHB4JyxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7Qy5ibHVlfSwgIzI1NjNlYilgLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDcsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMWVtJyxcbiAgICB9LFxuICAgIG5vdGVCb3g6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAxMixcbiAgICAgICAgcGFkZGluZzogJzEwcHggMTRweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMTYsMTg1LDEyOSwwLjA4KScsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCByZ2JhKDE2LDE4NSwxMjksMC4yNSlgLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDcsXG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgY29sb3I6IEMudGV4dEZhaW50LFxuICAgIH0sXG4gICAgZXJyb3JCb3g6IHtcbiAgICAgICAgcGFkZGluZzogJzE0cHggMThweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjM5LDY4LDY4LDAuMSknLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsMC4zKWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgY29sb3I6IEMuZXJyb3IsXG4gICAgfSxcbiAgICBsb2FkaW5nQm94OiB7XG4gICAgICAgIHBhZGRpbmc6ICcxNHB4IDE4cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdDYXJkLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgIGNvbG9yOiBDLnRleHRGYWludCxcbiAgICB9LFxuICAgIG1ldHJpY0dsb3c6IChhY2NlbnRDb2xvcikgPT4gKHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIHdpZHRoOiA2MCxcbiAgICAgICAgaGVpZ2h0OiA2MCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMCAxMHB4IDAgNjBweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYWNjZW50Q29sb3IsXG4gICAgICAgIG9wYWNpdHk6IDAuMDgsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9KSxcbn07XG5mdW5jdGlvbiBidWlsZERhc2hib2FyZFVybCgpIHtcbiAgICBjb25zdCBiYXNlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgcmV0dXJuIGAke2Jhc2V9L2FwaS9kYXNoYm9hcmRgO1xufVxuZnVuY3Rpb24gTWV0cmljQ2FyZCh7IGxhYmVsLCB2YWx1ZSwgc3ViLCBhY2NlbnQsIH0pIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLm1ldHJpY0NhcmQoYWNjZW50KSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5tZXRyaWNHbG93KGFjY2VudCkgfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLm1ldHJpY0xhYmVsIH0sIGxhYmVsKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljVmFsdWUgfSwgdmFsdWUpLFxuICAgICAgICBzdWIgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljU3ViIH0sIHN1YikpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbZmV0Y2hFcnJvciwgc2V0RmV0Y2hFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB1cmwgPSBidWlsZERhc2hib2FyZFVybCgpO1xuICAgICAgICBsZXQgbW91bnRlZCA9IHRydWU7XG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICAgICAgICBzZXRGZXRjaEVycm9yKG51bGwpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIHsgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV0d29yayBlcnJvcjogJHtyZXMuc3RhdHVzfSAke3Jlcy5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgICAgIGlmICghbW91bnRlZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHNldERhdGEoanNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3VudGVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgc2V0RmV0Y2hFcnJvcihTdHJpbmcoZXJyLm1lc3NhZ2UgPz8gZXJyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICBpZiAobW91bnRlZClcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZmV0Y2hEYXRhKCk7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZmV0Y2hEYXRhLCAzMF8wMDApO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgbW91bnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IGFkbWluQmFzZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgIGNvbnN0IGxpbmtUbyA9IChyZXNvdXJjZUlkKSA9PiBgJHthZG1pbkJhc2V9L3Jlc291cmNlcy8ke3Jlc291cmNlSWR9YDtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLnBhZ2UgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMuaGVhZGVyIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgc3R5bGU6IHN0eWxlcy50aXRsZSB9LCBcIkFkbWluIERhc2hib2FyZFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5zdWJ0aXRsZSB9LCBcIlxcdTA0MUVcXHUwNDMxXFx1MDQzN1xcdTA0M0VcXHUwNDQwIFxcdTA0M0FcXHUwNDNCXFx1MDQ0RVxcdTA0NDdcXHUwNDM1XFx1MDQzMlxcdTA0NEJcXHUwNDQ1IFxcdTA0M0NcXHUwNDM1XFx1MDQ0MlxcdTA0NDBcXHUwNDM4XFx1MDQzQSBcXHUwNDNGXFx1MDQzQlxcdTA0MzBcXHUwNDQyXFx1MDQ0NFxcdTA0M0VcXHUwNDQwXFx1MDQzQ1xcdTA0NEJcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMudGltZXN0YW1wIH0sIGRhdGE/LnRpbWVzdGFtcCA/IGDQntCx0L3QvtCy0LvQtdC90L46ICR7bmV3IERhdGUoZGF0YS50aW1lc3RhbXApLnRvTG9jYWxlU3RyaW5nKCdydS1SVScpfWAgOiAnXFx1MDBhMCcpKSxcbiAgICAgICAgbG9hZGluZyA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5sb2FkaW5nQm94IH0sIFwiXFx1MDQxN1xcdTA0MzBcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzAgXFx1MDQzQ1xcdTA0MzVcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcXHUwNDNBXFx1MjAyNlwiKSkgOiBmZXRjaEVycm9yID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLmVycm9yQm94IH0sXG4gICAgICAgICAgICBcIlxcdTA0MUVcXHUwNDQ4XFx1MDQzOFxcdTA0MzFcXHUwNDNBXFx1MDQzMCBcXHUwNDM3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzOCBcXHUwNDM0XFx1MDQzMFxcdTA0NDhcXHUwNDMxXFx1MDQzRVxcdTA0NDBcXHUwNDM0XFx1MDQzMDogXCIsXG4gICAgICAgICAgICBmZXRjaEVycm9yKSkgOiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLm1ldHJpY3NHcmlkIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXRyaWNDYXJkLCB7IGxhYmVsOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQ0MVxcdTA0MzVcXHUwNDQ5XFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQ0RlwiLCB2YWx1ZTogZGF0YT8udmlzaXRzID8/ICfigJQnLCBzdWI6IFwiXFx1MDQyMlxcdTA0MzBcXHUwNDMxXFx1MDQzQlxcdTA0MzhcXHUwNDQ2XFx1MDQzMCBzaXRlX3Zpc2l0c1wiLCBhY2NlbnQ6IEMuY3lhbiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1ldHJpY0NhcmQsIHsgbGFiZWw6IFwiXFx1MDQxRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDM4XCIsIHZhbHVlOiBkYXRhPy51c2VycyA/PyAn4oCUJywgc3ViOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IGxpbmtUbygndXNlcnMnKSwgc3R5bGU6IHN0eWxlcy5tZXRyaWNMaW5rIH0sIFwiXFx1MDQxRVxcdTA0NDJcXHUwNDNBXFx1MDQ0MFxcdTA0NEJcXHUwNDQyXFx1MDQ0QyBcXHUwNDNGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0MzVcXHUwNDM5IFxcdTIxOTJcIiksIGFjY2VudDogQy5ibHVlIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWV0cmljQ2FyZCwgeyBsYWJlbDogXCJcXHUwNDFBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQ0QlwiLCB2YWx1ZTogZGF0YT8uY291cnNlcyA/PyAn4oCUJywgc3ViOiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IGxpbmtUbygnY291cnNlcycpLCBzdHlsZTogc3R5bGVzLm1ldHJpY0xpbmsgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0FcXHUwNDQwXFx1MDQ0QlxcdTA0NDJcXHUwNDRDIFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDRCIFxcdTIxOTJcIiksIGFjY2VudDogQy5ncmVlbiB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1ldHJpY0NhcmQsIHsgbGFiZWw6IFwiXFx1MDQxN1xcdTA0MzBcXHUwNDNGXFx1MDQzOFxcdTA0NDFcXHUwNDM4XCIsIHZhbHVlOiBkYXRhPy5lbnJvbGxtZW50cyA/PyAn4oCUJywgc3ViOiBcIlxcdTA0MTJcXHUwNDQxXFx1MDQzNVxcdTA0MzNcXHUwNDNFIFxcdTA0MzdcXHUwNDMwXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzNVxcdTA0MzkgXFx1MDQzRFxcdTA0MzAgXFx1MDQzQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0NEJcIiwgYWNjZW50OiBDLmdyZWVuTGlnaHQgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMud2lkZ2V0c1JvdyB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLndpZGdldCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgeyBzdHlsZTogc3R5bGVzLndpZGdldFRpdGxlIH0sIFwiXFx1MDQyMVxcdTA0MzJcXHUwNDNFXFx1MDQzNFxcdTA0M0FcXHUwNDMwIFxcdTA0M0ZcXHUwNDNFIFxcdTA0NDFcXHUwNDMwXFx1MDQzOVxcdTA0NDJcXHUwNDQzXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCA4cHgnLCBmb250U2l6ZTogMTQsIGNvbG9yOiBDLnRleHRGYWludCwgbGluZUhlaWdodDogMS42IH0gfSwgXCJcXHUwNDFGXFx1MDQzMFxcdTA0M0RcXHUwNDM1XFx1MDQzQlxcdTA0NEMgXFx1MDQ0M1xcdTA0M0ZcXHUwNDQwXFx1MDQzMFxcdTA0MzJcXHUwNDNCXFx1MDQzNVxcdTA0M0RcXHUwNDM4XFx1MDQ0RiBcXHUwNDNGXFx1MDQzQlxcdTA0MzBcXHUwNDQyXFx1MDQ0NFxcdTA0M0VcXHUwNDQwXFx1MDQzQ1xcdTA0M0VcXHUwNDM5IE5ldGNvdXJzZS4gXFx1MDQxNFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0NDNcXHUwNDNGIFxcdTA0M0VcXHUwNDMzXFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0NDdcXHUwNDM1XFx1MDQzRCBcXHUwNDM0XFx1MDQzQlxcdTA0NEYgXFx1MDQzMFxcdTA0MzJcXHUwNDQyXFx1MDQzRVxcdTA0NDBcXHUwNDM4XFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDNEXFx1MDQ0QlxcdTA0NDUgXFx1MDQzMFxcdTA0MzRcXHUwNDNDXFx1MDQzOFxcdTA0M0RcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDQwXFx1MDQzMFxcdTA0NDJcXHUwNDNFXFx1MDQ0MFxcdTA0M0VcXHUwNDMyLlwiKSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YT8ubm90ZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubm90ZUJveCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiLCB7IHN0eWxlOiB7IGNvbG9yOiBDLmdyZWVuTGlnaHQgfSB9LCBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzOFxcdTA0M0NcXHUwNDM1XFx1MDQ0N1xcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzU6XFx1MDBBMFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubm90ZSkpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy53aWRnZXQgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHsgc3R5bGU6IHN0eWxlcy53aWRnZXRUaXRsZSB9LCBcIlxcdTA0MTFcXHUwNDRCXFx1MDQ0MVxcdTA0NDJcXHUwNDQwXFx1MDQ0QlxcdTA0MzUgXFx1MDQzNFxcdTA0MzVcXHUwNDM5XFx1MDQ0MVxcdTA0NDJcXHUwNDMyXFx1MDQzOFxcdTA0NEZcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogMTAsIGZsZXhXcmFwOiAnd3JhcCcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBsaW5rVG8oJ3VzZXJzJyksIHN0eWxlOiBzdHlsZXMuYnRuQmx1ZSB9LCBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzQlxcdTA0NENcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQzOFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogbGlua1RvKCdjb3Vyc2VzJyksIHN0eWxlOiBzdHlsZXMuYnRuR3JlZW4gfSwgXCJcXHUwNDFBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQ0QlwiKSkpKSkpKSk7XG59XG4iLCJBZG1pbkpTLlVzZXJDb21wb25lbnRzID0ge31cbmltcG9ydCBMb2dpbiBmcm9tICcuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvbG9naW4nXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkxvZ2luID0gTG9naW5cbmltcG9ydCBDb3Vyc2VRdWlja0NyZWF0ZSBmcm9tICcuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvY291cnNlLWNyZWF0ZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ291cnNlUXVpY2tDcmVhdGUgPSBDb3Vyc2VRdWlja0NyZWF0ZVxuaW1wb3J0IERhc2hib2FyZCBmcm9tICcuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvZGFzaGJvYXJkJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5EYXNoYm9hcmQgPSBEYXNoYm9hcmQiXSwibmFtZXMiOlsiQyIsImJnUGFnZSIsImJnRGFyayIsImJnQ2FyZCIsImJnSW5wdXQiLCJib3JkZXIiLCJncmVlbiIsImdyZWVuRGFyayIsImN5YW4iLCJibHVlIiwiZXJyb3IiLCJ3aGl0ZSIsIm11dGVkIiwiZmFpbnQiLCJnaG9zdCIsIkxvZ2luIiwiYWN0aW9uIiwiZXJyb3JNZXNzYWdlIiwid2luZG93IiwiX19BUFBfU1RBVEVfXyIsImJyYW5kaW5nIiwiUkVEVVhfU1RBVEUiLCJob3ZlciIsInNldEhvdmVyIiwidXNlU3RhdGUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInMiLCJwYWdlIiwiY2FyZCIsImxlZnQiLCJicmFuZCIsImJyYW5kRG90IiwiYnJhbmROYW1lIiwiY29tcGFueU5hbWUiLCJ3ZWxjb21lIiwid2VsY29tZVN1YiIsImRlY29yUm93IiwiZGVjb3JDaGlwIiwiYm9yZGVyQ29sb3IiLCJjb2xvciIsImRvdHMiLCJ2aWV3Qm94IiwieG1sbnMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwicm93IiwiY29sIiwia2V5IiwiY3giLCJjeSIsInIiLCJmaWxsIiwibWV0aG9kIiwicmlnaHQiLCJmb3JtVGl0bGUiLCJmb3JtU3ViIiwiZXJyb3JCb3giLCJlcnJvckRvdCIsImZpZWxkIiwiaHRtbEZvciIsImxhYmVsIiwiaWQiLCJuYW1lIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYXV0b0NvbXBsZXRlIiwicmVxdWlyZWQiLCJpbnB1dCIsIm9uRm9jdXMiLCJlIiwidGFyZ2V0IiwiYm94U2hhZG93Iiwib25CbHVyIiwiYnRuIiwib25Nb3VzZUVudGVyIiwiYmFja2dyb3VuZCIsIm9uTW91c2VMZWF2ZSIsImhpbnQiLCJtaW5IZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250RmFtaWx5IiwicGFkZGluZyIsImJveFNpemluZyIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwib3ZlcmZsb3ciLCJmbGV4IiwiYm9yZGVyUmlnaHQiLCJmbGV4RGlyZWN0aW9uIiwicG9zaXRpb24iLCJnYXAiLCJtYXJnaW5Cb3R0b20iLCJoZWlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsImxpbmVIZWlnaHQiLCJmbGV4V3JhcCIsIm9wYWNpdHkiLCJib3R0b20iLCJwb2ludGVyRXZlbnRzIiwib3V0bGluZSIsInRyYW5zaXRpb24iLCJXZWJraXRUZXh0RmlsbENvbG9yIiwiY3Vyc29yIiwibWFyZ2luVG9wIiwidGV4dEFsaWduIiwiQ09OVEVOVF9UWVBFUyIsInZhbHVlIiwiQ0FURUdPUklFUyIsIlBSRVNFVFMiLCJpY29uIiwiZ2V0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwicmVxdWlyZV9xdWl6X2NvbXBsZXRpb24iLCJtaW5fcXVpel9zY29yZSIsInNlY3Rpb25zIiwibGVzc29ucyIsImNvbnRlbnRfdHlwZSIsIlNlY3Rpb25CbG9jayIsInNlY3Rpb24iLCJpbmRleCIsIm9uQ2hhbmdlIiwib25SZW1vdmUiLCJhZGRMZXNzb24iLCJ1cGRhdGVMZXNzb24iLCJsaSIsImxlc3NvbiIsIm5leHQiLCJyZW1vdmVMZXNzb24iLCJmaWx0ZXIiLCJpIiwiaW5wdXRTdHlsZSIsIm9uQ2xpY2siLCJyZW1vdmVCdG5TdHlsZSIsIm1hcCIsIm1pbldpZHRoIiwic2VsZWN0U3R5bGUiLCJjdCIsInNtYWxsUmVtb3ZlQnRuU3R5bGUiLCJhZGRCdG5TdHlsZSIsIkNvdXJzZUNyZWF0ZSIsInNldFRpdGxlIiwic2V0RGVzY3JpcHRpb24iLCJzZXRDYXRlZ29yeSIsInJlcXVpcmVRdWl6Iiwic2V0UmVxdWlyZVF1aXoiLCJtaW5TY29yZSIsInNldE1pblNjb3JlIiwic2V0U2VjdGlvbnMiLCJhcHBseVByZXNldCIsInByZXNldCIsInAiLCJhZGRTZWN0aW9uIiwidXBkYXRlU2VjdGlvbiIsInJlbW92ZVNlY3Rpb24iLCJpZHgiLCJoYW5kbGVTdWJtaXQiLCJ0cmltIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsIm9uU3VibWl0IiwibWFyZ2luIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRDb2x1bW4iLCJsYWJlbFN0eWxlIiwiZnVsbElucHV0U3R5bGUiLCJyb3dzIiwicmVzaXplIiwiYyIsImNoZWNrZWQiLCJhY2NlbnRDb2xvciIsIk51bWJlciIsIm1pbiIsIm1heCIsIm1hcmdpbkxlZnQiLCJyZWR1Y2UiLCJzZWMiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkU2VjdGlvbkJ0blN0eWxlIiwic3VibWl0QnRuU3R5bGUiLCJiZ1NpZGViYXIiLCJiZ0NhcmRIb3ZlciIsImdyZWVuTGlnaHQiLCJ0ZXh0UHJpbWFyeSIsInRleHRNdXRlZCIsInRleHRGYWludCIsInRleHRHaG9zdCIsInN0eWxlcyIsImhlYWRlciIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJCb3R0b20iLCJzdWJ0aXRsZSIsInRpbWVzdGFtcCIsIm1ldHJpY3NHcmlkIiwibWV0cmljQ2FyZCIsImJvcmRlclRvcCIsIm1ldHJpY0xhYmVsIiwibWV0cmljVmFsdWUiLCJtZXRyaWNMaW5rIiwidGV4dERlY29yYXRpb24iLCJtZXRyaWNTdWIiLCJ3aWRnZXRzUm93Iiwid2lkZ2V0Iiwid2lkZ2V0VGl0bGUiLCJidG5HcmVlbiIsImJ0bkJsdWUiLCJub3RlQm94IiwibG9hZGluZ0JveCIsIm1ldHJpY0dsb3ciLCJ0b3AiLCJidWlsZERhc2hib2FyZFVybCIsImJhc2UiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVwbGFjZSIsIk1ldHJpY0NhcmQiLCJzdWIiLCJhY2NlbnQiLCJEYXNoYm9hcmQiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hFcnJvciIsInNldEZldGNoRXJyb3IiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJtb3VudGVkIiwiZmV0Y2hEYXRhIiwicmVzIiwiZmV0Y2giLCJjcmVkZW50aWFscyIsIm9rIiwiRXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwianNvbiIsImVyciIsIlN0cmluZyIsIm1lc3NhZ2UiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFkbWluQmFzZSIsImxpbmtUbyIsInJlc291cmNlSWQiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJGcmFnbWVudCIsInZpc2l0cyIsInVzZXJzIiwiaHJlZiIsImNvdXJzZXMiLCJlbnJvbGxtZW50cyIsIm5vdGUiLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJDb3Vyc2VRdWlja0NyZWF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztJQUNBLE1BQU1BLEdBQUMsR0FBRztJQUNOQyxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQ0FDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLFNBQVMsRUFBRSxTQUFTO0lBQ3BCQyxFQUFBQSxJQUFJLEVBQUUsU0FBUztJQUNmQyxFQUFBQSxJQUFJLEVBQUUsU0FBUztJQUNmQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQ0FDLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQ2MsU0FBU0MsS0FBS0EsR0FBRztNQUM1QixNQUFNO0lBQUVDLElBQUFBLE1BQU0sR0FBRyxRQUFRO0lBQUVDLElBQUFBO0lBQWEsR0FBQyxHQUFJ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
