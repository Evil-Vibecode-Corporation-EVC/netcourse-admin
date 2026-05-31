(function (React) {
    'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    var React__default = /*#__PURE__*/_interopDefault(React);

    const C$6 = {
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
          borderColor: C$6.green,
          color: C$6.green
        }
      }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          ...s.decorChip,
          borderColor: C$6.cyan,
          color: C$6.cyan
        }
      }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          ...s.decorChip,
          borderColor: C$6.blue,
          color: C$6.blue
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
          color: C$6.error
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
          e.target.style.borderColor = C$6.green;
          e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
        },
        onBlur: e => {
          setHover(null);
          e.target.style.borderColor = C$6.border;
          e.target.style.boxShadow = 'none';
        }
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: s.field
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "login-password",
        style: s.label
      }, "\u041F\u0430\u0440\u043E\u043B\u044C ", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          color: C$6.error
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
          e.target.style.borderColor = C$6.green;
          e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
        },
        onBlur: e => {
          setHover(null);
          e.target.style.borderColor = C$6.border;
          e.target.style.boxShadow = 'none';
        }
      })), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        style: s.btn,
        onMouseEnter: e => e.target.style.background = `linear-gradient(135deg, ${C$6.greenDark}, #047857)`,
        onMouseLeave: e => e.target.style.background = `linear-gradient(135deg, ${C$6.green}, ${C$6.greenDark})`
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
        backgroundColor: C$6.bgPage,
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
        border: `1px solid ${C$6.border}`,
        boxShadow: '0 25px 50px rgba(0,0,0,0.6)'
      },
      left: {
        flex: '0 0 380px',
        background: `linear-gradient(145deg, #0d2d20 0%, #0a2540 100%)`,
        borderRight: `1px solid ${C$6.border}`,
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
        backgroundColor: C$6.green,
        boxShadow: `0 0 8px ${C$6.green}`
      },
      brandName: {
        fontSize: 13,
        fontWeight: 600,
        color: C$6.faint,
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      },
      welcome: {
        fontSize: 36,
        fontWeight: 700,
        color: C$6.white,
        lineHeight: 1.2,
        marginBottom: 16,
        letterSpacing: '-0.5px'
      },
      welcomeSub: {
        fontSize: 14,
        color: C$6.faint,
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
        backgroundColor: C$6.bgDark,
        padding: '48px 44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      formTitle: {
        fontSize: 24,
        fontWeight: 700,
        color: C$6.white,
        marginBottom: 6,
        letterSpacing: '-0.3px'
      },
      formSub: {
        fontSize: 13,
        color: C$6.ghost,
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
        color: C$6.error,
        marginBottom: 20
      },
      errorDot: {
        fontSize: 8,
        lineHeight: 1,
        color: C$6.error
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
        color: C$6.faint
      },
      input: {
        width: '100%',
        padding: '11px 14px',
        backgroundColor: C$6.bgInput,
        color: C$6.white,
        border: `1px solid ${C$6.border}`,
        borderRadius: 8,
        fontSize: 14,
        outline: 'none',
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
        boxSizing: 'border-box',
        WebkitTextFillColor: C$6.white
      },
      btn: {
        width: '100%',
        padding: '12px',
        background: `linear-gradient(135deg, ${C$6.green}, ${C$6.greenDark})`,
        color: C$6.white,
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
        color: C$6.ghost,
        textAlign: 'center',
        lineHeight: 1.5
      }
    };

    const C$5 = {
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
      ghost: '#64748b'
    };
    const CONTENT_TYPES$1 = [{
      value: 'text',
      label: 'Текст'
    }, {
      value: 'video',
      label: 'Видео'
    }, {
      value: 'quiz',
      label: 'Тест'
    }];
    const QUESTION_TYPES$2 = [{
      value: 'single',
      label: 'Один вариант'
    }, {
      value: 'multiple',
      label: 'Несколько вариантов'
    }, {
      value: 'text',
      label: 'Текстовый ответ'
    }];
    const CATEGORIES$1 = [{
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
    const inputStyle$3 = {
      padding: '8px 10px',
      background: C$5.bgInput,
      color: C$5.white,
      border: `1px solid ${C$5.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const selectStyle$2 = {
      padding: '8px 10px',
      background: C$5.bgInput,
      color: C$5.white,
      border: `1px solid ${C$5.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      cursor: 'pointer'
    };
    const btnDanger$2 = {
      background: 'none',
      border: 'none',
      color: C$5.error,
      fontSize: 14,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 4
    };
    const btnAdd$2 = {
      padding: '6px 12px',
      background: 'transparent',
      color: C$5.green,
      border: `1px dashed ${C$5.green}`,
      borderRadius: 6,
      fontSize: 12,
      cursor: 'pointer',
      marginTop: 4
    };
    function AnswerRow$2({
      answer,
      onChange,
      onRemove
    }) {
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 4
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430",
        value: answer.answer_text,
        onChange: e => onChange({
          ...answer,
          answer_text: e.target.value
        }),
        style: {
          ...inputStyle$3,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("label", {
        style: {
          fontSize: 12,
          color: C$5.faint,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          cursor: 'pointer',
          whiteSpace: 'nowrap'
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "checkbox",
        checked: answer.is_correct,
        onChange: e => onChange({
          ...answer,
          is_correct: e.target.checked
        }),
        style: {
          accentColor: C$5.green
        }
      }), "\u0432\u0435\u0440\u043D\u043E"), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: onRemove,
        style: btnDanger$2
      }, "\u2715"));
    }
    function QuestionBlock$1({
      question,
      onChange,
      onRemove
    }) {
      const addAnswer = () => {
        onChange({
          ...question,
          answers: [...question.answers, {
            answer_text: '',
            is_correct: false
          }]
        });
      };
      const updateAnswer = (i, a) => {
        const next = [...question.answers];
        next[i] = a;
        onChange({
          ...question,
          answers: next
        });
      };
      const removeAnswer = i => {
        onChange({
          ...question,
          answers: question.answers.filter((_, idx) => idx !== i)
        });
      };
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 10,
          padding: 12,
          background: '#0a1628',
          border: `1px solid ${C$5.border}`,
          borderRadius: 6
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u0422\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430",
        value: question.question_text,
        onChange: e => onChange({
          ...question,
          question_text: e.target.value
        }),
        style: {
          ...inputStyle$3,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("select", {
        value: question.question_type,
        onChange: e => onChange({
          ...question,
          question_type: e.target.value
        }),
        style: selectStyle$2
      }, QUESTION_TYPES$2.map(qt => (/*#__PURE__*/React__default.default.createElement("option", {
        key: qt.value,
        value: qt.value
      }, qt.label)))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: onRemove,
        style: btnDanger$2
      }, "\u2715")), question.question_type !== 'text' && (/*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, question.answers.map((ans, ai) => (/*#__PURE__*/React__default.default.createElement(AnswerRow$2, {
        key: ai,
        answer: ans,
        onChange: a => updateAnswer(ai, a),
        onRemove: () => removeAnswer(ai)
      }))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: addAnswer,
        style: btnAdd$2
      }, "+ \u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430"))));
    }
    function LessonRow$1({
      lesson,
      onChange,
      onRemove
    }) {
      const addQuestion = () => {
        onChange({
          ...lesson,
          questions: [...(lesson.questions || []), {
            question_text: '',
            question_type: 'single',
            answers: [{
              answer_text: '',
              is_correct: false
            }]
          }]
        });
      };
      const updateQuestion = (i, q) => {
        const next = [...(lesson.questions || [])];
        next[i] = q;
        onChange({
          ...lesson,
          questions: next
        });
      };
      const removeQuestion = i => {
        onChange({
          ...lesson,
          questions: (lesson.questions || []).filter((_, idx) => idx !== i)
        });
      };
      const isQuiz = lesson.content_type === 'quiz';
      const isVideo = lesson.content_type === 'video';
      const isText = lesson.content_type === 'text';
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 8,
          padding: '10px 12px',
          background: C$5.bgCard,
          border: `1px solid ${C$5.border}`,
          borderRadius: 6
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 6
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0440\u043E\u043A\u0430",
        value: lesson.title,
        onChange: e => onChange({
          ...lesson,
          title: e.target.value
        }),
        style: {
          ...inputStyle$3,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("select", {
        value: lesson.content_type,
        onChange: e => onChange({
          ...lesson,
          content_type: e.target.value
        }),
        style: selectStyle$2
      }, CONTENT_TYPES$1.map(ct => (/*#__PURE__*/React__default.default.createElement("option", {
        key: ct.value,
        value: ct.value
      }, ct.label)))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: onRemove,
        style: btnDanger$2
      }, "\u2715")), isVideo && (/*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u0438\u0434\u0435\u043E (YouTube/Vimeo\u2026)",
        value: lesson.video_url || '',
        onChange: e => onChange({
          ...lesson,
          video_url: e.target.value
        }),
        style: {
          ...inputStyle$3,
          width: '100%'
        }
      })), isText && (/*#__PURE__*/React__default.default.createElement("textarea", {
        placeholder: "\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0443\u0440\u043E\u043A\u0430",
        value: lesson.text_content || '',
        onChange: e => onChange({
          ...lesson,
          text_content: e.target.value
        }),
        rows: 3,
        style: {
          ...inputStyle$3,
          width: '100%',
          resize: 'vertical'
        }
      })), isQuiz && (/*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginTop: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u0430",
        value: lesson.quiz_title || '',
        onChange: e => onChange({
          ...lesson,
          quiz_title: e.target.value
        }),
        style: {
          ...inputStyle$3,
          width: '100%',
          marginBottom: 8
        }
      }), (lesson.questions || []).map((q, qi) => (/*#__PURE__*/React__default.default.createElement(QuestionBlock$1, {
        key: qi,
        question: q,
        onChange: a => updateQuestion(qi, a),
        onRemove: () => removeQuestion(qi)
      }))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: addQuestion,
        style: btnAdd$2
      }, "+ \u0412\u043E\u043F\u0440\u043E\u0441"))));
    }
    function SectionBlock$1({
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
          background: C$5.bgCard,
          border: `1px solid ${C$5.border}`,
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
          color: C$5.cyan
        }
      }, "\u0420\u0430\u0437\u0434\u0435\u043B ", index + 1), /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0430",
        value: section.title,
        onChange: e => onChange({
          ...section,
          title: e.target.value
        }),
        style: {
          ...inputStyle$3,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: onRemove,
        style: btnDanger$2
      }, "\u2715")), section.lessons.map((lesson, li) => (/*#__PURE__*/React__default.default.createElement(LessonRow$1, {
        key: li,
        lesson: lesson,
        onChange: l => updateLesson(li, l),
        onRemove: () => removeLesson(li)
      }))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: addLesson,
        style: btnAdd$2
      }, "+ \u0423\u0440\u043E\u043A"));
    }
    function CourseCreate(props) {
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
      const [submitting, setSubmitting] = React.useState(false);
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
      const totalLessons = sections.reduce((s, sec) => s + sec.lessons.length, 0);
      const apiUrl = window.location.pathname.replace(/^\/resources\//, '/api/resources/');
      const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);
        try {
          const form = e.target;
          const fd = new FormData(form);
          const params = new URLSearchParams();
          for (const [key, val] of fd.entries()) {
            params.append(key, val);
          }
          const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
          });
          const data = await res.json();
          if (data.redirectUrl) {
            window.location.href = data.redirectUrl;
          } else {
            alert(data.notice?.message || 'Ошибка при создании курса');
          }
        } catch (err) {
          alert(`Ошибка: ${err.message}`);
        } finally {
          setSubmitting(false);
        }
      };
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          padding: 24,
          minHeight: '100vh',
          backgroundColor: C$5.bgPage,
          color: C$5.white,
          fontFamily: "'Roboto', sans-serif"
        }
      }, /*#__PURE__*/React__default.default.createElement("form", {
        method: "POST",
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
          color: C$5.ghost
        }
      }, "\u041A\u0443\u0440\u0441, \u0440\u0430\u0437\u0434\u0435\u043B\u044B, \u0443\u0440\u043E\u043A\u0438 \u0438 \u0442\u0435\u0441\u0442\u044B \u2014 \u0432\u0441\u0451 \u0437\u0430 \u043E\u0434\u0438\u043D \u0448\u0430\u0433"), /*#__PURE__*/React__default.default.createElement("div", {
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
        style: labelStyle$3
      }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430 *"), /*#__PURE__*/React__default.default.createElement("input", {
        value: title,
        onChange: e => setTitle(e.target.value),
        name: "title",
        placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: JavaScript \u0441 \u043D\u0443\u043B\u044F",
        style: fullInputStyle$2,
        required: true
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          gridColumn: '1 / -1'
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$3
      }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"), /*#__PURE__*/React__default.default.createElement("textarea", {
        value: description,
        onChange: e => setDescription(e.target.value),
        name: "description",
        placeholder: "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430 \u2014 \u0447\u0435\u043C\u0443 \u043D\u0430\u0443\u0447\u0438\u0442\u0441\u044F \u0441\u0442\u0443\u0434\u0435\u043D\u0442",
        rows: 3,
        style: {
          ...fullInputStyle$2,
          resize: 'vertical'
        }
      })), /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$3
      }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"), /*#__PURE__*/React__default.default.createElement("select", {
        value: category,
        onChange: e => setCategory(e.target.value),
        name: "category",
        style: fullInputStyle$2
      }, CATEGORIES$1.map(c => (/*#__PURE__*/React__default.default.createElement("option", {
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
          ...labelStyle$3,
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
          accentColor: C$5.green
        }
      }), "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"), requireQuiz && (/*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginTop: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$3
      }, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0430\u043B\u043B"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "number",
        value: minScore,
        onChange: e => setMinScore(Number(e.target.value)),
        name: "min_quiz_score",
        min: 0,
        max: 100,
        style: {
          ...fullInputStyle$2,
          width: 120
        }
      }))))), /*#__PURE__*/React__default.default.createElement("h2", {
        style: {
          fontSize: 16,
          fontWeight: 600,
          color: C$5.muted,
          margin: '0 0 12px'
        }
      }, "\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0438 \u0443\u0440\u043E\u043A\u0438", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 12,
          color: C$5.ghost,
          fontWeight: 400,
          marginLeft: 8
        }
      }, "(", sections.length, " \u0440\u0430\u0437\u0434., ", totalLessons, " \u0443\u0440\u043E\u043A\u043E\u0432)")), /*#__PURE__*/React__default.default.createElement("input", {
        type: "hidden",
        name: "sections_json",
        value: JSON.stringify(sections)
      }), sections.map((section, i) => (/*#__PURE__*/React__default.default.createElement(SectionBlock$1, {
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
        style: addSectionBtnStyle$1
      }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B")), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        disabled: submitting,
        style: submitBtnStyle$3
      }, submitting ? 'Создание…' : 'Создать курс')));
    }
    const labelStyle$3 = {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: C$5.faint,
      marginBottom: 4
    };
    const fullInputStyle$2 = {
      width: '100%',
      padding: '9px 12px',
      background: C$5.bgInput,
      color: C$5.white,
      border: `1px solid ${C$5.border}`,
      borderRadius: 6,
      fontSize: 14,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const addSectionBtnStyle$1 = {
      padding: '8px 16px',
      background: 'transparent',
      color: C$5.cyan,
      border: `1px dashed ${C$5.cyan}`,
      borderRadius: 6,
      fontSize: 13,
      cursor: 'pointer'
    };
    const submitBtnStyle$3 = {
      padding: '12px 32px',
      background: `linear-gradient(135deg, ${C$5.green}, ${C$5.greenDark})`,
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer'
    };

    const C$4 = {
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
    const QUESTION_TYPES$1 = [{
      value: 'single',
      label: 'Один вариант'
    }, {
      value: 'multiple',
      label: 'Несколько вариантов'
    }, {
      value: 'text',
      label: 'Текстовый ответ'
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
    const inputStyle$2 = {
      padding: '8px 10px',
      background: C$4.bgInput,
      color: C$4.white,
      border: `1px solid ${C$4.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const selectStyle$1 = {
      padding: '8px 10px',
      background: C$4.bgInput,
      color: C$4.white,
      border: `1px solid ${C$4.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      cursor: 'pointer'
    };
    const btnDanger$1 = {
      background: 'none',
      border: 'none',
      color: C$4.error,
      fontSize: 14,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 4
    };
    const btnAdd$1 = {
      padding: '6px 12px',
      background: 'transparent',
      color: C$4.green,
      border: `1px dashed ${C$4.green}`,
      borderRadius: 6,
      fontSize: 12,
      cursor: 'pointer',
      marginTop: 4
    };
    function AnswerRow$1({
      answer,
      onChange,
      onRemove
    }) {
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 4
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430",
        value: answer.answer_text,
        onChange: e => onChange({
          ...answer,
          answer_text: e.target.value
        }),
        style: {
          ...inputStyle$2,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("label", {
        style: {
          fontSize: 12,
          color: C$4.faint,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          cursor: 'pointer',
          whiteSpace: 'nowrap'
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "checkbox",
        checked: answer.is_correct,
        onChange: e => onChange({
          ...answer,
          is_correct: e.target.checked
        }),
        style: {
          accentColor: C$4.green
        }
      }), "\u0432\u0435\u0440\u043D\u043E"), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: onRemove,
        style: btnDanger$1
      }, "\u2715"));
    }
    function QuestionBlock({
      question,
      onChange,
      onRemove
    }) {
      const addAnswer = () => {
        onChange({
          ...question,
          answers: [...question.answers, {
            answer_text: '',
            is_correct: false
          }]
        });
      };
      const updateAnswer = (i, a) => {
        const next = [...question.answers];
        next[i] = a;
        onChange({
          ...question,
          answers: next
        });
      };
      const removeAnswer = i => {
        onChange({
          ...question,
          answers: question.answers.filter((_, idx) => idx !== i)
        });
      };
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 10,
          padding: 12,
          background: '#0a1628',
          border: `1px solid ${C$4.border}`,
          borderRadius: 6
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u0422\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430",
        value: question.question_text,
        onChange: e => onChange({
          ...question,
          question_text: e.target.value
        }),
        style: {
          ...inputStyle$2,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("select", {
        value: question.question_type,
        onChange: e => onChange({
          ...question,
          question_type: e.target.value
        }),
        style: selectStyle$1
      }, QUESTION_TYPES$1.map(qt => (/*#__PURE__*/React__default.default.createElement("option", {
        key: qt.value,
        value: qt.value
      }, qt.label)))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: onRemove,
        style: btnDanger$1
      }, "\u2715")), question.question_type !== 'text' && (/*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, question.answers.map((ans, ai) => (/*#__PURE__*/React__default.default.createElement(AnswerRow$1, {
        key: ai,
        answer: ans,
        onChange: a => updateAnswer(ai, a),
        onRemove: () => removeAnswer(ai)
      }))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: addAnswer,
        style: btnAdd$1
      }, "+ \u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430"))));
    }
    function LessonRow({
      lesson,
      onChange,
      onRemove
    }) {
      const addQuestion = () => {
        onChange({
          ...lesson,
          questions: [...(lesson.questions || []), {
            question_text: '',
            question_type: 'single',
            answers: [{
              answer_text: '',
              is_correct: false
            }]
          }]
        });
      };
      const updateQuestion = (i, q) => {
        const next = [...(lesson.questions || [])];
        next[i] = q;
        onChange({
          ...lesson,
          questions: next
        });
      };
      const removeQuestion = i => {
        onChange({
          ...lesson,
          questions: (lesson.questions || []).filter((_, idx) => idx !== i)
        });
      };
      const isQuiz = lesson.content_type === 'quiz';
      const isVideo = lesson.content_type === 'video';
      const isText = lesson.content_type === 'text';
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 8,
          padding: '10px 12px',
          background: C$4.bgCard,
          border: `1px solid ${C$4.border}`,
          borderRadius: 6
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 6
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0443\u0440\u043E\u043A\u0430",
        value: lesson.title,
        onChange: e => onChange({
          ...lesson,
          title: e.target.value
        }),
        style: {
          ...inputStyle$2,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("select", {
        value: lesson.content_type,
        onChange: e => onChange({
          ...lesson,
          content_type: e.target.value
        }),
        style: selectStyle$1
      }, CONTENT_TYPES.map(ct => (/*#__PURE__*/React__default.default.createElement("option", {
        key: ct.value,
        value: ct.value
      }, ct.label)))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: onRemove,
        style: btnDanger$1
      }, "\u2715")), isVideo && (/*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u0438\u0434\u0435\u043E (YouTube/Vimeo\u2026)",
        value: lesson.video_url || '',
        onChange: e => onChange({
          ...lesson,
          video_url: e.target.value
        }),
        style: {
          ...inputStyle$2,
          width: '100%'
        }
      })), isText && (/*#__PURE__*/React__default.default.createElement("textarea", {
        placeholder: "\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0435 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435 \u0443\u0440\u043E\u043A\u0430",
        value: lesson.text_content || '',
        onChange: e => onChange({
          ...lesson,
          text_content: e.target.value
        }),
        rows: 3,
        style: {
          ...inputStyle$2,
          width: '100%',
          resize: 'vertical'
        }
      })), isQuiz && (/*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginTop: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u0430",
        value: lesson.quiz_title || '',
        onChange: e => onChange({
          ...lesson,
          quiz_title: e.target.value
        }),
        style: {
          ...inputStyle$2,
          width: '100%',
          marginBottom: 8
        }
      }), (lesson.questions || []).map((q, qi) => (/*#__PURE__*/React__default.default.createElement(QuestionBlock, {
        key: qi,
        question: q,
        onChange: a => updateQuestion(qi, a),
        onRemove: () => removeQuestion(qi)
      }))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: addQuestion,
        style: btnAdd$1
      }, "+ \u0412\u043E\u043F\u0440\u043E\u0441"))));
    }
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
          background: C$4.bgCard,
          border: `1px solid ${C$4.border}`,
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
          color: C$4.cyan
        }
      }, "\u0420\u0430\u0437\u0434\u0435\u043B ", index + 1), /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u0430",
        value: section.title,
        onChange: e => onChange({
          ...section,
          title: e.target.value
        }),
        style: {
          ...inputStyle$2,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: onRemove,
        style: btnDanger$1
      }, "\u2715")), section.lessons.map((lesson, li) => (/*#__PURE__*/React__default.default.createElement(LessonRow, {
        key: li,
        lesson: lesson,
        onChange: l => updateLesson(li, l),
        onRemove: () => removeLesson(li)
      }))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: addLesson,
        style: btnAdd$1
      }, "+ \u0423\u0440\u043E\u043A"));
    }
    function CourseEdit(props) {
      const record = props.record?.params || {};
      const courseId = record.id;
      const initialSections = (() => {
        try {
          return record.course_data_json ? JSON.parse(record.course_data_json) : [];
        } catch {
          return [];
        }
      })();
      const [title, setTitle] = React.useState(record.title || '');
      const [description, setDescription] = React.useState(record.description || '');
      const [category, setCategory] = React.useState(record.category || 'frontend');
      const [requireQuiz, setRequireQuiz] = React.useState(record.require_quiz_completion === true || record.require_quiz_completion === 'true');
      const [minScore, setMinScore] = React.useState(Number(record.min_quiz_score ?? 65));
      const [sections, setSections] = React.useState(initialSections);
      const [submitting, setSubmitting] = React.useState(false);
      const apiUrl = window.location.pathname.replace(/^\/resources\//, '/api/resources/');
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
      const totalLessons = sections.reduce((s, sec) => s + sec.lessons.length, 0);
      const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);
        try {
          const form = e.target;
          const fd = new FormData(form);
          const params = new URLSearchParams();
          for (const [key, val] of fd.entries()) {
            params.append(key, val);
          }
          const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
          });
          const data = await res.json();
          if (data.redirectUrl) {
            window.location.href = data.redirectUrl;
          } else {
            alert(data.notice?.message || 'Ошибка при сохранении курса');
          }
        } catch (err) {
          alert(`Ошибка: ${err.message}`);
        } finally {
          setSubmitting(false);
        }
      };
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          padding: 24,
          minHeight: '100vh',
          backgroundColor: C$4.bgPage,
          color: C$4.white,
          fontFamily: "'Roboto', sans-serif"
        }
      }, /*#__PURE__*/React__default.default.createElement("form", {
        method: "POST",
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
      }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430"), /*#__PURE__*/React__default.default.createElement("p", {
        style: {
          margin: '0 0 24px',
          fontSize: 13,
          color: C$4.ghost
        }
      }, "ID: ", courseId, " \u2014 \u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0440\u0430\u0437\u0434\u0435\u043B\u043E\u0432, \u0443\u0440\u043E\u043A\u043E\u0432 \u0438 \u0442\u0435\u0441\u0442\u043E\u0432"), /*#__PURE__*/React__default.default.createElement("div", {
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
        style: labelStyle$2
      }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430 *"), /*#__PURE__*/React__default.default.createElement("input", {
        value: title,
        onChange: e => setTitle(e.target.value),
        name: "title",
        placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: JavaScript \u0441 \u043D\u0443\u043B\u044F",
        style: fullInputStyle$1,
        required: true
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          gridColumn: '1 / -1'
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$2
      }, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435"), /*#__PURE__*/React__default.default.createElement("textarea", {
        value: description,
        onChange: e => setDescription(e.target.value),
        name: "description",
        placeholder: "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430 \u2014 \u0447\u0435\u043C\u0443 \u043D\u0430\u0443\u0447\u0438\u0442\u0441\u044F \u0441\u0442\u0443\u0434\u0435\u043D\u0442",
        rows: 3,
        style: {
          ...fullInputStyle$1,
          resize: 'vertical'
        }
      })), /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$2
      }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"), /*#__PURE__*/React__default.default.createElement("select", {
        value: category,
        onChange: e => setCategory(e.target.value),
        name: "category",
        style: fullInputStyle$1
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
          ...labelStyle$2,
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
          accentColor: C$4.green
        }
      }), "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"), requireQuiz && (/*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginTop: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$2
      }, "\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0431\u0430\u043B\u043B"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "number",
        value: minScore,
        onChange: e => setMinScore(Number(e.target.value)),
        name: "min_quiz_score",
        min: 0,
        max: 100,
        style: {
          ...fullInputStyle$1,
          width: 120
        }
      }))))), /*#__PURE__*/React__default.default.createElement("h2", {
        style: {
          fontSize: 16,
          fontWeight: 600,
          color: C$4.muted,
          margin: '0 0 12px'
        }
      }, "\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0438 \u0443\u0440\u043E\u043A\u0438", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 12,
          color: C$4.ghost,
          fontWeight: 400,
          marginLeft: 8
        }
      }, "(", sections.length, " \u0440\u0430\u0437\u0434., ", totalLessons, " \u0443\u0440\u043E\u043A\u043E\u0432)")), /*#__PURE__*/React__default.default.createElement("input", {
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
        disabled: submitting,
        style: submitBtnStyle$2
      }, submitting ? 'Сохранение…' : 'Сохранить курс')));
    }
    const labelStyle$2 = {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: C$4.faint,
      marginBottom: 4
    };
    const fullInputStyle$1 = {
      width: '100%',
      padding: '9px 12px',
      background: C$4.bgInput,
      color: C$4.white,
      border: `1px solid ${C$4.border}`,
      borderRadius: 6,
      fontSize: 14,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const addSectionBtnStyle = {
      padding: '8px 16px',
      background: 'transparent',
      color: C$4.cyan,
      border: `1px dashed ${C$4.cyan}`,
      borderRadius: 6,
      fontSize: 13,
      cursor: 'pointer'
    };
    const submitBtnStyle$2 = {
      padding: '12px 32px',
      background: `linear-gradient(135deg, ${C$4.green}, ${C$4.greenDark})`,
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer'
    };

    const C$3 = {
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
      ghost: '#64748b'
    };
    const QUESTION_TYPES = [{
      value: 'single',
      label: 'Один вариант'
    }, {
      value: 'multiple',
      label: 'Несколько вариантов'
    }, {
      value: 'text',
      label: 'Текстовый ответ'
    }];
    const inputStyle$1 = {
      padding: '8px 10px',
      background: C$3.bgInput,
      color: C$3.white,
      border: `1px solid ${C$3.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const selectStyle = {
      padding: '8px 10px',
      background: C$3.bgInput,
      color: C$3.white,
      border: `1px solid ${C$3.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      cursor: 'pointer'
    };
    const btnDanger = {
      background: 'none',
      border: 'none',
      color: C$3.error,
      fontSize: 14,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 4
    };
    const btnAdd = {
      padding: '6px 12px',
      background: 'transparent',
      color: C$3.green,
      border: `1px dashed ${C$3.green}`,
      borderRadius: 6,
      fontSize: 12,
      cursor: 'pointer',
      marginTop: 4
    };
    function AnswerRow({
      answer,
      onChange,
      onRemove
    }) {
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 4
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430",
        value: answer.answer_text,
        onChange: e => onChange({
          ...answer,
          answer_text: e.target.value
        }),
        style: {
          ...inputStyle$1,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("label", {
        style: {
          fontSize: 12,
          color: C$3.faint,
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          cursor: 'pointer',
          whiteSpace: 'nowrap'
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "checkbox",
        checked: answer.is_correct,
        onChange: e => onChange({
          ...answer,
          is_correct: e.target.checked
        }),
        style: {
          accentColor: C$3.green
        }
      }), "\u0432\u0435\u0440\u043D\u043E"), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: onRemove,
        style: btnDanger
      }, "\u2715"));
    }
    function QuizCreate(props) {
      const [title, setTitle] = React.useState('');
      const [submitting, setSubmitting] = React.useState(false);
      const [questions, setQuestions] = React.useState([{
        question_text: '',
        question_type: 'single',
        answers: [{
          answer_text: '',
          is_correct: false
        }]
      }]);
      const apiUrl = window.location.pathname.replace(/^\/resources\//, '/api/resources/');
      const addQuestion = () => {
        setQuestions([...questions, {
          question_text: '',
          question_type: 'single',
          answers: [{
            answer_text: '',
            is_correct: false
          }]
        }]);
      };
      const updateQuestion = (i, q) => {
        const next = [...questions];
        next[i] = q;
        setQuestions(next);
      };
      const removeQuestion = i => {
        setQuestions(questions.filter((_, idx) => idx !== i));
      };
      const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);
        try {
          const form = e.target;
          const fd = new FormData(form);
          const params = new URLSearchParams();
          for (const [key, val] of fd.entries()) {
            params.append(key, val);
          }
          const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
          });
          const data = await res.json();
          if (data.redirectUrl) {
            window.location.href = data.redirectUrl;
          } else {
            alert(data.notice?.message || 'Ошибка при создании теста');
          }
        } catch (err) {
          alert(`Ошибка: ${err.message}`);
        } finally {
          setSubmitting(false);
        }
      };
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          padding: 24,
          minHeight: '100vh',
          backgroundColor: C$3.bgPage,
          color: C$3.white,
          fontFamily: "'Roboto', sans-serif"
        }
      }, /*#__PURE__*/React__default.default.createElement("form", {
        method: "POST",
        onSubmit: handleSubmit,
        style: {
          maxWidth: 640,
          margin: '0 auto'
        }
      }, /*#__PURE__*/React__default.default.createElement("h1", {
        style: {
          margin: '0 0 4px',
          fontSize: 22,
          fontWeight: 700
        }
      }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"), /*#__PURE__*/React__default.default.createElement("p", {
        style: {
          margin: '0 0 24px',
          fontSize: 13,
          color: C$3.ghost
        }
      }, "\u0422\u0435\u0441\u0442 \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u0438 \u043E\u0442\u0432\u0435\u0442\u0430\u043C\u0438 \u0437\u0430 \u043E\u0434\u0438\u043D \u0448\u0430\u0433"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$1
      }, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u0430 *"), /*#__PURE__*/React__default.default.createElement("input", {
        value: title,
        onChange: e => setTitle(e.target.value),
        name: "title",
        placeholder: "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0412\u0445\u043E\u0434\u043D\u043E\u0439 \u0442\u0435\u0441\u0442 \u043F\u043E JavaScript",
        style: fullInputStyle,
        required: true
      })), /*#__PURE__*/React__default.default.createElement("input", {
        type: "hidden",
        name: "questions_json",
        value: JSON.stringify(questions)
      }), /*#__PURE__*/React__default.default.createElement("h2", {
        style: {
          fontSize: 16,
          fontWeight: 600,
          color: C$3.muted,
          margin: '0 0 12px'
        }
      }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 12,
          color: C$3.ghost,
          fontWeight: 400,
          marginLeft: 8
        }
      }, "(", questions.length, ")")), questions.map((q, qi) => (/*#__PURE__*/React__default.default.createElement("div", {
        key: qi,
        style: {
          marginBottom: 12,
          padding: 12,
          background: C$3.bgCard,
          border: `1px solid ${C$3.border}`,
          borderRadius: 6
        }
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          marginBottom: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        placeholder: "\u0422\u0435\u043A\u0441\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u0430",
        value: q.question_text,
        onChange: e => updateQuestion(qi, {
          ...q,
          question_text: e.target.value
        }),
        name: `question_${qi}`,
        style: {
          ...inputStyle$1,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("select", {
        value: q.question_type,
        onChange: e => updateQuestion(qi, {
          ...q,
          question_type: e.target.value
        }),
        style: selectStyle
      }, QUESTION_TYPES.map(qt => (/*#__PURE__*/React__default.default.createElement("option", {
        key: qt.value,
        value: qt.value
      }, qt.label)))), /*#__PURE__*/React__default.default.createElement("button", {
        onClick: () => removeQuestion(qi),
        style: btnDanger
      }, "\u2715")), q.question_type !== 'text' && (/*#__PURE__*/React__default.default.createElement(React__default.default.Fragment, null, q.answers.map((a, ai) => (/*#__PURE__*/React__default.default.createElement(AnswerRow, {
        key: ai,
        answer: a,
        onChange: ans => {
          const next = [...q.answers];
          next[ai] = ans;
          updateQuestion(qi, {
            ...q,
            answers: next
          });
        },
        onRemove: () => {
          updateQuestion(qi, {
            ...q,
            answers: q.answers.filter((_, idx) => idx !== ai)
          });
        }
      }))), /*#__PURE__*/React__default.default.createElement("button", {
        type: "button",
        onClick: () => updateQuestion(qi, {
          ...q,
          answers: [...q.answers, {
            answer_text: '',
            is_correct: false
          }]
        }),
        style: btnAdd
      }, "+ \u0412\u0430\u0440\u0438\u0430\u043D\u0442 \u043E\u0442\u0432\u0435\u0442\u0430")))))), /*#__PURE__*/React__default.default.createElement("button", {
        type: "button",
        onClick: addQuestion,
        style: addQuestionBtnStyle
      }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginTop: 24
        }
      }, /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        disabled: submitting,
        style: submitBtnStyle$1
      }, submitting ? 'Создание…' : 'Создать тест'))));
    }
    const labelStyle$1 = {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: C$3.faint,
      marginBottom: 4
    };
    const fullInputStyle = {
      width: '100%',
      padding: '9px 12px',
      background: C$3.bgInput,
      color: C$3.white,
      border: `1px solid ${C$3.border}`,
      borderRadius: 6,
      fontSize: 14,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const addQuestionBtnStyle = {
      padding: '8px 16px',
      background: 'transparent',
      color: C$3.cyan,
      border: `1px dashed ${C$3.cyan}`,
      borderRadius: 6,
      fontSize: 13,
      cursor: 'pointer'
    };
    const submitBtnStyle$1 = {
      padding: '12px 32px',
      background: `linear-gradient(135deg, ${C$3.green}, ${C$3.greenDark})`,
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer'
    };

    const C$2 = {
      bgPage: '#020617',
      bgInput: '#0f172a',
      border: '#334155',
      green: '#10b981',
      greenDark: '#059669',
      faint: '#94a3b8',
      ghost: '#64748b',
      white: '#ffffff'
    };
    const ROLES = [{
      value: 'STUDENT',
      label: 'Студент'
    }, {
      value: 'USER',
      label: 'Пользователь'
    }, {
      value: 'ADMIN',
      label: 'Администратор'
    }];
    function UserCreate(props) {
      const [submitting, setSubmitting] = React.useState(false);
      const apiUrl = window.location.pathname.replace(/^\/resources\//, '/api/resources/');
      const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);
        try {
          const form = e.target;
          const fd = new FormData(form);
          const params = new URLSearchParams();
          for (const [key, val] of fd.entries()) {
            params.append(key, val);
          }
          const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
          });
          const data = await res.json();
          if (data.redirectUrl) {
            window.location.href = data.redirectUrl;
          } else {
            alert(data.notice?.message || 'Ошибка при создании пользователя');
          }
        } catch (err) {
          alert(`Ошибка: ${err.message}`);
        } finally {
          setSubmitting(false);
        }
      };
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          padding: 24,
          minHeight: '100vh',
          backgroundColor: C$2.bgPage,
          color: C$2.white,
          fontFamily: "'Roboto', sans-serif"
        }
      }, /*#__PURE__*/React__default.default.createElement("form", {
        method: "POST",
        onSubmit: handleSubmit,
        style: {
          maxWidth: 500,
          margin: '0 auto'
        }
      }, /*#__PURE__*/React__default.default.createElement("h1", {
        style: {
          margin: '0 0 4px',
          fontSize: 22,
          fontWeight: 700
        }
      }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"), /*#__PURE__*/React__default.default.createElement("p", {
        style: {
          margin: '0 0 24px',
          fontSize: 13,
          color: C$2.ghost
        }
      }, "Email, \u043F\u0430\u0440\u043E\u043B\u044C \u0438 \u0440\u043E\u043B\u044C \u2014 \u0432\u0441\u0451 \u0441\u0440\u0430\u0437\u0443"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "Email *"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "email",
        name: "email",
        placeholder: "user@example.com",
        style: inputStyle,
        required: true
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "\u041F\u0430\u0440\u043E\u043B\u044C *"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "password",
        name: "password",
        placeholder: "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
        style: inputStyle,
        required: true
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        name: "username",
        placeholder: "username",
        style: inputStyle
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "\u0420\u043E\u043B\u044C"), /*#__PURE__*/React__default.default.createElement("select", {
        name: "role",
        style: inputStyle
      }, ROLES.map(r => (/*#__PURE__*/React__default.default.createElement("option", {
        key: r.value,
        value: r.value
      }, r.label))))), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        disabled: submitting,
        style: submitBtnStyle
      }, submitting ? 'Создание…' : 'Создать пользователя')));
    }
    const labelStyle = {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: C$2.faint,
      marginBottom: 4
    };
    const inputStyle = {
      width: '100%',
      padding: '9px 12px',
      background: C$2.bgInput,
      color: '#fff',
      border: `1px solid ${C$2.border}`,
      borderRadius: 6,
      fontSize: 14,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const submitBtnStyle = {
      padding: '12px 32px',
      background: `linear-gradient(135deg, ${C$2.green}, ${C$2.greenDark})`,
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer'
    };

    const C$1 = {
      bgPage: '#020617',
      bgCard: '#1e293b',
      bgInput: '#0f172a',
      border: '#334155',
      green: '#10b981',
      greenDark: '#059669',
      error: '#ef4444',
      white: '#ffffff',
      muted: '#cbd5e1',
      ghost: '#64748b'
    };
    function ForumEdit(props) {
      const record = props.record?.params || {};
      const initialReplies = (() => {
        try {
          return record.replies_json ? JSON.parse(record.replies_json) : [];
        } catch {
          return [];
        }
      })();
      const [replies] = React.useState(initialReplies);
      const [toDelete, setToDelete] = React.useState(new Set());
      const [submitting, setSubmitting] = React.useState(false);
      const apiUrl = window.location.pathname.replace(/^\/resources\//, '/api/resources/');
      const toggleDelete = id => {
        setToDelete(prev => {
          const next = new Set(prev);
          if (next.has(id)) next.delete(id);else next.add(id);
          return next;
        });
      };
      const handleSubmit = async e => {
        e.preventDefault();
        setSubmitting(true);
        try {
          const form = e.target;
          const fd = new FormData(form);
          const params = new URLSearchParams();
          for (const [key, val] of fd.entries()) {
            params.append(key, val);
          }
          const res = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: params
          });
          const data = await res.json();
          if (data.redirectUrl) {
            window.location.href = data.redirectUrl;
          } else {
            alert(data.notice?.message || 'Ошибка при сохранении');
          }
        } catch (err) {
          alert(`Ошибка: ${err.message}`);
        } finally {
          setSubmitting(false);
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
        onSubmit: handleSubmit,
        style: {
          maxWidth: 700,
          margin: '0 auto'
        }
      }, /*#__PURE__*/React__default.default.createElement("h1", {
        style: {
          margin: '0 0 4px',
          fontSize: 22,
          fontWeight: 700
        }
      }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u043E\u0441\u0442\u0430"), /*#__PURE__*/React__default.default.createElement("p", {
        style: {
          margin: '0 0 24px',
          fontSize: 13,
          color: C$1.ghost
        }
      }, "\u041E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 \u043E\u0442\u0432\u0435\u0442\u044B \u0434\u043B\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 24,
          padding: 16,
          background: C$1.bgCard,
          border: `1px solid ${C$1.border}`,
          borderRadius: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("h2", {
        style: {
          fontSize: 16,
          fontWeight: 600,
          color: C$1.muted,
          margin: '0 0 12px'
        }
      }, "\u041E\u0442\u0432\u0435\u0442\u044B", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 12,
          color: C$1.ghost,
          fontWeight: 400,
          marginLeft: 8
        }
      }, "(", replies.length, ")")), replies.length === 0 && (/*#__PURE__*/React__default.default.createElement("p", {
        style: {
          fontSize: 13,
          color: C$1.ghost
        }
      }, "\u041D\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u043E\u0432")), replies.map(reply => {
        const marked = toDelete.has(reply.id);
        return /*#__PURE__*/React__default.default.createElement("div", {
          key: reply.id,
          style: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: 8,
            marginBottom: 8,
            padding: 10,
            background: C$1.bgInput,
            border: `1px solid ${marked ? C$1.error : C$1.border}`,
            borderRadius: 6,
            opacity: marked ? 0.5 : 1
          }
        }, /*#__PURE__*/React__default.default.createElement("input", {
          type: "checkbox",
          checked: marked,
          onChange: () => toggleDelete(reply.id),
          style: {
            marginTop: 4,
            accentColor: C$1.error
          }
        }), /*#__PURE__*/React__default.default.createElement("div", {
          style: {
            flex: 1
          }
        }, /*#__PURE__*/React__default.default.createElement("div", {
          style: {
            fontSize: 11,
            color: C$1.ghost,
            marginBottom: 4
          }
        }, "#", reply.id, " \u2014 ", reply.user_email || `user#${reply.user_id}`, " \u00B7 ", new Date(reply.created_at).toLocaleString()), /*#__PURE__*/React__default.default.createElement("div", {
          style: {
            fontSize: 13,
            color: C$1.white,
            whiteSpace: 'pre-wrap'
          }
        }, reply.body)));
      }), /*#__PURE__*/React__default.default.createElement("input", {
        type: "hidden",
        name: "delete_reply_ids",
        value: JSON.stringify([...toDelete])
      })), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        disabled: submitting,
        style: {
          padding: '12px 32px',
          background: `linear-gradient(135deg, ${C$1.green}, ${C$1.greenDark})`,
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontSize: 15,
          fontWeight: 600,
          cursor: submitting ? 'not-allowed' : 'pointer'
        }
      }, submitting ? 'Сохранение…' : 'Сохранить')));
    }

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
    AdminJS.UserComponents.CourseDetailedEdit = CourseEdit;
    AdminJS.UserComponents.QuizQuickCreate = QuizCreate;
    AdminJS.UserComponents.UserQuickCreate = UserCreate;
    AdminJS.UserComponents.ForumDetailedEdit = ForumEdit;
    AdminJS.UserComponents.Dashboard = Dashboard;

})(React);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvbG9naW4uanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvY291cnNlLWNyZWF0ZS5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9jb3Vyc2UtZWRpdC5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9xdWl6LWNyZWF0ZS5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy91c2VyLWNyZWF0ZS5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9mb3J1bS1lZGl0LmpzIiwiLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL2Rhc2hib2FyZC5qcyIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdEYXJrOiAnIzBmMTcyYScsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdJbnB1dDogJyMwZjE3MmEnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgY3lhbjogJyMwNmI2ZDQnLFxuICAgIGJsdWU6ICcjM2I4MmY2JyxcbiAgICBlcnJvcjogJyNlZjQ0NDQnLFxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgbXV0ZWQ6ICcjY2JkNWUxJyxcbiAgICBmYWludDogJyM5NGEzYjgnLFxuICAgIGdob3N0OiAnIzY0NzQ4YicsXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gICAgY29uc3QgeyBhY3Rpb24gPSAnL2xvZ2luJywgZXJyb3JNZXNzYWdlIH0gPSAod2luZG93Ll9fQVBQX1NUQVRFX18gPz8ge30pO1xuICAgIGNvbnN0IGJyYW5kaW5nID0gd2luZG93LlJFRFVYX1NUQVRFPy5icmFuZGluZyA/PyB7fTtcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzLnBhZ2UgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzLmNhcmQgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5sZWZ0IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzLmJyYW5kIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5icmFuZERvdCB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogcy5icmFuZE5hbWUgfSwgYnJhbmRpbmcuY29tcGFueU5hbWUgPz8gJ05ldGNvdXJzZSBBZG1pbicpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogcy53ZWxjb21lIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDQxNFxcdTA0M0VcXHUwNDMxXFx1MDQ0MFxcdTA0M0VcIixcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJyXCIsIG51bGwpLFxuICAgICAgICAgICAgICAgICAgICBcIlxcdTA0M0ZcXHUwNDNFXFx1MDQzNlxcdTA0MzBcXHUwNDNCXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0NENcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBzdHlsZTogcy53ZWxjb21lU3ViIH0sIFwiXFx1MDQxRlxcdTA0MzBcXHUwNDNEXFx1MDQzNVxcdTA0M0JcXHUwNDRDIFxcdTA0NDNcXHUwNDNGXFx1MDQ0MFxcdTA0MzBcXHUwNDMyXFx1MDQzQlxcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0NEYgXFx1MDQzRlxcdTA0M0JcXHUwNDMwXFx1MDQ0MlxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDNFXFx1MDQzOSBOZXRjb3Vyc2UuIFxcdTA0MTRcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDQzXFx1MDQzRiBcXHUwNDQyXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzQVxcdTA0M0UgXFx1MDQzNFxcdTA0M0JcXHUwNDRGIFxcdTA0MzBcXHUwNDMyXFx1MDQ0MlxcdTA0M0VcXHUwNDQwXFx1MDQzOFxcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzRFxcdTA0NEJcXHUwNDQ1IFxcdTA0MzBcXHUwNDM0XFx1MDQzQ1xcdTA0MzhcXHUwNDNEXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzRVxcdTA0NDBcXHUwNDNFXFx1MDQzMi5cIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzLmRlY29yUm93IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyAuLi5zLmRlY29yQ2hpcCwgYm9yZGVyQ29sb3I6IEMuZ3JlZW4sIGNvbG9yOiBDLmdyZWVuIH0gfSwgXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0MzhcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyAuLi5zLmRlY29yQ2hpcCwgYm9yZGVyQ29sb3I6IEMuY3lhbiwgY29sb3I6IEMuY3lhbiB9IH0sIFwiXFx1MDQxQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0NEJcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyAuLi5zLmRlY29yQ2hpcCwgYm9yZGVyQ29sb3I6IEMuYmx1ZSwgY29sb3I6IEMuYmx1ZSB9IH0sIFwiXFx1MDQxMFxcdTA0M0RcXHUwNDMwXFx1MDQzQlxcdTA0MzhcXHUwNDQyXFx1MDQzOFxcdTA0M0FcXHUwNDMwXCIpKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3ZnXCIsIHsgc3R5bGU6IHMuZG90cywgdmlld0JveDogXCIwIDAgMTIwIDgwXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSwgQXJyYXkuZnJvbSh7IGxlbmd0aDogNiB9LCAoXywgcm93KSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiA4IH0sIChfLCBjb2wpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHsga2V5OiBgJHtyb3d9LSR7Y29sfWAsIGN4OiBjb2wgKiAxNiArIDgsIGN5OiByb3cgKiAxMyArIDYsIHI6IFwiMS41XCIsIGZpbGw6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjE1KVwiIH0pKSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IGFjdGlvbjogYWN0aW9uLCBtZXRob2Q6IFwiUE9TVFwiLCBzdHlsZTogcy5yaWdodCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMlwiLCB7IHN0eWxlOiBzLmZvcm1UaXRsZSB9LCBcIlxcdTA0MTJcXHUwNDQ1XFx1MDQzRVxcdTA0MzQgXFx1MDQzMiBcXHUwNDQxXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQzNVxcdTA0M0NcXHUwNDQzXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHMuZm9ybVN1YiB9LCBcIlxcdTA0MTJcXHUwNDMyXFx1MDQzNVxcdTA0MzRcXHUwNDM4XFx1MDQ0MlxcdTA0MzUgXFx1MDQzMlxcdTA0MzBcXHUwNDQ4XFx1MDQzOCBcXHUwNDQzXFx1MDQ0N1xcdTA0NTFcXHUwNDQyXFx1MDQzRFxcdTA0NEJcXHUwNDM1IFxcdTA0MzRcXHUwNDMwXFx1MDQzRFxcdTA0M0RcXHUwNDRCXFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5lcnJvckJveCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiBzLmVycm9yRG90IH0sIFwiXFx1MjVDRlwiKSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzLmZpZWxkIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGh0bWxGb3I6IFwibG9naW4tZW1haWxcIiwgc3R5bGU6IHMubGFiZWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRW1haWwgXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IGNvbG9yOiBDLmVycm9yIH0gfSwgXCIqXCIpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgaWQ6IFwibG9naW4tZW1haWxcIiwgbmFtZTogXCJlbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcImFkbWluQGV4YW1wbGUuY29tXCIsIGF1dG9Db21wbGV0ZTogXCJlbWFpbFwiLCByZXF1aXJlZDogdHJ1ZSwgc3R5bGU6IHMuaW5wdXQsIG9uRm9jdXM6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdmVyKCdlbWFpbCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gQy5ncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBgMCAwIDAgM3B4IHJnYmEoMTYsMTg1LDEyOSwwLjE1KWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkJsdXI6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdmVyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gQy5ib3JkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzLmZpZWxkIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGh0bWxGb3I6IFwibG9naW4tcGFzc3dvcmRcIiwgc3R5bGU6IHMubGFiZWwgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx1MDQxRlxcdTA0MzBcXHUwNDQwXFx1MDQzRVxcdTA0M0JcXHUwNDRDIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyBjb2xvcjogQy5lcnJvciB9IH0sIFwiKlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGlkOiBcImxvZ2luLXBhc3N3b3JkXCIsIG5hbWU6IFwicGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjogXCJcXHUyMDIyXFx1MjAyMlxcdTIwMjJcXHUyMDIyXFx1MjAyMlxcdTIwMjJcXHUyMDIyXFx1MjAyMlwiLCBhdXRvQ29tcGxldGU6IFwiY3VycmVudC1wYXNzd29yZFwiLCByZXF1aXJlZDogdHJ1ZSwgc3R5bGU6IHMuaW5wdXQsIG9uRm9jdXM6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdmVyKCdwYXNzd29yZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gQy5ncmVlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBgMCAwIDAgM3B4IHJnYmEoMTYsMTg1LDEyOSwwLjE1KWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvbkJsdXI6IGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdmVyKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlckNvbG9yID0gQy5ib3JkZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIHN0eWxlOiBzLmJ0biwgb25Nb3VzZUVudGVyOiBlID0+IChlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuZ3JlZW5EYXJrfSwgIzA0Nzg1NylgKSwgb25Nb3VzZUxlYXZlOiBlID0+IChlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuZ3JlZW59LCAke0MuZ3JlZW5EYXJrfSlgKSB9LCBcIlxcdTA0MTJcXHUwNDNFXFx1MDQzOVxcdTA0NDJcXHUwNDM4XCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHMuaGludCB9LCBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzFcXHUwNDNCXFx1MDQzNVxcdTA0M0NcXHUwNDRCIFxcdTA0NDFcXHUwNDNFIFxcdTA0MzJcXHUwNDQ1XFx1MDQzRVxcdTA0MzRcXHUwNDNFXFx1MDQzQz8gXFx1MDQxRVxcdTA0MzFcXHUwNDQwXFx1MDQzMFxcdTA0NDJcXHUwNDM4XFx1MDQ0MlxcdTA0MzVcXHUwNDQxXFx1MDQ0QyBcXHUwNDNBIFxcdTA0NDFcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDM1XFx1MDQzQ1xcdTA0M0RcXHUwNDNFXFx1MDQzQ1xcdTA0NDMgXFx1MDQzMFxcdTA0MzRcXHUwNDNDXFx1MDQzOFxcdTA0M0RcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDQwXFx1MDQzMFxcdTA0NDJcXHUwNDNFXFx1MDQ0MFxcdTA0NDMuXCIpKSkpKTtcbn1cbmNvbnN0IHMgPSB7XG4gICAgcGFnZToge1xuICAgICAgICBtaW5IZWlnaHQ6ICcxMDB2aCcsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmJnUGFnZSxcbiAgICAgICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiLFxuICAgICAgICBwYWRkaW5nOiAnMjRweCcsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIH0sXG4gICAgY2FyZDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiA5MDAsXG4gICAgICAgIG1pbkhlaWdodDogNTIwLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDE2LFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIGJveFNoYWRvdzogJzAgMjVweCA1MHB4IHJnYmEoMCwwLDAsMC42KScsXG4gICAgfSxcbiAgICBsZWZ0OiB7XG4gICAgICAgIGZsZXg6ICcwIDAgMzgwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDE0NWRlZywgIzBkMmQyMCAwJSwgIzBhMjU0MCAxMDAlKWAsXG4gICAgICAgIGJvcmRlclJpZ2h0OiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICAgICAgcGFkZGluZzogJzQ4cHggNDBweCcsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgfSxcbiAgICBicmFuZDoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBnYXA6IDEwLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDQwLFxuICAgIH0sXG4gICAgYnJhbmREb3Q6IHtcbiAgICAgICAgd2lkdGg6IDEwLFxuICAgICAgICBoZWlnaHQ6IDEwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuZ3JlZW4sXG4gICAgICAgIGJveFNoYWRvdzogYDAgMCA4cHggJHtDLmdyZWVufWAsXG4gICAgfSxcbiAgICBicmFuZE5hbWU6IHtcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgIGNvbG9yOiBDLmZhaW50LFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMWVtJyxcbiAgICB9LFxuICAgIHdlbGNvbWU6IHtcbiAgICAgICAgZm9udFNpemU6IDM2LFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIGNvbG9yOiBDLndoaXRlLFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLjIsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMTYsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxuICAgIH0sXG4gICAgd2VsY29tZVN1Yjoge1xuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgIGNvbG9yOiBDLmZhaW50LFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLjY1LFxuICAgICAgICBtYXJnaW5Cb3R0b206IDMyLFxuICAgIH0sXG4gICAgZGVjb3JSb3c6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4V3JhcDogJ3dyYXAnLFxuICAgICAgICBnYXA6IDgsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxuICAgIH0sXG4gICAgZGVjb3JDaGlwOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBwYWRkaW5nOiAnNHB4IDEwcHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wNWVtJyxcbiAgICAgICAgb3BhY2l0eTogMC43LFxuICAgIH0sXG4gICAgZG90czoge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgYm90dG9tOiAyNCxcbiAgICAgICAgcmlnaHQ6IDI0LFxuICAgICAgICB3aWR0aDogMTIwLFxuICAgICAgICBoZWlnaHQ6IDgwLFxuICAgICAgICBvcGFjaXR5OiAwLjYsXG4gICAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJyxcbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICAgIGZsZXg6IDEsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5iZ0RhcmssXG4gICAgICAgIHBhZGRpbmc6ICc0OHB4IDQ0cHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgfSxcbiAgICBmb3JtVGl0bGU6IHtcbiAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIGNvbG9yOiBDLndoaXRlLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDYsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICctMC4zcHgnLFxuICAgIH0sXG4gICAgZm9ybVN1Yjoge1xuICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgIGNvbG9yOiBDLmdob3N0LFxuICAgICAgICBtYXJnaW5Cb3R0b206IDMyLFxuICAgIH0sXG4gICAgZXJyb3JCb3g6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgZ2FwOiA4LFxuICAgICAgICBwYWRkaW5nOiAnMTBweCAxNHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyMzksNjgsNjgsMC4xKScsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCByZ2JhKDIzOSw2OCw2OCwwLjMpYCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgIGNvbG9yOiBDLmVycm9yLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDIwLFxuICAgIH0sXG4gICAgZXJyb3JEb3Q6IHtcbiAgICAgICAgZm9udFNpemU6IDgsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgIGNvbG9yOiBDLmVycm9yLFxuICAgIH0sXG4gICAgZmllbGQ6IHtcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAgZ2FwOiA2LFxuICAgIH0sXG4gICAgbGFiZWw6IHtcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGNvbG9yOiBDLmZhaW50LFxuICAgIH0sXG4gICAgaW5wdXQ6IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgcGFkZGluZzogJzExcHggMTRweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5iZ0lucHV0LFxuICAgICAgICBjb2xvcjogQy53aGl0ZSxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JvcmRlci1jb2xvciAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2UnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgV2Via2l0VGV4dEZpbGxDb2xvcjogQy53aGl0ZSxcbiAgICB9LFxuICAgIGJ0bjoge1xuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBwYWRkaW5nOiAnMTJweCcsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuZ3JlZW59LCAke0MuZ3JlZW5EYXJrfSlgLFxuICAgICAgICBjb2xvcjogQy53aGl0ZSxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICBtYXJnaW5Ub3A6IDgsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjAyZW0nLFxuICAgICAgICB0cmFuc2l0aW9uOiAnYmFja2dyb3VuZCAwLjE1cyBlYXNlJyxcbiAgICB9LFxuICAgIGhpbnQ6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAyMCxcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBjb2xvcjogQy5naG9zdCxcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgbGluZUhlaWdodDogMS41LFxuICAgIH0sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgQyA9IHtcbiAgICBiZ1BhZ2U6ICcjMDIwNjE3JyxcbiAgICBiZ0NhcmQ6ICcjMWUyOTNiJyxcbiAgICBiZ0lucHV0OiAnIzBmMTcyYScsXG4gICAgYm9yZGVyOiAnIzMzNDE1NScsXG4gICAgZ3JlZW46ICcjMTBiOTgxJyxcbiAgICBncmVlbkRhcms6ICcjMDU5NjY5JyxcbiAgICBjeWFuOiAnIzA2YjZkNCcsXG4gICAgYmx1ZTogJyMzYjgyZjYnLFxuICAgIGVycm9yOiAnI2VmNDQ0NCcsXG4gICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgICBtdXRlZDogJyNjYmQ1ZTEnLFxuICAgIGZhaW50OiAnIzk0YTNiOCcsXG4gICAgZ2hvc3Q6ICcjNjQ3NDhiJyxcbn07XG5jb25zdCBDT05URU5UX1RZUEVTID0gW1xuICAgIHsgdmFsdWU6ICd0ZXh0JywgbGFiZWw6ICfQotC10LrRgdGCJyB9LFxuICAgIHsgdmFsdWU6ICd2aWRlbycsIGxhYmVsOiAn0JLQuNC00LXQvicgfSxcbiAgICB7IHZhbHVlOiAncXVpeicsIGxhYmVsOiAn0KLQtdGB0YInIH0sXG5dO1xuY29uc3QgUVVFU1RJT05fVFlQRVMgPSBbXG4gICAgeyB2YWx1ZTogJ3NpbmdsZScsIGxhYmVsOiAn0J7QtNC40L0g0LLQsNGA0LjQsNC90YInIH0sXG4gICAgeyB2YWx1ZTogJ211bHRpcGxlJywgbGFiZWw6ICfQndC10YHQutC+0LvRjNC60L4g0LLQsNGA0LjQsNC90YLQvtCyJyB9LFxuICAgIHsgdmFsdWU6ICd0ZXh0JywgbGFiZWw6ICfQotC10LrRgdGC0L7QstGL0Lkg0L7RgtCy0LXRgicgfSxcbl07XG5jb25zdCBDQVRFR09SSUVTID0gW1xuICAgIHsgdmFsdWU6ICdmcm9udGVuZCcsIGxhYmVsOiAnRnJvbnRlbmQnIH0sXG4gICAgeyB2YWx1ZTogJ2JhY2tlbmQnLCBsYWJlbDogJ0JhY2tlbmQnIH0sXG4gICAgeyB2YWx1ZTogJ2Rldm9wcycsIGxhYmVsOiAnRGV2T3BzJyB9LFxuICAgIHsgdmFsdWU6ICdtb2JpbGUnLCBsYWJlbDogJ01vYmlsZScgfSxcbiAgICB7IHZhbHVlOiAnZGVzaWduJywgbGFiZWw6ICdEZXNpZ24nIH0sXG4gICAgeyB2YWx1ZTogJ290aGVyJywgbGFiZWw6ICfQlNGA0YPQs9C+0LUnIH0sXG5dO1xuY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnOHB4IDEwcHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogQy53aGl0ZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTMsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxufTtcbmNvbnN0IHNlbGVjdFN0eWxlID0ge1xuICAgIHBhZGRpbmc6ICc4cHggMTBweCcsXG4gICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgIGNvbG9yOiBDLndoaXRlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG59O1xuY29uc3QgYnRuRGFuZ2VyID0ge1xuICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBjb2xvcjogQy5lcnJvcixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgcGFkZGluZzogJzRweCA4cHgnLFxuICAgIGJvcmRlclJhZGl1czogNCxcbn07XG5jb25zdCBidG5BZGQgPSB7XG4gICAgcGFkZGluZzogJzZweCAxMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBDLmdyZWVuLFxuICAgIGJvcmRlcjogYDFweCBkYXNoZWQgJHtDLmdyZWVufWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBtYXJnaW5Ub3A6IDQsXG59O1xuZnVuY3Rpb24gQW5zd2VyUm93KHsgYW5zd2VyLCBvbkNoYW5nZSwgb25SZW1vdmUsIH0pIHtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDYsIG1hcmdpbkJvdHRvbTogNCB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDEyXFx1MDQzMFxcdTA0NDBcXHUwNDM4XFx1MDQzMFxcdTA0M0RcXHUwNDQyIFxcdTA0M0VcXHUwNDQyXFx1MDQzMlxcdTA0MzVcXHUwNDQyXFx1MDQzMFwiLCB2YWx1ZTogYW5zd2VyLmFuc3dlcl90ZXh0LCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmFuc3dlciwgYW5zd2VyX3RleHQ6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCBmbGV4OiAxIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMiwgY29sb3I6IEMuZmFpbnQsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNCwgY3Vyc29yOiAncG9pbnRlcicsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiY2hlY2tib3hcIiwgY2hlY2tlZDogYW5zd2VyLmlzX2NvcnJlY3QsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4uYW5zd2VyLCBpc19jb3JyZWN0OiBlLnRhcmdldC5jaGVja2VkIH0pLCBzdHlsZTogeyBhY2NlbnRDb2xvcjogQy5ncmVlbiB9IH0pLFxuICAgICAgICAgICAgXCJcXHUwNDMyXFx1MDQzNVxcdTA0NDBcXHUwNDNEXFx1MDQzRVwiKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IG9uUmVtb3ZlLCBzdHlsZTogYnRuRGFuZ2VyIH0sIFwiXFx1MjcxNVwiKSkpO1xufVxuZnVuY3Rpb24gUXVlc3Rpb25CbG9jayh7IHF1ZXN0aW9uLCBvbkNoYW5nZSwgb25SZW1vdmUsIH0pIHtcbiAgICBjb25zdCBhZGRBbnN3ZXIgPSAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlc3Rpb24sIGFuc3dlcnM6IFsuLi5xdWVzdGlvbi5hbnN3ZXJzLCB7IGFuc3dlcl90ZXh0OiAnJywgaXNfY29ycmVjdDogZmFsc2UgfV0gfSk7XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGVBbnN3ZXIgPSAoaSwgYSkgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gWy4uLnF1ZXN0aW9uLmFuc3dlcnNdO1xuICAgICAgICBuZXh0W2ldID0gYTtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVzdGlvbiwgYW5zd2VyczogbmV4dCB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZUFuc3dlciA9IChpKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlc3Rpb24sIGFuc3dlcnM6IHF1ZXN0aW9uLmFuc3dlcnMuZmlsdGVyKChfLCBpZHgpID0+IGlkeCAhPT0gaSkgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDEwLCBwYWRkaW5nOiAxMiwgYmFja2dyb3VuZDogJyMwYTE2MjgnLCBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCBib3JkZXJSYWRpdXM6IDYgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDggfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MjJcXHUwNDM1XFx1MDQzQVxcdTA0NDFcXHUwNDQyIFxcdTA0MzJcXHUwNDNFXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQ0MVxcdTA0MzBcIiwgdmFsdWU6IHF1ZXN0aW9uLnF1ZXN0aW9uX3RleHQsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ucXVlc3Rpb24sIHF1ZXN0aW9uX3RleHQ6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCBmbGV4OiAxIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgdmFsdWU6IHF1ZXN0aW9uLnF1ZXN0aW9uX3R5cGUsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ucXVlc3Rpb24sIHF1ZXN0aW9uX3R5cGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogc2VsZWN0U3R5bGUgfSwgUVVFU1RJT05fVFlQRVMubWFwKHF0ID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsga2V5OiBxdC52YWx1ZSwgdmFsdWU6IHF0LnZhbHVlIH0sIHF0LmxhYmVsKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBvblJlbW92ZSwgc3R5bGU6IGJ0bkRhbmdlciB9LCBcIlxcdTI3MTVcIikpLFxuICAgICAgICBxdWVzdGlvbi5xdWVzdGlvbl90eXBlICE9PSAndGV4dCcgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICBxdWVzdGlvbi5hbnN3ZXJzLm1hcCgoYW5zLCBhaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5zd2VyUm93LCB7IGtleTogYWksIGFuc3dlcjogYW5zLCBvbkNoYW5nZTogYSA9PiB1cGRhdGVBbnN3ZXIoYWksIGEpLCBvblJlbW92ZTogKCkgPT4gcmVtb3ZlQW5zd2VyKGFpKSB9KSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IGFkZEFuc3dlciwgc3R5bGU6IGJ0bkFkZCB9LCBcIisgXFx1MDQxMlxcdTA0MzBcXHUwNDQwXFx1MDQzOFxcdTA0MzBcXHUwNDNEXFx1MDQ0MiBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0MzBcIikpKSkpO1xufVxuZnVuY3Rpb24gTGVzc29uUm93KHsgbGVzc29uLCBvbkNoYW5nZSwgb25SZW1vdmUsIH0pIHtcbiAgICBjb25zdCBhZGRRdWVzdGlvbiA9ICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgLi4ubGVzc29uLFxuICAgICAgICAgICAgcXVlc3Rpb25zOiBbLi4uKGxlc3Nvbi5xdWVzdGlvbnMgfHwgW10pLCB7IHF1ZXN0aW9uX3RleHQ6ICcnLCBxdWVzdGlvbl90eXBlOiAnc2luZ2xlJywgYW5zd2VyczogW3sgYW5zd2VyX3RleHQ6ICcnLCBpc19jb3JyZWN0OiBmYWxzZSB9XSB9XSxcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGVRdWVzdGlvbiA9IChpLCBxKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4uKGxlc3Nvbi5xdWVzdGlvbnMgfHwgW10pXTtcbiAgICAgICAgbmV4dFtpXSA9IHE7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ubGVzc29uLCBxdWVzdGlvbnM6IG5leHQgfSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVRdWVzdGlvbiA9IChpKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ubGVzc29uLCBxdWVzdGlvbnM6IChsZXNzb24ucXVlc3Rpb25zIHx8IFtdKS5maWx0ZXIoKF8sIGlkeCkgPT4gaWR4ICE9PSBpKSB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGlzUXVpeiA9IGxlc3Nvbi5jb250ZW50X3R5cGUgPT09ICdxdWl6JztcbiAgICBjb25zdCBpc1ZpZGVvID0gbGVzc29uLmNvbnRlbnRfdHlwZSA9PT0gJ3ZpZGVvJztcbiAgICBjb25zdCBpc1RleHQgPSBsZXNzb24uY29udGVudF90eXBlID09PSAndGV4dCc7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiA4LCBwYWRkaW5nOiAnMTBweCAxMnB4JywgYmFja2dyb3VuZDogQy5iZ0NhcmQsIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsIGJvcmRlclJhZGl1czogNiB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDYsIG1hcmdpbkJvdHRvbTogNiB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM3XFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzBcIiwgdmFsdWU6IGxlc3Nvbi50aXRsZSwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5sZXNzb24sIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgZmxleDogMSB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IHZhbHVlOiBsZXNzb24uY29udGVudF90eXBlLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgY29udGVudF90eXBlOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHNlbGVjdFN0eWxlIH0sIENPTlRFTlRfVFlQRVMubWFwKGN0ID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsga2V5OiBjdC52YWx1ZSwgdmFsdWU6IGN0LnZhbHVlIH0sIGN0LmxhYmVsKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBvblJlbW92ZSwgc3R5bGU6IGJ0bkRhbmdlciB9LCBcIlxcdTI3MTVcIikpLFxuICAgICAgICBpc1ZpZGVvICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQyMVxcdTA0NDFcXHUwNDRCXFx1MDQzQlxcdTA0M0FcXHUwNDMwIFxcdTA0M0RcXHUwNDMwIFxcdTA0MzJcXHUwNDM4XFx1MDQzNFxcdTA0MzVcXHUwNDNFIChZb3VUdWJlL1ZpbWVvXFx1MjAyNilcIiwgdmFsdWU6IGxlc3Nvbi52aWRlb191cmwgfHwgJycsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ubGVzc29uLCB2aWRlb191cmw6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCB3aWR0aDogJzEwMCUnIH0gfSkpLFxuICAgICAgICBpc1RleHQgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7IHBsYWNlaG9sZGVyOiBcIlxcdTA0MjJcXHUwNDM1XFx1MDQzQVxcdTA0NDFcXHUwNDQyXFx1MDQzRVxcdTA0MzJcXHUwNDNFXFx1MDQzNSBcXHUwNDQxXFx1MDQzRVxcdTA0MzRcXHUwNDM1XFx1MDQ0MFxcdTA0MzZcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDMwXCIsIHZhbHVlOiBsZXNzb24udGV4dF9jb250ZW50IHx8ICcnLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgdGV4dF9jb250ZW50OiBlLnRhcmdldC52YWx1ZSB9KSwgcm93czogMywgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgd2lkdGg6ICcxMDAlJywgcmVzaXplOiAndmVydGljYWwnIH0gfSkpLFxuICAgICAgICBpc1F1aXogJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Ub3A6IDggfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MURcXHUwNDMwXFx1MDQzN1xcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXCIsIHZhbHVlOiBsZXNzb24ucXVpel90aXRsZSB8fCAnJywgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5sZXNzb24sIHF1aXpfdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCB3aWR0aDogJzEwMCUnLCBtYXJnaW5Cb3R0b206IDggfSB9KSxcbiAgICAgICAgICAgIChsZXNzb24ucXVlc3Rpb25zIHx8IFtdKS5tYXAoKHEsIHFpKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChRdWVzdGlvbkJsb2NrLCB7IGtleTogcWksIHF1ZXN0aW9uOiBxLCBvbkNoYW5nZTogYSA9PiB1cGRhdGVRdWVzdGlvbihxaSwgYSksIG9uUmVtb3ZlOiAoKSA9PiByZW1vdmVRdWVzdGlvbihxaSkgfSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBhZGRRdWVzdGlvbiwgc3R5bGU6IGJ0bkFkZCB9LCBcIisgXFx1MDQxMlxcdTA0M0VcXHUwNDNGXFx1MDQ0MFxcdTA0M0VcXHUwNDQxXCIpKSkpKTtcbn1cbmZ1bmN0aW9uIFNlY3Rpb25CbG9jayh7IHNlY3Rpb24sIGluZGV4LCBvbkNoYW5nZSwgb25SZW1vdmUsIH0pIHtcbiAgICBjb25zdCBhZGRMZXNzb24gPSAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4uc2VjdGlvbiwgbGVzc29uczogWy4uLnNlY3Rpb24ubGVzc29ucywgeyB0aXRsZTogJycsIGNvbnRlbnRfdHlwZTogJ3RleHQnIH1dIH0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlTGVzc29uID0gKGxpLCBsZXNzb24pID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IFsuLi5zZWN0aW9uLmxlc3NvbnNdO1xuICAgICAgICBuZXh0W2xpXSA9IGxlc3NvbjtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5zZWN0aW9uLCBsZXNzb25zOiBuZXh0IH0pO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlTGVzc29uID0gKGxpKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4uc2VjdGlvbiwgbGVzc29uczogc2VjdGlvbi5sZXNzb25zLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gbGkpIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAxNiwgcGFkZGluZzogMTYsIGJhY2tncm91bmQ6IEMuYmdDYXJkLCBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCBib3JkZXJSYWRpdXM6IDggfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA4LCBtYXJnaW5Cb3R0b206IDEyIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEzLCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBDLmN5YW4gfSB9LFxuICAgICAgICAgICAgICAgIFwiXFx1MDQyMFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCIFwiLFxuICAgICAgICAgICAgICAgIGluZGV4ICsgMSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM3XFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQzMFwiLCB2YWx1ZTogc2VjdGlvbi50aXRsZSwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5zZWN0aW9uLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBvblJlbW92ZSwgc3R5bGU6IGJ0bkRhbmdlciB9LCBcIlxcdTI3MTVcIikpLFxuICAgICAgICBzZWN0aW9uLmxlc3NvbnMubWFwKChsZXNzb24sIGxpKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChMZXNzb25Sb3csIHsga2V5OiBsaSwgbGVzc29uOiBsZXNzb24sIG9uQ2hhbmdlOiBsID0+IHVwZGF0ZUxlc3NvbihsaSwgbCksIG9uUmVtb3ZlOiAoKSA9PiByZW1vdmVMZXNzb24obGkpIH0pKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBhZGRMZXNzb24sIHN0eWxlOiBidG5BZGQgfSwgXCIrIFxcdTA0MjNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcIikpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvdXJzZUNyZWF0ZShwcm9wcykge1xuICAgIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoJ2Zyb250ZW5kJyk7XG4gICAgY29uc3QgW3JlcXVpcmVRdWl6LCBzZXRSZXF1aXJlUXVpel0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgICBjb25zdCBbbWluU2NvcmUsIHNldE1pblNjb3JlXSA9IHVzZVN0YXRlKDY1KTtcbiAgICBjb25zdCBbc2VjdGlvbnMsIHNldFNlY3Rpb25zXSA9IHVzZVN0YXRlKFtcbiAgICAgICAgeyB0aXRsZTogJycsIGxlc3NvbnM6IFt7IHRpdGxlOiAnJywgY29udGVudF90eXBlOiAndmlkZW8nIH1dIH0sXG4gICAgXSk7XG4gICAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFkZFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFNlY3Rpb25zKFsuLi5zZWN0aW9ucywgeyB0aXRsZTogJycsIGxlc3NvbnM6IFt7IHRpdGxlOiAnJywgY29udGVudF90eXBlOiAndGV4dCcgfV0gfV0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlU2VjdGlvbiA9IChpLCBzZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4uc2VjdGlvbnNdO1xuICAgICAgICBuZXh0W2ldID0gc2VjdGlvbjtcbiAgICAgICAgc2V0U2VjdGlvbnMobmV4dCk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVTZWN0aW9uID0gKGkpID0+IHtcbiAgICAgICAgc2V0U2VjdGlvbnMoc2VjdGlvbnMuZmlsdGVyKChfLCBpZHgpID0+IGlkeCAhPT0gaSkpO1xuICAgIH07XG4gICAgY29uc3QgdG90YWxMZXNzb25zID0gc2VjdGlvbnMucmVkdWNlKChzLCBzZWMpID0+IHMgKyBzZWMubGVzc29ucy5sZW5ndGgsIDApO1xuICAgIGNvbnN0IGFwaVVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvcmVzb3VyY2VzXFwvLywgJy9hcGkvcmVzb3VyY2VzLycpO1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZkLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEucmVkaXJlY3RVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm5vdGljZT8ubWVzc2FnZSB8fCAn0J7RiNC40LHQutCwINC/0YDQuCDRgdC+0LfQtNCw0L3QuNC4INC60YPRgNGB0LAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBhbGVydChg0J7RiNC40LHQutCwOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IHBhZGRpbmc6IDI0LCBtaW5IZWlnaHQ6ICcxMDB2aCcsIGJhY2tncm91bmRDb2xvcjogQy5iZ1BhZ2UsIGNvbG9yOiBDLndoaXRlLCBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IG1ldGhvZDogXCJQT1NUXCIsIG9uU3VibWl0OiBoYW5kbGVTdWJtaXQsIHN0eWxlOiB7IG1heFdpZHRoOiA4MDAsIG1hcmdpbjogJzAgYXV0bycgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDRweCcsIGZvbnRTaXplOiAyMiwgZm9udFdlaWdodDogNzAwIH0gfSwgXCJcXHUwNDIxXFx1MDQzRVxcdTA0MzdcXHUwNDM0XFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQzMFwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDI0cHgnLCBmb250U2l6ZTogMTMsIGNvbG9yOiBDLmdob3N0IH0gfSwgXCJcXHUwNDFBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxLCBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRCLCBcXHUwNDQzXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXFx1MDQzOCBcXHUwNDM4IFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDRCIFxcdTIwMTQgXFx1MDQzMlxcdTA0NDFcXHUwNDUxIFxcdTA0MzdcXHUwNDMwIFxcdTA0M0VcXHUwNDM0XFx1MDQzOFxcdTA0M0QgXFx1MDQ0OFxcdTA0MzBcXHUwNDMzXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInLCBnYXA6IDE2LCBtYXJnaW5Cb3R0b206IDI0IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZ3JpZENvbHVtbjogJzEgLyAtMScgfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MURcXHUwNDMwXFx1MDQzN1xcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDMwICpcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHZhbHVlOiB0aXRsZSwgb25DaGFuZ2U6IGUgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpLCBuYW1lOiBcInRpdGxlXCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MURcXHUwNDMwXFx1MDQzRlxcdTA0NDBcXHUwNDM4XFx1MDQzQ1xcdTA0MzVcXHUwNDQwOiBKYXZhU2NyaXB0IFxcdTA0NDEgXFx1MDQzRFxcdTA0NDNcXHUwNDNCXFx1MDQ0RlwiLCBzdHlsZTogZnVsbElucHV0U3R5bGUsIHJlcXVpcmVkOiB0cnVlIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZ3JpZENvbHVtbjogJzEgLyAtMScgfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MUVcXHUwNDNGXFx1MDQzOFxcdTA0NDFcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1XCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgeyB2YWx1ZTogZGVzY3JpcHRpb24sIG9uQ2hhbmdlOiBlID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJkZXNjcmlwdGlvblwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFBXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzQVxcdTA0M0VcXHUwNDM1IFxcdTA0M0VcXHUwNDNGXFx1MDQzOFxcdTA0NDFcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDMwIFxcdTIwMTQgXFx1MDQ0N1xcdTA0MzVcXHUwNDNDXFx1MDQ0MyBcXHUwNDNEXFx1MDQzMFxcdTA0NDNcXHUwNDQ3XFx1MDQzOFxcdTA0NDJcXHUwNDQxXFx1MDQ0RiBcXHUwNDQxXFx1MDQ0MlxcdTA0NDNcXHUwNDM0XFx1MDQzNVxcdTA0M0RcXHUwNDQyXCIsIHJvd3M6IDMsIHN0eWxlOiB7IC4uLmZ1bGxJbnB1dFN0eWxlLCByZXNpemU6ICd2ZXJ0aWNhbCcgfSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MUFcXHUwNDMwXFx1MDQ0MlxcdTA0MzVcXHUwNDMzXFx1MDQzRVxcdTA0NDBcXHUwNDM4XFx1MDQ0RlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IHZhbHVlOiBjYXRlZ29yeSwgb25DaGFuZ2U6IGUgPT4gc2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpLCBuYW1lOiBcImNhdGVnb3J5XCIsIHN0eWxlOiBmdWxsSW5wdXRTdHlsZSB9LCBDQVRFR09SSUVTLm1hcChjID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsga2V5OiBjLnZhbHVlLCB2YWx1ZTogYy52YWx1ZSB9LCBjLmxhYmVsKSkpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IHsgLi4ubGFiZWxTdHlsZSwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA4LCBjdXJzb3I6ICdwb2ludGVyJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNoZWNrZWQ6IHJlcXVpcmVRdWl6LCBvbkNoYW5nZTogZSA9PiBzZXRSZXF1aXJlUXVpeihlLnRhcmdldC5jaGVja2VkKSwgbmFtZTogXCJyZXF1aXJlX3F1aXpfY29tcGxldGlvblwiLCBzdHlsZTogeyBhY2NlbnRDb2xvcjogQy5ncmVlbiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDIyXFx1MDQ0MFxcdTA0MzVcXHUwNDMxXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0NEMgXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQ0NVxcdTA0M0VcXHUwNDM2XFx1MDQzNFxcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVRdWl6ICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiA4IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiXFx1MDQxQ1xcdTA0MzhcXHUwNDNEXFx1MDQzOFxcdTA0M0NcXHUwNDMwXFx1MDQzQlxcdTA0NENcXHUwNDNEXFx1MDQ0QlxcdTA0MzkgXFx1MDQzMVxcdTA0MzBcXHUwNDNCXFx1MDQzQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwibnVtYmVyXCIsIHZhbHVlOiBtaW5TY29yZSwgb25DaGFuZ2U6IGUgPT4gc2V0TWluU2NvcmUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSksIG5hbWU6IFwibWluX3F1aXpfc2NvcmVcIiwgbWluOiAwLCBtYXg6IDEwMCwgc3R5bGU6IHsgLi4uZnVsbElucHV0U3R5bGUsIHdpZHRoOiAxMjAgfSB9KSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMubXV0ZWQsIG1hcmdpbjogJzAgMCAxMnB4JyB9IH0sXG4gICAgICAgICAgICAgICAgXCJcXHUwNDIwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRCIFxcdTA0MzggXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzhcIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMiwgY29sb3I6IEMuZ2hvc3QsIGZvbnRXZWlnaHQ6IDQwMCwgbWFyZ2luTGVmdDogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiKFwiLFxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIFwiIFxcdTA0NDBcXHUwNDMwXFx1MDQzN1xcdTA0MzQuLCBcIixcbiAgICAgICAgICAgICAgICAgICAgdG90YWxMZXNzb25zLFxuICAgICAgICAgICAgICAgICAgICBcIiBcXHUwNDQzXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXFx1MDQzRVxcdTA0MzIpXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwic2VjdGlvbnNfanNvblwiLCB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoc2VjdGlvbnMpIH0pLFxuICAgICAgICAgICAgc2VjdGlvbnMubWFwKChzZWN0aW9uLCBpKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTZWN0aW9uQmxvY2ssIHsga2V5OiBpLCBzZWN0aW9uOiBzZWN0aW9uLCBpbmRleDogaSwgb25DaGFuZ2U6IHMgPT4gdXBkYXRlU2VjdGlvbihpLCBzKSwgb25SZW1vdmU6ICgpID0+IHJlbW92ZVNlY3Rpb24oaSkgfSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogOCwgbWFyZ2luQm90dG9tOiAyNCB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IGFkZFNlY3Rpb24sIHN0eWxlOiBhZGRTZWN0aW9uQnRuU3R5bGUgfSwgXCIrIFxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0NDBcXHUwNDMwXFx1MDQzN1xcdTA0MzRcXHUwNDM1XFx1MDQzQlwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6IHN1Ym1pdHRpbmcsIHN0eWxlOiBzdWJtaXRCdG5TdHlsZSB9LCBzdWJtaXR0aW5nID8gJ9Ch0L7Qt9C00LDQvdC40LXigKYnIDogJ9Ch0L7Qt9C00LDRgtGMINC60YPRgNGBJykpKSk7XG59XG5jb25zdCBsYWJlbFN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBjb2xvcjogQy5mYWludCxcbiAgICBtYXJnaW5Cb3R0b206IDQsXG59O1xuY29uc3QgZnVsbElucHV0U3R5bGUgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiAnOXB4IDEycHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogQy53aGl0ZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxufTtcbmNvbnN0IGFkZFNlY3Rpb25CdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IEMuY3lhbixcbiAgICBib3JkZXI6IGAxcHggZGFzaGVkICR7Qy5jeWFufWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG5jb25zdCBzdWJtaXRCdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnMTJweCAzMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBmb250U2l6ZTogMTUsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdJbnB1dDogJyMwZjE3MmEnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgY3lhbjogJyMwNmI2ZDQnLFxuICAgIGJsdWU6ICcjM2I4MmY2JyxcbiAgICBlcnJvcjogJyNlZjQ0NDQnLFxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgbXV0ZWQ6ICcjY2JkNWUxJyxcbiAgICBmYWludDogJyM5NGEzYjgnLFxuICAgIGdob3N0OiAnIzY0NzQ4YicsXG59O1xuY29uc3QgQ09OVEVOVF9UWVBFUyA9IFtcbiAgICB7IHZhbHVlOiAndGV4dCcsIGxhYmVsOiAn0KLQtdC60YHRgicgfSxcbiAgICB7IHZhbHVlOiAndmlkZW8nLCBsYWJlbDogJ9CS0LjQtNC10L4nIH0sXG4gICAgeyB2YWx1ZTogJ3F1aXonLCBsYWJlbDogJ9Ci0LXRgdGCJyB9LFxuXTtcbmNvbnN0IFFVRVNUSU9OX1RZUEVTID0gW1xuICAgIHsgdmFsdWU6ICdzaW5nbGUnLCBsYWJlbDogJ9Ce0LTQuNC9INCy0LDRgNC40LDQvdGCJyB9LFxuICAgIHsgdmFsdWU6ICdtdWx0aXBsZScsIGxhYmVsOiAn0J3QtdGB0LrQvtC70YzQutC+INCy0LDRgNC40LDQvdGC0L7QsicgfSxcbiAgICB7IHZhbHVlOiAndGV4dCcsIGxhYmVsOiAn0KLQtdC60YHRgtC+0LLRi9C5INC+0YLQstC10YInIH0sXG5dO1xuY29uc3QgQ0FURUdPUklFUyA9IFtcbiAgICB7IHZhbHVlOiAnZnJvbnRlbmQnLCBsYWJlbDogJ0Zyb250ZW5kJyB9LFxuICAgIHsgdmFsdWU6ICdiYWNrZW5kJywgbGFiZWw6ICdCYWNrZW5kJyB9LFxuICAgIHsgdmFsdWU6ICdkZXZvcHMnLCBsYWJlbDogJ0Rldk9wcycgfSxcbiAgICB7IHZhbHVlOiAnbW9iaWxlJywgbGFiZWw6ICdNb2JpbGUnIH0sXG4gICAgeyB2YWx1ZTogJ2Rlc2lnbicsIGxhYmVsOiAnRGVzaWduJyB9LFxuICAgIHsgdmFsdWU6ICdvdGhlcicsIGxhYmVsOiAn0JTRgNGD0LPQvtC1JyB9LFxuXTtcbmNvbnN0IGlucHV0U3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzhweCAxMHB4JyxcbiAgICBiYWNrZ3JvdW5kOiBDLmJnSW5wdXQsXG4gICAgY29sb3I6IEMud2hpdGUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94Jyxcbn07XG5jb25zdCBzZWxlY3RTdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnOHB4IDEwcHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogQy53aGl0ZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTMsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbmNvbnN0IGJ0bkRhbmdlciA9IHtcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgY29sb3I6IEMuZXJyb3IsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHBhZGRpbmc6ICc0cHggOHB4JyxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG59O1xuY29uc3QgYnRuQWRkID0ge1xuICAgIHBhZGRpbmc6ICc2cHggMTJweCcsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogQy5ncmVlbixcbiAgICBib3JkZXI6IGAxcHggZGFzaGVkICR7Qy5ncmVlbn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTIsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgbWFyZ2luVG9wOiA0LFxufTtcbmZ1bmN0aW9uIEFuc3dlclJvdyh7IGFuc3dlciwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDQgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxMlxcdTA0MzBcXHUwNDQwXFx1MDQzOFxcdTA0MzBcXHUwNDNEXFx1MDQ0MiBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0MzBcIiwgdmFsdWU6IGFuc3dlci5hbnN3ZXJfdGV4dCwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5hbnN3ZXIsIGFuc3dlcl90ZXh0OiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgZmxleDogMSB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLmZhaW50LCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDQsIGN1cnNvcjogJ3BvaW50ZXInLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNoZWNrZWQ6IGFuc3dlci5pc19jb3JyZWN0LCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmFuc3dlciwgaXNfY29ycmVjdDogZS50YXJnZXQuY2hlY2tlZCB9KSwgc3R5bGU6IHsgYWNjZW50Q29sb3I6IEMuZ3JlZW4gfSB9KSxcbiAgICAgICAgICAgIFwiXFx1MDQzMlxcdTA0MzVcXHUwNDQwXFx1MDQzRFxcdTA0M0VcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBvblJlbW92ZSwgc3R5bGU6IGJ0bkRhbmdlciB9LCBcIlxcdTI3MTVcIikpKTtcbn1cbmZ1bmN0aW9uIFF1ZXN0aW9uQmxvY2soeyBxdWVzdGlvbiwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgY29uc3QgYWRkQW5zd2VyID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBhbnN3ZXJzOiBbLi4ucXVlc3Rpb24uYW5zd2VycywgeyBhbnN3ZXJfdGV4dDogJycsIGlzX2NvcnJlY3Q6IGZhbHNlIH1dIH0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlQW5zd2VyID0gKGksIGEpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IFsuLi5xdWVzdGlvbi5hbnN3ZXJzXTtcbiAgICAgICAgbmV4dFtpXSA9IGE7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlc3Rpb24sIGFuc3dlcnM6IG5leHQgfSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVBbnN3ZXIgPSAoaSkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBhbnN3ZXJzOiBxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGkpIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAxMCwgcGFkZGluZzogMTIsIGJhY2tncm91bmQ6ICcjMGExNjI4JywgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgYm9yZGVyUmFkaXVzOiA2IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA4IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDIyXFx1MDQzNVxcdTA0M0FcXHUwNDQxXFx1MDQ0MiBcXHUwNDMyXFx1MDQzRVxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDMwXCIsIHZhbHVlOiBxdWVzdGlvbi5xdWVzdGlvbl90ZXh0LCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBxdWVzdGlvbl90ZXh0OiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgZmxleDogMSB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IHZhbHVlOiBxdWVzdGlvbi5xdWVzdGlvbl90eXBlLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBxdWVzdGlvbl90eXBlOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHNlbGVjdFN0eWxlIH0sIFFVRVNUSU9OX1RZUEVTLm1hcChxdCA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogcXQudmFsdWUsIHZhbHVlOiBxdC52YWx1ZSB9LCBxdC5sYWJlbCkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSxcbiAgICAgICAgcXVlc3Rpb24ucXVlc3Rpb25fdHlwZSAhPT0gJ3RleHQnICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgcXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFucywgYWkpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEFuc3dlclJvdywgeyBrZXk6IGFpLCBhbnN3ZXI6IGFucywgb25DaGFuZ2U6IGEgPT4gdXBkYXRlQW5zd2VyKGFpLCBhKSwgb25SZW1vdmU6ICgpID0+IHJlbW92ZUFuc3dlcihhaSkgfSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBhZGRBbnN3ZXIsIHN0eWxlOiBidG5BZGQgfSwgXCIrIFxcdTA0MTJcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcXHUwNDMwXFx1MDQzRFxcdTA0NDIgXFx1MDQzRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDMwXCIpKSkpKTtcbn1cbmZ1bmN0aW9uIExlc3NvblJvdyh7IGxlc3Nvbiwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgY29uc3QgYWRkUXVlc3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgIC4uLmxlc3NvbixcbiAgICAgICAgICAgIHF1ZXN0aW9uczogWy4uLihsZXNzb24ucXVlc3Rpb25zIHx8IFtdKSwgeyBxdWVzdGlvbl90ZXh0OiAnJywgcXVlc3Rpb25fdHlwZTogJ3NpbmdsZScsIGFuc3dlcnM6IFt7IGFuc3dlcl90ZXh0OiAnJywgaXNfY29ycmVjdDogZmFsc2UgfV0gfV0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlUXVlc3Rpb24gPSAoaSwgcSkgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gWy4uLihsZXNzb24ucXVlc3Rpb25zIHx8IFtdKV07XG4gICAgICAgIG5leHRbaV0gPSBxO1xuICAgICAgICBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgcXVlc3Rpb25zOiBuZXh0IH0pO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUXVlc3Rpb24gPSAoaSkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgcXVlc3Rpb25zOiAobGVzc29uLnF1ZXN0aW9ucyB8fCBbXSkuZmlsdGVyKChfLCBpZHgpID0+IGlkeCAhPT0gaSkgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpc1F1aXogPSBsZXNzb24uY29udGVudF90eXBlID09PSAncXVpeic7XG4gICAgY29uc3QgaXNWaWRlbyA9IGxlc3Nvbi5jb250ZW50X3R5cGUgPT09ICd2aWRlbyc7XG4gICAgY29uc3QgaXNUZXh0ID0gbGVzc29uLmNvbnRlbnRfdHlwZSA9PT0gJ3RleHQnO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogOCwgcGFkZGluZzogJzEwcHggMTJweCcsIGJhY2tncm91bmQ6IEMuYmdDYXJkLCBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCBib3JkZXJSYWRpdXM6IDYgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDYgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MURcXHUwNDMwXFx1MDQzN1xcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDMwXCIsIHZhbHVlOiBsZXNzb24udGl0bGUsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ubGVzc29uLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogbGVzc29uLmNvbnRlbnRfdHlwZSwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5sZXNzb24sIGNvbnRlbnRfdHlwZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiBzZWxlY3RTdHlsZSB9LCBDT05URU5UX1RZUEVTLm1hcChjdCA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogY3QudmFsdWUsIHZhbHVlOiBjdC52YWx1ZSB9LCBjdC5sYWJlbCkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSxcbiAgICAgICAgaXNWaWRlbyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MjFcXHUwNDQxXFx1MDQ0QlxcdTA0M0JcXHUwNDNBXFx1MDQzMCBcXHUwNDNEXFx1MDQzMCBcXHUwNDMyXFx1MDQzOFxcdTA0MzRcXHUwNDM1XFx1MDQzRSAoWW91VHViZS9WaW1lb1xcdTIwMjYpXCIsIHZhbHVlOiBsZXNzb24udmlkZW9fdXJsIHx8ICcnLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgdmlkZW9fdXJsOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgd2lkdGg6ICcxMDAlJyB9IH0pKSxcbiAgICAgICAgaXNUZXh0ICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgeyBwbGFjZWhvbGRlcjogXCJcXHUwNDIyXFx1MDQzNVxcdTA0M0FcXHUwNDQxXFx1MDQ0MlxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0MzUgXFx1MDQ0MVxcdTA0M0VcXHUwNDM0XFx1MDQzNVxcdTA0NDBcXHUwNDM2XFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQzXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXFx1MDQzMFwiLCB2YWx1ZTogbGVzc29uLnRleHRfY29udGVudCB8fCAnJywgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5sZXNzb24sIHRleHRfY29udGVudDogZS50YXJnZXQudmFsdWUgfSksIHJvd3M6IDMsIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIHdpZHRoOiAnMTAwJScsIHJlc2l6ZTogJ3ZlcnRpY2FsJyB9IH0pKSxcbiAgICAgICAgaXNRdWl6ICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiA4IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzMFwiLCB2YWx1ZTogbGVzc29uLnF1aXpfdGl0bGUgfHwgJycsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ubGVzc29uLCBxdWl6X3RpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiA4IH0gfSksXG4gICAgICAgICAgICAobGVzc29uLnF1ZXN0aW9ucyB8fCBbXSkubWFwKChxLCBxaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25CbG9jaywgeyBrZXk6IHFpLCBxdWVzdGlvbjogcSwgb25DaGFuZ2U6IGEgPT4gdXBkYXRlUXVlc3Rpb24ocWksIGEpLCBvblJlbW92ZTogKCkgPT4gcmVtb3ZlUXVlc3Rpb24ocWkpIH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogYWRkUXVlc3Rpb24sIHN0eWxlOiBidG5BZGQgfSwgXCIrIFxcdTA0MTJcXHUwNDNFXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQ0MVwiKSkpKSk7XG59XG5mdW5jdGlvbiBTZWN0aW9uQmxvY2soeyBzZWN0aW9uLCBpbmRleCwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgY29uc3QgYWRkTGVzc29uID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnNlY3Rpb24sIGxlc3NvbnM6IFsuLi5zZWN0aW9uLmxlc3NvbnMsIHsgdGl0bGU6ICcnLCBjb250ZW50X3R5cGU6ICd0ZXh0JyB9XSB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZUxlc3NvbiA9IChsaSwgbGVzc29uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4uc2VjdGlvbi5sZXNzb25zXTtcbiAgICAgICAgbmV4dFtsaV0gPSBsZXNzb247XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4uc2VjdGlvbiwgbGVzc29uczogbmV4dCB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZUxlc3NvbiA9IChsaSkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnNlY3Rpb24sIGxlc3NvbnM6IHNlY3Rpb24ubGVzc29ucy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGxpKSB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTYsIHBhZGRpbmc6IDE2LCBiYWNrZ3JvdW5kOiBDLmJnQ2FyZCwgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgYm9yZGVyUmFkaXVzOiA4IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgbWFyZ2luQm90dG9tOiAxMiB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogQy5jeWFuIH0gfSxcbiAgICAgICAgICAgICAgICBcIlxcdTA0MjBcXHUwNDMwXFx1MDQzN1xcdTA0MzRcXHUwNDM1XFx1MDQzQiBcIixcbiAgICAgICAgICAgICAgICBpbmRleCArIDEpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MURcXHUwNDMwXFx1MDQzN1xcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDBcXHUwNDMwXFx1MDQzN1xcdTA0MzRcXHUwNDM1XFx1MDQzQlxcdTA0MzBcIiwgdmFsdWU6IHNlY3Rpb24udGl0bGUsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4uc2VjdGlvbiwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCBmbGV4OiAxIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSxcbiAgICAgICAgc2VjdGlvbi5sZXNzb25zLm1hcCgobGVzc29uLCBsaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGVzc29uUm93LCB7IGtleTogbGksIGxlc3NvbjogbGVzc29uLCBvbkNoYW5nZTogbCA9PiB1cGRhdGVMZXNzb24obGksIGwpLCBvblJlbW92ZTogKCkgPT4gcmVtb3ZlTGVzc29uKGxpKSB9KSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogYWRkTGVzc29uLCBzdHlsZTogYnRuQWRkIH0sIFwiKyBcXHUwNDIzXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXCIpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VFZGl0KHByb3BzKSB7XG4gICAgY29uc3QgcmVjb3JkID0gcHJvcHMucmVjb3JkPy5wYXJhbXMgfHwge307XG4gICAgY29uc3QgY291cnNlSWQgPSByZWNvcmQuaWQ7XG4gICAgY29uc3QgaW5pdGlhbFNlY3Rpb25zID0gKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmQuY291cnNlX2RhdGFfanNvbiA/IEpTT04ucGFyc2UocmVjb3JkLmNvdXJzZV9kYXRhX2pzb24pIDogW107XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKHJlY29yZC50aXRsZSB8fCAnJyk7XG4gICAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZShyZWNvcmQuZGVzY3JpcHRpb24gfHwgJycpO1xuICAgIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUocmVjb3JkLmNhdGVnb3J5IHx8ICdmcm9udGVuZCcpO1xuICAgIGNvbnN0IFtyZXF1aXJlUXVpeiwgc2V0UmVxdWlyZVF1aXpdID0gdXNlU3RhdGUocmVjb3JkLnJlcXVpcmVfcXVpel9jb21wbGV0aW9uID09PSB0cnVlIHx8IHJlY29yZC5yZXF1aXJlX3F1aXpfY29tcGxldGlvbiA9PT0gJ3RydWUnKTtcbiAgICBjb25zdCBbbWluU2NvcmUsIHNldE1pblNjb3JlXSA9IHVzZVN0YXRlKE51bWJlcihyZWNvcmQubWluX3F1aXpfc2NvcmUgPz8gNjUpKTtcbiAgICBjb25zdCBbc2VjdGlvbnMsIHNldFNlY3Rpb25zXSA9IHVzZVN0YXRlKGluaXRpYWxTZWN0aW9ucyk7XG4gICAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFwaVVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvcmVzb3VyY2VzXFwvLywgJy9hcGkvcmVzb3VyY2VzLycpO1xuICAgIGNvbnN0IGFkZFNlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFNlY3Rpb25zKFsuLi5zZWN0aW9ucywgeyB0aXRsZTogJycsIGxlc3NvbnM6IFt7IHRpdGxlOiAnJywgY29udGVudF90eXBlOiAndGV4dCcgfV0gfV0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlU2VjdGlvbiA9IChpLCBzZWN0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4uc2VjdGlvbnNdO1xuICAgICAgICBuZXh0W2ldID0gc2VjdGlvbjtcbiAgICAgICAgc2V0U2VjdGlvbnMobmV4dCk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVTZWN0aW9uID0gKGkpID0+IHtcbiAgICAgICAgc2V0U2VjdGlvbnMoc2VjdGlvbnMuZmlsdGVyKChfLCBpZHgpID0+IGlkeCAhPT0gaSkpO1xuICAgIH07XG4gICAgY29uc3QgdG90YWxMZXNzb25zID0gc2VjdGlvbnMucmVkdWNlKChzLCBzZWMpID0+IHMgKyBzZWMubGVzc29ucy5sZW5ndGgsIDApO1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZkLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEucmVkaXJlY3RVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm5vdGljZT8ubWVzc2FnZSB8fCAn0J7RiNC40LHQutCwINC/0YDQuCDRgdC+0YXRgNCw0L3QtdC90LjQuCDQutGD0YDRgdCwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgYWxlcnQoYNCe0YjQuNCx0LrQsDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBwYWRkaW5nOiAyNCwgbWluSGVpZ2h0OiAnMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdQYWdlLCBjb2xvcjogQy53aGl0ZSwgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBtZXRob2Q6IFwiUE9TVFwiLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCBzdHlsZTogeyBtYXhXaWR0aDogODAwLCBtYXJnaW46ICcwIGF1dG8nIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCA0cHgnLCBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sIFwiXFx1MDQyMFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQzQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0MzBcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCAyNHB4JywgZm9udFNpemU6IDEzLCBjb2xvcjogQy5naG9zdCB9IH0sXG4gICAgICAgICAgICAgICAgXCJJRDogXCIsXG4gICAgICAgICAgICAgICAgY291cnNlSWQsXG4gICAgICAgICAgICAgICAgXCIgXFx1MjAxNCBcXHUwNDQwXFx1MDQzNVxcdTA0MzRcXHUwNDMwXFx1MDQzQVxcdTA0NDJcXHUwNDM4XFx1MDQ0MFxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDNFXFx1MDQzMiwgXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0M0VcXHUwNDMyIFxcdTA0MzggXFx1MDQ0MlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0M0VcXHUwNDMyXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdncmlkJywgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzFmciAxZnInLCBnYXA6IDE2LCBtYXJnaW5Cb3R0b206IDI0IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZ3JpZENvbHVtbjogJzEgLyAtMScgfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MURcXHUwNDMwXFx1MDQzN1xcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDMwICpcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHZhbHVlOiB0aXRsZSwgb25DaGFuZ2U6IGUgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpLCBuYW1lOiBcInRpdGxlXCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MURcXHUwNDMwXFx1MDQzRlxcdTA0NDBcXHUwNDM4XFx1MDQzQ1xcdTA0MzVcXHUwNDQwOiBKYXZhU2NyaXB0IFxcdTA0NDEgXFx1MDQzRFxcdTA0NDNcXHUwNDNCXFx1MDQ0RlwiLCBzdHlsZTogZnVsbElucHV0U3R5bGUsIHJlcXVpcmVkOiB0cnVlIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZ3JpZENvbHVtbjogJzEgLyAtMScgfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MUVcXHUwNDNGXFx1MDQzOFxcdTA0NDFcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1XCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgeyB2YWx1ZTogZGVzY3JpcHRpb24sIG9uQ2hhbmdlOiBlID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJkZXNjcmlwdGlvblwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFBXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzQVxcdTA0M0VcXHUwNDM1IFxcdTA0M0VcXHUwNDNGXFx1MDQzOFxcdTA0NDFcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDMwIFxcdTIwMTQgXFx1MDQ0N1xcdTA0MzVcXHUwNDNDXFx1MDQ0MyBcXHUwNDNEXFx1MDQzMFxcdTA0NDNcXHUwNDQ3XFx1MDQzOFxcdTA0NDJcXHUwNDQxXFx1MDQ0RiBcXHUwNDQxXFx1MDQ0MlxcdTA0NDNcXHUwNDM0XFx1MDQzNVxcdTA0M0RcXHUwNDQyXCIsIHJvd3M6IDMsIHN0eWxlOiB7IC4uLmZ1bGxJbnB1dFN0eWxlLCByZXNpemU6ICd2ZXJ0aWNhbCcgfSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MUFcXHUwNDMwXFx1MDQ0MlxcdTA0MzVcXHUwNDMzXFx1MDQzRVxcdTA0NDBcXHUwNDM4XFx1MDQ0RlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IHZhbHVlOiBjYXRlZ29yeSwgb25DaGFuZ2U6IGUgPT4gc2V0Q2F0ZWdvcnkoZS50YXJnZXQudmFsdWUpLCBuYW1lOiBcImNhdGVnb3J5XCIsIHN0eWxlOiBmdWxsSW5wdXRTdHlsZSB9LCBDQVRFR09SSUVTLm1hcChjID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsga2V5OiBjLnZhbHVlLCB2YWx1ZTogYy52YWx1ZSB9LCBjLmxhYmVsKSkpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IHsgLi4ubGFiZWxTdHlsZSwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA4LCBjdXJzb3I6ICdwb2ludGVyJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNoZWNrZWQ6IHJlcXVpcmVRdWl6LCBvbkNoYW5nZTogZSA9PiBzZXRSZXF1aXJlUXVpeihlLnRhcmdldC5jaGVja2VkKSwgbmFtZTogXCJyZXF1aXJlX3F1aXpfY29tcGxldGlvblwiLCBzdHlsZTogeyBhY2NlbnRDb2xvcjogQy5ncmVlbiB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDIyXFx1MDQ0MFxcdTA0MzVcXHUwNDMxXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0NEMgXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQ0NVxcdTA0M0VcXHUwNDM2XFx1MDQzNFxcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcIiksXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVRdWl6ICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiA4IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiXFx1MDQxQ1xcdTA0MzhcXHUwNDNEXFx1MDQzOFxcdTA0M0NcXHUwNDMwXFx1MDQzQlxcdTA0NENcXHUwNDNEXFx1MDQ0QlxcdTA0MzkgXFx1MDQzMVxcdTA0MzBcXHUwNDNCXFx1MDQzQlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwibnVtYmVyXCIsIHZhbHVlOiBtaW5TY29yZSwgb25DaGFuZ2U6IGUgPT4gc2V0TWluU2NvcmUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSksIG5hbWU6IFwibWluX3F1aXpfc2NvcmVcIiwgbWluOiAwLCBtYXg6IDEwMCwgc3R5bGU6IHsgLi4uZnVsbElucHV0U3R5bGUsIHdpZHRoOiAxMjAgfSB9KSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMubXV0ZWQsIG1hcmdpbjogJzAgMCAxMnB4JyB9IH0sXG4gICAgICAgICAgICAgICAgXCJcXHUwNDIwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDRCIFxcdTA0MzggXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzhcIixcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMiwgY29sb3I6IEMuZ2hvc3QsIGZvbnRXZWlnaHQ6IDQwMCwgbWFyZ2luTGVmdDogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiKFwiLFxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIFwiIFxcdTA0NDBcXHUwNDMwXFx1MDQzN1xcdTA0MzQuLCBcIixcbiAgICAgICAgICAgICAgICAgICAgdG90YWxMZXNzb25zLFxuICAgICAgICAgICAgICAgICAgICBcIiBcXHUwNDQzXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXFx1MDQzRVxcdTA0MzIpXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwic2VjdGlvbnNfanNvblwiLCB2YWx1ZTogSlNPTi5zdHJpbmdpZnkoc2VjdGlvbnMpIH0pLFxuICAgICAgICAgICAgc2VjdGlvbnMubWFwKChzZWN0aW9uLCBpKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTZWN0aW9uQmxvY2ssIHsga2V5OiBpLCBzZWN0aW9uOiBzZWN0aW9uLCBpbmRleDogaSwgb25DaGFuZ2U6IHMgPT4gdXBkYXRlU2VjdGlvbihpLCBzKSwgb25SZW1vdmU6ICgpID0+IHJlbW92ZVNlY3Rpb24oaSkgfSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogOCwgbWFyZ2luQm90dG9tOiAyNCB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IGFkZFNlY3Rpb24sIHN0eWxlOiBhZGRTZWN0aW9uQnRuU3R5bGUgfSwgXCIrIFxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0NDBcXHUwNDMwXFx1MDQzN1xcdTA0MzRcXHUwNDM1XFx1MDQzQlwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6IHN1Ym1pdHRpbmcsIHN0eWxlOiBzdWJtaXRCdG5TdHlsZSB9LCBzdWJtaXR0aW5nID8gJ9Ch0L7RhdGA0LDQvdC10L3QuNC14oCmJyA6ICfQodC+0YXRgNCw0L3QuNGC0Ywg0LrRg9GA0YEnKSkpKTtcbn1cbmNvbnN0IGxhYmVsU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogMTIsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGNvbG9yOiBDLmZhaW50LFxuICAgIG1hcmdpbkJvdHRvbTogNCxcbn07XG5jb25zdCBmdWxsSW5wdXRTdHlsZSA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6ICc5cHggMTJweCcsXG4gICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgIGNvbG9yOiBDLndoaXRlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG59O1xuY29uc3QgYWRkU2VjdGlvbkJ0blN0eWxlID0ge1xuICAgIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogQy5jeWFuLFxuICAgIGJvcmRlcjogYDFweCBkYXNoZWQgJHtDLmN5YW59YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbmNvbnN0IHN1Ym1pdEJ0blN0eWxlID0ge1xuICAgIHBhZGRpbmc6ICcxMnB4IDMycHgnLFxuICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuZ3JlZW59LCAke0MuZ3JlZW5EYXJrfSlgLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIGZvbnRTaXplOiAxNSxcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgQyA9IHtcbiAgICBiZ1BhZ2U6ICcjMDIwNjE3JyxcbiAgICBiZ0NhcmQ6ICcjMWUyOTNiJyxcbiAgICBiZ0lucHV0OiAnIzBmMTcyYScsXG4gICAgYm9yZGVyOiAnIzMzNDE1NScsXG4gICAgZ3JlZW46ICcjMTBiOTgxJyxcbiAgICBncmVlbkRhcms6ICcjMDU5NjY5JyxcbiAgICBjeWFuOiAnIzA2YjZkNCcsXG4gICAgYmx1ZTogJyMzYjgyZjYnLFxuICAgIGVycm9yOiAnI2VmNDQ0NCcsXG4gICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgICBtdXRlZDogJyNjYmQ1ZTEnLFxuICAgIGZhaW50OiAnIzk0YTNiOCcsXG4gICAgZ2hvc3Q6ICcjNjQ3NDhiJyxcbn07XG5jb25zdCBRVUVTVElPTl9UWVBFUyA9IFtcbiAgICB7IHZhbHVlOiAnc2luZ2xlJywgbGFiZWw6ICfQntC00LjQvSDQstCw0YDQuNCw0L3RgicgfSxcbiAgICB7IHZhbHVlOiAnbXVsdGlwbGUnLCBsYWJlbDogJ9Cd0LXRgdC60L7Qu9GM0LrQviDQstCw0YDQuNCw0L3RgtC+0LInIH0sXG4gICAgeyB2YWx1ZTogJ3RleHQnLCBsYWJlbDogJ9Ci0LXQutGB0YLQvtCy0YvQuSDQvtGC0LLQtdGCJyB9LFxuXTtcbmNvbnN0IGlucHV0U3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzhweCAxMHB4JyxcbiAgICBiYWNrZ3JvdW5kOiBDLmJnSW5wdXQsXG4gICAgY29sb3I6IEMud2hpdGUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94Jyxcbn07XG5jb25zdCBzZWxlY3RTdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnOHB4IDEwcHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogQy53aGl0ZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTMsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbmNvbnN0IGJ0bkRhbmdlciA9IHtcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgY29sb3I6IEMuZXJyb3IsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHBhZGRpbmc6ICc0cHggOHB4JyxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG59O1xuY29uc3QgYnRuQWRkID0ge1xuICAgIHBhZGRpbmc6ICc2cHggMTJweCcsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogQy5ncmVlbixcbiAgICBib3JkZXI6IGAxcHggZGFzaGVkICR7Qy5ncmVlbn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTIsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgbWFyZ2luVG9wOiA0LFxufTtcbmZ1bmN0aW9uIEFuc3dlclJvdyh7IGFuc3dlciwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDQgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxMlxcdTA0MzBcXHUwNDQwXFx1MDQzOFxcdTA0MzBcXHUwNDNEXFx1MDQ0MiBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0MzBcIiwgdmFsdWU6IGFuc3dlci5hbnN3ZXJfdGV4dCwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5hbnN3ZXIsIGFuc3dlcl90ZXh0OiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgZmxleDogMSB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLmZhaW50LCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDQsIGN1cnNvcjogJ3BvaW50ZXInLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNoZWNrZWQ6IGFuc3dlci5pc19jb3JyZWN0LCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmFuc3dlciwgaXNfY29ycmVjdDogZS50YXJnZXQuY2hlY2tlZCB9KSwgc3R5bGU6IHsgYWNjZW50Q29sb3I6IEMuZ3JlZW4gfSB9KSxcbiAgICAgICAgICAgIFwiXFx1MDQzMlxcdTA0MzVcXHUwNDQwXFx1MDQzRFxcdTA0M0VcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBvblJlbW92ZSwgc3R5bGU6IGJ0bkRhbmdlciB9LCBcIlxcdTI3MTVcIikpKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFF1aXpDcmVhdGUocHJvcHMpIHtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtcbiAgICAgICAgeyBxdWVzdGlvbl90ZXh0OiAnJywgcXVlc3Rpb25fdHlwZTogJ3NpbmdsZScsIGFuc3dlcnM6IFt7IGFuc3dlcl90ZXh0OiAnJywgaXNfY29ycmVjdDogZmFsc2UgfV0gfSxcbiAgICBdKTtcbiAgICBjb25zdCBhcGlVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcL3Jlc291cmNlc1xcLy8sICcvYXBpL3Jlc291cmNlcy8nKTtcbiAgICBjb25zdCBhZGRRdWVzdGlvbiA9ICgpID0+IHtcbiAgICAgICAgc2V0UXVlc3Rpb25zKFsuLi5xdWVzdGlvbnMsIHsgcXVlc3Rpb25fdGV4dDogJycsIHF1ZXN0aW9uX3R5cGU6ICdzaW5nbGUnLCBhbnN3ZXJzOiBbeyBhbnN3ZXJfdGV4dDogJycsIGlzX2NvcnJlY3Q6IGZhbHNlIH1dIH1dKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVF1ZXN0aW9uID0gKGksIHEpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IFsuLi5xdWVzdGlvbnNdO1xuICAgICAgICBuZXh0W2ldID0gcTtcbiAgICAgICAgc2V0UXVlc3Rpb25zKG5leHQpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUXVlc3Rpb24gPSAoaSkgPT4ge1xuICAgICAgICBzZXRRdWVzdGlvbnMocXVlc3Rpb25zLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGkpKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZkLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEucmVkaXJlY3RVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm5vdGljZT8ubWVzc2FnZSB8fCAn0J7RiNC40LHQutCwINC/0YDQuCDRgdC+0LfQtNCw0L3QuNC4INGC0LXRgdGC0LAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBhbGVydChg0J7RiNC40LHQutCwOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IHBhZGRpbmc6IDI0LCBtaW5IZWlnaHQ6ICcxMDB2aCcsIGJhY2tncm91bmRDb2xvcjogQy5iZ1BhZ2UsIGNvbG9yOiBDLndoaXRlLCBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IG1ldGhvZDogXCJQT1NUXCIsIG9uU3VibWl0OiBoYW5kbGVTdWJtaXQsIHN0eWxlOiB7IG1heFdpZHRoOiA2NDAsIG1hcmdpbjogJzAgYXV0bycgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDRweCcsIGZvbnRTaXplOiAyMiwgZm9udFdlaWdodDogNzAwIH0gfSwgXCJcXHUwNDIxXFx1MDQzRVxcdTA0MzdcXHUwNDM0XFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzMFwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDI0cHgnLCBmb250U2l6ZTogMTMsIGNvbG9yOiBDLmdob3N0IH0gfSwgXCJcXHUwNDIyXFx1MDQzNVxcdTA0NDFcXHUwNDQyIFxcdTA0NDEgXFx1MDQzMlxcdTA0M0VcXHUwNDNGXFx1MDQ0MFxcdTA0M0VcXHUwNDQxXFx1MDQzMFxcdTA0M0NcXHUwNDM4IFxcdTA0MzggXFx1MDQzRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDMwXFx1MDQzQ1xcdTA0MzggXFx1MDQzN1xcdTA0MzAgXFx1MDQzRVxcdTA0MzRcXHUwNDM4XFx1MDQzRCBcXHUwNDQ4XFx1MDQzMFxcdTA0MzNcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAxNiB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzMCAqXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHZhbHVlOiB0aXRsZSwgb25DaGFuZ2U6IGUgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpLCBuYW1lOiBcInRpdGxlXCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MURcXHUwNDMwXFx1MDQzRlxcdTA0NDBcXHUwNDM4XFx1MDQzQ1xcdTA0MzVcXHUwNDQwOiBcXHUwNDEyXFx1MDQ0NVxcdTA0M0VcXHUwNDM0XFx1MDQzRFxcdTA0M0VcXHUwNDM5IFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDIgXFx1MDQzRlxcdTA0M0UgSmF2YVNjcmlwdFwiLCBzdHlsZTogZnVsbElucHV0U3R5bGUsIHJlcXVpcmVkOiB0cnVlIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwicXVlc3Rpb25zX2pzb25cIiwgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHF1ZXN0aW9ucykgfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMubXV0ZWQsIG1hcmdpbjogJzAgMCAxMnB4JyB9IH0sXG4gICAgICAgICAgICAgICAgXCJcXHUwNDEyXFx1MDQzRVxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDRCXCIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLmdob3N0LCBmb250V2VpZ2h0OiA0MDAsIG1hcmdpbkxlZnQ6IDggfSB9LFxuICAgICAgICAgICAgICAgICAgICBcIihcIixcbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgXCIpXCIpKSxcbiAgICAgICAgICAgIHF1ZXN0aW9ucy5tYXAoKHEsIHFpKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGtleTogcWksIHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTIsIHBhZGRpbmc6IDEyLCBiYWNrZ3JvdW5kOiBDLmJnQ2FyZCwgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgYm9yZGVyUmFkaXVzOiA2IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDggfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQyMlxcdTA0MzVcXHUwNDNBXFx1MDQ0MVxcdTA0NDIgXFx1MDQzMlxcdTA0M0VcXHUwNDNGXFx1MDQ0MFxcdTA0M0VcXHUwNDQxXFx1MDQzMFwiLCB2YWx1ZTogcS5xdWVzdGlvbl90ZXh0LCBvbkNoYW5nZTogZSA9PiB1cGRhdGVRdWVzdGlvbihxaSwgeyAuLi5xLCBxdWVzdGlvbl90ZXh0OiBlLnRhcmdldC52YWx1ZSB9KSwgbmFtZTogYHF1ZXN0aW9uXyR7cWl9YCwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgZmxleDogMSB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgdmFsdWU6IHEucXVlc3Rpb25fdHlwZSwgb25DaGFuZ2U6IGUgPT4gdXBkYXRlUXVlc3Rpb24ocWksIHsgLi4ucSwgcXVlc3Rpb25fdHlwZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiBzZWxlY3RTdHlsZSB9LCBRVUVTVElPTl9UWVBFUy5tYXAocXQgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyBrZXk6IHF0LnZhbHVlLCB2YWx1ZTogcXQudmFsdWUgfSwgcXQubGFiZWwpKSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogKCkgPT4gcmVtb3ZlUXVlc3Rpb24ocWkpLCBzdHlsZTogYnRuRGFuZ2VyIH0sIFwiXFx1MjcxNVwiKSksXG4gICAgICAgICAgICAgICAgcS5xdWVzdGlvbl90eXBlICE9PSAndGV4dCcgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIHEuYW5zd2Vycy5tYXAoKGEsIGFpKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChBbnN3ZXJSb3csIHsga2V5OiBhaSwgYW5zd2VyOiBhLCBvbkNoYW5nZTogYW5zID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0ID0gWy4uLnEuYW5zd2Vyc107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFthaV0gPSBhbnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUXVlc3Rpb24ocWksIHsgLi4ucSwgYW5zd2VyczogbmV4dCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG9uUmVtb3ZlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUXVlc3Rpb24ocWksIHsgLi4ucSwgYW5zd2VyczogcS5hbnN3ZXJzLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGFpKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IHVwZGF0ZVF1ZXN0aW9uKHFpLCB7IC4uLnEsIGFuc3dlcnM6IFsuLi5xLmFuc3dlcnMsIHsgYW5zd2VyX3RleHQ6ICcnLCBpc19jb3JyZWN0OiBmYWxzZSB9XSB9KSwgc3R5bGU6IGJ0bkFkZCB9LCBcIisgXFx1MDQxMlxcdTA0MzBcXHUwNDQwXFx1MDQzOFxcdTA0MzBcXHUwNDNEXFx1MDQ0MiBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0MzBcIikpKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBhZGRRdWVzdGlvbiwgc3R5bGU6IGFkZFF1ZXN0aW9uQnRuU3R5bGUgfSwgXCIrIFxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0MzJcXHUwNDNFXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQ0MVwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Ub3A6IDI0IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6IHN1Ym1pdHRpbmcsIHN0eWxlOiBzdWJtaXRCdG5TdHlsZSB9LCBzdWJtaXR0aW5nID8gJ9Ch0L7Qt9C00LDQvdC40LXigKYnIDogJ9Ch0L7Qt9C00LDRgtGMINGC0LXRgdGCJykpKSkpO1xufVxuY29uc3QgbGFiZWxTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgY29sb3I6IEMuZmFpbnQsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxufTtcbmNvbnN0IGZ1bGxJbnB1dFN0eWxlID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZzogJzlweCAxMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiBDLmJnSW5wdXQsXG4gICAgY29sb3I6IEMud2hpdGUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94Jyxcbn07XG5jb25zdCBhZGRRdWVzdGlvbkJ0blN0eWxlID0ge1xuICAgIHBhZGRpbmc6ICc4cHggMTZweCcsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogQy5jeWFuLFxuICAgIGJvcmRlcjogYDFweCBkYXNoZWQgJHtDLmN5YW59YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbmNvbnN0IHN1Ym1pdEJ0blN0eWxlID0ge1xuICAgIHBhZGRpbmc6ICcxMnB4IDMycHgnLFxuICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuZ3JlZW59LCAke0MuZ3JlZW5EYXJrfSlgLFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgIGZvbnRTaXplOiAxNSxcbiAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuY29uc3QgQyA9IHtcbiAgICBiZ1BhZ2U6ICcjMDIwNjE3JyxcbiAgICBiZ0NhcmQ6ICcjMWUyOTNiJyxcbiAgICBiZ0lucHV0OiAnIzBmMTcyYScsXG4gICAgYm9yZGVyOiAnIzMzNDE1NScsXG4gICAgZ3JlZW46ICcjMTBiOTgxJyxcbiAgICBncmVlbkRhcms6ICcjMDU5NjY5JyxcbiAgICBmYWludDogJyM5NGEzYjgnLFxuICAgIGdob3N0OiAnIzY0NzQ4YicsXG4gICAgd2hpdGU6ICcjZmZmZmZmJyxcbn07XG5jb25zdCBST0xFUyA9IFtcbiAgICB7IHZhbHVlOiAnU1RVREVOVCcsIGxhYmVsOiAn0KHRgtGD0LTQtdC90YInIH0sXG4gICAgeyB2YWx1ZTogJ1VTRVInLCBsYWJlbDogJ9Cf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCcgfSxcbiAgICB7IHZhbHVlOiAnQURNSU4nLCBsYWJlbDogJ9CQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAJyB9LFxuXTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJDcmVhdGUocHJvcHMpIHtcbiAgICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYXBpVXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC9yZXNvdXJjZXNcXC8vLCAnL2FwaS9yZXNvdXJjZXMvJyk7XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZXRTdWJtaXR0aW5nKHRydWUpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgZmQgPSBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZmQuZW50cmllcygpKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zLmFwcGVuZChrZXksIHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlVcmwsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9LFxuICAgICAgICAgICAgICAgIGJvZHk6IHBhcmFtcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZWRpcmVjdFVybCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGF0YS5yZWRpcmVjdFVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubm90aWNlPy5tZXNzYWdlIHx8ICfQntGI0LjQsdC60LAg0L/RgNC4INGB0L7Qt9C00LDQvdC40Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgYWxlcnQoYNCe0YjQuNCx0LrQsDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBwYWRkaW5nOiAyNCwgbWluSGVpZ2h0OiAnMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdQYWdlLCBjb2xvcjogQy53aGl0ZSwgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBtZXRob2Q6IFwiUE9TVFwiLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCBzdHlsZTogeyBtYXhXaWR0aDogNTAwLCBtYXJnaW46ICcwIGF1dG8nIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCA0cHgnLCBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sIFwiXFx1MDQyMVxcdTA0M0VcXHUwNDM3XFx1MDQzNFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQzRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDRGXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBzdHlsZTogeyBtYXJnaW46ICcwIDAgMjRweCcsIGZvbnRTaXplOiAxMywgY29sb3I6IEMuZ2hvc3QgfSB9LCBcIkVtYWlsLCBcXHUwNDNGXFx1MDQzMFxcdTA0NDBcXHUwNDNFXFx1MDQzQlxcdTA0NEMgXFx1MDQzOCBcXHUwNDQwXFx1MDQzRVxcdTA0M0JcXHUwNDRDIFxcdTIwMTQgXFx1MDQzMlxcdTA0NDFcXHUwNDUxIFxcdTA0NDFcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDQzXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTYgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiRW1haWwgKlwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImVtYWlsXCIsIG5hbWU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwidXNlckBleGFtcGxlLmNvbVwiLCBzdHlsZTogaW5wdXRTdHlsZSwgcmVxdWlyZWQ6IHRydWUgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTYgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiXFx1MDQxRlxcdTA0MzBcXHUwNDQwXFx1MDQzRVxcdTA0M0JcXHUwNDRDICpcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJwYXNzd29yZFwiLCBuYW1lOiBcInBhc3N3b3JkXCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MUNcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDNDXFx1MDQ0M1xcdTA0M0MgOCBcXHUwNDQxXFx1MDQzOFxcdTA0M0NcXHUwNDMyXFx1MDQzRVxcdTA0M0JcXHUwNDNFXFx1MDQzMlwiLCBzdHlsZTogaW5wdXRTdHlsZSwgcmVxdWlyZWQ6IHRydWUgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTYgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiXFx1MDQxOFxcdTA0M0NcXHUwNDRGIFxcdTA0M0ZcXHUwNDNFXFx1MDQzQlxcdTA0NENcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQ0RlwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgbmFtZTogXCJ1c2VybmFtZVwiLCBwbGFjZWhvbGRlcjogXCJ1c2VybmFtZVwiLCBzdHlsZTogaW5wdXRTdHlsZSB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAxNiB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDIwXFx1MDQzRVxcdTA0M0JcXHUwNDRDXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBuYW1lOiBcInJvbGVcIiwgc3R5bGU6IGlucHV0U3R5bGUgfSwgUk9MRVMubWFwKHIgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyBrZXk6IHIudmFsdWUsIHZhbHVlOiByLnZhbHVlIH0sIHIubGFiZWwpKSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogc3VibWl0dGluZywgc3R5bGU6IHN1Ym1pdEJ0blN0eWxlIH0sIHN1Ym1pdHRpbmcgPyAn0KHQvtC30LTQsNC90LjQteKApicgOiAn0KHQvtC30LTQsNGC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPJykpKSk7XG59XG5jb25zdCBsYWJlbFN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBjb2xvcjogQy5mYWludCxcbiAgICBtYXJnaW5Cb3R0b206IDQsXG59O1xuY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6ICc5cHggMTJweCcsXG4gICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94Jyxcbn07XG5jb25zdCBzdWJtaXRCdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnMTJweCAzMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBmb250U2l6ZTogMTUsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdJbnB1dDogJyMwZjE3MmEnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgZXJyb3I6ICcjZWY0NDQ0JyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIG11dGVkOiAnI2NiZDVlMScsXG4gICAgZmFpbnQ6ICcjOTRhM2I4JyxcbiAgICBnaG9zdDogJyM2NDc0OGInLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcnVtRWRpdChwcm9wcykge1xuICAgIGNvbnN0IHJlY29yZCA9IHByb3BzLnJlY29yZD8ucGFyYW1zIHx8IHt9O1xuICAgIGNvbnN0IGluaXRpYWxSZXBsaWVzID0gKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmQucmVwbGllc19qc29uID8gSlNPTi5wYXJzZShyZWNvcmQucmVwbGllc19qc29uKSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgY29uc3QgW3JlcGxpZXNdID0gdXNlU3RhdGUoaW5pdGlhbFJlcGxpZXMpO1xuICAgIGNvbnN0IFt0b0RlbGV0ZSwgc2V0VG9EZWxldGVdID0gdXNlU3RhdGUobmV3IFNldCgpKTtcbiAgICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYXBpVXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC9yZXNvdXJjZXNcXC8vLCAnL2FwaS9yZXNvdXJjZXMvJyk7XG4gICAgY29uc3QgdG9nZ2xlRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgICAgIHNldFRvRGVsZXRlKHByZXYgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IG5ldyBTZXQocHJldik7XG4gICAgICAgICAgICBpZiAobmV4dC5oYXMoaWQpKVxuICAgICAgICAgICAgICAgIG5leHQuZGVsZXRlKGlkKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXh0LmFkZChpZCk7XG4gICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlZGlyZWN0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5ub3RpY2U/Lm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0YHQvtGF0YDQsNC90LXQvdC40LgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBhbGVydChg0J7RiNC40LHQutCwOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IHBhZGRpbmc6IDI0LCBtaW5IZWlnaHQ6ICcxMDB2aCcsIGJhY2tncm91bmRDb2xvcjogQy5iZ1BhZ2UsIGNvbG9yOiBDLndoaXRlLCBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IG1ldGhvZDogXCJQT1NUXCIsIG9uU3VibWl0OiBoYW5kbGVTdWJtaXQsIHN0eWxlOiB7IG1heFdpZHRoOiA3MDAsIG1hcmdpbjogJzAgYXV0bycgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDRweCcsIGZvbnRTaXplOiAyMiwgZm9udFdlaWdodDogNzAwIH0gfSwgXCJcXHUwNDIwXFx1MDQzNVxcdTA0MzRcXHUwNDMwXFx1MDQzQVxcdTA0NDJcXHUwNDM4XFx1MDQ0MFxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNGXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzMFwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDI0cHgnLCBmb250U2l6ZTogMTMsIGNvbG9yOiBDLmdob3N0IH0gfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0NcXHUwNDM1XFx1MDQ0MlxcdTA0NENcXHUwNDQyXFx1MDQzNSBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0NEIgXFx1MDQzNFxcdTA0M0JcXHUwNDRGIFxcdTA0NDNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMjQsIHBhZGRpbmc6IDE2LCBiYWNrZ3JvdW5kOiBDLmJnQ2FyZCwgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgYm9yZGVyUmFkaXVzOiA4IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMubXV0ZWQsIG1hcmdpbjogJzAgMCAxMnB4JyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDQxRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDRCXCIsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogQy5naG9zdCwgZm9udFdlaWdodDogNDAwLCBtYXJnaW5MZWZ0OiA4IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGllcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIilcIikpLFxuICAgICAgICAgICAgICAgIHJlcGxpZXMubGVuZ3RoID09PSAwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgY29sb3I6IEMuZ2hvc3QgfSB9LCBcIlxcdTA0MURcXHUwNDM1XFx1MDQ0MiBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0M0VcXHUwNDMyXCIpKSxcbiAgICAgICAgICAgICAgICByZXBsaWVzLm1hcCgocmVwbHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VkID0gdG9EZWxldGUuaGFzKHJlcGx5LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiByZXBseS5pZCwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke21hcmtlZCA/IEMuZXJyb3IgOiBDLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBtYXJrZWQgPyAwLjUgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiBtYXJrZWQsIG9uQ2hhbmdlOiAoKSA9PiB0b2dnbGVEZWxldGUocmVwbHkuaWQpLCBzdHlsZTogeyBtYXJnaW5Ub3A6IDQsIGFjY2VudENvbG9yOiBDLmVycm9yIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZmxleDogMSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMSwgY29sb3I6IEMuZ2hvc3QsIG1hcmdpbkJvdHRvbTogNCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBseS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXFx1MjAxNCBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbHkudXNlcl9lbWFpbCB8fCBgdXNlciMke3JlcGx5LnVzZXJfaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXFx1MDBCNyBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUocmVwbHkuY3JlYXRlZF9hdCkudG9Mb2NhbGVTdHJpbmcoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgY29sb3I6IEMud2hpdGUsIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcgfSB9LCByZXBseS5ib2R5KSkpKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcImRlbGV0ZV9yZXBseV9pZHNcIiwgdmFsdWU6IEpTT04uc3RyaW5naWZ5KFsuLi50b0RlbGV0ZV0pIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogc3VibWl0dGluZywgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEycHggMzJweCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuZ3JlZW59LCAke0MuZ3JlZW5EYXJrfSlgLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBzdWJtaXR0aW5nID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICB9IH0sIHN1Ym1pdHRpbmcgPyAn0KHQvtGF0YDQsNC90LXQvdC40LXigKYnIDogJ9Ch0L7RhdGA0LDQvdC40YLRjCcpKSkpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBDID0ge1xuICAgIGJnUGFnZTogJyMwMjA2MTcnLFxuICAgIGJnU2lkZWJhcjogJyMwZjE3MmEnLFxuICAgIGJnQ2FyZDogJyMxZTI5M2InLFxuICAgIGJnQ2FyZEhvdmVyOiAnIzI0MzI0NycsXG4gICAgYm9yZGVyOiAnIzMzNDE1NScsXG4gICAgZ3JlZW46ICcjMTBiOTgxJyxcbiAgICBncmVlbkxpZ2h0OiAnIzM0ZDM5OScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgY3lhbjogJyMwNmI2ZDQnLFxuICAgIGJsdWU6ICcjM2I4MmY2JyxcbiAgICBlcnJvcjogJyNlZjQ0NDQnLFxuICAgIHRleHRQcmltYXJ5OiAnI2ZmZmZmZicsXG4gICAgdGV4dE11dGVkOiAnI2NiZDVlMScsXG4gICAgdGV4dEZhaW50OiAnIzk0YTNiOCcsXG4gICAgdGV4dEdob3N0OiAnIzY0NzQ4YicsXG59O1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIHBhZ2U6IHtcbiAgICAgICAgcGFkZGluZzogMjQsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmJnUGFnZSxcbiAgICAgICAgY29sb3I6IEMudGV4dFByaW1hcnksXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyOCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBjb2xvcjogQy50ZXh0UHJpbWFyeSxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjNweCcsXG4gICAgfSxcbiAgICBzdWJ0aXRsZToge1xuICAgICAgICBtYXJnaW5Ub3A6IDQsXG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgY29sb3I6IEMudGV4dEdob3N0LFxuICAgIH0sXG4gICAgdGltZXN0YW1wOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgY29sb3I6IEMudGV4dEdob3N0LFxuICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgIG1hcmdpblRvcDogNCxcbiAgICB9LFxuICAgIG1ldHJpY3NHcmlkOiB7XG4gICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSknLFxuICAgICAgICBnYXA6IDE2LFxuICAgICAgICBtYXJnaW5Cb3R0b206IDI0LFxuICAgIH0sXG4gICAgbWV0cmljQ2FyZDogKGFjY2VudENvbG9yKSA9PiAoe1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdDYXJkLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgICAgICBib3JkZXJUb3A6IGAzcHggc29saWQgJHthY2NlbnRDb2xvcn1gLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICBwYWRkaW5nOiAnMThweCAyMHB4JyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2UnLFxuICAgIH0pLFxuICAgIG1ldHJpY0xhYmVsOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMSxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDhlbScsXG4gICAgICAgIGNvbG9yOiBDLnRleHRHaG9zdCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA4LFxuICAgIH0sXG4gICAgbWV0cmljVmFsdWU6IHtcbiAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIGNvbG9yOiBDLnRleHRQcmltYXJ5LFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDgsXG4gICAgfSxcbiAgICBtZXRyaWNMaW5rOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgY29sb3I6IEMuZ3JlZW5MaWdodCxcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICB9LFxuICAgIG1ldHJpY1N1Yjoge1xuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGNvbG9yOiBDLnRleHRHaG9zdCxcbiAgICB9LFxuICAgIHdpZGdldHNSb3c6IHtcbiAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMHB4LCAxZnIpKScsXG4gICAgICAgIGdhcDogMTYsXG4gICAgfSxcbiAgICB3aWRnZXQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmJnQ2FyZCxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgcGFkZGluZzogJzIwcHggMjJweCcsXG4gICAgfSxcbiAgICB3aWRnZXRUaXRsZToge1xuICAgICAgICBtYXJnaW46ICcwIDAgMTRweCAwJyxcbiAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgIGNvbG9yOiBDLnRleHRNdXRlZCxcbiAgICB9LFxuICAgIGJ0bkdyZWVuOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwYWRkaW5nOiAnOHB4IDE0cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA3LFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDFlbScsXG4gICAgfSxcbiAgICBidG5CbHVlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwYWRkaW5nOiAnOHB4IDE0cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmJsdWV9LCAjMjU2M2ViKWAsXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIGJvcmRlclJhZGl1czogNyxcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjAxZW0nLFxuICAgIH0sXG4gICAgbm90ZUJveDoge1xuICAgICAgICBtYXJnaW5Ub3A6IDEyLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCAxNHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxNiwxODUsMTI5LDAuMDgpJyxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkIHJnYmEoMTYsMTg1LDEyOSwwLjI1KWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogNyxcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBjb2xvcjogQy50ZXh0RmFpbnQsXG4gICAgfSxcbiAgICBlcnJvckJveDoge1xuICAgICAgICBwYWRkaW5nOiAnMTRweCAxOHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyMzksNjgsNjgsMC4xKScsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCByZ2JhKDIzOSw2OCw2OCwwLjMpYCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBjb2xvcjogQy5lcnJvcixcbiAgICB9LFxuICAgIGxvYWRpbmdCb3g6IHtcbiAgICAgICAgcGFkZGluZzogJzE0cHggMThweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5iZ0NhcmQsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgY29sb3I6IEMudGV4dEZhaW50LFxuICAgIH0sXG4gICAgbWV0cmljR2xvdzogKGFjY2VudENvbG9yKSA9PiAoe1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDYwLFxuICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwIDEwcHggMCA2MHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY2NlbnRDb2xvcixcbiAgICAgICAgb3BhY2l0eTogMC4wOCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH0pLFxufTtcbmZ1bmN0aW9uIGJ1aWxkRGFzaGJvYXJkVXJsKCkge1xuICAgIGNvbnN0IGJhc2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICByZXR1cm4gYCR7YmFzZX0vYXBpL2Rhc2hib2FyZGA7XG59XG5mdW5jdGlvbiBNZXRyaWNDYXJkKHsgbGFiZWwsIHZhbHVlLCBzdWIsIGFjY2VudCwgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljQ2FyZChhY2NlbnQpIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLm1ldHJpY0dsb3coYWNjZW50KSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljTGFiZWwgfSwgbGFiZWwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5tZXRyaWNWYWx1ZSB9LCB2YWx1ZSksXG4gICAgICAgIHN1YiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5tZXRyaWNTdWIgfSwgc3ViKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtmZXRjaEVycm9yLCBzZXRGZXRjaEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IGJ1aWxkRGFzaGJvYXJkVXJsKCk7XG4gICAgICAgIGxldCBtb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNldEZldGNoRXJyb3IobnVsbCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXR3b3JrIGVycm9yOiAke3Jlcy5zdGF0dXN9ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3VudGVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgc2V0RGF0YShqc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vdW50ZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzZXRGZXRjaEVycm9yKFN0cmluZyhlcnIubWVzc2FnZSA/PyBlcnIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChtb3VudGVkKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmZXRjaERhdGEsIDMwXzAwMCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgYWRtaW5CYXNlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgY29uc3QgbGlua1RvID0gKHJlc291cmNlSWQpID0+IGAke2FkbWluQmFzZX0vcmVzb3VyY2VzLyR7cmVzb3VyY2VJZH1gO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMucGFnZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5oZWFkZXIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogc3R5bGVzLnRpdGxlIH0sIFwiQWRtaW4gRGFzaGJvYXJkXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLnN1YnRpdGxlIH0sIFwiXFx1MDQxRVxcdTA0MzFcXHUwNDM3XFx1MDQzRVxcdTA0NDAgXFx1MDQzQVxcdTA0M0JcXHUwNDRFXFx1MDQ0N1xcdTA0MzVcXHUwNDMyXFx1MDQ0QlxcdTA0NDUgXFx1MDQzQ1xcdTA0MzVcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcXHUwNDNBIFxcdTA0M0ZcXHUwNDNCXFx1MDQzMFxcdTA0NDJcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQ0QlwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy50aW1lc3RhbXAgfSwgZGF0YT8udGltZXN0YW1wID8gYNCe0LHQvdC+0LLQu9C10L3QvjogJHtuZXcgRGF0ZShkYXRhLnRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ3J1LVJVJyl9YCA6ICdcXHUwMGEwJykpLFxuICAgICAgICBsb2FkaW5nID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLmxvYWRpbmdCb3ggfSwgXCJcXHUwNDE3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzMCBcXHUwNDNDXFx1MDQzNVxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0M0FcXHUyMDI2XCIpKSA6IGZldGNoRXJyb3IgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMuZXJyb3JCb3ggfSxcbiAgICAgICAgICAgIFwiXFx1MDQxRVxcdTA0NDhcXHUwNDM4XFx1MDQzMVxcdTA0M0FcXHUwNDMwIFxcdTA0MzdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDM4IFxcdTA0MzRcXHUwNDMwXFx1MDQ0OFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0MzRcXHUwNDMwOiBcIixcbiAgICAgICAgICAgIGZldGNoRXJyb3IpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljc0dyaWQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1ldHJpY0NhcmQsIHsgbGFiZWw6IFwiXFx1MDQxRlxcdTA0M0VcXHUwNDQxXFx1MDQzNVxcdTA0NDlcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGXCIsIHZhbHVlOiBkYXRhPy52aXNpdHMgPz8gJ+KAlCcsIHN1YjogXCJcXHUwNDIyXFx1MDQzMFxcdTA0MzFcXHUwNDNCXFx1MDQzOFxcdTA0NDZcXHUwNDMwIHNpdGVfdmlzaXRzXCIsIGFjY2VudDogQy5jeWFuIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWV0cmljQ2FyZCwgeyBsYWJlbDogXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0MzhcIiwgdmFsdWU6IGRhdGE/LnVzZXJzID8/ICfigJQnLCBzdWI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogbGlua1RvKCd1c2VycycpLCBzdHlsZTogc3R5bGVzLm1ldHJpY0xpbmsgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0FcXHUwNDQwXFx1MDQ0QlxcdTA0NDJcXHUwNDRDIFxcdTA0M0ZcXHUwNDNFXFx1MDQzQlxcdTA0NENcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQzNVxcdTA0MzkgXFx1MjE5MlwiKSwgYWNjZW50OiBDLmJsdWUgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXRyaWNDYXJkLCB7IGxhYmVsOiBcIlxcdTA0MUFcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDRCXCIsIHZhbHVlOiBkYXRhPy5jb3Vyc2VzID8/ICfigJQnLCBzdWI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogbGlua1RvKCdjb3Vyc2VzJyksIHN0eWxlOiBzdHlsZXMubWV0cmljTGluayB9LCBcIlxcdTA0MUVcXHUwNDQyXFx1MDQzQVxcdTA0NDBcXHUwNDRCXFx1MDQ0MlxcdTA0NEMgXFx1MDQzQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0NEIgXFx1MjE5MlwiKSwgYWNjZW50OiBDLmdyZWVuIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWV0cmljQ2FyZCwgeyBsYWJlbDogXCJcXHUwNDE3XFx1MDQzMFxcdTA0M0ZcXHUwNDM4XFx1MDQ0MVxcdTA0MzhcIiwgdmFsdWU6IGRhdGE/LmVucm9sbG1lbnRzID8/ICfigJQnLCBzdWI6IFwiXFx1MDQxMlxcdTA0NDFcXHUwNDM1XFx1MDQzM1xcdTA0M0UgXFx1MDQzN1xcdTA0MzBcXHUwNDNGXFx1MDQzOFxcdTA0NDFcXHUwNDM1XFx1MDQzOSBcXHUwNDNEXFx1MDQzMCBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQ0QlwiLCBhY2NlbnQ6IEMuZ3JlZW5MaWdodCB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy53aWRnZXRzUm93IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMud2lkZ2V0IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7IHN0eWxlOiBzdHlsZXMud2lkZ2V0VGl0bGUgfSwgXCJcXHUwNDIxXFx1MDQzMlxcdTA0M0VcXHUwNDM0XFx1MDQzQVxcdTA0MzAgXFx1MDQzRlxcdTA0M0UgXFx1MDQ0MVxcdTA0MzBcXHUwNDM5XFx1MDQ0MlxcdTA0NDNcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDhweCcsIGZvbnRTaXplOiAxNCwgY29sb3I6IEMudGV4dEZhaW50LCBsaW5lSGVpZ2h0OiAxLjYgfSB9LCBcIlxcdTA0MUZcXHUwNDMwXFx1MDQzRFxcdTA0MzVcXHUwNDNCXFx1MDQ0QyBcXHUwNDQzXFx1MDQzRlxcdTA0NDBcXHUwNDMwXFx1MDQzMlxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGIFxcdTA0M0ZcXHUwNDNCXFx1MDQzMFxcdTA0NDJcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQzRVxcdTA0MzkgTmV0Y291cnNlLiBcXHUwNDE0XFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQ0M1xcdTA0M0YgXFx1MDQzRVxcdTA0MzNcXHUwNDQwXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQ0N1xcdTA0MzVcXHUwNDNEIFxcdTA0MzRcXHUwNDNCXFx1MDQ0RiBcXHUwNDMwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQ0MFxcdTA0MzhcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0M0RcXHUwNDRCXFx1MDQ0NSBcXHUwNDMwXFx1MDQzNFxcdTA0M0NcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0VcXHUwNDQwXFx1MDQzRVxcdTA0MzIuXCIpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhPy5ub3RlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5ub3RlQm94IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIHsgc3R5bGU6IHsgY29sb3I6IEMuZ3JlZW5MaWdodCB9IH0sIFwiXFx1MDQxRlxcdTA0NDBcXHUwNDM4XFx1MDQzQ1xcdTA0MzVcXHUwNDQ3XFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNTpcXHUwMEEwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5ub3RlKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLndpZGdldCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgeyBzdHlsZTogc3R5bGVzLndpZGdldFRpdGxlIH0sIFwiXFx1MDQxMVxcdTA0NEJcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDRCXFx1MDQzNSBcXHUwNDM0XFx1MDQzNVxcdTA0MzlcXHUwNDQxXFx1MDQ0MlxcdTA0MzJcXHUwNDM4XFx1MDQ0RlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxMCwgZmxleFdyYXA6ICd3cmFwJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IGxpbmtUbygndXNlcnMnKSwgc3R5bGU6IHN0eWxlcy5idG5CbHVlIH0sIFwiXFx1MDQxRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDM4XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBsaW5rVG8oJ2NvdXJzZXMnKSwgc3R5bGU6IHN0eWxlcy5idG5HcmVlbiB9LCBcIlxcdTA0MUFcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDRCXCIpKSkpKSkpKTtcbn1cbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9sb2dpbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuTG9naW4gPSBMb2dpblxuaW1wb3J0IENvdXJzZVF1aWNrQ3JlYXRlIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9jb3Vyc2UtY3JlYXRlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db3Vyc2VRdWlja0NyZWF0ZSA9IENvdXJzZVF1aWNrQ3JlYXRlXG5pbXBvcnQgQ291cnNlRGV0YWlsZWRFZGl0IGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9jb3Vyc2UtZWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ291cnNlRGV0YWlsZWRFZGl0ID0gQ291cnNlRGV0YWlsZWRFZGl0XG5pbXBvcnQgUXVpelF1aWNrQ3JlYXRlIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9xdWl6LWNyZWF0ZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUXVpelF1aWNrQ3JlYXRlID0gUXVpelF1aWNrQ3JlYXRlXG5pbXBvcnQgVXNlclF1aWNrQ3JlYXRlIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy91c2VyLWNyZWF0ZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXNlclF1aWNrQ3JlYXRlID0gVXNlclF1aWNrQ3JlYXRlXG5pbXBvcnQgRm9ydW1EZXRhaWxlZEVkaXQgZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL2ZvcnVtLWVkaXQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkZvcnVtRGV0YWlsZWRFZGl0ID0gRm9ydW1EZXRhaWxlZEVkaXRcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL2Rhc2hib2FyZCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuRGFzaGJvYXJkID0gRGFzaGJvYXJkIl0sIm5hbWVzIjpbIkMiLCJiZ1BhZ2UiLCJiZ0RhcmsiLCJiZ0NhcmQiLCJiZ0lucHV0IiwiYm9yZGVyIiwiZ3JlZW4iLCJncmVlbkRhcmsiLCJjeWFuIiwiYmx1ZSIsImVycm9yIiwid2hpdGUiLCJtdXRlZCIsImZhaW50IiwiZ2hvc3QiLCJMb2dpbiIsImFjdGlvbiIsImVycm9yTWVzc2FnZSIsIndpbmRvdyIsIl9fQVBQX1NUQVRFX18iLCJicmFuZGluZyIsIlJFRFVYX1NUQVRFIiwiaG92ZXIiLCJzZXRIb3ZlciIsInVzZVN0YXRlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzIiwicGFnZSIsImNhcmQiLCJsZWZ0IiwiYnJhbmQiLCJicmFuZERvdCIsImJyYW5kTmFtZSIsImNvbXBhbnlOYW1lIiwid2VsY29tZSIsIndlbGNvbWVTdWIiLCJkZWNvclJvdyIsImRlY29yQ2hpcCIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJkb3RzIiwidmlld0JveCIsInhtbG5zIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsInJvdyIsImNvbCIsImtleSIsImN4IiwiY3kiLCJyIiwiZmlsbCIsIm1ldGhvZCIsInJpZ2h0IiwiZm9ybVRpdGxlIiwiZm9ybVN1YiIsImVycm9yQm94IiwiZXJyb3JEb3QiLCJmaWVsZCIsImh0bWxGb3IiLCJsYWJlbCIsImlkIiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwiaW5wdXQiLCJvbkZvY3VzIiwiZSIsInRhcmdldCIsImJveFNoYWRvdyIsIm9uQmx1ciIsImJ0biIsIm9uTW91c2VFbnRlciIsImJhY2tncm91bmQiLCJvbk1vdXNlTGVhdmUiLCJoaW50IiwibWluSGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiZm9udEZhbWlseSIsInBhZGRpbmciLCJib3hTaXppbmciLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiZmxleCIsImJvcmRlclJpZ2h0IiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwiZ2FwIiwibWFyZ2luQm90dG9tIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwiZmxleFdyYXAiLCJvcGFjaXR5IiwiYm90dG9tIiwicG9pbnRlckV2ZW50cyIsIm91dGxpbmUiLCJ0cmFuc2l0aW9uIiwiV2Via2l0VGV4dEZpbGxDb2xvciIsImN1cnNvciIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsIkNPTlRFTlRfVFlQRVMiLCJ2YWx1ZSIsIlFVRVNUSU9OX1RZUEVTIiwiQ0FURUdPUklFUyIsImlucHV0U3R5bGUiLCJzZWxlY3RTdHlsZSIsImJ0bkRhbmdlciIsImJ0bkFkZCIsIkFuc3dlclJvdyIsImFuc3dlciIsIm9uQ2hhbmdlIiwib25SZW1vdmUiLCJhbnN3ZXJfdGV4dCIsIndoaXRlU3BhY2UiLCJjaGVja2VkIiwiaXNfY29ycmVjdCIsImFjY2VudENvbG9yIiwib25DbGljayIsIlF1ZXN0aW9uQmxvY2siLCJxdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlcnMiLCJ1cGRhdGVBbnN3ZXIiLCJpIiwiYSIsIm5leHQiLCJyZW1vdmVBbnN3ZXIiLCJmaWx0ZXIiLCJpZHgiLCJxdWVzdGlvbl90ZXh0IiwicXVlc3Rpb25fdHlwZSIsIm1hcCIsInF0IiwiRnJhZ21lbnQiLCJhbnMiLCJhaSIsIkxlc3NvblJvdyIsImxlc3NvbiIsImFkZFF1ZXN0aW9uIiwicXVlc3Rpb25zIiwidXBkYXRlUXVlc3Rpb24iLCJxIiwicmVtb3ZlUXVlc3Rpb24iLCJpc1F1aXoiLCJjb250ZW50X3R5cGUiLCJpc1ZpZGVvIiwiaXNUZXh0IiwidGl0bGUiLCJjdCIsInZpZGVvX3VybCIsInRleHRfY29udGVudCIsInJvd3MiLCJyZXNpemUiLCJxdWl6X3RpdGxlIiwicWkiLCJTZWN0aW9uQmxvY2siLCJzZWN0aW9uIiwiaW5kZXgiLCJhZGRMZXNzb24iLCJsZXNzb25zIiwidXBkYXRlTGVzc29uIiwibGkiLCJyZW1vdmVMZXNzb24iLCJsIiwiQ291cnNlQ3JlYXRlIiwicHJvcHMiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwicmVxdWlyZVF1aXoiLCJzZXRSZXF1aXJlUXVpeiIsIm1pblNjb3JlIiwic2V0TWluU2NvcmUiLCJzZWN0aW9ucyIsInNldFNlY3Rpb25zIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJhZGRTZWN0aW9uIiwidXBkYXRlU2VjdGlvbiIsInJlbW92ZVNlY3Rpb24iLCJ0b3RhbExlc3NvbnMiLCJyZWR1Y2UiLCJzZWMiLCJhcGlVcmwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVwbGFjZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImZkIiwiRm9ybURhdGEiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ2YWwiLCJlbnRyaWVzIiwiYXBwZW5kIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsImRhdGEiLCJqc29uIiwicmVkaXJlY3RVcmwiLCJocmVmIiwiYWxlcnQiLCJub3RpY2UiLCJtZXNzYWdlIiwiZXJyIiwib25TdWJtaXQiLCJtYXJnaW4iLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZENvbHVtbiIsImxhYmVsU3R5bGUiLCJmdWxsSW5wdXRTdHlsZSIsImMiLCJOdW1iZXIiLCJtaW4iLCJtYXgiLCJtYXJnaW5MZWZ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImFkZFNlY3Rpb25CdG5TdHlsZSIsImRpc2FibGVkIiwic3VibWl0QnRuU3R5bGUiLCJDb3Vyc2VFZGl0IiwicmVjb3JkIiwiY291cnNlSWQiLCJpbml0aWFsU2VjdGlvbnMiLCJjb3Vyc2VfZGF0YV9qc29uIiwicGFyc2UiLCJyZXF1aXJlX3F1aXpfY29tcGxldGlvbiIsIm1pbl9xdWl6X3Njb3JlIiwiUXVpekNyZWF0ZSIsInNldFF1ZXN0aW9ucyIsImFkZFF1ZXN0aW9uQnRuU3R5bGUiLCJST0xFUyIsIlVzZXJDcmVhdGUiLCJGb3J1bUVkaXQiLCJpbml0aWFsUmVwbGllcyIsInJlcGxpZXNfanNvbiIsInJlcGxpZXMiLCJ0b0RlbGV0ZSIsInNldFRvRGVsZXRlIiwiU2V0IiwidG9nZ2xlRGVsZXRlIiwicHJldiIsImhhcyIsImRlbGV0ZSIsImFkZCIsInJlcGx5IiwibWFya2VkIiwidXNlcl9lbWFpbCIsInVzZXJfaWQiLCJEYXRlIiwiY3JlYXRlZF9hdCIsInRvTG9jYWxlU3RyaW5nIiwiYmdTaWRlYmFyIiwiYmdDYXJkSG92ZXIiLCJncmVlbkxpZ2h0IiwidGV4dFByaW1hcnkiLCJ0ZXh0TXV0ZWQiLCJ0ZXh0RmFpbnQiLCJ0ZXh0R2hvc3QiLCJzdHlsZXMiLCJoZWFkZXIiLCJwYWRkaW5nQm90dG9tIiwiYm9yZGVyQm90dG9tIiwic3VidGl0bGUiLCJ0aW1lc3RhbXAiLCJtZXRyaWNzR3JpZCIsIm1ldHJpY0NhcmQiLCJib3JkZXJUb3AiLCJtZXRyaWNMYWJlbCIsIm1ldHJpY1ZhbHVlIiwibWV0cmljTGluayIsInRleHREZWNvcmF0aW9uIiwibWV0cmljU3ViIiwid2lkZ2V0c1JvdyIsIndpZGdldCIsIndpZGdldFRpdGxlIiwiYnRuR3JlZW4iLCJidG5CbHVlIiwibm90ZUJveCIsImxvYWRpbmdCb3giLCJtZXRyaWNHbG93IiwidG9wIiwiYnVpbGREYXNoYm9hcmRVcmwiLCJiYXNlIiwiTWV0cmljQ2FyZCIsInN1YiIsImFjY2VudCIsIkRhc2hib2FyZCIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoRXJyb3IiLCJzZXRGZXRjaEVycm9yIiwidXNlRWZmZWN0IiwidXJsIiwibW91bnRlZCIsImZldGNoRGF0YSIsImNyZWRlbnRpYWxzIiwib2siLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJTdHJpbmciLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFkbWluQmFzZSIsImxpbmtUbyIsInJlc291cmNlSWQiLCJ2aXNpdHMiLCJ1c2VycyIsImNvdXJzZXMiLCJlbnJvbGxtZW50cyIsIm5vdGUiLCJBZG1pbkpTIiwiVXNlckNvbXBvbmVudHMiLCJDb3Vyc2VRdWlja0NyZWF0ZSIsIkNvdXJzZURldGFpbGVkRWRpdCIsIlF1aXpRdWlja0NyZWF0ZSIsIlVzZXJRdWlja0NyZWF0ZSIsIkZvcnVtRGV0YWlsZWRFZGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsTUFBTUEsR0FBQyxHQUFHO0lBQ05DLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFDQUMsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsU0FBUyxFQUFFLFNBQVM7SUFDcEJDLEVBQUFBLElBQUksRUFBRSxTQUFTO0lBQ2ZDLEVBQUFBLElBQUksRUFBRSxTQUFTO0lBQ2ZDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFDQUMsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRTtJQUNYLENBQUM7SUFDYyxTQUFTQyxLQUFLQSxHQUFHO01BQzVCLE1BQU07SUFBRUMsSUFBQUEsTUFBTSxHQUFHLFFBQVE7SUFBRUMsSUFBQUE7SUFBYSxHQUFDLEdBQUlDLE1BQU0sQ0FBQ0MsYUFBYSxJQUFJLEVBQUc7TUFDeEUsTUFBTUMsUUFBUSxHQUFHRixNQUFNLENBQUNHLFdBQVcsRUFBRUQsUUFBUSxJQUFJLEVBQUU7TUFDbkQsTUFBTSxDQUFDRSxLQUFLLEVBQUVDLFFBQVEsQ0FBQyxHQUFHQyxjQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3hDLEVBQUEsb0JBQVFDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNDO0lBQUssR0FBQyxlQUNoREosc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ0U7SUFBSyxHQUFDLGVBQ3hDTCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRUMsQ0FBQyxDQUFDRztJQUFLLEdBQUMsZUFDeENOLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNJO0lBQU0sR0FBQyxlQUN6Q1Asc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ0s7SUFBUyxHQUFDLENBQUMsZUFDakRSLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNNO0lBQVUsR0FBQyxFQUFFZCxRQUFRLENBQUNlLFdBQVcsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLGVBQ25HVixzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFO1FBQUVDLEtBQUssRUFBRUMsQ0FBQyxDQUFDUTtPQUFTLEVBQzFDLGdDQUFnQyxlQUNoQ1gsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFDL0IsOERBQThELENBQUMsZUFDbkVELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNTO09BQVksRUFBRSx5YkFBeWIsQ0FBQyxlQUM1ZVosc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ1U7SUFBUyxHQUFDLGVBQzVDYixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtVQUFFLEdBQUdDLENBQUMsQ0FBQ1csU0FBUztVQUFFQyxXQUFXLEVBQUV4QyxHQUFDLENBQUNNLEtBQUs7VUFBRW1DLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ007SUFBTTtPQUFHLEVBQUUsMEVBQTBFLENBQUMsZUFDM0ttQixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtVQUFFLEdBQUdDLENBQUMsQ0FBQ1csU0FBUztVQUFFQyxXQUFXLEVBQUV4QyxHQUFDLENBQUNRLElBQUk7VUFBRWlDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1E7SUFBSztPQUFHLEVBQUUsZ0NBQWdDLENBQUMsZUFDL0hpQixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtVQUFFLEdBQUdDLENBQUMsQ0FBQ1csU0FBUztVQUFFQyxXQUFXLEVBQUV4QyxHQUFDLENBQUNTLElBQUk7VUFBRWdDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1M7SUFBSztPQUFHLEVBQUUsd0RBQXdELENBQUMsQ0FBQyxlQUM1SmdCLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNjLElBQUk7SUFBRUMsSUFBQUEsT0FBTyxFQUFFLFlBQVk7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQTZCLEdBQUMsRUFBRUMsS0FBSyxDQUFDQyxJQUFJLENBQUM7SUFBRUMsSUFBQUEsTUFBTSxFQUFFO09BQUcsRUFBRSxDQUFDQyxDQUFDLEVBQUVDLEdBQUcsS0FBS0osS0FBSyxDQUFDQyxJQUFJLENBQUM7SUFBRUMsSUFBQUEsTUFBTSxFQUFFO09BQUcsRUFBRSxDQUFDQyxDQUFDLEVBQUVFLEdBQUcsbUJBQU16QixzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUV5QixJQUFBQSxHQUFHLEVBQUUsQ0FBQSxFQUFHRixHQUFHLENBQUEsQ0FBQSxFQUFJQyxHQUFHLENBQUEsQ0FBRTtJQUFFRSxJQUFBQSxFQUFFLEVBQUVGLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUFFRyxJQUFBQSxFQUFFLEVBQUVKLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUFFSyxJQUFBQSxDQUFDLEVBQUUsS0FBSztJQUFFQyxJQUFBQSxJQUFJLEVBQUU7SUFBeUIsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUNyVTlCLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRVYsSUFBQUEsTUFBTSxFQUFFQSxNQUFNO0lBQUV3QyxJQUFBQSxNQUFNLEVBQUUsTUFBTTtRQUFFN0IsS0FBSyxFQUFFQyxDQUFDLENBQUM2QjtJQUFNLEdBQUMsZUFDMUVoQyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFO1FBQUVDLEtBQUssRUFBRUMsQ0FBQyxDQUFDOEI7T0FBVyxFQUFFLDRFQUE0RSxDQUFDLGVBQy9IakMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQytCO09BQVMsRUFBRSxxSkFBcUosQ0FBQyxFQUNyTTFDLFlBQVksa0JBQUtRLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNnQztJQUFTLEdBQUMsZUFDN0RuQyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsTUFBTSxFQUFFO1FBQUVDLEtBQUssRUFBRUMsQ0FBQyxDQUFDaUM7SUFBUyxHQUFDLEVBQUUsUUFBUSxDQUFDLEVBQzVENUMsWUFBWSxDQUFDLENBQUMsZUFDbEJRLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNrQztJQUFNLEdBQUMsZUFDekNyQyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVxQyxJQUFBQSxPQUFPLEVBQUUsYUFBYTtRQUFFcEMsS0FBSyxFQUFFQyxDQUFDLENBQUNvQztPQUFPLEVBQ25FLFFBQVEsZUFDUnZDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO1VBQUVjLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1U7SUFBTTtPQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsZUFDcEVlLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXVDLElBQUFBLEVBQUUsRUFBRSxhQUFhO0lBQUVDLElBQUFBLElBQUksRUFBRSxPQUFPO0lBQUVDLElBQUFBLElBQUksRUFBRSxPQUFPO0lBQUVDLElBQUFBLFdBQVcsRUFBRSxtQkFBbUI7SUFBRUMsSUFBQUEsWUFBWSxFQUFFLE9BQU87SUFBRUMsSUFBQUEsUUFBUSxFQUFFLElBQUk7UUFBRTNDLEtBQUssRUFBRUMsQ0FBQyxDQUFDMkMsS0FBSztRQUFFQyxPQUFPLEVBQUVDLENBQUMsSUFBSTtVQUMvS2xELFFBQVEsQ0FBQyxPQUFPLENBQUM7VUFDakJrRCxDQUFDLENBQUNDLE1BQU0sQ0FBQy9DLEtBQUssQ0FBQ2EsV0FBVyxHQUFHeEMsR0FBQyxDQUFDTSxLQUFLO0lBQ3BDbUUsTUFBQUEsQ0FBQyxDQUFDQyxNQUFNLENBQUMvQyxLQUFLLENBQUNnRCxTQUFTLEdBQUcsQ0FBQSwrQkFBQSxDQUFpQztRQUNoRSxDQUFDO1FBQUVDLE1BQU0sRUFBRUgsQ0FBQyxJQUFJO1VBQ1psRCxRQUFRLENBQUMsSUFBSSxDQUFDO1VBQ2RrRCxDQUFDLENBQUNDLE1BQU0sQ0FBQy9DLEtBQUssQ0FBQ2EsV0FBVyxHQUFHeEMsR0FBQyxDQUFDSyxNQUFNO0lBQ3JDb0UsTUFBQUEsQ0FBQyxDQUFDQyxNQUFNLENBQUMvQyxLQUFLLENBQUNnRCxTQUFTLEdBQUcsTUFBTTtJQUNyQyxJQUFBO09BQUcsQ0FBQyxDQUFDLGVBQ2JsRCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRUMsQ0FBQyxDQUFDa0M7SUFBTSxHQUFDLGVBQ3pDckMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFcUMsSUFBQUEsT0FBTyxFQUFFLGdCQUFnQjtRQUFFcEMsS0FBSyxFQUFFQyxDQUFDLENBQUNvQztPQUFPLEVBQ3RFLHVDQUF1QyxlQUN2Q3ZDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO1VBQUVjLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1U7SUFBTTtPQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsZUFDcEVlLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXVDLElBQUFBLEVBQUUsRUFBRSxnQkFBZ0I7SUFBRUMsSUFBQUEsSUFBSSxFQUFFLFVBQVU7SUFBRUMsSUFBQUEsSUFBSSxFQUFFLFVBQVU7SUFBRUMsSUFBQUEsV0FBVyxFQUFFLGtEQUFrRDtJQUFFQyxJQUFBQSxZQUFZLEVBQUUsa0JBQWtCO0lBQUVDLElBQUFBLFFBQVEsRUFBRSxJQUFJO1FBQUUzQyxLQUFLLEVBQUVDLENBQUMsQ0FBQzJDLEtBQUs7UUFBRUMsT0FBTyxFQUFFQyxDQUFDLElBQUk7VUFDbE9sRCxRQUFRLENBQUMsVUFBVSxDQUFDO1VBQ3BCa0QsQ0FBQyxDQUFDQyxNQUFNLENBQUMvQyxLQUFLLENBQUNhLFdBQVcsR0FBR3hDLEdBQUMsQ0FBQ00sS0FBSztJQUNwQ21FLE1BQUFBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDL0MsS0FBSyxDQUFDZ0QsU0FBUyxHQUFHLENBQUEsK0JBQUEsQ0FBaUM7UUFDaEUsQ0FBQztRQUFFQyxNQUFNLEVBQUVILENBQUMsSUFBSTtVQUNabEQsUUFBUSxDQUFDLElBQUksQ0FBQztVQUNka0QsQ0FBQyxDQUFDQyxNQUFNLENBQUMvQyxLQUFLLENBQUNhLFdBQVcsR0FBR3hDLEdBQUMsQ0FBQ0ssTUFBTTtJQUNyQ29FLE1BQUFBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDL0MsS0FBSyxDQUFDZ0QsU0FBUyxHQUFHLE1BQU07SUFDckMsSUFBQTtPQUFHLENBQUMsQ0FBQyxlQUNibEQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7UUFBRXhDLEtBQUssRUFBRUMsQ0FBQyxDQUFDaUQsR0FBRztJQUFFQyxJQUFBQSxZQUFZLEVBQUVMLENBQUMsSUFBS0EsQ0FBQyxDQUFDQyxNQUFNLENBQUMvQyxLQUFLLENBQUNvRCxVQUFVLEdBQ25HLENBQUEsd0JBQUEsRUFBMkIvRSxHQUFDLENBQUNPLFNBQVMsQ0FBQSxVQUFBLENBQWE7SUFBRXlFLElBQUFBLFlBQVksRUFBRVAsQ0FBQyxJQUFLQSxDQUFDLENBQUNDLE1BQU0sQ0FBQy9DLEtBQUssQ0FBQ29ELFVBQVUsR0FDbEcsMkJBQTJCL0UsR0FBQyxDQUFDTSxLQUFLLENBQUEsRUFBQSxFQUFLTixHQUFDLENBQUNPLFNBQVMsQ0FBQSxDQUFBO09BQU0sRUFBRSxnQ0FBZ0MsQ0FBQyxlQUNuR2tCLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNxRDtJQUFLLEdBQUMsRUFBRSw0VEFBNFQsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1WDtJQUNBLE1BQU1yRCxDQUFDLEdBQUc7SUFDTkMsRUFBQUEsSUFBSSxFQUFFO0lBQ0ZxRCxJQUFBQSxTQUFTLEVBQUUsT0FBTztJQUNsQkMsSUFBQUEsS0FBSyxFQUFFLE1BQU07SUFDYkMsSUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZkMsSUFBQUEsVUFBVSxFQUFFLFFBQVE7SUFDcEJDLElBQUFBLGNBQWMsRUFBRSxRQUFRO1FBQ3hCQyxlQUFlLEVBQUV2RixHQUFDLENBQUNDLE1BQU07SUFDekJ1RixJQUFBQSxVQUFVLEVBQUUsc0JBQXNCO0lBQ2xDQyxJQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmQyxJQUFBQSxTQUFTLEVBQUU7T0FDZDtJQUNENUQsRUFBQUEsSUFBSSxFQUFFO0lBQ0ZzRCxJQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmRCxJQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNiUSxJQUFBQSxRQUFRLEVBQUUsR0FBRztJQUNiVCxJQUFBQSxTQUFTLEVBQUUsR0FBRztJQUNkVSxJQUFBQSxZQUFZLEVBQUUsRUFBRTtJQUNoQkMsSUFBQUEsUUFBUSxFQUFFLFFBQVE7SUFDbEJ4RixJQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFDL0JzRSxJQUFBQSxTQUFTLEVBQUU7T0FDZDtJQUNENUMsRUFBQUEsSUFBSSxFQUFFO0lBQ0YrRCxJQUFBQSxJQUFJLEVBQUUsV0FBVztJQUNqQmYsSUFBQUEsVUFBVSxFQUFFLENBQUEsaURBQUEsQ0FBbUQ7SUFDL0RnQixJQUFBQSxXQUFXLEVBQUUsQ0FBQSxVQUFBLEVBQWEvRixHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQ3BDb0YsSUFBQUEsT0FBTyxFQUFFLFdBQVc7SUFDcEJMLElBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZZLElBQUFBLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCQyxJQUFBQSxRQUFRLEVBQUUsVUFBVTtJQUNwQkosSUFBQUEsUUFBUSxFQUFFO09BQ2I7SUFDRDdELEVBQUFBLEtBQUssRUFBRTtJQUNIb0QsSUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZkMsSUFBQUEsVUFBVSxFQUFFLFFBQVE7SUFDcEJhLElBQUFBLEdBQUcsRUFBRSxFQUFFO0lBQ1BDLElBQUFBLFlBQVksRUFBRTtPQUNqQjtJQUNEbEUsRUFBQUEsUUFBUSxFQUFFO0lBQ05rRCxJQUFBQSxLQUFLLEVBQUUsRUFBRTtJQUNUaUIsSUFBQUEsTUFBTSxFQUFFLEVBQUU7SUFDVlIsSUFBQUEsWUFBWSxFQUFFLEtBQUs7UUFDbkJMLGVBQWUsRUFBRXZGLEdBQUMsQ0FBQ00sS0FBSztJQUN4QnFFLElBQUFBLFNBQVMsRUFBRSxDQUFBLFFBQUEsRUFBVzNFLEdBQUMsQ0FBQ00sS0FBSyxDQUFBO09BQ2hDO0lBQ0Q0QixFQUFBQSxTQUFTLEVBQUU7SUFDUG1FLElBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLElBQUFBLFVBQVUsRUFBRSxHQUFHO1FBQ2Y3RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNhLEtBQUs7SUFDZDBGLElBQUFBLGFBQWEsRUFBRSxXQUFXO0lBQzFCQyxJQUFBQSxhQUFhLEVBQUU7T0FDbEI7SUFDRHBFLEVBQUFBLE9BQU8sRUFBRTtJQUNMaUUsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsSUFBQUEsVUFBVSxFQUFFLEdBQUc7UUFDZjdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUNkOEYsSUFBQUEsVUFBVSxFQUFFLEdBQUc7SUFDZk4sSUFBQUEsWUFBWSxFQUFFLEVBQUU7SUFDaEJLLElBQUFBLGFBQWEsRUFBRTtPQUNsQjtJQUNEbkUsRUFBQUEsVUFBVSxFQUFFO0lBQ1JnRSxJQUFBQSxRQUFRLEVBQUUsRUFBRTtRQUNaNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDYSxLQUFLO0lBQ2Q0RixJQUFBQSxVQUFVLEVBQUUsSUFBSTtJQUNoQk4sSUFBQUEsWUFBWSxFQUFFO09BQ2pCO0lBQ0Q3RCxFQUFBQSxRQUFRLEVBQUU7SUFDTjhDLElBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZzQixJQUFBQSxRQUFRLEVBQUUsTUFBTTtJQUNoQlIsSUFBQUEsR0FBRyxFQUFFLENBQUM7SUFDTkMsSUFBQUEsWUFBWSxFQUFFO09BQ2pCO0lBQ0Q1RCxFQUFBQSxTQUFTLEVBQUU7SUFDUDhELElBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLElBQUFBLFVBQVUsRUFBRSxHQUFHO0lBQ2ZiLElBQUFBLE9BQU8sRUFBRSxVQUFVO0lBQ25CRyxJQUFBQSxZQUFZLEVBQUUsRUFBRTtJQUNoQnZGLElBQUFBLE1BQU0sRUFBRSxXQUFXO0lBQ25CbUcsSUFBQUEsYUFBYSxFQUFFLFFBQVE7SUFDdkJHLElBQUFBLE9BQU8sRUFBRTtPQUNaO0lBQ0RqRSxFQUFBQSxJQUFJLEVBQUU7SUFDRnVELElBQUFBLFFBQVEsRUFBRSxVQUFVO0lBQ3BCVyxJQUFBQSxNQUFNLEVBQUUsRUFBRTtJQUNWbkQsSUFBQUEsS0FBSyxFQUFFLEVBQUU7SUFDVDBCLElBQUFBLEtBQUssRUFBRSxHQUFHO0lBQ1ZpQixJQUFBQSxNQUFNLEVBQUUsRUFBRTtJQUNWTyxJQUFBQSxPQUFPLEVBQUUsR0FBRztJQUNaRSxJQUFBQSxhQUFhLEVBQUU7T0FDbEI7SUFDRHBELEVBQUFBLEtBQUssRUFBRTtJQUNIcUMsSUFBQUEsSUFBSSxFQUFFLENBQUM7UUFDUFAsZUFBZSxFQUFFdkYsR0FBQyxDQUFDRSxNQUFNO0lBQ3pCdUYsSUFBQUEsT0FBTyxFQUFFLFdBQVc7SUFDcEJMLElBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZZLElBQUFBLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCVixJQUFBQSxjQUFjLEVBQUU7T0FDbkI7SUFDRDVCLEVBQUFBLFNBQVMsRUFBRTtJQUNQMkMsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsSUFBQUEsVUFBVSxFQUFFLEdBQUc7UUFDZjdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUNkd0YsSUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZkssSUFBQUEsYUFBYSxFQUFFO09BQ2xCO0lBQ0Q3QyxFQUFBQSxPQUFPLEVBQUU7SUFDTDBDLElBQUFBLFFBQVEsRUFBRSxFQUFFO1FBQ1o1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNjLEtBQUs7SUFDZHFGLElBQUFBLFlBQVksRUFBRTtPQUNqQjtJQUNEdkMsRUFBQUEsUUFBUSxFQUFFO0lBQ053QixJQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmQyxJQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUNwQmEsSUFBQUEsR0FBRyxFQUFFLENBQUM7SUFDTlQsSUFBQUEsT0FBTyxFQUFFLFdBQVc7SUFDcEJGLElBQUFBLGVBQWUsRUFBRSxxQkFBcUI7SUFDdENsRixJQUFBQSxNQUFNLEVBQUUsQ0FBQSw2QkFBQSxDQUErQjtJQUN2Q3VGLElBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLElBQUFBLFFBQVEsRUFBRSxFQUFFO1FBQ1o1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNVLEtBQUs7SUFDZHlGLElBQUFBLFlBQVksRUFBRTtPQUNqQjtJQUNEdEMsRUFBQUEsUUFBUSxFQUFFO0lBQ053QyxJQUFBQSxRQUFRLEVBQUUsQ0FBQztJQUNYSSxJQUFBQSxVQUFVLEVBQUUsQ0FBQztRQUNiaEUsS0FBSyxFQUFFekMsR0FBQyxDQUFDVTtPQUNaO0lBQ0RvRCxFQUFBQSxLQUFLLEVBQUU7SUFDSHFDLElBQUFBLFlBQVksRUFBRSxFQUFFO0lBQ2hCZixJQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmWSxJQUFBQSxhQUFhLEVBQUUsUUFBUTtJQUN2QkUsSUFBQUEsR0FBRyxFQUFFO09BQ1I7SUFDRGxDLEVBQUFBLEtBQUssRUFBRTtJQUNIcUMsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsSUFBQUEsVUFBVSxFQUFFLEdBQUc7UUFDZjdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2E7T0FDWjtJQUNEMEQsRUFBQUEsS0FBSyxFQUFFO0lBQ0hZLElBQUFBLEtBQUssRUFBRSxNQUFNO0lBQ2JNLElBQUFBLE9BQU8sRUFBRSxXQUFXO1FBQ3BCRixlQUFlLEVBQUV2RixHQUFDLENBQUNJLE9BQU87UUFDMUJxQyxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFDZE4sSUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQy9CdUYsSUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlMsSUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZkMsSUFBQUEsVUFBVSxFQUFFLGdEQUFnRDtJQUM1RHJCLElBQUFBLFNBQVMsRUFBRSxZQUFZO1FBQ3ZCc0IsbUJBQW1CLEVBQUVoSCxHQUFDLENBQUNXO09BQzFCO0lBQ0RrRSxFQUFBQSxHQUFHLEVBQUU7SUFDRE0sSUFBQUEsS0FBSyxFQUFFLE1BQU07SUFDYk0sSUFBQUEsT0FBTyxFQUFFLE1BQU07UUFDZlYsVUFBVSxFQUFFLDJCQUEyQi9FLEdBQUMsQ0FBQ00sS0FBSyxDQUFBLEVBQUEsRUFBS04sR0FBQyxDQUFDTyxTQUFTLENBQUEsQ0FBQSxDQUFHO1FBQ2pFa0MsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQ2ROLElBQUFBLE1BQU0sRUFBRSxNQUFNO0lBQ2R1RixJQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxJQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxJQUFBQSxVQUFVLEVBQUUsR0FBRztJQUNmVyxJQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsSUFBQUEsU0FBUyxFQUFFLENBQUM7SUFDWlYsSUFBQUEsYUFBYSxFQUFFLFFBQVE7SUFDdkJPLElBQUFBLFVBQVUsRUFBRTtPQUNmO0lBQ0Q5QixFQUFBQSxJQUFJLEVBQUU7SUFDRmlDLElBQUFBLFNBQVMsRUFBRSxFQUFFO0lBQ2JiLElBQUFBLFFBQVEsRUFBRSxFQUFFO1FBQ1o1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNjLEtBQUs7SUFDZHFHLElBQUFBLFNBQVMsRUFBRSxRQUFRO0lBQ25CVixJQUFBQSxVQUFVLEVBQUU7SUFDaEI7SUFDSixDQUFDOztJQ3JQRCxNQUFNekcsR0FBQyxHQUFHO0lBQ05DLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCRSxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFBQUEsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsU0FBUyxFQUFFLFNBQVM7SUFDcEJDLEVBQUFBLElBQUksRUFBRSxTQUFTO0lBQ2ZDLEVBQ0FDLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQ0QsTUFBTXNHLGVBQWEsR0FBRyxDQUNsQjtJQUFFQyxFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVEsQ0FBQyxFQUNqQztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLE9BQU87SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFRLENBQUMsRUFDbEM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBTyxDQUFDLENBQ25DO0lBQ0QsTUFBTXNELGdCQUFjLEdBQUcsQ0FDbkI7SUFBRUQsRUFBQUEsS0FBSyxFQUFFLFFBQVE7SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFlLENBQUMsRUFDMUM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxVQUFVO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBc0IsQ0FBQyxFQUNuRDtJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFrQixDQUFDLENBQzlDO0lBQ0QsTUFBTXVELFlBQVUsR0FBRyxDQUNmO0lBQUVGLEVBQUFBLEtBQUssRUFBRSxVQUFVO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBVyxDQUFDLEVBQ3hDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVUsQ0FBQyxFQUN0QztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLFFBQVE7SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFTLENBQUMsRUFDcEM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxRQUFRO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBUyxDQUFDLEVBQ3BDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsUUFBUTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVMsQ0FBQyxFQUNwQztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLE9BQU87SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFTLENBQUMsQ0FDdEM7SUFDRCxNQUFNd0QsWUFBVSxHQUFHO0lBQ2YvQixFQUFBQSxPQUFPLEVBQUUsVUFBVTtNQUNuQlYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDSSxPQUFPO01BQ3JCcUMsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQ2ROLEVBQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUMvQnVGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pTLEVBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZwQixFQUFBQSxTQUFTLEVBQUU7SUFDZixDQUFDO0lBQ0QsTUFBTStCLGFBQVcsR0FBRztJQUNoQmhDLEVBQUFBLE9BQU8sRUFBRSxVQUFVO01BQ25CVixVQUFVLEVBQUUvRSxHQUFDLENBQUNJLE9BQU87TUFDckJxQyxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFDZE4sRUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQy9CdUYsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlMsRUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZkcsRUFBQUEsTUFBTSxFQUFFO0lBQ1osQ0FBQztJQUNELE1BQU1TLFdBQVMsR0FBRztJQUNkM0MsRUFBQUEsVUFBVSxFQUFFLE1BQU07SUFDbEIxRSxFQUFBQSxNQUFNLEVBQUUsTUFBTTtNQUNkb0MsS0FBSyxFQUFFekMsR0FBQyxDQUFDVSxLQUFLO0lBQ2QyRixFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaWSxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQnhCLEVBQUFBLE9BQU8sRUFBRSxTQUFTO0lBQ2xCRyxFQUFBQSxZQUFZLEVBQUU7SUFDbEIsQ0FBQztJQUNELE1BQU0rQixRQUFNLEdBQUc7SUFDWGxDLEVBQUFBLE9BQU8sRUFBRSxVQUFVO0lBQ25CVixFQUFBQSxVQUFVLEVBQUUsYUFBYTtNQUN6QnRDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ00sS0FBSztJQUNkRCxFQUFBQSxNQUFNLEVBQUUsQ0FBQSxXQUFBLEVBQWNMLEdBQUMsQ0FBQ00sS0FBSyxDQUFBLENBQUU7SUFDL0JzRixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaWSxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFBQUEsU0FBUyxFQUFFO0lBQ2YsQ0FBQztJQUNELFNBQVNVLFdBQVNBLENBQUM7TUFBRUMsTUFBTTtNQUFFQyxRQUFRO0lBQUVDLEVBQUFBO0lBQVUsQ0FBQyxFQUFFO0lBQ2hELEVBQUEsb0JBQVF0RyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRUMsTUFBQUEsVUFBVSxFQUFFLFFBQVE7SUFBRWEsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRUMsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQzVHMUUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLE1BQU07SUFBRUMsSUFBQUEsV0FBVyxFQUFFLGlGQUFpRjtRQUFFaUQsS0FBSyxFQUFFUSxNQUFNLENBQUNHLFdBQVc7SUFBRUYsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHRCxNQUFNO0lBQUVHLE1BQUFBLFdBQVcsRUFBRXZELENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkM7SUFBTSxLQUFDLENBQUM7SUFBRTFGLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZGLFlBQVU7SUFBRTFCLE1BQUFBLElBQUksRUFBRTtJQUFFO0lBQUUsR0FBQyxDQUFDLGVBQ2pSckUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO1VBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNhLEtBQUs7SUFBRXVFLE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVlLE1BQUFBLE1BQU0sRUFBRSxTQUFTO0lBQUVnQixNQUFBQSxVQUFVLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDNUp4RyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsVUFBVTtRQUFFK0QsT0FBTyxFQUFFTCxNQUFNLENBQUNNLFVBQVU7SUFBRUwsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHRCxNQUFNO0lBQUVNLE1BQUFBLFVBQVUsRUFBRTFELENBQUMsQ0FBQ0MsTUFBTSxDQUFDd0Q7SUFBUSxLQUFDLENBQUM7SUFBRXZHLElBQUFBLEtBQUssRUFBRTtVQUFFeUcsV0FBVyxFQUFFcEksR0FBQyxDQUFDTTtJQUFNO09BQUcsQ0FBQyxFQUNyTCxnQ0FBZ0MsQ0FBQyxlQUNyQ21CLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRTJHLElBQUFBLE9BQU8sRUFBRU4sUUFBUTtJQUFFcEcsSUFBQUEsS0FBSyxFQUFFK0Y7T0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pGO0lBQ0EsU0FBU1ksZUFBYUEsQ0FBQztNQUFFQyxRQUFRO01BQUVULFFBQVE7SUFBRUMsRUFBQUE7SUFBVSxDQUFDLEVBQUU7TUFDdEQsTUFBTVMsU0FBUyxHQUFHQSxNQUFNO0lBQ3BCVixJQUFBQSxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUdTLFFBQVE7SUFBRUUsTUFBQUEsT0FBTyxFQUFFLENBQUMsR0FBR0YsUUFBUSxDQUFDRSxPQUFPLEVBQUU7SUFBRVQsUUFBQUEsV0FBVyxFQUFFLEVBQUU7SUFBRUcsUUFBQUEsVUFBVSxFQUFFO1dBQU87SUFBRSxLQUFDLENBQUM7TUFDckcsQ0FBQztJQUNELEVBQUEsTUFBTU8sWUFBWSxHQUFHQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBSztJQUMzQixJQUFBLE1BQU1DLElBQUksR0FBRyxDQUFDLEdBQUdOLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDO0lBQ2xDSSxJQUFBQSxJQUFJLENBQUNGLENBQUMsQ0FBQyxHQUFHQyxDQUFDO0lBQ1hkLElBQUFBLFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBR1MsUUFBUTtJQUFFRSxNQUFBQSxPQUFPLEVBQUVJO0lBQUssS0FBQyxDQUFDO01BQzVDLENBQUM7TUFDRCxNQUFNQyxZQUFZLEdBQUlILENBQUMsSUFBSztJQUN4QmIsSUFBQUEsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHUyxRQUFRO0lBQUVFLE1BQUFBLE9BQU8sRUFBRUYsUUFBUSxDQUFDRSxPQUFPLENBQUNNLE1BQU0sQ0FBQyxDQUFDL0YsQ0FBQyxFQUFFZ0csR0FBRyxLQUFLQSxHQUFHLEtBQUtMLENBQUM7SUFBRSxLQUFDLENBQUM7TUFDdEYsQ0FBQztJQUNELEVBQUEsb0JBQVFsSCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFd0UsTUFBQUEsWUFBWSxFQUFFLEVBQUU7SUFBRVYsTUFBQUEsT0FBTyxFQUFFLEVBQUU7SUFBRVYsTUFBQUEsVUFBVSxFQUFFLFNBQVM7SUFBRTFFLE1BQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUFFdUYsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQ3BKbkUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVDLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUNwRzFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSwyRUFBMkU7UUFBRWlELEtBQUssRUFBRWtCLFFBQVEsQ0FBQ1UsYUFBYTtJQUFFbkIsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHUyxRQUFRO0lBQUVVLE1BQUFBLGFBQWEsRUFBRXhFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkM7SUFBTSxLQUFDLENBQUM7SUFBRTFGLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZGLFlBQVU7SUFBRTFCLE1BQUFBLElBQUksRUFBRTtJQUFFO0lBQUUsR0FBQyxDQUFDLGVBQ25SckUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtRQUFFMkYsS0FBSyxFQUFFa0IsUUFBUSxDQUFDVyxhQUFhO0lBQUVwQixJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUdTLFFBQVE7SUFBRVcsTUFBQUEsYUFBYSxFQUFFekUsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFOEY7SUFBWSxHQUFDLEVBQUVILGdCQUFjLENBQUM2QixHQUFHLENBQUNDLEVBQUUsa0JBQUszSCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUV5QixHQUFHLEVBQUVpRyxFQUFFLENBQUMvQixLQUFLO1FBQUVBLEtBQUssRUFBRStCLEVBQUUsQ0FBQy9CO0lBQU0sR0FBQyxFQUFFK0IsRUFBRSxDQUFDcEYsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQ3RRdkMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkcsSUFBQUEsT0FBTyxFQUFFTixRQUFRO0lBQUVwRyxJQUFBQSxLQUFLLEVBQUUrRjtJQUFVLEdBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUNyRmEsUUFBUSxDQUFDVyxhQUFhLEtBQUssTUFBTSxrQkFBS3pILHNCQUFLLENBQUNDLGFBQWEsQ0FBQ0Qsc0JBQUssQ0FBQzRILFFBQVEsRUFBRSxJQUFJLEVBQzFFZCxRQUFRLENBQUNFLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLENBQUNHLEdBQUcsRUFBRUMsRUFBRSxtQkFBTTlILHNCQUFLLENBQUNDLGFBQWEsQ0FBQ2tHLFdBQVMsRUFBRTtJQUFFekUsSUFBQUEsR0FBRyxFQUFFb0csRUFBRTtJQUFFMUIsSUFBQUEsTUFBTSxFQUFFeUIsR0FBRztRQUFFeEIsUUFBUSxFQUFFYyxDQUFDLElBQUlGLFlBQVksQ0FBQ2EsRUFBRSxFQUFFWCxDQUFDLENBQUM7SUFBRWIsSUFBQUEsUUFBUSxFQUFFQSxNQUFNZSxZQUFZLENBQUNTLEVBQUU7T0FBRyxDQUFDLENBQUMsQ0FBQyxlQUNuSzlILHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRTJHLElBQUFBLE9BQU8sRUFBRUcsU0FBUztJQUFFN0csSUFBQUEsS0FBSyxFQUFFZ0c7SUFBTyxHQUFDLEVBQUUsbUZBQW1GLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEs7SUFDQSxTQUFTNkIsV0FBU0EsQ0FBQztNQUFFQyxNQUFNO01BQUUzQixRQUFRO0lBQUVDLEVBQUFBO0lBQVUsQ0FBQyxFQUFFO01BQ2hELE1BQU0yQixXQUFXLEdBQUdBLE1BQU07SUFDdEI1QixJQUFBQSxRQUFRLENBQUM7SUFDTCxNQUFBLEdBQUcyQixNQUFNO1VBQ1RFLFNBQVMsRUFBRSxDQUFDLElBQUlGLE1BQU0sQ0FBQ0UsU0FBUyxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQUVWLFFBQUFBLGFBQWEsRUFBRSxFQUFFO0lBQUVDLFFBQUFBLGFBQWEsRUFBRSxRQUFRO0lBQUVULFFBQUFBLE9BQU8sRUFBRSxDQUFDO0lBQUVULFVBQUFBLFdBQVcsRUFBRSxFQUFFO0lBQUVHLFVBQUFBLFVBQVUsRUFBRTthQUFPO1dBQUc7SUFDOUksS0FBQyxDQUFDO01BQ04sQ0FBQztJQUNELEVBQUEsTUFBTXlCLGNBQWMsR0FBR0EsQ0FBQ2pCLENBQUMsRUFBRWtCLENBQUMsS0FBSztRQUM3QixNQUFNaEIsSUFBSSxHQUFHLENBQUMsSUFBSVksTUFBTSxDQUFDRSxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUNkLElBQUFBLElBQUksQ0FBQ0YsQ0FBQyxDQUFDLEdBQUdrQixDQUFDO0lBQ1gvQixJQUFBQSxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUcyQixNQUFNO0lBQUVFLE1BQUFBLFNBQVMsRUFBRWQ7SUFBSyxLQUFDLENBQUM7TUFDNUMsQ0FBQztNQUNELE1BQU1pQixjQUFjLEdBQUluQixDQUFDLElBQUs7SUFDMUJiLElBQUFBLFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzJCLE1BQU07SUFBRUUsTUFBQUEsU0FBUyxFQUFFLENBQUNGLE1BQU0sQ0FBQ0UsU0FBUyxJQUFJLEVBQUUsRUFBRVosTUFBTSxDQUFDLENBQUMvRixDQUFDLEVBQUVnRyxHQUFHLEtBQUtBLEdBQUcsS0FBS0wsQ0FBQztJQUFFLEtBQUMsQ0FBQztNQUM5RixDQUFDO0lBQ0QsRUFBQSxNQUFNb0IsTUFBTSxHQUFHTixNQUFNLENBQUNPLFlBQVksS0FBSyxNQUFNO0lBQzdDLEVBQUEsTUFBTUMsT0FBTyxHQUFHUixNQUFNLENBQUNPLFlBQVksS0FBSyxPQUFPO0lBQy9DLEVBQUEsTUFBTUUsTUFBTSxHQUFHVCxNQUFNLENBQUNPLFlBQVksS0FBSyxNQUFNO0lBQzdDLEVBQUEsb0JBQVF2SSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFd0UsTUFBQUEsWUFBWSxFQUFFLENBQUM7SUFBRVYsTUFBQUEsT0FBTyxFQUFFLFdBQVc7VUFBRVYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDRyxNQUFNO0lBQUVFLE1BQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUFFdUYsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQzNKbkUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVDLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUNwRzFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSxpRkFBaUY7UUFBRWlELEtBQUssRUFBRW9DLE1BQU0sQ0FBQ1UsS0FBSztJQUFFckMsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHMkIsTUFBTTtJQUFFVSxNQUFBQSxLQUFLLEVBQUUxRixDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc2RixZQUFVO0lBQUUxQixNQUFBQSxJQUFJLEVBQUU7SUFBRTtJQUFFLEdBQUMsQ0FBQyxlQUNyUXJFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFBRTJGLEtBQUssRUFBRW9DLE1BQU0sQ0FBQ08sWUFBWTtJQUFFbEMsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHMkIsTUFBTTtJQUFFTyxNQUFBQSxZQUFZLEVBQUV2RixDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU4RjtJQUFZLEdBQUMsRUFBRUwsZUFBYSxDQUFDK0IsR0FBRyxDQUFDaUIsRUFBRSxrQkFBSzNJLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFBRXlCLEdBQUcsRUFBRWlILEVBQUUsQ0FBQy9DLEtBQUs7UUFBRUEsS0FBSyxFQUFFK0MsRUFBRSxDQUFDL0M7SUFBTSxHQUFDLEVBQUUrQyxFQUFFLENBQUNwRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFDL1B2QyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRyxJQUFBQSxPQUFPLEVBQUVOLFFBQVE7SUFBRXBHLElBQUFBLEtBQUssRUFBRStGO0lBQVUsR0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQ3JGdUMsT0FBTyxrQkFBS3hJLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSx3R0FBd0c7SUFBRWlELElBQUFBLEtBQUssRUFBRW9DLE1BQU0sQ0FBQ1ksU0FBUyxJQUFJLEVBQUU7SUFBRXZDLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzJCLE1BQU07SUFBRVksTUFBQUEsU0FBUyxFQUFFNUYsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFckMsTUFBQUEsS0FBSyxFQUFFO0lBQU87T0FBRyxDQUFDLENBQUMsRUFDN1QrRSxNQUFNLGtCQUFLekksc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsRUFBRTtJQUFFMEMsSUFBQUEsV0FBVyxFQUFFLG9KQUFvSjtJQUFFaUQsSUFBQUEsS0FBSyxFQUFFb0MsTUFBTSxDQUFDYSxZQUFZLElBQUksRUFBRTtJQUFFeEMsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHMkIsTUFBTTtJQUFFYSxNQUFBQSxZQUFZLEVBQUU3RixDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUVrRCxJQUFBQSxJQUFJLEVBQUUsQ0FBQztJQUFFNUksSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFckMsTUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRXFGLE1BQUFBLE1BQU0sRUFBRTtJQUFXO09BQUcsQ0FBQyxDQUFDLEVBQ2hZVCxNQUFNLGtCQUFLdEksc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXVGLE1BQUFBLFNBQVMsRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUM3RHpGLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSxpRkFBaUY7SUFBRWlELElBQUFBLEtBQUssRUFBRW9DLE1BQU0sQ0FBQ2dCLFVBQVUsSUFBSSxFQUFFO0lBQUUzQyxJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUcyQixNQUFNO0lBQUVnQixNQUFBQSxVQUFVLEVBQUVoRyxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc2RixZQUFVO0lBQUVyQyxNQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUFFZ0IsTUFBQUEsWUFBWSxFQUFFO0lBQUU7T0FBRyxDQUFDLEVBQzVTLENBQUNzRCxNQUFNLENBQUNFLFNBQVMsSUFBSSxFQUFFLEVBQUVSLEdBQUcsQ0FBQyxDQUFDVSxDQUFDLEVBQUVhLEVBQUUsbUJBQU1qSixzQkFBSyxDQUFDQyxhQUFhLENBQUM0RyxlQUFhLEVBQUU7SUFBRW5GLElBQUFBLEdBQUcsRUFBRXVILEVBQUU7SUFBRW5DLElBQUFBLFFBQVEsRUFBRXNCLENBQUM7UUFBRS9CLFFBQVEsRUFBRWMsQ0FBQyxJQUFJZ0IsY0FBYyxDQUFDYyxFQUFFLEVBQUU5QixDQUFDLENBQUM7SUFBRWIsSUFBQUEsUUFBUSxFQUFFQSxNQUFNK0IsY0FBYyxDQUFDWSxFQUFFO09BQUcsQ0FBQyxDQUFDLENBQUMsZUFDakxqSixzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRyxJQUFBQSxPQUFPLEVBQUVxQixXQUFXO0lBQUUvSCxJQUFBQSxLQUFLLEVBQUVnRztJQUFPLEdBQUMsRUFBRSx3Q0FBd0MsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvSDtJQUNBLFNBQVNnRCxjQUFZQSxDQUFDO01BQUVDLE9BQU87TUFBRUMsS0FBSztNQUFFL0MsUUFBUTtJQUFFQyxFQUFBQTtJQUFVLENBQUMsRUFBRTtNQUMzRCxNQUFNK0MsU0FBUyxHQUFHQSxNQUFNO0lBQ3BCaEQsSUFBQUEsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHOEMsT0FBTztJQUFFRyxNQUFBQSxPQUFPLEVBQUUsQ0FBQyxHQUFHSCxPQUFPLENBQUNHLE9BQU8sRUFBRTtJQUFFWixRQUFBQSxLQUFLLEVBQUUsRUFBRTtJQUFFSCxRQUFBQSxZQUFZLEVBQUU7V0FBUTtJQUFFLEtBQUMsQ0FBQztNQUNoRyxDQUFDO0lBQ0QsRUFBQSxNQUFNZ0IsWUFBWSxHQUFHQSxDQUFDQyxFQUFFLEVBQUV4QixNQUFNLEtBQUs7SUFDakMsSUFBQSxNQUFNWixJQUFJLEdBQUcsQ0FBQyxHQUFHK0IsT0FBTyxDQUFDRyxPQUFPLENBQUM7SUFDakNsQyxJQUFBQSxJQUFJLENBQUNvQyxFQUFFLENBQUMsR0FBR3hCLE1BQU07SUFDakIzQixJQUFBQSxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUc4QyxPQUFPO0lBQUVHLE1BQUFBLE9BQU8sRUFBRWxDO0lBQUssS0FBQyxDQUFDO01BQzNDLENBQUM7TUFDRCxNQUFNcUMsWUFBWSxHQUFJRCxFQUFFLElBQUs7SUFDekJuRCxJQUFBQSxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUc4QyxPQUFPO0lBQUVHLE1BQUFBLE9BQU8sRUFBRUgsT0FBTyxDQUFDRyxPQUFPLENBQUNoQyxNQUFNLENBQUMsQ0FBQy9GLENBQUMsRUFBRTJGLENBQUMsS0FBS0EsQ0FBQyxLQUFLc0MsRUFBRTtJQUFFLEtBQUMsQ0FBQztNQUNqRixDQUFDO0lBQ0QsRUFBQSxvQkFBUXhKLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV3RSxNQUFBQSxZQUFZLEVBQUUsRUFBRTtJQUFFVixNQUFBQSxPQUFPLEVBQUUsRUFBRTtVQUFFVixVQUFVLEVBQUUvRSxHQUFDLENBQUNHLE1BQU07SUFBRUUsTUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQUV1RixNQUFBQSxZQUFZLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDbkpuRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRUMsTUFBQUEsVUFBVSxFQUFFLFFBQVE7SUFBRWEsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRUMsTUFBQUEsWUFBWSxFQUFFO0lBQUc7SUFBRSxHQUFDLGVBQ3JHMUUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxHQUFHO1VBQUU3RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNRO0lBQUs7SUFBRSxHQUFDLEVBQ25GLHVDQUF1QyxFQUN2Q3FLLEtBQUssR0FBRyxDQUFDLENBQUMsZUFDZHBKLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSw2RkFBNkY7UUFBRWlELEtBQUssRUFBRXVELE9BQU8sQ0FBQ1QsS0FBSztJQUFFckMsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHOEMsT0FBTztJQUFFVCxNQUFBQSxLQUFLLEVBQUUxRixDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc2RixZQUFVO0lBQUUxQixNQUFBQSxJQUFJLEVBQUU7SUFBRTtJQUFFLEdBQUMsQ0FBQyxlQUNuUnJFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRTJHLElBQUFBLE9BQU8sRUFBRU4sUUFBUTtJQUFFcEcsSUFBQUEsS0FBSyxFQUFFK0Y7T0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQ3JGa0QsT0FBTyxDQUFDRyxPQUFPLENBQUM1QixHQUFHLENBQUMsQ0FBQ00sTUFBTSxFQUFFd0IsRUFBRSxtQkFBTXhKLHNCQUFLLENBQUNDLGFBQWEsQ0FBQzhILFdBQVMsRUFBRTtJQUFFckcsSUFBQUEsR0FBRyxFQUFFOEgsRUFBRTtJQUFFeEIsSUFBQUEsTUFBTSxFQUFFQSxNQUFNO1FBQUUzQixRQUFRLEVBQUVxRCxDQUFDLElBQUlILFlBQVksQ0FBQ0MsRUFBRSxFQUFFRSxDQUFDLENBQUM7SUFBRXBELElBQUFBLFFBQVEsRUFBRUEsTUFBTW1ELFlBQVksQ0FBQ0QsRUFBRTtPQUFHLENBQUMsQ0FBQyxDQUFDLGVBQ3hLeEosc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkcsSUFBQUEsT0FBTyxFQUFFeUMsU0FBUztJQUFFbkosSUFBQUEsS0FBSyxFQUFFZ0c7T0FBUSxFQUFFLDRCQUE0QixDQUFDLENBQUM7SUFDM0c7SUFDZSxTQUFTeUQsWUFBWUEsQ0FBQ0MsS0FBSyxFQUFFO01BQ3hDLE1BQU0sQ0FBQ2xCLEtBQUssRUFBRW1CLFFBQVEsQ0FBQyxHQUFHOUosY0FBUSxDQUFDLEVBQUUsQ0FBQztNQUN0QyxNQUFNLENBQUMrSixXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHaEssY0FBUSxDQUFDLEVBQUUsQ0FBQztNQUNsRCxNQUFNLENBQUNpSyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbEssY0FBUSxDQUFDLFVBQVUsQ0FBQztNQUNwRCxNQUFNLENBQUNtSyxXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHcEssY0FBUSxDQUFDLElBQUksQ0FBQztNQUNwRCxNQUFNLENBQUNxSyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdEssY0FBUSxDQUFDLEVBQUUsQ0FBQztNQUM1QyxNQUFNLENBQUN1SyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHeEssY0FBUSxDQUFDLENBQ3JDO0lBQUUySSxJQUFBQSxLQUFLLEVBQUUsRUFBRTtJQUFFWSxJQUFBQSxPQUFPLEVBQUUsQ0FBQztJQUFFWixNQUFBQSxLQUFLLEVBQUUsRUFBRTtJQUFFSCxNQUFBQSxZQUFZLEVBQUU7U0FBUztJQUFFLEdBQUMsQ0FDakUsQ0FBQztNQUNGLE1BQU0sQ0FBQ2lDLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUcxSyxjQUFRLENBQUMsS0FBSyxDQUFDO01BQ25ELE1BQU0ySyxVQUFVLEdBQUdBLE1BQU07SUFDckJILElBQUFBLFdBQVcsQ0FBQyxDQUFDLEdBQUdELFFBQVEsRUFBRTtJQUFFNUIsTUFBQUEsS0FBSyxFQUFFLEVBQUU7SUFBRVksTUFBQUEsT0FBTyxFQUFFLENBQUM7SUFBRVosUUFBQUEsS0FBSyxFQUFFLEVBQUU7SUFBRUgsUUFBQUEsWUFBWSxFQUFFO1dBQVE7SUFBRSxLQUFDLENBQUMsQ0FBQztNQUM3RixDQUFDO0lBQ0QsRUFBQSxNQUFNb0MsYUFBYSxHQUFHQSxDQUFDekQsQ0FBQyxFQUFFaUMsT0FBTyxLQUFLO0lBQ2xDLElBQUEsTUFBTS9CLElBQUksR0FBRyxDQUFDLEdBQUdrRCxRQUFRLENBQUM7SUFDMUJsRCxJQUFBQSxJQUFJLENBQUNGLENBQUMsQ0FBQyxHQUFHaUMsT0FBTztRQUNqQm9CLFdBQVcsQ0FBQ25ELElBQUksQ0FBQztNQUNyQixDQUFDO01BQ0QsTUFBTXdELGFBQWEsR0FBSTFELENBQUMsSUFBSztJQUN6QnFELElBQUFBLFdBQVcsQ0FBQ0QsUUFBUSxDQUFDaEQsTUFBTSxDQUFDLENBQUMvRixDQUFDLEVBQUVnRyxHQUFHLEtBQUtBLEdBQUcsS0FBS0wsQ0FBQyxDQUFDLENBQUM7TUFDdkQsQ0FBQztNQUNELE1BQU0yRCxZQUFZLEdBQUdQLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDLENBQUMzSyxDQUFDLEVBQUU0SyxHQUFHLEtBQUs1SyxDQUFDLEdBQUc0SyxHQUFHLENBQUN6QixPQUFPLENBQUNoSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLEVBQUEsTUFBTTBKLE1BQU0sR0FBR3ZMLE1BQU0sQ0FBQ3dMLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7SUFDcEYsRUFBQSxNQUFNQyxZQUFZLEdBQUcsTUFBT3BJLENBQUMsSUFBSztRQUM5QkEsQ0FBQyxDQUFDcUksY0FBYyxFQUFFO1FBQ2xCWixhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25CLElBQUk7SUFDQSxNQUFBLE1BQU1hLElBQUksR0FBR3RJLENBQUMsQ0FBQ0MsTUFBTTtJQUNyQixNQUFBLE1BQU1zSSxFQUFFLEdBQUcsSUFBSUMsUUFBUSxDQUFDRixJQUFJLENBQUM7SUFDN0IsTUFBQSxNQUFNRyxNQUFNLEdBQUcsSUFBSUMsZUFBZSxFQUFFO0lBQ3BDLE1BQUEsS0FBSyxNQUFNLENBQUNoSyxHQUFHLEVBQUVpSyxHQUFHLENBQUMsSUFBSUosRUFBRSxDQUFDSyxPQUFPLEVBQUUsRUFBRTtJQUNuQ0gsUUFBQUEsTUFBTSxDQUFDSSxNQUFNLENBQUNuSyxHQUFHLEVBQUVpSyxHQUFHLENBQUM7SUFDM0IsTUFBQTtJQUNBLE1BQUEsTUFBTUcsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ2YsTUFBTSxFQUFFO0lBQzVCakosUUFBQUEsTUFBTSxFQUFFLE1BQU07SUFDZGlLLFFBQUFBLE9BQU8sRUFBRTtJQUFFLFVBQUEsY0FBYyxFQUFFO2FBQXFDO0lBQ2hFQyxRQUFBQSxJQUFJLEVBQUVSO0lBQ1YsT0FBQyxDQUFDO0lBQ0YsTUFBQSxNQUFNUyxJQUFJLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxJQUFJLEVBQUU7VUFDN0IsSUFBSUQsSUFBSSxDQUFDRSxXQUFXLEVBQUU7SUFDbEIzTSxRQUFBQSxNQUFNLENBQUN3TCxRQUFRLENBQUNvQixJQUFJLEdBQUdILElBQUksQ0FBQ0UsV0FBVztJQUMzQyxNQUFBLENBQUMsTUFDSTtZQUNERSxLQUFLLENBQUNKLElBQUksQ0FBQ0ssTUFBTSxFQUFFQyxPQUFPLElBQUksMkJBQTJCLENBQUM7SUFDOUQsTUFBQTtRQUNKLENBQUMsQ0FDRCxPQUFPQyxHQUFHLEVBQUU7SUFDUkgsTUFBQUEsS0FBSyxDQUFDLENBQUEsUUFBQSxFQUFXRyxHQUFHLENBQUNELE9BQU8sRUFBRSxDQUFDO0lBQ25DLElBQUEsQ0FBQyxTQUNPO1VBQ0ovQixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3hCLElBQUE7TUFDSixDQUFDO0lBQ0QsRUFBQSxvQkFBUXpLLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUU4RCxNQUFBQSxPQUFPLEVBQUUsRUFBRTtJQUFFUCxNQUFBQSxTQUFTLEVBQUUsT0FBTztVQUFFSyxlQUFlLEVBQUV2RixHQUFDLENBQUNDLE1BQU07VUFBRXdDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUFFNkUsTUFBQUEsVUFBVSxFQUFFO0lBQXVCO0lBQUUsR0FBQyxlQUM1Si9ELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRThCLElBQUFBLE1BQU0sRUFBRSxNQUFNO0lBQUUySyxJQUFBQSxRQUFRLEVBQUV0QixZQUFZO0lBQUVsTCxJQUFBQSxLQUFLLEVBQUU7SUFBRWdFLE1BQUFBLFFBQVEsRUFBRSxHQUFHO0lBQUV5SSxNQUFBQSxNQUFNLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDOUczTSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeU0sTUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFBRS9ILE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLFVBQVUsRUFBRTtJQUFJO09BQUcsRUFBRSxpRkFBaUYsQ0FBQyxlQUM3SzdFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5TSxNQUFBQSxNQUFNLEVBQUUsVUFBVTtJQUFFL0gsTUFBQUEsUUFBUSxFQUFFLEVBQUU7VUFBRTVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2M7SUFBTTtPQUFHLEVBQUUsK05BQStOLENBQUMsZUFDMVRXLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5RCxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFaUosTUFBQUEsbUJBQW1CLEVBQUUsU0FBUztJQUFFbkksTUFBQUEsR0FBRyxFQUFFLEVBQUU7SUFBRUMsTUFBQUEsWUFBWSxFQUFFO0lBQUc7SUFBRSxHQUFDLGVBQ2hIMUUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTJNLE1BQUFBLFVBQVUsRUFBRTtJQUFTO0lBQUUsR0FBQyxlQUMxRDdNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFNE07T0FBWSxFQUFFLG1GQUFtRixDQUFDLGVBQ3hJOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFMkYsSUFBQUEsS0FBSyxFQUFFOEMsS0FBSztRQUFFckMsUUFBUSxFQUFFckQsQ0FBQyxJQUFJNkcsUUFBUSxDQUFDN0csQ0FBQyxDQUFDQyxNQUFNLENBQUMyQyxLQUFLLENBQUM7SUFBRW5ELElBQUFBLElBQUksRUFBRSxPQUFPO0lBQUVFLElBQUFBLFdBQVcsRUFBRSw4RkFBOEY7SUFBRXpDLElBQUFBLEtBQUssRUFBRTZNLGdCQUFjO0lBQUVsSyxJQUFBQSxRQUFRLEVBQUU7T0FBTSxDQUFDLENBQUMsZUFDL1A3QyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMk0sTUFBQUEsVUFBVSxFQUFFO0lBQVM7SUFBRSxHQUFDLGVBQzFEN00sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU0TTtPQUFZLEVBQUUsa0RBQWtELENBQUMsZUFDdkc5TSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsVUFBVSxFQUFFO0lBQUUyRixJQUFBQSxLQUFLLEVBQUVrRSxXQUFXO1FBQUV6RCxRQUFRLEVBQUVyRCxDQUFDLElBQUkrRyxjQUFjLENBQUMvRyxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQztJQUFFbkQsSUFBQUEsSUFBSSxFQUFFLGFBQWE7SUFBRUUsSUFBQUEsV0FBVyxFQUFFLHdQQUF3UDtJQUFFbUcsSUFBQUEsSUFBSSxFQUFFLENBQUM7SUFBRTVJLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZNLGdCQUFjO0lBQUVoRSxNQUFBQSxNQUFNLEVBQUU7SUFBVztJQUFFLEdBQUMsQ0FBQyxDQUFDLGVBQ2xjL0ksc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLGVBQzNCRCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSx3REFBd0QsQ0FBQyxlQUM3RzlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRTJGLElBQUFBLEtBQUssRUFBRW9FLFFBQVE7UUFBRTNELFFBQVEsRUFBRXJELENBQUMsSUFBSWlILFdBQVcsQ0FBQ2pILENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkMsS0FBSyxDQUFDO0lBQUVuRCxJQUFBQSxJQUFJLEVBQUUsVUFBVTtJQUFFdkMsSUFBQUEsS0FBSyxFQUFFNk07SUFBZSxHQUFDLEVBQUVqSCxZQUFVLENBQUM0QixHQUFHLENBQUNzRixDQUFDLGtCQUFLaE4sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtRQUFFeUIsR0FBRyxFQUFFc0wsQ0FBQyxDQUFDcEgsS0FBSztRQUFFQSxLQUFLLEVBQUVvSCxDQUFDLENBQUNwSDtJQUFNLEdBQUMsRUFBRW9ILENBQUMsQ0FBQ3pLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQzdPdkMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVZLE1BQUFBLGFBQWEsRUFBRSxRQUFRO0lBQUVWLE1BQUFBLGNBQWMsRUFBRTtJQUFXO0lBQUUsR0FBQyxlQUMxRzdELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNE0sWUFBVTtJQUFFbkosTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRUMsTUFBQUEsVUFBVSxFQUFFLFFBQVE7SUFBRWEsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRWUsTUFBQUEsTUFBTSxFQUFFO0lBQVU7SUFBRSxHQUFDLGVBQ3ZIeEYsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFVBQVU7SUFBRStELElBQUFBLE9BQU8sRUFBRXlELFdBQVc7UUFBRTdELFFBQVEsRUFBRXJELENBQUMsSUFBSW1ILGNBQWMsQ0FBQ25ILENBQUMsQ0FBQ0MsTUFBTSxDQUFDd0QsT0FBTyxDQUFDO0lBQUVoRSxJQUFBQSxJQUFJLEVBQUUseUJBQXlCO0lBQUV2QyxJQUFBQSxLQUFLLEVBQUU7VUFBRXlHLFdBQVcsRUFBRXBJLEdBQUMsQ0FBQ007SUFBTTtJQUFFLEdBQUMsQ0FBQyxFQUMzTCwwSkFBMEosQ0FBQyxFQUMvSnFMLFdBQVcsa0JBQUtsSyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFdUYsTUFBQUEsU0FBUyxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQ2xFekYsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU0TTtPQUFZLEVBQUUsNkZBQTZGLENBQUMsZUFDbEo5TSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtJQUFFa0QsSUFBQUEsS0FBSyxFQUFFd0UsUUFBUTtJQUFFL0QsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUgsV0FBVyxDQUFDNEMsTUFBTSxDQUFDakssQ0FBQyxDQUFDQyxNQUFNLENBQUMyQyxLQUFLLENBQUMsQ0FBQztJQUFFbkQsSUFBQUEsSUFBSSxFQUFFLGdCQUFnQjtJQUFFeUssSUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRUMsSUFBQUEsR0FBRyxFQUFFLEdBQUc7SUFBRWpOLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZNLGdCQUFjO0lBQUVySixNQUFBQSxLQUFLLEVBQUU7SUFBSTtPQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUN6TjFELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUwRSxNQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsR0FBRztVQUFFN0QsS0FBSyxFQUFFekMsR0FBQyxDQUFDWSxLQUFLO0lBQUV3TixNQUFBQSxNQUFNLEVBQUU7SUFBVztPQUFHLEVBQ3RHLGtGQUFrRixlQUNsRjNNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUwRSxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDYyxLQUFLO0lBQUV3RixNQUFBQSxVQUFVLEVBQUUsR0FBRztJQUFFdUksTUFBQUEsVUFBVSxFQUFFO0lBQUU7T0FBRyxFQUNuRyxHQUFHLEVBQ0g5QyxRQUFRLENBQUNoSixNQUFNLEVBQ2YsOEJBQThCLEVBQzlCdUosWUFBWSxFQUNaLHdDQUF3QyxDQUFDLENBQUMsZUFDbEQ3SyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtJQUFFRCxJQUFBQSxJQUFJLEVBQUUsZUFBZTtJQUFFbUQsSUFBQUEsS0FBSyxFQUFFeUgsSUFBSSxDQUFDQyxTQUFTLENBQUNoRCxRQUFRO0lBQUUsR0FBQyxDQUFDLEVBQ3hHQSxRQUFRLENBQUM1QyxHQUFHLENBQUMsQ0FBQ3lCLE9BQU8sRUFBRWpDLENBQUMsbUJBQU1sSCxzQkFBSyxDQUFDQyxhQUFhLENBQUNpSixjQUFZLEVBQUU7SUFBRXhILElBQUFBLEdBQUcsRUFBRXdGLENBQUM7SUFBRWlDLElBQUFBLE9BQU8sRUFBRUEsT0FBTztJQUFFQyxJQUFBQSxLQUFLLEVBQUVsQyxDQUFDO1FBQUViLFFBQVEsRUFBRWxHLENBQUMsSUFBSXdLLGFBQWEsQ0FBQ3pELENBQUMsRUFBRS9HLENBQUMsQ0FBQztJQUFFbUcsSUFBQUEsUUFBUSxFQUFFQSxNQUFNc0UsYUFBYSxDQUFDMUQsQ0FBQztPQUFHLENBQUMsQ0FBQyxDQUFDLGVBQy9LbEgsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVjLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVDLE1BQUFBLFlBQVksRUFBRTtJQUFHO0lBQUUsR0FBQyxlQUMvRTFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUVrRSxJQUFBQSxPQUFPLEVBQUU4RCxVQUFVO0lBQUV4SyxJQUFBQSxLQUFLLEVBQUVxTjtPQUFvQixFQUFFLHlGQUF5RixDQUFDLENBQUMsZUFDak12TixzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtJQUFFOEssSUFBQUEsUUFBUSxFQUFFaEQsVUFBVTtJQUFFdEssSUFBQUEsS0FBSyxFQUFFdU47T0FBZ0IsRUFBRWpELFVBQVUsR0FBRyxXQUFXLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2SjtJQUNBLE1BQU1zQyxZQUFVLEdBQUc7SUFDZm5KLEVBQUFBLE9BQU8sRUFBRSxPQUFPO0lBQ2hCaUIsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsRUFBQUEsVUFBVSxFQUFFLEdBQUc7TUFDZjdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2EsS0FBSztJQUNkc0YsRUFBQUEsWUFBWSxFQUFFO0lBQ2xCLENBQUM7SUFDRCxNQUFNcUksZ0JBQWMsR0FBRztJQUNuQnJKLEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQ2JNLEVBQUFBLE9BQU8sRUFBRSxVQUFVO01BQ25CVixVQUFVLEVBQUUvRSxHQUFDLENBQUNJLE9BQU87TUFDckJxQyxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFDZE4sRUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQy9CdUYsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlMsRUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZnBCLEVBQUFBLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFDRCxNQUFNc0osb0JBQWtCLEdBQUc7SUFDdkJ2SixFQUFBQSxPQUFPLEVBQUUsVUFBVTtJQUNuQlYsRUFBQUEsVUFBVSxFQUFFLGFBQWE7TUFDekJ0QyxLQUFLLEVBQUV6QyxHQUFDLENBQUNRLElBQUk7SUFDYkgsRUFBQUEsTUFBTSxFQUFFLENBQUEsV0FBQSxFQUFjTCxHQUFDLENBQUNRLElBQUksQ0FBQSxDQUFFO0lBQzlCb0YsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlksRUFBQUEsTUFBTSxFQUFFO0lBQ1osQ0FBQztJQUNELE1BQU1pSSxnQkFBYyxHQUFHO0lBQ25CekosRUFBQUEsT0FBTyxFQUFFLFdBQVc7TUFDcEJWLFVBQVUsRUFBRSwyQkFBMkIvRSxHQUFDLENBQUNNLEtBQUssQ0FBQSxFQUFBLEVBQUtOLEdBQUMsQ0FBQ08sU0FBUyxDQUFBLENBQUEsQ0FBRztJQUNqRWtDLEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQ2JwQyxFQUFBQSxNQUFNLEVBQUUsTUFBTTtJQUNkdUYsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsRUFBQUEsVUFBVSxFQUFFLEdBQUc7SUFDZlcsRUFBQUEsTUFBTSxFQUFFO0lBQ1osQ0FBQzs7SUNyUkQsTUFBTWpILEdBQUMsR0FBRztJQUNOQyxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkUsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLFNBQVMsRUFBRSxTQUFTO0lBQ3BCQyxFQUFBQSxJQUFJLEVBQUUsU0FBUztJQUNmQyxFQUNBQyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFO0lBQ1gsQ0FBQztJQUNELE1BQU1zRyxhQUFhLEdBQUcsQ0FDbEI7SUFBRUMsRUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFRLENBQUMsRUFDakM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxPQUFPO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBUSxDQUFDLEVBQ2xDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQU8sQ0FBQyxDQUNuQztJQUNELE1BQU1zRCxnQkFBYyxHQUFHLENBQ25CO0lBQUVELEVBQUFBLEtBQUssRUFBRSxRQUFRO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBZSxDQUFDLEVBQzFDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsVUFBVTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQXNCLENBQUMsRUFDbkQ7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBa0IsQ0FBQyxDQUM5QztJQUNELE1BQU11RCxVQUFVLEdBQUcsQ0FDZjtJQUFFRixFQUFBQSxLQUFLLEVBQUUsVUFBVTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVcsQ0FBQyxFQUN4QztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFVLENBQUMsRUFDdEM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxRQUFRO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBUyxDQUFDLEVBQ3BDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsUUFBUTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVMsQ0FBQyxFQUNwQztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLFFBQVE7SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFTLENBQUMsRUFDcEM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxPQUFPO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBUyxDQUFDLENBQ3RDO0lBQ0QsTUFBTXdELFlBQVUsR0FBRztJQUNmL0IsRUFBQUEsT0FBTyxFQUFFLFVBQVU7TUFDbkJWLFVBQVUsRUFBRS9FLEdBQUMsQ0FBQ0ksT0FBTztNQUNyQnFDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUNkTixFQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFDL0J1RixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaUyxFQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmcEIsRUFBQUEsU0FBUyxFQUFFO0lBQ2YsQ0FBQztJQUNELE1BQU0rQixhQUFXLEdBQUc7SUFDaEJoQyxFQUFBQSxPQUFPLEVBQUUsVUFBVTtNQUNuQlYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDSSxPQUFPO01BQ3JCcUMsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQ2ROLEVBQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUMvQnVGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pTLEVBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZHLEVBQUFBLE1BQU0sRUFBRTtJQUNaLENBQUM7SUFDRCxNQUFNUyxXQUFTLEdBQUc7SUFDZDNDLEVBQUFBLFVBQVUsRUFBRSxNQUFNO0lBQ2xCMUUsRUFBQUEsTUFBTSxFQUFFLE1BQU07TUFDZG9DLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1UsS0FBSztJQUNkMkYsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlksRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJ4QixFQUFBQSxPQUFPLEVBQUUsU0FBUztJQUNsQkcsRUFBQUEsWUFBWSxFQUFFO0lBQ2xCLENBQUM7SUFDRCxNQUFNK0IsUUFBTSxHQUFHO0lBQ1hsQyxFQUFBQSxPQUFPLEVBQUUsVUFBVTtJQUNuQlYsRUFBQUEsVUFBVSxFQUFFLGFBQWE7TUFDekJ0QyxLQUFLLEVBQUV6QyxHQUFDLENBQUNNLEtBQUs7SUFDZEQsRUFBQUEsTUFBTSxFQUFFLENBQUEsV0FBQSxFQUFjTCxHQUFDLENBQUNNLEtBQUssQ0FBQSxDQUFFO0lBQy9Cc0YsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlksRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFDRCxTQUFTVSxXQUFTQSxDQUFDO01BQUVDLE1BQU07TUFBRUMsUUFBUTtJQUFFQyxFQUFBQTtJQUFVLENBQUMsRUFBRTtJQUNoRCxFQUFBLG9CQUFRdEcsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVDLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUM1RzFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSxpRkFBaUY7UUFBRWlELEtBQUssRUFBRVEsTUFBTSxDQUFDRyxXQUFXO0lBQUVGLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBR0QsTUFBTTtJQUFFRyxNQUFBQSxXQUFXLEVBQUV2RCxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc2RixZQUFVO0lBQUUxQixNQUFBQSxJQUFJLEVBQUU7SUFBRTtJQUFFLEdBQUMsQ0FBQyxlQUNqUnJFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUwRSxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDYSxLQUFLO0lBQUV1RSxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUFFYSxNQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFZSxNQUFBQSxNQUFNLEVBQUUsU0FBUztJQUFFZ0IsTUFBQUEsVUFBVSxFQUFFO0lBQVM7SUFBRSxHQUFDLGVBQzVKeEcsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFVBQVU7UUFBRStELE9BQU8sRUFBRUwsTUFBTSxDQUFDTSxVQUFVO0lBQUVMLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBR0QsTUFBTTtJQUFFTSxNQUFBQSxVQUFVLEVBQUUxRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ3dEO0lBQVEsS0FBQyxDQUFDO0lBQUV2RyxJQUFBQSxLQUFLLEVBQUU7VUFBRXlHLFdBQVcsRUFBRXBJLEdBQUMsQ0FBQ007SUFBTTtPQUFHLENBQUMsRUFDckwsZ0NBQWdDLENBQUMsZUFDckNtQixzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRyxJQUFBQSxPQUFPLEVBQUVOLFFBQVE7SUFBRXBHLElBQUFBLEtBQUssRUFBRStGO09BQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RjtJQUNBLFNBQVNZLGFBQWFBLENBQUM7TUFBRUMsUUFBUTtNQUFFVCxRQUFRO0lBQUVDLEVBQUFBO0lBQVUsQ0FBQyxFQUFFO01BQ3RELE1BQU1TLFNBQVMsR0FBR0EsTUFBTTtJQUNwQlYsSUFBQUEsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHUyxRQUFRO0lBQUVFLE1BQUFBLE9BQU8sRUFBRSxDQUFDLEdBQUdGLFFBQVEsQ0FBQ0UsT0FBTyxFQUFFO0lBQUVULFFBQUFBLFdBQVcsRUFBRSxFQUFFO0lBQUVHLFFBQUFBLFVBQVUsRUFBRTtXQUFPO0lBQUUsS0FBQyxDQUFDO01BQ3JHLENBQUM7SUFDRCxFQUFBLE1BQU1PLFlBQVksR0FBR0EsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEtBQUs7SUFDM0IsSUFBQSxNQUFNQyxJQUFJLEdBQUcsQ0FBQyxHQUFHTixRQUFRLENBQUNFLE9BQU8sQ0FBQztJQUNsQ0ksSUFBQUEsSUFBSSxDQUFDRixDQUFDLENBQUMsR0FBR0MsQ0FBQztJQUNYZCxJQUFBQSxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUdTLFFBQVE7SUFBRUUsTUFBQUEsT0FBTyxFQUFFSTtJQUFLLEtBQUMsQ0FBQztNQUM1QyxDQUFDO01BQ0QsTUFBTUMsWUFBWSxHQUFJSCxDQUFDLElBQUs7SUFDeEJiLElBQUFBLFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBR1MsUUFBUTtJQUFFRSxNQUFBQSxPQUFPLEVBQUVGLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDTSxNQUFNLENBQUMsQ0FBQy9GLENBQUMsRUFBRWdHLEdBQUcsS0FBS0EsR0FBRyxLQUFLTCxDQUFDO0lBQUUsS0FBQyxDQUFDO01BQ3RGLENBQUM7SUFDRCxFQUFBLG9CQUFRbEgsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXdFLE1BQUFBLFlBQVksRUFBRSxFQUFFO0lBQUVWLE1BQUFBLE9BQU8sRUFBRSxFQUFFO0lBQUVWLE1BQUFBLFVBQVUsRUFBRSxTQUFTO0lBQUUxRSxNQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFBRXVGLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUNwSm5FLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5RCxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUFFYSxNQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFQyxNQUFBQSxZQUFZLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDcEcxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsTUFBTTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsMkVBQTJFO1FBQUVpRCxLQUFLLEVBQUVrQixRQUFRLENBQUNVLGFBQWE7SUFBRW5CLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBR1MsUUFBUTtJQUFFVSxNQUFBQSxhQUFhLEVBQUV4RSxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc2RixZQUFVO0lBQUUxQixNQUFBQSxJQUFJLEVBQUU7SUFBRTtJQUFFLEdBQUMsQ0FBQyxlQUNuUnJFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFBRTJGLEtBQUssRUFBRWtCLFFBQVEsQ0FBQ1csYUFBYTtJQUFFcEIsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHUyxRQUFRO0lBQUVXLE1BQUFBLGFBQWEsRUFBRXpFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkM7SUFBTSxLQUFDLENBQUM7SUFBRTFGLElBQUFBLEtBQUssRUFBRThGO0lBQVksR0FBQyxFQUFFSCxnQkFBYyxDQUFDNkIsR0FBRyxDQUFDQyxFQUFFLGtCQUFLM0gsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtRQUFFeUIsR0FBRyxFQUFFaUcsRUFBRSxDQUFDL0IsS0FBSztRQUFFQSxLQUFLLEVBQUUrQixFQUFFLENBQUMvQjtJQUFNLEdBQUMsRUFBRStCLEVBQUUsQ0FBQ3BGLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUN0UXZDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRTJHLElBQUFBLE9BQU8sRUFBRU4sUUFBUTtJQUFFcEcsSUFBQUEsS0FBSyxFQUFFK0Y7SUFBVSxHQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFDckZhLFFBQVEsQ0FBQ1csYUFBYSxLQUFLLE1BQU0sa0JBQUt6SCxzQkFBSyxDQUFDQyxhQUFhLENBQUNELHNCQUFLLENBQUM0SCxRQUFRLEVBQUUsSUFBSSxFQUMxRWQsUUFBUSxDQUFDRSxPQUFPLENBQUNVLEdBQUcsQ0FBQyxDQUFDRyxHQUFHLEVBQUVDLEVBQUUsbUJBQU05SCxzQkFBSyxDQUFDQyxhQUFhLENBQUNrRyxXQUFTLEVBQUU7SUFBRXpFLElBQUFBLEdBQUcsRUFBRW9HLEVBQUU7SUFBRTFCLElBQUFBLE1BQU0sRUFBRXlCLEdBQUc7UUFBRXhCLFFBQVEsRUFBRWMsQ0FBQyxJQUFJRixZQUFZLENBQUNhLEVBQUUsRUFBRVgsQ0FBQyxDQUFDO0lBQUViLElBQUFBLFFBQVEsRUFBRUEsTUFBTWUsWUFBWSxDQUFDUyxFQUFFO09BQUcsQ0FBQyxDQUFDLENBQUMsZUFDbks5SCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRyxJQUFBQSxPQUFPLEVBQUVHLFNBQVM7SUFBRTdHLElBQUFBLEtBQUssRUFBRWdHO0lBQU8sR0FBQyxFQUFFLG1GQUFtRixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hLO0lBQ0EsU0FBUzZCLFNBQVNBLENBQUM7TUFBRUMsTUFBTTtNQUFFM0IsUUFBUTtJQUFFQyxFQUFBQTtJQUFVLENBQUMsRUFBRTtNQUNoRCxNQUFNMkIsV0FBVyxHQUFHQSxNQUFNO0lBQ3RCNUIsSUFBQUEsUUFBUSxDQUFDO0lBQ0wsTUFBQSxHQUFHMkIsTUFBTTtVQUNURSxTQUFTLEVBQUUsQ0FBQyxJQUFJRixNQUFNLENBQUNFLFNBQVMsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUFFVixRQUFBQSxhQUFhLEVBQUUsRUFBRTtJQUFFQyxRQUFBQSxhQUFhLEVBQUUsUUFBUTtJQUFFVCxRQUFBQSxPQUFPLEVBQUUsQ0FBQztJQUFFVCxVQUFBQSxXQUFXLEVBQUUsRUFBRTtJQUFFRyxVQUFBQSxVQUFVLEVBQUU7YUFBTztXQUFHO0lBQzlJLEtBQUMsQ0FBQztNQUNOLENBQUM7SUFDRCxFQUFBLE1BQU15QixjQUFjLEdBQUdBLENBQUNqQixDQUFDLEVBQUVrQixDQUFDLEtBQUs7UUFDN0IsTUFBTWhCLElBQUksR0FBRyxDQUFDLElBQUlZLE1BQU0sQ0FBQ0UsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFDZCxJQUFBQSxJQUFJLENBQUNGLENBQUMsQ0FBQyxHQUFHa0IsQ0FBQztJQUNYL0IsSUFBQUEsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHMkIsTUFBTTtJQUFFRSxNQUFBQSxTQUFTLEVBQUVkO0lBQUssS0FBQyxDQUFDO01BQzVDLENBQUM7TUFDRCxNQUFNaUIsY0FBYyxHQUFJbkIsQ0FBQyxJQUFLO0lBQzFCYixJQUFBQSxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUcyQixNQUFNO0lBQUVFLE1BQUFBLFNBQVMsRUFBRSxDQUFDRixNQUFNLENBQUNFLFNBQVMsSUFBSSxFQUFFLEVBQUVaLE1BQU0sQ0FBQyxDQUFDL0YsQ0FBQyxFQUFFZ0csR0FBRyxLQUFLQSxHQUFHLEtBQUtMLENBQUM7SUFBRSxLQUFDLENBQUM7TUFDOUYsQ0FBQztJQUNELEVBQUEsTUFBTW9CLE1BQU0sR0FBR04sTUFBTSxDQUFDTyxZQUFZLEtBQUssTUFBTTtJQUM3QyxFQUFBLE1BQU1DLE9BQU8sR0FBR1IsTUFBTSxDQUFDTyxZQUFZLEtBQUssT0FBTztJQUMvQyxFQUFBLE1BQU1FLE1BQU0sR0FBR1QsTUFBTSxDQUFDTyxZQUFZLEtBQUssTUFBTTtJQUM3QyxFQUFBLG9CQUFRdkksc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXdFLE1BQUFBLFlBQVksRUFBRSxDQUFDO0lBQUVWLE1BQUFBLE9BQU8sRUFBRSxXQUFXO1VBQUVWLFVBQVUsRUFBRS9FLEdBQUMsQ0FBQ0csTUFBTTtJQUFFRSxNQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFBRXVGLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUMzSm5FLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5RCxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUFFYSxNQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFQyxNQUFBQSxZQUFZLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDcEcxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsTUFBTTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsaUZBQWlGO1FBQUVpRCxLQUFLLEVBQUVvQyxNQUFNLENBQUNVLEtBQUs7SUFBRXJDLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzJCLE1BQU07SUFBRVUsTUFBQUEsS0FBSyxFQUFFMUYsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFMUIsTUFBQUEsSUFBSSxFQUFFO0lBQUU7SUFBRSxHQUFDLENBQUMsZUFDclFyRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUUyRixLQUFLLEVBQUVvQyxNQUFNLENBQUNPLFlBQVk7SUFBRWxDLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzJCLE1BQU07SUFBRU8sTUFBQUEsWUFBWSxFQUFFdkYsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFOEY7SUFBWSxHQUFDLEVBQUVMLGFBQWEsQ0FBQytCLEdBQUcsQ0FBQ2lCLEVBQUUsa0JBQUszSSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUV5QixHQUFHLEVBQUVpSCxFQUFFLENBQUMvQyxLQUFLO1FBQUVBLEtBQUssRUFBRStDLEVBQUUsQ0FBQy9DO0lBQU0sR0FBQyxFQUFFK0MsRUFBRSxDQUFDcEcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQy9QdkMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkcsSUFBQUEsT0FBTyxFQUFFTixRQUFRO0lBQUVwRyxJQUFBQSxLQUFLLEVBQUUrRjtJQUFVLEdBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUNyRnVDLE9BQU8sa0JBQUt4SSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsTUFBTTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsd0dBQXdHO0lBQUVpRCxJQUFBQSxLQUFLLEVBQUVvQyxNQUFNLENBQUNZLFNBQVMsSUFBSSxFQUFFO0lBQUV2QyxJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUcyQixNQUFNO0lBQUVZLE1BQUFBLFNBQVMsRUFBRTVGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkM7SUFBTSxLQUFDLENBQUM7SUFBRTFGLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZGLFlBQVU7SUFBRXJDLE1BQUFBLEtBQUssRUFBRTtJQUFPO09BQUcsQ0FBQyxDQUFDLEVBQzdUK0UsTUFBTSxrQkFBS3pJLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7SUFBRTBDLElBQUFBLFdBQVcsRUFBRSxvSkFBb0o7SUFBRWlELElBQUFBLEtBQUssRUFBRW9DLE1BQU0sQ0FBQ2EsWUFBWSxJQUFJLEVBQUU7SUFBRXhDLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzJCLE1BQU07SUFBRWEsTUFBQUEsWUFBWSxFQUFFN0YsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFa0QsSUFBQUEsSUFBSSxFQUFFLENBQUM7SUFBRTVJLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZGLFlBQVU7SUFBRXJDLE1BQUFBLEtBQUssRUFBRSxNQUFNO0lBQUVxRixNQUFBQSxNQUFNLEVBQUU7SUFBVztPQUFHLENBQUMsQ0FBQyxFQUNoWVQsTUFBTSxrQkFBS3RJLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV1RixNQUFBQSxTQUFTLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDN0R6RixzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsTUFBTTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsaUZBQWlGO0lBQUVpRCxJQUFBQSxLQUFLLEVBQUVvQyxNQUFNLENBQUNnQixVQUFVLElBQUksRUFBRTtJQUFFM0MsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHMkIsTUFBTTtJQUFFZ0IsTUFBQUEsVUFBVSxFQUFFaEcsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFckMsTUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRWdCLE1BQUFBLFlBQVksRUFBRTtJQUFFO09BQUcsQ0FBQyxFQUM1UyxDQUFDc0QsTUFBTSxDQUFDRSxTQUFTLElBQUksRUFBRSxFQUFFUixHQUFHLENBQUMsQ0FBQ1UsQ0FBQyxFQUFFYSxFQUFFLG1CQUFNakosc0JBQUssQ0FBQ0MsYUFBYSxDQUFDNEcsYUFBYSxFQUFFO0lBQUVuRixJQUFBQSxHQUFHLEVBQUV1SCxFQUFFO0lBQUVuQyxJQUFBQSxRQUFRLEVBQUVzQixDQUFDO1FBQUUvQixRQUFRLEVBQUVjLENBQUMsSUFBSWdCLGNBQWMsQ0FBQ2MsRUFBRSxFQUFFOUIsQ0FBQyxDQUFDO0lBQUViLElBQUFBLFFBQVEsRUFBRUEsTUFBTStCLGNBQWMsQ0FBQ1ksRUFBRTtPQUFHLENBQUMsQ0FBQyxDQUFDLGVBQ2pMakosc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkcsSUFBQUEsT0FBTyxFQUFFcUIsV0FBVztJQUFFL0gsSUFBQUEsS0FBSyxFQUFFZ0c7SUFBTyxHQUFDLEVBQUUsd0NBQXdDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0g7SUFDQSxTQUFTZ0QsWUFBWUEsQ0FBQztNQUFFQyxPQUFPO01BQUVDLEtBQUs7TUFBRS9DLFFBQVE7SUFBRUMsRUFBQUE7SUFBVSxDQUFDLEVBQUU7TUFDM0QsTUFBTStDLFNBQVMsR0FBR0EsTUFBTTtJQUNwQmhELElBQUFBLFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzhDLE9BQU87SUFBRUcsTUFBQUEsT0FBTyxFQUFFLENBQUMsR0FBR0gsT0FBTyxDQUFDRyxPQUFPLEVBQUU7SUFBRVosUUFBQUEsS0FBSyxFQUFFLEVBQUU7SUFBRUgsUUFBQUEsWUFBWSxFQUFFO1dBQVE7SUFBRSxLQUFDLENBQUM7TUFDaEcsQ0FBQztJQUNELEVBQUEsTUFBTWdCLFlBQVksR0FBR0EsQ0FBQ0MsRUFBRSxFQUFFeEIsTUFBTSxLQUFLO0lBQ2pDLElBQUEsTUFBTVosSUFBSSxHQUFHLENBQUMsR0FBRytCLE9BQU8sQ0FBQ0csT0FBTyxDQUFDO0lBQ2pDbEMsSUFBQUEsSUFBSSxDQUFDb0MsRUFBRSxDQUFDLEdBQUd4QixNQUFNO0lBQ2pCM0IsSUFBQUEsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHOEMsT0FBTztJQUFFRyxNQUFBQSxPQUFPLEVBQUVsQztJQUFLLEtBQUMsQ0FBQztNQUMzQyxDQUFDO01BQ0QsTUFBTXFDLFlBQVksR0FBSUQsRUFBRSxJQUFLO0lBQ3pCbkQsSUFBQUEsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHOEMsT0FBTztJQUFFRyxNQUFBQSxPQUFPLEVBQUVILE9BQU8sQ0FBQ0csT0FBTyxDQUFDaEMsTUFBTSxDQUFDLENBQUMvRixDQUFDLEVBQUUyRixDQUFDLEtBQUtBLENBQUMsS0FBS3NDLEVBQUU7SUFBRSxLQUFDLENBQUM7TUFDakYsQ0FBQztJQUNELEVBQUEsb0JBQVF4SixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFd0UsTUFBQUEsWUFBWSxFQUFFLEVBQUU7SUFBRVYsTUFBQUEsT0FBTyxFQUFFLEVBQUU7VUFBRVYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDRyxNQUFNO0lBQUVFLE1BQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUFFdUYsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQ25KbkUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVDLE1BQUFBLFlBQVksRUFBRTtJQUFHO0lBQUUsR0FBQyxlQUNyRzFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUwRSxNQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsR0FBRztVQUFFN0QsS0FBSyxFQUFFekMsR0FBQyxDQUFDUTtJQUFLO0lBQUUsR0FBQyxFQUNuRix1Q0FBdUMsRUFDdkNxSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLGVBQ2RwSixzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsTUFBTTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsNkZBQTZGO1FBQUVpRCxLQUFLLEVBQUV1RCxPQUFPLENBQUNULEtBQUs7SUFBRXJDLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzhDLE9BQU87SUFBRVQsTUFBQUEsS0FBSyxFQUFFMUYsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFMUIsTUFBQUEsSUFBSSxFQUFFO0lBQUU7SUFBRSxHQUFDLENBQUMsZUFDblJyRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRyxJQUFBQSxPQUFPLEVBQUVOLFFBQVE7SUFBRXBHLElBQUFBLEtBQUssRUFBRStGO09BQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUNyRmtELE9BQU8sQ0FBQ0csT0FBTyxDQUFDNUIsR0FBRyxDQUFDLENBQUNNLE1BQU0sRUFBRXdCLEVBQUUsbUJBQU14SixzQkFBSyxDQUFDQyxhQUFhLENBQUM4SCxTQUFTLEVBQUU7SUFBRXJHLElBQUFBLEdBQUcsRUFBRThILEVBQUU7SUFBRXhCLElBQUFBLE1BQU0sRUFBRUEsTUFBTTtRQUFFM0IsUUFBUSxFQUFFcUQsQ0FBQyxJQUFJSCxZQUFZLENBQUNDLEVBQUUsRUFBRUUsQ0FBQyxDQUFDO0lBQUVwRCxJQUFBQSxRQUFRLEVBQUVBLE1BQU1tRCxZQUFZLENBQUNELEVBQUU7T0FBRyxDQUFDLENBQUMsQ0FBQyxlQUN4S3hKLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRTJHLElBQUFBLE9BQU8sRUFBRXlDLFNBQVM7SUFBRW5KLElBQUFBLEtBQUssRUFBRWdHO09BQVEsRUFBRSw0QkFBNEIsQ0FBQyxDQUFDO0lBQzNHO0lBQ2UsU0FBU3dILFVBQVVBLENBQUM5RCxLQUFLLEVBQUU7TUFDdEMsTUFBTStELE1BQU0sR0FBRy9ELEtBQUssQ0FBQytELE1BQU0sRUFBRWxDLE1BQU0sSUFBSSxFQUFFO0lBQ3pDLEVBQUEsTUFBTW1DLFFBQVEsR0FBR0QsTUFBTSxDQUFDbkwsRUFBRTtNQUMxQixNQUFNcUwsZUFBZSxHQUFHLENBQUMsTUFBTTtRQUMzQixJQUFJO0lBQ0EsTUFBQSxPQUFPRixNQUFNLENBQUNHLGdCQUFnQixHQUFHVCxJQUFJLENBQUNVLEtBQUssQ0FBQ0osTUFBTSxDQUFDRyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7SUFDN0UsSUFBQSxDQUFDLENBQ0QsTUFBTTtJQUNGLE1BQUEsT0FBTyxFQUFFO0lBQ2IsSUFBQTtJQUNKLEVBQUEsQ0FBQyxHQUFHO0lBQ0osRUFBQSxNQUFNLENBQUNwRixLQUFLLEVBQUVtQixRQUFRLENBQUMsR0FBRzlKLGNBQVEsQ0FBQzROLE1BQU0sQ0FBQ2pGLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDdEQsRUFBQSxNQUFNLENBQUNvQixXQUFXLEVBQUVDLGNBQWMsQ0FBQyxHQUFHaEssY0FBUSxDQUFDNE4sTUFBTSxDQUFDN0QsV0FBVyxJQUFJLEVBQUUsQ0FBQztJQUN4RSxFQUFBLE1BQU0sQ0FBQ0UsUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBR2xLLGNBQVEsQ0FBQzROLE1BQU0sQ0FBQzNELFFBQVEsSUFBSSxVQUFVLENBQUM7SUFDdkUsRUFBQSxNQUFNLENBQUNFLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdwSyxjQUFRLENBQUM0TixNQUFNLENBQUNLLHVCQUF1QixLQUFLLElBQUksSUFBSUwsTUFBTSxDQUFDSyx1QkFBdUIsS0FBSyxNQUFNLENBQUM7SUFDcEksRUFBQSxNQUFNLENBQUM1RCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHdEssY0FBUSxDQUFDa04sTUFBTSxDQUFDVSxNQUFNLENBQUNNLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQztNQUM3RSxNQUFNLENBQUMzRCxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHeEssY0FBUSxDQUFDOE4sZUFBZSxDQUFDO01BQ3pELE1BQU0sQ0FBQ3JELFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUcxSyxjQUFRLENBQUMsS0FBSyxDQUFDO0lBQ25ELEVBQUEsTUFBTWlMLE1BQU0sR0FBR3ZMLE1BQU0sQ0FBQ3dMLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7TUFDcEYsTUFBTVQsVUFBVSxHQUFHQSxNQUFNO0lBQ3JCSCxJQUFBQSxXQUFXLENBQUMsQ0FBQyxHQUFHRCxRQUFRLEVBQUU7SUFBRTVCLE1BQUFBLEtBQUssRUFBRSxFQUFFO0lBQUVZLE1BQUFBLE9BQU8sRUFBRSxDQUFDO0lBQUVaLFFBQUFBLEtBQUssRUFBRSxFQUFFO0lBQUVILFFBQUFBLFlBQVksRUFBRTtXQUFRO0lBQUUsS0FBQyxDQUFDLENBQUM7TUFDN0YsQ0FBQztJQUNELEVBQUEsTUFBTW9DLGFBQWEsR0FBR0EsQ0FBQ3pELENBQUMsRUFBRWlDLE9BQU8sS0FBSztJQUNsQyxJQUFBLE1BQU0vQixJQUFJLEdBQUcsQ0FBQyxHQUFHa0QsUUFBUSxDQUFDO0lBQzFCbEQsSUFBQUEsSUFBSSxDQUFDRixDQUFDLENBQUMsR0FBR2lDLE9BQU87UUFDakJvQixXQUFXLENBQUNuRCxJQUFJLENBQUM7TUFDckIsQ0FBQztNQUNELE1BQU13RCxhQUFhLEdBQUkxRCxDQUFDLElBQUs7SUFDekJxRCxJQUFBQSxXQUFXLENBQUNELFFBQVEsQ0FBQ2hELE1BQU0sQ0FBQyxDQUFDL0YsQ0FBQyxFQUFFZ0csR0FBRyxLQUFLQSxHQUFHLEtBQUtMLENBQUMsQ0FBQyxDQUFDO01BQ3ZELENBQUM7TUFDRCxNQUFNMkQsWUFBWSxHQUFHUCxRQUFRLENBQUNRLE1BQU0sQ0FBQyxDQUFDM0ssQ0FBQyxFQUFFNEssR0FBRyxLQUFLNUssQ0FBQyxHQUFHNEssR0FBRyxDQUFDekIsT0FBTyxDQUFDaEksTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMzRSxFQUFBLE1BQU04SixZQUFZLEdBQUcsTUFBT3BJLENBQUMsSUFBSztRQUM5QkEsQ0FBQyxDQUFDcUksY0FBYyxFQUFFO1FBQ2xCWixhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25CLElBQUk7SUFDQSxNQUFBLE1BQU1hLElBQUksR0FBR3RJLENBQUMsQ0FBQ0MsTUFBTTtJQUNyQixNQUFBLE1BQU1zSSxFQUFFLEdBQUcsSUFBSUMsUUFBUSxDQUFDRixJQUFJLENBQUM7SUFDN0IsTUFBQSxNQUFNRyxNQUFNLEdBQUcsSUFBSUMsZUFBZSxFQUFFO0lBQ3BDLE1BQUEsS0FBSyxNQUFNLENBQUNoSyxHQUFHLEVBQUVpSyxHQUFHLENBQUMsSUFBSUosRUFBRSxDQUFDSyxPQUFPLEVBQUUsRUFBRTtJQUNuQ0gsUUFBQUEsTUFBTSxDQUFDSSxNQUFNLENBQUNuSyxHQUFHLEVBQUVpSyxHQUFHLENBQUM7SUFDM0IsTUFBQTtJQUNBLE1BQUEsTUFBTUcsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ2YsTUFBTSxFQUFFO0lBQzVCakosUUFBQUEsTUFBTSxFQUFFLE1BQU07SUFDZGlLLFFBQUFBLE9BQU8sRUFBRTtJQUFFLFVBQUEsY0FBYyxFQUFFO2FBQXFDO0lBQ2hFQyxRQUFBQSxJQUFJLEVBQUVSO0lBQ1YsT0FBQyxDQUFDO0lBQ0YsTUFBQSxNQUFNUyxJQUFJLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxJQUFJLEVBQUU7VUFDN0IsSUFBSUQsSUFBSSxDQUFDRSxXQUFXLEVBQUU7SUFDbEIzTSxRQUFBQSxNQUFNLENBQUN3TCxRQUFRLENBQUNvQixJQUFJLEdBQUdILElBQUksQ0FBQ0UsV0FBVztJQUMzQyxNQUFBLENBQUMsTUFDSTtZQUNERSxLQUFLLENBQUNKLElBQUksQ0FBQ0ssTUFBTSxFQUFFQyxPQUFPLElBQUksNkJBQTZCLENBQUM7SUFDaEUsTUFBQTtRQUNKLENBQUMsQ0FDRCxPQUFPQyxHQUFHLEVBQUU7SUFDUkgsTUFBQUEsS0FBSyxDQUFDLENBQUEsUUFBQSxFQUFXRyxHQUFHLENBQUNELE9BQU8sRUFBRSxDQUFDO0lBQ25DLElBQUEsQ0FBQyxTQUNPO1VBQ0ovQixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3hCLElBQUE7TUFDSixDQUFDO0lBQ0QsRUFBQSxvQkFBUXpLLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUU4RCxNQUFBQSxPQUFPLEVBQUUsRUFBRTtJQUFFUCxNQUFBQSxTQUFTLEVBQUUsT0FBTztVQUFFSyxlQUFlLEVBQUV2RixHQUFDLENBQUNDLE1BQU07VUFBRXdDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUFFNkUsTUFBQUEsVUFBVSxFQUFFO0lBQXVCO0lBQUUsR0FBQyxlQUM1Si9ELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRThCLElBQUFBLE1BQU0sRUFBRSxNQUFNO0lBQUUySyxJQUFBQSxRQUFRLEVBQUV0QixZQUFZO0lBQUVsTCxJQUFBQSxLQUFLLEVBQUU7SUFBRWdFLE1BQUFBLFFBQVEsRUFBRSxHQUFHO0lBQUV5SSxNQUFBQSxNQUFNLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDOUczTSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeU0sTUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFBRS9ILE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLFVBQVUsRUFBRTtJQUFJO09BQUcsRUFBRSxxSEFBcUgsQ0FBQyxlQUNqTjdFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5TSxNQUFBQSxNQUFNLEVBQUUsVUFBVTtJQUFFL0gsTUFBQUEsUUFBUSxFQUFFLEVBQUU7VUFBRTVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2M7SUFBTTtJQUFFLEdBQUMsRUFDcEYsTUFBTSxFQUNOdU8sUUFBUSxFQUNSLGlPQUFpTyxDQUFDLGVBQ3RPNU4sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVpSixNQUFBQSxtQkFBbUIsRUFBRSxTQUFTO0lBQUVuSSxNQUFBQSxHQUFHLEVBQUUsRUFBRTtJQUFFQyxNQUFBQSxZQUFZLEVBQUU7SUFBRztJQUFFLEdBQUMsZUFDaEgxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMk0sTUFBQUEsVUFBVSxFQUFFO0lBQVM7SUFBRSxHQUFDLGVBQzFEN00sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU0TTtPQUFZLEVBQUUsbUZBQW1GLENBQUMsZUFDeEk5TSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUUyRixJQUFBQSxLQUFLLEVBQUU4QyxLQUFLO1FBQUVyQyxRQUFRLEVBQUVyRCxDQUFDLElBQUk2RyxRQUFRLENBQUM3RyxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQztJQUFFbkQsSUFBQUEsSUFBSSxFQUFFLE9BQU87SUFBRUUsSUFBQUEsV0FBVyxFQUFFLDhGQUE4RjtJQUFFekMsSUFBQUEsS0FBSyxFQUFFNk0sZ0JBQWM7SUFBRWxLLElBQUFBLFFBQVEsRUFBRTtPQUFNLENBQUMsQ0FBQyxlQUMvUDdDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUyTSxNQUFBQSxVQUFVLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDMUQ3TSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSxrREFBa0QsQ0FBQyxlQUN2RzlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7SUFBRTJGLElBQUFBLEtBQUssRUFBRWtFLFdBQVc7UUFBRXpELFFBQVEsRUFBRXJELENBQUMsSUFBSStHLGNBQWMsQ0FBQy9HLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkMsS0FBSyxDQUFDO0lBQUVuRCxJQUFBQSxJQUFJLEVBQUUsYUFBYTtJQUFFRSxJQUFBQSxXQUFXLEVBQUUsd1BBQXdQO0lBQUVtRyxJQUFBQSxJQUFJLEVBQUUsQ0FBQztJQUFFNUksSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNk0sZ0JBQWM7SUFBRWhFLE1BQUFBLE1BQU0sRUFBRTtJQUFXO0lBQUUsR0FBQyxDQUFDLENBQUMsZUFDbGMvSSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksZUFDM0JELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFNE07T0FBWSxFQUFFLHdEQUF3RCxDQUFDLGVBQzdHOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkYsSUFBQUEsS0FBSyxFQUFFb0UsUUFBUTtRQUFFM0QsUUFBUSxFQUFFckQsQ0FBQyxJQUFJaUgsV0FBVyxDQUFDakgsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQyxLQUFLLENBQUM7SUFBRW5ELElBQUFBLElBQUksRUFBRSxVQUFVO0lBQUV2QyxJQUFBQSxLQUFLLEVBQUU2TTtJQUFlLEdBQUMsRUFBRWpILFVBQVUsQ0FBQzRCLEdBQUcsQ0FBQ3NGLENBQUMsa0JBQUtoTixzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUV5QixHQUFHLEVBQUVzTCxDQUFDLENBQUNwSCxLQUFLO1FBQUVBLEtBQUssRUFBRW9ILENBQUMsQ0FBQ3BIO0lBQU0sR0FBQyxFQUFFb0gsQ0FBQyxDQUFDekssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFDN092QyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRVksTUFBQUEsYUFBYSxFQUFFLFFBQVE7SUFBRVYsTUFBQUEsY0FBYyxFQUFFO0lBQVc7SUFBRSxHQUFDLGVBQzFHN0Qsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc0TSxZQUFVO0lBQUVuSixNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUFFYSxNQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFZSxNQUFBQSxNQUFNLEVBQUU7SUFBVTtJQUFFLEdBQUMsZUFDdkh4RixzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsVUFBVTtJQUFFK0QsSUFBQUEsT0FBTyxFQUFFeUQsV0FBVztRQUFFN0QsUUFBUSxFQUFFckQsQ0FBQyxJQUFJbUgsY0FBYyxDQUFDbkgsQ0FBQyxDQUFDQyxNQUFNLENBQUN3RCxPQUFPLENBQUM7SUFBRWhFLElBQUFBLElBQUksRUFBRSx5QkFBeUI7SUFBRXZDLElBQUFBLEtBQUssRUFBRTtVQUFFeUcsV0FBVyxFQUFFcEksR0FBQyxDQUFDTTtJQUFNO0lBQUUsR0FBQyxDQUFDLEVBQzNMLDBKQUEwSixDQUFDLEVBQy9KcUwsV0FBVyxrQkFBS2xLLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV1RixNQUFBQSxTQUFTLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDbEV6RixzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSw2RkFBNkYsQ0FBQyxlQUNsSjlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUVrRCxJQUFBQSxLQUFLLEVBQUV3RSxRQUFRO0lBQUUvRCxJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxSCxXQUFXLENBQUM0QyxNQUFNLENBQUNqSyxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQyxDQUFDO0lBQUVuRCxJQUFBQSxJQUFJLEVBQUUsZ0JBQWdCO0lBQUV5SyxJQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFQyxJQUFBQSxHQUFHLEVBQUUsR0FBRztJQUFFak4sSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNk0sZ0JBQWM7SUFBRXJKLE1BQUFBLEtBQUssRUFBRTtJQUFJO09BQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQ3pOMUQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxHQUFHO1VBQUU3RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNZLEtBQUs7SUFBRXdOLE1BQUFBLE1BQU0sRUFBRTtJQUFXO09BQUcsRUFDdEcsa0ZBQWtGLGVBQ2xGM00sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO1VBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNjLEtBQUs7SUFBRXdGLE1BQUFBLFVBQVUsRUFBRSxHQUFHO0lBQUV1SSxNQUFBQSxVQUFVLEVBQUU7SUFBRTtPQUFHLEVBQ25HLEdBQUcsRUFDSDlDLFFBQVEsQ0FBQ2hKLE1BQU0sRUFDZiw4QkFBOEIsRUFDOUJ1SixZQUFZLEVBQ1osd0NBQXdDLENBQUMsQ0FBQyxlQUNsRDdLLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUVELElBQUFBLElBQUksRUFBRSxlQUFlO0lBQUVtRCxJQUFBQSxLQUFLLEVBQUV5SCxJQUFJLENBQUNDLFNBQVMsQ0FBQ2hELFFBQVE7SUFBRSxHQUFDLENBQUMsRUFDeEdBLFFBQVEsQ0FBQzVDLEdBQUcsQ0FBQyxDQUFDeUIsT0FBTyxFQUFFakMsQ0FBQyxtQkFBTWxILHNCQUFLLENBQUNDLGFBQWEsQ0FBQ2lKLFlBQVksRUFBRTtJQUFFeEgsSUFBQUEsR0FBRyxFQUFFd0YsQ0FBQztJQUFFaUMsSUFBQUEsT0FBTyxFQUFFQSxPQUFPO0lBQUVDLElBQUFBLEtBQUssRUFBRWxDLENBQUM7UUFBRWIsUUFBUSxFQUFFbEcsQ0FBQyxJQUFJd0ssYUFBYSxDQUFDekQsQ0FBQyxFQUFFL0csQ0FBQyxDQUFDO0lBQUVtRyxJQUFBQSxRQUFRLEVBQUVBLE1BQU1zRSxhQUFhLENBQUMxRCxDQUFDO09BQUcsQ0FBQyxDQUFDLENBQUMsZUFDL0tsSCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRWMsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRUMsTUFBQUEsWUFBWSxFQUFFO0lBQUc7SUFBRSxHQUFDLGVBQy9FMUUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRWtFLElBQUFBLE9BQU8sRUFBRThELFVBQVU7SUFBRXhLLElBQUFBLEtBQUssRUFBRXFOO09BQW9CLEVBQUUseUZBQXlGLENBQUMsQ0FBQyxlQUNqTXZOLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUU4SyxJQUFBQSxRQUFRLEVBQUVoRCxVQUFVO0lBQUV0SyxJQUFBQSxLQUFLLEVBQUV1TjtPQUFnQixFQUFFakQsVUFBVSxHQUFHLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDM0o7SUFDQSxNQUFNc0MsWUFBVSxHQUFHO0lBQ2ZuSixFQUFBQSxPQUFPLEVBQUUsT0FBTztJQUNoQmlCLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEVBQUFBLFVBQVUsRUFBRSxHQUFHO01BQ2Y3RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNhLEtBQUs7SUFDZHNGLEVBQUFBLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0QsTUFBTXFJLGdCQUFjLEdBQUc7SUFDbkJySixFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNiTSxFQUFBQSxPQUFPLEVBQUUsVUFBVTtNQUNuQlYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDSSxPQUFPO01BQ3JCcUMsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQ2ROLEVBQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUMvQnVGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pTLEVBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZwQixFQUFBQSxTQUFTLEVBQUU7SUFDZixDQUFDO0lBQ0QsTUFBTXNKLGtCQUFrQixHQUFHO0lBQ3ZCdkosRUFBQUEsT0FBTyxFQUFFLFVBQVU7SUFDbkJWLEVBQUFBLFVBQVUsRUFBRSxhQUFhO01BQ3pCdEMsS0FBSyxFQUFFekMsR0FBQyxDQUFDUSxJQUFJO0lBQ2JILEVBQUFBLE1BQU0sRUFBRSxDQUFBLFdBQUEsRUFBY0wsR0FBQyxDQUFDUSxJQUFJLENBQUEsQ0FBRTtJQUM5Qm9GLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pZLEVBQUFBLE1BQU0sRUFBRTtJQUNaLENBQUM7SUFDRCxNQUFNaUksZ0JBQWMsR0FBRztJQUNuQnpKLEVBQUFBLE9BQU8sRUFBRSxXQUFXO01BQ3BCVixVQUFVLEVBQUUsMkJBQTJCL0UsR0FBQyxDQUFDTSxLQUFLLENBQUEsRUFBQSxFQUFLTixHQUFDLENBQUNPLFNBQVMsQ0FBQSxDQUFBLENBQUc7SUFDakVrQyxFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNicEMsRUFBQUEsTUFBTSxFQUFFLE1BQU07SUFDZHVGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEVBQUFBLFVBQVUsRUFBRSxHQUFHO0lBQ2ZXLEVBQUFBLE1BQU0sRUFBRTtJQUNaLENBQUM7O0lDaFNELE1BQU1qSCxHQUFDLEdBQUc7SUFDTkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJFLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxPQUFPLEVBQUUsU0FBUztJQUNsQkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxTQUFTLEVBQUUsU0FBUztJQUNwQkMsRUFBQUEsSUFBSSxFQUFFLFNBQVM7SUFDZkMsRUFDQUMsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRTtJQUNYLENBQUM7SUFDRCxNQUFNd0csY0FBYyxHQUFHLENBQ25CO0lBQUVELEVBQUFBLEtBQUssRUFBRSxRQUFRO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBZSxDQUFDLEVBQzFDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsVUFBVTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQXNCLENBQUMsRUFDbkQ7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBa0IsQ0FBQyxDQUM5QztJQUNELE1BQU13RCxZQUFVLEdBQUc7SUFDZi9CLEVBQUFBLE9BQU8sRUFBRSxVQUFVO01BQ25CVixVQUFVLEVBQUUvRSxHQUFDLENBQUNJLE9BQU87TUFDckJxQyxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFDZE4sRUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQy9CdUYsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlMsRUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZnBCLEVBQUFBLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFDRCxNQUFNK0IsV0FBVyxHQUFHO0lBQ2hCaEMsRUFBQUEsT0FBTyxFQUFFLFVBQVU7TUFDbkJWLFVBQVUsRUFBRS9FLEdBQUMsQ0FBQ0ksT0FBTztNQUNyQnFDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUNkTixFQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFDL0J1RixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaUyxFQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmRyxFQUFBQSxNQUFNLEVBQUU7SUFDWixDQUFDO0lBQ0QsTUFBTVMsU0FBUyxHQUFHO0lBQ2QzQyxFQUFBQSxVQUFVLEVBQUUsTUFBTTtJQUNsQjFFLEVBQUFBLE1BQU0sRUFBRSxNQUFNO01BQ2RvQyxLQUFLLEVBQUV6QyxHQUFDLENBQUNVLEtBQUs7SUFDZDJGLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pZLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCeEIsRUFBQUEsT0FBTyxFQUFFLFNBQVM7SUFDbEJHLEVBQUFBLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0QsTUFBTStCLE1BQU0sR0FBRztJQUNYbEMsRUFBQUEsT0FBTyxFQUFFLFVBQVU7SUFDbkJWLEVBQUFBLFVBQVUsRUFBRSxhQUFhO01BQ3pCdEMsS0FBSyxFQUFFekMsR0FBQyxDQUFDTSxLQUFLO0lBQ2RELEVBQUFBLE1BQU0sRUFBRSxDQUFBLFdBQUEsRUFBY0wsR0FBQyxDQUFDTSxLQUFLLENBQUEsQ0FBRTtJQUMvQnNGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pZLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxTQUFTLEVBQUU7SUFDZixDQUFDO0lBQ0QsU0FBU1UsU0FBU0EsQ0FBQztNQUFFQyxNQUFNO01BQUVDLFFBQVE7SUFBRUMsRUFBQUE7SUFBVSxDQUFDLEVBQUU7SUFDaEQsRUFBQSxvQkFBUXRHLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5RCxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUFFYSxNQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFQyxNQUFBQSxZQUFZLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDNUcxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsTUFBTTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsaUZBQWlGO1FBQUVpRCxLQUFLLEVBQUVRLE1BQU0sQ0FBQ0csV0FBVztJQUFFRixJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUdELE1BQU07SUFBRUcsTUFBQUEsV0FBVyxFQUFFdkQsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFMUIsTUFBQUEsSUFBSSxFQUFFO0lBQUU7SUFBRSxHQUFDLENBQUMsZUFDalJyRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMEUsTUFBQUEsUUFBUSxFQUFFLEVBQUU7VUFBRTVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2EsS0FBSztJQUFFdUUsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRUMsTUFBQUEsVUFBVSxFQUFFLFFBQVE7SUFBRWEsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRWUsTUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFBRWdCLE1BQUFBLFVBQVUsRUFBRTtJQUFTO0lBQUUsR0FBQyxlQUM1SnhHLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxVQUFVO1FBQUUrRCxPQUFPLEVBQUVMLE1BQU0sQ0FBQ00sVUFBVTtJQUFFTCxJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUdELE1BQU07SUFBRU0sTUFBQUEsVUFBVSxFQUFFMUQsQ0FBQyxDQUFDQyxNQUFNLENBQUN3RDtJQUFRLEtBQUMsQ0FBQztJQUFFdkcsSUFBQUEsS0FBSyxFQUFFO1VBQUV5RyxXQUFXLEVBQUVwSSxHQUFDLENBQUNNO0lBQU07T0FBRyxDQUFDLEVBQ3JMLGdDQUFnQyxDQUFDLGVBQ3JDbUIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkcsSUFBQUEsT0FBTyxFQUFFTixRQUFRO0lBQUVwRyxJQUFBQSxLQUFLLEVBQUUrRjtPQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekY7SUFDZSxTQUFTaUksVUFBVUEsQ0FBQ3RFLEtBQUssRUFBRTtNQUN0QyxNQUFNLENBQUNsQixLQUFLLEVBQUVtQixRQUFRLENBQUMsR0FBRzlKLGNBQVEsQ0FBQyxFQUFFLENBQUM7TUFDdEMsTUFBTSxDQUFDeUssVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzFLLGNBQVEsQ0FBQyxLQUFLLENBQUM7TUFDbkQsTUFBTSxDQUFDbUksU0FBUyxFQUFFaUcsWUFBWSxDQUFDLEdBQUdwTyxjQUFRLENBQUMsQ0FDdkM7SUFBRXlILElBQUFBLGFBQWEsRUFBRSxFQUFFO0lBQUVDLElBQUFBLGFBQWEsRUFBRSxRQUFRO0lBQUVULElBQUFBLE9BQU8sRUFBRSxDQUFDO0lBQUVULE1BQUFBLFdBQVcsRUFBRSxFQUFFO0lBQUVHLE1BQUFBLFVBQVUsRUFBRTtTQUFPO0lBQUUsR0FBQyxDQUNwRyxDQUFDO0lBQ0YsRUFBQSxNQUFNc0UsTUFBTSxHQUFHdkwsTUFBTSxDQUFDd0wsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQztNQUNwRixNQUFNbEQsV0FBVyxHQUFHQSxNQUFNO0lBQ3RCa0csSUFBQUEsWUFBWSxDQUFDLENBQUMsR0FBR2pHLFNBQVMsRUFBRTtJQUFFVixNQUFBQSxhQUFhLEVBQUUsRUFBRTtJQUFFQyxNQUFBQSxhQUFhLEVBQUUsUUFBUTtJQUFFVCxNQUFBQSxPQUFPLEVBQUUsQ0FBQztJQUFFVCxRQUFBQSxXQUFXLEVBQUUsRUFBRTtJQUFFRyxRQUFBQSxVQUFVLEVBQUU7V0FBTztJQUFFLEtBQUMsQ0FBQyxDQUFDO01BQ25JLENBQUM7SUFDRCxFQUFBLE1BQU15QixjQUFjLEdBQUdBLENBQUNqQixDQUFDLEVBQUVrQixDQUFDLEtBQUs7SUFDN0IsSUFBQSxNQUFNaEIsSUFBSSxHQUFHLENBQUMsR0FBR2MsU0FBUyxDQUFDO0lBQzNCZCxJQUFBQSxJQUFJLENBQUNGLENBQUMsQ0FBQyxHQUFHa0IsQ0FBQztRQUNYK0YsWUFBWSxDQUFDL0csSUFBSSxDQUFDO01BQ3RCLENBQUM7TUFDRCxNQUFNaUIsY0FBYyxHQUFJbkIsQ0FBQyxJQUFLO0lBQzFCaUgsSUFBQUEsWUFBWSxDQUFDakcsU0FBUyxDQUFDWixNQUFNLENBQUMsQ0FBQy9GLENBQUMsRUFBRWdHLEdBQUcsS0FBS0EsR0FBRyxLQUFLTCxDQUFDLENBQUMsQ0FBQztNQUN6RCxDQUFDO0lBQ0QsRUFBQSxNQUFNa0UsWUFBWSxHQUFHLE1BQU9wSSxDQUFDLElBQUs7UUFDOUJBLENBQUMsQ0FBQ3FJLGNBQWMsRUFBRTtRQUNsQlosYUFBYSxDQUFDLElBQUksQ0FBQztRQUNuQixJQUFJO0lBQ0EsTUFBQSxNQUFNYSxJQUFJLEdBQUd0SSxDQUFDLENBQUNDLE1BQU07SUFDckIsTUFBQSxNQUFNc0ksRUFBRSxHQUFHLElBQUlDLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDO0lBQzdCLE1BQUEsTUFBTUcsTUFBTSxHQUFHLElBQUlDLGVBQWUsRUFBRTtJQUNwQyxNQUFBLEtBQUssTUFBTSxDQUFDaEssR0FBRyxFQUFFaUssR0FBRyxDQUFDLElBQUlKLEVBQUUsQ0FBQ0ssT0FBTyxFQUFFLEVBQUU7SUFDbkNILFFBQUFBLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDbkssR0FBRyxFQUFFaUssR0FBRyxDQUFDO0lBQzNCLE1BQUE7SUFDQSxNQUFBLE1BQU1HLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNmLE1BQU0sRUFBRTtJQUM1QmpKLFFBQUFBLE1BQU0sRUFBRSxNQUFNO0lBQ2RpSyxRQUFBQSxPQUFPLEVBQUU7SUFBRSxVQUFBLGNBQWMsRUFBRTthQUFxQztJQUNoRUMsUUFBQUEsSUFBSSxFQUFFUjtJQUNWLE9BQUMsQ0FBQztJQUNGLE1BQUEsTUFBTVMsSUFBSSxHQUFHLE1BQU1KLEdBQUcsQ0FBQ0ssSUFBSSxFQUFFO1VBQzdCLElBQUlELElBQUksQ0FBQ0UsV0FBVyxFQUFFO0lBQ2xCM00sUUFBQUEsTUFBTSxDQUFDd0wsUUFBUSxDQUFDb0IsSUFBSSxHQUFHSCxJQUFJLENBQUNFLFdBQVc7SUFDM0MsTUFBQSxDQUFDLE1BQ0k7WUFDREUsS0FBSyxDQUFDSixJQUFJLENBQUNLLE1BQU0sRUFBRUMsT0FBTyxJQUFJLDJCQUEyQixDQUFDO0lBQzlELE1BQUE7UUFDSixDQUFDLENBQ0QsT0FBT0MsR0FBRyxFQUFFO0lBQ1JILE1BQUFBLEtBQUssQ0FBQyxDQUFBLFFBQUEsRUFBV0csR0FBRyxDQUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNuQyxJQUFBLENBQUMsU0FDTztVQUNKL0IsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN4QixJQUFBO01BQ0osQ0FBQztJQUNELEVBQUEsb0JBQVF6SyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFOEQsTUFBQUEsT0FBTyxFQUFFLEVBQUU7SUFBRVAsTUFBQUEsU0FBUyxFQUFFLE9BQU87VUFBRUssZUFBZSxFQUFFdkYsR0FBQyxDQUFDQyxNQUFNO1VBQUV3QyxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFBRTZFLE1BQUFBLFVBQVUsRUFBRTtJQUF1QjtJQUFFLEdBQUMsZUFDNUovRCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQUU4QixJQUFBQSxNQUFNLEVBQUUsTUFBTTtJQUFFMkssSUFBQUEsUUFBUSxFQUFFdEIsWUFBWTtJQUFFbEwsSUFBQUEsS0FBSyxFQUFFO0lBQUVnRSxNQUFBQSxRQUFRLEVBQUUsR0FBRztJQUFFeUksTUFBQUEsTUFBTSxFQUFFO0lBQVM7SUFBRSxHQUFDLGVBQzlHM00sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlNLE1BQUFBLE1BQU0sRUFBRSxTQUFTO0lBQUUvSCxNQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUFFQyxNQUFBQSxVQUFVLEVBQUU7SUFBSTtPQUFHLEVBQUUsaUZBQWlGLENBQUMsZUFDN0s3RSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsR0FBRyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeU0sTUFBQUEsTUFBTSxFQUFFLFVBQVU7SUFBRS9ILE1BQUFBLFFBQVEsRUFBRSxFQUFFO1VBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNjO0lBQU07T0FBRyxFQUFFLHlNQUF5TSxDQUFDLGVBQ3BTVyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFd0UsTUFBQUEsWUFBWSxFQUFFO0lBQUc7SUFBRSxHQUFDLGVBQ3REMUUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU0TTtPQUFZLEVBQUUsbUZBQW1GLENBQUMsZUFDeEk5TSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUUyRixJQUFBQSxLQUFLLEVBQUU4QyxLQUFLO1FBQUVyQyxRQUFRLEVBQUVyRCxDQUFDLElBQUk2RyxRQUFRLENBQUM3RyxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQztJQUFFbkQsSUFBQUEsSUFBSSxFQUFFLE9BQU87SUFBRUUsSUFBQUEsV0FBVyxFQUFFLCtJQUErSTtJQUFFekMsSUFBQUEsS0FBSyxFQUFFNk0sY0FBYztJQUFFbEssSUFBQUEsUUFBUSxFQUFFO09BQU0sQ0FBQyxDQUFDLGVBQ2hUN0Msc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRUQsSUFBQUEsSUFBSSxFQUFFLGdCQUFnQjtJQUFFbUQsSUFBQUEsS0FBSyxFQUFFeUgsSUFBSSxDQUFDQyxTQUFTLENBQUNwRixTQUFTO0lBQUUsR0FBQyxDQUFDLGVBQzFHbEksc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxHQUFHO1VBQUU3RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNZLEtBQUs7SUFBRXdOLE1BQUFBLE1BQU0sRUFBRTtJQUFXO09BQUcsRUFDdEcsNENBQTRDLGVBQzVDM00sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO1VBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNjLEtBQUs7SUFBRXdGLE1BQUFBLFVBQVUsRUFBRSxHQUFHO0lBQUV1SSxNQUFBQSxVQUFVLEVBQUU7SUFBRTtPQUFHLEVBQ25HLEdBQUcsRUFDSGxGLFNBQVMsQ0FBQzVHLE1BQU0sRUFDaEIsR0FBRyxDQUFDLENBQUMsRUFDYjRHLFNBQVMsQ0FBQ1IsR0FBRyxDQUFDLENBQUNVLENBQUMsRUFBRWEsRUFBRSxtQkFBTWpKLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRXlCLElBQUFBLEdBQUcsRUFBRXVILEVBQUU7SUFBRS9JLElBQUFBLEtBQUssRUFBRTtJQUFFd0UsTUFBQUEsWUFBWSxFQUFFLEVBQUU7SUFBRVYsTUFBQUEsT0FBTyxFQUFFLEVBQUU7VUFBRVYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDRyxNQUFNO0lBQUVFLE1BQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUFFdUYsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQzlLbkUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVDLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUNwRzFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSwyRUFBMkU7UUFBRWlELEtBQUssRUFBRXdDLENBQUMsQ0FBQ1osYUFBYTtJQUFFbkIsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJbUYsY0FBYyxDQUFDYyxFQUFFLEVBQUU7SUFBRSxNQUFBLEdBQUdiLENBQUM7SUFBRVosTUFBQUEsYUFBYSxFQUFFeEUsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztRQUFFbkQsSUFBSSxFQUFFLENBQUEsU0FBQSxFQUFZd0csRUFBRSxDQUFBLENBQUU7SUFBRS9JLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZGLFlBQVU7SUFBRTFCLE1BQUFBLElBQUksRUFBRTtJQUFFO0lBQUUsR0FBQyxDQUFDLGVBQ3ZTckUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtRQUFFMkYsS0FBSyxFQUFFd0MsQ0FBQyxDQUFDWCxhQUFhO0lBQUVwQixJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUltRixjQUFjLENBQUNjLEVBQUUsRUFBRTtJQUFFLE1BQUEsR0FBR2IsQ0FBQztJQUFFWCxNQUFBQSxhQUFhLEVBQUV6RSxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU4RjtJQUFZLEdBQUMsRUFBRUgsY0FBYyxDQUFDNkIsR0FBRyxDQUFDQyxFQUFFLGtCQUFLM0gsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtRQUFFeUIsR0FBRyxFQUFFaUcsRUFBRSxDQUFDL0IsS0FBSztRQUFFQSxLQUFLLEVBQUUrQixFQUFFLENBQUMvQjtJQUFNLEdBQUMsRUFBRStCLEVBQUUsQ0FBQ3BGLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUNsUXZDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRTJHLElBQUFBLE9BQU8sRUFBRUEsTUFBTXlCLGNBQWMsQ0FBQ1ksRUFBRSxDQUFDO0lBQUUvSSxJQUFBQSxLQUFLLEVBQUUrRjtJQUFVLEdBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUNyR21DLENBQUMsQ0FBQ1gsYUFBYSxLQUFLLE1BQU0sa0JBQUt6SCxzQkFBSyxDQUFDQyxhQUFhLENBQUNELHNCQUFLLENBQUM0SCxRQUFRLEVBQUUsSUFBSSxFQUNuRVEsQ0FBQyxDQUFDcEIsT0FBTyxDQUFDVSxHQUFHLENBQUMsQ0FBQ1AsQ0FBQyxFQUFFVyxFQUFFLG1CQUFNOUgsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDa0csU0FBUyxFQUFFO0lBQUV6RSxJQUFBQSxHQUFHLEVBQUVvRyxFQUFFO0lBQUUxQixJQUFBQSxNQUFNLEVBQUVlLENBQUM7UUFBRWQsUUFBUSxFQUFFd0IsR0FBRyxJQUFJO0lBQ3hGLE1BQUEsTUFBTVQsSUFBSSxHQUFHLENBQUMsR0FBR2dCLENBQUMsQ0FBQ3BCLE9BQU8sQ0FBQztJQUMzQkksTUFBQUEsSUFBSSxDQUFDVSxFQUFFLENBQUMsR0FBR0QsR0FBRztVQUNkTSxjQUFjLENBQUNjLEVBQUUsRUFBRTtJQUFFLFFBQUEsR0FBR2IsQ0FBQztJQUFFcEIsUUFBQUEsT0FBTyxFQUFFSTtJQUFLLE9BQUMsQ0FBQztRQUMvQyxDQUFDO1FBQUVkLFFBQVEsRUFBRUEsTUFBTTtVQUNmNkIsY0FBYyxDQUFDYyxFQUFFLEVBQUU7SUFBRSxRQUFBLEdBQUdiLENBQUM7SUFBRXBCLFFBQUFBLE9BQU8sRUFBRW9CLENBQUMsQ0FBQ3BCLE9BQU8sQ0FBQ00sTUFBTSxDQUFDLENBQUMvRixDQUFDLEVBQUVnRyxHQUFHLEtBQUtBLEdBQUcsS0FBS08sRUFBRTtJQUFFLE9BQUMsQ0FBQztJQUNuRixJQUFBO09BQUcsQ0FBQyxDQUFDLENBQUMsZUFDVjlILHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUVrRSxJQUFBQSxPQUFPLEVBQUVBLE1BQU11QixjQUFjLENBQUNjLEVBQUUsRUFBRTtJQUFFLE1BQUEsR0FBR2IsQ0FBQztJQUFFcEIsTUFBQUEsT0FBTyxFQUFFLENBQUMsR0FBR29CLENBQUMsQ0FBQ3BCLE9BQU8sRUFBRTtJQUFFVCxRQUFBQSxXQUFXLEVBQUUsRUFBRTtJQUFFRyxRQUFBQSxVQUFVLEVBQUU7V0FBTztJQUFFLEtBQUMsQ0FBQztJQUFFeEcsSUFBQUEsS0FBSyxFQUFFZ0c7SUFBTyxHQUFDLEVBQUUsbUZBQW1GLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQ2hSbEcsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRWtFLElBQUFBLE9BQU8sRUFBRXFCLFdBQVc7SUFBRS9ILElBQUFBLEtBQUssRUFBRWtPO09BQXFCLEVBQUUseUZBQXlGLENBQUMsZUFDOUxwTyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFdUYsTUFBQUEsU0FBUyxFQUFFO0lBQUc7SUFBRSxHQUFDLGVBQ25EekYsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRThLLElBQUFBLFFBQVEsRUFBRWhELFVBQVU7SUFBRXRLLElBQUFBLEtBQUssRUFBRXVOO09BQWdCLEVBQUVqRCxVQUFVLEdBQUcsV0FBVyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1SjtJQUNBLE1BQU1zQyxZQUFVLEdBQUc7SUFDZm5KLEVBQUFBLE9BQU8sRUFBRSxPQUFPO0lBQ2hCaUIsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsRUFBQUEsVUFBVSxFQUFFLEdBQUc7TUFDZjdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2EsS0FBSztJQUNkc0YsRUFBQUEsWUFBWSxFQUFFO0lBQ2xCLENBQUM7SUFDRCxNQUFNcUksY0FBYyxHQUFHO0lBQ25CckosRUFBQUEsS0FBSyxFQUFFLE1BQU07SUFDYk0sRUFBQUEsT0FBTyxFQUFFLFVBQVU7TUFDbkJWLFVBQVUsRUFBRS9FLEdBQUMsQ0FBQ0ksT0FBTztNQUNyQnFDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUNkTixFQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFDL0J1RixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaUyxFQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmcEIsRUFBQUEsU0FBUyxFQUFFO0lBQ2YsQ0FBQztJQUNELE1BQU1tSyxtQkFBbUIsR0FBRztJQUN4QnBLLEVBQUFBLE9BQU8sRUFBRSxVQUFVO0lBQ25CVixFQUFBQSxVQUFVLEVBQUUsYUFBYTtNQUN6QnRDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1EsSUFBSTtJQUNiSCxFQUFBQSxNQUFNLEVBQUUsQ0FBQSxXQUFBLEVBQWNMLEdBQUMsQ0FBQ1EsSUFBSSxDQUFBLENBQUU7SUFDOUJvRixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaWSxFQUFBQSxNQUFNLEVBQUU7SUFDWixDQUFDO0lBQ0QsTUFBTWlJLGdCQUFjLEdBQUc7SUFDbkJ6SixFQUFBQSxPQUFPLEVBQUUsV0FBVztNQUNwQlYsVUFBVSxFQUFFLDJCQUEyQi9FLEdBQUMsQ0FBQ00sS0FBSyxDQUFBLEVBQUEsRUFBS04sR0FBQyxDQUFDTyxTQUFTLENBQUEsQ0FBQSxDQUFHO0lBQ2pFa0MsRUFBQUEsS0FBSyxFQUFFLE1BQU07SUFDYnBDLEVBQUFBLE1BQU0sRUFBRSxNQUFNO0lBQ2R1RixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxFQUFBQSxVQUFVLEVBQUUsR0FBRztJQUNmVyxFQUFBQSxNQUFNLEVBQUU7SUFDWixDQUFDOztJQ3ZMRCxNQUFNakgsR0FBQyxHQUFHO0lBQ05DLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCRSxFQUNBQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxTQUFTLEVBQUUsU0FBUztJQUNwQk0sRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCSCxFQUFBQSxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQ0QsTUFBTW1QLEtBQUssR0FBRyxDQUNWO0lBQUV6SSxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVUsQ0FBQyxFQUN0QztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFlLENBQUMsRUFDeEM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxPQUFPO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBZ0IsQ0FBQyxDQUM3QztJQUNjLFNBQVMrTCxVQUFVQSxDQUFDMUUsS0FBSyxFQUFFO01BQ3RDLE1BQU0sQ0FBQ1ksVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzFLLGNBQVEsQ0FBQyxLQUFLLENBQUM7SUFDbkQsRUFBQSxNQUFNaUwsTUFBTSxHQUFHdkwsTUFBTSxDQUFDd0wsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQztJQUNwRixFQUFBLE1BQU1DLFlBQVksR0FBRyxNQUFPcEksQ0FBQyxJQUFLO1FBQzlCQSxDQUFDLENBQUNxSSxjQUFjLEVBQUU7UUFDbEJaLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkIsSUFBSTtJQUNBLE1BQUEsTUFBTWEsSUFBSSxHQUFHdEksQ0FBQyxDQUFDQyxNQUFNO0lBQ3JCLE1BQUEsTUFBTXNJLEVBQUUsR0FBRyxJQUFJQyxRQUFRLENBQUNGLElBQUksQ0FBQztJQUM3QixNQUFBLE1BQU1HLE1BQU0sR0FBRyxJQUFJQyxlQUFlLEVBQUU7SUFDcEMsTUFBQSxLQUFLLE1BQU0sQ0FBQ2hLLEdBQUcsRUFBRWlLLEdBQUcsQ0FBQyxJQUFJSixFQUFFLENBQUNLLE9BQU8sRUFBRSxFQUFFO0lBQ25DSCxRQUFBQSxNQUFNLENBQUNJLE1BQU0sQ0FBQ25LLEdBQUcsRUFBRWlLLEdBQUcsQ0FBQztJQUMzQixNQUFBO0lBQ0EsTUFBQSxNQUFNRyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDZixNQUFNLEVBQUU7SUFDNUJqSixRQUFBQSxNQUFNLEVBQUUsTUFBTTtJQUNkaUssUUFBQUEsT0FBTyxFQUFFO0lBQUUsVUFBQSxjQUFjLEVBQUU7YUFBcUM7SUFDaEVDLFFBQUFBLElBQUksRUFBRVI7SUFDVixPQUFDLENBQUM7SUFDRixNQUFBLE1BQU1TLElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUksRUFBRTtVQUM3QixJQUFJRCxJQUFJLENBQUNFLFdBQVcsRUFBRTtJQUNsQjNNLFFBQUFBLE1BQU0sQ0FBQ3dMLFFBQVEsQ0FBQ29CLElBQUksR0FBR0gsSUFBSSxDQUFDRSxXQUFXO0lBQzNDLE1BQUEsQ0FBQyxNQUNJO1lBQ0RFLEtBQUssQ0FBQ0osSUFBSSxDQUFDSyxNQUFNLEVBQUVDLE9BQU8sSUFBSSxrQ0FBa0MsQ0FBQztJQUNyRSxNQUFBO1FBQ0osQ0FBQyxDQUNELE9BQU9DLEdBQUcsRUFBRTtJQUNSSCxNQUFBQSxLQUFLLENBQUMsQ0FBQSxRQUFBLEVBQVdHLEdBQUcsQ0FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDbkMsSUFBQSxDQUFDLFNBQ087VUFDSi9CLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDeEIsSUFBQTtNQUNKLENBQUM7SUFDRCxFQUFBLG9CQUFRekssc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRThELE1BQUFBLE9BQU8sRUFBRSxFQUFFO0lBQUVQLE1BQUFBLFNBQVMsRUFBRSxPQUFPO1VBQUVLLGVBQWUsRUFBRXZGLEdBQUMsQ0FBQ0MsTUFBTTtVQUFFd0MsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQUU2RSxNQUFBQSxVQUFVLEVBQUU7SUFBdUI7SUFBRSxHQUFDLGVBQzVKL0Qsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFOEIsSUFBQUEsTUFBTSxFQUFFLE1BQU07SUFBRTJLLElBQUFBLFFBQVEsRUFBRXRCLFlBQVk7SUFBRWxMLElBQUFBLEtBQUssRUFBRTtJQUFFZ0UsTUFBQUEsUUFBUSxFQUFFLEdBQUc7SUFBRXlJLE1BQUFBLE1BQU0sRUFBRTtJQUFTO0lBQUUsR0FBQyxlQUM5RzNNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5TSxNQUFBQSxNQUFNLEVBQUUsU0FBUztJQUFFL0gsTUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFBRUMsTUFBQUEsVUFBVSxFQUFFO0lBQUk7T0FBRyxFQUFFLDJIQUEySCxDQUFDLGVBQ3ZON0Usc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlNLE1BQUFBLE1BQU0sRUFBRSxVQUFVO0lBQUUvSCxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDYztJQUFNO09BQUcsRUFBRSxzSUFBc0ksQ0FBQyxlQUNqT1csc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXdFLE1BQUFBLFlBQVksRUFBRTtJQUFHO0lBQUUsR0FBQyxlQUN0RDFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFNE07T0FBWSxFQUFFLFNBQVMsQ0FBQyxlQUM5RDlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxPQUFPO0lBQUVELElBQUFBLElBQUksRUFBRSxPQUFPO0lBQUVFLElBQUFBLFdBQVcsRUFBRSxrQkFBa0I7SUFBRXpDLElBQUFBLEtBQUssRUFBRTZGLFVBQVU7SUFBRWxELElBQUFBLFFBQVEsRUFBRTtPQUFNLENBQUMsQ0FBQyxlQUN2STdDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV3RSxNQUFBQSxZQUFZLEVBQUU7SUFBRztJQUFFLEdBQUMsZUFDdEQxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSx3Q0FBd0MsQ0FBQyxlQUM3RjlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxVQUFVO0lBQUVELElBQUFBLElBQUksRUFBRSxVQUFVO0lBQUVFLElBQUFBLFdBQVcsRUFBRSwrRkFBK0Y7SUFBRXpDLElBQUFBLEtBQUssRUFBRTZGLFVBQVU7SUFBRWxELElBQUFBLFFBQVEsRUFBRTtPQUFNLENBQUMsQ0FBQyxlQUMxTjdDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV3RSxNQUFBQSxZQUFZLEVBQUU7SUFBRztJQUFFLEdBQUMsZUFDdEQxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSw2RkFBNkYsQ0FBQyxlQUNsSjlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVELElBQUFBLElBQUksRUFBRSxVQUFVO0lBQUVFLElBQUFBLFdBQVcsRUFBRSxVQUFVO0lBQUV6QyxJQUFBQSxLQUFLLEVBQUU2RjtPQUFZLENBQUMsQ0FBQyxlQUNqSC9GLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV3RSxNQUFBQSxZQUFZLEVBQUU7SUFBRztJQUFFLEdBQUMsZUFDdEQxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSwwQkFBMEIsQ0FBQyxlQUMvRTlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRXdDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUV2QyxJQUFBQSxLQUFLLEVBQUU2RjtJQUFXLEdBQUMsRUFBRXNJLEtBQUssQ0FBQzNHLEdBQUcsQ0FBQzdGLENBQUMsa0JBQUs3QixzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUV5QixHQUFHLEVBQUVHLENBQUMsQ0FBQytELEtBQUs7UUFBRUEsS0FBSyxFQUFFL0QsQ0FBQyxDQUFDK0Q7SUFBTSxHQUFDLEVBQUUvRCxDQUFDLENBQUNVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQ25LdkMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRThLLElBQUFBLFFBQVEsRUFBRWhELFVBQVU7SUFBRXRLLElBQUFBLEtBQUssRUFBRXVOO09BQWdCLEVBQUVqRCxVQUFVLEdBQUcsV0FBVyxHQUFHLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUMvSjtJQUNBLE1BQU1zQyxVQUFVLEdBQUc7SUFDZm5KLEVBQUFBLE9BQU8sRUFBRSxPQUFPO0lBQ2hCaUIsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsRUFBQUEsVUFBVSxFQUFFLEdBQUc7TUFDZjdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2EsS0FBSztJQUNkc0YsRUFBQUEsWUFBWSxFQUFFO0lBQ2xCLENBQUM7SUFDRCxNQUFNcUIsVUFBVSxHQUFHO0lBQ2ZyQyxFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNiTSxFQUFBQSxPQUFPLEVBQUUsVUFBVTtNQUNuQlYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDSSxPQUFPO0lBQ3JCcUMsRUFBQUEsS0FBSyxFQUFFLE1BQU07SUFDYnBDLEVBQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUMvQnVGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pTLEVBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZwQixFQUFBQSxTQUFTLEVBQUU7SUFDZixDQUFDO0lBQ0QsTUFBTXdKLGNBQWMsR0FBRztJQUNuQnpKLEVBQUFBLE9BQU8sRUFBRSxXQUFXO01BQ3BCVixVQUFVLEVBQUUsMkJBQTJCL0UsR0FBQyxDQUFDTSxLQUFLLENBQUEsRUFBQSxFQUFLTixHQUFDLENBQUNPLFNBQVMsQ0FBQSxDQUFBLENBQUc7SUFDakVrQyxFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNicEMsRUFBQUEsTUFBTSxFQUFFLE1BQU07SUFDZHVGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEVBQUFBLFVBQVUsRUFBRSxHQUFHO0lBQ2ZXLEVBQUFBLE1BQU0sRUFBRTtJQUNaLENBQUM7O0lDOUZELE1BQU1qSCxHQUFDLEdBQUc7SUFDTkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJFLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxPQUFPLEVBQUUsU0FBUztJQUNsQkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxTQUFTLEVBQUUsU0FBUztJQUNwQkcsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFDQUMsS0FBSyxFQUFFO0lBQ1gsQ0FBQztJQUNjLFNBQVNrUCxTQUFTQSxDQUFDM0UsS0FBSyxFQUFFO01BQ3JDLE1BQU0rRCxNQUFNLEdBQUcvRCxLQUFLLENBQUMrRCxNQUFNLEVBQUVsQyxNQUFNLElBQUksRUFBRTtNQUN6QyxNQUFNK0MsY0FBYyxHQUFHLENBQUMsTUFBTTtRQUMxQixJQUFJO0lBQ0EsTUFBQSxPQUFPYixNQUFNLENBQUNjLFlBQVksR0FBR3BCLElBQUksQ0FBQ1UsS0FBSyxDQUFDSixNQUFNLENBQUNjLFlBQVksQ0FBQyxHQUFHLEVBQUU7SUFDckUsSUFBQSxDQUFDLENBQ0QsTUFBTTtJQUNGLE1BQUEsT0FBTyxFQUFFO0lBQ2IsSUFBQTtJQUNKLEVBQUEsQ0FBQyxHQUFHO0lBQ0osRUFBQSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxHQUFHM08sY0FBUSxDQUFDeU8sY0FBYyxDQUFDO0lBQzFDLEVBQUEsTUFBTSxDQUFDRyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN08sY0FBUSxDQUFDLElBQUk4TyxHQUFHLEVBQUUsQ0FBQztNQUNuRCxNQUFNLENBQUNyRSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHMUssY0FBUSxDQUFDLEtBQUssQ0FBQztJQUNuRCxFQUFBLE1BQU1pTCxNQUFNLEdBQUd2TCxNQUFNLENBQUN3TCxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDO01BQ3BGLE1BQU0yRCxZQUFZLEdBQUl0TSxFQUFFLElBQUs7UUFDekJvTSxXQUFXLENBQUNHLElBQUksSUFBSTtJQUNoQixNQUFBLE1BQU0zSCxJQUFJLEdBQUcsSUFBSXlILEdBQUcsQ0FBQ0UsSUFBSSxDQUFDO1VBQzFCLElBQUkzSCxJQUFJLENBQUM0SCxHQUFHLENBQUN4TSxFQUFFLENBQUMsRUFDWjRFLElBQUksQ0FBQzZILE1BQU0sQ0FBQ3pNLEVBQUUsQ0FBQyxDQUFDLEtBRWhCNEUsSUFBSSxDQUFDOEgsR0FBRyxDQUFDMU0sRUFBRSxDQUFDO0lBQ2hCLE1BQUEsT0FBTzRFLElBQUk7SUFDZixJQUFBLENBQUMsQ0FBQztNQUNOLENBQUM7SUFDRCxFQUFBLE1BQU1nRSxZQUFZLEdBQUcsTUFBT3BJLENBQUMsSUFBSztRQUM5QkEsQ0FBQyxDQUFDcUksY0FBYyxFQUFFO1FBQ2xCWixhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25CLElBQUk7SUFDQSxNQUFBLE1BQU1hLElBQUksR0FBR3RJLENBQUMsQ0FBQ0MsTUFBTTtJQUNyQixNQUFBLE1BQU1zSSxFQUFFLEdBQUcsSUFBSUMsUUFBUSxDQUFDRixJQUFJLENBQUM7SUFDN0IsTUFBQSxNQUFNRyxNQUFNLEdBQUcsSUFBSUMsZUFBZSxFQUFFO0lBQ3BDLE1BQUEsS0FBSyxNQUFNLENBQUNoSyxHQUFHLEVBQUVpSyxHQUFHLENBQUMsSUFBSUosRUFBRSxDQUFDSyxPQUFPLEVBQUUsRUFBRTtJQUNuQ0gsUUFBQUEsTUFBTSxDQUFDSSxNQUFNLENBQUNuSyxHQUFHLEVBQUVpSyxHQUFHLENBQUM7SUFDM0IsTUFBQTtJQUNBLE1BQUEsTUFBTUcsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ2YsTUFBTSxFQUFFO0lBQzVCakosUUFBQUEsTUFBTSxFQUFFLE1BQU07SUFDZGlLLFFBQUFBLE9BQU8sRUFBRTtJQUFFLFVBQUEsY0FBYyxFQUFFO2FBQXFDO0lBQ2hFQyxRQUFBQSxJQUFJLEVBQUVSO0lBQ1YsT0FBQyxDQUFDO0lBQ0YsTUFBQSxNQUFNUyxJQUFJLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxJQUFJLEVBQUU7VUFDN0IsSUFBSUQsSUFBSSxDQUFDRSxXQUFXLEVBQUU7SUFDbEIzTSxRQUFBQSxNQUFNLENBQUN3TCxRQUFRLENBQUNvQixJQUFJLEdBQUdILElBQUksQ0FBQ0UsV0FBVztJQUMzQyxNQUFBLENBQUMsTUFDSTtZQUNERSxLQUFLLENBQUNKLElBQUksQ0FBQ0ssTUFBTSxFQUFFQyxPQUFPLElBQUksdUJBQXVCLENBQUM7SUFDMUQsTUFBQTtRQUNKLENBQUMsQ0FDRCxPQUFPQyxHQUFHLEVBQUU7SUFDUkgsTUFBQUEsS0FBSyxDQUFDLENBQUEsUUFBQSxFQUFXRyxHQUFHLENBQUNELE9BQU8sRUFBRSxDQUFDO0lBQ25DLElBQUEsQ0FBQyxTQUNPO1VBQ0ovQixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3hCLElBQUE7TUFDSixDQUFDO0lBQ0QsRUFBQSxvQkFBUXpLLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUU4RCxNQUFBQSxPQUFPLEVBQUUsRUFBRTtJQUFFUCxNQUFBQSxTQUFTLEVBQUUsT0FBTztVQUFFSyxlQUFlLEVBQUV2RixHQUFDLENBQUNDLE1BQU07VUFBRXdDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUFFNkUsTUFBQUEsVUFBVSxFQUFFO0lBQXVCO0lBQUUsR0FBQyxlQUM1Si9ELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRThCLElBQUFBLE1BQU0sRUFBRSxNQUFNO0lBQUUySyxJQUFBQSxRQUFRLEVBQUV0QixZQUFZO0lBQUVsTCxJQUFBQSxLQUFLLEVBQUU7SUFBRWdFLE1BQUFBLFFBQVEsRUFBRSxHQUFHO0lBQUV5SSxNQUFBQSxNQUFNLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDOUczTSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeU0sTUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFBRS9ILE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLFVBQVUsRUFBRTtJQUFJO09BQUcsRUFBRSxxSEFBcUgsQ0FBQyxlQUNqTjdFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5TSxNQUFBQSxNQUFNLEVBQUUsVUFBVTtJQUFFL0gsTUFBQUEsUUFBUSxFQUFFLEVBQUU7VUFBRTVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2M7SUFBTTtPQUFHLEVBQUUsMkpBQTJKLENBQUMsZUFDdFBXLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV3RSxNQUFBQSxZQUFZLEVBQUUsRUFBRTtJQUFFVixNQUFBQSxPQUFPLEVBQUUsRUFBRTtVQUFFVixVQUFVLEVBQUUvRSxHQUFDLENBQUNHLE1BQU07SUFBRUUsTUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQUV1RixNQUFBQSxZQUFZLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDM0luRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMEUsTUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFBRUMsTUFBQUEsVUFBVSxFQUFFLEdBQUc7VUFBRTdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1ksS0FBSztJQUFFd04sTUFBQUEsTUFBTSxFQUFFO0lBQVc7T0FBRyxFQUN0RyxzQ0FBc0MsZUFDdEMzTSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMEUsTUFBQUEsUUFBUSxFQUFFLEVBQUU7VUFBRTVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2MsS0FBSztJQUFFd0YsTUFBQUEsVUFBVSxFQUFFLEdBQUc7SUFBRXVJLE1BQUFBLFVBQVUsRUFBRTtJQUFFO09BQUcsRUFDbkcsR0FBRyxFQUNIc0IsT0FBTyxDQUFDcE4sTUFBTSxFQUNkLEdBQUcsQ0FBQyxDQUFDLEVBQ2JvTixPQUFPLENBQUNwTixNQUFNLEtBQUssQ0FBQyxrQkFBS3RCLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUwRSxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDYztJQUFNO09BQUcsRUFBRSwrREFBK0QsQ0FBQyxDQUFDLEVBQ2hLcVAsT0FBTyxDQUFDaEgsR0FBRyxDQUFFeUgsS0FBSyxJQUFLO1FBQ25CLE1BQU1DLE1BQU0sR0FBR1QsUUFBUSxDQUFDSyxHQUFHLENBQUNHLEtBQUssQ0FBQzNNLEVBQUUsQ0FBQztJQUNyQyxJQUFBLG9CQUFReEMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtVQUFFeUIsR0FBRyxFQUFFeU4sS0FBSyxDQUFDM00sRUFBRTtJQUFFdEMsTUFBQUEsS0FBSyxFQUFFO0lBQ25EeUQsUUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZkMsUUFBQUEsVUFBVSxFQUFFLFlBQVk7SUFDeEJhLFFBQUFBLEdBQUcsRUFBRSxDQUFDO0lBQ05DLFFBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZWLFFBQUFBLE9BQU8sRUFBRSxFQUFFO1lBQ1hWLFVBQVUsRUFBRS9FLEdBQUMsQ0FBQ0ksT0FBTztZQUNyQkMsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhd1EsTUFBTSxHQUFHN1EsR0FBQyxDQUFDVSxLQUFLLEdBQUdWLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFDbER1RixRQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmZSxRQUFBQSxPQUFPLEVBQUVrSyxNQUFNLEdBQUcsR0FBRyxHQUFHO0lBQzVCO0lBQUUsS0FBQyxlQUNIcFAsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsTUFBQUEsSUFBSSxFQUFFLFVBQVU7SUFBRStELE1BQUFBLE9BQU8sRUFBRTJJLE1BQU07VUFBRS9JLFFBQVEsRUFBRUEsTUFBTXlJLFlBQVksQ0FBQ0ssS0FBSyxDQUFDM00sRUFBRSxDQUFDO0lBQUV0QyxNQUFBQSxLQUFLLEVBQUU7SUFBRXVGLFFBQUFBLFNBQVMsRUFBRSxDQUFDO1lBQUVrQixXQUFXLEVBQUVwSSxHQUFDLENBQUNVO0lBQU07SUFBRSxLQUFDLENBQUMsZUFDMUplLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsTUFBQUEsS0FBSyxFQUFFO0lBQUVtRSxRQUFBQSxJQUFJLEVBQUU7SUFBRTtJQUFFLEtBQUMsZUFDN0NyRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLE1BQUFBLEtBQUssRUFBRTtJQUFFMEUsUUFBQUEsUUFBUSxFQUFFLEVBQUU7WUFBRTVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2MsS0FBSztJQUFFcUYsUUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxLQUFDLEVBQ25GLEdBQUcsRUFDSHlLLEtBQUssQ0FBQzNNLEVBQUUsRUFDUixVQUFVLEVBQ1YyTSxLQUFLLENBQUNFLFVBQVUsSUFBSSxRQUFRRixLQUFLLENBQUNHLE9BQU8sQ0FBQSxDQUFFLEVBQzNDLFVBQVUsRUFDVixJQUFJQyxJQUFJLENBQUNKLEtBQUssQ0FBQ0ssVUFBVSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDLGVBQ2hEelAsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxNQUFBQSxLQUFLLEVBQUU7SUFBRTBFLFFBQUFBLFFBQVEsRUFBRSxFQUFFO1lBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFBRXNILFFBQUFBLFVBQVUsRUFBRTtJQUFXO0lBQUUsS0FBQyxFQUFFMkksS0FBSyxDQUFDbEQsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6SCxFQUFBLENBQUMsQ0FBQyxlQUNGak0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRUQsSUFBQUEsSUFBSSxFQUFFLGtCQUFrQjtRQUFFbUQsS0FBSyxFQUFFeUgsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxHQUFHcUIsUUFBUSxDQUFDO09BQUcsQ0FBQyxDQUFDLGVBQ3JIM08sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRThLLElBQUFBLFFBQVEsRUFBRWhELFVBQVU7SUFBRXRLLElBQUFBLEtBQUssRUFBRTtJQUNyRThELE1BQUFBLE9BQU8sRUFBRSxXQUFXO1VBQ3BCVixVQUFVLEVBQUUsMkJBQTJCL0UsR0FBQyxDQUFDTSxLQUFLLENBQUEsRUFBQSxFQUFLTixHQUFDLENBQUNPLFNBQVMsQ0FBQSxDQUFBLENBQUc7SUFDakVrQyxNQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNicEMsTUFBQUEsTUFBTSxFQUFFLE1BQU07SUFDZHVGLE1BQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLE1BQUFBLFVBQVUsRUFBRSxHQUFHO0lBQ2ZXLE1BQUFBLE1BQU0sRUFBRWdGLFVBQVUsR0FBRyxhQUFhLEdBQUc7SUFDekM7T0FBRyxFQUFFQSxVQUFVLEdBQUcsYUFBYSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDaEU7O0lDbEhBLE1BQU1qTSxDQUFDLEdBQUc7SUFDTkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJrUixFQUNBaFIsTUFBTSxFQUFFLFNBQVM7SUFDakJpUixFQUNBL1EsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCK1EsRUFBQUEsVUFBVSxFQUFFLFNBQVM7SUFDckI5USxFQUFBQSxTQUFTLEVBQUUsU0FBUztJQUNwQkMsRUFBQUEsSUFBSSxFQUFFLFNBQVM7SUFDZkMsRUFBQUEsSUFBSSxFQUFFLFNBQVM7SUFDZkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEI0USxFQUFBQSxXQUFXLEVBQUUsU0FBUztJQUN0QkMsRUFBQUEsU0FBUyxFQUFFLFNBQVM7SUFDcEJDLEVBQUFBLFNBQVMsRUFBRSxTQUFTO0lBQ3BCQyxFQUFBQSxTQUFTLEVBQUU7SUFDZixDQUFDO0lBQ0QsTUFBTUMsTUFBTSxHQUFHO0lBQ1g3UCxFQUFBQSxJQUFJLEVBQUU7SUFDRjRELElBQUFBLE9BQU8sRUFBRSxFQUFFO0lBQ1hQLElBQUFBLFNBQVMsRUFBRSxPQUFPO1FBQ2xCSyxlQUFlLEVBQUV2RixDQUFDLENBQUNDLE1BQU07UUFDekJ3QyxLQUFLLEVBQUV6QyxDQUFDLENBQUNzUixXQUFXO0lBQ3BCOUwsSUFBQUEsVUFBVSxFQUFFO09BQ2Y7SUFDRG1NLEVBQUFBLE1BQU0sRUFBRTtJQUNKdk0sSUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZkUsSUFBQUEsY0FBYyxFQUFFLGVBQWU7SUFDL0JELElBQUFBLFVBQVUsRUFBRSxZQUFZO0lBQ3hCYyxJQUFBQSxZQUFZLEVBQUUsRUFBRTtJQUNoQnlMLElBQUFBLGFBQWEsRUFBRSxFQUFFO0lBQ2pCQyxJQUFBQSxZQUFZLEVBQUUsQ0FBQSxVQUFBLEVBQWE3UixDQUFDLENBQUNLLE1BQU0sQ0FBQTtPQUN0QztJQUNEOEosRUFBQUEsS0FBSyxFQUFFO0lBQ0hpRSxJQUFBQSxNQUFNLEVBQUUsQ0FBQztJQUNUL0gsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsSUFBQUEsVUFBVSxFQUFFLEdBQUc7UUFDZjdELEtBQUssRUFBRXpDLENBQUMsQ0FBQ3NSLFdBQVc7SUFDcEI5SyxJQUFBQSxhQUFhLEVBQUU7T0FDbEI7SUFDRHNMLEVBQUFBLFFBQVEsRUFBRTtJQUNONUssSUFBQUEsU0FBUyxFQUFFLENBQUM7SUFDWmIsSUFBQUEsUUFBUSxFQUFFLEVBQUU7UUFDWjVELEtBQUssRUFBRXpDLENBQUMsQ0FBQ3lSO09BQ1o7SUFDRE0sRUFBQUEsU0FBUyxFQUFFO0lBQ1AxTCxJQUFBQSxRQUFRLEVBQUUsRUFBRTtRQUNaNUQsS0FBSyxFQUFFekMsQ0FBQyxDQUFDeVIsU0FBUztJQUNsQnRLLElBQUFBLFNBQVMsRUFBRSxPQUFPO0lBQ2xCRCxJQUFBQSxTQUFTLEVBQUU7T0FDZDtJQUNEOEssRUFBQUEsV0FBVyxFQUFFO0lBQ1Q1TSxJQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmaUosSUFBQUEsbUJBQW1CLEVBQUUsdUNBQXVDO0lBQzVEbkksSUFBQUEsR0FBRyxFQUFFLEVBQUU7SUFDUEMsSUFBQUEsWUFBWSxFQUFFO09BQ2pCO01BQ0Q4TCxVQUFVLEVBQUc3SixXQUFXLEtBQU07UUFDMUI3QyxlQUFlLEVBQUV2RixDQUFDLENBQUNHLE1BQU07SUFDekJFLElBQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsQ0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtRQUMvQjZSLFNBQVMsRUFBRSxDQUFBLFVBQUEsRUFBYTlKLFdBQVcsQ0FBQSxDQUFFO0lBQ3JDeEMsSUFBQUEsWUFBWSxFQUFFLEVBQUU7SUFDaEJILElBQUFBLE9BQU8sRUFBRSxXQUFXO0lBQ3BCUSxJQUFBQSxRQUFRLEVBQUUsVUFBVTtJQUNwQkosSUFBQUEsUUFBUSxFQUFFLFFBQVE7SUFDbEJrQixJQUFBQSxVQUFVLEVBQUU7SUFDaEIsR0FBQyxDQUFDO0lBQ0ZvTCxFQUFBQSxXQUFXLEVBQUU7SUFDVDlMLElBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLElBQUFBLFVBQVUsRUFBRSxHQUFHO0lBQ2ZDLElBQUFBLGFBQWEsRUFBRSxXQUFXO0lBQzFCQyxJQUFBQSxhQUFhLEVBQUUsUUFBUTtRQUN2Qi9ELEtBQUssRUFBRXpDLENBQUMsQ0FBQ3lSLFNBQVM7SUFDbEJ0TCxJQUFBQSxZQUFZLEVBQUU7T0FDakI7SUFDRGlNLEVBQUFBLFdBQVcsRUFBRTtJQUNUL0wsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsSUFBQUEsVUFBVSxFQUFFLEdBQUc7UUFDZjdELEtBQUssRUFBRXpDLENBQUMsQ0FBQ3NSLFdBQVc7SUFDcEI3SyxJQUFBQSxVQUFVLEVBQUUsQ0FBQztJQUNiTixJQUFBQSxZQUFZLEVBQUU7T0FDakI7SUFDRGtNLEVBQUFBLFVBQVUsRUFBRTtJQUNSaE0sSUFBQUEsUUFBUSxFQUFFLEVBQUU7UUFDWjVELEtBQUssRUFBRXpDLENBQUMsQ0FBQ3FSLFVBQVU7SUFDbkJpQixJQUFBQSxjQUFjLEVBQUU7T0FDbkI7SUFDREMsRUFBQUEsU0FBUyxFQUFFO0lBQ1BsTSxJQUFBQSxRQUFRLEVBQUUsRUFBRTtRQUNaNUQsS0FBSyxFQUFFekMsQ0FBQyxDQUFDeVI7T0FDWjtJQUNEZSxFQUFBQSxVQUFVLEVBQUU7SUFDUnBOLElBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZpSixJQUFBQSxtQkFBbUIsRUFBRSx1Q0FBdUM7SUFDNURuSSxJQUFBQSxHQUFHLEVBQUU7T0FDUjtJQUNEdU0sRUFBQUEsTUFBTSxFQUFFO1FBQ0psTixlQUFlLEVBQUV2RixDQUFDLENBQUNHLE1BQU07SUFDekJFLElBQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsQ0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUMvQnVGLElBQUFBLFlBQVksRUFBRSxFQUFFO0lBQ2hCSCxJQUFBQSxPQUFPLEVBQUU7T0FDWjtJQUNEaU4sRUFBQUEsV0FBVyxFQUFFO0lBQ1R0RSxJQUFBQSxNQUFNLEVBQUUsWUFBWTtJQUNwQi9ILElBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLElBQUFBLFVBQVUsRUFBRSxHQUFHO1FBQ2Y3RCxLQUFLLEVBQUV6QyxDQUFDLENBQUN1UjtPQUNaO0lBQ0RvQixFQUFBQSxRQUFRLEVBQUU7SUFDTnZOLElBQUFBLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCSyxJQUFBQSxPQUFPLEVBQUUsVUFBVTtRQUNuQlYsVUFBVSxFQUFFLDJCQUEyQi9FLENBQUMsQ0FBQ00sS0FBSyxDQUFBLEVBQUEsRUFBS04sQ0FBQyxDQUFDTyxTQUFTLENBQUEsQ0FBQSxDQUFHO0lBQ2pFa0MsSUFBQUEsS0FBSyxFQUFFLE1BQU07SUFDYm1ELElBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2YwTSxJQUFBQSxjQUFjLEVBQUUsTUFBTTtJQUN0QmpNLElBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLElBQUFBLFVBQVUsRUFBRSxHQUFHO0lBQ2ZFLElBQUFBLGFBQWEsRUFBRTtPQUNsQjtJQUNEb00sRUFBQUEsT0FBTyxFQUFFO0lBQ0x4TixJQUFBQSxPQUFPLEVBQUUsY0FBYztJQUN2QkssSUFBQUEsT0FBTyxFQUFFLFVBQVU7SUFDbkJWLElBQUFBLFVBQVUsRUFBRSxDQUFBLHdCQUFBLEVBQTJCL0UsQ0FBQyxDQUFDUyxJQUFJLENBQUEsVUFBQSxDQUFZO0lBQ3pEZ0MsSUFBQUEsS0FBSyxFQUFFLE1BQU07SUFDYm1ELElBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2YwTSxJQUFBQSxjQUFjLEVBQUUsTUFBTTtJQUN0QmpNLElBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLElBQUFBLFVBQVUsRUFBRSxHQUFHO0lBQ2ZFLElBQUFBLGFBQWEsRUFBRTtPQUNsQjtJQUNEcU0sRUFBQUEsT0FBTyxFQUFFO0lBQ0wzTCxJQUFBQSxTQUFTLEVBQUUsRUFBRTtJQUNiekIsSUFBQUEsT0FBTyxFQUFFLFdBQVc7SUFDcEJGLElBQUFBLGVBQWUsRUFBRSx1QkFBdUI7SUFDeENsRixJQUFBQSxNQUFNLEVBQUUsQ0FBQSwrQkFBQSxDQUFpQztJQUN6Q3VGLElBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLElBQUFBLFFBQVEsRUFBRSxFQUFFO1FBQ1o1RCxLQUFLLEVBQUV6QyxDQUFDLENBQUN3UjtPQUNaO0lBQ0Q1TixFQUFBQSxRQUFRLEVBQUU7SUFDTjZCLElBQUFBLE9BQU8sRUFBRSxXQUFXO0lBQ3BCRixJQUFBQSxlQUFlLEVBQUUscUJBQXFCO0lBQ3RDbEYsSUFBQUEsTUFBTSxFQUFFLENBQUEsNkJBQUEsQ0FBK0I7SUFDdkN1RixJQUFBQSxZQUFZLEVBQUUsRUFBRTtJQUNoQlMsSUFBQUEsUUFBUSxFQUFFLEVBQUU7UUFDWjVELEtBQUssRUFBRXpDLENBQUMsQ0FBQ1U7T0FDWjtJQUNEb1MsRUFBQUEsVUFBVSxFQUFFO0lBQ1JyTixJQUFBQSxPQUFPLEVBQUUsV0FBVztRQUNwQkYsZUFBZSxFQUFFdkYsQ0FBQyxDQUFDRyxNQUFNO0lBQ3pCRSxJQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLENBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFDL0J1RixJQUFBQSxZQUFZLEVBQUUsRUFBRTtJQUNoQlMsSUFBQUEsUUFBUSxFQUFFLEVBQUU7UUFDWjVELEtBQUssRUFBRXpDLENBQUMsQ0FBQ3dSO09BQ1o7TUFDRHVCLFVBQVUsRUFBRzNLLFdBQVcsS0FBTTtJQUMxQm5DLElBQUFBLFFBQVEsRUFBRSxVQUFVO0lBQ3BCK00sSUFBQUEsR0FBRyxFQUFFLENBQUM7SUFDTnZQLElBQUFBLEtBQUssRUFBRSxDQUFDO0lBQ1IwQixJQUFBQSxLQUFLLEVBQUUsRUFBRTtJQUNUaUIsSUFBQUEsTUFBTSxFQUFFLEVBQUU7SUFDVlIsSUFBQUEsWUFBWSxFQUFFLGVBQWU7SUFDN0JMLElBQUFBLGVBQWUsRUFBRTZDLFdBQVc7SUFDNUJ6QixJQUFBQSxPQUFPLEVBQUUsSUFBSTtJQUNiRSxJQUFBQSxhQUFhLEVBQUU7T0FDbEI7SUFDTCxDQUFDO0lBQ0QsU0FBU29NLGlCQUFpQkEsR0FBRztJQUN6QixFQUFBLE1BQU1DLElBQUksR0FBR2hTLE1BQU0sQ0FBQ3dMLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztNQUN4RCxPQUFPLENBQUEsRUFBR3NHLElBQUksQ0FBQSxjQUFBLENBQWdCO0lBQ2xDO0lBQ0EsU0FBU0MsVUFBVUEsQ0FBQztNQUFFblAsS0FBSztNQUFFcUQsS0FBSztNQUFFK0wsR0FBRztJQUFFQyxFQUFBQTtJQUFRLENBQUMsRUFBRTtJQUNoRCxFQUFBLG9CQUFRNVIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUUrUCxNQUFNLENBQUNPLFVBQVUsQ0FBQ29CLE1BQU07SUFBRSxHQUFDLGVBQ25FNVIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUUrUCxNQUFNLENBQUNxQixVQUFVLENBQUNNLE1BQU07SUFBRSxHQUFDLENBQUMsZUFDaEU1UixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRStQLE1BQU0sQ0FBQ1M7T0FBYSxFQUFFbk8sS0FBSyxDQUFDLGVBQ2hFdkMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUrUCxNQUFNLENBQUNVO09BQWEsRUFBRS9LLEtBQUssQ0FBQyxFQUNoRStMLEdBQUcsaUJBQUkzUixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRStQLE1BQU0sQ0FBQ2E7T0FBVyxFQUFFYSxHQUFHLENBQUMsQ0FBQztJQUM1RTtJQUNlLFNBQVNFLFNBQVNBLEdBQUc7TUFDaEMsTUFBTSxDQUFDM0YsSUFBSSxFQUFFNEYsT0FBTyxDQUFDLEdBQUcvUixjQUFRLENBQUMsSUFBSSxDQUFDO01BQ3RDLE1BQU0sQ0FBQ2dTLE9BQU8sRUFBRUMsVUFBVSxDQUFDLEdBQUdqUyxjQUFRLENBQUMsSUFBSSxDQUFDO01BQzVDLE1BQU0sQ0FBQ2tTLFVBQVUsRUFBRUMsYUFBYSxDQUFDLEdBQUduUyxjQUFRLENBQUMsSUFBSSxDQUFDO0lBQ2xEb1MsRUFBQUEsZUFBUyxDQUFDLE1BQU07SUFDWixJQUFBLE1BQU1DLEdBQUcsR0FBR1osaUJBQWlCLEVBQUU7UUFDL0IsSUFBSWEsT0FBTyxHQUFHLElBQUk7UUFDbEIsZUFBZUMsU0FBU0EsR0FBRztVQUN2Qk4sVUFBVSxDQUFDLElBQUksQ0FBQztVQUNoQkUsYUFBYSxDQUFDLElBQUksQ0FBQztVQUNuQixJQUFJO0lBQ0EsUUFBQSxNQUFNcEcsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ3FHLEdBQUcsRUFBRTtJQUFFRyxVQUFBQSxXQUFXLEVBQUU7SUFBYyxTQUFDLENBQUM7SUFDNUQsUUFBQSxJQUFJLENBQUN6RyxHQUFHLENBQUMwRyxFQUFFLEVBQ1AsTUFBTSxJQUFJQyxLQUFLLENBQUMsQ0FBQSxlQUFBLEVBQWtCM0csR0FBRyxDQUFDNEcsTUFBTSxDQUFBLENBQUEsRUFBSTVHLEdBQUcsQ0FBQzZHLFVBQVUsRUFBRSxDQUFDO0lBQ3JFLFFBQUEsTUFBTXhHLElBQUksR0FBRyxNQUFNTCxHQUFHLENBQUNLLElBQUksRUFBRTtZQUM3QixJQUFJLENBQUNrRyxPQUFPLEVBQ1I7WUFDSlAsT0FBTyxDQUFDM0YsSUFBSSxDQUFDO1VBQ2pCLENBQUMsQ0FDRCxPQUFPTSxHQUFHLEVBQUU7WUFDUixJQUFJLENBQUM0RixPQUFPLEVBQ1I7WUFDSkgsYUFBYSxDQUFDVSxNQUFNLENBQUNuRyxHQUFHLENBQUNELE9BQU8sSUFBSUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsTUFBQSxDQUFDLFNBQ087SUFDSixRQUFBLElBQUk0RixPQUFPLEVBQ1BMLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDekIsTUFBQTtJQUNKLElBQUE7SUFDQU0sSUFBQUEsU0FBUyxFQUFFO0lBQ1gsSUFBQSxNQUFNTyxRQUFRLEdBQUdDLFdBQVcsQ0FBQ1IsU0FBUyxFQUFFLE1BQU0sQ0FBQztJQUMvQyxJQUFBLE9BQU8sTUFBTTtJQUNURCxNQUFBQSxPQUFPLEdBQUcsS0FBSztVQUNmVSxhQUFhLENBQUNGLFFBQVEsQ0FBQztRQUMzQixDQUFDO01BQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNOLEVBQUEsTUFBTUcsU0FBUyxHQUFHdlQsTUFBTSxDQUFDd0wsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO01BQzdELE1BQU04SCxNQUFNLEdBQUlDLFVBQVUsSUFBSyxHQUFHRixTQUFTLENBQUEsV0FBQSxFQUFjRSxVQUFVLENBQUEsQ0FBRTtJQUNyRSxFQUFBLG9CQUFRbFQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUrUCxNQUFNLENBQUM3UDtJQUFLLEdBQUMsZUFDckRKLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFK1AsTUFBTSxDQUFDQztJQUFPLEdBQUMsZUFDL0NsUSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksZUFDM0JELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7UUFBRUMsS0FBSyxFQUFFK1AsTUFBTSxDQUFDdkg7T0FBTyxFQUFFLGlCQUFpQixDQUFDLGVBQ3JFMUksc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUrUCxNQUFNLENBQUNJO09BQVUsRUFBRSw2S0FBNkssQ0FBQyxDQUFDLGVBQzFPclEsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUrUCxNQUFNLENBQUNLO0lBQVUsR0FBQyxFQUFFcEUsSUFBSSxFQUFFb0UsU0FBUyxHQUFHLENBQUEsV0FBQSxFQUFjLElBQUlmLElBQUksQ0FBQ3JELElBQUksQ0FBQ29FLFNBQVMsQ0FBQyxDQUFDYixjQUFjLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEVBQzNKc0MsT0FBTyxpQkFBSS9SLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFK1AsTUFBTSxDQUFDb0I7T0FBWSxFQUFFLDZGQUE2RixDQUFDLElBQUlZLFVBQVUsaUJBQUlqUyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRStQLE1BQU0sQ0FBQzlOO09BQVUsRUFDck8sMElBQTBJLEVBQzFJOFAsVUFBVSxDQUFDLGtCQUFLalMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDRCxzQkFBSyxDQUFDNEgsUUFBUSxFQUFFLElBQUksZUFDeEQ1SCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRStQLE1BQU0sQ0FBQ007SUFBWSxHQUFDLGVBQ3BEdlEsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDeVIsVUFBVSxFQUFFO0lBQUVuUCxJQUFBQSxLQUFLLEVBQUUsd0RBQXdEO0lBQUVxRCxJQUFBQSxLQUFLLEVBQUVzRyxJQUFJLEVBQUVpSCxNQUFNLElBQUksR0FBRztJQUFFeEIsSUFBQUEsR0FBRyxFQUFFLHdEQUF3RDtRQUFFQyxNQUFNLEVBQUVyVCxDQUFDLENBQUNRO0lBQUssR0FBQyxDQUFDLGVBQy9NaUIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDeVIsVUFBVSxFQUFFO0lBQUVuUCxJQUFBQSxLQUFLLEVBQUUsMEVBQTBFO0lBQUVxRCxJQUFBQSxLQUFLLEVBQUVzRyxJQUFJLEVBQUVrSCxLQUFLLElBQUksR0FBRztJQUFFekIsSUFBQUEsR0FBRyxlQUFFM1Isc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFb00sTUFBQUEsSUFBSSxFQUFFNEcsTUFBTSxDQUFDLE9BQU8sQ0FBQztVQUFFL1MsS0FBSyxFQUFFK1AsTUFBTSxDQUFDVztTQUFZLEVBQUUsa0lBQWtJLENBQUM7UUFBRWdCLE1BQU0sRUFBRXJULENBQUMsQ0FBQ1M7SUFBSyxHQUFDLENBQUMsZUFDelhnQixzQkFBSyxDQUFDQyxhQUFhLENBQUN5UixVQUFVLEVBQUU7SUFBRW5QLElBQUFBLEtBQUssRUFBRSxnQ0FBZ0M7SUFBRXFELElBQUFBLEtBQUssRUFBRXNHLElBQUksRUFBRW1ILE9BQU8sSUFBSSxHQUFHO0lBQUUxQixJQUFBQSxHQUFHLGVBQUUzUixzQkFBSyxDQUFDQyxhQUFhLENBQUMsR0FBRyxFQUFFO0lBQUVvTSxNQUFBQSxJQUFJLEVBQUU0RyxNQUFNLENBQUMsU0FBUyxDQUFDO1VBQUUvUyxLQUFLLEVBQUUrUCxNQUFNLENBQUNXO1NBQVksRUFBRSxrRkFBa0YsQ0FBQztRQUFFZ0IsTUFBTSxFQUFFclQsQ0FBQyxDQUFDTTtJQUFNLEdBQUMsQ0FBQyxlQUNwU21CLHNCQUFLLENBQUNDLGFBQWEsQ0FBQ3lSLFVBQVUsRUFBRTtJQUFFblAsSUFBQUEsS0FBSyxFQUFFLHNDQUFzQztJQUFFcUQsSUFBQUEsS0FBSyxFQUFFc0csSUFBSSxFQUFFb0gsV0FBVyxJQUFJLEdBQUc7SUFBRTNCLElBQUFBLEdBQUcsRUFBRSx1SEFBdUg7UUFBRUMsTUFBTSxFQUFFclQsQ0FBQyxDQUFDcVI7T0FBWSxDQUFDLENBQUMsZUFDNVE1UCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRStQLE1BQU0sQ0FBQ2M7SUFBVyxHQUFDLGVBQ25EL1Esc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUrUCxNQUFNLENBQUNlO0lBQU8sR0FBQyxlQUMvQ2hSLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7UUFBRUMsS0FBSyxFQUFFK1AsTUFBTSxDQUFDZ0I7T0FBYSxFQUFFLGtGQUFrRixDQUFDLGVBQzVJalIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlNLE1BQUFBLE1BQU0sRUFBRSxTQUFTO0lBQUUvSCxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsQ0FBQyxDQUFDd1IsU0FBUztJQUFFL0ssTUFBQUEsVUFBVSxFQUFFO0lBQUk7SUFBRSxHQUFDLEVBQUUsMmNBQTJjLENBQUMsRUFDMWpCa0gsSUFBSSxFQUFFcUgsSUFBSSxrQkFBS3ZULHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFK1AsTUFBTSxDQUFDbUI7SUFBUSxHQUFDLGVBQy9EcFIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7VUFBRWMsS0FBSyxFQUFFekMsQ0FBQyxDQUFDcVI7SUFBVztJQUFFLEdBQUMsRUFBRSxxRUFBcUUsQ0FBQyxFQUN4STFELElBQUksQ0FBQ3FILElBQUksQ0FBQyxDQUFDLENBQUMsZUFDcEJ2VCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRStQLE1BQU0sQ0FBQ2U7SUFBTyxHQUFDLGVBQy9DaFIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksRUFBRTtRQUFFQyxLQUFLLEVBQUUrUCxNQUFNLENBQUNnQjtPQUFhLEVBQUUsNkZBQTZGLENBQUMsZUFDdkpqUixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRWMsTUFBQUEsR0FBRyxFQUFFLEVBQUU7SUFBRVEsTUFBQUEsUUFBUSxFQUFFO0lBQU87SUFBRSxHQUFDLGVBQ2hGakYsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFb00sSUFBQUEsSUFBSSxFQUFFNEcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUFFL1MsS0FBSyxFQUFFK1AsTUFBTSxDQUFDa0I7T0FBUyxFQUFFLDBFQUEwRSxDQUFDLGVBQ3RKblIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFb00sSUFBQUEsSUFBSSxFQUFFNEcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUFFL1MsS0FBSyxFQUFFK1AsTUFBTSxDQUFDaUI7T0FBVSxFQUFFLGdDQUFnQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdJOztJQ25QQXNDLE9BQU8sQ0FBQ0MsY0FBYyxHQUFHLEVBQUU7SUFFM0JELE9BQU8sQ0FBQ0MsY0FBYyxDQUFDblUsS0FBSyxHQUFHQSxLQUFLO0lBRXBDa1UsT0FBTyxDQUFDQyxjQUFjLENBQUNDLGlCQUFpQixHQUFHQSxZQUFpQjtJQUU1REYsT0FBTyxDQUFDQyxjQUFjLENBQUNFLGtCQUFrQixHQUFHQSxVQUFrQjtJQUU5REgsT0FBTyxDQUFDQyxjQUFjLENBQUNHLGVBQWUsR0FBR0EsVUFBZTtJQUV4REosT0FBTyxDQUFDQyxjQUFjLENBQUNJLGVBQWUsR0FBR0EsVUFBZTtJQUV4REwsT0FBTyxDQUFDQyxjQUFjLENBQUNLLGlCQUFpQixHQUFHQSxTQUFpQjtJQUU1RE4sT0FBTyxDQUFDQyxjQUFjLENBQUM1QixTQUFTLEdBQUdBLFNBQVM7Ozs7OzsifQ==
