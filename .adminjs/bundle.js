(function (React) {
    'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    var React__default = /*#__PURE__*/_interopDefault(React);

    const C$7 = {
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
          borderColor: C$7.green,
          color: C$7.green
        }
      }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          ...s.decorChip,
          borderColor: C$7.cyan,
          color: C$7.cyan
        }
      }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          ...s.decorChip,
          borderColor: C$7.blue,
          color: C$7.blue
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
          color: C$7.error
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
          e.target.style.borderColor = C$7.green;
          e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
        },
        onBlur: e => {
          setHover(null);
          e.target.style.borderColor = C$7.border;
          e.target.style.boxShadow = 'none';
        }
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: s.field
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "login-password",
        style: s.label
      }, "\u041F\u0430\u0440\u043E\u043B\u044C ", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          color: C$7.error
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
          e.target.style.borderColor = C$7.green;
          e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
        },
        onBlur: e => {
          setHover(null);
          e.target.style.borderColor = C$7.border;
          e.target.style.boxShadow = 'none';
        }
      })), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        style: s.btn,
        onMouseEnter: e => e.target.style.background = `linear-gradient(135deg, ${C$7.greenDark}, #047857)`,
        onMouseLeave: e => e.target.style.background = `linear-gradient(135deg, ${C$7.green}, ${C$7.greenDark})`
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
        backgroundColor: C$7.bgPage,
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
        border: `1px solid ${C$7.border}`,
        boxShadow: '0 25px 50px rgba(0,0,0,0.6)'
      },
      left: {
        flex: '0 0 380px',
        background: `linear-gradient(145deg, #0d2d20 0%, #0a2540 100%)`,
        borderRight: `1px solid ${C$7.border}`,
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
        backgroundColor: C$7.green,
        boxShadow: `0 0 8px ${C$7.green}`
      },
      brandName: {
        fontSize: 13,
        fontWeight: 600,
        color: C$7.faint,
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      },
      welcome: {
        fontSize: 36,
        fontWeight: 700,
        color: C$7.white,
        lineHeight: 1.2,
        marginBottom: 16,
        letterSpacing: '-0.5px'
      },
      welcomeSub: {
        fontSize: 14,
        color: C$7.faint,
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
        backgroundColor: C$7.bgDark,
        padding: '48px 44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      formTitle: {
        fontSize: 24,
        fontWeight: 700,
        color: C$7.white,
        marginBottom: 6,
        letterSpacing: '-0.3px'
      },
      formSub: {
        fontSize: 13,
        color: C$7.ghost,
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
        color: C$7.error,
        marginBottom: 20
      },
      errorDot: {
        fontSize: 8,
        lineHeight: 1,
        color: C$7.error
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
        color: C$7.faint
      },
      input: {
        width: '100%',
        padding: '11px 14px',
        backgroundColor: C$7.bgInput,
        color: C$7.white,
        border: `1px solid ${C$7.border}`,
        borderRadius: 8,
        fontSize: 14,
        outline: 'none',
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
        boxSizing: 'border-box',
        WebkitTextFillColor: C$7.white
      },
      btn: {
        width: '100%',
        padding: '12px',
        background: `linear-gradient(135deg, ${C$7.green}, ${C$7.greenDark})`,
        color: C$7.white,
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
        color: C$7.ghost,
        textAlign: 'center',
        lineHeight: 1.5
      }
    };

    const C$6 = {
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
    const inputStyle$4 = {
      padding: '8px 10px',
      background: C$6.bgInput,
      color: C$6.white,
      border: `1px solid ${C$6.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const selectStyle$2 = {
      padding: '8px 10px',
      background: C$6.bgInput,
      color: C$6.white,
      border: `1px solid ${C$6.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      cursor: 'pointer'
    };
    const btnDanger$2 = {
      background: 'none',
      border: 'none',
      color: C$6.error,
      fontSize: 14,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 4
    };
    const btnAdd$2 = {
      padding: '6px 12px',
      background: 'transparent',
      color: C$6.green,
      border: `1px dashed ${C$6.green}`,
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
          ...inputStyle$4,
          flex: 1
        }
      }), /*#__PURE__*/React__default.default.createElement("label", {
        style: {
          fontSize: 12,
          color: C$6.faint,
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
          accentColor: C$6.green
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
          border: `1px solid ${C$6.border}`,
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
          ...inputStyle$4,
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
        type: "button",
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
          background: C$6.bgCard,
          border: `1px solid ${C$6.border}`,
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
          ...inputStyle$4,
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
          ...inputStyle$4,
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
          ...inputStyle$4,
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
          ...inputStyle$4,
          width: '100%',
          marginBottom: 8
        }
      }), (lesson.questions || []).map((q, qi) => (/*#__PURE__*/React__default.default.createElement(QuestionBlock$1, {
        key: qi,
        question: q,
        onChange: a => updateQuestion(qi, a),
        onRemove: () => removeQuestion(qi)
      }))), /*#__PURE__*/React__default.default.createElement("button", {
        type: "button",
        onClick: addQuestion,
        style: btnAdd$2
      }, "+ \u0412\u043E\u043F\u0440\u043E\u0441"))));
    }
    function SectionBlock$2({
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
          background: C$6.bgCard,
          border: `1px solid ${C$6.border}`,
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
          color: C$6.cyan
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
          ...inputStyle$4,
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
        type: "button",
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
          backgroundColor: C$6.bgPage,
          color: C$6.white,
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
          color: C$6.ghost
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
        style: labelStyle$4
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
        style: labelStyle$4
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
        style: labelStyle$4
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
          ...labelStyle$4,
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
          accentColor: C$6.green
        }
      }), "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0442\u0435\u0441\u0442\u0430"), requireQuiz && (/*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginTop: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$4
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
          color: C$6.muted,
          margin: '0 0 12px'
        }
      }, "\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0438 \u0443\u0440\u043E\u043A\u0438", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 12,
          color: C$6.ghost,
          fontWeight: 400,
          marginLeft: 8
        }
      }, "(", sections.length, " \u0440\u0430\u0437\u0434., ", totalLessons, " \u0443\u0440\u043E\u043A\u043E\u0432)")), /*#__PURE__*/React__default.default.createElement("input", {
        type: "hidden",
        name: "sections_json",
        value: JSON.stringify(sections)
      }), sections.map((section, i) => (/*#__PURE__*/React__default.default.createElement(SectionBlock$2, {
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
    const labelStyle$4 = {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: C$6.faint,
      marginBottom: 4
    };
    const fullInputStyle$2 = {
      width: '100%',
      padding: '9px 12px',
      background: C$6.bgInput,
      color: C$6.white,
      border: `1px solid ${C$6.border}`,
      borderRadius: 6,
      fontSize: 14,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const addSectionBtnStyle$1 = {
      padding: '8px 16px',
      background: 'transparent',
      color: C$6.cyan,
      border: `1px dashed ${C$6.cyan}`,
      borderRadius: 6,
      fontSize: 13,
      cursor: 'pointer'
    };
    const submitBtnStyle$3 = {
      padding: '12px 32px',
      background: `linear-gradient(135deg, ${C$6.green}, ${C$6.greenDark})`,
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      fontSize: 15,
      fontWeight: 600,
      cursor: 'pointer'
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
    const selectStyle$1 = {
      padding: '8px 10px',
      background: C$5.bgInput,
      color: C$5.white,
      border: `1px solid ${C$5.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      cursor: 'pointer'
    };
    const btnDanger$1 = {
      background: 'none',
      border: 'none',
      color: C$5.error,
      fontSize: 14,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 4
    };
    const btnAdd$1 = {
      padding: '6px 12px',
      background: 'transparent',
      color: C$5.green,
      border: `1px dashed ${C$5.green}`,
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
        type: "button",
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
      }), (lesson.questions || []).map((q, qi) => (/*#__PURE__*/React__default.default.createElement(QuestionBlock, {
        key: qi,
        question: q,
        onChange: a => updateQuestion(qi, a),
        onRemove: () => removeQuestion(qi)
      }))), /*#__PURE__*/React__default.default.createElement("button", {
        type: "button",
        onClick: addQuestion,
        style: btnAdd$1
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
        style: btnDanger$1
      }, "\u2715")), section.lessons.map((lesson, li) => (/*#__PURE__*/React__default.default.createElement(LessonRow, {
        key: li,
        lesson: lesson,
        onChange: l => updateLesson(li, l),
        onRemove: () => removeLesson(li)
      }))), /*#__PURE__*/React__default.default.createElement("button", {
        type: "button",
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
      }, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430"), /*#__PURE__*/React__default.default.createElement("p", {
        style: {
          margin: '0 0 24px',
          fontSize: 13,
          color: C$5.ghost
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
        style: labelStyle$3
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
        style: labelStyle$3
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
        style: labelStyle$3
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
          ...fullInputStyle$1,
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
        style: addSectionBtnStyle
      }, "+ \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0440\u0430\u0437\u0434\u0435\u043B")), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        disabled: submitting,
        style: submitBtnStyle$2
      }, submitting ? 'Сохранение…' : 'Сохранить курс')));
    }
    const labelStyle$3 = {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: C$5.faint,
      marginBottom: 4
    };
    const fullInputStyle$1 = {
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
    const addSectionBtnStyle = {
      padding: '8px 16px',
      background: 'transparent',
      color: C$5.cyan,
      border: `1px dashed ${C$5.cyan}`,
      borderRadius: 6,
      fontSize: 13,
      cursor: 'pointer'
    };
    const submitBtnStyle$2 = {
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
    const selectStyle = {
      padding: '8px 10px',
      background: C$4.bgInput,
      color: C$4.white,
      border: `1px solid ${C$4.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      cursor: 'pointer'
    };
    const btnDanger = {
      background: 'none',
      border: 'none',
      color: C$4.error,
      fontSize: 14,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 4
    };
    const btnAdd = {
      padding: '6px 12px',
      background: 'transparent',
      color: C$4.green,
      border: `1px dashed ${C$4.green}`,
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
          backgroundColor: C$4.bgPage,
          color: C$4.white,
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
          color: C$4.ghost
        }
      }, "\u0422\u0435\u0441\u0442 \u0441 \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C\u0438 \u0438 \u043E\u0442\u0432\u0435\u0442\u0430\u043C\u0438 \u0437\u0430 \u043E\u0434\u0438\u043D \u0448\u0430\u0433"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$2
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
          color: C$4.muted,
          margin: '0 0 12px'
        }
      }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 12,
          color: C$4.ghost,
          fontWeight: 400,
          marginLeft: 8
        }
      }, "(", questions.length, ")")), questions.map((q, qi) => (/*#__PURE__*/React__default.default.createElement("div", {
        key: qi,
        style: {
          marginBottom: 12,
          padding: 12,
          background: C$4.bgCard,
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
        value: q.question_text,
        onChange: e => updateQuestion(qi, {
          ...q,
          question_text: e.target.value
        }),
        name: `question_${qi}`,
        style: {
          ...inputStyle$2,
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
    const labelStyle$2 = {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: C$4.faint,
      marginBottom: 4
    };
    const fullInputStyle = {
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
    const addQuestionBtnStyle = {
      padding: '8px 16px',
      background: 'transparent',
      color: C$4.cyan,
      border: `1px dashed ${C$4.cyan}`,
      borderRadius: 6,
      fontSize: 13,
      cursor: 'pointer'
    };
    const submitBtnStyle$1 = {
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
          backgroundColor: C$3.bgPage,
          color: C$3.white,
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
          color: C$3.ghost
        }
      }, "Email, \u043F\u0430\u0440\u043E\u043B\u044C \u0438 \u0440\u043E\u043B\u044C \u2014 \u0432\u0441\u0451 \u0441\u0440\u0430\u0437\u0443"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$1
      }, "Email *"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "email",
        name: "email",
        placeholder: "user@example.com",
        style: inputStyle$1,
        required: true
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$1
      }, "\u041F\u0430\u0440\u043E\u043B\u044C *"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "password",
        name: "password",
        placeholder: "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432",
        style: inputStyle$1,
        required: true
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$1
      }, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "text",
        name: "username",
        placeholder: "username",
        style: inputStyle$1
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle$1
      }, "\u0420\u043E\u043B\u044C"), /*#__PURE__*/React__default.default.createElement("select", {
        name: "role",
        style: inputStyle$1
      }, ROLES.map(r => (/*#__PURE__*/React__default.default.createElement("option", {
        key: r.value,
        value: r.value
      }, r.label))))), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        disabled: submitting,
        style: submitBtnStyle
      }, submitting ? 'Создание…' : 'Создать пользователя')));
    }
    const labelStyle$1 = {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: C$3.faint,
      marginBottom: 4
    };
    const inputStyle$1 = {
      width: '100%',
      padding: '9px 12px',
      background: C$3.bgInput,
      color: '#fff',
      border: `1px solid ${C$3.border}`,
      borderRadius: 6,
      fontSize: 14,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const submitBtnStyle = {
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
      bgCard: '#1e293b',
      bgInput: '#0f172a',
      border: '#334155',
      green: '#10b981',
      greenDark: '#059669',
      error: '#ef4444',
      white: '#ffffff',
      muted: '#cbd5e1',
      faint: '#94a3b8',
      ghost: '#64748b'
    };
    const inputStyle = {
      width: '100%',
      padding: '9px 12px',
      background: C$2.bgInput,
      color: C$2.white,
      border: `1px solid ${C$2.border}`,
      borderRadius: 6,
      fontSize: 14,
      outline: 'none',
      boxSizing: 'border-box'
    };
    function SectionBlock({
      title,
      count,
      children
    }) {
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          marginBottom: 24,
          padding: 16,
          background: C$2.bgCard,
          border: `1px solid ${C$2.border}`,
          borderRadius: 8
        }
      }, /*#__PURE__*/React__default.default.createElement("h2", {
        style: {
          fontSize: 16,
          fontWeight: 600,
          color: C$2.muted,
          margin: '0 0 12px'
        }
      }, title, count !== undefined && (/*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 12,
          color: C$2.ghost,
          fontWeight: 400,
          marginLeft: 8
        }
      }, "(", count, ")"))), children);
    }
    function Table({
      rows,
      cols,
      table,
      onDeleted
    }) {
      const [deleting, setDeleting] = React.useState(new Set());
      const doDelete = async id => {
        if (!table) return;
        setDeleting(prev => new Set(prev).add(id));
        try {
          const url = window.location.pathname.replace(/^\/resources\//, '/api/resources/');
          const params = new URLSearchParams();
          params.append('_quick_delete_table', table);
          params.append('_quick_delete_id', String(id));
          const res = await fetch(url, {
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
            onDeleted?.();
          }
        } catch {
          setDeleting(prev => {
            const n = new Set(prev);
            n.delete(id);
            return n;
          });
        }
      };
      if (rows.length === 0) return /*#__PURE__*/React__default.default.createElement("p", {
        style: {
          fontSize: 13,
          color: C$2.ghost
        }
      }, "\u041D\u0435\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439");
      return /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          overflowX: 'auto'
        }
      }, /*#__PURE__*/React__default.default.createElement("table", {
        style: {
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: 12
        }
      }, /*#__PURE__*/React__default.default.createElement("thead", null, /*#__PURE__*/React__default.default.createElement("tr", {
        style: {
          color: C$2.faint,
          borderBottom: `1px solid ${C$2.border}`
        }
      }, table && /*#__PURE__*/React__default.default.createElement("th", {
        style: {
          padding: '6px 8px',
          textAlign: 'left',
          width: 30
        }
      }), cols.map(c => /*#__PURE__*/React__default.default.createElement("th", {
        key: c.key,
        style: {
          padding: '6px 8px',
          textAlign: 'left',
          whiteSpace: 'nowrap'
        }
      }, c.label)))), /*#__PURE__*/React__default.default.createElement("tbody", null, rows.map(r => (/*#__PURE__*/React__default.default.createElement("tr", {
        key: r.id,
        style: {
          borderBottom: `1px solid ${C$2.border}`
        }
      }, table && (/*#__PURE__*/React__default.default.createElement("td", {
        style: {
          padding: '6px 8px'
        }
      }, /*#__PURE__*/React__default.default.createElement("button", {
        type: "button",
        disabled: deleting.has(r.id),
        onClick: () => doDelete(r.id),
        style: {
          background: 'none',
          border: 'none',
          color: C$2.error,
          cursor: 'pointer',
          fontSize: 16,
          padding: '2px 4px',
          opacity: deleting.has(r.id) ? 0.4 : 1
        },
        title: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
      }, "\u2715"))), cols.map(c => (/*#__PURE__*/React__default.default.createElement("td", {
        key: c.key,
        style: {
          padding: '6px 8px',
          color: C$2.white,
          whiteSpace: 'nowrap'
        }
      }, c.render ? c.render(r[c.key]) : String(r[c.key] ?? ''))))))))));
    }
    function UserEdit(props) {
      const p = props.record?.params || {};
      const userId = p.id;
      const parse = key => {
        try {
          return JSON.parse(p[key] || '[]');
        } catch {
          return [];
        }
      };
      const [email, setEmail] = React.useState(p.email || '');
      const [username, setUsername] = React.useState(p.username || '');
      const [bio, setBio] = React.useState(p.bio || '');
      const [role, setRole] = React.useState(p.role || 'USER');
      const [avatarUrl, setAvatarUrl] = React.useState(p.avatar_url || '');
      const [password, setPassword] = React.useState('');
      const [enrollments] = React.useState(parse('_enrollments_json'));
      const [progress] = React.useState(parse('_progress_json'));
      const [quizAttempts] = React.useState(parse('_quiz_attempts_json'));
      const [badges] = React.useState(parse('_badges_json'));
      const [certs] = React.useState(parse('_certifications_json'));
      const [socials] = React.useState(parse('_social_links_json'));
      const [ratings] = React.useState(parse('_ratings_json'));
      const allCourses = parse('_all_courses_json');
      const allBadges = parse('_all_badges_json');
      const existingCourseIds = new Set(enrollments.map(e => e.course_id));
      const existingBadgeIds = new Set(badges.map(b => b.badge_id));
      const availableCourses = allCourses.filter(c => !existingCourseIds.has(c.id));
      const availableBadges = allBadges.filter(b => !existingBadgeIds.has(b.id));
      const [newCourseId, setNewCourseId] = React.useState('');
      const [newBadgeId, setNewBadgeId] = React.useState('');
      const [refreshKey, setRefreshKey] = React.useState(0);
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
            alert(data.notice?.message || 'Ошибка при сохранении');
          }
        } catch (err) {
          alert(`Ошибка: ${err.message}`);
        } finally {
          setSubmitting(false);
        }
      };
      const ROLES = [{
        value: 'ADMIN',
        label: 'Администратор'
      }, {
        value: 'USER',
        label: 'Пользователь'
      }, {
        value: 'STUDENT',
        label: 'Студент'
      }];
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
          maxWidth: 900,
          margin: '0 auto'
        }
      }, /*#__PURE__*/React__default.default.createElement("h1", {
        style: {
          margin: '0 0 4px',
          fontSize: 22,
          fontWeight: 700
        }
      }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C #", userId), /*#__PURE__*/React__default.default.createElement("p", {
        style: {
          margin: '0 0 24px',
          fontSize: 13,
          color: C$2.ghost
        }
      }, "\u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438 \u0441\u0432\u044F\u0437\u0438 \u043F\u0440\u043E\u0444\u0438\u043B\u044F"), /*#__PURE__*/React__default.default.createElement(SectionBlock, {
        title: "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"
      }, /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 12
        }
      }, /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "Email"), /*#__PURE__*/React__default.default.createElement("input", {
        value: email,
        onChange: e => setEmail(e.target.value),
        name: "email",
        style: inputStyle
      })), /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"), /*#__PURE__*/React__default.default.createElement("input", {
        value: username,
        onChange: e => setUsername(e.target.value),
        name: "username",
        style: inputStyle
      })), /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "\u0420\u043E\u043B\u044C"), /*#__PURE__*/React__default.default.createElement("select", {
        value: role,
        onChange: e => setRole(e.target.value),
        name: "role",
        style: inputStyle
      }, ROLES.map(r => /*#__PURE__*/React__default.default.createElement("option", {
        key: r.value,
        value: r.value
      }, r.label)))), /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "Avatar URL"), /*#__PURE__*/React__default.default.createElement("input", {
        value: avatarUrl,
        onChange: e => setAvatarUrl(e.target.value),
        name: "avatar_url",
        style: inputStyle
      })), /*#__PURE__*/React__default.default.createElement("div", null, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C (\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043F\u0443\u0441\u0442\u044B\u043C \u0431\u0435\u0437 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u0439)"), /*#__PURE__*/React__default.default.createElement("input", {
        type: "password",
        value: password,
        onChange: e => setPassword(e.target.value),
        name: "password",
        style: inputStyle,
        placeholder: "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C"
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          gridColumn: '1 / -1'
        }
      }, /*#__PURE__*/React__default.default.createElement("label", {
        style: labelStyle
      }, "Bio"), /*#__PURE__*/React__default.default.createElement("textarea", {
        value: bio,
        onChange: e => setBio(e.target.value),
        name: "bio",
        rows: 3,
        style: {
          ...inputStyle,
          resize: 'vertical'
        }
      })))), /*#__PURE__*/React__default.default.createElement(SectionBlock, {
        title: "\u0417\u0430\u043F\u0438\u0441\u0438 \u043D\u0430 \u043A\u0443\u0440\u0441\u044B",
        count: enrollments.length
      }, /*#__PURE__*/React__default.default.createElement(Table, {
        key: `enroll-${refreshKey}`,
        rows: enrollments,
        table: "enrollments",
        onDeleted: () => setRefreshKey(k => k + 1),
        cols: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'course_id',
          label: 'Курс'
        }, {
          key: 'course_title',
          label: 'Название'
        }, {
          key: 'enrolled_at',
          label: 'Дата',
          render: v => v ? new Date(v).toLocaleDateString() : ''
        }]
      }), availableCourses.length > 0 && (/*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          gap: 8,
          marginTop: 8,
          alignItems: 'center'
        }
      }, /*#__PURE__*/React__default.default.createElement("select", {
        value: newCourseId,
        onChange: e => setNewCourseId(e.target.value),
        style: {
          ...inputStyle,
          width: 280
        }
      }, /*#__PURE__*/React__default.default.createElement("option", {
        value: ""
      }, "\u2014 \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u0443\u0440\u0441 \u2014"), availableCourses.map(c => (/*#__PURE__*/React__default.default.createElement("option", {
        key: c.id,
        value: c.id
      }, c.title, " (#", c.id, ")")))), newCourseId && /*#__PURE__*/React__default.default.createElement("input", {
        type: "hidden",
        name: "add_enrollment_course_id",
        value: newCourseId
      })))), /*#__PURE__*/React__default.default.createElement(SectionBlock, {
        title: "\u0411\u0435\u0439\u0434\u0436\u0438 \u0438 \u043C\u0435\u0434\u0430\u043B\u0438",
        count: badges.length
      }, /*#__PURE__*/React__default.default.createElement(Table, {
        key: `badge-${refreshKey}`,
        rows: badges,
        table: "user_badges",
        onDeleted: () => setRefreshKey(k => k + 1),
        cols: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'badge_id',
          label: 'Бейдж'
        }, {
          key: 'badge_name',
          label: 'Название'
        }, {
          key: 'badge_desc',
          label: 'Описание'
        }, {
          key: 'awarded_at',
          label: 'Получен',
          render: v => v ? new Date(v).toLocaleDateString() : ''
        }]
      }), availableBadges.length > 0 && (/*#__PURE__*/React__default.default.createElement("div", {
        style: {
          display: 'flex',
          gap: 8,
          marginTop: 8,
          alignItems: 'center'
        }
      }, /*#__PURE__*/React__default.default.createElement("select", {
        value: newBadgeId,
        onChange: e => setNewBadgeId(e.target.value),
        style: {
          ...inputStyle,
          width: 280
        }
      }, /*#__PURE__*/React__default.default.createElement("option", {
        value: ""
      }, "\u2014 \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0431\u0435\u0439\u0434\u0436 \u2014"), availableBadges.map(b => (/*#__PURE__*/React__default.default.createElement("option", {
        key: b.id,
        value: b.id
      }, b.name, " (#", b.id, ")")))), newBadgeId && /*#__PURE__*/React__default.default.createElement("input", {
        type: "hidden",
        name: "add_badge_id",
        value: newBadgeId
      })))), /*#__PURE__*/React__default.default.createElement(SectionBlock, {
        title: "\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B",
        count: certs.length
      }, /*#__PURE__*/React__default.default.createElement(Table, {
        key: `cert-${refreshKey}`,
        rows: certs,
        table: "certifications",
        onDeleted: () => setRefreshKey(k => k + 1),
        cols: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'course_id',
          label: 'Курс'
        }, {
          key: 'certificate_code',
          label: 'Код'
        }, {
          key: 'issued_at',
          label: 'Выдан',
          render: v => v ? new Date(v).toLocaleDateString() : ''
        }]
      })), /*#__PURE__*/React__default.default.createElement(SectionBlock, {
        title: "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u0435\u0442\u0438",
        count: socials.length
      }, /*#__PURE__*/React__default.default.createElement(Table, {
        key: `social-${refreshKey}`,
        rows: socials,
        table: "user_social_links",
        onDeleted: () => setRefreshKey(k => k + 1),
        cols: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'platform',
          label: 'Платформа'
        }, {
          key: 'url',
          label: 'URL',
          render: v => v?.substring(0, 50)
        }]
      })), /*#__PURE__*/React__default.default.createElement(SectionBlock, {
        title: "\u041F\u043E\u043F\u044B\u0442\u043A\u0438 \u0442\u0435\u0441\u0442\u043E\u0432",
        count: quizAttempts.length
      }, /*#__PURE__*/React__default.default.createElement(Table, {
        rows: quizAttempts,
        cols: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'quiz_id',
          label: 'Тест'
        }, {
          key: 'quiz_title',
          label: 'Название'
        }, {
          key: 'score',
          label: 'Балл'
        }, {
          key: 'passed',
          label: 'Пройден',
          render: v => v ? 'Да' : 'Нет'
        }, {
          key: 'completed_at',
          label: 'Дата',
          render: v => v ? new Date(v).toLocaleDateString() : ''
        }]
      })), /*#__PURE__*/React__default.default.createElement(SectionBlock, {
        title: "\u041F\u0440\u043E\u0433\u0440\u0435\u0441\u0441 \u043F\u043E \u043A\u0443\u0440\u0441\u0430\u043C",
        count: progress.length
      }, /*#__PURE__*/React__default.default.createElement(Table, {
        rows: progress,
        cols: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'course_id',
          label: 'Курс'
        }, {
          key: 'status',
          label: 'Статус'
        }, {
          key: 'updated_at',
          label: 'Обновлён',
          render: v => v ? new Date(v).toLocaleDateString() : ''
        }]
      })), /*#__PURE__*/React__default.default.createElement(SectionBlock, {
        title: "\u041E\u0446\u0435\u043D\u043A\u0438 \u043A\u0443\u0440\u0441\u043E\u0432",
        count: ratings.length
      }, /*#__PURE__*/React__default.default.createElement(Table, {
        rows: ratings,
        cols: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'course_id',
          label: 'Курс'
        }, {
          key: 'course_title',
          label: 'Название'
        }, {
          key: 'rating',
          label: 'Оценка'
        }, {
          key: 'created_at',
          label: 'Дата',
          render: v => v ? new Date(v).toLocaleDateString() : ''
        }]
      })), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        disabled: submitting,
        style: {
          padding: '12px 32px',
          background: `linear-gradient(135deg, ${C$2.green}, ${C$2.greenDark})`,
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontSize: 15,
          fontWeight: 600,
          cursor: submitting ? 'not-allowed' : 'pointer'
        }
      }, submitting ? 'Сохранение…' : 'Сохранить')));
    }
    const labelStyle = {
      display: 'block',
      fontSize: 12,
      fontWeight: 500,
      color: C$2.faint,
      marginBottom: 4
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
    AdminJS.UserComponents.UserDetailedEdit = UserEdit;
    AdminJS.UserComponents.ForumDetailedEdit = ForumEdit;
    AdminJS.UserComponents.Dashboard = Dashboard;

})(React);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvbG9naW4uanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvY291cnNlLWNyZWF0ZS5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9jb3Vyc2UtZWRpdC5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9xdWl6LWNyZWF0ZS5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy91c2VyLWNyZWF0ZS5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy91c2VyLWVkaXQuanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvZm9ydW0tZWRpdC5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQuanMiLCJlbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBDID0ge1xuICAgIGJnUGFnZTogJyMwMjA2MTcnLFxuICAgIGJnRGFyazogJyMwZjE3MmEnLFxuICAgIGJnQ2FyZDogJyMxZTI5M2InLFxuICAgIGJnSW5wdXQ6ICcjMGYxNzJhJyxcbiAgICBib3JkZXI6ICcjMzM0MTU1JyxcbiAgICBncmVlbjogJyMxMGI5ODEnLFxuICAgIGdyZWVuRGFyazogJyMwNTk2NjknLFxuICAgIGN5YW46ICcjMDZiNmQ0JyxcbiAgICBibHVlOiAnIzNiODJmNicsXG4gICAgZXJyb3I6ICcjZWY0NDQ0JyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIG11dGVkOiAnI2NiZDVlMScsXG4gICAgZmFpbnQ6ICcjOTRhM2I4JyxcbiAgICBnaG9zdDogJyM2NDc0OGInLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICAgIGNvbnN0IHsgYWN0aW9uID0gJy9sb2dpbicsIGVycm9yTWVzc2FnZSB9ID0gKHdpbmRvdy5fX0FQUF9TVEFURV9fID8/IHt9KTtcbiAgICBjb25zdCBicmFuZGluZyA9IHdpbmRvdy5SRURVWF9TVEFURT8uYnJhbmRpbmcgPz8ge307XG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5wYWdlIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5jYXJkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMubGVmdCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5icmFuZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMuYnJhbmREb3QgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHMuYnJhbmROYW1lIH0sIGJyYW5kaW5nLmNvbXBhbnlOYW1lID8/ICdOZXRjb3Vyc2UgQWRtaW4nKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgc3R5bGU6IHMud2VsY29tZSB9LFxuICAgICAgICAgICAgICAgICAgICBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0NDBcXHUwNDNFXCIsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDNGXFx1MDQzRVxcdTA0MzZcXHUwNDMwXFx1MDQzQlxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRDXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHMud2VsY29tZVN1YiB9LCBcIlxcdTA0MUZcXHUwNDMwXFx1MDQzRFxcdTA0MzVcXHUwNDNCXFx1MDQ0QyBcXHUwNDQzXFx1MDQzRlxcdTA0NDBcXHUwNDMwXFx1MDQzMlxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGIFxcdTA0M0ZcXHUwNDNCXFx1MDQzMFxcdTA0NDJcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQzRVxcdTA0MzkgTmV0Y291cnNlLiBcXHUwNDE0XFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQ0M1xcdTA0M0YgXFx1MDQ0MlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0M0FcXHUwNDNFIFxcdTA0MzRcXHUwNDNCXFx1MDQ0RiBcXHUwNDMwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQ0MFxcdTA0MzhcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0M0RcXHUwNDRCXFx1MDQ0NSBcXHUwNDMwXFx1MDQzNFxcdTA0M0NcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0VcXHUwNDQwXFx1MDQzRVxcdTA0MzIuXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5kZWNvclJvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgLi4ucy5kZWNvckNoaXAsIGJvcmRlckNvbG9yOiBDLmdyZWVuLCBjb2xvcjogQy5ncmVlbiB9IH0sIFwiXFx1MDQxRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDM4XCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgLi4ucy5kZWNvckNoaXAsIGJvcmRlckNvbG9yOiBDLmN5YW4sIGNvbG9yOiBDLmN5YW4gfSB9LCBcIlxcdTA0MUFcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDRCXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgLi4ucy5kZWNvckNoaXAsIGJvcmRlckNvbG9yOiBDLmJsdWUsIGNvbG9yOiBDLmJsdWUgfSB9LCBcIlxcdTA0MTBcXHUwNDNEXFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0MzhcXHUwNDNBXFx1MDQzMFwiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHN0eWxlOiBzLmRvdHMsIHZpZXdCb3g6IFwiMCAwIDEyMCA4MFwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sIEFycmF5LmZyb20oeyBsZW5ndGg6IDYgfSwgKF8sIHJvdykgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogOCB9LCAoXywgY29sKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7IGtleTogYCR7cm93fS0ke2NvbH1gLCBjeDogY29sICogMTYgKyA4LCBjeTogcm93ICogMTMgKyA2LCByOiBcIjEuNVwiLCBmaWxsOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4xNSlcIiB9KSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IGFjdGlvbiwgbWV0aG9kOiBcIlBPU1RcIiwgc3R5bGU6IHMucmlnaHQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZTogcy5mb3JtVGl0bGUgfSwgXCJcXHUwNDEyXFx1MDQ0NVxcdTA0M0VcXHUwNDM0IFxcdTA0MzIgXFx1MDQ0MVxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzVcXHUwNDNDXFx1MDQ0M1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiBzLmZvcm1TdWIgfSwgXCJcXHUwNDEyXFx1MDQzMlxcdTA0MzVcXHUwNDM0XFx1MDQzOFxcdTA0NDJcXHUwNDM1IFxcdTA0MzJcXHUwNDMwXFx1MDQ0OFxcdTA0MzggXFx1MDQ0M1xcdTA0NDdcXHUwNDUxXFx1MDQ0MlxcdTA0M0RcXHUwNDRCXFx1MDQzNSBcXHUwNDM0XFx1MDQzMFxcdTA0M0RcXHUwNDNEXFx1MDQ0QlxcdTA0MzVcIiksXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMuZXJyb3JCb3ggfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogcy5lcnJvckRvdCB9LCBcIlxcdTI1Q0ZcIiksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5maWVsZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImxvZ2luLWVtYWlsXCIsIHN0eWxlOiBzLmxhYmVsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkVtYWlsIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyBjb2xvcjogQy5lcnJvciB9IH0sIFwiKlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGlkOiBcImxvZ2luLWVtYWlsXCIsIG5hbWU6IFwiZW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJhZG1pbkBleGFtcGxlLmNvbVwiLCBhdXRvQ29tcGxldGU6IFwiZW1haWxcIiwgcmVxdWlyZWQ6IHRydWUsIHN0eWxlOiBzLmlucHV0LCBvbkZvY3VzOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcignZW1haWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAwIDNweCByZ2JhKDE2LDE4NSwxMjksMC4xNSlgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25CbHVyOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuYm9yZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5maWVsZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImxvZ2luLXBhc3N3b3JkXCIsIHN0eWxlOiBzLmxhYmVsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdTA0MUZcXHUwNDMwXFx1MDQ0MFxcdTA0M0VcXHUwNDNCXFx1MDQ0QyBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgY29sb3I6IEMuZXJyb3IgfSB9LCBcIipcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBpZDogXCJsb2dpbi1wYXNzd29yZFwiLCBuYW1lOiBcInBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MjAyMlxcdTIwMjJcXHUyMDIyXFx1MjAyMlxcdTIwMjJcXHUyMDIyXFx1MjAyMlxcdTIwMjJcIiwgYXV0b0NvbXBsZXRlOiBcImN1cnJlbnQtcGFzc3dvcmRcIiwgcmVxdWlyZWQ6IHRydWUsIHN0eWxlOiBzLmlucHV0LCBvbkZvY3VzOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcigncGFzc3dvcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAwIDNweCByZ2JhKDE2LDE4NSwxMjksMC4xNSlgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25CbHVyOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuYm9yZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBzdHlsZTogcy5idG4sIG9uTW91c2VFbnRlcjogZSA9PiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVuRGFya30sICMwNDc4NTcpYCksIG9uTW91c2VMZWF2ZTogZSA9PiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCkgfSwgXCJcXHUwNDEyXFx1MDQzRVxcdTA0MzlcXHUwNDQyXFx1MDQzOFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiBzLmhpbnQgfSwgXCJcXHUwNDFGXFx1MDQ0MFxcdTA0M0VcXHUwNDMxXFx1MDQzQlxcdTA0MzVcXHUwNDNDXFx1MDQ0QiBcXHUwNDQxXFx1MDQzRSBcXHUwNDMyXFx1MDQ0NVxcdTA0M0VcXHUwNDM0XFx1MDQzRVxcdTA0M0M/IFxcdTA0MUVcXHUwNDMxXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NEMgXFx1MDQzQSBcXHUwNDQxXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQzNVxcdTA0M0NcXHUwNDNEXFx1MDQzRVxcdTA0M0NcXHUwNDQzIFxcdTA0MzBcXHUwNDM0XFx1MDQzQ1xcdTA0MzhcXHUwNDNEXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzRVxcdTA0NDBcXHUwNDQzLlwiKSkpKSk7XG59XG5jb25zdCBzID0ge1xuICAgIHBhZ2U6IHtcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5iZ1BhZ2UsXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgcGFkZGluZzogJzI0cHgnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogOTAwLFxuICAgICAgICBtaW5IZWlnaHQ6IDUyMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDI1cHggNTBweCByZ2JhKDAsMCwwLDAuNiknLFxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgICBmbGV4OiAnMCAwIDM4MHB4JyxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMwZDJkMjAgMCUsICMwYTI1NDAgMTAwJSlgLFxuICAgICAgICBib3JkZXJSaWdodDogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIHBhZGRpbmc6ICc0OHB4IDQwcHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIH0sXG4gICAgYnJhbmQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgZ2FwOiAxMCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA0MCxcbiAgICB9LFxuICAgIGJyYW5kRG90OiB7XG4gICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmdyZWVuLFxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgOHB4ICR7Qy5ncmVlbn1gLFxuICAgIH0sXG4gICAgYnJhbmROYW1lOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBjb2xvcjogQy5mYWludCxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjFlbScsXG4gICAgfSxcbiAgICB3ZWxjb21lOiB7XG4gICAgICAgIGZvbnRTaXplOiAzNixcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBjb2xvcjogQy53aGl0ZSxcbiAgICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDE2LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcbiAgICB9LFxuICAgIHdlbGNvbWVTdWI6IHtcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBjb2xvcjogQy5mYWludCxcbiAgICAgICAgbGluZUhlaWdodDogMS42NSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAzMixcbiAgICB9LFxuICAgIGRlY29yUm93OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgICAgZ2FwOiA4LFxuICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICB9LFxuICAgIGRlY29yQ2hpcDoge1xuICAgICAgICBmb250U2l6ZTogMTEsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgcGFkZGluZzogJzRweCAxMHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDVlbScsXG4gICAgICAgIG9wYWNpdHk6IDAuNyxcbiAgICB9LFxuICAgIGRvdHM6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGJvdHRvbTogMjQsXG4gICAgICAgIHJpZ2h0OiAyNCxcbiAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgaGVpZ2h0OiA4MCxcbiAgICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdEYXJrLFxuICAgICAgICBwYWRkaW5nOiAnNDhweCA0NHB4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgZm9ybVRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBjb2xvcjogQy53aGl0ZSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA2LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuM3B4JyxcbiAgICB9LFxuICAgIGZvcm1TdWI6IHtcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBjb2xvcjogQy5naG9zdCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAzMixcbiAgICB9LFxuICAgIGVycm9yQm94OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGdhcDogOCxcbiAgICAgICAgcGFkZGluZzogJzEwcHggMTRweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjM5LDY4LDY4LDAuMSknLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsMC4zKWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBjb2xvcjogQy5lcnJvcixcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICB9LFxuICAgIGVycm9yRG90OiB7XG4gICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICBjb2xvcjogQy5lcnJvcixcbiAgICB9LFxuICAgIGZpZWxkOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGdhcDogNixcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBjb2xvcjogQy5mYWludCxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmc6ICcxMXB4IDE0cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdJbnB1dCxcbiAgICAgICAgY29sb3I6IEMud2hpdGUsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIHRyYW5zaXRpb246ICdib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIFdlYmtpdFRleHRGaWxsQ29sb3I6IEMud2hpdGUsXG4gICAgfSxcbiAgICBidG46IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgcGFkZGluZzogJzEycHgnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICAgICAgY29sb3I6IEMud2hpdGUsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgIGZvbnRTaXplOiAxNSxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgbWFyZ2luVG9wOiA4LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMmVtJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQgMC4xNXMgZWFzZScsXG4gICAgfSxcbiAgICBoaW50OiB7XG4gICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgY29sb3I6IEMuZ2hvc3QsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdJbnB1dDogJyMwZjE3MmEnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgY3lhbjogJyMwNmI2ZDQnLFxuICAgIGJsdWU6ICcjM2I4MmY2JyxcbiAgICBlcnJvcjogJyNlZjQ0NDQnLFxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgbXV0ZWQ6ICcjY2JkNWUxJyxcbiAgICBmYWludDogJyM5NGEzYjgnLFxuICAgIGdob3N0OiAnIzY0NzQ4YicsXG59O1xuY29uc3QgQ09OVEVOVF9UWVBFUyA9IFtcbiAgICB7IHZhbHVlOiAndGV4dCcsIGxhYmVsOiAn0KLQtdC60YHRgicgfSxcbiAgICB7IHZhbHVlOiAndmlkZW8nLCBsYWJlbDogJ9CS0LjQtNC10L4nIH0sXG4gICAgeyB2YWx1ZTogJ3F1aXonLCBsYWJlbDogJ9Ci0LXRgdGCJyB9LFxuXTtcbmNvbnN0IFFVRVNUSU9OX1RZUEVTID0gW1xuICAgIHsgdmFsdWU6ICdzaW5nbGUnLCBsYWJlbDogJ9Ce0LTQuNC9INCy0LDRgNC40LDQvdGCJyB9LFxuICAgIHsgdmFsdWU6ICdtdWx0aXBsZScsIGxhYmVsOiAn0J3QtdGB0LrQvtC70YzQutC+INCy0LDRgNC40LDQvdGC0L7QsicgfSxcbiAgICB7IHZhbHVlOiAndGV4dCcsIGxhYmVsOiAn0KLQtdC60YHRgtC+0LLRi9C5INC+0YLQstC10YInIH0sXG5dO1xuY29uc3QgQ0FURUdPUklFUyA9IFtcbiAgICB7IHZhbHVlOiAnZnJvbnRlbmQnLCBsYWJlbDogJ0Zyb250ZW5kJyB9LFxuICAgIHsgdmFsdWU6ICdiYWNrZW5kJywgbGFiZWw6ICdCYWNrZW5kJyB9LFxuICAgIHsgdmFsdWU6ICdkZXZvcHMnLCBsYWJlbDogJ0Rldk9wcycgfSxcbiAgICB7IHZhbHVlOiAnbW9iaWxlJywgbGFiZWw6ICdNb2JpbGUnIH0sXG4gICAgeyB2YWx1ZTogJ2Rlc2lnbicsIGxhYmVsOiAnRGVzaWduJyB9LFxuICAgIHsgdmFsdWU6ICdvdGhlcicsIGxhYmVsOiAn0JTRgNGD0LPQvtC1JyB9LFxuXTtcbmNvbnN0IGlucHV0U3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzhweCAxMHB4JyxcbiAgICBiYWNrZ3JvdW5kOiBDLmJnSW5wdXQsXG4gICAgY29sb3I6IEMud2hpdGUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94Jyxcbn07XG5jb25zdCBzZWxlY3RTdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnOHB4IDEwcHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogQy53aGl0ZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTMsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbmNvbnN0IGJ0bkRhbmdlciA9IHtcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgY29sb3I6IEMuZXJyb3IsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHBhZGRpbmc6ICc0cHggOHB4JyxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG59O1xuY29uc3QgYnRuQWRkID0ge1xuICAgIHBhZGRpbmc6ICc2cHggMTJweCcsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogQy5ncmVlbixcbiAgICBib3JkZXI6IGAxcHggZGFzaGVkICR7Qy5ncmVlbn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTIsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgbWFyZ2luVG9wOiA0LFxufTtcbmZ1bmN0aW9uIEFuc3dlclJvdyh7IGFuc3dlciwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDQgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxMlxcdTA0MzBcXHUwNDQwXFx1MDQzOFxcdTA0MzBcXHUwNDNEXFx1MDQ0MiBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0MzBcIiwgdmFsdWU6IGFuc3dlci5hbnN3ZXJfdGV4dCwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5hbnN3ZXIsIGFuc3dlcl90ZXh0OiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgZmxleDogMSB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLmZhaW50LCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDQsIGN1cnNvcjogJ3BvaW50ZXInLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNoZWNrZWQ6IGFuc3dlci5pc19jb3JyZWN0LCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmFuc3dlciwgaXNfY29ycmVjdDogZS50YXJnZXQuY2hlY2tlZCB9KSwgc3R5bGU6IHsgYWNjZW50Q29sb3I6IEMuZ3JlZW4gfSB9KSxcbiAgICAgICAgICAgIFwiXFx1MDQzMlxcdTA0MzVcXHUwNDQwXFx1MDQzRFxcdTA0M0VcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBvblJlbW92ZSwgc3R5bGU6IGJ0bkRhbmdlciB9LCBcIlxcdTI3MTVcIikpKTtcbn1cbmZ1bmN0aW9uIFF1ZXN0aW9uQmxvY2soeyBxdWVzdGlvbiwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgY29uc3QgYWRkQW5zd2VyID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBhbnN3ZXJzOiBbLi4ucXVlc3Rpb24uYW5zd2VycywgeyBhbnN3ZXJfdGV4dDogJycsIGlzX2NvcnJlY3Q6IGZhbHNlIH1dIH0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlQW5zd2VyID0gKGksIGEpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IFsuLi5xdWVzdGlvbi5hbnN3ZXJzXTtcbiAgICAgICAgbmV4dFtpXSA9IGE7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlc3Rpb24sIGFuc3dlcnM6IG5leHQgfSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVBbnN3ZXIgPSAoaSkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBhbnN3ZXJzOiBxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGkpIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAxMCwgcGFkZGluZzogMTIsIGJhY2tncm91bmQ6ICcjMGExNjI4JywgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgYm9yZGVyUmFkaXVzOiA2IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA4IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDIyXFx1MDQzNVxcdTA0M0FcXHUwNDQxXFx1MDQ0MiBcXHUwNDMyXFx1MDQzRVxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDMwXCIsIHZhbHVlOiBxdWVzdGlvbi5xdWVzdGlvbl90ZXh0LCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBxdWVzdGlvbl90ZXh0OiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgZmxleDogMSB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IHZhbHVlOiBxdWVzdGlvbi5xdWVzdGlvbl90eXBlLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBxdWVzdGlvbl90eXBlOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHNlbGVjdFN0eWxlIH0sIFFVRVNUSU9OX1RZUEVTLm1hcChxdCA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogcXQudmFsdWUsIHZhbHVlOiBxdC52YWx1ZSB9LCBxdC5sYWJlbCkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSxcbiAgICAgICAgcXVlc3Rpb24ucXVlc3Rpb25fdHlwZSAhPT0gJ3RleHQnICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgcXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFucywgYWkpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEFuc3dlclJvdywgeyBrZXk6IGFpLCBhbnN3ZXI6IGFucywgb25DaGFuZ2U6IGEgPT4gdXBkYXRlQW5zd2VyKGFpLCBhKSwgb25SZW1vdmU6ICgpID0+IHJlbW92ZUFuc3dlcihhaSkgfSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBhZGRBbnN3ZXIsIHN0eWxlOiBidG5BZGQgfSwgXCIrIFxcdTA0MTJcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcXHUwNDMwXFx1MDQzRFxcdTA0NDIgXFx1MDQzRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDMwXCIpKSkpKTtcbn1cbmZ1bmN0aW9uIExlc3NvblJvdyh7IGxlc3Nvbiwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgY29uc3QgYWRkUXVlc3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgIC4uLmxlc3NvbixcbiAgICAgICAgICAgIHF1ZXN0aW9uczogWy4uLihsZXNzb24ucXVlc3Rpb25zIHx8IFtdKSwgeyBxdWVzdGlvbl90ZXh0OiAnJywgcXVlc3Rpb25fdHlwZTogJ3NpbmdsZScsIGFuc3dlcnM6IFt7IGFuc3dlcl90ZXh0OiAnJywgaXNfY29ycmVjdDogZmFsc2UgfV0gfV0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlUXVlc3Rpb24gPSAoaSwgcSkgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gWy4uLihsZXNzb24ucXVlc3Rpb25zIHx8IFtdKV07XG4gICAgICAgIG5leHRbaV0gPSBxO1xuICAgICAgICBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgcXVlc3Rpb25zOiBuZXh0IH0pO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUXVlc3Rpb24gPSAoaSkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgcXVlc3Rpb25zOiAobGVzc29uLnF1ZXN0aW9ucyB8fCBbXSkuZmlsdGVyKChfLCBpZHgpID0+IGlkeCAhPT0gaSkgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpc1F1aXogPSBsZXNzb24uY29udGVudF90eXBlID09PSAncXVpeic7XG4gICAgY29uc3QgaXNWaWRlbyA9IGxlc3Nvbi5jb250ZW50X3R5cGUgPT09ICd2aWRlbyc7XG4gICAgY29uc3QgaXNUZXh0ID0gbGVzc29uLmNvbnRlbnRfdHlwZSA9PT0gJ3RleHQnO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogOCwgcGFkZGluZzogJzEwcHggMTJweCcsIGJhY2tncm91bmQ6IEMuYmdDYXJkLCBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCBib3JkZXJSYWRpdXM6IDYgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDYgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MURcXHUwNDMwXFx1MDQzN1xcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDMwXCIsIHZhbHVlOiBsZXNzb24udGl0bGUsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ubGVzc29uLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogbGVzc29uLmNvbnRlbnRfdHlwZSwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5sZXNzb24sIGNvbnRlbnRfdHlwZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiBzZWxlY3RTdHlsZSB9LCBDT05URU5UX1RZUEVTLm1hcChjdCA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogY3QudmFsdWUsIHZhbHVlOiBjdC52YWx1ZSB9LCBjdC5sYWJlbCkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSxcbiAgICAgICAgaXNWaWRlbyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MjFcXHUwNDQxXFx1MDQ0QlxcdTA0M0JcXHUwNDNBXFx1MDQzMCBcXHUwNDNEXFx1MDQzMCBcXHUwNDMyXFx1MDQzOFxcdTA0MzRcXHUwNDM1XFx1MDQzRSAoWW91VHViZS9WaW1lb1xcdTIwMjYpXCIsIHZhbHVlOiBsZXNzb24udmlkZW9fdXJsIHx8ICcnLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgdmlkZW9fdXJsOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgd2lkdGg6ICcxMDAlJyB9IH0pKSxcbiAgICAgICAgaXNUZXh0ICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgeyBwbGFjZWhvbGRlcjogXCJcXHUwNDIyXFx1MDQzNVxcdTA0M0FcXHUwNDQxXFx1MDQ0MlxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0MzUgXFx1MDQ0MVxcdTA0M0VcXHUwNDM0XFx1MDQzNVxcdTA0NDBcXHUwNDM2XFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQzXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXFx1MDQzMFwiLCB2YWx1ZTogbGVzc29uLnRleHRfY29udGVudCB8fCAnJywgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5sZXNzb24sIHRleHRfY29udGVudDogZS50YXJnZXQudmFsdWUgfSksIHJvd3M6IDMsIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIHdpZHRoOiAnMTAwJScsIHJlc2l6ZTogJ3ZlcnRpY2FsJyB9IH0pKSxcbiAgICAgICAgaXNRdWl6ICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiA4IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzMFwiLCB2YWx1ZTogbGVzc29uLnF1aXpfdGl0bGUgfHwgJycsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ubGVzc29uLCBxdWl6X3RpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiA4IH0gfSksXG4gICAgICAgICAgICAobGVzc29uLnF1ZXN0aW9ucyB8fCBbXSkubWFwKChxLCBxaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25CbG9jaywgeyBrZXk6IHFpLCBxdWVzdGlvbjogcSwgb25DaGFuZ2U6IGEgPT4gdXBkYXRlUXVlc3Rpb24ocWksIGEpLCBvblJlbW92ZTogKCkgPT4gcmVtb3ZlUXVlc3Rpb24ocWkpIH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogYWRkUXVlc3Rpb24sIHN0eWxlOiBidG5BZGQgfSwgXCIrIFxcdTA0MTJcXHUwNDNFXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQ0MVwiKSkpKSk7XG59XG5mdW5jdGlvbiBTZWN0aW9uQmxvY2soeyBzZWN0aW9uLCBpbmRleCwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgY29uc3QgYWRkTGVzc29uID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnNlY3Rpb24sIGxlc3NvbnM6IFsuLi5zZWN0aW9uLmxlc3NvbnMsIHsgdGl0bGU6ICcnLCBjb250ZW50X3R5cGU6ICd0ZXh0JyB9XSB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZUxlc3NvbiA9IChsaSwgbGVzc29uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4uc2VjdGlvbi5sZXNzb25zXTtcbiAgICAgICAgbmV4dFtsaV0gPSBsZXNzb247XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4uc2VjdGlvbiwgbGVzc29uczogbmV4dCB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZUxlc3NvbiA9IChsaSkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnNlY3Rpb24sIGxlc3NvbnM6IHNlY3Rpb24ubGVzc29ucy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGxpKSB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTYsIHBhZGRpbmc6IDE2LCBiYWNrZ3JvdW5kOiBDLmJnQ2FyZCwgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgYm9yZGVyUmFkaXVzOiA4IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgbWFyZ2luQm90dG9tOiAxMiB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogQy5jeWFuIH0gfSxcbiAgICAgICAgICAgICAgICBcIlxcdTA0MjBcXHUwNDMwXFx1MDQzN1xcdTA0MzRcXHUwNDM1XFx1MDQzQiBcIixcbiAgICAgICAgICAgICAgICBpbmRleCArIDEpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MURcXHUwNDMwXFx1MDQzN1xcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDBcXHUwNDMwXFx1MDQzN1xcdTA0MzRcXHUwNDM1XFx1MDQzQlxcdTA0MzBcIiwgdmFsdWU6IHNlY3Rpb24udGl0bGUsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4uc2VjdGlvbiwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCBmbGV4OiAxIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSxcbiAgICAgICAgc2VjdGlvbi5sZXNzb25zLm1hcCgobGVzc29uLCBsaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGVzc29uUm93LCB7IGtleTogbGksIGxlc3NvbjogbGVzc29uLCBvbkNoYW5nZTogbCA9PiB1cGRhdGVMZXNzb24obGksIGwpLCBvblJlbW92ZTogKCkgPT4gcmVtb3ZlTGVzc29uKGxpKSB9KSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogYWRkTGVzc29uLCBzdHlsZTogYnRuQWRkIH0sIFwiKyBcXHUwNDIzXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXCIpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VDcmVhdGUocHJvcHMpIHtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCdmcm9udGVuZCcpO1xuICAgIGNvbnN0IFtyZXF1aXJlUXVpeiwgc2V0UmVxdWlyZVF1aXpdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW21pblNjb3JlLCBzZXRNaW5TY29yZV0gPSB1c2VTdGF0ZSg2NSk7XG4gICAgY29uc3QgW3NlY3Rpb25zLCBzZXRTZWN0aW9uc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHsgdGl0bGU6ICcnLCBsZXNzb25zOiBbeyB0aXRsZTogJycsIGNvbnRlbnRfdHlwZTogJ3ZpZGVvJyB9XSB9LFxuICAgIF0pO1xuICAgIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhZGRTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRTZWN0aW9ucyhbLi4uc2VjdGlvbnMsIHsgdGl0bGU6ICcnLCBsZXNzb25zOiBbeyB0aXRsZTogJycsIGNvbnRlbnRfdHlwZTogJ3RleHQnIH1dIH1dKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVNlY3Rpb24gPSAoaSwgc2VjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gWy4uLnNlY3Rpb25zXTtcbiAgICAgICAgbmV4dFtpXSA9IHNlY3Rpb247XG4gICAgICAgIHNldFNlY3Rpb25zKG5leHQpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlU2VjdGlvbiA9IChpKSA9PiB7XG4gICAgICAgIHNldFNlY3Rpb25zKHNlY3Rpb25zLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGkpKTtcbiAgICB9O1xuICAgIGNvbnN0IHRvdGFsTGVzc29ucyA9IHNlY3Rpb25zLnJlZHVjZSgocywgc2VjKSA9PiBzICsgc2VjLmxlc3NvbnMubGVuZ3RoLCAwKTtcbiAgICBjb25zdCBhcGlVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcL3Jlc291cmNlc1xcLy8sICcvYXBpL3Jlc291cmNlcy8nKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlZGlyZWN0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5ub3RpY2U/Lm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0YHQvtC30LTQsNC90LjQuCDQutGD0YDRgdCwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgYWxlcnQoYNCe0YjQuNCx0LrQsDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBwYWRkaW5nOiAyNCwgbWluSGVpZ2h0OiAnMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdQYWdlLCBjb2xvcjogQy53aGl0ZSwgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBtZXRob2Q6IFwiUE9TVFwiLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCBzdHlsZTogeyBtYXhXaWR0aDogODAwLCBtYXJnaW46ICcwIGF1dG8nIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCA0cHgnLCBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sIFwiXFx1MDQyMVxcdTA0M0VcXHUwNDM3XFx1MDQzNFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQzQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0MzBcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCAyNHB4JywgZm9udFNpemU6IDEzLCBjb2xvcjogQy5naG9zdCB9IH0sIFwiXFx1MDQxQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MSwgXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0QiwgXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzggXFx1MDQzOCBcXHUwNDQyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQ0QiBcXHUyMDE0IFxcdTA0MzJcXHUwNDQxXFx1MDQ1MSBcXHUwNDM3XFx1MDQzMCBcXHUwNDNFXFx1MDQzNFxcdTA0MzhcXHUwNDNEIFxcdTA0NDhcXHUwNDMwXFx1MDQzM1wiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJywgZ2FwOiAxNiwgbWFyZ2luQm90dG9tOiAyNCB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQzMCAqXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB2YWx1ZTogdGl0bGUsIG9uQ2hhbmdlOiBlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJ0aXRsZVwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0M0ZcXHUwNDQwXFx1MDQzOFxcdTA0M0NcXHUwNDM1XFx1MDQ0MDogSmF2YVNjcmlwdCBcXHUwNDQxIFxcdTA0M0RcXHUwNDQzXFx1MDQzQlxcdTA0NEZcIiwgc3R5bGU6IGZ1bGxJbnB1dFN0eWxlLCByZXF1aXJlZDogdHJ1ZSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFFXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHsgdmFsdWU6IGRlc2NyaXB0aW9uLCBvbkNoYW5nZTogZSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSksIG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxQVxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0FcXHUwNDNFXFx1MDQzNSBcXHUwNDNFXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQzMCBcXHUyMDE0IFxcdTA0NDdcXHUwNDM1XFx1MDQzQ1xcdTA0NDMgXFx1MDQzRFxcdTA0MzBcXHUwNDQzXFx1MDQ0N1xcdTA0MzhcXHUwNDQyXFx1MDQ0MVxcdTA0NEYgXFx1MDQ0MVxcdTA0NDJcXHUwNDQzXFx1MDQzNFxcdTA0MzVcXHUwNDNEXFx1MDQ0MlwiLCByb3dzOiAzLCBzdHlsZTogeyAuLi5mdWxsSW5wdXRTdHlsZSwgcmVzaXplOiAndmVydGljYWwnIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFBXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzM1xcdTA0M0VcXHUwNDQwXFx1MDQzOFxcdTA0NEZcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogY2F0ZWdvcnksIG9uQ2hhbmdlOiBlID0+IHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJjYXRlZ29yeVwiLCBzdHlsZTogZnVsbElucHV0U3R5bGUgfSwgQ0FURUdPUklFUy5tYXAoYyA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogYy52YWx1ZSwgdmFsdWU6IGMudmFsdWUgfSwgYy5sYWJlbCkpKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiB7IC4uLmxhYmVsU3R5bGUsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgY3Vyc29yOiAncG9pbnRlcicgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiByZXF1aXJlUXVpeiwgb25DaGFuZ2U6IGUgPT4gc2V0UmVxdWlyZVF1aXooZS50YXJnZXQuY2hlY2tlZCksIG5hbWU6IFwicmVxdWlyZV9xdWl6X2NvbXBsZXRpb25cIiwgc3R5bGU6IHsgYWNjZW50Q29sb3I6IEMuZ3JlZW4gfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyMlxcdTA0NDBcXHUwNDM1XFx1MDQzMVxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRDIFxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDVcXHUwNDNFXFx1MDQzNlxcdTA0MzRcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlUXVpeiAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpblRvcDogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MUNcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDNDXFx1MDQzMFxcdTA0M0JcXHUwNDRDXFx1MDQzRFxcdTA0NEJcXHUwNDM5IFxcdTA0MzFcXHUwNDMwXFx1MDQzQlxcdTA0M0JcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcIm51bWJlclwiLCB2YWx1ZTogbWluU2NvcmUsIG9uQ2hhbmdlOiBlID0+IHNldE1pblNjb3JlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpLCBuYW1lOiBcIm1pbl9xdWl6X3Njb3JlXCIsIG1pbjogMCwgbWF4OiAxMDAsIHN0eWxlOiB7IC4uLmZ1bGxJbnB1dFN0eWxlLCB3aWR0aDogMTIwIH0gfSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBDLm11dGVkLCBtYXJnaW46ICcwIDAgMTJweCcgfSB9LFxuICAgICAgICAgICAgICAgIFwiXFx1MDQyMFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0QiBcXHUwNDM4IFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDM4XCIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLmdob3N0LCBmb250V2VpZ2h0OiA0MDAsIG1hcmdpbkxlZnQ6IDggfSB9LFxuICAgICAgICAgICAgICAgICAgICBcIihcIixcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBcIiBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0LiwgXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsTGVzc29ucyxcbiAgICAgICAgICAgICAgICAgICAgXCIgXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0M0VcXHUwNDMyKVwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcInNlY3Rpb25zX2pzb25cIiwgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zKSB9KSxcbiAgICAgICAgICAgIHNlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbkJsb2NrLCB7IGtleTogaSwgc2VjdGlvbjogc2VjdGlvbiwgaW5kZXg6IGksIG9uQ2hhbmdlOiBzID0+IHVwZGF0ZVNlY3Rpb24oaSwgcyksIG9uUmVtb3ZlOiAoKSA9PiByZW1vdmVTZWN0aW9uKGkpIH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMjQgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBhZGRTZWN0aW9uLCBzdHlsZTogYWRkU2VjdGlvbkJ0blN0eWxlIH0sIFwiKyBcXHUwNDE0XFx1MDQzRVxcdTA0MzFcXHUwNDMwXFx1MDQzMlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBzdWJtaXR0aW5nLCBzdHlsZTogc3VibWl0QnRuU3R5bGUgfSwgc3VibWl0dGluZyA/ICfQodC+0LfQtNCw0L3QuNC14oCmJyA6ICfQodC+0LfQtNCw0YLRjCDQutGD0YDRgScpKSkpO1xufVxuY29uc3QgbGFiZWxTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgY29sb3I6IEMuZmFpbnQsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxufTtcbmNvbnN0IGZ1bGxJbnB1dFN0eWxlID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZzogJzlweCAxMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiBDLmJnSW5wdXQsXG4gICAgY29sb3I6IEMud2hpdGUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94Jyxcbn07XG5jb25zdCBhZGRTZWN0aW9uQnRuU3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBDLmN5YW4sXG4gICAgYm9yZGVyOiBgMXB4IGRhc2hlZCAke0MuY3lhbn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTMsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG59O1xuY29uc3Qgc3VibWl0QnRuU3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzEycHggMzJweCcsXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7Qy5ncmVlbn0sICR7Qy5ncmVlbkRhcmt9KWAsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgZm9udFNpemU6IDE1LFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBDID0ge1xuICAgIGJnUGFnZTogJyMwMjA2MTcnLFxuICAgIGJnQ2FyZDogJyMxZTI5M2InLFxuICAgIGJnSW5wdXQ6ICcjMGYxNzJhJyxcbiAgICBib3JkZXI6ICcjMzM0MTU1JyxcbiAgICBncmVlbjogJyMxMGI5ODEnLFxuICAgIGdyZWVuRGFyazogJyMwNTk2NjknLFxuICAgIGN5YW46ICcjMDZiNmQ0JyxcbiAgICBibHVlOiAnIzNiODJmNicsXG4gICAgZXJyb3I6ICcjZWY0NDQ0JyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIG11dGVkOiAnI2NiZDVlMScsXG4gICAgZmFpbnQ6ICcjOTRhM2I4JyxcbiAgICBnaG9zdDogJyM2NDc0OGInLFxufTtcbmNvbnN0IENPTlRFTlRfVFlQRVMgPSBbXG4gICAgeyB2YWx1ZTogJ3RleHQnLCBsYWJlbDogJ9Ci0LXQutGB0YInIH0sXG4gICAgeyB2YWx1ZTogJ3ZpZGVvJywgbGFiZWw6ICfQktC40LTQtdC+JyB9LFxuICAgIHsgdmFsdWU6ICdxdWl6JywgbGFiZWw6ICfQotC10YHRgicgfSxcbl07XG5jb25zdCBRVUVTVElPTl9UWVBFUyA9IFtcbiAgICB7IHZhbHVlOiAnc2luZ2xlJywgbGFiZWw6ICfQntC00LjQvSDQstCw0YDQuNCw0L3RgicgfSxcbiAgICB7IHZhbHVlOiAnbXVsdGlwbGUnLCBsYWJlbDogJ9Cd0LXRgdC60L7Qu9GM0LrQviDQstCw0YDQuNCw0L3RgtC+0LInIH0sXG4gICAgeyB2YWx1ZTogJ3RleHQnLCBsYWJlbDogJ9Ci0LXQutGB0YLQvtCy0YvQuSDQvtGC0LLQtdGCJyB9LFxuXTtcbmNvbnN0IENBVEVHT1JJRVMgPSBbXG4gICAgeyB2YWx1ZTogJ2Zyb250ZW5kJywgbGFiZWw6ICdGcm9udGVuZCcgfSxcbiAgICB7IHZhbHVlOiAnYmFja2VuZCcsIGxhYmVsOiAnQmFja2VuZCcgfSxcbiAgICB7IHZhbHVlOiAnZGV2b3BzJywgbGFiZWw6ICdEZXZPcHMnIH0sXG4gICAgeyB2YWx1ZTogJ21vYmlsZScsIGxhYmVsOiAnTW9iaWxlJyB9LFxuICAgIHsgdmFsdWU6ICdkZXNpZ24nLCBsYWJlbDogJ0Rlc2lnbicgfSxcbiAgICB7IHZhbHVlOiAnb3RoZXInLCBsYWJlbDogJ9CU0YDRg9Cz0L7QtScgfSxcbl07XG5jb25zdCBpbnB1dFN0eWxlID0ge1xuICAgIHBhZGRpbmc6ICc4cHggMTBweCcsXG4gICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgIGNvbG9yOiBDLndoaXRlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG59O1xuY29uc3Qgc2VsZWN0U3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzhweCAxMHB4JyxcbiAgICBiYWNrZ3JvdW5kOiBDLmJnSW5wdXQsXG4gICAgY29sb3I6IEMud2hpdGUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG5jb25zdCBidG5EYW5nZXIgPSB7XG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGNvbG9yOiBDLmVycm9yLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBwYWRkaW5nOiAnNHB4IDhweCcsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxufTtcbmNvbnN0IGJ0bkFkZCA9IHtcbiAgICBwYWRkaW5nOiAnNnB4IDEycHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IEMuZ3JlZW4sXG4gICAgYm9yZGVyOiBgMXB4IGRhc2hlZCAke0MuZ3JlZW59YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG1hcmdpblRvcDogNCxcbn07XG5mdW5jdGlvbiBBbnN3ZXJSb3coeyBhbnN3ZXIsIG9uQ2hhbmdlLCBvblJlbW92ZSwgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA0IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MTJcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcXHUwNDMwXFx1MDQzRFxcdTA0NDIgXFx1MDQzRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDMwXCIsIHZhbHVlOiBhbnN3ZXIuYW5zd2VyX3RleHQsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4uYW5zd2VyLCBhbnN3ZXJfdGV4dDogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogQy5mYWludCwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA0LCBjdXJzb3I6ICdwb2ludGVyJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiBhbnN3ZXIuaXNfY29ycmVjdCwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5hbnN3ZXIsIGlzX2NvcnJlY3Q6IGUudGFyZ2V0LmNoZWNrZWQgfSksIHN0eWxlOiB7IGFjY2VudENvbG9yOiBDLmdyZWVuIH0gfSksXG4gICAgICAgICAgICBcIlxcdTA0MzJcXHUwNDM1XFx1MDQ0MFxcdTA0M0RcXHUwNDNFXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSk7XG59XG5mdW5jdGlvbiBRdWVzdGlvbkJsb2NrKHsgcXVlc3Rpb24sIG9uQ2hhbmdlLCBvblJlbW92ZSwgfSkge1xuICAgIGNvbnN0IGFkZEFuc3dlciA9ICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVzdGlvbiwgYW5zd2VyczogWy4uLnF1ZXN0aW9uLmFuc3dlcnMsIHsgYW5zd2VyX3RleHQ6ICcnLCBpc19jb3JyZWN0OiBmYWxzZSB9XSB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZUFuc3dlciA9IChpLCBhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4ucXVlc3Rpb24uYW5zd2Vyc107XG4gICAgICAgIG5leHRbaV0gPSBhO1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBhbnN3ZXJzOiBuZXh0IH0pO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlQW5zd2VyID0gKGkpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVzdGlvbiwgYW5zd2VyczogcXVlc3Rpb24uYW5zd2Vycy5maWx0ZXIoKF8sIGlkeCkgPT4gaWR4ICE9PSBpKSB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTAsIHBhZGRpbmc6IDEyLCBiYWNrZ3JvdW5kOiAnIzBhMTYyOCcsIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsIGJvcmRlclJhZGl1czogNiB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDYsIG1hcmdpbkJvdHRvbTogOCB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQyMlxcdTA0MzVcXHUwNDNBXFx1MDQ0MVxcdTA0NDIgXFx1MDQzMlxcdTA0M0VcXHUwNDNGXFx1MDQ0MFxcdTA0M0VcXHUwNDQxXFx1MDQzMFwiLCB2YWx1ZTogcXVlc3Rpb24ucXVlc3Rpb25fdGV4dCwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5xdWVzdGlvbiwgcXVlc3Rpb25fdGV4dDogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogcXVlc3Rpb24ucXVlc3Rpb25fdHlwZSwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5xdWVzdGlvbiwgcXVlc3Rpb25fdHlwZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiBzZWxlY3RTdHlsZSB9LCBRVUVTVElPTl9UWVBFUy5tYXAocXQgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyBrZXk6IHF0LnZhbHVlLCB2YWx1ZTogcXQudmFsdWUgfSwgcXQubGFiZWwpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IG9uUmVtb3ZlLCBzdHlsZTogYnRuRGFuZ2VyIH0sIFwiXFx1MjcxNVwiKSksXG4gICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uX3R5cGUgIT09ICd0ZXh0JyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIHF1ZXN0aW9uLmFuc3dlcnMubWFwKChhbnMsIGFpKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChBbnN3ZXJSb3csIHsga2V5OiBhaSwgYW5zd2VyOiBhbnMsIG9uQ2hhbmdlOiBhID0+IHVwZGF0ZUFuc3dlcihhaSwgYSksIG9uUmVtb3ZlOiAoKSA9PiByZW1vdmVBbnN3ZXIoYWkpIH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogYWRkQW5zd2VyLCBzdHlsZTogYnRuQWRkIH0sIFwiKyBcXHUwNDEyXFx1MDQzMFxcdTA0NDBcXHUwNDM4XFx1MDQzMFxcdTA0M0RcXHUwNDQyIFxcdTA0M0VcXHUwNDQyXFx1MDQzMlxcdTA0MzVcXHUwNDQyXFx1MDQzMFwiKSkpKSk7XG59XG5mdW5jdGlvbiBMZXNzb25Sb3coeyBsZXNzb24sIG9uQ2hhbmdlLCBvblJlbW92ZSwgfSkge1xuICAgIGNvbnN0IGFkZFF1ZXN0aW9uID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAuLi5sZXNzb24sXG4gICAgICAgICAgICBxdWVzdGlvbnM6IFsuLi4obGVzc29uLnF1ZXN0aW9ucyB8fCBbXSksIHsgcXVlc3Rpb25fdGV4dDogJycsIHF1ZXN0aW9uX3R5cGU6ICdzaW5nbGUnLCBhbnN3ZXJzOiBbeyBhbnN3ZXJfdGV4dDogJycsIGlzX2NvcnJlY3Q6IGZhbHNlIH1dIH1dLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVF1ZXN0aW9uID0gKGksIHEpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IFsuLi4obGVzc29uLnF1ZXN0aW9ucyB8fCBbXSldO1xuICAgICAgICBuZXh0W2ldID0gcTtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5sZXNzb24sIHF1ZXN0aW9uczogbmV4dCB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVF1ZXN0aW9uID0gKGkpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5sZXNzb24sIHF1ZXN0aW9uczogKGxlc3Nvbi5xdWVzdGlvbnMgfHwgW10pLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGkpIH0pO1xuICAgIH07XG4gICAgY29uc3QgaXNRdWl6ID0gbGVzc29uLmNvbnRlbnRfdHlwZSA9PT0gJ3F1aXonO1xuICAgIGNvbnN0IGlzVmlkZW8gPSBsZXNzb24uY29udGVudF90eXBlID09PSAndmlkZW8nO1xuICAgIGNvbnN0IGlzVGV4dCA9IGxlc3Nvbi5jb250ZW50X3R5cGUgPT09ICd0ZXh0JztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDgsIHBhZGRpbmc6ICcxMHB4IDEycHgnLCBiYWNrZ3JvdW5kOiBDLmJnQ2FyZCwgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgYm9yZGVyUmFkaXVzOiA2IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA2IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQzXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXFx1MDQzMFwiLCB2YWx1ZTogbGVzc29uLnRpdGxlLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCBmbGV4OiAxIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgdmFsdWU6IGxlc3Nvbi5jb250ZW50X3R5cGUsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ubGVzc29uLCBjb250ZW50X3R5cGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogc2VsZWN0U3R5bGUgfSwgQ09OVEVOVF9UWVBFUy5tYXAoY3QgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyBrZXk6IGN0LnZhbHVlLCB2YWx1ZTogY3QudmFsdWUgfSwgY3QubGFiZWwpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IG9uUmVtb3ZlLCBzdHlsZTogYnRuRGFuZ2VyIH0sIFwiXFx1MjcxNVwiKSksXG4gICAgICAgIGlzVmlkZW8gJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDIxXFx1MDQ0MVxcdTA0NEJcXHUwNDNCXFx1MDQzQVxcdTA0MzAgXFx1MDQzRFxcdTA0MzAgXFx1MDQzMlxcdTA0MzhcXHUwNDM0XFx1MDQzNVxcdTA0M0UgKFlvdVR1YmUvVmltZW9cXHUyMDI2KVwiLCB2YWx1ZTogbGVzc29uLnZpZGVvX3VybCB8fCAnJywgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5sZXNzb24sIHZpZGVvX3VybDogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIHdpZHRoOiAnMTAwJScgfSB9KSksXG4gICAgICAgIGlzVGV4dCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHsgcGxhY2Vob2xkZXI6IFwiXFx1MDQyMlxcdTA0MzVcXHUwNDNBXFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQzMlxcdTA0M0VcXHUwNDM1IFxcdTA0NDFcXHUwNDNFXFx1MDQzNFxcdTA0MzVcXHUwNDQwXFx1MDQzNlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzBcIiwgdmFsdWU6IGxlc3Nvbi50ZXh0X2NvbnRlbnQgfHwgJycsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ubGVzc29uLCB0ZXh0X2NvbnRlbnQ6IGUudGFyZ2V0LnZhbHVlIH0pLCByb3dzOiAzLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCB3aWR0aDogJzEwMCUnLCByZXNpemU6ICd2ZXJ0aWNhbCcgfSB9KSksXG4gICAgICAgIGlzUXVpeiAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpblRvcDogOCB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM3XFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcIiwgdmFsdWU6IGxlc3Nvbi5xdWl6X3RpdGxlIHx8ICcnLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgcXVpel90aXRsZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIHdpZHRoOiAnMTAwJScsIG1hcmdpbkJvdHRvbTogOCB9IH0pLFxuICAgICAgICAgICAgKGxlc3Nvbi5xdWVzdGlvbnMgfHwgW10pLm1hcCgocSwgcWkpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXN0aW9uQmxvY2ssIHsga2V5OiBxaSwgcXVlc3Rpb246IHEsIG9uQ2hhbmdlOiBhID0+IHVwZGF0ZVF1ZXN0aW9uKHFpLCBhKSwgb25SZW1vdmU6ICgpID0+IHJlbW92ZVF1ZXN0aW9uKHFpKSB9KSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IGFkZFF1ZXN0aW9uLCBzdHlsZTogYnRuQWRkIH0sIFwiKyBcXHUwNDEyXFx1MDQzRVxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDFcIikpKSkpO1xufVxuZnVuY3Rpb24gU2VjdGlvbkJsb2NrKHsgc2VjdGlvbiwgaW5kZXgsIG9uQ2hhbmdlLCBvblJlbW92ZSwgfSkge1xuICAgIGNvbnN0IGFkZExlc3NvbiA9ICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5zZWN0aW9uLCBsZXNzb25zOiBbLi4uc2VjdGlvbi5sZXNzb25zLCB7IHRpdGxlOiAnJywgY29udGVudF90eXBlOiAndGV4dCcgfV0gfSk7XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGVMZXNzb24gPSAobGksIGxlc3NvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gWy4uLnNlY3Rpb24ubGVzc29uc107XG4gICAgICAgIG5leHRbbGldID0gbGVzc29uO1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnNlY3Rpb24sIGxlc3NvbnM6IG5leHQgfSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVMZXNzb24gPSAobGkpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5zZWN0aW9uLCBsZXNzb25zOiBzZWN0aW9uLmxlc3NvbnMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBsaSkgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDE2LCBwYWRkaW5nOiAxNiwgYmFja2dyb3VuZDogQy5iZ0NhcmQsIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsIGJvcmRlclJhZGl1czogOCB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMTIgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMuY3lhbiB9IH0sXG4gICAgICAgICAgICAgICAgXCJcXHUwNDIwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0IgXCIsXG4gICAgICAgICAgICAgICAgaW5kZXggKyAxKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDMwXCIsIHZhbHVlOiBzZWN0aW9uLnRpdGxlLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLnNlY3Rpb24sIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgZmxleDogMSB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IG9uUmVtb3ZlLCBzdHlsZTogYnRuRGFuZ2VyIH0sIFwiXFx1MjcxNVwiKSksXG4gICAgICAgIHNlY3Rpb24ubGVzc29ucy5tYXAoKGxlc3NvbiwgbGkpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KExlc3NvblJvdywgeyBrZXk6IGxpLCBsZXNzb246IGxlc3Nvbiwgb25DaGFuZ2U6IGwgPT4gdXBkYXRlTGVzc29uKGxpLCBsKSwgb25SZW1vdmU6ICgpID0+IHJlbW92ZUxlc3NvbihsaSkgfSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6IGFkZExlc3Nvbiwgc3R5bGU6IGJ0bkFkZCB9LCBcIisgXFx1MDQyM1xcdTA0NDBcXHUwNDNFXFx1MDQzQVwiKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlRWRpdChwcm9wcykge1xuICAgIGNvbnN0IHJlY29yZCA9IHByb3BzLnJlY29yZD8ucGFyYW1zIHx8IHt9O1xuICAgIGNvbnN0IGNvdXJzZUlkID0gcmVjb3JkLmlkO1xuICAgIGNvbnN0IGluaXRpYWxTZWN0aW9ucyA9ICgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjb3JkLmNvdXJzZV9kYXRhX2pzb24gPyBKU09OLnBhcnNlKHJlY29yZC5jb3Vyc2VfZGF0YV9qc29uKSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShyZWNvcmQudGl0bGUgfHwgJycpO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUocmVjb3JkLmRlc2NyaXB0aW9uIHx8ICcnKTtcbiAgICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKHJlY29yZC5jYXRlZ29yeSB8fCAnZnJvbnRlbmQnKTtcbiAgICBjb25zdCBbcmVxdWlyZVF1aXosIHNldFJlcXVpcmVRdWl6XSA9IHVzZVN0YXRlKHJlY29yZC5yZXF1aXJlX3F1aXpfY29tcGxldGlvbiA9PT0gdHJ1ZSB8fCByZWNvcmQucmVxdWlyZV9xdWl6X2NvbXBsZXRpb24gPT09ICd0cnVlJyk7XG4gICAgY29uc3QgW21pblNjb3JlLCBzZXRNaW5TY29yZV0gPSB1c2VTdGF0ZShOdW1iZXIocmVjb3JkLm1pbl9xdWl6X3Njb3JlID8/IDY1KSk7XG4gICAgY29uc3QgW3NlY3Rpb25zLCBzZXRTZWN0aW9uc10gPSB1c2VTdGF0ZShpbml0aWFsU2VjdGlvbnMpO1xuICAgIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhcGlVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcL3Jlc291cmNlc1xcLy8sICcvYXBpL3Jlc291cmNlcy8nKTtcbiAgICBjb25zdCBhZGRTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRTZWN0aW9ucyhbLi4uc2VjdGlvbnMsIHsgdGl0bGU6ICcnLCBsZXNzb25zOiBbeyB0aXRsZTogJycsIGNvbnRlbnRfdHlwZTogJ3RleHQnIH1dIH1dKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVNlY3Rpb24gPSAoaSwgc2VjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gWy4uLnNlY3Rpb25zXTtcbiAgICAgICAgbmV4dFtpXSA9IHNlY3Rpb247XG4gICAgICAgIHNldFNlY3Rpb25zKG5leHQpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlU2VjdGlvbiA9IChpKSA9PiB7XG4gICAgICAgIHNldFNlY3Rpb25zKHNlY3Rpb25zLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGkpKTtcbiAgICB9O1xuICAgIGNvbnN0IHRvdGFsTGVzc29ucyA9IHNlY3Rpb25zLnJlZHVjZSgocywgc2VjKSA9PiBzICsgc2VjLmxlc3NvbnMubGVuZ3RoLCAwKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlZGlyZWN0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5ub3RpY2U/Lm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0YHQvtGF0YDQsNC90LXQvdC40Lgg0LrRg9GA0YHQsCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGFsZXJ0KGDQntGI0LjQsdC60LA6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgcGFkZGluZzogMjQsIG1pbkhlaWdodDogJzEwMHZoJywgYmFja2dyb3VuZENvbG9yOiBDLmJnUGFnZSwgY29sb3I6IEMud2hpdGUsIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIiB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgbWV0aG9kOiBcIlBPU1RcIiwgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCwgc3R5bGU6IHsgbWF4V2lkdGg6IDgwMCwgbWFyZ2luOiAnMCBhdXRvJyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogeyBtYXJnaW46ICcwIDAgNHB4JywgZm9udFNpemU6IDIyLCBmb250V2VpZ2h0OiA3MDAgfSB9LCBcIlxcdTA0MjBcXHUwNDM1XFx1MDQzNFxcdTA0MzBcXHUwNDNBXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDMwXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBzdHlsZTogeyBtYXJnaW46ICcwIDAgMjRweCcsIGZvbnRTaXplOiAxMywgY29sb3I6IEMuZ2hvc3QgfSB9LFxuICAgICAgICAgICAgICAgIFwiSUQ6IFwiLFxuICAgICAgICAgICAgICAgIGNvdXJzZUlkLFxuICAgICAgICAgICAgICAgIFwiIFxcdTIwMTQgXFx1MDQ0MFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQzRVxcdTA0MzIsIFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDNFXFx1MDQzMiBcXHUwNDM4IFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQzMlwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJywgZ2FwOiAxNiwgbWFyZ2luQm90dG9tOiAyNCB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQzMCAqXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB2YWx1ZTogdGl0bGUsIG9uQ2hhbmdlOiBlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJ0aXRsZVwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0M0ZcXHUwNDQwXFx1MDQzOFxcdTA0M0NcXHUwNDM1XFx1MDQ0MDogSmF2YVNjcmlwdCBcXHUwNDQxIFxcdTA0M0RcXHUwNDQzXFx1MDQzQlxcdTA0NEZcIiwgc3R5bGU6IGZ1bGxJbnB1dFN0eWxlLCByZXF1aXJlZDogdHJ1ZSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFFXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHsgdmFsdWU6IGRlc2NyaXB0aW9uLCBvbkNoYW5nZTogZSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSksIG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxQVxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0FcXHUwNDNFXFx1MDQzNSBcXHUwNDNFXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQzMCBcXHUyMDE0IFxcdTA0NDdcXHUwNDM1XFx1MDQzQ1xcdTA0NDMgXFx1MDQzRFxcdTA0MzBcXHUwNDQzXFx1MDQ0N1xcdTA0MzhcXHUwNDQyXFx1MDQ0MVxcdTA0NEYgXFx1MDQ0MVxcdTA0NDJcXHUwNDQzXFx1MDQzNFxcdTA0MzVcXHUwNDNEXFx1MDQ0MlwiLCByb3dzOiAzLCBzdHlsZTogeyAuLi5mdWxsSW5wdXRTdHlsZSwgcmVzaXplOiAndmVydGljYWwnIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFBXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzM1xcdTA0M0VcXHUwNDQwXFx1MDQzOFxcdTA0NEZcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogY2F0ZWdvcnksIG9uQ2hhbmdlOiBlID0+IHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJjYXRlZ29yeVwiLCBzdHlsZTogZnVsbElucHV0U3R5bGUgfSwgQ0FURUdPUklFUy5tYXAoYyA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogYy52YWx1ZSwgdmFsdWU6IGMudmFsdWUgfSwgYy5sYWJlbCkpKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiB7IC4uLmxhYmVsU3R5bGUsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgY3Vyc29yOiAncG9pbnRlcicgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiByZXF1aXJlUXVpeiwgb25DaGFuZ2U6IGUgPT4gc2V0UmVxdWlyZVF1aXooZS50YXJnZXQuY2hlY2tlZCksIG5hbWU6IFwicmVxdWlyZV9xdWl6X2NvbXBsZXRpb25cIiwgc3R5bGU6IHsgYWNjZW50Q29sb3I6IEMuZ3JlZW4gfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyMlxcdTA0NDBcXHUwNDM1XFx1MDQzMVxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRDIFxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDVcXHUwNDNFXFx1MDQzNlxcdTA0MzRcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlUXVpeiAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpblRvcDogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MUNcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDNDXFx1MDQzMFxcdTA0M0JcXHUwNDRDXFx1MDQzRFxcdTA0NEJcXHUwNDM5IFxcdTA0MzFcXHUwNDMwXFx1MDQzQlxcdTA0M0JcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcIm51bWJlclwiLCB2YWx1ZTogbWluU2NvcmUsIG9uQ2hhbmdlOiBlID0+IHNldE1pblNjb3JlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpLCBuYW1lOiBcIm1pbl9xdWl6X3Njb3JlXCIsIG1pbjogMCwgbWF4OiAxMDAsIHN0eWxlOiB7IC4uLmZ1bGxJbnB1dFN0eWxlLCB3aWR0aDogMTIwIH0gfSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBDLm11dGVkLCBtYXJnaW46ICcwIDAgMTJweCcgfSB9LFxuICAgICAgICAgICAgICAgIFwiXFx1MDQyMFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0QiBcXHUwNDM4IFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDM4XCIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLmdob3N0LCBmb250V2VpZ2h0OiA0MDAsIG1hcmdpbkxlZnQ6IDggfSB9LFxuICAgICAgICAgICAgICAgICAgICBcIihcIixcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBcIiBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0LiwgXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsTGVzc29ucyxcbiAgICAgICAgICAgICAgICAgICAgXCIgXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0M0VcXHUwNDMyKVwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcInNlY3Rpb25zX2pzb25cIiwgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zKSB9KSxcbiAgICAgICAgICAgIHNlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbkJsb2NrLCB7IGtleTogaSwgc2VjdGlvbjogc2VjdGlvbiwgaW5kZXg6IGksIG9uQ2hhbmdlOiBzID0+IHVwZGF0ZVNlY3Rpb24oaSwgcyksIG9uUmVtb3ZlOiAoKSA9PiByZW1vdmVTZWN0aW9uKGkpIH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMjQgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBhZGRTZWN0aW9uLCBzdHlsZTogYWRkU2VjdGlvbkJ0blN0eWxlIH0sIFwiKyBcXHUwNDE0XFx1MDQzRVxcdTA0MzFcXHUwNDMwXFx1MDQzMlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBzdWJtaXR0aW5nLCBzdHlsZTogc3VibWl0QnRuU3R5bGUgfSwgc3VibWl0dGluZyA/ICfQodC+0YXRgNCw0L3QtdC90LjQteKApicgOiAn0KHQvtGF0YDQsNC90LjRgtGMINC60YPRgNGBJykpKSk7XG59XG5jb25zdCBsYWJlbFN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBjb2xvcjogQy5mYWludCxcbiAgICBtYXJnaW5Cb3R0b206IDQsXG59O1xuY29uc3QgZnVsbElucHV0U3R5bGUgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiAnOXB4IDEycHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogQy53aGl0ZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxufTtcbmNvbnN0IGFkZFNlY3Rpb25CdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IEMuY3lhbixcbiAgICBib3JkZXI6IGAxcHggZGFzaGVkICR7Qy5jeWFufWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG5jb25zdCBzdWJtaXRCdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnMTJweCAzMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBmb250U2l6ZTogMTUsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdJbnB1dDogJyMwZjE3MmEnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgY3lhbjogJyMwNmI2ZDQnLFxuICAgIGJsdWU6ICcjM2I4MmY2JyxcbiAgICBlcnJvcjogJyNlZjQ0NDQnLFxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgbXV0ZWQ6ICcjY2JkNWUxJyxcbiAgICBmYWludDogJyM5NGEzYjgnLFxuICAgIGdob3N0OiAnIzY0NzQ4YicsXG59O1xuY29uc3QgUVVFU1RJT05fVFlQRVMgPSBbXG4gICAgeyB2YWx1ZTogJ3NpbmdsZScsIGxhYmVsOiAn0J7QtNC40L0g0LLQsNGA0LjQsNC90YInIH0sXG4gICAgeyB2YWx1ZTogJ211bHRpcGxlJywgbGFiZWw6ICfQndC10YHQutC+0LvRjNC60L4g0LLQsNGA0LjQsNC90YLQvtCyJyB9LFxuICAgIHsgdmFsdWU6ICd0ZXh0JywgbGFiZWw6ICfQotC10LrRgdGC0L7QstGL0Lkg0L7RgtCy0LXRgicgfSxcbl07XG5jb25zdCBpbnB1dFN0eWxlID0ge1xuICAgIHBhZGRpbmc6ICc4cHggMTBweCcsXG4gICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgIGNvbG9yOiBDLndoaXRlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG59O1xuY29uc3Qgc2VsZWN0U3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzhweCAxMHB4JyxcbiAgICBiYWNrZ3JvdW5kOiBDLmJnSW5wdXQsXG4gICAgY29sb3I6IEMud2hpdGUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG5jb25zdCBidG5EYW5nZXIgPSB7XG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGNvbG9yOiBDLmVycm9yLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBwYWRkaW5nOiAnNHB4IDhweCcsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxufTtcbmNvbnN0IGJ0bkFkZCA9IHtcbiAgICBwYWRkaW5nOiAnNnB4IDEycHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IEMuZ3JlZW4sXG4gICAgYm9yZGVyOiBgMXB4IGRhc2hlZCAke0MuZ3JlZW59YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG1hcmdpblRvcDogNCxcbn07XG5mdW5jdGlvbiBBbnN3ZXJSb3coeyBhbnN3ZXIsIG9uQ2hhbmdlLCBvblJlbW92ZSwgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA0IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MTJcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcXHUwNDMwXFx1MDQzRFxcdTA0NDIgXFx1MDQzRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDMwXCIsIHZhbHVlOiBhbnN3ZXIuYW5zd2VyX3RleHQsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4uYW5zd2VyLCBhbnN3ZXJfdGV4dDogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogQy5mYWludCwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA0LCBjdXJzb3I6ICdwb2ludGVyJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiBhbnN3ZXIuaXNfY29ycmVjdCwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5hbnN3ZXIsIGlzX2NvcnJlY3Q6IGUudGFyZ2V0LmNoZWNrZWQgfSksIHN0eWxlOiB7IGFjY2VudENvbG9yOiBDLmdyZWVuIH0gfSksXG4gICAgICAgICAgICBcIlxcdTA0MzJcXHUwNDM1XFx1MDQ0MFxcdTA0M0RcXHUwNDNFXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6Q3JlYXRlKHByb3BzKSB7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHsgcXVlc3Rpb25fdGV4dDogJycsIHF1ZXN0aW9uX3R5cGU6ICdzaW5nbGUnLCBhbnN3ZXJzOiBbeyBhbnN3ZXJfdGV4dDogJycsIGlzX2NvcnJlY3Q6IGZhbHNlIH1dIH0sXG4gICAgXSk7XG4gICAgY29uc3QgYXBpVXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC9yZXNvdXJjZXNcXC8vLCAnL2FwaS9yZXNvdXJjZXMvJyk7XG4gICAgY29uc3QgYWRkUXVlc3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFF1ZXN0aW9ucyhbLi4ucXVlc3Rpb25zLCB7IHF1ZXN0aW9uX3RleHQ6ICcnLCBxdWVzdGlvbl90eXBlOiAnc2luZ2xlJywgYW5zd2VyczogW3sgYW5zd2VyX3RleHQ6ICcnLCBpc19jb3JyZWN0OiBmYWxzZSB9XSB9XSk7XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGVRdWVzdGlvbiA9IChpLCBxKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4ucXVlc3Rpb25zXTtcbiAgICAgICAgbmV4dFtpXSA9IHE7XG4gICAgICAgIHNldFF1ZXN0aW9ucyhuZXh0KTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVF1ZXN0aW9uID0gKGkpID0+IHtcbiAgICAgICAgc2V0UXVlc3Rpb25zKHF1ZXN0aW9ucy5maWx0ZXIoKF8sIGlkeCkgPT4gaWR4ICE9PSBpKSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlZGlyZWN0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5ub3RpY2U/Lm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0YHQvtC30LTQsNC90LjQuCDRgtC10YHRgtCwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgYWxlcnQoYNCe0YjQuNCx0LrQsDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBwYWRkaW5nOiAyNCwgbWluSGVpZ2h0OiAnMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdQYWdlLCBjb2xvcjogQy53aGl0ZSwgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBtZXRob2Q6IFwiUE9TVFwiLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCBzdHlsZTogeyBtYXhXaWR0aDogNjQwLCBtYXJnaW46ICcwIGF1dG8nIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCA0cHgnLCBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sIFwiXFx1MDQyMVxcdTA0M0VcXHUwNDM3XFx1MDQzNFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCAyNHB4JywgZm9udFNpemU6IDEzLCBjb2xvcjogQy5naG9zdCB9IH0sIFwiXFx1MDQyMlxcdTA0MzVcXHUwNDQxXFx1MDQ0MiBcXHUwNDQxIFxcdTA0MzJcXHUwNDNFXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQ0MVxcdTA0MzBcXHUwNDNDXFx1MDQzOCBcXHUwNDM4IFxcdTA0M0VcXHUwNDQyXFx1MDQzMlxcdTA0MzVcXHUwNDQyXFx1MDQzMFxcdTA0M0NcXHUwNDM4IFxcdTA0MzdcXHUwNDMwIFxcdTA0M0VcXHUwNDM0XFx1MDQzOFxcdTA0M0QgXFx1MDQ0OFxcdTA0MzBcXHUwNDMzXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTYgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM3XFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzAgKlwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB2YWx1ZTogdGl0bGUsIG9uQ2hhbmdlOiBlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJ0aXRsZVwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0M0ZcXHUwNDQwXFx1MDQzOFxcdTA0M0NcXHUwNDM1XFx1MDQ0MDogXFx1MDQxMlxcdTA0NDVcXHUwNDNFXFx1MDQzNFxcdTA0M0RcXHUwNDNFXFx1MDQzOSBcXHUwNDQyXFx1MDQzNVxcdTA0NDFcXHUwNDQyIFxcdTA0M0ZcXHUwNDNFIEphdmFTY3JpcHRcIiwgc3R5bGU6IGZ1bGxJbnB1dFN0eWxlLCByZXF1aXJlZDogdHJ1ZSB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcInF1ZXN0aW9uc19qc29uXCIsIHZhbHVlOiBKU09OLnN0cmluZ2lmeShxdWVzdGlvbnMpIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBDLm11dGVkLCBtYXJnaW46ICcwIDAgMTJweCcgfSB9LFxuICAgICAgICAgICAgICAgIFwiXFx1MDQxMlxcdTA0M0VcXHUwNDNGXFx1MDQ0MFxcdTA0M0VcXHUwNDQxXFx1MDQ0QlwiLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogQy5naG9zdCwgZm9udFdlaWdodDogNDAwLCBtYXJnaW5MZWZ0OiA4IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgXCIoXCIsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIFwiKVwiKSksXG4gICAgICAgICAgICBxdWVzdGlvbnMubWFwKChxLCBxaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IHFpLCBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDEyLCBwYWRkaW5nOiAxMiwgYmFja2dyb3VuZDogQy5iZ0NhcmQsIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsIGJvcmRlclJhZGl1czogNiB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA4IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MjJcXHUwNDM1XFx1MDQzQVxcdTA0NDFcXHUwNDQyIFxcdTA0MzJcXHUwNDNFXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQ0MVxcdTA0MzBcIiwgdmFsdWU6IHEucXVlc3Rpb25fdGV4dCwgb25DaGFuZ2U6IGUgPT4gdXBkYXRlUXVlc3Rpb24ocWksIHsgLi4ucSwgcXVlc3Rpb25fdGV4dDogZS50YXJnZXQudmFsdWUgfSksIG5hbWU6IGBxdWVzdGlvbl8ke3FpfWAsIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IHZhbHVlOiBxLnF1ZXN0aW9uX3R5cGUsIG9uQ2hhbmdlOiBlID0+IHVwZGF0ZVF1ZXN0aW9uKHFpLCB7IC4uLnEsIHF1ZXN0aW9uX3R5cGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogc2VsZWN0U3R5bGUgfSwgUVVFU1RJT05fVFlQRVMubWFwKHF0ID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsga2V5OiBxdC52YWx1ZSwgdmFsdWU6IHF0LnZhbHVlIH0sIHF0LmxhYmVsKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6ICgpID0+IHJlbW92ZVF1ZXN0aW9uKHFpKSwgc3R5bGU6IGJ0bkRhbmdlciB9LCBcIlxcdTI3MTVcIikpLFxuICAgICAgICAgICAgICAgIHEucXVlc3Rpb25fdHlwZSAhPT0gJ3RleHQnICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBxLmFuc3dlcnMubWFwKChhLCBhaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5zd2VyUm93LCB7IGtleTogYWksIGFuc3dlcjogYSwgb25DaGFuZ2U6IGFucyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IFsuLi5xLmFuc3dlcnNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRbYWldID0gYW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXN0aW9uKHFpLCB7IC4uLnEsIGFuc3dlcnM6IG5leHQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvblJlbW92ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXN0aW9uKHFpLCB7IC4uLnEsIGFuc3dlcnM6IHEuYW5zd2Vycy5maWx0ZXIoKF8sIGlkeCkgPT4gaWR4ICE9PSBhaSkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiB1cGRhdGVRdWVzdGlvbihxaSwgeyAuLi5xLCBhbnN3ZXJzOiBbLi4ucS5hbnN3ZXJzLCB7IGFuc3dlcl90ZXh0OiAnJywgaXNfY29ycmVjdDogZmFsc2UgfV0gfSksIHN0eWxlOiBidG5BZGQgfSwgXCIrIFxcdTA0MTJcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcXHUwNDMwXFx1MDQzRFxcdTA0NDIgXFx1MDQzRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDMwXCIpKSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogYWRkUXVlc3Rpb24sIHN0eWxlOiBhZGRRdWVzdGlvbkJ0blN0eWxlIH0sIFwiKyBcXHUwNDE0XFx1MDQzRVxcdTA0MzFcXHUwNDMwXFx1MDQzMlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcXHUwNDMyXFx1MDQzRVxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDFcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAyNCB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBzdWJtaXR0aW5nLCBzdHlsZTogc3VibWl0QnRuU3R5bGUgfSwgc3VibWl0dGluZyA/ICfQodC+0LfQtNCw0L3QuNC14oCmJyA6ICfQodC+0LfQtNCw0YLRjCDRgtC10YHRgicpKSkpKTtcbn1cbmNvbnN0IGxhYmVsU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogMTIsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGNvbG9yOiBDLmZhaW50LFxuICAgIG1hcmdpbkJvdHRvbTogNCxcbn07XG5jb25zdCBmdWxsSW5wdXRTdHlsZSA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6ICc5cHggMTJweCcsXG4gICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgIGNvbG9yOiBDLndoaXRlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG59O1xuY29uc3QgYWRkUXVlc3Rpb25CdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IEMuY3lhbixcbiAgICBib3JkZXI6IGAxcHggZGFzaGVkICR7Qy5jeWFufWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG5jb25zdCBzdWJtaXRCdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnMTJweCAzMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBmb250U2l6ZTogMTUsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdJbnB1dDogJyMwZjE3MmEnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgZmFpbnQ6ICcjOTRhM2I4JyxcbiAgICBnaG9zdDogJyM2NDc0OGInLFxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXG59O1xuY29uc3QgUk9MRVMgPSBbXG4gICAgeyB2YWx1ZTogJ1NUVURFTlQnLCBsYWJlbDogJ9Ch0YLRg9C00LXQvdGCJyB9LFxuICAgIHsgdmFsdWU6ICdVU0VSJywgbGFiZWw6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70YwnIH0sXG4gICAgeyB2YWx1ZTogJ0FETUlOJywgbGFiZWw6ICfQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCcgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQ3JlYXRlKHByb3BzKSB7XG4gICAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFwaVVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvcmVzb3VyY2VzXFwvLywgJy9hcGkvcmVzb3VyY2VzLycpO1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZkLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEucmVkaXJlY3RVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm5vdGljZT8ubWVzc2FnZSB8fCAn0J7RiNC40LHQutCwINC/0YDQuCDRgdC+0LfQtNCw0L3QuNC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGFsZXJ0KGDQntGI0LjQsdC60LA6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgcGFkZGluZzogMjQsIG1pbkhlaWdodDogJzEwMHZoJywgYmFja2dyb3VuZENvbG9yOiBDLmJnUGFnZSwgY29sb3I6IEMud2hpdGUsIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIiB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgbWV0aG9kOiBcIlBPU1RcIiwgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCwgc3R5bGU6IHsgbWF4V2lkdGg6IDUwMCwgbWFyZ2luOiAnMCBhdXRvJyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogeyBtYXJnaW46ICcwIDAgNHB4JywgZm9udFNpemU6IDIyLCBmb250V2VpZ2h0OiA3MDAgfSB9LCBcIlxcdTA0MjFcXHUwNDNFXFx1MDQzN1xcdTA0MzRcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0M0ZcXHUwNDNFXFx1MDQzQlxcdTA0NENcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQ0RlwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDI0cHgnLCBmb250U2l6ZTogMTMsIGNvbG9yOiBDLmdob3N0IH0gfSwgXCJFbWFpbCwgXFx1MDQzRlxcdTA0MzBcXHUwNDQwXFx1MDQzRVxcdTA0M0JcXHUwNDRDIFxcdTA0MzggXFx1MDQ0MFxcdTA0M0VcXHUwNDNCXFx1MDQ0QyBcXHUyMDE0IFxcdTA0MzJcXHUwNDQxXFx1MDQ1MSBcXHUwNDQxXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQ0M1wiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDE2IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIkVtYWlsICpcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJlbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcInVzZXJAZXhhbXBsZS5jb21cIiwgc3R5bGU6IGlucHV0U3R5bGUsIHJlcXVpcmVkOiB0cnVlIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDE2IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MUZcXHUwNDMwXFx1MDQ0MFxcdTA0M0VcXHUwNDNCXFx1MDQ0QyAqXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwicGFzc3dvcmRcIiwgbmFtZTogXCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFDXFx1MDQzOFxcdTA0M0RcXHUwNDM4XFx1MDQzQ1xcdTA0NDNcXHUwNDNDIDggXFx1MDQ0MVxcdTA0MzhcXHUwNDNDXFx1MDQzMlxcdTA0M0VcXHUwNDNCXFx1MDQzRVxcdTA0MzJcIiwgc3R5bGU6IGlucHV0U3R5bGUsIHJlcXVpcmVkOiB0cnVlIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDE2IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MThcXHUwNDNDXFx1MDQ0RiBcXHUwNDNGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NEZcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwidXNlcm5hbWVcIiwgcGxhY2Vob2xkZXI6IFwidXNlcm5hbWVcIiwgc3R5bGU6IGlucHV0U3R5bGUgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTYgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiXFx1MDQyMFxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgbmFtZTogXCJyb2xlXCIsIHN0eWxlOiBpbnB1dFN0eWxlIH0sIFJPTEVTLm1hcChyID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsga2V5OiByLnZhbHVlLCB2YWx1ZTogci52YWx1ZSB9LCByLmxhYmVsKSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6IHN1Ym1pdHRpbmcsIHN0eWxlOiBzdWJtaXRCdG5TdHlsZSB9LCBzdWJtaXR0aW5nID8gJ9Ch0L7Qt9C00LDQvdC40LXigKYnIDogJ9Ch0L7Qt9C00LDRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycpKSkpO1xufVxuY29uc3QgbGFiZWxTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgY29sb3I6IEMuZmFpbnQsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxufTtcbmNvbnN0IGlucHV0U3R5bGUgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiAnOXB4IDEycHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG59O1xuY29uc3Qgc3VibWl0QnRuU3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzEycHggMzJweCcsXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7Qy5ncmVlbn0sICR7Qy5ncmVlbkRhcmt9KWAsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgZm9udFNpemU6IDE1LFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBDID0ge1xuICAgIGJnUGFnZTogJyMwMjA2MTcnLFxuICAgIGJnQ2FyZDogJyMxZTI5M2InLFxuICAgIGJnSW5wdXQ6ICcjMGYxNzJhJyxcbiAgICBib3JkZXI6ICcjMzM0MTU1JyxcbiAgICBncmVlbjogJyMxMGI5ODEnLFxuICAgIGdyZWVuRGFyazogJyMwNTk2NjknLFxuICAgIGN5YW46ICcjMDZiNmQ0JyxcbiAgICBlcnJvcjogJyNlZjQ0NDQnLFxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgbXV0ZWQ6ICcjY2JkNWUxJyxcbiAgICBmYWludDogJyM5NGEzYjgnLFxuICAgIGdob3N0OiAnIzY0NzQ4YicsXG59O1xuY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6ICc5cHggMTJweCcsXG4gICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgIGNvbG9yOiBDLndoaXRlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG59O1xuZnVuY3Rpb24gU2VjdGlvbkJsb2NrKHsgdGl0bGUsIGNvdW50LCBjaGlsZHJlbiB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAyNCwgcGFkZGluZzogMTYsIGJhY2tncm91bmQ6IEMuYmdDYXJkLCBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCBib3JkZXJSYWRpdXM6IDggfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMubXV0ZWQsIG1hcmdpbjogJzAgMCAxMnB4JyB9IH0sXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGNvdW50ICE9PSB1bmRlZmluZWQgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogQy5naG9zdCwgZm9udFdlaWdodDogNDAwLCBtYXJnaW5MZWZ0OiA4IH0gfSxcbiAgICAgICAgICAgICAgICBcIihcIixcbiAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICBcIilcIikpKSxcbiAgICAgICAgY2hpbGRyZW4pKTtcbn1cbmZ1bmN0aW9uIFRhYmxlKHsgcm93cywgY29scywgdGFibGUsIG9uRGVsZXRlZCB9KSB7XG4gICAgY29uc3QgW2RlbGV0aW5nLCBzZXREZWxldGluZ10gPSB1c2VTdGF0ZShuZXcgU2V0KCkpO1xuICAgIGNvbnN0IGRvRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgICAgIGlmICghdGFibGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHNldERlbGV0aW5nKHByZXYgPT4gbmV3IFNldChwcmV2KS5hZGQoaWQpKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvcmVzb3VyY2VzXFwvLywgJy9hcGkvcmVzb3VyY2VzLycpO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgcGFyYW1zLmFwcGVuZCgnX3F1aWNrX2RlbGV0ZV90YWJsZScsIHRhYmxlKTtcbiAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoJ19xdWlja19kZWxldGVfaWQnLCBTdHJpbmcoaWQpKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlZGlyZWN0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb25EZWxldGVkPy4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCB7XG4gICAgICAgICAgICBzZXREZWxldGluZyhwcmV2ID0+IHsgY29uc3QgbiA9IG5ldyBTZXQocHJldik7IG4uZGVsZXRlKGlkKTsgcmV0dXJuIG47IH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAocm93cy5sZW5ndGggPT09IDApXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgY29sb3I6IEMuZ2hvc3QgfSB9LCBcIlxcdTA0MURcXHUwNDM1XFx1MDQ0MiBcXHUwNDM3XFx1MDQzMFxcdTA0M0ZcXHUwNDM4XFx1MDQ0MVxcdTA0MzVcXHUwNDM5XCIpO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG92ZXJmbG93WDogJ2F1dG8nIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIHsgc3R5bGU6IHsgd2lkdGg6ICcxMDAlJywgYm9yZGVyQ29sbGFwc2U6ICdjb2xsYXBzZScsIGZvbnRTaXplOiAxMiB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGhlYWRcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJcIiwgeyBzdHlsZTogeyBjb2xvcjogQy5mYWludCwgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCB9IH0sXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IHN0eWxlOiB7IHBhZGRpbmc6ICc2cHggOHB4JywgdGV4dEFsaWduOiAnbGVmdCcsIHdpZHRoOiAzMCB9IH0pLFxuICAgICAgICAgICAgICAgICAgICBjb2xzLm1hcChjID0+IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiLCB7IGtleTogYy5rZXksIHN0eWxlOiB7IHBhZGRpbmc6ICc2cHggOHB4JywgdGV4dEFsaWduOiAnbGVmdCcsIHdoaXRlU3BhY2U6ICdub3dyYXAnIH0gfSwgYy5sYWJlbCkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgcm93cy5tYXAociA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRyXCIsIHsga2V5OiByLmlkLCBzdHlsZTogeyBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHtDLmJvcmRlcn1gIH0gfSxcbiAgICAgICAgICAgICAgICB0YWJsZSAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsgc3R5bGU6IHsgcGFkZGluZzogJzZweCA4cHgnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIGRpc2FibGVkOiBkZWxldGluZy5oYXMoci5pZCksIG9uQ2xpY2s6ICgpID0+IGRvRGVsZXRlKHIuaWQpLCBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogQy5lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzJweCA0cHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGRlbGV0aW5nLmhhcyhyLmlkKSA/IDAuNCA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aXRsZTogXCJcXHUwNDIzXFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIgfSwgXCJcXHUyNzE1XCIpKSksXG4gICAgICAgICAgICAgICAgY29scy5tYXAoYyA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRkXCIsIHsga2V5OiBjLmtleSwgc3R5bGU6IHsgcGFkZGluZzogJzZweCA4cHgnLCBjb2xvcjogQy53aGl0ZSwgd2hpdGVTcGFjZTogJ25vd3JhcCcgfSB9LCBjLnJlbmRlciA/IGMucmVuZGVyKHJbYy5rZXldKSA6IFN0cmluZyhyW2Mua2V5XSA/PyAnJykpKSkpKSkpKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckVkaXQocHJvcHMpIHtcbiAgICBjb25zdCBwID0gcHJvcHMucmVjb3JkPy5wYXJhbXMgfHwge307XG4gICAgY29uc3QgdXNlcklkID0gcC5pZDtcbiAgICBjb25zdCBwYXJzZSA9IChrZXkpID0+IHsgdHJ5IHtcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UocFtrZXldIHx8ICdbXScpO1xuICAgIH1cbiAgICBjYXRjaCB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9IH07XG4gICAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShwLmVtYWlsIHx8ICcnKTtcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKHAudXNlcm5hbWUgfHwgJycpO1xuICAgIGNvbnN0IFtiaW8sIHNldEJpb10gPSB1c2VTdGF0ZShwLmJpbyB8fCAnJyk7XG4gICAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUocC5yb2xlIHx8ICdVU0VSJyk7XG4gICAgY29uc3QgW2F2YXRhclVybCwgc2V0QXZhdGFyVXJsXSA9IHVzZVN0YXRlKHAuYXZhdGFyX3VybCB8fCAnJyk7XG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW2Vucm9sbG1lbnRzXSA9IHVzZVN0YXRlKHBhcnNlKCdfZW5yb2xsbWVudHNfanNvbicpKTtcbiAgICBjb25zdCBbcHJvZ3Jlc3NdID0gdXNlU3RhdGUocGFyc2UoJ19wcm9ncmVzc19qc29uJykpO1xuICAgIGNvbnN0IFtxdWl6QXR0ZW1wdHNdID0gdXNlU3RhdGUocGFyc2UoJ19xdWl6X2F0dGVtcHRzX2pzb24nKSk7XG4gICAgY29uc3QgW2JhZGdlc10gPSB1c2VTdGF0ZShwYXJzZSgnX2JhZGdlc19qc29uJykpO1xuICAgIGNvbnN0IFtjZXJ0c10gPSB1c2VTdGF0ZShwYXJzZSgnX2NlcnRpZmljYXRpb25zX2pzb24nKSk7XG4gICAgY29uc3QgW3NvY2lhbHNdID0gdXNlU3RhdGUocGFyc2UoJ19zb2NpYWxfbGlua3NfanNvbicpKTtcbiAgICBjb25zdCBbcmF0aW5nc10gPSB1c2VTdGF0ZShwYXJzZSgnX3JhdGluZ3NfanNvbicpKTtcbiAgICBjb25zdCBhbGxDb3Vyc2VzID0gcGFyc2UoJ19hbGxfY291cnNlc19qc29uJyk7XG4gICAgY29uc3QgYWxsQmFkZ2VzID0gcGFyc2UoJ19hbGxfYmFkZ2VzX2pzb24nKTtcbiAgICBjb25zdCBleGlzdGluZ0NvdXJzZUlkcyA9IG5ldyBTZXQoZW5yb2xsbWVudHMubWFwKChlKSA9PiBlLmNvdXJzZV9pZCkpO1xuICAgIGNvbnN0IGV4aXN0aW5nQmFkZ2VJZHMgPSBuZXcgU2V0KGJhZGdlcy5tYXAoKGIpID0+IGIuYmFkZ2VfaWQpKTtcbiAgICBjb25zdCBhdmFpbGFibGVDb3Vyc2VzID0gYWxsQ291cnNlcy5maWx0ZXIoKGMpID0+ICFleGlzdGluZ0NvdXJzZUlkcy5oYXMoYy5pZCkpO1xuICAgIGNvbnN0IGF2YWlsYWJsZUJhZGdlcyA9IGFsbEJhZGdlcy5maWx0ZXIoKGIpID0+ICFleGlzdGluZ0JhZGdlSWRzLmhhcyhiLmlkKSk7XG4gICAgY29uc3QgW25ld0NvdXJzZUlkLCBzZXROZXdDb3Vyc2VJZF0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW25ld0JhZGdlSWQsIHNldE5ld0JhZGdlSWRdID0gdXNlU3RhdGUoJycpO1xuICAgIGNvbnN0IFtyZWZyZXNoS2V5LCBzZXRSZWZyZXNoS2V5XSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhcGlVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcL3Jlc291cmNlc1xcLy8sICcvYXBpL3Jlc291cmNlcy8nKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlZGlyZWN0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5ub3RpY2U/Lm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0YHQvtGF0YDQsNC90LXQvdC40LgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBhbGVydChg0J7RiNC40LHQutCwOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IFJPTEVTID0gW1xuICAgICAgICB7IHZhbHVlOiAnQURNSU4nLCBsYWJlbDogJ9CQ0LTQvNC40L3QuNGB0YLRgNCw0YLQvtGAJyB9LFxuICAgICAgICB7IHZhbHVlOiAnVVNFUicsIGxhYmVsOiAn0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMJyB9LFxuICAgICAgICB7IHZhbHVlOiAnU1RVREVOVCcsIGxhYmVsOiAn0KHRgtGD0LTQtdC90YInIH0sXG4gICAgXTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBwYWRkaW5nOiAyNCwgbWluSGVpZ2h0OiAnMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdQYWdlLCBjb2xvcjogQy53aGl0ZSwgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBtZXRob2Q6IFwiUE9TVFwiLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCBzdHlsZTogeyBtYXhXaWR0aDogOTAwLCBtYXJnaW46ICcwIGF1dG8nIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCA0cHgnLCBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sXG4gICAgICAgICAgICAgICAgXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NEMgI1wiLFxuICAgICAgICAgICAgICAgIHVzZXJJZCksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCAyNHB4JywgZm9udFNpemU6IDEzLCBjb2xvcjogQy5naG9zdCB9IH0sIFwiXFx1MDQxMlxcdTA0NDFcXHUwNDM1IFxcdTA0MzRcXHUwNDMwXFx1MDQzRFxcdTA0M0RcXHUwNDRCXFx1MDQzNSBcXHUwNDM4IFxcdTA0NDFcXHUwNDMyXFx1MDQ0RlxcdTA0MzdcXHUwNDM4IFxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDRcXHUwNDM4XFx1MDQzQlxcdTA0NEZcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25CbG9jaywgeyB0aXRsZTogXCJcXHUwNDFFXFx1MDQ0MVxcdTA0M0RcXHUwNDNFXFx1MDQzMlxcdTA0M0RcXHUwNDMwXFx1MDQ0RiBcXHUwNDM4XFx1MDQzRFxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDMwXFx1MDQ0NlxcdTA0MzhcXHUwNDRGXCIgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2dyaWQnLCBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyIDFmcicsIGdhcDogMTIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIkVtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdmFsdWU6IGVtYWlsLCBvbkNoYW5nZTogZSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSksIG5hbWU6IFwiZW1haWxcIiwgc3R5bGU6IGlucHV0U3R5bGUgfSkpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MThcXHUwNDNDXFx1MDQ0RiBcXHUwNDNGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NEZcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB2YWx1ZTogdXNlcm5hbWUsIG9uQ2hhbmdlOiBlID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJ1c2VybmFtZVwiLCBzdHlsZTogaW5wdXRTdHlsZSB9KSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiXFx1MDQyMFxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogcm9sZSwgb25DaGFuZ2U6IGUgPT4gc2V0Um9sZShlLnRhcmdldC52YWx1ZSksIG5hbWU6IFwicm9sZVwiLCBzdHlsZTogaW5wdXRTdHlsZSB9LCBST0xFUy5tYXAociA9PiBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsga2V5OiByLnZhbHVlLCB2YWx1ZTogci52YWx1ZSB9LCByLmxhYmVsKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJBdmF0YXIgVVJMXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdmFsdWU6IGF2YXRhclVybCwgb25DaGFuZ2U6IGUgPT4gc2V0QXZhdGFyVXJsKGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJhdmF0YXJfdXJsXCIsIHN0eWxlOiBpbnB1dFN0eWxlIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFEXFx1MDQzRVxcdTA0MzJcXHUwNDRCXFx1MDQzOSBcXHUwNDNGXFx1MDQzMFxcdTA0NDBcXHUwNDNFXFx1MDQzQlxcdTA0NEMgKFxcdTA0M0VcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcXHUwNDMyXFx1MDQ0Q1xcdTA0NDJcXHUwNDM1IFxcdTA0M0ZcXHUwNDQzXFx1MDQ0MVxcdTA0NDJcXHUwNDRCXFx1MDQzQyBcXHUwNDMxXFx1MDQzNVxcdTA0MzcgXFx1MDQzOFxcdTA0MzdcXHUwNDNDXFx1MDQzNVxcdTA0M0RcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM5KVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwicGFzc3dvcmRcIiwgdmFsdWU6IHBhc3N3b3JkLCBvbkNoYW5nZTogZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSksIG5hbWU6IFwicGFzc3dvcmRcIiwgc3R5bGU6IGlucHV0U3R5bGUsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MURcXHUwNDNFXFx1MDQzMlxcdTA0NEJcXHUwNDM5IFxcdTA0M0ZcXHUwNDMwXFx1MDQ0MFxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1wiIH0pKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiQmlvXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHsgdmFsdWU6IGJpbywgb25DaGFuZ2U6IGUgPT4gc2V0QmlvKGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJiaW9cIiwgcm93czogMywgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgcmVzaXplOiAndmVydGljYWwnIH0gfSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25CbG9jaywgeyB0aXRsZTogXCJcXHUwNDE3XFx1MDQzMFxcdTA0M0ZcXHUwNDM4XFx1MDQ0MVxcdTA0MzggXFx1MDQzRFxcdTA0MzAgXFx1MDQzQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0NEJcIiwgY291bnQ6IGVucm9sbG1lbnRzLmxlbmd0aCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGUsIHsga2V5OiBgZW5yb2xsLSR7cmVmcmVzaEtleX1gLCByb3dzOiBlbnJvbGxtZW50cywgdGFibGU6IFwiZW5yb2xsbWVudHNcIiwgb25EZWxldGVkOiAoKSA9PiBzZXRSZWZyZXNoS2V5KGsgPT4gayArIDEpLCBjb2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2lkJywgbGFiZWw6ICdJRCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnY291cnNlX2lkJywgbGFiZWw6ICfQmtGD0YDRgScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnY291cnNlX3RpdGxlJywgbGFiZWw6ICfQndCw0LfQstCw0L3QuNC1JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdlbnJvbGxlZF9hdCcsIGxhYmVsOiAn0JTQsNGC0LAnLCByZW5kZXI6IHYgPT4gdiA/IG5ldyBEYXRlKHYpLnRvTG9jYWxlRGF0ZVN0cmluZygpIDogJycgfSxcbiAgICAgICAgICAgICAgICAgICAgXSB9KSxcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVDb3Vyc2VzLmxlbmd0aCA+IDAgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogOCwgbWFyZ2luVG9wOiA4LCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogbmV3Q291cnNlSWQsIG9uQ2hhbmdlOiBlID0+IHNldE5ld0NvdXJzZUlkKGUudGFyZ2V0LnZhbHVlKSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgd2lkdGg6IDI4MCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsgdmFsdWU6IFwiXCIgfSwgXCJcXHUyMDE0IFxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDEgXFx1MjAxNFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZUNvdXJzZXMubWFwKChjKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogYy5pZCwgdmFsdWU6IGMuaWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICgjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIikpKSksXG4gICAgICAgICAgICAgICAgICAgIG5ld0NvdXJzZUlkICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiaGlkZGVuXCIsIG5hbWU6IFwiYWRkX2Vucm9sbG1lbnRfY291cnNlX2lkXCIsIHZhbHVlOiBuZXdDb3Vyc2VJZCB9KSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbkJsb2NrLCB7IHRpdGxlOiBcIlxcdTA0MTFcXHUwNDM1XFx1MDQzOVxcdTA0MzRcXHUwNDM2XFx1MDQzOCBcXHUwNDM4IFxcdTA0M0NcXHUwNDM1XFx1MDQzNFxcdTA0MzBcXHUwNDNCXFx1MDQzOFwiLCBjb3VudDogYmFkZ2VzLmxlbmd0aCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGUsIHsga2V5OiBgYmFkZ2UtJHtyZWZyZXNoS2V5fWAsIHJvd3M6IGJhZGdlcywgdGFibGU6IFwidXNlcl9iYWRnZXNcIiwgb25EZWxldGVkOiAoKSA9PiBzZXRSZWZyZXNoS2V5KGsgPT4gayArIDEpLCBjb2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2lkJywgbGFiZWw6ICdJRCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnYmFkZ2VfaWQnLCBsYWJlbDogJ9CR0LXQudC00LYnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2JhZGdlX25hbWUnLCBsYWJlbDogJ9Cd0LDQt9Cy0LDQvdC40LUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2JhZGdlX2Rlc2MnLCBsYWJlbDogJ9Ce0L/QuNGB0LDQvdC40LUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2F3YXJkZWRfYXQnLCBsYWJlbDogJ9Cf0L7Qu9GD0YfQtdC9JywgcmVuZGVyOiB2ID0+IHYgPyBuZXcgRGF0ZSh2KS50b0xvY2FsZURhdGVTdHJpbmcoKSA6ICcnIH0sXG4gICAgICAgICAgICAgICAgICAgIF0gfSksXG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlQmFkZ2VzLmxlbmd0aCA+IDAgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGdhcDogOCwgbWFyZ2luVG9wOiA4LCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogbmV3QmFkZ2VJZCwgb25DaGFuZ2U6IGUgPT4gc2V0TmV3QmFkZ2VJZChlLnRhcmdldC52YWx1ZSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIHdpZHRoOiAyODAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IHZhbHVlOiBcIlwiIH0sIFwiXFx1MjAxNCBcXHUwNDE0XFx1MDQzRVxcdTA0MzFcXHUwNDMwXFx1MDQzMlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcXHUwNDMxXFx1MDQzNVxcdTA0MzlcXHUwNDM0XFx1MDQzNiBcXHUyMDE0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlQmFkZ2VzLm1hcCgoYikgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyBrZXk6IGIuaWQsIHZhbHVlOiBiLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICgjXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYi5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIikpKSksXG4gICAgICAgICAgICAgICAgICAgIG5ld0JhZGdlSWQgJiYgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJoaWRkZW5cIiwgbmFtZTogXCJhZGRfYmFkZ2VfaWRcIiwgdmFsdWU6IG5ld0JhZGdlSWQgfSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25CbG9jaywgeyB0aXRsZTogXCJcXHUwNDIxXFx1MDQzNVxcdTA0NDBcXHUwNDQyXFx1MDQzOFxcdTA0NDRcXHUwNDM4XFx1MDQzQVxcdTA0MzBcXHUwNDQyXFx1MDQ0QlwiLCBjb3VudDogY2VydHMubGVuZ3RoIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZSwgeyBrZXk6IGBjZXJ0LSR7cmVmcmVzaEtleX1gLCByb3dzOiBjZXJ0cywgdGFibGU6IFwiY2VydGlmaWNhdGlvbnNcIiwgb25EZWxldGVkOiAoKSA9PiBzZXRSZWZyZXNoS2V5KGsgPT4gayArIDEpLCBjb2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2lkJywgbGFiZWw6ICdJRCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnY291cnNlX2lkJywgbGFiZWw6ICfQmtGD0YDRgScgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnY2VydGlmaWNhdGVfY29kZScsIGxhYmVsOiAn0JrQvtC0JyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdpc3N1ZWRfYXQnLCBsYWJlbDogJ9CS0YvQtNCw0L0nLCByZW5kZXI6IHYgPT4gdiA/IG5ldyBEYXRlKHYpLnRvTG9jYWxlRGF0ZVN0cmluZygpIDogJycgfSxcbiAgICAgICAgICAgICAgICAgICAgXSB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25CbG9jaywgeyB0aXRsZTogXCJcXHUwNDIxXFx1MDQzRVxcdTA0NDZcXHUwNDM4XFx1MDQzMFxcdTA0M0JcXHUwNDRDXFx1MDQzRFxcdTA0NEJcXHUwNDM1IFxcdTA0NDFcXHUwNDM1XFx1MDQ0MlxcdTA0MzhcIiwgY291bnQ6IHNvY2lhbHMubGVuZ3RoIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZSwgeyBrZXk6IGBzb2NpYWwtJHtyZWZyZXNoS2V5fWAsIHJvd3M6IHNvY2lhbHMsIHRhYmxlOiBcInVzZXJfc29jaWFsX2xpbmtzXCIsIG9uRGVsZXRlZDogKCkgPT4gc2V0UmVmcmVzaEtleShrID0+IGsgKyAxKSwgY29sczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdpZCcsIGxhYmVsOiAnSUQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ3BsYXRmb3JtJywgbGFiZWw6ICfQn9C70LDRgtGE0L7RgNC80LAnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ3VybCcsIGxhYmVsOiAnVVJMJywgcmVuZGVyOiB2ID0+IHY/LnN1YnN0cmluZygwLCA1MCkgfSxcbiAgICAgICAgICAgICAgICAgICAgXSB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlY3Rpb25CbG9jaywgeyB0aXRsZTogXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0ZcXHUwNDRCXFx1MDQ0MlxcdTA0M0FcXHUwNDM4IFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQzMlwiLCBjb3VudDogcXVpekF0dGVtcHRzLmxlbmd0aCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGFibGUsIHsgcm93czogcXVpekF0dGVtcHRzLCBjb2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2lkJywgbGFiZWw6ICdJRCcgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAncXVpel9pZCcsIGxhYmVsOiAn0KLQtdGB0YInIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ3F1aXpfdGl0bGUnLCBsYWJlbDogJ9Cd0LDQt9Cy0LDQvdC40LUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ3Njb3JlJywgbGFiZWw6ICfQkdCw0LvQuycgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAncGFzc2VkJywgbGFiZWw6ICfQn9GA0L7QudC00LXQvScsIHJlbmRlcjogdiA9PiB2ID8gJ9CU0LAnIDogJ9Cd0LXRgicgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnY29tcGxldGVkX2F0JywgbGFiZWw6ICfQlNCw0YLQsCcsIHJlbmRlcjogdiA9PiB2ID8gbmV3IERhdGUodikudG9Mb2NhbGVEYXRlU3RyaW5nKCkgOiAnJyB9LFxuICAgICAgICAgICAgICAgICAgICBdIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbkJsb2NrLCB7IHRpdGxlOiBcIlxcdTA0MUZcXHUwNDQwXFx1MDQzRVxcdTA0MzNcXHUwNDQwXFx1MDQzNVxcdTA0NDFcXHUwNDQxIFxcdTA0M0ZcXHUwNDNFIFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDMwXFx1MDQzQ1wiLCBjb3VudDogcHJvZ3Jlc3MubGVuZ3RoIH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChUYWJsZSwgeyByb3dzOiBwcm9ncmVzcywgY29sczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdpZCcsIGxhYmVsOiAnSUQnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ2NvdXJzZV9pZCcsIGxhYmVsOiAn0JrRg9GA0YEnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ3N0YXR1cycsIGxhYmVsOiAn0KHRgtCw0YLRg9GBJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICd1cGRhdGVkX2F0JywgbGFiZWw6ICfQntCx0L3QvtCy0LvRkdC9JywgcmVuZGVyOiB2ID0+IHYgPyBuZXcgRGF0ZSh2KS50b0xvY2FsZURhdGVTdHJpbmcoKSA6ICcnIH0sXG4gICAgICAgICAgICAgICAgICAgIF0gfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWN0aW9uQmxvY2ssIHsgdGl0bGU6IFwiXFx1MDQxRVxcdTA0NDZcXHUwNDM1XFx1MDQzRFxcdTA0M0FcXHUwNDM4IFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDNFXFx1MDQzMlwiLCBjb3VudDogcmF0aW5ncy5sZW5ndGggfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFRhYmxlLCB7IHJvd3M6IHJhdGluZ3MsIGNvbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiAnaWQnLCBsYWJlbDogJ0lEJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdjb3Vyc2VfaWQnLCBsYWJlbDogJ9Ca0YPRgNGBJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdjb3Vyc2VfdGl0bGUnLCBsYWJlbDogJ9Cd0LDQt9Cy0LDQvdC40LUnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogJ3JhdGluZycsIGxhYmVsOiAn0J7RhtC10L3QutCwJyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6ICdjcmVhdGVkX2F0JywgbGFiZWw6ICfQlNCw0YLQsCcsIHJlbmRlcjogdiA9PiB2ID8gbmV3IERhdGUodikudG9Mb2NhbGVEYXRlU3RyaW5nKCkgOiAnJyB9LFxuICAgICAgICAgICAgICAgICAgICBdIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogc3VibWl0dGluZywgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEycHggMzJweCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuZ3JlZW59LCAke0MuZ3JlZW5EYXJrfSlgLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBzdWJtaXR0aW5nID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICB9IH0sIHN1Ym1pdHRpbmcgPyAn0KHQvtGF0YDQsNC90LXQvdC40LXigKYnIDogJ9Ch0L7RhdGA0LDQvdC40YLRjCcpKSkpO1xufVxuY29uc3QgbGFiZWxTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgY29sb3I6IEMuZmFpbnQsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdJbnB1dDogJyMwZjE3MmEnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgZXJyb3I6ICcjZWY0NDQ0JyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIG11dGVkOiAnI2NiZDVlMScsXG4gICAgZmFpbnQ6ICcjOTRhM2I4JyxcbiAgICBnaG9zdDogJyM2NDc0OGInLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcnVtRWRpdChwcm9wcykge1xuICAgIGNvbnN0IHJlY29yZCA9IHByb3BzLnJlY29yZD8ucGFyYW1zIHx8IHt9O1xuICAgIGNvbnN0IGluaXRpYWxSZXBsaWVzID0gKCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiByZWNvcmQucmVwbGllc19qc29uID8gSlNPTi5wYXJzZShyZWNvcmQucmVwbGllc19qc29uKSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgY29uc3QgW3JlcGxpZXNdID0gdXNlU3RhdGUoaW5pdGlhbFJlcGxpZXMpO1xuICAgIGNvbnN0IFt0b0RlbGV0ZSwgc2V0VG9EZWxldGVdID0gdXNlU3RhdGUobmV3IFNldCgpKTtcbiAgICBjb25zdCBbc3VibWl0dGluZywgc2V0U3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgYXBpVXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC9yZXNvdXJjZXNcXC8vLCAnL2FwaS9yZXNvdXJjZXMvJyk7XG4gICAgY29uc3QgdG9nZ2xlRGVsZXRlID0gKGlkKSA9PiB7XG4gICAgICAgIHNldFRvRGVsZXRlKHByZXYgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV4dCA9IG5ldyBTZXQocHJldik7XG4gICAgICAgICAgICBpZiAobmV4dC5oYXMoaWQpKVxuICAgICAgICAgICAgICAgIG5leHQuZGVsZXRlKGlkKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBuZXh0LmFkZChpZCk7XG4gICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlZGlyZWN0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5ub3RpY2U/Lm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0YHQvtGF0YDQsNC90LXQvdC40LgnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBhbGVydChg0J7RiNC40LHQutCwOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IHBhZGRpbmc6IDI0LCBtaW5IZWlnaHQ6ICcxMDB2aCcsIGJhY2tncm91bmRDb2xvcjogQy5iZ1BhZ2UsIGNvbG9yOiBDLndoaXRlLCBmb250RmFtaWx5OiBcIidSb2JvdG8nLCBzYW5zLXNlcmlmXCIgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IG1ldGhvZDogXCJQT1NUXCIsIG9uU3VibWl0OiBoYW5kbGVTdWJtaXQsIHN0eWxlOiB7IG1heFdpZHRoOiA3MDAsIG1hcmdpbjogJzAgYXV0bycgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDRweCcsIGZvbnRTaXplOiAyMiwgZm9udFdlaWdodDogNzAwIH0gfSwgXCJcXHUwNDIwXFx1MDQzNVxcdTA0MzRcXHUwNDMwXFx1MDQzQVxcdTA0NDJcXHUwNDM4XFx1MDQ0MFxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNGXFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQzMFwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDI0cHgnLCBmb250U2l6ZTogMTMsIGNvbG9yOiBDLmdob3N0IH0gfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0NcXHUwNDM1XFx1MDQ0MlxcdTA0NENcXHUwNDQyXFx1MDQzNSBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0NEIgXFx1MDQzNFxcdTA0M0JcXHUwNDRGIFxcdTA0NDNcXHUwNDM0XFx1MDQzMFxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMjQsIHBhZGRpbmc6IDE2LCBiYWNrZ3JvdW5kOiBDLmJnQ2FyZCwgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgYm9yZGVyUmFkaXVzOiA4IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTYsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMubXV0ZWQsIG1hcmdpbjogJzAgMCAxMnB4JyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiXFx1MDQxRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDRCXCIsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogQy5naG9zdCwgZm9udFdlaWdodDogNDAwLCBtYXJnaW5MZWZ0OiA4IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbGllcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIilcIikpLFxuICAgICAgICAgICAgICAgIHJlcGxpZXMubGVuZ3RoID09PSAwICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgY29sb3I6IEMuZ2hvc3QgfSB9LCBcIlxcdTA0MURcXHUwNDM1XFx1MDQ0MiBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0M0VcXHUwNDMyXCIpKSxcbiAgICAgICAgICAgICAgICByZXBsaWVzLm1hcCgocmVwbHkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWFya2VkID0gdG9EZWxldGUuaGFzKHJlcGx5LmlkKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsga2V5OiByZXBseS5pZCwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke21hcmtlZCA/IEMuZXJyb3IgOiBDLmJvcmRlcn1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiBtYXJrZWQgPyAwLjUgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiBtYXJrZWQsIG9uQ2hhbmdlOiAoKSA9PiB0b2dnbGVEZWxldGUocmVwbHkuaWQpLCBzdHlsZTogeyBtYXJnaW5Ub3A6IDQsIGFjY2VudENvbG9yOiBDLmVycm9yIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZmxleDogMSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMSwgY29sb3I6IEMuZ2hvc3QsIG1hcmdpbkJvdHRvbTogNCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBseS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXFx1MjAxNCBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwbHkudXNlcl9lbWFpbCB8fCBgdXNlciMke3JlcGx5LnVzZXJfaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXFx1MDBCNyBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUocmVwbHkuY3JlYXRlZF9hdCkudG9Mb2NhbGVTdHJpbmcoKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgY29sb3I6IEMud2hpdGUsIHdoaXRlU3BhY2U6ICdwcmUtd3JhcCcgfSB9LCByZXBseS5ib2R5KSkpKTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcImRlbGV0ZV9yZXBseV9pZHNcIiwgdmFsdWU6IEpTT04uc3RyaW5naWZ5KFsuLi50b0RlbGV0ZV0pIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogc3VibWl0dGluZywgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEycHggMzJweCcsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuZ3JlZW59LCAke0MuZ3JlZW5EYXJrfSlgLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBzdWJtaXR0aW5nID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICB9IH0sIHN1Ym1pdHRpbmcgPyAn0KHQvtGF0YDQsNC90LXQvdC40LXigKYnIDogJ9Ch0L7RhdGA0LDQvdC40YLRjCcpKSkpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBDID0ge1xuICAgIGJnUGFnZTogJyMwMjA2MTcnLFxuICAgIGJnU2lkZWJhcjogJyMwZjE3MmEnLFxuICAgIGJnQ2FyZDogJyMxZTI5M2InLFxuICAgIGJnQ2FyZEhvdmVyOiAnIzI0MzI0NycsXG4gICAgYm9yZGVyOiAnIzMzNDE1NScsXG4gICAgZ3JlZW46ICcjMTBiOTgxJyxcbiAgICBncmVlbkxpZ2h0OiAnIzM0ZDM5OScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgY3lhbjogJyMwNmI2ZDQnLFxuICAgIGJsdWU6ICcjM2I4MmY2JyxcbiAgICBlcnJvcjogJyNlZjQ0NDQnLFxuICAgIHRleHRQcmltYXJ5OiAnI2ZmZmZmZicsXG4gICAgdGV4dE11dGVkOiAnI2NiZDVlMScsXG4gICAgdGV4dEZhaW50OiAnIzk0YTNiOCcsXG4gICAgdGV4dEdob3N0OiAnIzY0NzQ4YicsXG59O1xuY29uc3Qgc3R5bGVzID0ge1xuICAgIHBhZ2U6IHtcbiAgICAgICAgcGFkZGluZzogMjQsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmJnUGFnZSxcbiAgICAgICAgY29sb3I6IEMudGV4dFByaW1hcnksXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICB9LFxuICAgIGhlYWRlcjoge1xuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgIGFsaWduSXRlbXM6ICdmbGV4LXN0YXJ0JyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyOCxcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXG4gICAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgfSxcbiAgICB0aXRsZToge1xuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBjb2xvcjogQy50ZXh0UHJpbWFyeSxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjNweCcsXG4gICAgfSxcbiAgICBzdWJ0aXRsZToge1xuICAgICAgICBtYXJnaW5Ub3A6IDQsXG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgY29sb3I6IEMudGV4dEdob3N0LFxuICAgIH0sXG4gICAgdGltZXN0YW1wOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgY29sb3I6IEMudGV4dEdob3N0LFxuICAgICAgICB0ZXh0QWxpZ246ICdyaWdodCcsXG4gICAgICAgIG1hcmdpblRvcDogNCxcbiAgICB9LFxuICAgIG1ldHJpY3NHcmlkOiB7XG4gICAgICAgIGRpc3BsYXk6ICdncmlkJyxcbiAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJ3JlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyMDBweCwgMWZyKSknLFxuICAgICAgICBnYXA6IDE2LFxuICAgICAgICBtYXJnaW5Cb3R0b206IDI0LFxuICAgIH0sXG4gICAgbWV0cmljQ2FyZDogKGFjY2VudENvbG9yKSA9PiAoe1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdDYXJkLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgICAgICBib3JkZXJUb3A6IGAzcHggc29saWQgJHthY2NlbnRDb2xvcn1gLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICBwYWRkaW5nOiAnMThweCAyMHB4JyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ3RyYW5zZm9ybSAwLjE1cyBlYXNlLCBib3gtc2hhZG93IDAuMTVzIGVhc2UnLFxuICAgIH0pLFxuICAgIG1ldHJpY0xhYmVsOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMSxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDhlbScsXG4gICAgICAgIGNvbG9yOiBDLnRleHRHaG9zdCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA4LFxuICAgIH0sXG4gICAgbWV0cmljVmFsdWU6IHtcbiAgICAgICAgZm9udFNpemU6IDMyLFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIGNvbG9yOiBDLnRleHRQcmltYXJ5LFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDgsXG4gICAgfSxcbiAgICBtZXRyaWNMaW5rOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgY29sb3I6IEMuZ3JlZW5MaWdodCxcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICB9LFxuICAgIG1ldHJpY1N1Yjoge1xuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGNvbG9yOiBDLnRleHRHaG9zdCxcbiAgICB9LFxuICAgIHdpZGdldHNSb3c6IHtcbiAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMyMHB4LCAxZnIpKScsXG4gICAgICAgIGdhcDogMTYsXG4gICAgfSxcbiAgICB3aWRnZXQ6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmJnQ2FyZCxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgcGFkZGluZzogJzIwcHggMjJweCcsXG4gICAgfSxcbiAgICB3aWRnZXRUaXRsZToge1xuICAgICAgICBtYXJnaW46ICcwIDAgMTRweCAwJyxcbiAgICAgICAgZm9udFNpemU6IDE1LFxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgIGNvbG9yOiBDLnRleHRNdXRlZCxcbiAgICB9LFxuICAgIGJ0bkdyZWVuOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwYWRkaW5nOiAnOHB4IDE0cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA3LFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDFlbScsXG4gICAgfSxcbiAgICBidG5CbHVlOiB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwYWRkaW5nOiAnOHB4IDE0cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmJsdWV9LCAjMjU2M2ViKWAsXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgICAgIGJvcmRlclJhZGl1czogNyxcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjAxZW0nLFxuICAgIH0sXG4gICAgbm90ZUJveDoge1xuICAgICAgICBtYXJnaW5Ub3A6IDEyLFxuICAgICAgICBwYWRkaW5nOiAnMTBweCAxNHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxNiwxODUsMTI5LDAuMDgpJyxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkIHJnYmEoMTYsMTg1LDEyOSwwLjI1KWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogNyxcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBjb2xvcjogQy50ZXh0RmFpbnQsXG4gICAgfSxcbiAgICBlcnJvckJveDoge1xuICAgICAgICBwYWRkaW5nOiAnMTRweCAxOHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgyMzksNjgsNjgsMC4xKScsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCByZ2JhKDIzOSw2OCw2OCwwLjMpYCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBjb2xvcjogQy5lcnJvcixcbiAgICB9LFxuICAgIGxvYWRpbmdCb3g6IHtcbiAgICAgICAgcGFkZGluZzogJzE0cHggMThweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5iZ0NhcmQsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgICAgIGZvbnRTaXplOiAxNCxcbiAgICAgICAgY29sb3I6IEMudGV4dEZhaW50LFxuICAgIH0sXG4gICAgbWV0cmljR2xvdzogKGFjY2VudENvbG9yKSA9PiAoe1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgd2lkdGg6IDYwLFxuICAgICAgICBoZWlnaHQ6IDYwLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcwIDEwcHggMCA2MHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY2NlbnRDb2xvcixcbiAgICAgICAgb3BhY2l0eTogMC4wOCxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgIH0pLFxufTtcbmZ1bmN0aW9uIGJ1aWxkRGFzaGJvYXJkVXJsKCkge1xuICAgIGNvbnN0IGJhc2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICByZXR1cm4gYCR7YmFzZX0vYXBpL2Rhc2hib2FyZGA7XG59XG5mdW5jdGlvbiBNZXRyaWNDYXJkKHsgbGFiZWwsIHZhbHVlLCBzdWIsIGFjY2VudCwgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljQ2FyZChhY2NlbnQpIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLm1ldHJpY0dsb3coYWNjZW50KSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljTGFiZWwgfSwgbGFiZWwpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5tZXRyaWNWYWx1ZSB9LCB2YWx1ZSksXG4gICAgICAgIHN1YiAmJiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5tZXRyaWNTdWIgfSwgc3ViKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtmZXRjaEVycm9yLCBzZXRGZXRjaEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHVybCA9IGJ1aWxkRGFzaGJvYXJkVXJsKCk7XG4gICAgICAgIGxldCBtb3VudGVkID0gdHJ1ZTtcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hEYXRhKCkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgICAgICAgIHNldEZldGNoRXJyb3IobnVsbCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwgeyBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaylcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXR3b3JrIGVycm9yOiAke3Jlcy5zdGF0dXN9ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFtb3VudGVkKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgc2V0RGF0YShqc29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW1vdW50ZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzZXRGZXRjaEVycm9yKFN0cmluZyhlcnIubWVzc2FnZSA/PyBlcnIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIGlmIChtb3VudGVkKVxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaERhdGEoKTtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmZXRjaERhdGEsIDMwXzAwMCk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBtb3VudGVkID0gZmFsc2U7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgYWRtaW5CYXNlID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgY29uc3QgbGlua1RvID0gKHJlc291cmNlSWQpID0+IGAke2FkbWluQmFzZX0vcmVzb3VyY2VzLyR7cmVzb3VyY2VJZH1gO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMucGFnZSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5oZWFkZXIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogc3R5bGVzLnRpdGxlIH0sIFwiQWRtaW4gRGFzaGJvYXJkXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLnN1YnRpdGxlIH0sIFwiXFx1MDQxRVxcdTA0MzFcXHUwNDM3XFx1MDQzRVxcdTA0NDAgXFx1MDQzQVxcdTA0M0JcXHUwNDRFXFx1MDQ0N1xcdTA0MzVcXHUwNDMyXFx1MDQ0QlxcdTA0NDUgXFx1MDQzQ1xcdTA0MzVcXHUwNDQyXFx1MDQ0MFxcdTA0MzhcXHUwNDNBIFxcdTA0M0ZcXHUwNDNCXFx1MDQzMFxcdTA0NDJcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQ0QlwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy50aW1lc3RhbXAgfSwgZGF0YT8udGltZXN0YW1wID8gYNCe0LHQvdC+0LLQu9C10L3QvjogJHtuZXcgRGF0ZShkYXRhLnRpbWVzdGFtcCkudG9Mb2NhbGVTdHJpbmcoJ3J1LVJVJyl9YCA6ICdcXHUwMGEwJykpLFxuICAgICAgICBsb2FkaW5nID8gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLmxvYWRpbmdCb3ggfSwgXCJcXHUwNDE3XFx1MDQzMFxcdTA0MzNcXHUwNDQwXFx1MDQ0M1xcdTA0MzdcXHUwNDNBXFx1MDQzMCBcXHUwNDNDXFx1MDQzNVxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0M0FcXHUyMDI2XCIpKSA6IGZldGNoRXJyb3IgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMuZXJyb3JCb3ggfSxcbiAgICAgICAgICAgIFwiXFx1MDQxRVxcdTA0NDhcXHUwNDM4XFx1MDQzMVxcdTA0M0FcXHUwNDMwIFxcdTA0MzdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDM4IFxcdTA0MzRcXHUwNDMwXFx1MDQ0OFxcdTA0MzFcXHUwNDNFXFx1MDQ0MFxcdTA0MzRcXHUwNDMwOiBcIixcbiAgICAgICAgICAgIGZldGNoRXJyb3IpKSA6IChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljc0dyaWQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1ldHJpY0NhcmQsIHsgbGFiZWw6IFwiXFx1MDQxRlxcdTA0M0VcXHUwNDQxXFx1MDQzNVxcdTA0NDlcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGXCIsIHZhbHVlOiBkYXRhPy52aXNpdHMgPz8gJ+KAlCcsIHN1YjogXCJcXHUwNDIyXFx1MDQzMFxcdTA0MzFcXHUwNDNCXFx1MDQzOFxcdTA0NDZcXHUwNDMwIHNpdGVfdmlzaXRzXCIsIGFjY2VudDogQy5jeWFuIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWV0cmljQ2FyZCwgeyBsYWJlbDogXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0MzhcIiwgdmFsdWU6IGRhdGE/LnVzZXJzID8/ICfigJQnLCBzdWI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogbGlua1RvKCd1c2VycycpLCBzdHlsZTogc3R5bGVzLm1ldHJpY0xpbmsgfSwgXCJcXHUwNDFFXFx1MDQ0MlxcdTA0M0FcXHUwNDQwXFx1MDQ0QlxcdTA0NDJcXHUwNDRDIFxcdTA0M0ZcXHUwNDNFXFx1MDQzQlxcdTA0NENcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQzNVxcdTA0MzkgXFx1MjE5MlwiKSwgYWNjZW50OiBDLmJsdWUgfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXRyaWNDYXJkLCB7IGxhYmVsOiBcIlxcdTA0MUFcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDRCXCIsIHZhbHVlOiBkYXRhPy5jb3Vyc2VzID8/ICfigJQnLCBzdWI6IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogbGlua1RvKCdjb3Vyc2VzJyksIHN0eWxlOiBzdHlsZXMubWV0cmljTGluayB9LCBcIlxcdTA0MUVcXHUwNDQyXFx1MDQzQVxcdTA0NDBcXHUwNDRCXFx1MDQ0MlxcdTA0NEMgXFx1MDQzQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0NEIgXFx1MjE5MlwiKSwgYWNjZW50OiBDLmdyZWVuIH0pLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWV0cmljQ2FyZCwgeyBsYWJlbDogXCJcXHUwNDE3XFx1MDQzMFxcdTA0M0ZcXHUwNDM4XFx1MDQ0MVxcdTA0MzhcIiwgdmFsdWU6IGRhdGE/LmVucm9sbG1lbnRzID8/ICfigJQnLCBzdWI6IFwiXFx1MDQxMlxcdTA0NDFcXHUwNDM1XFx1MDQzM1xcdTA0M0UgXFx1MDQzN1xcdTA0MzBcXHUwNDNGXFx1MDQzOFxcdTA0NDFcXHUwNDM1XFx1MDQzOSBcXHUwNDNEXFx1MDQzMCBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQ0QlwiLCBhY2NlbnQ6IEMuZ3JlZW5MaWdodCB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy53aWRnZXRzUm93IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMud2lkZ2V0IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7IHN0eWxlOiBzdHlsZXMud2lkZ2V0VGl0bGUgfSwgXCJcXHUwNDIxXFx1MDQzMlxcdTA0M0VcXHUwNDM0XFx1MDQzQVxcdTA0MzAgXFx1MDQzRlxcdTA0M0UgXFx1MDQ0MVxcdTA0MzBcXHUwNDM5XFx1MDQ0MlxcdTA0NDNcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDhweCcsIGZvbnRTaXplOiAxNCwgY29sb3I6IEMudGV4dEZhaW50LCBsaW5lSGVpZ2h0OiAxLjYgfSB9LCBcIlxcdTA0MUZcXHUwNDMwXFx1MDQzRFxcdTA0MzVcXHUwNDNCXFx1MDQ0QyBcXHUwNDQzXFx1MDQzRlxcdTA0NDBcXHUwNDMwXFx1MDQzMlxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGIFxcdTA0M0ZcXHUwNDNCXFx1MDQzMFxcdTA0NDJcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQzRVxcdTA0MzkgTmV0Y291cnNlLiBcXHUwNDE0XFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQ0M1xcdTA0M0YgXFx1MDQzRVxcdTA0MzNcXHUwNDQwXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQ0N1xcdTA0MzVcXHUwNDNEIFxcdTA0MzRcXHUwNDNCXFx1MDQ0RiBcXHUwNDMwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQ0MFxcdTA0MzhcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0M0RcXHUwNDRCXFx1MDQ0NSBcXHUwNDMwXFx1MDQzNFxcdTA0M0NcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0VcXHUwNDQwXFx1MDQzRVxcdTA0MzIuXCIpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhPy5ub3RlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5ub3RlQm94IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIsIHsgc3R5bGU6IHsgY29sb3I6IEMuZ3JlZW5MaWdodCB9IH0sIFwiXFx1MDQxRlxcdTA0NDBcXHUwNDM4XFx1MDQzQ1xcdTA0MzVcXHUwNDQ3XFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNTpcXHUwMEEwXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5ub3RlKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLndpZGdldCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDNcIiwgeyBzdHlsZTogc3R5bGVzLndpZGdldFRpdGxlIH0sIFwiXFx1MDQxMVxcdTA0NEJcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDRCXFx1MDQzNSBcXHUwNDM0XFx1MDQzNVxcdTA0MzlcXHUwNDQxXFx1MDQ0MlxcdTA0MzJcXHUwNDM4XFx1MDQ0RlwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgZ2FwOiAxMCwgZmxleFdyYXA6ICd3cmFwJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IGxpbmtUbygndXNlcnMnKSwgc3R5bGU6IHN0eWxlcy5idG5CbHVlIH0sIFwiXFx1MDQxRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDM4XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBsaW5rVG8oJ2NvdXJzZXMnKSwgc3R5bGU6IHN0eWxlcy5idG5HcmVlbiB9LCBcIlxcdTA0MUFcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDRCXCIpKSkpKSkpKTtcbn1cbiIsIkFkbWluSlMuVXNlckNvbXBvbmVudHMgPSB7fVxuaW1wb3J0IExvZ2luIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9sb2dpbidcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuTG9naW4gPSBMb2dpblxuaW1wb3J0IENvdXJzZVF1aWNrQ3JlYXRlIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9jb3Vyc2UtY3JlYXRlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db3Vyc2VRdWlja0NyZWF0ZSA9IENvdXJzZVF1aWNrQ3JlYXRlXG5pbXBvcnQgQ291cnNlRGV0YWlsZWRFZGl0IGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9jb3Vyc2UtZWRpdCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuQ291cnNlRGV0YWlsZWRFZGl0ID0gQ291cnNlRGV0YWlsZWRFZGl0XG5pbXBvcnQgUXVpelF1aWNrQ3JlYXRlIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9xdWl6LWNyZWF0ZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuUXVpelF1aWNrQ3JlYXRlID0gUXVpelF1aWNrQ3JlYXRlXG5pbXBvcnQgVXNlclF1aWNrQ3JlYXRlIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy91c2VyLWNyZWF0ZSdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXNlclF1aWNrQ3JlYXRlID0gVXNlclF1aWNrQ3JlYXRlXG5pbXBvcnQgVXNlckRldGFpbGVkRWRpdCBmcm9tICcuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvdXNlci1lZGl0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Vc2VyRGV0YWlsZWRFZGl0ID0gVXNlckRldGFpbGVkRWRpdFxuaW1wb3J0IEZvcnVtRGV0YWlsZWRFZGl0IGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9mb3J1bS1lZGl0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Gb3J1bURldGFpbGVkRWRpdCA9IEZvcnVtRGV0YWlsZWRFZGl0XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkRhc2hib2FyZCA9IERhc2hib2FyZCJdLCJuYW1lcyI6WyJDIiwiYmdQYWdlIiwiYmdEYXJrIiwiYmdDYXJkIiwiYmdJbnB1dCIsImJvcmRlciIsImdyZWVuIiwiZ3JlZW5EYXJrIiwiY3lhbiIsImJsdWUiLCJlcnJvciIsIndoaXRlIiwibXV0ZWQiLCJmYWludCIsImdob3N0IiwiTG9naW4iLCJhY3Rpb24iLCJlcnJvck1lc3NhZ2UiLCJ3aW5kb3ciLCJfX0FQUF9TVEFURV9fIiwiYnJhbmRpbmciLCJSRURVWF9TVEFURSIsImhvdmVyIiwic2V0SG92ZXIiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwicyIsInBhZ2UiLCJjYXJkIiwibGVmdCIsImJyYW5kIiwiYnJhbmREb3QiLCJicmFuZE5hbWUiLCJjb21wYW55TmFtZSIsIndlbGNvbWUiLCJ3ZWxjb21lU3ViIiwiZGVjb3JSb3ciLCJkZWNvckNoaXAiLCJib3JkZXJDb2xvciIsImNvbG9yIiwiZG90cyIsInZpZXdCb3giLCJ4bWxucyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJyb3ciLCJjb2wiLCJrZXkiLCJjeCIsImN5IiwiciIsImZpbGwiLCJtZXRob2QiLCJyaWdodCIsImZvcm1UaXRsZSIsImZvcm1TdWIiLCJlcnJvckJveCIsImVycm9yRG90IiwiZmllbGQiLCJodG1sRm9yIiwibGFiZWwiLCJpZCIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvQ29tcGxldGUiLCJyZXF1aXJlZCIsImlucHV0Iiwib25Gb2N1cyIsImUiLCJ0YXJnZXQiLCJib3hTaGFkb3ciLCJvbkJsdXIiLCJidG4iLCJvbk1vdXNlRW50ZXIiLCJiYWNrZ3JvdW5kIiwib25Nb3VzZUxlYXZlIiwiaGludCIsIm1pbkhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImZvbnRGYW1pbHkiLCJwYWRkaW5nIiwiYm94U2l6aW5nIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsImZsZXgiLCJib3JkZXJSaWdodCIsImZsZXhEaXJlY3Rpb24iLCJwb3NpdGlvbiIsImdhcCIsIm1hcmdpbkJvdHRvbSIsImhlaWdodCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRleHRUcmFuc2Zvcm0iLCJsZXR0ZXJTcGFjaW5nIiwibGluZUhlaWdodCIsImZsZXhXcmFwIiwib3BhY2l0eSIsImJvdHRvbSIsInBvaW50ZXJFdmVudHMiLCJvdXRsaW5lIiwidHJhbnNpdGlvbiIsIldlYmtpdFRleHRGaWxsQ29sb3IiLCJjdXJzb3IiLCJtYXJnaW5Ub3AiLCJ0ZXh0QWxpZ24iLCJDT05URU5UX1RZUEVTIiwidmFsdWUiLCJRVUVTVElPTl9UWVBFUyIsIkNBVEVHT1JJRVMiLCJpbnB1dFN0eWxlIiwic2VsZWN0U3R5bGUiLCJidG5EYW5nZXIiLCJidG5BZGQiLCJBbnN3ZXJSb3ciLCJhbnN3ZXIiLCJvbkNoYW5nZSIsIm9uUmVtb3ZlIiwiYW5zd2VyX3RleHQiLCJ3aGl0ZVNwYWNlIiwiY2hlY2tlZCIsImlzX2NvcnJlY3QiLCJhY2NlbnRDb2xvciIsIm9uQ2xpY2siLCJRdWVzdGlvbkJsb2NrIiwicXVlc3Rpb24iLCJhZGRBbnN3ZXIiLCJhbnN3ZXJzIiwidXBkYXRlQW5zd2VyIiwiaSIsImEiLCJuZXh0IiwicmVtb3ZlQW5zd2VyIiwiZmlsdGVyIiwiaWR4IiwicXVlc3Rpb25fdGV4dCIsInF1ZXN0aW9uX3R5cGUiLCJtYXAiLCJxdCIsIkZyYWdtZW50IiwiYW5zIiwiYWkiLCJMZXNzb25Sb3ciLCJsZXNzb24iLCJhZGRRdWVzdGlvbiIsInF1ZXN0aW9ucyIsInVwZGF0ZVF1ZXN0aW9uIiwicSIsInJlbW92ZVF1ZXN0aW9uIiwiaXNRdWl6IiwiY29udGVudF90eXBlIiwiaXNWaWRlbyIsImlzVGV4dCIsInRpdGxlIiwiY3QiLCJ2aWRlb191cmwiLCJ0ZXh0X2NvbnRlbnQiLCJyb3dzIiwicmVzaXplIiwicXVpel90aXRsZSIsInFpIiwiU2VjdGlvbkJsb2NrIiwic2VjdGlvbiIsImluZGV4IiwiYWRkTGVzc29uIiwibGVzc29ucyIsInVwZGF0ZUxlc3NvbiIsImxpIiwicmVtb3ZlTGVzc29uIiwibCIsIkNvdXJzZUNyZWF0ZSIsInByb3BzIiwic2V0VGl0bGUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsInJlcXVpcmVRdWl6Iiwic2V0UmVxdWlyZVF1aXoiLCJtaW5TY29yZSIsInNldE1pblNjb3JlIiwic2VjdGlvbnMiLCJzZXRTZWN0aW9ucyIsInN1Ym1pdHRpbmciLCJzZXRTdWJtaXR0aW5nIiwiYWRkU2VjdGlvbiIsInVwZGF0ZVNlY3Rpb24iLCJyZW1vdmVTZWN0aW9uIiwidG90YWxMZXNzb25zIiwicmVkdWNlIiwic2VjIiwiYXBpVXJsIiwibG9jYXRpb24iLCJwYXRobmFtZSIsInJlcGxhY2UiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJmZCIsIkZvcm1EYXRhIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwidmFsIiwiZW50cmllcyIsImFwcGVuZCIsInJlcyIsImZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJkYXRhIiwianNvbiIsInJlZGlyZWN0VXJsIiwiaHJlZiIsImFsZXJ0Iiwibm90aWNlIiwibWVzc2FnZSIsImVyciIsIm9uU3VibWl0IiwibWFyZ2luIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRDb2x1bW4iLCJsYWJlbFN0eWxlIiwiZnVsbElucHV0U3R5bGUiLCJjIiwiTnVtYmVyIiwibWluIiwibWF4IiwibWFyZ2luTGVmdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJhZGRTZWN0aW9uQnRuU3R5bGUiLCJkaXNhYmxlZCIsInN1Ym1pdEJ0blN0eWxlIiwiQ291cnNlRWRpdCIsInJlY29yZCIsImNvdXJzZUlkIiwiaW5pdGlhbFNlY3Rpb25zIiwiY291cnNlX2RhdGFfanNvbiIsInBhcnNlIiwicmVxdWlyZV9xdWl6X2NvbXBsZXRpb24iLCJtaW5fcXVpel9zY29yZSIsIlF1aXpDcmVhdGUiLCJzZXRRdWVzdGlvbnMiLCJhZGRRdWVzdGlvbkJ0blN0eWxlIiwiUk9MRVMiLCJVc2VyQ3JlYXRlIiwiY291bnQiLCJjaGlsZHJlbiIsInVuZGVmaW5lZCIsIlRhYmxlIiwiY29scyIsInRhYmxlIiwib25EZWxldGVkIiwiZGVsZXRpbmciLCJzZXREZWxldGluZyIsIlNldCIsImRvRGVsZXRlIiwicHJldiIsImFkZCIsInVybCIsIlN0cmluZyIsIm4iLCJkZWxldGUiLCJvdmVyZmxvd1giLCJib3JkZXJDb2xsYXBzZSIsImJvcmRlckJvdHRvbSIsImhhcyIsInJlbmRlciIsIlVzZXJFZGl0IiwicCIsInVzZXJJZCIsImVtYWlsIiwic2V0RW1haWwiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwiYmlvIiwic2V0QmlvIiwicm9sZSIsInNldFJvbGUiLCJhdmF0YXJVcmwiLCJzZXRBdmF0YXJVcmwiLCJhdmF0YXJfdXJsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImVucm9sbG1lbnRzIiwicHJvZ3Jlc3MiLCJxdWl6QXR0ZW1wdHMiLCJiYWRnZXMiLCJjZXJ0cyIsInNvY2lhbHMiLCJyYXRpbmdzIiwiYWxsQ291cnNlcyIsImFsbEJhZGdlcyIsImV4aXN0aW5nQ291cnNlSWRzIiwiY291cnNlX2lkIiwiZXhpc3RpbmdCYWRnZUlkcyIsImIiLCJiYWRnZV9pZCIsImF2YWlsYWJsZUNvdXJzZXMiLCJhdmFpbGFibGVCYWRnZXMiLCJuZXdDb3Vyc2VJZCIsInNldE5ld0NvdXJzZUlkIiwibmV3QmFkZ2VJZCIsInNldE5ld0JhZGdlSWQiLCJyZWZyZXNoS2V5Iiwic2V0UmVmcmVzaEtleSIsImsiLCJ2IiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInN1YnN0cmluZyIsIkZvcnVtRWRpdCIsImluaXRpYWxSZXBsaWVzIiwicmVwbGllc19qc29uIiwicmVwbGllcyIsInRvRGVsZXRlIiwic2V0VG9EZWxldGUiLCJ0b2dnbGVEZWxldGUiLCJyZXBseSIsIm1hcmtlZCIsInVzZXJfZW1haWwiLCJ1c2VyX2lkIiwiY3JlYXRlZF9hdCIsInRvTG9jYWxlU3RyaW5nIiwiYmdTaWRlYmFyIiwiYmdDYXJkSG92ZXIiLCJncmVlbkxpZ2h0IiwidGV4dFByaW1hcnkiLCJ0ZXh0TXV0ZWQiLCJ0ZXh0RmFpbnQiLCJ0ZXh0R2hvc3QiLCJzdHlsZXMiLCJoZWFkZXIiLCJwYWRkaW5nQm90dG9tIiwic3VidGl0bGUiLCJ0aW1lc3RhbXAiLCJtZXRyaWNzR3JpZCIsIm1ldHJpY0NhcmQiLCJib3JkZXJUb3AiLCJtZXRyaWNMYWJlbCIsIm1ldHJpY1ZhbHVlIiwibWV0cmljTGluayIsInRleHREZWNvcmF0aW9uIiwibWV0cmljU3ViIiwid2lkZ2V0c1JvdyIsIndpZGdldCIsIndpZGdldFRpdGxlIiwiYnRuR3JlZW4iLCJidG5CbHVlIiwibm90ZUJveCIsImxvYWRpbmdCb3giLCJtZXRyaWNHbG93IiwidG9wIiwiYnVpbGREYXNoYm9hcmRVcmwiLCJiYXNlIiwiTWV0cmljQ2FyZCIsInN1YiIsImFjY2VudCIsIkRhc2hib2FyZCIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImZldGNoRXJyb3IiLCJzZXRGZXRjaEVycm9yIiwidXNlRWZmZWN0IiwibW91bnRlZCIsImZldGNoRGF0YSIsImNyZWRlbnRpYWxzIiwib2siLCJFcnJvciIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImFkbWluQmFzZSIsImxpbmtUbyIsInJlc291cmNlSWQiLCJ2aXNpdHMiLCJ1c2VycyIsImNvdXJzZXMiLCJub3RlIiwiQWRtaW5KUyIsIlVzZXJDb21wb25lbnRzIiwiQ291cnNlUXVpY2tDcmVhdGUiLCJDb3Vyc2VEZXRhaWxlZEVkaXQiLCJRdWl6UXVpY2tDcmVhdGUiLCJVc2VyUXVpY2tDcmVhdGUiLCJVc2VyRGV0YWlsZWRFZGl0IiwiRm9ydW1EZXRhaWxlZEVkaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFDQSxNQUFNQSxHQUFDLEdBQUc7SUFDTkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUNBQyxPQUFPLEVBQUUsU0FBUztJQUNsQkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxTQUFTLEVBQUUsU0FBUztJQUNwQkMsRUFBQUEsSUFBSSxFQUFFLFNBQVM7SUFDZkMsRUFBQUEsSUFBSSxFQUFFLFNBQVM7SUFDZkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUNBQyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFO0lBQ1gsQ0FBQztJQUNjLFNBQVNDLEtBQUtBLEdBQUc7TUFDNUIsTUFBTTtJQUFFQyxJQUFBQSxNQUFNLEdBQUcsUUFBUTtJQUFFQyxJQUFBQTtJQUFhLEdBQUMsR0FBSUMsTUFBTSxDQUFDQyxhQUFhLElBQUksRUFBRztNQUN4RSxNQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQ0csV0FBVyxFQUFFRCxRQUFRLElBQUksRUFBRTtNQUNuRCxNQUFNLENBQUNFLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdDLGNBQVEsQ0FBQyxJQUFJLENBQUM7SUFDeEMsRUFBQSxvQkFBUUMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ0M7SUFBSyxHQUFDLGVBQ2hESixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRUMsQ0FBQyxDQUFDRTtJQUFLLEdBQUMsZUFDeENMLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNHO0lBQUssR0FBQyxlQUN4Q04sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ0k7SUFBTSxHQUFDLGVBQ3pDUCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRUMsQ0FBQyxDQUFDSztJQUFTLEdBQUMsQ0FBQyxlQUNqRFIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ007SUFBVSxHQUFDLEVBQUVkLFFBQVEsQ0FBQ2UsV0FBVyxJQUFJLGlCQUFpQixDQUFDLENBQUMsZUFDbkdWLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNRO09BQVMsRUFDMUMsZ0NBQWdDLGVBQ2hDWCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUMvQiw4REFBOEQsQ0FBQyxlQUNuRUQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ1M7T0FBWSxFQUFFLHliQUF5YixDQUFDLGVBQzVlWixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRUMsQ0FBQyxDQUFDVTtJQUFTLEdBQUMsZUFDNUNiLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO1VBQUUsR0FBR0MsQ0FBQyxDQUFDVyxTQUFTO1VBQUVDLFdBQVcsRUFBRXhDLEdBQUMsQ0FBQ00sS0FBSztVQUFFbUMsS0FBSyxFQUFFekMsR0FBQyxDQUFDTTtJQUFNO09BQUcsRUFBRSwwRUFBMEUsQ0FBQyxlQUMzS21CLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO1VBQUUsR0FBR0MsQ0FBQyxDQUFDVyxTQUFTO1VBQUVDLFdBQVcsRUFBRXhDLEdBQUMsQ0FBQ1EsSUFBSTtVQUFFaUMsS0FBSyxFQUFFekMsR0FBQyxDQUFDUTtJQUFLO09BQUcsRUFBRSxnQ0FBZ0MsQ0FBQyxlQUMvSGlCLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO1VBQUUsR0FBR0MsQ0FBQyxDQUFDVyxTQUFTO1VBQUVDLFdBQVcsRUFBRXhDLEdBQUMsQ0FBQ1MsSUFBSTtVQUFFZ0MsS0FBSyxFQUFFekMsR0FBQyxDQUFDUztJQUFLO09BQUcsRUFBRSx3REFBd0QsQ0FBQyxDQUFDLGVBQzVKZ0Isc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ2MsSUFBSTtJQUFFQyxJQUFBQSxPQUFPLEVBQUUsWUFBWTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBNkIsR0FBQyxFQUFFQyxLQUFLLENBQUNDLElBQUksQ0FBQztJQUFFQyxJQUFBQSxNQUFNLEVBQUU7T0FBRyxFQUFFLENBQUNDLENBQUMsRUFBRUMsR0FBRyxLQUFLSixLQUFLLENBQUNDLElBQUksQ0FBQztJQUFFQyxJQUFBQSxNQUFNLEVBQUU7T0FBRyxFQUFFLENBQUNDLENBQUMsRUFBRUUsR0FBRyxtQkFBTXpCLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRXlCLElBQUFBLEdBQUcsRUFBRSxDQUFBLEVBQUdGLEdBQUcsQ0FBQSxDQUFBLEVBQUlDLEdBQUcsQ0FBQSxDQUFFO0lBQUVFLElBQUFBLEVBQUUsRUFBRUYsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQUVHLElBQUFBLEVBQUUsRUFBRUosR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDO0lBQUVLLElBQUFBLENBQUMsRUFBRSxLQUFLO0lBQUVDLElBQUFBLElBQUksRUFBRTtJQUF5QixHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQ3JVOUIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFVixJQUFBQSxNQUFNLEVBQUVBLE1BQU07SUFBRXdDLElBQUFBLE1BQU0sRUFBRSxNQUFNO1FBQUU3QixLQUFLLEVBQUVDLENBQUMsQ0FBQzZCO0lBQU0sR0FBQyxlQUMxRWhDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUM4QjtPQUFXLEVBQUUsNEVBQTRFLENBQUMsZUFDL0hqQyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsR0FBRyxFQUFFO1FBQUVDLEtBQUssRUFBRUMsQ0FBQyxDQUFDK0I7T0FBUyxFQUFFLHFKQUFxSixDQUFDLEVBQ3JNMUMsWUFBWSxrQkFBS1Esc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ2dDO0lBQVMsR0FBQyxlQUM3RG5DLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNpQztJQUFTLEdBQUMsRUFBRSxRQUFRLENBQUMsRUFDNUQ1QyxZQUFZLENBQUMsQ0FBQyxlQUNsQlEsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ2tDO0lBQU0sR0FBQyxlQUN6Q3JDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXFDLElBQUFBLE9BQU8sRUFBRSxhQUFhO1FBQUVwQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ29DO09BQU8sRUFDbkUsUUFBUSxlQUNSdkMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7VUFBRWMsS0FBSyxFQUFFekMsR0FBQyxDQUFDVTtJQUFNO09BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxlQUNwRWUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFdUMsSUFBQUEsRUFBRSxFQUFFLGFBQWE7SUFBRUMsSUFBQUEsSUFBSSxFQUFFLE9BQU87SUFBRUMsSUFBQUEsSUFBSSxFQUFFLE9BQU87SUFBRUMsSUFBQUEsV0FBVyxFQUFFLG1CQUFtQjtJQUFFQyxJQUFBQSxZQUFZLEVBQUUsT0FBTztJQUFFQyxJQUFBQSxRQUFRLEVBQUUsSUFBSTtRQUFFM0MsS0FBSyxFQUFFQyxDQUFDLENBQUMyQyxLQUFLO1FBQUVDLE9BQU8sRUFBRUMsQ0FBQyxJQUFJO1VBQy9LbEQsUUFBUSxDQUFDLE9BQU8sQ0FBQztVQUNqQmtELENBQUMsQ0FBQ0MsTUFBTSxDQUFDL0MsS0FBSyxDQUFDYSxXQUFXLEdBQUd4QyxHQUFDLENBQUNNLEtBQUs7SUFDcENtRSxNQUFBQSxDQUFDLENBQUNDLE1BQU0sQ0FBQy9DLEtBQUssQ0FBQ2dELFNBQVMsR0FBRyxDQUFBLCtCQUFBLENBQWlDO1FBQ2hFLENBQUM7UUFBRUMsTUFBTSxFQUFFSCxDQUFDLElBQUk7VUFDWmxELFFBQVEsQ0FBQyxJQUFJLENBQUM7VUFDZGtELENBQUMsQ0FBQ0MsTUFBTSxDQUFDL0MsS0FBSyxDQUFDYSxXQUFXLEdBQUd4QyxHQUFDLENBQUNLLE1BQU07SUFDckNvRSxNQUFBQSxDQUFDLENBQUNDLE1BQU0sQ0FBQy9DLEtBQUssQ0FBQ2dELFNBQVMsR0FBRyxNQUFNO0lBQ3JDLElBQUE7T0FBRyxDQUFDLENBQUMsZUFDYmxELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFQyxDQUFDLENBQUNrQztJQUFNLEdBQUMsZUFDekNyQyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVxQyxJQUFBQSxPQUFPLEVBQUUsZ0JBQWdCO1FBQUVwQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ29DO09BQU8sRUFDdEUsdUNBQXVDLGVBQ3ZDdkMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7VUFBRWMsS0FBSyxFQUFFekMsR0FBQyxDQUFDVTtJQUFNO09BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxlQUNwRWUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFdUMsSUFBQUEsRUFBRSxFQUFFLGdCQUFnQjtJQUFFQyxJQUFBQSxJQUFJLEVBQUUsVUFBVTtJQUFFQyxJQUFBQSxJQUFJLEVBQUUsVUFBVTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsa0RBQWtEO0lBQUVDLElBQUFBLFlBQVksRUFBRSxrQkFBa0I7SUFBRUMsSUFBQUEsUUFBUSxFQUFFLElBQUk7UUFBRTNDLEtBQUssRUFBRUMsQ0FBQyxDQUFDMkMsS0FBSztRQUFFQyxPQUFPLEVBQUVDLENBQUMsSUFBSTtVQUNsT2xELFFBQVEsQ0FBQyxVQUFVLENBQUM7VUFDcEJrRCxDQUFDLENBQUNDLE1BQU0sQ0FBQy9DLEtBQUssQ0FBQ2EsV0FBVyxHQUFHeEMsR0FBQyxDQUFDTSxLQUFLO0lBQ3BDbUUsTUFBQUEsQ0FBQyxDQUFDQyxNQUFNLENBQUMvQyxLQUFLLENBQUNnRCxTQUFTLEdBQUcsQ0FBQSwrQkFBQSxDQUFpQztRQUNoRSxDQUFDO1FBQUVDLE1BQU0sRUFBRUgsQ0FBQyxJQUFJO1VBQ1psRCxRQUFRLENBQUMsSUFBSSxDQUFDO1VBQ2RrRCxDQUFDLENBQUNDLE1BQU0sQ0FBQy9DLEtBQUssQ0FBQ2EsV0FBVyxHQUFHeEMsR0FBQyxDQUFDSyxNQUFNO0lBQ3JDb0UsTUFBQUEsQ0FBQyxDQUFDQyxNQUFNLENBQUMvQyxLQUFLLENBQUNnRCxTQUFTLEdBQUcsTUFBTTtJQUNyQyxJQUFBO09BQUcsQ0FBQyxDQUFDLGVBQ2JsRCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtRQUFFeEMsS0FBSyxFQUFFQyxDQUFDLENBQUNpRCxHQUFHO0lBQUVDLElBQUFBLFlBQVksRUFBRUwsQ0FBQyxJQUFLQSxDQUFDLENBQUNDLE1BQU0sQ0FBQy9DLEtBQUssQ0FBQ29ELFVBQVUsR0FDbkcsQ0FBQSx3QkFBQSxFQUEyQi9FLEdBQUMsQ0FBQ08sU0FBUyxDQUFBLFVBQUEsQ0FBYTtJQUFFeUUsSUFBQUEsWUFBWSxFQUFFUCxDQUFDLElBQUtBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDL0MsS0FBSyxDQUFDb0QsVUFBVSxHQUNsRywyQkFBMkIvRSxHQUFDLENBQUNNLEtBQUssQ0FBQSxFQUFBLEVBQUtOLEdBQUMsQ0FBQ08sU0FBUyxDQUFBLENBQUE7T0FBTSxFQUFFLGdDQUFnQyxDQUFDLGVBQ25Ha0Isc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtRQUFFQyxLQUFLLEVBQUVDLENBQUMsQ0FBQ3FEO0lBQUssR0FBQyxFQUFFLDRUQUE0VCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVYO0lBQ0EsTUFBTXJELENBQUMsR0FBRztJQUNOQyxFQUFBQSxJQUFJLEVBQUU7SUFDRnFELElBQUFBLFNBQVMsRUFBRSxPQUFPO0lBQ2xCQyxJQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNiQyxJQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmQyxJQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUNwQkMsSUFBQUEsY0FBYyxFQUFFLFFBQVE7UUFDeEJDLGVBQWUsRUFBRXZGLEdBQUMsQ0FBQ0MsTUFBTTtJQUN6QnVGLElBQUFBLFVBQVUsRUFBRSxzQkFBc0I7SUFDbENDLElBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLElBQUFBLFNBQVMsRUFBRTtPQUNkO0lBQ0Q1RCxFQUFBQSxJQUFJLEVBQUU7SUFDRnNELElBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZELElBQUFBLEtBQUssRUFBRSxNQUFNO0lBQ2JRLElBQUFBLFFBQVEsRUFBRSxHQUFHO0lBQ2JULElBQUFBLFNBQVMsRUFBRSxHQUFHO0lBQ2RVLElBQUFBLFlBQVksRUFBRSxFQUFFO0lBQ2hCQyxJQUFBQSxRQUFRLEVBQUUsUUFBUTtJQUNsQnhGLElBQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUMvQnNFLElBQUFBLFNBQVMsRUFBRTtPQUNkO0lBQ0Q1QyxFQUFBQSxJQUFJLEVBQUU7SUFDRitELElBQUFBLElBQUksRUFBRSxXQUFXO0lBQ2pCZixJQUFBQSxVQUFVLEVBQUUsQ0FBQSxpREFBQSxDQUFtRDtJQUMvRGdCLElBQUFBLFdBQVcsRUFBRSxDQUFBLFVBQUEsRUFBYS9GLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFDcENvRixJQUFBQSxPQUFPLEVBQUUsV0FBVztJQUNwQkwsSUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZlksSUFBQUEsYUFBYSxFQUFFLFFBQVE7SUFDdkJDLElBQUFBLFFBQVEsRUFBRSxVQUFVO0lBQ3BCSixJQUFBQSxRQUFRLEVBQUU7T0FDYjtJQUNEN0QsRUFBQUEsS0FBSyxFQUFFO0lBQ0hvRCxJQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmQyxJQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUNwQmEsSUFBQUEsR0FBRyxFQUFFLEVBQUU7SUFDUEMsSUFBQUEsWUFBWSxFQUFFO09BQ2pCO0lBQ0RsRSxFQUFBQSxRQUFRLEVBQUU7SUFDTmtELElBQUFBLEtBQUssRUFBRSxFQUFFO0lBQ1RpQixJQUFBQSxNQUFNLEVBQUUsRUFBRTtJQUNWUixJQUFBQSxZQUFZLEVBQUUsS0FBSztRQUNuQkwsZUFBZSxFQUFFdkYsR0FBQyxDQUFDTSxLQUFLO0lBQ3hCcUUsSUFBQUEsU0FBUyxFQUFFLENBQUEsUUFBQSxFQUFXM0UsR0FBQyxDQUFDTSxLQUFLLENBQUE7T0FDaEM7SUFDRDRCLEVBQUFBLFNBQVMsRUFBRTtJQUNQbUUsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsSUFBQUEsVUFBVSxFQUFFLEdBQUc7UUFDZjdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2EsS0FBSztJQUNkMEYsSUFBQUEsYUFBYSxFQUFFLFdBQVc7SUFDMUJDLElBQUFBLGFBQWEsRUFBRTtPQUNsQjtJQUNEcEUsRUFBQUEsT0FBTyxFQUFFO0lBQ0xpRSxJQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxJQUFBQSxVQUFVLEVBQUUsR0FBRztRQUNmN0QsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQ2Q4RixJQUFBQSxVQUFVLEVBQUUsR0FBRztJQUNmTixJQUFBQSxZQUFZLEVBQUUsRUFBRTtJQUNoQkssSUFBQUEsYUFBYSxFQUFFO09BQ2xCO0lBQ0RuRSxFQUFBQSxVQUFVLEVBQUU7SUFDUmdFLElBQUFBLFFBQVEsRUFBRSxFQUFFO1FBQ1o1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNhLEtBQUs7SUFDZDRGLElBQUFBLFVBQVUsRUFBRSxJQUFJO0lBQ2hCTixJQUFBQSxZQUFZLEVBQUU7T0FDakI7SUFDRDdELEVBQUFBLFFBQVEsRUFBRTtJQUNOOEMsSUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZnNCLElBQUFBLFFBQVEsRUFBRSxNQUFNO0lBQ2hCUixJQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUNOQyxJQUFBQSxZQUFZLEVBQUU7T0FDakI7SUFDRDVELEVBQUFBLFNBQVMsRUFBRTtJQUNQOEQsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsSUFBQUEsVUFBVSxFQUFFLEdBQUc7SUFDZmIsSUFBQUEsT0FBTyxFQUFFLFVBQVU7SUFDbkJHLElBQUFBLFlBQVksRUFBRSxFQUFFO0lBQ2hCdkYsSUFBQUEsTUFBTSxFQUFFLFdBQVc7SUFDbkJtRyxJQUFBQSxhQUFhLEVBQUUsUUFBUTtJQUN2QkcsSUFBQUEsT0FBTyxFQUFFO09BQ1o7SUFDRGpFLEVBQUFBLElBQUksRUFBRTtJQUNGdUQsSUFBQUEsUUFBUSxFQUFFLFVBQVU7SUFDcEJXLElBQUFBLE1BQU0sRUFBRSxFQUFFO0lBQ1ZuRCxJQUFBQSxLQUFLLEVBQUUsRUFBRTtJQUNUMEIsSUFBQUEsS0FBSyxFQUFFLEdBQUc7SUFDVmlCLElBQUFBLE1BQU0sRUFBRSxFQUFFO0lBQ1ZPLElBQUFBLE9BQU8sRUFBRSxHQUFHO0lBQ1pFLElBQUFBLGFBQWEsRUFBRTtPQUNsQjtJQUNEcEQsRUFBQUEsS0FBSyxFQUFFO0lBQ0hxQyxJQUFBQSxJQUFJLEVBQUUsQ0FBQztRQUNQUCxlQUFlLEVBQUV2RixHQUFDLENBQUNFLE1BQU07SUFDekJ1RixJQUFBQSxPQUFPLEVBQUUsV0FBVztJQUNwQkwsSUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZlksSUFBQUEsYUFBYSxFQUFFLFFBQVE7SUFDdkJWLElBQUFBLGNBQWMsRUFBRTtPQUNuQjtJQUNENUIsRUFBQUEsU0FBUyxFQUFFO0lBQ1AyQyxJQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxJQUFBQSxVQUFVLEVBQUUsR0FBRztRQUNmN0QsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQ2R3RixJQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmSyxJQUFBQSxhQUFhLEVBQUU7T0FDbEI7SUFDRDdDLEVBQUFBLE9BQU8sRUFBRTtJQUNMMEMsSUFBQUEsUUFBUSxFQUFFLEVBQUU7UUFDWjVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2MsS0FBSztJQUNkcUYsSUFBQUEsWUFBWSxFQUFFO09BQ2pCO0lBQ0R2QyxFQUFBQSxRQUFRLEVBQUU7SUFDTndCLElBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLElBQUFBLFVBQVUsRUFBRSxRQUFRO0lBQ3BCYSxJQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUNOVCxJQUFBQSxPQUFPLEVBQUUsV0FBVztJQUNwQkYsSUFBQUEsZUFBZSxFQUFFLHFCQUFxQjtJQUN0Q2xGLElBQUFBLE1BQU0sRUFBRSxDQUFBLDZCQUFBLENBQStCO0lBQ3ZDdUYsSUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsSUFBQUEsUUFBUSxFQUFFLEVBQUU7UUFDWjVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1UsS0FBSztJQUNkeUYsSUFBQUEsWUFBWSxFQUFFO09BQ2pCO0lBQ0R0QyxFQUFBQSxRQUFRLEVBQUU7SUFDTndDLElBQUFBLFFBQVEsRUFBRSxDQUFDO0lBQ1hJLElBQUFBLFVBQVUsRUFBRSxDQUFDO1FBQ2JoRSxLQUFLLEVBQUV6QyxHQUFDLENBQUNVO09BQ1o7SUFDRG9ELEVBQUFBLEtBQUssRUFBRTtJQUNIcUMsSUFBQUEsWUFBWSxFQUFFLEVBQUU7SUFDaEJmLElBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZZLElBQUFBLGFBQWEsRUFBRSxRQUFRO0lBQ3ZCRSxJQUFBQSxHQUFHLEVBQUU7T0FDUjtJQUNEbEMsRUFBQUEsS0FBSyxFQUFFO0lBQ0hxQyxJQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxJQUFBQSxVQUFVLEVBQUUsR0FBRztRQUNmN0QsS0FBSyxFQUFFekMsR0FBQyxDQUFDYTtPQUNaO0lBQ0QwRCxFQUFBQSxLQUFLLEVBQUU7SUFDSFksSUFBQUEsS0FBSyxFQUFFLE1BQU07SUFDYk0sSUFBQUEsT0FBTyxFQUFFLFdBQVc7UUFDcEJGLGVBQWUsRUFBRXZGLEdBQUMsQ0FBQ0ksT0FBTztRQUMxQnFDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUNkTixJQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFDL0J1RixJQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxJQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaUyxJQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmQyxJQUFBQSxVQUFVLEVBQUUsZ0RBQWdEO0lBQzVEckIsSUFBQUEsU0FBUyxFQUFFLFlBQVk7UUFDdkJzQixtQkFBbUIsRUFBRWhILEdBQUMsQ0FBQ1c7T0FDMUI7SUFDRGtFLEVBQUFBLEdBQUcsRUFBRTtJQUNETSxJQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNiTSxJQUFBQSxPQUFPLEVBQUUsTUFBTTtRQUNmVixVQUFVLEVBQUUsMkJBQTJCL0UsR0FBQyxDQUFDTSxLQUFLLENBQUEsRUFBQSxFQUFLTixHQUFDLENBQUNPLFNBQVMsQ0FBQSxDQUFBLENBQUc7UUFDakVrQyxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFDZE4sSUFBQUEsTUFBTSxFQUFFLE1BQU07SUFDZHVGLElBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLElBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLElBQUFBLFVBQVUsRUFBRSxHQUFHO0lBQ2ZXLElBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxJQUFBQSxTQUFTLEVBQUUsQ0FBQztJQUNaVixJQUFBQSxhQUFhLEVBQUUsUUFBUTtJQUN2Qk8sSUFBQUEsVUFBVSxFQUFFO09BQ2Y7SUFDRDlCLEVBQUFBLElBQUksRUFBRTtJQUNGaUMsSUFBQUEsU0FBUyxFQUFFLEVBQUU7SUFDYmIsSUFBQUEsUUFBUSxFQUFFLEVBQUU7UUFDWjVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2MsS0FBSztJQUNkcUcsSUFBQUEsU0FBUyxFQUFFLFFBQVE7SUFDbkJWLElBQUFBLFVBQVUsRUFBRTtJQUNoQjtJQUNKLENBQUM7O0lDclBELE1BQU16RyxHQUFDLEdBQUc7SUFDTkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJFLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxPQUFPLEVBQUUsU0FBUztJQUNsQkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxTQUFTLEVBQUUsU0FBUztJQUNwQkMsRUFBQUEsSUFBSSxFQUFFLFNBQVM7SUFDZkMsRUFDQUMsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRTtJQUNYLENBQUM7SUFDRCxNQUFNc0csZUFBYSxHQUFHLENBQ2xCO0lBQUVDLEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBUSxDQUFDLEVBQ2pDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsT0FBTztJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVEsQ0FBQyxFQUNsQztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFPLENBQUMsQ0FDbkM7SUFDRCxNQUFNc0QsZ0JBQWMsR0FBRyxDQUNuQjtJQUFFRCxFQUFBQSxLQUFLLEVBQUUsUUFBUTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQWUsQ0FBQyxFQUMxQztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLFVBQVU7SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFzQixDQUFDLEVBQ25EO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQWtCLENBQUMsQ0FDOUM7SUFDRCxNQUFNdUQsWUFBVSxHQUFHLENBQ2Y7SUFBRUYsRUFBQUEsS0FBSyxFQUFFLFVBQVU7SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFXLENBQUMsRUFDeEM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBVSxDQUFDLEVBQ3RDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsUUFBUTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVMsQ0FBQyxFQUNwQztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLFFBQVE7SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFTLENBQUMsRUFDcEM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxRQUFRO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBUyxDQUFDLEVBQ3BDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsT0FBTztJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVMsQ0FBQyxDQUN0QztJQUNELE1BQU13RCxZQUFVLEdBQUc7SUFDZi9CLEVBQUFBLE9BQU8sRUFBRSxVQUFVO01BQ25CVixVQUFVLEVBQUUvRSxHQUFDLENBQUNJLE9BQU87TUFDckJxQyxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFDZE4sRUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQy9CdUYsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlMsRUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZnBCLEVBQUFBLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFDRCxNQUFNK0IsYUFBVyxHQUFHO0lBQ2hCaEMsRUFBQUEsT0FBTyxFQUFFLFVBQVU7TUFDbkJWLFVBQVUsRUFBRS9FLEdBQUMsQ0FBQ0ksT0FBTztNQUNyQnFDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUNkTixFQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFDL0J1RixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaUyxFQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmRyxFQUFBQSxNQUFNLEVBQUU7SUFDWixDQUFDO0lBQ0QsTUFBTVMsV0FBUyxHQUFHO0lBQ2QzQyxFQUFBQSxVQUFVLEVBQUUsTUFBTTtJQUNsQjFFLEVBQUFBLE1BQU0sRUFBRSxNQUFNO01BQ2RvQyxLQUFLLEVBQUV6QyxHQUFDLENBQUNVLEtBQUs7SUFDZDJGLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pZLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCeEIsRUFBQUEsT0FBTyxFQUFFLFNBQVM7SUFDbEJHLEVBQUFBLFlBQVksRUFBRTtJQUNsQixDQUFDO0lBQ0QsTUFBTStCLFFBQU0sR0FBRztJQUNYbEMsRUFBQUEsT0FBTyxFQUFFLFVBQVU7SUFDbkJWLEVBQUFBLFVBQVUsRUFBRSxhQUFhO01BQ3pCdEMsS0FBSyxFQUFFekMsR0FBQyxDQUFDTSxLQUFLO0lBQ2RELEVBQUFBLE1BQU0sRUFBRSxDQUFBLFdBQUEsRUFBY0wsR0FBQyxDQUFDTSxLQUFLLENBQUEsQ0FBRTtJQUMvQnNGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pZLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxTQUFTLEVBQUU7SUFDZixDQUFDO0lBQ0QsU0FBU1UsV0FBU0EsQ0FBQztNQUFFQyxNQUFNO01BQUVDLFFBQVE7SUFBRUMsRUFBQUE7SUFBVSxDQUFDLEVBQUU7SUFDaEQsRUFBQSxvQkFBUXRHLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5RCxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUFFYSxNQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFQyxNQUFBQSxZQUFZLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDNUcxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsTUFBTTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsaUZBQWlGO1FBQUVpRCxLQUFLLEVBQUVRLE1BQU0sQ0FBQ0csV0FBVztJQUFFRixJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUdELE1BQU07SUFBRUcsTUFBQUEsV0FBVyxFQUFFdkQsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFMUIsTUFBQUEsSUFBSSxFQUFFO0lBQUU7SUFBRSxHQUFDLENBQUMsZUFDalJyRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMEUsTUFBQUEsUUFBUSxFQUFFLEVBQUU7VUFBRTVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2EsS0FBSztJQUFFdUUsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRUMsTUFBQUEsVUFBVSxFQUFFLFFBQVE7SUFBRWEsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRWUsTUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFBRWdCLE1BQUFBLFVBQVUsRUFBRTtJQUFTO0lBQUUsR0FBQyxlQUM1SnhHLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxVQUFVO1FBQUUrRCxPQUFPLEVBQUVMLE1BQU0sQ0FBQ00sVUFBVTtJQUFFTCxJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUdELE1BQU07SUFBRU0sTUFBQUEsVUFBVSxFQUFFMUQsQ0FBQyxDQUFDQyxNQUFNLENBQUN3RDtJQUFRLEtBQUMsQ0FBQztJQUFFdkcsSUFBQUEsS0FBSyxFQUFFO1VBQUV5RyxXQUFXLEVBQUVwSSxHQUFDLENBQUNNO0lBQU07T0FBRyxDQUFDLEVBQ3JMLGdDQUFnQyxDQUFDLGVBQ3JDbUIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkcsSUFBQUEsT0FBTyxFQUFFTixRQUFRO0lBQUVwRyxJQUFBQSxLQUFLLEVBQUUrRjtPQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekY7SUFDQSxTQUFTWSxlQUFhQSxDQUFDO01BQUVDLFFBQVE7TUFBRVQsUUFBUTtJQUFFQyxFQUFBQTtJQUFVLENBQUMsRUFBRTtNQUN0RCxNQUFNUyxTQUFTLEdBQUdBLE1BQU07SUFDcEJWLElBQUFBLFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBR1MsUUFBUTtJQUFFRSxNQUFBQSxPQUFPLEVBQUUsQ0FBQyxHQUFHRixRQUFRLENBQUNFLE9BQU8sRUFBRTtJQUFFVCxRQUFBQSxXQUFXLEVBQUUsRUFBRTtJQUFFRyxRQUFBQSxVQUFVLEVBQUU7V0FBTztJQUFFLEtBQUMsQ0FBQztNQUNyRyxDQUFDO0lBQ0QsRUFBQSxNQUFNTyxZQUFZLEdBQUdBLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxLQUFLO0lBQzNCLElBQUEsTUFBTUMsSUFBSSxHQUFHLENBQUMsR0FBR04sUUFBUSxDQUFDRSxPQUFPLENBQUM7SUFDbENJLElBQUFBLElBQUksQ0FBQ0YsQ0FBQyxDQUFDLEdBQUdDLENBQUM7SUFDWGQsSUFBQUEsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHUyxRQUFRO0lBQUVFLE1BQUFBLE9BQU8sRUFBRUk7SUFBSyxLQUFDLENBQUM7TUFDNUMsQ0FBQztNQUNELE1BQU1DLFlBQVksR0FBSUgsQ0FBQyxJQUFLO0lBQ3hCYixJQUFBQSxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUdTLFFBQVE7SUFBRUUsTUFBQUEsT0FBTyxFQUFFRixRQUFRLENBQUNFLE9BQU8sQ0FBQ00sTUFBTSxDQUFDLENBQUMvRixDQUFDLEVBQUVnRyxHQUFHLEtBQUtBLEdBQUcsS0FBS0wsQ0FBQztJQUFFLEtBQUMsQ0FBQztNQUN0RixDQUFDO0lBQ0QsRUFBQSxvQkFBUWxILHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV3RSxNQUFBQSxZQUFZLEVBQUUsRUFBRTtJQUFFVixNQUFBQSxPQUFPLEVBQUUsRUFBRTtJQUFFVixNQUFBQSxVQUFVLEVBQUUsU0FBUztJQUFFMUUsTUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQUV1RixNQUFBQSxZQUFZLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDcEpuRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRUMsTUFBQUEsVUFBVSxFQUFFLFFBQVE7SUFBRWEsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRUMsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQ3BHMUUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLE1BQU07SUFBRUMsSUFBQUEsV0FBVyxFQUFFLDJFQUEyRTtRQUFFaUQsS0FBSyxFQUFFa0IsUUFBUSxDQUFDVSxhQUFhO0lBQUVuQixJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUdTLFFBQVE7SUFBRVUsTUFBQUEsYUFBYSxFQUFFeEUsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFMUIsTUFBQUEsSUFBSSxFQUFFO0lBQUU7SUFBRSxHQUFDLENBQUMsZUFDblJyRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUUyRixLQUFLLEVBQUVrQixRQUFRLENBQUNXLGFBQWE7SUFBRXBCLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBR1MsUUFBUTtJQUFFVyxNQUFBQSxhQUFhLEVBQUV6RSxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU4RjtJQUFZLEdBQUMsRUFBRUgsZ0JBQWMsQ0FBQzZCLEdBQUcsQ0FBQ0MsRUFBRSxrQkFBSzNILHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFBRXlCLEdBQUcsRUFBRWlHLEVBQUUsQ0FBQy9CLEtBQUs7UUFBRUEsS0FBSyxFQUFFK0IsRUFBRSxDQUFDL0I7SUFBTSxHQUFDLEVBQUUrQixFQUFFLENBQUNwRixLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFDdFF2QyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRyxJQUFBQSxPQUFPLEVBQUVOLFFBQVE7SUFBRXBHLElBQUFBLEtBQUssRUFBRStGO0lBQVUsR0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQ3JGYSxRQUFRLENBQUNXLGFBQWEsS0FBSyxNQUFNLGtCQUFLekgsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDRCxzQkFBSyxDQUFDNEgsUUFBUSxFQUFFLElBQUksRUFDMUVkLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDVSxHQUFHLENBQUMsQ0FBQ0csR0FBRyxFQUFFQyxFQUFFLG1CQUFNOUgsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDa0csV0FBUyxFQUFFO0lBQUV6RSxJQUFBQSxHQUFHLEVBQUVvRyxFQUFFO0lBQUUxQixJQUFBQSxNQUFNLEVBQUV5QixHQUFHO1FBQUV4QixRQUFRLEVBQUVjLENBQUMsSUFBSUYsWUFBWSxDQUFDYSxFQUFFLEVBQUVYLENBQUMsQ0FBQztJQUFFYixJQUFBQSxRQUFRLEVBQUVBLE1BQU1lLFlBQVksQ0FBQ1MsRUFBRTtPQUFHLENBQUMsQ0FBQyxDQUFDLGVBQ25LOUgsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRWtFLElBQUFBLE9BQU8sRUFBRUcsU0FBUztJQUFFN0csSUFBQUEsS0FBSyxFQUFFZ0c7SUFBTyxHQUFDLEVBQUUsbUZBQW1GLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEw7SUFDQSxTQUFTNkIsV0FBU0EsQ0FBQztNQUFFQyxNQUFNO01BQUUzQixRQUFRO0lBQUVDLEVBQUFBO0lBQVUsQ0FBQyxFQUFFO01BQ2hELE1BQU0yQixXQUFXLEdBQUdBLE1BQU07SUFDdEI1QixJQUFBQSxRQUFRLENBQUM7SUFDTCxNQUFBLEdBQUcyQixNQUFNO1VBQ1RFLFNBQVMsRUFBRSxDQUFDLElBQUlGLE1BQU0sQ0FBQ0UsU0FBUyxJQUFJLEVBQUUsQ0FBQyxFQUFFO0lBQUVWLFFBQUFBLGFBQWEsRUFBRSxFQUFFO0lBQUVDLFFBQUFBLGFBQWEsRUFBRSxRQUFRO0lBQUVULFFBQUFBLE9BQU8sRUFBRSxDQUFDO0lBQUVULFVBQUFBLFdBQVcsRUFBRSxFQUFFO0lBQUVHLFVBQUFBLFVBQVUsRUFBRTthQUFPO1dBQUc7SUFDOUksS0FBQyxDQUFDO01BQ04sQ0FBQztJQUNELEVBQUEsTUFBTXlCLGNBQWMsR0FBR0EsQ0FBQ2pCLENBQUMsRUFBRWtCLENBQUMsS0FBSztRQUM3QixNQUFNaEIsSUFBSSxHQUFHLENBQUMsSUFBSVksTUFBTSxDQUFDRSxTQUFTLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUNkLElBQUFBLElBQUksQ0FBQ0YsQ0FBQyxDQUFDLEdBQUdrQixDQUFDO0lBQ1gvQixJQUFBQSxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUcyQixNQUFNO0lBQUVFLE1BQUFBLFNBQVMsRUFBRWQ7SUFBSyxLQUFDLENBQUM7TUFDNUMsQ0FBQztNQUNELE1BQU1pQixjQUFjLEdBQUluQixDQUFDLElBQUs7SUFDMUJiLElBQUFBLFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzJCLE1BQU07SUFBRUUsTUFBQUEsU0FBUyxFQUFFLENBQUNGLE1BQU0sQ0FBQ0UsU0FBUyxJQUFJLEVBQUUsRUFBRVosTUFBTSxDQUFDLENBQUMvRixDQUFDLEVBQUVnRyxHQUFHLEtBQUtBLEdBQUcsS0FBS0wsQ0FBQztJQUFFLEtBQUMsQ0FBQztNQUM5RixDQUFDO0lBQ0QsRUFBQSxNQUFNb0IsTUFBTSxHQUFHTixNQUFNLENBQUNPLFlBQVksS0FBSyxNQUFNO0lBQzdDLEVBQUEsTUFBTUMsT0FBTyxHQUFHUixNQUFNLENBQUNPLFlBQVksS0FBSyxPQUFPO0lBQy9DLEVBQUEsTUFBTUUsTUFBTSxHQUFHVCxNQUFNLENBQUNPLFlBQVksS0FBSyxNQUFNO0lBQzdDLEVBQUEsb0JBQVF2SSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFd0UsTUFBQUEsWUFBWSxFQUFFLENBQUM7SUFBRVYsTUFBQUEsT0FBTyxFQUFFLFdBQVc7VUFBRVYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDRyxNQUFNO0lBQUVFLE1BQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUFFdUYsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQzNKbkUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVDLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUNwRzFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSxpRkFBaUY7UUFBRWlELEtBQUssRUFBRW9DLE1BQU0sQ0FBQ1UsS0FBSztJQUFFckMsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHMkIsTUFBTTtJQUFFVSxNQUFBQSxLQUFLLEVBQUUxRixDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc2RixZQUFVO0lBQUUxQixNQUFBQSxJQUFJLEVBQUU7SUFBRTtJQUFFLEdBQUMsQ0FBQyxlQUNyUXJFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFBRTJGLEtBQUssRUFBRW9DLE1BQU0sQ0FBQ08sWUFBWTtJQUFFbEMsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHMkIsTUFBTTtJQUFFTyxNQUFBQSxZQUFZLEVBQUV2RixDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU4RjtJQUFZLEdBQUMsRUFBRUwsZUFBYSxDQUFDK0IsR0FBRyxDQUFDaUIsRUFBRSxrQkFBSzNJLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFBRXlCLEdBQUcsRUFBRWlILEVBQUUsQ0FBQy9DLEtBQUs7UUFBRUEsS0FBSyxFQUFFK0MsRUFBRSxDQUFDL0M7SUFBTSxHQUFDLEVBQUUrQyxFQUFFLENBQUNwRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFDL1B2QyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRyxJQUFBQSxPQUFPLEVBQUVOLFFBQVE7SUFBRXBHLElBQUFBLEtBQUssRUFBRStGO0lBQVUsR0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQ3JGdUMsT0FBTyxrQkFBS3hJLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSx3R0FBd0c7SUFBRWlELElBQUFBLEtBQUssRUFBRW9DLE1BQU0sQ0FBQ1ksU0FBUyxJQUFJLEVBQUU7SUFBRXZDLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzJCLE1BQU07SUFBRVksTUFBQUEsU0FBUyxFQUFFNUYsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFckMsTUFBQUEsS0FBSyxFQUFFO0lBQU87T0FBRyxDQUFDLENBQUMsRUFDN1QrRSxNQUFNLGtCQUFLekksc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsRUFBRTtJQUFFMEMsSUFBQUEsV0FBVyxFQUFFLG9KQUFvSjtJQUFFaUQsSUFBQUEsS0FBSyxFQUFFb0MsTUFBTSxDQUFDYSxZQUFZLElBQUksRUFBRTtJQUFFeEMsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHMkIsTUFBTTtJQUFFYSxNQUFBQSxZQUFZLEVBQUU3RixDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUVrRCxJQUFBQSxJQUFJLEVBQUUsQ0FBQztJQUFFNUksSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFckMsTUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRXFGLE1BQUFBLE1BQU0sRUFBRTtJQUFXO09BQUcsQ0FBQyxDQUFDLEVBQ2hZVCxNQUFNLGtCQUFLdEksc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXVGLE1BQUFBLFNBQVMsRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUM3RHpGLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSxpRkFBaUY7SUFBRWlELElBQUFBLEtBQUssRUFBRW9DLE1BQU0sQ0FBQ2dCLFVBQVUsSUFBSSxFQUFFO0lBQUUzQyxJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUcyQixNQUFNO0lBQUVnQixNQUFBQSxVQUFVLEVBQUVoRyxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc2RixZQUFVO0lBQUVyQyxNQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUFFZ0IsTUFBQUEsWUFBWSxFQUFFO0lBQUU7T0FBRyxDQUFDLEVBQzVTLENBQUNzRCxNQUFNLENBQUNFLFNBQVMsSUFBSSxFQUFFLEVBQUVSLEdBQUcsQ0FBQyxDQUFDVSxDQUFDLEVBQUVhLEVBQUUsbUJBQU1qSixzQkFBSyxDQUFDQyxhQUFhLENBQUM0RyxlQUFhLEVBQUU7SUFBRW5GLElBQUFBLEdBQUcsRUFBRXVILEVBQUU7SUFBRW5DLElBQUFBLFFBQVEsRUFBRXNCLENBQUM7UUFBRS9CLFFBQVEsRUFBRWMsQ0FBQyxJQUFJZ0IsY0FBYyxDQUFDYyxFQUFFLEVBQUU5QixDQUFDLENBQUM7SUFBRWIsSUFBQUEsUUFBUSxFQUFFQSxNQUFNK0IsY0FBYyxDQUFDWSxFQUFFO09BQUcsQ0FBQyxDQUFDLENBQUMsZUFDakxqSixzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtJQUFFa0UsSUFBQUEsT0FBTyxFQUFFcUIsV0FBVztJQUFFL0gsSUFBQUEsS0FBSyxFQUFFZ0c7SUFBTyxHQUFDLEVBQUUsd0NBQXdDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0k7SUFDQSxTQUFTZ0QsY0FBWUEsQ0FBQztNQUFFQyxPQUFPO01BQUVDLEtBQUs7TUFBRS9DLFFBQVE7SUFBRUMsRUFBQUE7SUFBVSxDQUFDLEVBQUU7TUFDM0QsTUFBTStDLFNBQVMsR0FBR0EsTUFBTTtJQUNwQmhELElBQUFBLFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzhDLE9BQU87SUFBRUcsTUFBQUEsT0FBTyxFQUFFLENBQUMsR0FBR0gsT0FBTyxDQUFDRyxPQUFPLEVBQUU7SUFBRVosUUFBQUEsS0FBSyxFQUFFLEVBQUU7SUFBRUgsUUFBQUEsWUFBWSxFQUFFO1dBQVE7SUFBRSxLQUFDLENBQUM7TUFDaEcsQ0FBQztJQUNELEVBQUEsTUFBTWdCLFlBQVksR0FBR0EsQ0FBQ0MsRUFBRSxFQUFFeEIsTUFBTSxLQUFLO0lBQ2pDLElBQUEsTUFBTVosSUFBSSxHQUFHLENBQUMsR0FBRytCLE9BQU8sQ0FBQ0csT0FBTyxDQUFDO0lBQ2pDbEMsSUFBQUEsSUFBSSxDQUFDb0MsRUFBRSxDQUFDLEdBQUd4QixNQUFNO0lBQ2pCM0IsSUFBQUEsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHOEMsT0FBTztJQUFFRyxNQUFBQSxPQUFPLEVBQUVsQztJQUFLLEtBQUMsQ0FBQztNQUMzQyxDQUFDO01BQ0QsTUFBTXFDLFlBQVksR0FBSUQsRUFBRSxJQUFLO0lBQ3pCbkQsSUFBQUEsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHOEMsT0FBTztJQUFFRyxNQUFBQSxPQUFPLEVBQUVILE9BQU8sQ0FBQ0csT0FBTyxDQUFDaEMsTUFBTSxDQUFDLENBQUMvRixDQUFDLEVBQUUyRixDQUFDLEtBQUtBLENBQUMsS0FBS3NDLEVBQUU7SUFBRSxLQUFDLENBQUM7TUFDakYsQ0FBQztJQUNELEVBQUEsb0JBQVF4SixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFd0UsTUFBQUEsWUFBWSxFQUFFLEVBQUU7SUFBRVYsTUFBQUEsT0FBTyxFQUFFLEVBQUU7VUFBRVYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDRyxNQUFNO0lBQUVFLE1BQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUFFdUYsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQ25KbkUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVDLE1BQUFBLFlBQVksRUFBRTtJQUFHO0lBQUUsR0FBQyxlQUNyRzFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUwRSxNQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsR0FBRztVQUFFN0QsS0FBSyxFQUFFekMsR0FBQyxDQUFDUTtJQUFLO0lBQUUsR0FBQyxFQUNuRix1Q0FBdUMsRUFDdkNxSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLGVBQ2RwSixzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsTUFBTTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsNkZBQTZGO1FBQUVpRCxLQUFLLEVBQUV1RCxPQUFPLENBQUNULEtBQUs7SUFBRXJDLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzhDLE9BQU87SUFBRVQsTUFBQUEsS0FBSyxFQUFFMUYsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFMUIsTUFBQUEsSUFBSSxFQUFFO0lBQUU7SUFBRSxHQUFDLENBQUMsZUFDblJyRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRyxJQUFBQSxPQUFPLEVBQUVOLFFBQVE7SUFBRXBHLElBQUFBLEtBQUssRUFBRStGO09BQVcsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUNyRmtELE9BQU8sQ0FBQ0csT0FBTyxDQUFDNUIsR0FBRyxDQUFDLENBQUNNLE1BQU0sRUFBRXdCLEVBQUUsbUJBQU14SixzQkFBSyxDQUFDQyxhQUFhLENBQUM4SCxXQUFTLEVBQUU7SUFBRXJHLElBQUFBLEdBQUcsRUFBRThILEVBQUU7SUFBRXhCLElBQUFBLE1BQU0sRUFBRUEsTUFBTTtRQUFFM0IsUUFBUSxFQUFFcUQsQ0FBQyxJQUFJSCxZQUFZLENBQUNDLEVBQUUsRUFBRUUsQ0FBQyxDQUFDO0lBQUVwRCxJQUFBQSxRQUFRLEVBQUVBLE1BQU1tRCxZQUFZLENBQUNELEVBQUU7T0FBRyxDQUFDLENBQUMsQ0FBQyxlQUN4S3hKLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUVrRSxJQUFBQSxPQUFPLEVBQUV5QyxTQUFTO0lBQUVuSixJQUFBQSxLQUFLLEVBQUVnRztPQUFRLEVBQUUsNEJBQTRCLENBQUMsQ0FBQztJQUMzSDtJQUNlLFNBQVN5RCxZQUFZQSxDQUFDQyxLQUFLLEVBQUU7TUFDeEMsTUFBTSxDQUFDbEIsS0FBSyxFQUFFbUIsUUFBUSxDQUFDLEdBQUc5SixjQUFRLENBQUMsRUFBRSxDQUFDO01BQ3RDLE1BQU0sQ0FBQytKLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdoSyxjQUFRLENBQUMsRUFBRSxDQUFDO01BQ2xELE1BQU0sQ0FBQ2lLLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdsSyxjQUFRLENBQUMsVUFBVSxDQUFDO01BQ3BELE1BQU0sQ0FBQ21LLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdwSyxjQUFRLENBQUMsSUFBSSxDQUFDO01BQ3BELE1BQU0sQ0FBQ3FLLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd0SyxjQUFRLENBQUMsRUFBRSxDQUFDO01BQzVDLE1BQU0sQ0FBQ3VLLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd4SyxjQUFRLENBQUMsQ0FDckM7SUFBRTJJLElBQUFBLEtBQUssRUFBRSxFQUFFO0lBQUVZLElBQUFBLE9BQU8sRUFBRSxDQUFDO0lBQUVaLE1BQUFBLEtBQUssRUFBRSxFQUFFO0lBQUVILE1BQUFBLFlBQVksRUFBRTtTQUFTO0lBQUUsR0FBQyxDQUNqRSxDQUFDO01BQ0YsTUFBTSxDQUFDaUMsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzFLLGNBQVEsQ0FBQyxLQUFLLENBQUM7TUFDbkQsTUFBTTJLLFVBQVUsR0FBR0EsTUFBTTtJQUNyQkgsSUFBQUEsV0FBVyxDQUFDLENBQUMsR0FBR0QsUUFBUSxFQUFFO0lBQUU1QixNQUFBQSxLQUFLLEVBQUUsRUFBRTtJQUFFWSxNQUFBQSxPQUFPLEVBQUUsQ0FBQztJQUFFWixRQUFBQSxLQUFLLEVBQUUsRUFBRTtJQUFFSCxRQUFBQSxZQUFZLEVBQUU7V0FBUTtJQUFFLEtBQUMsQ0FBQyxDQUFDO01BQzdGLENBQUM7SUFDRCxFQUFBLE1BQU1vQyxhQUFhLEdBQUdBLENBQUN6RCxDQUFDLEVBQUVpQyxPQUFPLEtBQUs7SUFDbEMsSUFBQSxNQUFNL0IsSUFBSSxHQUFHLENBQUMsR0FBR2tELFFBQVEsQ0FBQztJQUMxQmxELElBQUFBLElBQUksQ0FBQ0YsQ0FBQyxDQUFDLEdBQUdpQyxPQUFPO1FBQ2pCb0IsV0FBVyxDQUFDbkQsSUFBSSxDQUFDO01BQ3JCLENBQUM7TUFDRCxNQUFNd0QsYUFBYSxHQUFJMUQsQ0FBQyxJQUFLO0lBQ3pCcUQsSUFBQUEsV0FBVyxDQUFDRCxRQUFRLENBQUNoRCxNQUFNLENBQUMsQ0FBQy9GLENBQUMsRUFBRWdHLEdBQUcsS0FBS0EsR0FBRyxLQUFLTCxDQUFDLENBQUMsQ0FBQztNQUN2RCxDQUFDO01BQ0QsTUFBTTJELFlBQVksR0FBR1AsUUFBUSxDQUFDUSxNQUFNLENBQUMsQ0FBQzNLLENBQUMsRUFBRTRLLEdBQUcsS0FBSzVLLENBQUMsR0FBRzRLLEdBQUcsQ0FBQ3pCLE9BQU8sQ0FBQ2hJLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDM0UsRUFBQSxNQUFNMEosTUFBTSxHQUFHdkwsTUFBTSxDQUFDd0wsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQztJQUNwRixFQUFBLE1BQU1DLFlBQVksR0FBRyxNQUFPcEksQ0FBQyxJQUFLO1FBQzlCQSxDQUFDLENBQUNxSSxjQUFjLEVBQUU7UUFDbEJaLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkIsSUFBSTtJQUNBLE1BQUEsTUFBTWEsSUFBSSxHQUFHdEksQ0FBQyxDQUFDQyxNQUFNO0lBQ3JCLE1BQUEsTUFBTXNJLEVBQUUsR0FBRyxJQUFJQyxRQUFRLENBQUNGLElBQUksQ0FBQztJQUM3QixNQUFBLE1BQU1HLE1BQU0sR0FBRyxJQUFJQyxlQUFlLEVBQUU7SUFDcEMsTUFBQSxLQUFLLE1BQU0sQ0FBQ2hLLEdBQUcsRUFBRWlLLEdBQUcsQ0FBQyxJQUFJSixFQUFFLENBQUNLLE9BQU8sRUFBRSxFQUFFO0lBQ25DSCxRQUFBQSxNQUFNLENBQUNJLE1BQU0sQ0FBQ25LLEdBQUcsRUFBRWlLLEdBQUcsQ0FBQztJQUMzQixNQUFBO0lBQ0EsTUFBQSxNQUFNRyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDZixNQUFNLEVBQUU7SUFDNUJqSixRQUFBQSxNQUFNLEVBQUUsTUFBTTtJQUNkaUssUUFBQUEsT0FBTyxFQUFFO0lBQUUsVUFBQSxjQUFjLEVBQUU7YUFBcUM7SUFDaEVDLFFBQUFBLElBQUksRUFBRVI7SUFDVixPQUFDLENBQUM7SUFDRixNQUFBLE1BQU1TLElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUksRUFBRTtVQUM3QixJQUFJRCxJQUFJLENBQUNFLFdBQVcsRUFBRTtJQUNsQjNNLFFBQUFBLE1BQU0sQ0FBQ3dMLFFBQVEsQ0FBQ29CLElBQUksR0FBR0gsSUFBSSxDQUFDRSxXQUFXO0lBQzNDLE1BQUEsQ0FBQyxNQUNJO1lBQ0RFLEtBQUssQ0FBQ0osSUFBSSxDQUFDSyxNQUFNLEVBQUVDLE9BQU8sSUFBSSwyQkFBMkIsQ0FBQztJQUM5RCxNQUFBO1FBQ0osQ0FBQyxDQUNELE9BQU9DLEdBQUcsRUFBRTtJQUNSSCxNQUFBQSxLQUFLLENBQUMsQ0FBQSxRQUFBLEVBQVdHLEdBQUcsQ0FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDbkMsSUFBQSxDQUFDLFNBQ087VUFDSi9CLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDeEIsSUFBQTtNQUNKLENBQUM7SUFDRCxFQUFBLG9CQUFRekssc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRThELE1BQUFBLE9BQU8sRUFBRSxFQUFFO0lBQUVQLE1BQUFBLFNBQVMsRUFBRSxPQUFPO1VBQUVLLGVBQWUsRUFBRXZGLEdBQUMsQ0FBQ0MsTUFBTTtVQUFFd0MsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQUU2RSxNQUFBQSxVQUFVLEVBQUU7SUFBdUI7SUFBRSxHQUFDLGVBQzVKL0Qsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFOEIsSUFBQUEsTUFBTSxFQUFFLE1BQU07SUFBRTJLLElBQUFBLFFBQVEsRUFBRXRCLFlBQVk7SUFBRWxMLElBQUFBLEtBQUssRUFBRTtJQUFFZ0UsTUFBQUEsUUFBUSxFQUFFLEdBQUc7SUFBRXlJLE1BQUFBLE1BQU0sRUFBRTtJQUFTO0lBQUUsR0FBQyxlQUM5RzNNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5TSxNQUFBQSxNQUFNLEVBQUUsU0FBUztJQUFFL0gsTUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFBRUMsTUFBQUEsVUFBVSxFQUFFO0lBQUk7T0FBRyxFQUFFLGlGQUFpRixDQUFDLGVBQzdLN0Usc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlNLE1BQUFBLE1BQU0sRUFBRSxVQUFVO0lBQUUvSCxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDYztJQUFNO09BQUcsRUFBRSwrTkFBK04sQ0FBQyxlQUMxVFcsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVpSixNQUFBQSxtQkFBbUIsRUFBRSxTQUFTO0lBQUVuSSxNQUFBQSxHQUFHLEVBQUUsRUFBRTtJQUFFQyxNQUFBQSxZQUFZLEVBQUU7SUFBRztJQUFFLEdBQUMsZUFDaEgxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMk0sTUFBQUEsVUFBVSxFQUFFO0lBQVM7SUFBRSxHQUFDLGVBQzFEN00sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU0TTtPQUFZLEVBQUUsbUZBQW1GLENBQUMsZUFDeEk5TSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUUyRixJQUFBQSxLQUFLLEVBQUU4QyxLQUFLO1FBQUVyQyxRQUFRLEVBQUVyRCxDQUFDLElBQUk2RyxRQUFRLENBQUM3RyxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQztJQUFFbkQsSUFBQUEsSUFBSSxFQUFFLE9BQU87SUFBRUUsSUFBQUEsV0FBVyxFQUFFLDhGQUE4RjtJQUFFekMsSUFBQUEsS0FBSyxFQUFFNk0sZ0JBQWM7SUFBRWxLLElBQUFBLFFBQVEsRUFBRTtPQUFNLENBQUMsQ0FBQyxlQUMvUDdDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUyTSxNQUFBQSxVQUFVLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDMUQ3TSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSxrREFBa0QsQ0FBQyxlQUN2RzlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7SUFBRTJGLElBQUFBLEtBQUssRUFBRWtFLFdBQVc7UUFBRXpELFFBQVEsRUFBRXJELENBQUMsSUFBSStHLGNBQWMsQ0FBQy9HLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkMsS0FBSyxDQUFDO0lBQUVuRCxJQUFBQSxJQUFJLEVBQUUsYUFBYTtJQUFFRSxJQUFBQSxXQUFXLEVBQUUsd1BBQXdQO0lBQUVtRyxJQUFBQSxJQUFJLEVBQUUsQ0FBQztJQUFFNUksSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNk0sZ0JBQWM7SUFBRWhFLE1BQUFBLE1BQU0sRUFBRTtJQUFXO0lBQUUsR0FBQyxDQUFDLENBQUMsZUFDbGMvSSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksZUFDM0JELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFNE07T0FBWSxFQUFFLHdEQUF3RCxDQUFDLGVBQzdHOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkYsSUFBQUEsS0FBSyxFQUFFb0UsUUFBUTtRQUFFM0QsUUFBUSxFQUFFckQsQ0FBQyxJQUFJaUgsV0FBVyxDQUFDakgsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQyxLQUFLLENBQUM7SUFBRW5ELElBQUFBLElBQUksRUFBRSxVQUFVO0lBQUV2QyxJQUFBQSxLQUFLLEVBQUU2TTtJQUFlLEdBQUMsRUFBRWpILFlBQVUsQ0FBQzRCLEdBQUcsQ0FBQ3NGLENBQUMsa0JBQUtoTixzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUV5QixHQUFHLEVBQUVzTCxDQUFDLENBQUNwSCxLQUFLO1FBQUVBLEtBQUssRUFBRW9ILENBQUMsQ0FBQ3BIO0lBQU0sR0FBQyxFQUFFb0gsQ0FBQyxDQUFDekssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFDN092QyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRVksTUFBQUEsYUFBYSxFQUFFLFFBQVE7SUFBRVYsTUFBQUEsY0FBYyxFQUFFO0lBQVc7SUFBRSxHQUFDLGVBQzFHN0Qsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc0TSxZQUFVO0lBQUVuSixNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUFFYSxNQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFZSxNQUFBQSxNQUFNLEVBQUU7SUFBVTtJQUFFLEdBQUMsZUFDdkh4RixzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsVUFBVTtJQUFFK0QsSUFBQUEsT0FBTyxFQUFFeUQsV0FBVztRQUFFN0QsUUFBUSxFQUFFckQsQ0FBQyxJQUFJbUgsY0FBYyxDQUFDbkgsQ0FBQyxDQUFDQyxNQUFNLENBQUN3RCxPQUFPLENBQUM7SUFBRWhFLElBQUFBLElBQUksRUFBRSx5QkFBeUI7SUFBRXZDLElBQUFBLEtBQUssRUFBRTtVQUFFeUcsV0FBVyxFQUFFcEksR0FBQyxDQUFDTTtJQUFNO0lBQUUsR0FBQyxDQUFDLEVBQzNMLDBKQUEwSixDQUFDLEVBQy9KcUwsV0FBVyxrQkFBS2xLLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV1RixNQUFBQSxTQUFTLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDbEV6RixzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSw2RkFBNkYsQ0FBQyxlQUNsSjlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUVrRCxJQUFBQSxLQUFLLEVBQUV3RSxRQUFRO0lBQUUvRCxJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxSCxXQUFXLENBQUM0QyxNQUFNLENBQUNqSyxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQyxDQUFDO0lBQUVuRCxJQUFBQSxJQUFJLEVBQUUsZ0JBQWdCO0lBQUV5SyxJQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFQyxJQUFBQSxHQUFHLEVBQUUsR0FBRztJQUFFak4sSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNk0sZ0JBQWM7SUFBRXJKLE1BQUFBLEtBQUssRUFBRTtJQUFJO09BQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQ3pOMUQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxHQUFHO1VBQUU3RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNZLEtBQUs7SUFBRXdOLE1BQUFBLE1BQU0sRUFBRTtJQUFXO09BQUcsRUFDdEcsa0ZBQWtGLGVBQ2xGM00sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO1VBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNjLEtBQUs7SUFBRXdGLE1BQUFBLFVBQVUsRUFBRSxHQUFHO0lBQUV1SSxNQUFBQSxVQUFVLEVBQUU7SUFBRTtPQUFHLEVBQ25HLEdBQUcsRUFDSDlDLFFBQVEsQ0FBQ2hKLE1BQU0sRUFDZiw4QkFBOEIsRUFDOUJ1SixZQUFZLEVBQ1osd0NBQXdDLENBQUMsQ0FBQyxlQUNsRDdLLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUVELElBQUFBLElBQUksRUFBRSxlQUFlO0lBQUVtRCxJQUFBQSxLQUFLLEVBQUV5SCxJQUFJLENBQUNDLFNBQVMsQ0FBQ2hELFFBQVE7SUFBRSxHQUFDLENBQUMsRUFDeEdBLFFBQVEsQ0FBQzVDLEdBQUcsQ0FBQyxDQUFDeUIsT0FBTyxFQUFFakMsQ0FBQyxtQkFBTWxILHNCQUFLLENBQUNDLGFBQWEsQ0FBQ2lKLGNBQVksRUFBRTtJQUFFeEgsSUFBQUEsR0FBRyxFQUFFd0YsQ0FBQztJQUFFaUMsSUFBQUEsT0FBTyxFQUFFQSxPQUFPO0lBQUVDLElBQUFBLEtBQUssRUFBRWxDLENBQUM7UUFBRWIsUUFBUSxFQUFFbEcsQ0FBQyxJQUFJd0ssYUFBYSxDQUFDekQsQ0FBQyxFQUFFL0csQ0FBQyxDQUFDO0lBQUVtRyxJQUFBQSxRQUFRLEVBQUVBLE1BQU1zRSxhQUFhLENBQUMxRCxDQUFDO09BQUcsQ0FBQyxDQUFDLENBQUMsZUFDL0tsSCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRWMsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRUMsTUFBQUEsWUFBWSxFQUFFO0lBQUc7SUFBRSxHQUFDLGVBQy9FMUUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRWtFLElBQUFBLE9BQU8sRUFBRThELFVBQVU7SUFBRXhLLElBQUFBLEtBQUssRUFBRXFOO09BQW9CLEVBQUUseUZBQXlGLENBQUMsQ0FBQyxlQUNqTXZOLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUU4SyxJQUFBQSxRQUFRLEVBQUVoRCxVQUFVO0lBQUV0SyxJQUFBQSxLQUFLLEVBQUV1TjtPQUFnQixFQUFFakQsVUFBVSxHQUFHLFdBQVcsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3ZKO0lBQ0EsTUFBTXNDLFlBQVUsR0FBRztJQUNmbkosRUFBQUEsT0FBTyxFQUFFLE9BQU87SUFDaEJpQixFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxFQUFBQSxVQUFVLEVBQUUsR0FBRztNQUNmN0QsS0FBSyxFQUFFekMsR0FBQyxDQUFDYSxLQUFLO0lBQ2RzRixFQUFBQSxZQUFZLEVBQUU7SUFDbEIsQ0FBQztJQUNELE1BQU1xSSxnQkFBYyxHQUFHO0lBQ25CckosRUFBQUEsS0FBSyxFQUFFLE1BQU07SUFDYk0sRUFBQUEsT0FBTyxFQUFFLFVBQVU7TUFDbkJWLFVBQVUsRUFBRS9FLEdBQUMsQ0FBQ0ksT0FBTztNQUNyQnFDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUNkTixFQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFDL0J1RixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaUyxFQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmcEIsRUFBQUEsU0FBUyxFQUFFO0lBQ2YsQ0FBQztJQUNELE1BQU1zSixvQkFBa0IsR0FBRztJQUN2QnZKLEVBQUFBLE9BQU8sRUFBRSxVQUFVO0lBQ25CVixFQUFBQSxVQUFVLEVBQUUsYUFBYTtNQUN6QnRDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1EsSUFBSTtJQUNiSCxFQUFBQSxNQUFNLEVBQUUsQ0FBQSxXQUFBLEVBQWNMLEdBQUMsQ0FBQ1EsSUFBSSxDQUFBLENBQUU7SUFDOUJvRixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaWSxFQUFBQSxNQUFNLEVBQUU7SUFDWixDQUFDO0lBQ0QsTUFBTWlJLGdCQUFjLEdBQUc7SUFDbkJ6SixFQUFBQSxPQUFPLEVBQUUsV0FBVztNQUNwQlYsVUFBVSxFQUFFLDJCQUEyQi9FLEdBQUMsQ0FBQ00sS0FBSyxDQUFBLEVBQUEsRUFBS04sR0FBQyxDQUFDTyxTQUFTLENBQUEsQ0FBQSxDQUFHO0lBQ2pFa0MsRUFBQUEsS0FBSyxFQUFFLE1BQU07SUFDYnBDLEVBQUFBLE1BQU0sRUFBRSxNQUFNO0lBQ2R1RixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxFQUFBQSxVQUFVLEVBQUUsR0FBRztJQUNmVyxFQUFBQSxNQUFNLEVBQUU7SUFDWixDQUFDOztJQ3JSRCxNQUFNakgsR0FBQyxHQUFHO0lBQ05DLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCRSxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFBQUEsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsU0FBUyxFQUFFLFNBQVM7SUFDcEJDLEVBQUFBLElBQUksRUFBRSxTQUFTO0lBQ2ZDLEVBQ0FDLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUU7SUFDWCxDQUFDO0lBQ0QsTUFBTXNHLGFBQWEsR0FBRyxDQUNsQjtJQUFFQyxFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVEsQ0FBQyxFQUNqQztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLE9BQU87SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFRLENBQUMsRUFDbEM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBTyxDQUFDLENBQ25DO0lBQ0QsTUFBTXNELGdCQUFjLEdBQUcsQ0FDbkI7SUFBRUQsRUFBQUEsS0FBSyxFQUFFLFFBQVE7SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFlLENBQUMsRUFDMUM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxVQUFVO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBc0IsQ0FBQyxFQUNuRDtJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFrQixDQUFDLENBQzlDO0lBQ0QsTUFBTXVELFVBQVUsR0FBRyxDQUNmO0lBQUVGLEVBQUFBLEtBQUssRUFBRSxVQUFVO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBVyxDQUFDLEVBQ3hDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVUsQ0FBQyxFQUN0QztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLFFBQVE7SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFTLENBQUMsRUFDcEM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxRQUFRO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBUyxDQUFDLEVBQ3BDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsUUFBUTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQVMsQ0FBQyxFQUNwQztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLE9BQU87SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFTLENBQUMsQ0FDdEM7SUFDRCxNQUFNd0QsWUFBVSxHQUFHO0lBQ2YvQixFQUFBQSxPQUFPLEVBQUUsVUFBVTtNQUNuQlYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDSSxPQUFPO01BQ3JCcUMsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQ2ROLEVBQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUMvQnVGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pTLEVBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZwQixFQUFBQSxTQUFTLEVBQUU7SUFDZixDQUFDO0lBQ0QsTUFBTStCLGFBQVcsR0FBRztJQUNoQmhDLEVBQUFBLE9BQU8sRUFBRSxVQUFVO01BQ25CVixVQUFVLEVBQUUvRSxHQUFDLENBQUNJLE9BQU87TUFDckJxQyxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFDZE4sRUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQy9CdUYsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlMsRUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZkcsRUFBQUEsTUFBTSxFQUFFO0lBQ1osQ0FBQztJQUNELE1BQU1TLFdBQVMsR0FBRztJQUNkM0MsRUFBQUEsVUFBVSxFQUFFLE1BQU07SUFDbEIxRSxFQUFBQSxNQUFNLEVBQUUsTUFBTTtNQUNkb0MsS0FBSyxFQUFFekMsR0FBQyxDQUFDVSxLQUFLO0lBQ2QyRixFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaWSxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQnhCLEVBQUFBLE9BQU8sRUFBRSxTQUFTO0lBQ2xCRyxFQUFBQSxZQUFZLEVBQUU7SUFDbEIsQ0FBQztJQUNELE1BQU0rQixRQUFNLEdBQUc7SUFDWGxDLEVBQUFBLE9BQU8sRUFBRSxVQUFVO0lBQ25CVixFQUFBQSxVQUFVLEVBQUUsYUFBYTtNQUN6QnRDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ00sS0FBSztJQUNkRCxFQUFBQSxNQUFNLEVBQUUsQ0FBQSxXQUFBLEVBQWNMLEdBQUMsQ0FBQ00sS0FBSyxDQUFBLENBQUU7SUFDL0JzRixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaWSxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFBQUEsU0FBUyxFQUFFO0lBQ2YsQ0FBQztJQUNELFNBQVNVLFdBQVNBLENBQUM7TUFBRUMsTUFBTTtNQUFFQyxRQUFRO0lBQUVDLEVBQUFBO0lBQVUsQ0FBQyxFQUFFO0lBQ2hELEVBQUEsb0JBQVF0RyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRUMsTUFBQUEsVUFBVSxFQUFFLFFBQVE7SUFBRWEsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRUMsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQzVHMUUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLE1BQU07SUFBRUMsSUFBQUEsV0FBVyxFQUFFLGlGQUFpRjtRQUFFaUQsS0FBSyxFQUFFUSxNQUFNLENBQUNHLFdBQVc7SUFBRUYsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHRCxNQUFNO0lBQUVHLE1BQUFBLFdBQVcsRUFBRXZELENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkM7SUFBTSxLQUFDLENBQUM7SUFBRTFGLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZGLFlBQVU7SUFBRTFCLE1BQUFBLElBQUksRUFBRTtJQUFFO0lBQUUsR0FBQyxDQUFDLGVBQ2pSckUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO1VBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNhLEtBQUs7SUFBRXVFLE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVlLE1BQUFBLE1BQU0sRUFBRSxTQUFTO0lBQUVnQixNQUFBQSxVQUFVLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDNUp4RyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsVUFBVTtRQUFFK0QsT0FBTyxFQUFFTCxNQUFNLENBQUNNLFVBQVU7SUFBRUwsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHRCxNQUFNO0lBQUVNLE1BQUFBLFVBQVUsRUFBRTFELENBQUMsQ0FBQ0MsTUFBTSxDQUFDd0Q7SUFBUSxLQUFDLENBQUM7SUFBRXZHLElBQUFBLEtBQUssRUFBRTtVQUFFeUcsV0FBVyxFQUFFcEksR0FBQyxDQUFDTTtJQUFNO09BQUcsQ0FBQyxFQUNyTCxnQ0FBZ0MsQ0FBQyxlQUNyQ21CLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRTJHLElBQUFBLE9BQU8sRUFBRU4sUUFBUTtJQUFFcEcsSUFBQUEsS0FBSyxFQUFFK0Y7T0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pGO0lBQ0EsU0FBU1ksYUFBYUEsQ0FBQztNQUFFQyxRQUFRO01BQUVULFFBQVE7SUFBRUMsRUFBQUE7SUFBVSxDQUFDLEVBQUU7TUFDdEQsTUFBTVMsU0FBUyxHQUFHQSxNQUFNO0lBQ3BCVixJQUFBQSxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUdTLFFBQVE7SUFBRUUsTUFBQUEsT0FBTyxFQUFFLENBQUMsR0FBR0YsUUFBUSxDQUFDRSxPQUFPLEVBQUU7SUFBRVQsUUFBQUEsV0FBVyxFQUFFLEVBQUU7SUFBRUcsUUFBQUEsVUFBVSxFQUFFO1dBQU87SUFBRSxLQUFDLENBQUM7TUFDckcsQ0FBQztJQUNELEVBQUEsTUFBTU8sWUFBWSxHQUFHQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsS0FBSztJQUMzQixJQUFBLE1BQU1DLElBQUksR0FBRyxDQUFDLEdBQUdOLFFBQVEsQ0FBQ0UsT0FBTyxDQUFDO0lBQ2xDSSxJQUFBQSxJQUFJLENBQUNGLENBQUMsQ0FBQyxHQUFHQyxDQUFDO0lBQ1hkLElBQUFBLFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBR1MsUUFBUTtJQUFFRSxNQUFBQSxPQUFPLEVBQUVJO0lBQUssS0FBQyxDQUFDO01BQzVDLENBQUM7TUFDRCxNQUFNQyxZQUFZLEdBQUlILENBQUMsSUFBSztJQUN4QmIsSUFBQUEsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHUyxRQUFRO0lBQUVFLE1BQUFBLE9BQU8sRUFBRUYsUUFBUSxDQUFDRSxPQUFPLENBQUNNLE1BQU0sQ0FBQyxDQUFDL0YsQ0FBQyxFQUFFZ0csR0FBRyxLQUFLQSxHQUFHLEtBQUtMLENBQUM7SUFBRSxLQUFDLENBQUM7TUFDdEYsQ0FBQztJQUNELEVBQUEsb0JBQVFsSCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFd0UsTUFBQUEsWUFBWSxFQUFFLEVBQUU7SUFBRVYsTUFBQUEsT0FBTyxFQUFFLEVBQUU7SUFBRVYsTUFBQUEsVUFBVSxFQUFFLFNBQVM7SUFBRTFFLE1BQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUFFdUYsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQ3BKbkUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVDLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUNwRzFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSwyRUFBMkU7UUFBRWlELEtBQUssRUFBRWtCLFFBQVEsQ0FBQ1UsYUFBYTtJQUFFbkIsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHUyxRQUFRO0lBQUVVLE1BQUFBLGFBQWEsRUFBRXhFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkM7SUFBTSxLQUFDLENBQUM7SUFBRTFGLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZGLFlBQVU7SUFBRTFCLE1BQUFBLElBQUksRUFBRTtJQUFFO0lBQUUsR0FBQyxDQUFDLGVBQ25SckUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtRQUFFMkYsS0FBSyxFQUFFa0IsUUFBUSxDQUFDVyxhQUFhO0lBQUVwQixJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUdTLFFBQVE7SUFBRVcsTUFBQUEsYUFBYSxFQUFFekUsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFOEY7SUFBWSxHQUFDLEVBQUVILGdCQUFjLENBQUM2QixHQUFHLENBQUNDLEVBQUUsa0JBQUszSCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUV5QixHQUFHLEVBQUVpRyxFQUFFLENBQUMvQixLQUFLO1FBQUVBLEtBQUssRUFBRStCLEVBQUUsQ0FBQy9CO0lBQU0sR0FBQyxFQUFFK0IsRUFBRSxDQUFDcEYsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQ3RRdkMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkcsSUFBQUEsT0FBTyxFQUFFTixRQUFRO0lBQUVwRyxJQUFBQSxLQUFLLEVBQUUrRjtJQUFVLEdBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUNyRmEsUUFBUSxDQUFDVyxhQUFhLEtBQUssTUFBTSxrQkFBS3pILHNCQUFLLENBQUNDLGFBQWEsQ0FBQ0Qsc0JBQUssQ0FBQzRILFFBQVEsRUFBRSxJQUFJLEVBQzFFZCxRQUFRLENBQUNFLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLENBQUNHLEdBQUcsRUFBRUMsRUFBRSxtQkFBTTlILHNCQUFLLENBQUNDLGFBQWEsQ0FBQ2tHLFdBQVMsRUFBRTtJQUFFekUsSUFBQUEsR0FBRyxFQUFFb0csRUFBRTtJQUFFMUIsSUFBQUEsTUFBTSxFQUFFeUIsR0FBRztRQUFFeEIsUUFBUSxFQUFFYyxDQUFDLElBQUlGLFlBQVksQ0FBQ2EsRUFBRSxFQUFFWCxDQUFDLENBQUM7SUFBRWIsSUFBQUEsUUFBUSxFQUFFQSxNQUFNZSxZQUFZLENBQUNTLEVBQUU7T0FBRyxDQUFDLENBQUMsQ0FBQyxlQUNuSzlILHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUVrRSxJQUFBQSxPQUFPLEVBQUVHLFNBQVM7SUFBRTdHLElBQUFBLEtBQUssRUFBRWdHO0lBQU8sR0FBQyxFQUFFLG1GQUFtRixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hMO0lBQ0EsU0FBUzZCLFNBQVNBLENBQUM7TUFBRUMsTUFBTTtNQUFFM0IsUUFBUTtJQUFFQyxFQUFBQTtJQUFVLENBQUMsRUFBRTtNQUNoRCxNQUFNMkIsV0FBVyxHQUFHQSxNQUFNO0lBQ3RCNUIsSUFBQUEsUUFBUSxDQUFDO0lBQ0wsTUFBQSxHQUFHMkIsTUFBTTtVQUNURSxTQUFTLEVBQUUsQ0FBQyxJQUFJRixNQUFNLENBQUNFLFNBQVMsSUFBSSxFQUFFLENBQUMsRUFBRTtJQUFFVixRQUFBQSxhQUFhLEVBQUUsRUFBRTtJQUFFQyxRQUFBQSxhQUFhLEVBQUUsUUFBUTtJQUFFVCxRQUFBQSxPQUFPLEVBQUUsQ0FBQztJQUFFVCxVQUFBQSxXQUFXLEVBQUUsRUFBRTtJQUFFRyxVQUFBQSxVQUFVLEVBQUU7YUFBTztXQUFHO0lBQzlJLEtBQUMsQ0FBQztNQUNOLENBQUM7SUFDRCxFQUFBLE1BQU15QixjQUFjLEdBQUdBLENBQUNqQixDQUFDLEVBQUVrQixDQUFDLEtBQUs7UUFDN0IsTUFBTWhCLElBQUksR0FBRyxDQUFDLElBQUlZLE1BQU0sQ0FBQ0UsU0FBUyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFDZCxJQUFBQSxJQUFJLENBQUNGLENBQUMsQ0FBQyxHQUFHa0IsQ0FBQztJQUNYL0IsSUFBQUEsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHMkIsTUFBTTtJQUFFRSxNQUFBQSxTQUFTLEVBQUVkO0lBQUssS0FBQyxDQUFDO01BQzVDLENBQUM7TUFDRCxNQUFNaUIsY0FBYyxHQUFJbkIsQ0FBQyxJQUFLO0lBQzFCYixJQUFBQSxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUcyQixNQUFNO0lBQUVFLE1BQUFBLFNBQVMsRUFBRSxDQUFDRixNQUFNLENBQUNFLFNBQVMsSUFBSSxFQUFFLEVBQUVaLE1BQU0sQ0FBQyxDQUFDL0YsQ0FBQyxFQUFFZ0csR0FBRyxLQUFLQSxHQUFHLEtBQUtMLENBQUM7SUFBRSxLQUFDLENBQUM7TUFDOUYsQ0FBQztJQUNELEVBQUEsTUFBTW9CLE1BQU0sR0FBR04sTUFBTSxDQUFDTyxZQUFZLEtBQUssTUFBTTtJQUM3QyxFQUFBLE1BQU1DLE9BQU8sR0FBR1IsTUFBTSxDQUFDTyxZQUFZLEtBQUssT0FBTztJQUMvQyxFQUFBLE1BQU1FLE1BQU0sR0FBR1QsTUFBTSxDQUFDTyxZQUFZLEtBQUssTUFBTTtJQUM3QyxFQUFBLG9CQUFRdkksc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXdFLE1BQUFBLFlBQVksRUFBRSxDQUFDO0lBQUVWLE1BQUFBLE9BQU8sRUFBRSxXQUFXO1VBQUVWLFVBQVUsRUFBRS9FLEdBQUMsQ0FBQ0csTUFBTTtJQUFFRSxNQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFBRXVGLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUMzSm5FLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5RCxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUFFYSxNQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFQyxNQUFBQSxZQUFZLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDcEcxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsTUFBTTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsaUZBQWlGO1FBQUVpRCxLQUFLLEVBQUVvQyxNQUFNLENBQUNVLEtBQUs7SUFBRXJDLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzJCLE1BQU07SUFBRVUsTUFBQUEsS0FBSyxFQUFFMUYsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFMUIsTUFBQUEsSUFBSSxFQUFFO0lBQUU7SUFBRSxHQUFDLENBQUMsZUFDclFyRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUUyRixLQUFLLEVBQUVvQyxNQUFNLENBQUNPLFlBQVk7SUFBRWxDLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzJCLE1BQU07SUFBRU8sTUFBQUEsWUFBWSxFQUFFdkYsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFOEY7SUFBWSxHQUFDLEVBQUVMLGFBQWEsQ0FBQytCLEdBQUcsQ0FBQ2lCLEVBQUUsa0JBQUszSSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUV5QixHQUFHLEVBQUVpSCxFQUFFLENBQUMvQyxLQUFLO1FBQUVBLEtBQUssRUFBRStDLEVBQUUsQ0FBQy9DO0lBQU0sR0FBQyxFQUFFK0MsRUFBRSxDQUFDcEcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQy9QdkMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkcsSUFBQUEsT0FBTyxFQUFFTixRQUFRO0lBQUVwRyxJQUFBQSxLQUFLLEVBQUUrRjtJQUFVLEdBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUNyRnVDLE9BQU8sa0JBQUt4SSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsTUFBTTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsd0dBQXdHO0lBQUVpRCxJQUFBQSxLQUFLLEVBQUVvQyxNQUFNLENBQUNZLFNBQVMsSUFBSSxFQUFFO0lBQUV2QyxJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUcyQixNQUFNO0lBQUVZLE1BQUFBLFNBQVMsRUFBRTVGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkM7SUFBTSxLQUFDLENBQUM7SUFBRTFGLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZGLFlBQVU7SUFBRXJDLE1BQUFBLEtBQUssRUFBRTtJQUFPO09BQUcsQ0FBQyxDQUFDLEVBQzdUK0UsTUFBTSxrQkFBS3pJLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxVQUFVLEVBQUU7SUFBRTBDLElBQUFBLFdBQVcsRUFBRSxvSkFBb0o7SUFBRWlELElBQUFBLEtBQUssRUFBRW9DLE1BQU0sQ0FBQ2EsWUFBWSxJQUFJLEVBQUU7SUFBRXhDLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzJCLE1BQU07SUFBRWEsTUFBQUEsWUFBWSxFQUFFN0YsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFa0QsSUFBQUEsSUFBSSxFQUFFLENBQUM7SUFBRTVJLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZGLFlBQVU7SUFBRXJDLE1BQUFBLEtBQUssRUFBRSxNQUFNO0lBQUVxRixNQUFBQSxNQUFNLEVBQUU7SUFBVztPQUFHLENBQUMsQ0FBQyxFQUNoWVQsTUFBTSxrQkFBS3RJLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV1RixNQUFBQSxTQUFTLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDN0R6RixzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsTUFBTTtJQUFFQyxJQUFBQSxXQUFXLEVBQUUsaUZBQWlGO0lBQUVpRCxJQUFBQSxLQUFLLEVBQUVvQyxNQUFNLENBQUNnQixVQUFVLElBQUksRUFBRTtJQUFFM0MsSUFBQUEsUUFBUSxFQUFFckQsQ0FBQyxJQUFJcUQsUUFBUSxDQUFDO0lBQUUsTUFBQSxHQUFHMkIsTUFBTTtJQUFFZ0IsTUFBQUEsVUFBVSxFQUFFaEcsQ0FBQyxDQUFDQyxNQUFNLENBQUMyQztJQUFNLEtBQUMsQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFckMsTUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRWdCLE1BQUFBLFlBQVksRUFBRTtJQUFFO09BQUcsQ0FBQyxFQUM1UyxDQUFDc0QsTUFBTSxDQUFDRSxTQUFTLElBQUksRUFBRSxFQUFFUixHQUFHLENBQUMsQ0FBQ1UsQ0FBQyxFQUFFYSxFQUFFLG1CQUFNakosc0JBQUssQ0FBQ0MsYUFBYSxDQUFDNEcsYUFBYSxFQUFFO0lBQUVuRixJQUFBQSxHQUFHLEVBQUV1SCxFQUFFO0lBQUVuQyxJQUFBQSxRQUFRLEVBQUVzQixDQUFDO1FBQUUvQixRQUFRLEVBQUVjLENBQUMsSUFBSWdCLGNBQWMsQ0FBQ2MsRUFBRSxFQUFFOUIsQ0FBQyxDQUFDO0lBQUViLElBQUFBLFFBQVEsRUFBRUEsTUFBTStCLGNBQWMsQ0FBQ1ksRUFBRTtPQUFHLENBQUMsQ0FBQyxDQUFDLGVBQ2pMakosc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRWtFLElBQUFBLE9BQU8sRUFBRXFCLFdBQVc7SUFBRS9ILElBQUFBLEtBQUssRUFBRWdHO0lBQU8sR0FBQyxFQUFFLHdDQUF3QyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9JO0lBQ0EsU0FBU2dELGNBQVlBLENBQUM7TUFBRUMsT0FBTztNQUFFQyxLQUFLO01BQUUvQyxRQUFRO0lBQUVDLEVBQUFBO0lBQVUsQ0FBQyxFQUFFO01BQzNELE1BQU0rQyxTQUFTLEdBQUdBLE1BQU07SUFDcEJoRCxJQUFBQSxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUc4QyxPQUFPO0lBQUVHLE1BQUFBLE9BQU8sRUFBRSxDQUFDLEdBQUdILE9BQU8sQ0FBQ0csT0FBTyxFQUFFO0lBQUVaLFFBQUFBLEtBQUssRUFBRSxFQUFFO0lBQUVILFFBQUFBLFlBQVksRUFBRTtXQUFRO0lBQUUsS0FBQyxDQUFDO01BQ2hHLENBQUM7SUFDRCxFQUFBLE1BQU1nQixZQUFZLEdBQUdBLENBQUNDLEVBQUUsRUFBRXhCLE1BQU0sS0FBSztJQUNqQyxJQUFBLE1BQU1aLElBQUksR0FBRyxDQUFDLEdBQUcrQixPQUFPLENBQUNHLE9BQU8sQ0FBQztJQUNqQ2xDLElBQUFBLElBQUksQ0FBQ29DLEVBQUUsQ0FBQyxHQUFHeEIsTUFBTTtJQUNqQjNCLElBQUFBLFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzhDLE9BQU87SUFBRUcsTUFBQUEsT0FBTyxFQUFFbEM7SUFBSyxLQUFDLENBQUM7TUFDM0MsQ0FBQztNQUNELE1BQU1xQyxZQUFZLEdBQUlELEVBQUUsSUFBSztJQUN6Qm5ELElBQUFBLFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBRzhDLE9BQU87SUFBRUcsTUFBQUEsT0FBTyxFQUFFSCxPQUFPLENBQUNHLE9BQU8sQ0FBQ2hDLE1BQU0sQ0FBQyxDQUFDL0YsQ0FBQyxFQUFFMkYsQ0FBQyxLQUFLQSxDQUFDLEtBQUtzQyxFQUFFO0lBQUUsS0FBQyxDQUFDO01BQ2pGLENBQUM7SUFDRCxFQUFBLG9CQUFReEosc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXdFLE1BQUFBLFlBQVksRUFBRSxFQUFFO0lBQUVWLE1BQUFBLE9BQU8sRUFBRSxFQUFFO1VBQUVWLFVBQVUsRUFBRS9FLEdBQUMsQ0FBQ0csTUFBTTtJQUFFRSxNQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFBRXVGLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUNuSm5FLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5RCxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUFFYSxNQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFQyxNQUFBQSxZQUFZLEVBQUU7SUFBRztJQUFFLEdBQUMsZUFDckcxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMEUsTUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFBRUMsTUFBQUEsVUFBVSxFQUFFLEdBQUc7VUFBRTdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1E7SUFBSztJQUFFLEdBQUMsRUFDbkYsdUNBQXVDLEVBQ3ZDcUssS0FBSyxHQUFHLENBQUMsQ0FBQyxlQUNkcEosc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLE1BQU07SUFBRUMsSUFBQUEsV0FBVyxFQUFFLDZGQUE2RjtRQUFFaUQsS0FBSyxFQUFFdUQsT0FBTyxDQUFDVCxLQUFLO0lBQUVyQyxJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUlxRCxRQUFRLENBQUM7SUFBRSxNQUFBLEdBQUc4QyxPQUFPO0lBQUVULE1BQUFBLEtBQUssRUFBRTFGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkM7SUFBTSxLQUFDLENBQUM7SUFBRTFGLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzZGLFlBQVU7SUFBRTFCLE1BQUFBLElBQUksRUFBRTtJQUFFO0lBQUUsR0FBQyxDQUFDLGVBQ25SckUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkcsSUFBQUEsT0FBTyxFQUFFTixRQUFRO0lBQUVwRyxJQUFBQSxLQUFLLEVBQUUrRjtPQUFXLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFDckZrRCxPQUFPLENBQUNHLE9BQU8sQ0FBQzVCLEdBQUcsQ0FBQyxDQUFDTSxNQUFNLEVBQUV3QixFQUFFLG1CQUFNeEosc0JBQUssQ0FBQ0MsYUFBYSxDQUFDOEgsU0FBUyxFQUFFO0lBQUVyRyxJQUFBQSxHQUFHLEVBQUU4SCxFQUFFO0lBQUV4QixJQUFBQSxNQUFNLEVBQUVBLE1BQU07UUFBRTNCLFFBQVEsRUFBRXFELENBQUMsSUFBSUgsWUFBWSxDQUFDQyxFQUFFLEVBQUVFLENBQUMsQ0FBQztJQUFFcEQsSUFBQUEsUUFBUSxFQUFFQSxNQUFNbUQsWUFBWSxDQUFDRCxFQUFFO09BQUcsQ0FBQyxDQUFDLENBQUMsZUFDeEt4SixzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtJQUFFa0UsSUFBQUEsT0FBTyxFQUFFeUMsU0FBUztJQUFFbkosSUFBQUEsS0FBSyxFQUFFZ0c7T0FBUSxFQUFFLDRCQUE0QixDQUFDLENBQUM7SUFDM0g7SUFDZSxTQUFTd0gsVUFBVUEsQ0FBQzlELEtBQUssRUFBRTtNQUN0QyxNQUFNK0QsTUFBTSxHQUFHL0QsS0FBSyxDQUFDK0QsTUFBTSxFQUFFbEMsTUFBTSxJQUFJLEVBQUU7SUFDekMsRUFBQSxNQUFNbUMsUUFBUSxHQUFHRCxNQUFNLENBQUNuTCxFQUFFO01BQzFCLE1BQU1xTCxlQUFlLEdBQUcsQ0FBQyxNQUFNO1FBQzNCLElBQUk7SUFDQSxNQUFBLE9BQU9GLE1BQU0sQ0FBQ0csZ0JBQWdCLEdBQUdULElBQUksQ0FBQ1UsS0FBSyxDQUFDSixNQUFNLENBQUNHLGdCQUFnQixDQUFDLEdBQUcsRUFBRTtJQUM3RSxJQUFBLENBQUMsQ0FDRCxNQUFNO0lBQ0YsTUFBQSxPQUFPLEVBQUU7SUFDYixJQUFBO0lBQ0osRUFBQSxDQUFDLEdBQUc7SUFDSixFQUFBLE1BQU0sQ0FBQ3BGLEtBQUssRUFBRW1CLFFBQVEsQ0FBQyxHQUFHOUosY0FBUSxDQUFDNE4sTUFBTSxDQUFDakYsS0FBSyxJQUFJLEVBQUUsQ0FBQztJQUN0RCxFQUFBLE1BQU0sQ0FBQ29CLFdBQVcsRUFBRUMsY0FBYyxDQUFDLEdBQUdoSyxjQUFRLENBQUM0TixNQUFNLENBQUM3RCxXQUFXLElBQUksRUFBRSxDQUFDO0lBQ3hFLEVBQUEsTUFBTSxDQUFDRSxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHbEssY0FBUSxDQUFDNE4sTUFBTSxDQUFDM0QsUUFBUSxJQUFJLFVBQVUsQ0FBQztJQUN2RSxFQUFBLE1BQU0sQ0FBQ0UsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBR3BLLGNBQVEsQ0FBQzROLE1BQU0sQ0FBQ0ssdUJBQXVCLEtBQUssSUFBSSxJQUFJTCxNQUFNLENBQUNLLHVCQUF1QixLQUFLLE1BQU0sQ0FBQztJQUNwSSxFQUFBLE1BQU0sQ0FBQzVELFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd0SyxjQUFRLENBQUNrTixNQUFNLENBQUNVLE1BQU0sQ0FBQ00sY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDO01BQzdFLE1BQU0sQ0FBQzNELFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUd4SyxjQUFRLENBQUM4TixlQUFlLENBQUM7TUFDekQsTUFBTSxDQUFDckQsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzFLLGNBQVEsQ0FBQyxLQUFLLENBQUM7SUFDbkQsRUFBQSxNQUFNaUwsTUFBTSxHQUFHdkwsTUFBTSxDQUFDd0wsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQztNQUNwRixNQUFNVCxVQUFVLEdBQUdBLE1BQU07SUFDckJILElBQUFBLFdBQVcsQ0FBQyxDQUFDLEdBQUdELFFBQVEsRUFBRTtJQUFFNUIsTUFBQUEsS0FBSyxFQUFFLEVBQUU7SUFBRVksTUFBQUEsT0FBTyxFQUFFLENBQUM7SUFBRVosUUFBQUEsS0FBSyxFQUFFLEVBQUU7SUFBRUgsUUFBQUEsWUFBWSxFQUFFO1dBQVE7SUFBRSxLQUFDLENBQUMsQ0FBQztNQUM3RixDQUFDO0lBQ0QsRUFBQSxNQUFNb0MsYUFBYSxHQUFHQSxDQUFDekQsQ0FBQyxFQUFFaUMsT0FBTyxLQUFLO0lBQ2xDLElBQUEsTUFBTS9CLElBQUksR0FBRyxDQUFDLEdBQUdrRCxRQUFRLENBQUM7SUFDMUJsRCxJQUFBQSxJQUFJLENBQUNGLENBQUMsQ0FBQyxHQUFHaUMsT0FBTztRQUNqQm9CLFdBQVcsQ0FBQ25ELElBQUksQ0FBQztNQUNyQixDQUFDO01BQ0QsTUFBTXdELGFBQWEsR0FBSTFELENBQUMsSUFBSztJQUN6QnFELElBQUFBLFdBQVcsQ0FBQ0QsUUFBUSxDQUFDaEQsTUFBTSxDQUFDLENBQUMvRixDQUFDLEVBQUVnRyxHQUFHLEtBQUtBLEdBQUcsS0FBS0wsQ0FBQyxDQUFDLENBQUM7TUFDdkQsQ0FBQztNQUNELE1BQU0yRCxZQUFZLEdBQUdQLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDLENBQUMzSyxDQUFDLEVBQUU0SyxHQUFHLEtBQUs1SyxDQUFDLEdBQUc0SyxHQUFHLENBQUN6QixPQUFPLENBQUNoSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLEVBQUEsTUFBTThKLFlBQVksR0FBRyxNQUFPcEksQ0FBQyxJQUFLO1FBQzlCQSxDQUFDLENBQUNxSSxjQUFjLEVBQUU7UUFDbEJaLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkIsSUFBSTtJQUNBLE1BQUEsTUFBTWEsSUFBSSxHQUFHdEksQ0FBQyxDQUFDQyxNQUFNO0lBQ3JCLE1BQUEsTUFBTXNJLEVBQUUsR0FBRyxJQUFJQyxRQUFRLENBQUNGLElBQUksQ0FBQztJQUM3QixNQUFBLE1BQU1HLE1BQU0sR0FBRyxJQUFJQyxlQUFlLEVBQUU7SUFDcEMsTUFBQSxLQUFLLE1BQU0sQ0FBQ2hLLEdBQUcsRUFBRWlLLEdBQUcsQ0FBQyxJQUFJSixFQUFFLENBQUNLLE9BQU8sRUFBRSxFQUFFO0lBQ25DSCxRQUFBQSxNQUFNLENBQUNJLE1BQU0sQ0FBQ25LLEdBQUcsRUFBRWlLLEdBQUcsQ0FBQztJQUMzQixNQUFBO0lBQ0EsTUFBQSxNQUFNRyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDZixNQUFNLEVBQUU7SUFDNUJqSixRQUFBQSxNQUFNLEVBQUUsTUFBTTtJQUNkaUssUUFBQUEsT0FBTyxFQUFFO0lBQUUsVUFBQSxjQUFjLEVBQUU7YUFBcUM7SUFDaEVDLFFBQUFBLElBQUksRUFBRVI7SUFDVixPQUFDLENBQUM7SUFDRixNQUFBLE1BQU1TLElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUksRUFBRTtVQUM3QixJQUFJRCxJQUFJLENBQUNFLFdBQVcsRUFBRTtJQUNsQjNNLFFBQUFBLE1BQU0sQ0FBQ3dMLFFBQVEsQ0FBQ29CLElBQUksR0FBR0gsSUFBSSxDQUFDRSxXQUFXO0lBQzNDLE1BQUEsQ0FBQyxNQUNJO1lBQ0RFLEtBQUssQ0FBQ0osSUFBSSxDQUFDSyxNQUFNLEVBQUVDLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQztJQUNoRSxNQUFBO1FBQ0osQ0FBQyxDQUNELE9BQU9DLEdBQUcsRUFBRTtJQUNSSCxNQUFBQSxLQUFLLENBQUMsQ0FBQSxRQUFBLEVBQVdHLEdBQUcsQ0FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDbkMsSUFBQSxDQUFDLFNBQ087VUFDSi9CLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDeEIsSUFBQTtNQUNKLENBQUM7SUFDRCxFQUFBLG9CQUFRekssc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRThELE1BQUFBLE9BQU8sRUFBRSxFQUFFO0lBQUVQLE1BQUFBLFNBQVMsRUFBRSxPQUFPO1VBQUVLLGVBQWUsRUFBRXZGLEdBQUMsQ0FBQ0MsTUFBTTtVQUFFd0MsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQUU2RSxNQUFBQSxVQUFVLEVBQUU7SUFBdUI7SUFBRSxHQUFDLGVBQzVKL0Qsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFOEIsSUFBQUEsTUFBTSxFQUFFLE1BQU07SUFBRTJLLElBQUFBLFFBQVEsRUFBRXRCLFlBQVk7SUFBRWxMLElBQUFBLEtBQUssRUFBRTtJQUFFZ0UsTUFBQUEsUUFBUSxFQUFFLEdBQUc7SUFBRXlJLE1BQUFBLE1BQU0sRUFBRTtJQUFTO0lBQUUsR0FBQyxlQUM5RzNNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5TSxNQUFBQSxNQUFNLEVBQUUsU0FBUztJQUFFL0gsTUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFBRUMsTUFBQUEsVUFBVSxFQUFFO0lBQUk7T0FBRyxFQUFFLHFIQUFxSCxDQUFDLGVBQ2pON0Usc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlNLE1BQUFBLE1BQU0sRUFBRSxVQUFVO0lBQUUvSCxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDYztJQUFNO0lBQUUsR0FBQyxFQUNwRixNQUFNLEVBQ051TyxRQUFRLEVBQ1IsaU9BQWlPLENBQUMsZUFDdE81TixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRWlKLE1BQUFBLG1CQUFtQixFQUFFLFNBQVM7SUFBRW5JLE1BQUFBLEdBQUcsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLFlBQVksRUFBRTtJQUFHO0lBQUUsR0FBQyxlQUNoSDFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUyTSxNQUFBQSxVQUFVLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDMUQ3TSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSxtRkFBbUYsQ0FBQyxlQUN4STlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRTJGLElBQUFBLEtBQUssRUFBRThDLEtBQUs7UUFBRXJDLFFBQVEsRUFBRXJELENBQUMsSUFBSTZHLFFBQVEsQ0FBQzdHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkMsS0FBSyxDQUFDO0lBQUVuRCxJQUFBQSxJQUFJLEVBQUUsT0FBTztJQUFFRSxJQUFBQSxXQUFXLEVBQUUsOEZBQThGO0lBQUV6QyxJQUFBQSxLQUFLLEVBQUU2TSxnQkFBYztJQUFFbEssSUFBQUEsUUFBUSxFQUFFO09BQU0sQ0FBQyxDQUFDLGVBQy9QN0Msc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTJNLE1BQUFBLFVBQVUsRUFBRTtJQUFTO0lBQUUsR0FBQyxlQUMxRDdNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFNE07T0FBWSxFQUFFLGtEQUFrRCxDQUFDLGVBQ3ZHOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsRUFBRTtJQUFFMkYsSUFBQUEsS0FBSyxFQUFFa0UsV0FBVztRQUFFekQsUUFBUSxFQUFFckQsQ0FBQyxJQUFJK0csY0FBYyxDQUFDL0csQ0FBQyxDQUFDQyxNQUFNLENBQUMyQyxLQUFLLENBQUM7SUFBRW5ELElBQUFBLElBQUksRUFBRSxhQUFhO0lBQUVFLElBQUFBLFdBQVcsRUFBRSx3UEFBd1A7SUFBRW1HLElBQUFBLElBQUksRUFBRSxDQUFDO0lBQUU1SSxJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc2TSxnQkFBYztJQUFFaEUsTUFBQUEsTUFBTSxFQUFFO0lBQVc7SUFBRSxHQUFDLENBQUMsQ0FBQyxlQUNsYy9JLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxlQUMzQkQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU0TTtPQUFZLEVBQUUsd0RBQXdELENBQUMsZUFDN0c5TSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRixJQUFBQSxLQUFLLEVBQUVvRSxRQUFRO1FBQUUzRCxRQUFRLEVBQUVyRCxDQUFDLElBQUlpSCxXQUFXLENBQUNqSCxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQztJQUFFbkQsSUFBQUEsSUFBSSxFQUFFLFVBQVU7SUFBRXZDLElBQUFBLEtBQUssRUFBRTZNO0lBQWUsR0FBQyxFQUFFakgsVUFBVSxDQUFDNEIsR0FBRyxDQUFDc0YsQ0FBQyxrQkFBS2hOLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFBRXlCLEdBQUcsRUFBRXNMLENBQUMsQ0FBQ3BILEtBQUs7UUFBRUEsS0FBSyxFQUFFb0gsQ0FBQyxDQUFDcEg7SUFBTSxHQUFDLEVBQUVvSCxDQUFDLENBQUN6SyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUM3T3ZDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5RCxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFWSxNQUFBQSxhQUFhLEVBQUUsUUFBUTtJQUFFVixNQUFBQSxjQUFjLEVBQUU7SUFBVztJQUFFLEdBQUMsZUFDMUc3RCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFLE1BQUEsR0FBRzRNLFlBQVU7SUFBRW5KLE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVlLE1BQUFBLE1BQU0sRUFBRTtJQUFVO0lBQUUsR0FBQyxlQUN2SHhGLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxVQUFVO0lBQUUrRCxJQUFBQSxPQUFPLEVBQUV5RCxXQUFXO1FBQUU3RCxRQUFRLEVBQUVyRCxDQUFDLElBQUltSCxjQUFjLENBQUNuSCxDQUFDLENBQUNDLE1BQU0sQ0FBQ3dELE9BQU8sQ0FBQztJQUFFaEUsSUFBQUEsSUFBSSxFQUFFLHlCQUF5QjtJQUFFdkMsSUFBQUEsS0FBSyxFQUFFO1VBQUV5RyxXQUFXLEVBQUVwSSxHQUFDLENBQUNNO0lBQU07SUFBRSxHQUFDLENBQUMsRUFDM0wsMEpBQTBKLENBQUMsRUFDL0pxTCxXQUFXLGtCQUFLbEssc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXVGLE1BQUFBLFNBQVMsRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUNsRXpGLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFNE07T0FBWSxFQUFFLDZGQUE2RixDQUFDLGVBQ2xKOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRWtELElBQUFBLEtBQUssRUFBRXdFLFFBQVE7SUFBRS9ELElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFILFdBQVcsQ0FBQzRDLE1BQU0sQ0FBQ2pLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkMsS0FBSyxDQUFDLENBQUM7SUFBRW5ELElBQUFBLElBQUksRUFBRSxnQkFBZ0I7SUFBRXlLLElBQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVDLElBQUFBLEdBQUcsRUFBRSxHQUFHO0lBQUVqTixJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc2TSxnQkFBYztJQUFFckosTUFBQUEsS0FBSyxFQUFFO0lBQUk7T0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFDek4xRCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMEUsTUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFBRUMsTUFBQUEsVUFBVSxFQUFFLEdBQUc7VUFBRTdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1ksS0FBSztJQUFFd04sTUFBQUEsTUFBTSxFQUFFO0lBQVc7T0FBRyxFQUN0RyxrRkFBa0YsZUFDbEYzTSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMEUsTUFBQUEsUUFBUSxFQUFFLEVBQUU7VUFBRTVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2MsS0FBSztJQUFFd0YsTUFBQUEsVUFBVSxFQUFFLEdBQUc7SUFBRXVJLE1BQUFBLFVBQVUsRUFBRTtJQUFFO09BQUcsRUFDbkcsR0FBRyxFQUNIOUMsUUFBUSxDQUFDaEosTUFBTSxFQUNmLDhCQUE4QixFQUM5QnVKLFlBQVksRUFDWix3Q0FBd0MsQ0FBQyxDQUFDLGVBQ2xEN0ssc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRUQsSUFBQUEsSUFBSSxFQUFFLGVBQWU7SUFBRW1ELElBQUFBLEtBQUssRUFBRXlILElBQUksQ0FBQ0MsU0FBUyxDQUFDaEQsUUFBUTtJQUFFLEdBQUMsQ0FBQyxFQUN4R0EsUUFBUSxDQUFDNUMsR0FBRyxDQUFDLENBQUN5QixPQUFPLEVBQUVqQyxDQUFDLG1CQUFNbEgsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDaUosY0FBWSxFQUFFO0lBQUV4SCxJQUFBQSxHQUFHLEVBQUV3RixDQUFDO0lBQUVpQyxJQUFBQSxPQUFPLEVBQUVBLE9BQU87SUFBRUMsSUFBQUEsS0FBSyxFQUFFbEMsQ0FBQztRQUFFYixRQUFRLEVBQUVsRyxDQUFDLElBQUl3SyxhQUFhLENBQUN6RCxDQUFDLEVBQUUvRyxDQUFDLENBQUM7SUFBRW1HLElBQUFBLFFBQVEsRUFBRUEsTUFBTXNFLGFBQWEsQ0FBQzFELENBQUM7T0FBRyxDQUFDLENBQUMsQ0FBQyxlQUMvS2xILHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5RCxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFYyxNQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFQyxNQUFBQSxZQUFZLEVBQUU7SUFBRztJQUFFLEdBQUMsZUFDL0UxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtJQUFFa0UsSUFBQUEsT0FBTyxFQUFFOEQsVUFBVTtJQUFFeEssSUFBQUEsS0FBSyxFQUFFcU47T0FBb0IsRUFBRSx5RkFBeUYsQ0FBQyxDQUFDLGVBQ2pNdk4sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRThLLElBQUFBLFFBQVEsRUFBRWhELFVBQVU7SUFBRXRLLElBQUFBLEtBQUssRUFBRXVOO09BQWdCLEVBQUVqRCxVQUFVLEdBQUcsYUFBYSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQztJQUMzSjtJQUNBLE1BQU1zQyxZQUFVLEdBQUc7SUFDZm5KLEVBQUFBLE9BQU8sRUFBRSxPQUFPO0lBQ2hCaUIsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsRUFBQUEsVUFBVSxFQUFFLEdBQUc7TUFDZjdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2EsS0FBSztJQUNkc0YsRUFBQUEsWUFBWSxFQUFFO0lBQ2xCLENBQUM7SUFDRCxNQUFNcUksZ0JBQWMsR0FBRztJQUNuQnJKLEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQ2JNLEVBQUFBLE9BQU8sRUFBRSxVQUFVO01BQ25CVixVQUFVLEVBQUUvRSxHQUFDLENBQUNJLE9BQU87TUFDckJxQyxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFDZE4sRUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQy9CdUYsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlMsRUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZnBCLEVBQUFBLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFDRCxNQUFNc0osa0JBQWtCLEdBQUc7SUFDdkJ2SixFQUFBQSxPQUFPLEVBQUUsVUFBVTtJQUNuQlYsRUFBQUEsVUFBVSxFQUFFLGFBQWE7TUFDekJ0QyxLQUFLLEVBQUV6QyxHQUFDLENBQUNRLElBQUk7SUFDYkgsRUFBQUEsTUFBTSxFQUFFLENBQUEsV0FBQSxFQUFjTCxHQUFDLENBQUNRLElBQUksQ0FBQSxDQUFFO0lBQzlCb0YsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlksRUFBQUEsTUFBTSxFQUFFO0lBQ1osQ0FBQztJQUNELE1BQU1pSSxnQkFBYyxHQUFHO0lBQ25CekosRUFBQUEsT0FBTyxFQUFFLFdBQVc7TUFDcEJWLFVBQVUsRUFBRSwyQkFBMkIvRSxHQUFDLENBQUNNLEtBQUssQ0FBQSxFQUFBLEVBQUtOLEdBQUMsQ0FBQ08sU0FBUyxDQUFBLENBQUEsQ0FBRztJQUNqRWtDLEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQ2JwQyxFQUFBQSxNQUFNLEVBQUUsTUFBTTtJQUNkdUYsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsRUFBQUEsVUFBVSxFQUFFLEdBQUc7SUFDZlcsRUFBQUEsTUFBTSxFQUFFO0lBQ1osQ0FBQzs7SUNoU0QsTUFBTWpILEdBQUMsR0FBRztJQUNOQyxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkUsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLFNBQVMsRUFBRSxTQUFTO0lBQ3BCQyxFQUFBQSxJQUFJLEVBQUUsU0FBUztJQUNmQyxFQUNBQyxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFO0lBQ1gsQ0FBQztJQUNELE1BQU13RyxjQUFjLEdBQUcsQ0FDbkI7SUFBRUQsRUFBQUEsS0FBSyxFQUFFLFFBQVE7SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFlLENBQUMsRUFDMUM7SUFBRXFELEVBQUFBLEtBQUssRUFBRSxVQUFVO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBc0IsQ0FBQyxFQUNuRDtJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFrQixDQUFDLENBQzlDO0lBQ0QsTUFBTXdELFlBQVUsR0FBRztJQUNmL0IsRUFBQUEsT0FBTyxFQUFFLFVBQVU7TUFDbkJWLFVBQVUsRUFBRS9FLEdBQUMsQ0FBQ0ksT0FBTztNQUNyQnFDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUNkTixFQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFDL0J1RixFQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaUyxFQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUNmcEIsRUFBQUEsU0FBUyxFQUFFO0lBQ2YsQ0FBQztJQUNELE1BQU0rQixXQUFXLEdBQUc7SUFDaEJoQyxFQUFBQSxPQUFPLEVBQUUsVUFBVTtNQUNuQlYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDSSxPQUFPO01BQ3JCcUMsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQ2ROLEVBQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUMvQnVGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pTLEVBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZHLEVBQUFBLE1BQU0sRUFBRTtJQUNaLENBQUM7SUFDRCxNQUFNUyxTQUFTLEdBQUc7SUFDZDNDLEVBQUFBLFVBQVUsRUFBRSxNQUFNO0lBQ2xCMUUsRUFBQUEsTUFBTSxFQUFFLE1BQU07TUFDZG9DLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1UsS0FBSztJQUNkMkYsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlksRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJ4QixFQUFBQSxPQUFPLEVBQUUsU0FBUztJQUNsQkcsRUFBQUEsWUFBWSxFQUFFO0lBQ2xCLENBQUM7SUFDRCxNQUFNK0IsTUFBTSxHQUFHO0lBQ1hsQyxFQUFBQSxPQUFPLEVBQUUsVUFBVTtJQUNuQlYsRUFBQUEsVUFBVSxFQUFFLGFBQWE7TUFDekJ0QyxLQUFLLEVBQUV6QyxHQUFDLENBQUNNLEtBQUs7SUFDZEQsRUFBQUEsTUFBTSxFQUFFLENBQUEsV0FBQSxFQUFjTCxHQUFDLENBQUNNLEtBQUssQ0FBQSxDQUFFO0lBQy9Cc0YsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlksRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFDRCxTQUFTVSxTQUFTQSxDQUFDO01BQUVDLE1BQU07TUFBRUMsUUFBUTtJQUFFQyxFQUFBQTtJQUFVLENBQUMsRUFBRTtJQUNoRCxFQUFBLG9CQUFRdEcsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlELE1BQUFBLE9BQU8sRUFBRSxNQUFNO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEdBQUcsRUFBRSxDQUFDO0lBQUVDLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUM1RzFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxNQUFNO0lBQUVDLElBQUFBLFdBQVcsRUFBRSxpRkFBaUY7UUFBRWlELEtBQUssRUFBRVEsTUFBTSxDQUFDRyxXQUFXO0lBQUVGLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBR0QsTUFBTTtJQUFFRyxNQUFBQSxXQUFXLEVBQUV2RCxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO0lBQUUxRixJQUFBQSxLQUFLLEVBQUU7SUFBRSxNQUFBLEdBQUc2RixZQUFVO0lBQUUxQixNQUFBQSxJQUFJLEVBQUU7SUFBRTtJQUFFLEdBQUMsQ0FBQyxlQUNqUnJFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUwRSxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDYSxLQUFLO0lBQUV1RSxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsUUFBUTtJQUFFYSxNQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUFFZSxNQUFBQSxNQUFNLEVBQUUsU0FBUztJQUFFZ0IsTUFBQUEsVUFBVSxFQUFFO0lBQVM7SUFBRSxHQUFDLGVBQzVKeEcsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFVBQVU7UUFBRStELE9BQU8sRUFBRUwsTUFBTSxDQUFDTSxVQUFVO0lBQUVMLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSXFELFFBQVEsQ0FBQztJQUFFLE1BQUEsR0FBR0QsTUFBTTtJQUFFTSxNQUFBQSxVQUFVLEVBQUUxRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ3dEO0lBQVEsS0FBQyxDQUFDO0lBQUV2RyxJQUFBQSxLQUFLLEVBQUU7VUFBRXlHLFdBQVcsRUFBRXBJLEdBQUMsQ0FBQ007SUFBTTtPQUFHLENBQUMsRUFDckwsZ0NBQWdDLENBQUMsZUFDckNtQixzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRyxJQUFBQSxPQUFPLEVBQUVOLFFBQVE7SUFBRXBHLElBQUFBLEtBQUssRUFBRStGO09BQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RjtJQUNlLFNBQVNpSSxVQUFVQSxDQUFDdEUsS0FBSyxFQUFFO01BQ3RDLE1BQU0sQ0FBQ2xCLEtBQUssRUFBRW1CLFFBQVEsQ0FBQyxHQUFHOUosY0FBUSxDQUFDLEVBQUUsQ0FBQztNQUN0QyxNQUFNLENBQUN5SyxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHMUssY0FBUSxDQUFDLEtBQUssQ0FBQztNQUNuRCxNQUFNLENBQUNtSSxTQUFTLEVBQUVpRyxZQUFZLENBQUMsR0FBR3BPLGNBQVEsQ0FBQyxDQUN2QztJQUFFeUgsSUFBQUEsYUFBYSxFQUFFLEVBQUU7SUFBRUMsSUFBQUEsYUFBYSxFQUFFLFFBQVE7SUFBRVQsSUFBQUEsT0FBTyxFQUFFLENBQUM7SUFBRVQsTUFBQUEsV0FBVyxFQUFFLEVBQUU7SUFBRUcsTUFBQUEsVUFBVSxFQUFFO1NBQU87SUFBRSxHQUFDLENBQ3BHLENBQUM7SUFDRixFQUFBLE1BQU1zRSxNQUFNLEdBQUd2TCxNQUFNLENBQUN3TCxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDO01BQ3BGLE1BQU1sRCxXQUFXLEdBQUdBLE1BQU07SUFDdEJrRyxJQUFBQSxZQUFZLENBQUMsQ0FBQyxHQUFHakcsU0FBUyxFQUFFO0lBQUVWLE1BQUFBLGFBQWEsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLGFBQWEsRUFBRSxRQUFRO0lBQUVULE1BQUFBLE9BQU8sRUFBRSxDQUFDO0lBQUVULFFBQUFBLFdBQVcsRUFBRSxFQUFFO0lBQUVHLFFBQUFBLFVBQVUsRUFBRTtXQUFPO0lBQUUsS0FBQyxDQUFDLENBQUM7TUFDbkksQ0FBQztJQUNELEVBQUEsTUFBTXlCLGNBQWMsR0FBR0EsQ0FBQ2pCLENBQUMsRUFBRWtCLENBQUMsS0FBSztJQUM3QixJQUFBLE1BQU1oQixJQUFJLEdBQUcsQ0FBQyxHQUFHYyxTQUFTLENBQUM7SUFDM0JkLElBQUFBLElBQUksQ0FBQ0YsQ0FBQyxDQUFDLEdBQUdrQixDQUFDO1FBQ1grRixZQUFZLENBQUMvRyxJQUFJLENBQUM7TUFDdEIsQ0FBQztNQUNELE1BQU1pQixjQUFjLEdBQUluQixDQUFDLElBQUs7SUFDMUJpSCxJQUFBQSxZQUFZLENBQUNqRyxTQUFTLENBQUNaLE1BQU0sQ0FBQyxDQUFDL0YsQ0FBQyxFQUFFZ0csR0FBRyxLQUFLQSxHQUFHLEtBQUtMLENBQUMsQ0FBQyxDQUFDO01BQ3pELENBQUM7SUFDRCxFQUFBLE1BQU1rRSxZQUFZLEdBQUcsTUFBT3BJLENBQUMsSUFBSztRQUM5QkEsQ0FBQyxDQUFDcUksY0FBYyxFQUFFO1FBQ2xCWixhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ25CLElBQUk7SUFDQSxNQUFBLE1BQU1hLElBQUksR0FBR3RJLENBQUMsQ0FBQ0MsTUFBTTtJQUNyQixNQUFBLE1BQU1zSSxFQUFFLEdBQUcsSUFBSUMsUUFBUSxDQUFDRixJQUFJLENBQUM7SUFDN0IsTUFBQSxNQUFNRyxNQUFNLEdBQUcsSUFBSUMsZUFBZSxFQUFFO0lBQ3BDLE1BQUEsS0FBSyxNQUFNLENBQUNoSyxHQUFHLEVBQUVpSyxHQUFHLENBQUMsSUFBSUosRUFBRSxDQUFDSyxPQUFPLEVBQUUsRUFBRTtJQUNuQ0gsUUFBQUEsTUFBTSxDQUFDSSxNQUFNLENBQUNuSyxHQUFHLEVBQUVpSyxHQUFHLENBQUM7SUFDM0IsTUFBQTtJQUNBLE1BQUEsTUFBTUcsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQ2YsTUFBTSxFQUFFO0lBQzVCakosUUFBQUEsTUFBTSxFQUFFLE1BQU07SUFDZGlLLFFBQUFBLE9BQU8sRUFBRTtJQUFFLFVBQUEsY0FBYyxFQUFFO2FBQXFDO0lBQ2hFQyxRQUFBQSxJQUFJLEVBQUVSO0lBQ1YsT0FBQyxDQUFDO0lBQ0YsTUFBQSxNQUFNUyxJQUFJLEdBQUcsTUFBTUosR0FBRyxDQUFDSyxJQUFJLEVBQUU7VUFDN0IsSUFBSUQsSUFBSSxDQUFDRSxXQUFXLEVBQUU7SUFDbEIzTSxRQUFBQSxNQUFNLENBQUN3TCxRQUFRLENBQUNvQixJQUFJLEdBQUdILElBQUksQ0FBQ0UsV0FBVztJQUMzQyxNQUFBLENBQUMsTUFDSTtZQUNERSxLQUFLLENBQUNKLElBQUksQ0FBQ0ssTUFBTSxFQUFFQyxPQUFPLElBQUksMkJBQTJCLENBQUM7SUFDOUQsTUFBQTtRQUNKLENBQUMsQ0FDRCxPQUFPQyxHQUFHLEVBQUU7SUFDUkgsTUFBQUEsS0FBSyxDQUFDLENBQUEsUUFBQSxFQUFXRyxHQUFHLENBQUNELE9BQU8sRUFBRSxDQUFDO0lBQ25DLElBQUEsQ0FBQyxTQUNPO1VBQ0ovQixhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ3hCLElBQUE7TUFDSixDQUFDO0lBQ0QsRUFBQSxvQkFBUXpLLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUU4RCxNQUFBQSxPQUFPLEVBQUUsRUFBRTtJQUFFUCxNQUFBQSxTQUFTLEVBQUUsT0FBTztVQUFFSyxlQUFlLEVBQUV2RixHQUFDLENBQUNDLE1BQU07VUFBRXdDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUFFNkUsTUFBQUEsVUFBVSxFQUFFO0lBQXVCO0lBQUUsR0FBQyxlQUM1Si9ELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRThCLElBQUFBLE1BQU0sRUFBRSxNQUFNO0lBQUUySyxJQUFBQSxRQUFRLEVBQUV0QixZQUFZO0lBQUVsTCxJQUFBQSxLQUFLLEVBQUU7SUFBRWdFLE1BQUFBLFFBQVEsRUFBRSxHQUFHO0lBQUV5SSxNQUFBQSxNQUFNLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDOUczTSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeU0sTUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFBRS9ILE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLFVBQVUsRUFBRTtJQUFJO09BQUcsRUFBRSxpRkFBaUYsQ0FBQyxlQUM3SzdFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5TSxNQUFBQSxNQUFNLEVBQUUsVUFBVTtJQUFFL0gsTUFBQUEsUUFBUSxFQUFFLEVBQUU7VUFBRTVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2M7SUFBTTtPQUFHLEVBQUUseU1BQXlNLENBQUMsZUFDcFNXLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV3RSxNQUFBQSxZQUFZLEVBQUU7SUFBRztJQUFFLEdBQUMsZUFDdEQxRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSxtRkFBbUYsQ0FBQyxlQUN4STlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRTJGLElBQUFBLEtBQUssRUFBRThDLEtBQUs7UUFBRXJDLFFBQVEsRUFBRXJELENBQUMsSUFBSTZHLFFBQVEsQ0FBQzdHLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkMsS0FBSyxDQUFDO0lBQUVuRCxJQUFBQSxJQUFJLEVBQUUsT0FBTztJQUFFRSxJQUFBQSxXQUFXLEVBQUUsK0lBQStJO0lBQUV6QyxJQUFBQSxLQUFLLEVBQUU2TSxjQUFjO0lBQUVsSyxJQUFBQSxRQUFRLEVBQUU7T0FBTSxDQUFDLENBQUMsZUFDaFQ3QyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtJQUFFRCxJQUFBQSxJQUFJLEVBQUUsZ0JBQWdCO0lBQUVtRCxJQUFBQSxLQUFLLEVBQUV5SCxJQUFJLENBQUNDLFNBQVMsQ0FBQ3BGLFNBQVM7SUFBRSxHQUFDLENBQUMsZUFDMUdsSSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMEUsTUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFBRUMsTUFBQUEsVUFBVSxFQUFFLEdBQUc7VUFBRTdELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1ksS0FBSztJQUFFd04sTUFBQUEsTUFBTSxFQUFFO0lBQVc7T0FBRyxFQUN0Ryw0Q0FBNEMsZUFDNUMzTSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMEUsTUFBQUEsUUFBUSxFQUFFLEVBQUU7VUFBRTVELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2MsS0FBSztJQUFFd0YsTUFBQUEsVUFBVSxFQUFFLEdBQUc7SUFBRXVJLE1BQUFBLFVBQVUsRUFBRTtJQUFFO09BQUcsRUFDbkcsR0FBRyxFQUNIbEYsU0FBUyxDQUFDNUcsTUFBTSxFQUNoQixHQUFHLENBQUMsQ0FBQyxFQUNiNEcsU0FBUyxDQUFDUixHQUFHLENBQUMsQ0FBQ1UsQ0FBQyxFQUFFYSxFQUFFLG1CQUFNakosc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFeUIsSUFBQUEsR0FBRyxFQUFFdUgsRUFBRTtJQUFFL0ksSUFBQUEsS0FBSyxFQUFFO0lBQUV3RSxNQUFBQSxZQUFZLEVBQUUsRUFBRTtJQUFFVixNQUFBQSxPQUFPLEVBQUUsRUFBRTtVQUFFVixVQUFVLEVBQUUvRSxHQUFDLENBQUNHLE1BQU07SUFBRUUsTUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQUV1RixNQUFBQSxZQUFZLEVBQUU7SUFBRTtJQUFFLEdBQUMsZUFDOUtuRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRUMsTUFBQUEsVUFBVSxFQUFFLFFBQVE7SUFBRWEsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRUMsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQ3BHMUUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLE1BQU07SUFBRUMsSUFBQUEsV0FBVyxFQUFFLDJFQUEyRTtRQUFFaUQsS0FBSyxFQUFFd0MsQ0FBQyxDQUFDWixhQUFhO0lBQUVuQixJQUFBQSxRQUFRLEVBQUVyRCxDQUFDLElBQUltRixjQUFjLENBQUNjLEVBQUUsRUFBRTtJQUFFLE1BQUEsR0FBR2IsQ0FBQztJQUFFWixNQUFBQSxhQUFhLEVBQUV4RSxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDO0lBQU0sS0FBQyxDQUFDO1FBQUVuRCxJQUFJLEVBQUUsQ0FBQSxTQUFBLEVBQVl3RyxFQUFFLENBQUEsQ0FBRTtJQUFFL0ksSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsWUFBVTtJQUFFMUIsTUFBQUEsSUFBSSxFQUFFO0lBQUU7SUFBRSxHQUFDLENBQUMsZUFDdlNyRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUUyRixLQUFLLEVBQUV3QyxDQUFDLENBQUNYLGFBQWE7SUFBRXBCLElBQUFBLFFBQVEsRUFBRXJELENBQUMsSUFBSW1GLGNBQWMsQ0FBQ2MsRUFBRSxFQUFFO0lBQUUsTUFBQSxHQUFHYixDQUFDO0lBQUVYLE1BQUFBLGFBQWEsRUFBRXpFLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkM7SUFBTSxLQUFDLENBQUM7SUFBRTFGLElBQUFBLEtBQUssRUFBRThGO0lBQVksR0FBQyxFQUFFSCxjQUFjLENBQUM2QixHQUFHLENBQUNDLEVBQUUsa0JBQUszSCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO1FBQUV5QixHQUFHLEVBQUVpRyxFQUFFLENBQUMvQixLQUFLO1FBQUVBLEtBQUssRUFBRStCLEVBQUUsQ0FBQy9CO0lBQU0sR0FBQyxFQUFFK0IsRUFBRSxDQUFDcEYsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQ2xRdkMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkcsSUFBQUEsT0FBTyxFQUFFQSxNQUFNeUIsY0FBYyxDQUFDWSxFQUFFLENBQUM7SUFBRS9JLElBQUFBLEtBQUssRUFBRStGO0lBQVUsR0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQ3JHbUMsQ0FBQyxDQUFDWCxhQUFhLEtBQUssTUFBTSxrQkFBS3pILHNCQUFLLENBQUNDLGFBQWEsQ0FBQ0Qsc0JBQUssQ0FBQzRILFFBQVEsRUFBRSxJQUFJLEVBQ25FUSxDQUFDLENBQUNwQixPQUFPLENBQUNVLEdBQUcsQ0FBQyxDQUFDUCxDQUFDLEVBQUVXLEVBQUUsbUJBQU05SCxzQkFBSyxDQUFDQyxhQUFhLENBQUNrRyxTQUFTLEVBQUU7SUFBRXpFLElBQUFBLEdBQUcsRUFBRW9HLEVBQUU7SUFBRTFCLElBQUFBLE1BQU0sRUFBRWUsQ0FBQztRQUFFZCxRQUFRLEVBQUV3QixHQUFHLElBQUk7SUFDeEYsTUFBQSxNQUFNVCxJQUFJLEdBQUcsQ0FBQyxHQUFHZ0IsQ0FBQyxDQUFDcEIsT0FBTyxDQUFDO0lBQzNCSSxNQUFBQSxJQUFJLENBQUNVLEVBQUUsQ0FBQyxHQUFHRCxHQUFHO1VBQ2RNLGNBQWMsQ0FBQ2MsRUFBRSxFQUFFO0lBQUUsUUFBQSxHQUFHYixDQUFDO0lBQUVwQixRQUFBQSxPQUFPLEVBQUVJO0lBQUssT0FBQyxDQUFDO1FBQy9DLENBQUM7UUFBRWQsUUFBUSxFQUFFQSxNQUFNO1VBQ2Y2QixjQUFjLENBQUNjLEVBQUUsRUFBRTtJQUFFLFFBQUEsR0FBR2IsQ0FBQztJQUFFcEIsUUFBQUEsT0FBTyxFQUFFb0IsQ0FBQyxDQUFDcEIsT0FBTyxDQUFDTSxNQUFNLENBQUMsQ0FBQy9GLENBQUMsRUFBRWdHLEdBQUcsS0FBS0EsR0FBRyxLQUFLTyxFQUFFO0lBQUUsT0FBQyxDQUFDO0lBQ25GLElBQUE7T0FBRyxDQUFDLENBQUMsQ0FBQyxlQUNWOUgsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRWtFLElBQUFBLE9BQU8sRUFBRUEsTUFBTXVCLGNBQWMsQ0FBQ2MsRUFBRSxFQUFFO0lBQUUsTUFBQSxHQUFHYixDQUFDO0lBQUVwQixNQUFBQSxPQUFPLEVBQUUsQ0FBQyxHQUFHb0IsQ0FBQyxDQUFDcEIsT0FBTyxFQUFFO0lBQUVULFFBQUFBLFdBQVcsRUFBRSxFQUFFO0lBQUVHLFFBQUFBLFVBQVUsRUFBRTtXQUFPO0lBQUUsS0FBQyxDQUFDO0lBQUV4RyxJQUFBQSxLQUFLLEVBQUVnRztJQUFPLEdBQUMsRUFBRSxtRkFBbUYsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFDaFJsRyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtJQUFFa0UsSUFBQUEsT0FBTyxFQUFFcUIsV0FBVztJQUFFL0gsSUFBQUEsS0FBSyxFQUFFa087T0FBcUIsRUFBRSx5RkFBeUYsQ0FBQyxlQUM5THBPLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV1RixNQUFBQSxTQUFTLEVBQUU7SUFBRztJQUFFLEdBQUMsZUFDbkR6RixzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtJQUFFOEssSUFBQUEsUUFBUSxFQUFFaEQsVUFBVTtJQUFFdEssSUFBQUEsS0FBSyxFQUFFdU47T0FBZ0IsRUFBRWpELFVBQVUsR0FBRyxXQUFXLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVKO0lBQ0EsTUFBTXNDLFlBQVUsR0FBRztJQUNmbkosRUFBQUEsT0FBTyxFQUFFLE9BQU87SUFDaEJpQixFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxFQUFBQSxVQUFVLEVBQUUsR0FBRztNQUNmN0QsS0FBSyxFQUFFekMsR0FBQyxDQUFDYSxLQUFLO0lBQ2RzRixFQUFBQSxZQUFZLEVBQUU7SUFDbEIsQ0FBQztJQUNELE1BQU1xSSxjQUFjLEdBQUc7SUFDbkJySixFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNiTSxFQUFBQSxPQUFPLEVBQUUsVUFBVTtNQUNuQlYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDSSxPQUFPO01BQ3JCcUMsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQ2ROLEVBQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUMvQnVGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pTLEVBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZwQixFQUFBQSxTQUFTLEVBQUU7SUFDZixDQUFDO0lBQ0QsTUFBTW1LLG1CQUFtQixHQUFHO0lBQ3hCcEssRUFBQUEsT0FBTyxFQUFFLFVBQVU7SUFDbkJWLEVBQUFBLFVBQVUsRUFBRSxhQUFhO01BQ3pCdEMsS0FBSyxFQUFFekMsR0FBQyxDQUFDUSxJQUFJO0lBQ2JILEVBQUFBLE1BQU0sRUFBRSxDQUFBLFdBQUEsRUFBY0wsR0FBQyxDQUFDUSxJQUFJLENBQUEsQ0FBRTtJQUM5Qm9GLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pZLEVBQUFBLE1BQU0sRUFBRTtJQUNaLENBQUM7SUFDRCxNQUFNaUksZ0JBQWMsR0FBRztJQUNuQnpKLEVBQUFBLE9BQU8sRUFBRSxXQUFXO01BQ3BCVixVQUFVLEVBQUUsMkJBQTJCL0UsR0FBQyxDQUFDTSxLQUFLLENBQUEsRUFBQSxFQUFLTixHQUFDLENBQUNPLFNBQVMsQ0FBQSxDQUFBLENBQUc7SUFDakVrQyxFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNicEMsRUFBQUEsTUFBTSxFQUFFLE1BQU07SUFDZHVGLEVBQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEVBQUFBLFVBQVUsRUFBRSxHQUFHO0lBQ2ZXLEVBQUFBLE1BQU0sRUFBRTtJQUNaLENBQUM7O0lDdkxELE1BQU1qSCxHQUFDLEdBQUc7SUFDTkMsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJFLEVBQ0FDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLFNBQVMsRUFBRSxTQUFTO0lBQ3BCTSxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJILEVBQUFBLEtBQUssRUFBRTtJQUNYLENBQUM7SUFDRCxNQUFNbVAsS0FBSyxHQUFHLENBQ1Y7SUFBRXpJLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQUVyRCxFQUFBQSxLQUFLLEVBQUU7SUFBVSxDQUFDLEVBQ3RDO0lBQUVxRCxFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUFFckQsRUFBQUEsS0FBSyxFQUFFO0lBQWUsQ0FBQyxFQUN4QztJQUFFcUQsRUFBQUEsS0FBSyxFQUFFLE9BQU87SUFBRXJELEVBQUFBLEtBQUssRUFBRTtJQUFnQixDQUFDLENBQzdDO0lBQ2MsU0FBUytMLFVBQVVBLENBQUMxRSxLQUFLLEVBQUU7TUFDdEMsTUFBTSxDQUFDWSxVQUFVLEVBQUVDLGFBQWEsQ0FBQyxHQUFHMUssY0FBUSxDQUFDLEtBQUssQ0FBQztJQUNuRCxFQUFBLE1BQU1pTCxNQUFNLEdBQUd2TCxNQUFNLENBQUN3TCxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDO0lBQ3BGLEVBQUEsTUFBTUMsWUFBWSxHQUFHLE1BQU9wSSxDQUFDLElBQUs7UUFDOUJBLENBQUMsQ0FBQ3FJLGNBQWMsRUFBRTtRQUNsQlosYUFBYSxDQUFDLElBQUksQ0FBQztRQUNuQixJQUFJO0lBQ0EsTUFBQSxNQUFNYSxJQUFJLEdBQUd0SSxDQUFDLENBQUNDLE1BQU07SUFDckIsTUFBQSxNQUFNc0ksRUFBRSxHQUFHLElBQUlDLFFBQVEsQ0FBQ0YsSUFBSSxDQUFDO0lBQzdCLE1BQUEsTUFBTUcsTUFBTSxHQUFHLElBQUlDLGVBQWUsRUFBRTtJQUNwQyxNQUFBLEtBQUssTUFBTSxDQUFDaEssR0FBRyxFQUFFaUssR0FBRyxDQUFDLElBQUlKLEVBQUUsQ0FBQ0ssT0FBTyxFQUFFLEVBQUU7SUFDbkNILFFBQUFBLE1BQU0sQ0FBQ0ksTUFBTSxDQUFDbkssR0FBRyxFQUFFaUssR0FBRyxDQUFDO0lBQzNCLE1BQUE7SUFDQSxNQUFBLE1BQU1HLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNmLE1BQU0sRUFBRTtJQUM1QmpKLFFBQUFBLE1BQU0sRUFBRSxNQUFNO0lBQ2RpSyxRQUFBQSxPQUFPLEVBQUU7SUFBRSxVQUFBLGNBQWMsRUFBRTthQUFxQztJQUNoRUMsUUFBQUEsSUFBSSxFQUFFUjtJQUNWLE9BQUMsQ0FBQztJQUNGLE1BQUEsTUFBTVMsSUFBSSxHQUFHLE1BQU1KLEdBQUcsQ0FBQ0ssSUFBSSxFQUFFO1VBQzdCLElBQUlELElBQUksQ0FBQ0UsV0FBVyxFQUFFO0lBQ2xCM00sUUFBQUEsTUFBTSxDQUFDd0wsUUFBUSxDQUFDb0IsSUFBSSxHQUFHSCxJQUFJLENBQUNFLFdBQVc7SUFDM0MsTUFBQSxDQUFDLE1BQ0k7WUFDREUsS0FBSyxDQUFDSixJQUFJLENBQUNLLE1BQU0sRUFBRUMsT0FBTyxJQUFJLGtDQUFrQyxDQUFDO0lBQ3JFLE1BQUE7UUFDSixDQUFDLENBQ0QsT0FBT0MsR0FBRyxFQUFFO0lBQ1JILE1BQUFBLEtBQUssQ0FBQyxDQUFBLFFBQUEsRUFBV0csR0FBRyxDQUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNuQyxJQUFBLENBQUMsU0FDTztVQUNKL0IsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN4QixJQUFBO01BQ0osQ0FBQztJQUNELEVBQUEsb0JBQVF6SyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFOEQsTUFBQUEsT0FBTyxFQUFFLEVBQUU7SUFBRVAsTUFBQUEsU0FBUyxFQUFFLE9BQU87VUFBRUssZUFBZSxFQUFFdkYsR0FBQyxDQUFDQyxNQUFNO1VBQUV3QyxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFBRTZFLE1BQUFBLFVBQVUsRUFBRTtJQUF1QjtJQUFFLEdBQUMsZUFDNUovRCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsTUFBTSxFQUFFO0lBQUU4QixJQUFBQSxNQUFNLEVBQUUsTUFBTTtJQUFFMkssSUFBQUEsUUFBUSxFQUFFdEIsWUFBWTtJQUFFbEwsSUFBQUEsS0FBSyxFQUFFO0lBQUVnRSxNQUFBQSxRQUFRLEVBQUUsR0FBRztJQUFFeUksTUFBQUEsTUFBTSxFQUFFO0lBQVM7SUFBRSxHQUFDLGVBQzlHM00sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlNLE1BQUFBLE1BQU0sRUFBRSxTQUFTO0lBQUUvSCxNQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUFFQyxNQUFBQSxVQUFVLEVBQUU7SUFBSTtPQUFHLEVBQUUsMkhBQTJILENBQUMsZUFDdk43RSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsR0FBRyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeU0sTUFBQUEsTUFBTSxFQUFFLFVBQVU7SUFBRS9ILE1BQUFBLFFBQVEsRUFBRSxFQUFFO1VBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNjO0lBQU07T0FBRyxFQUFFLHNJQUFzSSxDQUFDLGVBQ2pPVyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFd0UsTUFBQUEsWUFBWSxFQUFFO0lBQUc7SUFBRSxHQUFDLGVBQ3REMUUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU0TTtPQUFZLEVBQUUsU0FBUyxDQUFDLGVBQzlEOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLE9BQU87SUFBRUQsSUFBQUEsSUFBSSxFQUFFLE9BQU87SUFBRUUsSUFBQUEsV0FBVyxFQUFFLGtCQUFrQjtJQUFFekMsSUFBQUEsS0FBSyxFQUFFNkYsWUFBVTtJQUFFbEQsSUFBQUEsUUFBUSxFQUFFO09BQU0sQ0FBQyxDQUFDLGVBQ3ZJN0Msc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXdFLE1BQUFBLFlBQVksRUFBRTtJQUFHO0lBQUUsR0FBQyxlQUN0RDFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFNE07T0FBWSxFQUFFLHdDQUF3QyxDQUFDLGVBQzdGOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFVBQVU7SUFBRUQsSUFBQUEsSUFBSSxFQUFFLFVBQVU7SUFBRUUsSUFBQUEsV0FBVyxFQUFFLCtGQUErRjtJQUFFekMsSUFBQUEsS0FBSyxFQUFFNkYsWUFBVTtJQUFFbEQsSUFBQUEsUUFBUSxFQUFFO09BQU0sQ0FBQyxDQUFDLGVBQzFON0Msc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXdFLE1BQUFBLFlBQVksRUFBRTtJQUFHO0lBQUUsR0FBQyxlQUN0RDFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFNE07T0FBWSxFQUFFLDZGQUE2RixDQUFDLGVBQ2xKOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLE1BQU07SUFBRUQsSUFBQUEsSUFBSSxFQUFFLFVBQVU7SUFBRUUsSUFBQUEsV0FBVyxFQUFFLFVBQVU7SUFBRXpDLElBQUFBLEtBQUssRUFBRTZGO09BQVksQ0FBQyxDQUFDLGVBQ2pIL0Ysc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXdFLE1BQUFBLFlBQVksRUFBRTtJQUFHO0lBQUUsR0FBQyxlQUN0RDFFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFNE07T0FBWSxFQUFFLDBCQUEwQixDQUFDLGVBQy9FOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFd0MsSUFBQUEsSUFBSSxFQUFFLE1BQU07SUFBRXZDLElBQUFBLEtBQUssRUFBRTZGO0lBQVcsR0FBQyxFQUFFc0ksS0FBSyxDQUFDM0csR0FBRyxDQUFDN0YsQ0FBQyxrQkFBSzdCLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFBRXlCLEdBQUcsRUFBRUcsQ0FBQyxDQUFDK0QsS0FBSztRQUFFQSxLQUFLLEVBQUUvRCxDQUFDLENBQUMrRDtJQUFNLEdBQUMsRUFBRS9ELENBQUMsQ0FBQ1UsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFDbkt2QyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtJQUFFOEssSUFBQUEsUUFBUSxFQUFFaEQsVUFBVTtJQUFFdEssSUFBQUEsS0FBSyxFQUFFdU47T0FBZ0IsRUFBRWpELFVBQVUsR0FBRyxXQUFXLEdBQUcsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQy9KO0lBQ0EsTUFBTXNDLFlBQVUsR0FBRztJQUNmbkosRUFBQUEsT0FBTyxFQUFFLE9BQU87SUFDaEJpQixFQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxFQUFBQSxVQUFVLEVBQUUsR0FBRztNQUNmN0QsS0FBSyxFQUFFekMsR0FBQyxDQUFDYSxLQUFLO0lBQ2RzRixFQUFBQSxZQUFZLEVBQUU7SUFDbEIsQ0FBQztJQUNELE1BQU1xQixZQUFVLEdBQUc7SUFDZnJDLEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQ2JNLEVBQUFBLE9BQU8sRUFBRSxVQUFVO01BQ25CVixVQUFVLEVBQUUvRSxHQUFDLENBQUNJLE9BQU87SUFDckJxQyxFQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNicEMsRUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQy9CdUYsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlMsRUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZnBCLEVBQUFBLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFDRCxNQUFNd0osY0FBYyxHQUFHO0lBQ25CekosRUFBQUEsT0FBTyxFQUFFLFdBQVc7TUFDcEJWLFVBQVUsRUFBRSwyQkFBMkIvRSxHQUFDLENBQUNNLEtBQUssQ0FBQSxFQUFBLEVBQUtOLEdBQUMsQ0FBQ08sU0FBUyxDQUFBLENBQUEsQ0FBRztJQUNqRWtDLEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQ2JwQyxFQUFBQSxNQUFNLEVBQUUsTUFBTTtJQUNkdUYsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsRUFBQUEsVUFBVSxFQUFFLEdBQUc7SUFDZlcsRUFBQUEsTUFBTSxFQUFFO0lBQ1osQ0FBQzs7SUM5RkQsTUFBTWpILEdBQUMsR0FBRztJQUNOQyxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkUsRUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJDLEVBQUFBLE9BQU8sRUFBRSxTQUFTO0lBQ2xCQyxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLFNBQVMsRUFBRSxTQUFTO0lBQ3BCQyxFQUNBRSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFO0lBQ1gsQ0FBQztJQUNELE1BQU0wRyxVQUFVLEdBQUc7SUFDZnJDLEVBQUFBLEtBQUssRUFBRSxNQUFNO0lBQ2JNLEVBQUFBLE9BQU8sRUFBRSxVQUFVO01BQ25CVixVQUFVLEVBQUUvRSxHQUFDLENBQUNJLE9BQU87TUFDckJxQyxLQUFLLEVBQUV6QyxHQUFDLENBQUNXLEtBQUs7SUFDZE4sRUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQy9CdUYsRUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsRUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWlMsRUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZnBCLEVBQUFBLFNBQVMsRUFBRTtJQUNmLENBQUM7SUFDRCxTQUFTaUYsWUFBWUEsQ0FBQztNQUFFUixLQUFLO01BQUU2RixLQUFLO0lBQUVDLEVBQUFBO0lBQVMsQ0FBQyxFQUFFO0lBQzlDLEVBQUEsb0JBQVF4TyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFd0UsTUFBQUEsWUFBWSxFQUFFLEVBQUU7SUFBRVYsTUFBQUEsT0FBTyxFQUFFLEVBQUU7VUFBRVYsVUFBVSxFQUFFL0UsR0FBQyxDQUFDRyxNQUFNO0lBQUVFLE1BQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsR0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUFFdUYsTUFBQUEsWUFBWSxFQUFFO0lBQUU7SUFBRSxHQUFDLGVBQ25KbkUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLFVBQVUsRUFBRSxHQUFHO1VBQUU3RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNZLEtBQUs7SUFBRXdOLE1BQUFBLE1BQU0sRUFBRTtJQUFXO0lBQUUsR0FBQyxFQUN0R2pFLEtBQUssRUFDTDZGLEtBQUssS0FBS0UsU0FBUyxrQkFBS3pPLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUwRSxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDYyxLQUFLO0lBQUV3RixNQUFBQSxVQUFVLEVBQUUsR0FBRztJQUFFdUksTUFBQUEsVUFBVSxFQUFFO0lBQUU7T0FBRyxFQUMzSCxHQUFHLEVBQ0htQixLQUFLLEVBQ0wsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNkQyxRQUFRLENBQUM7SUFDakI7SUFDQSxTQUFTRSxLQUFLQSxDQUFDO01BQUU1RixJQUFJO01BQUU2RixJQUFJO01BQUVDLEtBQUs7SUFBRUMsRUFBQUE7SUFBVSxDQUFDLEVBQUU7SUFDN0MsRUFBQSxNQUFNLENBQUNDLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdoUCxjQUFRLENBQUMsSUFBSWlQLEdBQUcsRUFBRSxDQUFDO0lBQ25ELEVBQUEsTUFBTUMsUUFBUSxHQUFHLE1BQU96TSxFQUFFLElBQUs7UUFDM0IsSUFBSSxDQUFDb00sS0FBSyxFQUNOO0lBQ0pHLElBQUFBLFdBQVcsQ0FBQ0csSUFBSSxJQUFJLElBQUlGLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDLENBQUNDLEdBQUcsQ0FBQzNNLEVBQUUsQ0FBQyxDQUFDO1FBQzFDLElBQUk7SUFDQSxNQUFBLE1BQU00TSxHQUFHLEdBQUczUCxNQUFNLENBQUN3TCxRQUFRLENBQUNDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDO0lBQ2pGLE1BQUEsTUFBTU0sTUFBTSxHQUFHLElBQUlDLGVBQWUsRUFBRTtJQUNwQ0QsTUFBQUEsTUFBTSxDQUFDSSxNQUFNLENBQUMscUJBQXFCLEVBQUUrQyxLQUFLLENBQUM7VUFDM0NuRCxNQUFNLENBQUNJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRXdELE1BQU0sQ0FBQzdNLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLE1BQUEsTUFBTXNKLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNxRCxHQUFHLEVBQUU7SUFDekJyTixRQUFBQSxNQUFNLEVBQUUsTUFBTTtJQUNkaUssUUFBQUEsT0FBTyxFQUFFO0lBQUUsVUFBQSxjQUFjLEVBQUU7YUFBcUM7SUFDaEVDLFFBQUFBLElBQUksRUFBRVI7SUFDVixPQUFDLENBQUM7SUFDRixNQUFBLE1BQU1TLElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUksRUFBRTtVQUM3QixJQUFJRCxJQUFJLENBQUNFLFdBQVcsRUFBRTtJQUNsQjNNLFFBQUFBLE1BQU0sQ0FBQ3dMLFFBQVEsQ0FBQ29CLElBQUksR0FBR0gsSUFBSSxDQUFDRSxXQUFXO0lBQzNDLE1BQUEsQ0FBQyxNQUNJO0lBQ0R5QyxRQUFBQSxTQUFTLElBQUk7SUFDakIsTUFBQTtJQUNKLElBQUEsQ0FBQyxDQUNELE1BQU07VUFDRkUsV0FBVyxDQUFDRyxJQUFJLElBQUk7SUFBRSxRQUFBLE1BQU1JLENBQUMsR0FBRyxJQUFJTixHQUFHLENBQUNFLElBQUksQ0FBQztJQUFFSSxRQUFBQSxDQUFDLENBQUNDLE1BQU0sQ0FBQy9NLEVBQUUsQ0FBQztJQUFFLFFBQUEsT0FBTzhNLENBQUM7SUFBRSxNQUFBLENBQUMsQ0FBQztJQUM3RSxJQUFBO01BQ0osQ0FBQztJQUNELEVBQUEsSUFBSXhHLElBQUksQ0FBQ3hILE1BQU0sS0FBSyxDQUFDLEVBQ2pCLG9CQUFPdEIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO1VBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNjO0lBQU07T0FBRyxFQUFFLCtEQUErRCxDQUFDO0lBQ2pKLEVBQUEsb0JBQVFXLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUVzUCxNQUFBQSxTQUFTLEVBQUU7SUFBTztJQUFFLEdBQUMsZUFDL0R4UCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFd0QsTUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRStMLE1BQUFBLGNBQWMsRUFBRSxVQUFVO0lBQUU3SyxNQUFBQSxRQUFRLEVBQUU7SUFBRztJQUFFLEdBQUMsZUFDL0Y1RSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFLElBQUksZUFDN0JELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO1VBQUVjLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ2EsS0FBSztJQUFFc1EsTUFBQUEsWUFBWSxFQUFFLENBQUEsVUFBQSxFQUFhblIsR0FBQyxDQUFDSyxNQUFNLENBQUE7SUFBRztPQUFHLEVBQzFGZ1EsS0FBSyxpQkFBSTVPLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUU4RCxNQUFBQSxPQUFPLEVBQUUsU0FBUztJQUFFMEIsTUFBQUEsU0FBUyxFQUFFLE1BQU07SUFBRWhDLE1BQUFBLEtBQUssRUFBRTtJQUFHO0lBQUUsR0FBQyxDQUFDLEVBQ25HaUwsSUFBSSxDQUFDakgsR0FBRyxDQUFDc0YsQ0FBQyxpQkFBSWhOLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7UUFBRXlCLEdBQUcsRUFBRXNMLENBQUMsQ0FBQ3RMLEdBQUc7SUFBRXhCLElBQUFBLEtBQUssRUFBRTtJQUFFOEQsTUFBQUEsT0FBTyxFQUFFLFNBQVM7SUFBRTBCLE1BQUFBLFNBQVMsRUFBRSxNQUFNO0lBQUVjLE1BQUFBLFVBQVUsRUFBRTtJQUFTO0lBQUUsR0FBQyxFQUFFd0csQ0FBQyxDQUFDekssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQ25KdkMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU2SSxJQUFJLENBQUNwQixHQUFHLENBQUM3RixDQUFDLGtCQUFLN0Isc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksRUFBRTtRQUFFeUIsR0FBRyxFQUFFRyxDQUFDLENBQUNXLEVBQUU7SUFBRXRDLElBQUFBLEtBQUssRUFBRTtJQUFFd1AsTUFBQUEsWUFBWSxFQUFFLENBQUEsVUFBQSxFQUFhblIsR0FBQyxDQUFDSyxNQUFNLENBQUE7SUFBRztPQUFHLEVBQ3ZJZ1EsS0FBSyxrQkFBSzVPLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUU4RCxNQUFBQSxPQUFPLEVBQUU7SUFBVTtJQUFFLEdBQUMsZUFDakVoRSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUV5QyxJQUFBQSxJQUFJLEVBQUUsUUFBUTtRQUFFOEssUUFBUSxFQUFFc0IsUUFBUSxDQUFDYSxHQUFHLENBQUM5TixDQUFDLENBQUNXLEVBQUUsQ0FBQztRQUFFb0UsT0FBTyxFQUFFQSxNQUFNcUksUUFBUSxDQUFDcE4sQ0FBQyxDQUFDVyxFQUFFLENBQUM7SUFBRXRDLElBQUFBLEtBQUssRUFBRTtJQUM1R29ELE1BQUFBLFVBQVUsRUFBRSxNQUFNO0lBQ2xCMUUsTUFBQUEsTUFBTSxFQUFFLE1BQU07VUFDZG9DLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1UsS0FBSztJQUNkdUcsTUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFDakJaLE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1paLE1BQUFBLE9BQU8sRUFBRSxTQUFTO1VBQ2xCa0IsT0FBTyxFQUFFNEosUUFBUSxDQUFDYSxHQUFHLENBQUM5TixDQUFDLENBQUNXLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRztTQUN2QztJQUFFa0csSUFBQUEsS0FBSyxFQUFFO0lBQTZDLEdBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQzdFaUcsSUFBSSxDQUFDakgsR0FBRyxDQUFDc0YsQ0FBQyxrQkFBS2hOLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7UUFBRXlCLEdBQUcsRUFBRXNMLENBQUMsQ0FBQ3RMLEdBQUc7SUFBRXhCLElBQUFBLEtBQUssRUFBRTtJQUFFOEQsTUFBQUEsT0FBTyxFQUFFLFNBQVM7VUFBRWhELEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUFFc0gsTUFBQUEsVUFBVSxFQUFFO0lBQVM7SUFBRSxHQUFDLEVBQUV3RyxDQUFDLENBQUM0QyxNQUFNLEdBQUc1QyxDQUFDLENBQUM0QyxNQUFNLENBQUMvTixDQUFDLENBQUNtTCxDQUFDLENBQUN0TCxHQUFHLENBQUMsQ0FBQyxHQUFHMk4sTUFBTSxDQUFDeE4sQ0FBQyxDQUFDbUwsQ0FBQyxDQUFDdEwsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdNO0lBQ2UsU0FBU21PLFFBQVFBLENBQUNqRyxLQUFLLEVBQUU7TUFDcEMsTUFBTWtHLENBQUMsR0FBR2xHLEtBQUssQ0FBQytELE1BQU0sRUFBRWxDLE1BQU0sSUFBSSxFQUFFO0lBQ3BDLEVBQUEsTUFBTXNFLE1BQU0sR0FBR0QsQ0FBQyxDQUFDdE4sRUFBRTtNQUNuQixNQUFNdUwsS0FBSyxHQUFJck0sR0FBRyxJQUFLO1FBQUUsSUFBSTtVQUN6QixPQUFPMkwsSUFBSSxDQUFDVSxLQUFLLENBQUMrQixDQUFDLENBQUNwTyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDckMsSUFBQSxDQUFDLENBQ0QsTUFBTTtJQUNGLE1BQUEsT0FBTyxFQUFFO0lBQ2IsSUFBQTtNQUFFLENBQUM7SUFDSCxFQUFBLE1BQU0sQ0FBQ3NPLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdsUSxjQUFRLENBQUMrUCxDQUFDLENBQUNFLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDakQsRUFBQSxNQUFNLENBQUNFLFFBQVEsRUFBRUMsV0FBVyxDQUFDLEdBQUdwUSxjQUFRLENBQUMrUCxDQUFDLENBQUNJLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDMUQsRUFBQSxNQUFNLENBQUNFLEdBQUcsRUFBRUMsTUFBTSxDQUFDLEdBQUd0USxjQUFRLENBQUMrUCxDQUFDLENBQUNNLEdBQUcsSUFBSSxFQUFFLENBQUM7SUFDM0MsRUFBQSxNQUFNLENBQUNFLElBQUksRUFBRUMsT0FBTyxDQUFDLEdBQUd4USxjQUFRLENBQUMrUCxDQUFDLENBQUNRLElBQUksSUFBSSxNQUFNLENBQUM7SUFDbEQsRUFBQSxNQUFNLENBQUNFLFNBQVMsRUFBRUMsWUFBWSxDQUFDLEdBQUcxUSxjQUFRLENBQUMrUCxDQUFDLENBQUNZLFVBQVUsSUFBSSxFQUFFLENBQUM7TUFDOUQsTUFBTSxDQUFDQyxRQUFRLEVBQUVDLFdBQVcsQ0FBQyxHQUFHN1EsY0FBUSxDQUFDLEVBQUUsQ0FBQztNQUM1QyxNQUFNLENBQUM4USxXQUFXLENBQUMsR0FBRzlRLGNBQVEsQ0FBQ2dPLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO01BQzFELE1BQU0sQ0FBQytDLFFBQVEsQ0FBQyxHQUFHL1EsY0FBUSxDQUFDZ08sS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7TUFDcEQsTUFBTSxDQUFDZ0QsWUFBWSxDQUFDLEdBQUdoUixjQUFRLENBQUNnTyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztNQUM3RCxNQUFNLENBQUNpRCxNQUFNLENBQUMsR0FBR2pSLGNBQVEsQ0FBQ2dPLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztNQUNoRCxNQUFNLENBQUNrRCxLQUFLLENBQUMsR0FBR2xSLGNBQVEsQ0FBQ2dPLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO01BQ3ZELE1BQU0sQ0FBQ21ELE9BQU8sQ0FBQyxHQUFHblIsY0FBUSxDQUFDZ08sS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7TUFDdkQsTUFBTSxDQUFDb0QsT0FBTyxDQUFDLEdBQUdwUixjQUFRLENBQUNnTyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsRUFBQSxNQUFNcUQsVUFBVSxHQUFHckQsS0FBSyxDQUFDLG1CQUFtQixDQUFDO0lBQzdDLEVBQUEsTUFBTXNELFNBQVMsR0FBR3RELEtBQUssQ0FBQyxrQkFBa0IsQ0FBQztJQUMzQyxFQUFBLE1BQU11RCxpQkFBaUIsR0FBRyxJQUFJdEMsR0FBRyxDQUFDNkIsV0FBVyxDQUFDbkosR0FBRyxDQUFFMUUsQ0FBQyxJQUFLQSxDQUFDLENBQUN1TyxTQUFTLENBQUMsQ0FBQztJQUN0RSxFQUFBLE1BQU1DLGdCQUFnQixHQUFHLElBQUl4QyxHQUFHLENBQUNnQyxNQUFNLENBQUN0SixHQUFHLENBQUUrSixDQUFDLElBQUtBLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUM7SUFDL0QsRUFBQSxNQUFNQyxnQkFBZ0IsR0FBR1AsVUFBVSxDQUFDOUosTUFBTSxDQUFFMEYsQ0FBQyxJQUFLLENBQUNzRSxpQkFBaUIsQ0FBQzNCLEdBQUcsQ0FBQzNDLENBQUMsQ0FBQ3hLLEVBQUUsQ0FBQyxDQUFDO0lBQy9FLEVBQUEsTUFBTW9QLGVBQWUsR0FBR1AsU0FBUyxDQUFDL0osTUFBTSxDQUFFbUssQ0FBQyxJQUFLLENBQUNELGdCQUFnQixDQUFDN0IsR0FBRyxDQUFDOEIsQ0FBQyxDQUFDalAsRUFBRSxDQUFDLENBQUM7TUFDNUUsTUFBTSxDQUFDcVAsV0FBVyxFQUFFQyxjQUFjLENBQUMsR0FBRy9SLGNBQVEsQ0FBQyxFQUFFLENBQUM7TUFDbEQsTUFBTSxDQUFDZ1MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR2pTLGNBQVEsQ0FBQyxFQUFFLENBQUM7TUFDaEQsTUFBTSxDQUFDa1MsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBR25TLGNBQVEsQ0FBQyxDQUFDLENBQUM7TUFDL0MsTUFBTSxDQUFDeUssVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzFLLGNBQVEsQ0FBQyxLQUFLLENBQUM7SUFDbkQsRUFBQSxNQUFNaUwsTUFBTSxHQUFHdkwsTUFBTSxDQUFDd0wsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQztJQUNwRixFQUFBLE1BQU1DLFlBQVksR0FBRyxNQUFPcEksQ0FBQyxJQUFLO1FBQzlCQSxDQUFDLENBQUNxSSxjQUFjLEVBQUU7UUFDbEJaLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkIsSUFBSTtJQUNBLE1BQUEsTUFBTWEsSUFBSSxHQUFHdEksQ0FBQyxDQUFDQyxNQUFNO0lBQ3JCLE1BQUEsTUFBTXNJLEVBQUUsR0FBRyxJQUFJQyxRQUFRLENBQUNGLElBQUksQ0FBQztJQUM3QixNQUFBLE1BQU1HLE1BQU0sR0FBRyxJQUFJQyxlQUFlLEVBQUU7SUFDcEMsTUFBQSxLQUFLLE1BQU0sQ0FBQ2hLLEdBQUcsRUFBRWlLLEdBQUcsQ0FBQyxJQUFJSixFQUFFLENBQUNLLE9BQU8sRUFBRSxFQUFFO0lBQ25DSCxRQUFBQSxNQUFNLENBQUNJLE1BQU0sQ0FBQ25LLEdBQUcsRUFBRWlLLEdBQUcsQ0FBQztJQUMzQixNQUFBO0lBQ0EsTUFBQSxNQUFNRyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDZixNQUFNLEVBQUU7SUFDNUJqSixRQUFBQSxNQUFNLEVBQUUsTUFBTTtJQUNkaUssUUFBQUEsT0FBTyxFQUFFO0lBQUUsVUFBQSxjQUFjLEVBQUU7YUFBcUM7SUFDaEVDLFFBQUFBLElBQUksRUFBRVI7SUFDVixPQUFDLENBQUM7SUFDRixNQUFBLE1BQU1TLElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUksRUFBRTtVQUM3QixJQUFJRCxJQUFJLENBQUNFLFdBQVcsRUFBRTtJQUNsQjNNLFFBQUFBLE1BQU0sQ0FBQ3dMLFFBQVEsQ0FBQ29CLElBQUksR0FBR0gsSUFBSSxDQUFDRSxXQUFXO0lBQzNDLE1BQUEsQ0FBQyxNQUNJO1lBQ0RFLEtBQUssQ0FBQ0osSUFBSSxDQUFDSyxNQUFNLEVBQUVDLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQztJQUMxRCxNQUFBO1FBQ0osQ0FBQyxDQUNELE9BQU9DLEdBQUcsRUFBRTtJQUNSSCxNQUFBQSxLQUFLLENBQUMsQ0FBQSxRQUFBLEVBQVdHLEdBQUcsQ0FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDbkMsSUFBQSxDQUFDLFNBQ087VUFDSi9CLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDeEIsSUFBQTtNQUNKLENBQUM7TUFDRCxNQUFNNEQsS0FBSyxHQUFHLENBQ1Y7SUFBRXpJLElBQUFBLEtBQUssRUFBRSxPQUFPO0lBQUVyRCxJQUFBQSxLQUFLLEVBQUU7SUFBZ0IsR0FBQyxFQUMxQztJQUFFcUQsSUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRXJELElBQUFBLEtBQUssRUFBRTtJQUFlLEdBQUMsRUFDeEM7SUFBRXFELElBQUFBLEtBQUssRUFBRSxTQUFTO0lBQUVyRCxJQUFBQSxLQUFLLEVBQUU7SUFBVSxHQUFDLENBQ3pDO0lBQ0QsRUFBQSxvQkFBUXZDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUU4RCxNQUFBQSxPQUFPLEVBQUUsRUFBRTtJQUFFUCxNQUFBQSxTQUFTLEVBQUUsT0FBTztVQUFFSyxlQUFlLEVBQUV2RixHQUFDLENBQUNDLE1BQU07VUFBRXdDLEtBQUssRUFBRXpDLEdBQUMsQ0FBQ1csS0FBSztJQUFFNkUsTUFBQUEsVUFBVSxFQUFFO0lBQXVCO0lBQUUsR0FBQyxlQUM1Si9ELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRThCLElBQUFBLE1BQU0sRUFBRSxNQUFNO0lBQUUySyxJQUFBQSxRQUFRLEVBQUV0QixZQUFZO0lBQUVsTCxJQUFBQSxLQUFLLEVBQUU7SUFBRWdFLE1BQUFBLFFBQVEsRUFBRSxHQUFHO0lBQUV5SSxNQUFBQSxNQUFNLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDOUczTSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeU0sTUFBQUEsTUFBTSxFQUFFLFNBQVM7SUFBRS9ILE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQUVDLE1BQUFBLFVBQVUsRUFBRTtJQUFJO09BQUcsRUFDckYsNEVBQTRFLEVBQzVFa0wsTUFBTSxDQUFDLGVBQ1gvUCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsR0FBRyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeU0sTUFBQUEsTUFBTSxFQUFFLFVBQVU7SUFBRS9ILE1BQUFBLFFBQVEsRUFBRSxFQUFFO1VBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNjO0lBQU07T0FBRyxFQUFFLDBJQUEwSSxDQUFDLGVBQ3JPVyxzQkFBSyxDQUFDQyxhQUFhLENBQUNpSixZQUFZLEVBQUU7SUFBRVIsSUFBQUEsS0FBSyxFQUFFO0lBQWdILEdBQUMsZUFDeEoxSSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRWlKLE1BQUFBLG1CQUFtQixFQUFFLFNBQVM7SUFBRW5JLE1BQUFBLEdBQUcsRUFBRTtJQUFHO0lBQUUsR0FBQyxlQUM5RnpFLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxlQUMzQkQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU0TTtPQUFZLEVBQUUsT0FBTyxDQUFDLGVBQzVEOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFMkYsSUFBQUEsS0FBSyxFQUFFb0ssS0FBSztRQUFFM0osUUFBUSxFQUFFckQsQ0FBQyxJQUFJaU4sUUFBUSxDQUFDak4sQ0FBQyxDQUFDQyxNQUFNLENBQUMyQyxLQUFLLENBQUM7SUFBRW5ELElBQUFBLElBQUksRUFBRSxPQUFPO0lBQUV2QyxJQUFBQSxLQUFLLEVBQUU2RjtJQUFXLEdBQUMsQ0FBQyxDQUFDLGVBQzlIL0Ysc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLGVBQzNCRCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSw2RkFBNkYsQ0FBQyxlQUNsSjlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRTJGLElBQUFBLEtBQUssRUFBRXNLLFFBQVE7UUFBRTdKLFFBQVEsRUFBRXJELENBQUMsSUFBSW1OLFdBQVcsQ0FBQ25OLENBQUMsQ0FBQ0MsTUFBTSxDQUFDMkMsS0FBSyxDQUFDO0lBQUVuRCxJQUFBQSxJQUFJLEVBQUUsVUFBVTtJQUFFdkMsSUFBQUEsS0FBSyxFQUFFNkY7SUFBVyxHQUFDLENBQUMsQ0FBQyxlQUN2SS9GLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxlQUMzQkQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU0TTtPQUFZLEVBQUUsMEJBQTBCLENBQUMsZUFDL0U5TSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRixJQUFBQSxLQUFLLEVBQUUwSyxJQUFJO1FBQUVqSyxRQUFRLEVBQUVyRCxDQUFDLElBQUl1TixPQUFPLENBQUN2TixDQUFDLENBQUNDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQztJQUFFbkQsSUFBQUEsSUFBSSxFQUFFLE1BQU07SUFBRXZDLElBQUFBLEtBQUssRUFBRTZGO0lBQVcsR0FBQyxFQUFFc0ksS0FBSyxDQUFDM0csR0FBRyxDQUFDN0YsQ0FBQyxpQkFBSTdCLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFBRXlCLEdBQUcsRUFBRUcsQ0FBQyxDQUFDK0QsS0FBSztRQUFFQSxLQUFLLEVBQUUvRCxDQUFDLENBQUMrRDtPQUFPLEVBQUUvRCxDQUFDLENBQUNVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUN0TnZDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxlQUMzQkQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU0TTtPQUFZLEVBQUUsWUFBWSxDQUFDLGVBQ2pFOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFMkYsSUFBQUEsS0FBSyxFQUFFNEssU0FBUztRQUFFbkssUUFBUSxFQUFFckQsQ0FBQyxJQUFJeU4sWUFBWSxDQUFDek4sQ0FBQyxDQUFDQyxNQUFNLENBQUMyQyxLQUFLLENBQUM7SUFBRW5ELElBQUFBLElBQUksRUFBRSxZQUFZO0lBQUV2QyxJQUFBQSxLQUFLLEVBQUU2RjtJQUFXLEdBQUMsQ0FBQyxDQUFDLGVBQzNJL0Ysc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRSxJQUFJLGVBQzNCRCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsT0FBTyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTRNO09BQVksRUFBRSx1T0FBdU8sQ0FBQyxlQUM1UjlNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxVQUFVO0lBQUVrRCxJQUFBQSxLQUFLLEVBQUUrSyxRQUFRO1FBQUV0SyxRQUFRLEVBQUVyRCxDQUFDLElBQUk0TixXQUFXLENBQUM1TixDQUFDLENBQUNDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQztJQUFFbkQsSUFBQUEsSUFBSSxFQUFFLFVBQVU7SUFBRXZDLElBQUFBLEtBQUssRUFBRTZGLFVBQVU7SUFBRXBELElBQUFBLFdBQVcsRUFBRTtPQUF1RSxDQUFDLENBQUMsZUFDN08zQyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFMk0sTUFBQUEsVUFBVSxFQUFFO0lBQVM7SUFBRSxHQUFDLGVBQzFEN00sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU0TTtPQUFZLEVBQUUsS0FBSyxDQUFDLGVBQzFEOU0sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFVBQVUsRUFBRTtJQUFFMkYsSUFBQUEsS0FBSyxFQUFFd0ssR0FBRztRQUFFL0osUUFBUSxFQUFFckQsQ0FBQyxJQUFJcU4sTUFBTSxDQUFDck4sQ0FBQyxDQUFDQyxNQUFNLENBQUMyQyxLQUFLLENBQUM7SUFBRW5ELElBQUFBLElBQUksRUFBRSxLQUFLO0lBQUVxRyxJQUFBQSxJQUFJLEVBQUUsQ0FBQztJQUFFNUksSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsVUFBVTtJQUFFZ0QsTUFBQUEsTUFBTSxFQUFFO0lBQVc7T0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQ3pLL0ksc0JBQUssQ0FBQ0MsYUFBYSxDQUFDaUosWUFBWSxFQUFFO0lBQUVSLElBQUFBLEtBQUssRUFBRSxrRkFBa0Y7UUFBRTZGLEtBQUssRUFBRXNDLFdBQVcsQ0FBQ3ZQO0lBQU8sR0FBQyxlQUN0SnRCLHNCQUFLLENBQUNDLGFBQWEsQ0FBQ3lPLEtBQUssRUFBRTtRQUFFaE4sR0FBRyxFQUFFLENBQUEsT0FBQSxFQUFVdVEsVUFBVSxDQUFBLENBQUU7SUFBRW5KLElBQUFBLElBQUksRUFBRStILFdBQVc7SUFBRWpDLElBQUFBLEtBQUssRUFBRSxhQUFhO1FBQUVDLFNBQVMsRUFBRUEsTUFBTXFELGFBQWEsQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQUV4RCxJQUFBQSxJQUFJLEVBQUUsQ0FDN0k7SUFBRWpOLE1BQUFBLEdBQUcsRUFBRSxJQUFJO0lBQUVhLE1BQUFBLEtBQUssRUFBRTtJQUFLLEtBQUMsRUFDMUI7SUFBRWIsTUFBQUEsR0FBRyxFQUFFLFdBQVc7SUFBRWEsTUFBQUEsS0FBSyxFQUFFO0lBQU8sS0FBQyxFQUNuQztJQUFFYixNQUFBQSxHQUFHLEVBQUUsY0FBYztJQUFFYSxNQUFBQSxLQUFLLEVBQUU7SUFBVyxLQUFDLEVBQzFDO0lBQUViLE1BQUFBLEdBQUcsRUFBRSxhQUFhO0lBQUVhLE1BQUFBLEtBQUssRUFBRSxNQUFNO0lBQUVxTixNQUFBQSxNQUFNLEVBQUV3QyxDQUFDLElBQUlBLENBQUMsR0FBRyxJQUFJQyxJQUFJLENBQUNELENBQUMsQ0FBQyxDQUFDRSxrQkFBa0IsRUFBRSxHQUFHO1NBQUk7SUFDL0YsR0FBQyxDQUFDLEVBQ1JYLGdCQUFnQixDQUFDclEsTUFBTSxHQUFHLENBQUMsa0JBQUt0QixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRWMsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRWdCLE1BQUFBLFNBQVMsRUFBRSxDQUFDO0lBQUU3QixNQUFBQSxVQUFVLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDakk1RCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRixJQUFBQSxLQUFLLEVBQUVpTSxXQUFXO1FBQUV4TCxRQUFRLEVBQUVyRCxDQUFDLElBQUk4TyxjQUFjLENBQUM5TyxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsVUFBVTtJQUFFckMsTUFBQUEsS0FBSyxFQUFFO0lBQUk7SUFBRSxHQUFDLGVBQ3JJMUQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkYsSUFBQUEsS0FBSyxFQUFFO0lBQUcsR0FBQyxFQUFFLHlGQUF5RixDQUFDLEVBQ3ZJK0wsZ0JBQWdCLENBQUNqSyxHQUFHLENBQUVzRixDQUFDLGtCQUFNaE4sc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtRQUFFeUIsR0FBRyxFQUFFc0wsQ0FBQyxDQUFDeEssRUFBRTtRQUFFb0QsS0FBSyxFQUFFb0gsQ0FBQyxDQUFDeEs7T0FBSSxFQUNqRndLLENBQUMsQ0FBQ3RFLEtBQUssRUFDUCxLQUFLLEVBQ0xzRSxDQUFDLENBQUN4SyxFQUFFLEVBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ2ZxUCxXQUFXLGlCQUFJN1Isc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRUQsSUFBQUEsSUFBSSxFQUFFLDBCQUEwQjtJQUFFbUQsSUFBQUEsS0FBSyxFQUFFaU07T0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQ2hJN1Isc0JBQUssQ0FBQ0MsYUFBYSxDQUFDaUosWUFBWSxFQUFFO0lBQUVSLElBQUFBLEtBQUssRUFBRSxrRkFBa0Y7UUFBRTZGLEtBQUssRUFBRXlDLE1BQU0sQ0FBQzFQO0lBQU8sR0FBQyxlQUNqSnRCLHNCQUFLLENBQUNDLGFBQWEsQ0FBQ3lPLEtBQUssRUFBRTtRQUFFaE4sR0FBRyxFQUFFLENBQUEsTUFBQSxFQUFTdVEsVUFBVSxDQUFBLENBQUU7SUFBRW5KLElBQUFBLElBQUksRUFBRWtJLE1BQU07SUFBRXBDLElBQUFBLEtBQUssRUFBRSxhQUFhO1FBQUVDLFNBQVMsRUFBRUEsTUFBTXFELGFBQWEsQ0FBQ0MsQ0FBQyxJQUFJQSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQUV4RCxJQUFBQSxJQUFJLEVBQUUsQ0FDdkk7SUFBRWpOLE1BQUFBLEdBQUcsRUFBRSxJQUFJO0lBQUVhLE1BQUFBLEtBQUssRUFBRTtJQUFLLEtBQUMsRUFDMUI7SUFBRWIsTUFBQUEsR0FBRyxFQUFFLFVBQVU7SUFBRWEsTUFBQUEsS0FBSyxFQUFFO0lBQVEsS0FBQyxFQUNuQztJQUFFYixNQUFBQSxHQUFHLEVBQUUsWUFBWTtJQUFFYSxNQUFBQSxLQUFLLEVBQUU7SUFBVyxLQUFDLEVBQ3hDO0lBQUViLE1BQUFBLEdBQUcsRUFBRSxZQUFZO0lBQUVhLE1BQUFBLEtBQUssRUFBRTtJQUFXLEtBQUMsRUFDeEM7SUFBRWIsTUFBQUEsR0FBRyxFQUFFLFlBQVk7SUFBRWEsTUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFBRXFOLE1BQUFBLE1BQU0sRUFBRXdDLENBQUMsSUFBSUEsQ0FBQyxHQUFHLElBQUlDLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUNFLGtCQUFrQixFQUFFLEdBQUc7U0FBSTtJQUNqRyxHQUFDLENBQUMsRUFDUlYsZUFBZSxDQUFDdFEsTUFBTSxHQUFHLENBQUMsa0JBQUt0QixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTtJQUFFeUQsTUFBQUEsT0FBTyxFQUFFLE1BQU07SUFBRWMsTUFBQUEsR0FBRyxFQUFFLENBQUM7SUFBRWdCLE1BQUFBLFNBQVMsRUFBRSxDQUFDO0lBQUU3QixNQUFBQSxVQUFVLEVBQUU7SUFBUztJQUFFLEdBQUMsZUFDaEk1RCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsUUFBUSxFQUFFO0lBQUUyRixJQUFBQSxLQUFLLEVBQUVtTSxVQUFVO1FBQUUxTCxRQUFRLEVBQUVyRCxDQUFDLElBQUlnUCxhQUFhLENBQUNoUCxDQUFDLENBQUNDLE1BQU0sQ0FBQzJDLEtBQUssQ0FBQztJQUFFMUYsSUFBQUEsS0FBSyxFQUFFO0lBQUUsTUFBQSxHQUFHNkYsVUFBVTtJQUFFckMsTUFBQUEsS0FBSyxFQUFFO0lBQUk7SUFBRSxHQUFDLGVBQ25JMUQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFMkYsSUFBQUEsS0FBSyxFQUFFO0lBQUcsR0FBQyxFQUFFLCtGQUErRixDQUFDLEVBQzdJZ00sZUFBZSxDQUFDbEssR0FBRyxDQUFFK0osQ0FBQyxrQkFBTXpSLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7UUFBRXlCLEdBQUcsRUFBRStQLENBQUMsQ0FBQ2pQLEVBQUU7UUFBRW9ELEtBQUssRUFBRTZMLENBQUMsQ0FBQ2pQO09BQUksRUFDaEZpUCxDQUFDLENBQUNoUCxJQUFJLEVBQ04sS0FBSyxFQUNMZ1AsQ0FBQyxDQUFDalAsRUFBRSxFQUNKLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUNmdVAsVUFBVSxpQkFBSS9SLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUVELElBQUFBLElBQUksRUFBRSxjQUFjO0lBQUVtRCxJQUFBQSxLQUFLLEVBQUVtTTtPQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFDbEgvUixzQkFBSyxDQUFDQyxhQUFhLENBQUNpSixZQUFZLEVBQUU7SUFBRVIsSUFBQUEsS0FBSyxFQUFFLG9FQUFvRTtRQUFFNkYsS0FBSyxFQUFFMEMsS0FBSyxDQUFDM1A7SUFBTyxHQUFDLGVBQ2xJdEIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDeU8sS0FBSyxFQUFFO1FBQUVoTixHQUFHLEVBQUUsQ0FBQSxLQUFBLEVBQVF1USxVQUFVLENBQUEsQ0FBRTtJQUFFbkosSUFBQUEsSUFBSSxFQUFFbUksS0FBSztJQUFFckMsSUFBQUEsS0FBSyxFQUFFLGdCQUFnQjtRQUFFQyxTQUFTLEVBQUVBLE1BQU1xRCxhQUFhLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUFFeEQsSUFBQUEsSUFBSSxFQUFFLENBQ3hJO0lBQUVqTixNQUFBQSxHQUFHLEVBQUUsSUFBSTtJQUFFYSxNQUFBQSxLQUFLLEVBQUU7SUFBSyxLQUFDLEVBQzFCO0lBQUViLE1BQUFBLEdBQUcsRUFBRSxXQUFXO0lBQUVhLE1BQUFBLEtBQUssRUFBRTtJQUFPLEtBQUMsRUFDbkM7SUFBRWIsTUFBQUEsR0FBRyxFQUFFLGtCQUFrQjtJQUFFYSxNQUFBQSxLQUFLLEVBQUU7SUFBTSxLQUFDLEVBQ3pDO0lBQUViLE1BQUFBLEdBQUcsRUFBRSxXQUFXO0lBQUVhLE1BQUFBLEtBQUssRUFBRSxPQUFPO0lBQUVxTixNQUFBQSxNQUFNLEVBQUV3QyxDQUFDLElBQUlBLENBQUMsR0FBRyxJQUFJQyxJQUFJLENBQUNELENBQUMsQ0FBQyxDQUFDRSxrQkFBa0IsRUFBRSxHQUFHO1NBQUk7T0FDN0YsQ0FBQyxDQUFDLGVBQ2J0UyxzQkFBSyxDQUFDQyxhQUFhLENBQUNpSixZQUFZLEVBQUU7SUFBRVIsSUFBQUEsS0FBSyxFQUFFLHVGQUF1RjtRQUFFNkYsS0FBSyxFQUFFMkMsT0FBTyxDQUFDNVA7SUFBTyxHQUFDLGVBQ3ZKdEIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDeU8sS0FBSyxFQUFFO1FBQUVoTixHQUFHLEVBQUUsQ0FBQSxPQUFBLEVBQVV1USxVQUFVLENBQUEsQ0FBRTtJQUFFbkosSUFBQUEsSUFBSSxFQUFFb0ksT0FBTztJQUFFdEMsSUFBQUEsS0FBSyxFQUFFLG1CQUFtQjtRQUFFQyxTQUFTLEVBQUVBLE1BQU1xRCxhQUFhLENBQUNDLENBQUMsSUFBSUEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUFFeEQsSUFBQUEsSUFBSSxFQUFFLENBQy9JO0lBQUVqTixNQUFBQSxHQUFHLEVBQUUsSUFBSTtJQUFFYSxNQUFBQSxLQUFLLEVBQUU7SUFBSyxLQUFDLEVBQzFCO0lBQUViLE1BQUFBLEdBQUcsRUFBRSxVQUFVO0lBQUVhLE1BQUFBLEtBQUssRUFBRTtJQUFZLEtBQUMsRUFDdkM7SUFBRWIsTUFBQUEsR0FBRyxFQUFFLEtBQUs7SUFBRWEsTUFBQUEsS0FBSyxFQUFFLEtBQUs7VUFBRXFOLE1BQU0sRUFBRXdDLENBQUMsSUFBSUEsQ0FBQyxFQUFFRyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUU7U0FBRztPQUMvRCxDQUFDLENBQUMsZUFDYnZTLHNCQUFLLENBQUNDLGFBQWEsQ0FBQ2lKLFlBQVksRUFBRTtJQUFFUixJQUFBQSxLQUFLLEVBQUUsaUZBQWlGO1FBQUU2RixLQUFLLEVBQUV3QyxZQUFZLENBQUN6UDtJQUFPLEdBQUMsZUFDdEp0QixzQkFBSyxDQUFDQyxhQUFhLENBQUN5TyxLQUFLLEVBQUU7SUFBRTVGLElBQUFBLElBQUksRUFBRWlJLFlBQVk7SUFBRXBDLElBQUFBLElBQUksRUFBRSxDQUMvQztJQUFFak4sTUFBQUEsR0FBRyxFQUFFLElBQUk7SUFBRWEsTUFBQUEsS0FBSyxFQUFFO0lBQUssS0FBQyxFQUMxQjtJQUFFYixNQUFBQSxHQUFHLEVBQUUsU0FBUztJQUFFYSxNQUFBQSxLQUFLLEVBQUU7SUFBTyxLQUFDLEVBQ2pDO0lBQUViLE1BQUFBLEdBQUcsRUFBRSxZQUFZO0lBQUVhLE1BQUFBLEtBQUssRUFBRTtJQUFXLEtBQUMsRUFDeEM7SUFBRWIsTUFBQUEsR0FBRyxFQUFFLE9BQU87SUFBRWEsTUFBQUEsS0FBSyxFQUFFO0lBQU8sS0FBQyxFQUMvQjtJQUFFYixNQUFBQSxHQUFHLEVBQUUsUUFBUTtJQUFFYSxNQUFBQSxLQUFLLEVBQUUsU0FBUztJQUFFcU4sTUFBQUEsTUFBTSxFQUFFd0MsQ0FBQyxJQUFJQSxDQUFDLEdBQUcsSUFBSSxHQUFHO0lBQU0sS0FBQyxFQUNsRTtJQUFFMVEsTUFBQUEsR0FBRyxFQUFFLGNBQWM7SUFBRWEsTUFBQUEsS0FBSyxFQUFFLE1BQU07SUFBRXFOLE1BQUFBLE1BQU0sRUFBRXdDLENBQUMsSUFBSUEsQ0FBQyxHQUFHLElBQUlDLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUNFLGtCQUFrQixFQUFFLEdBQUc7U0FBSTtPQUMvRixDQUFDLENBQUMsZUFDYnRTLHNCQUFLLENBQUNDLGFBQWEsQ0FBQ2lKLFlBQVksRUFBRTtJQUFFUixJQUFBQSxLQUFLLEVBQUUsb0dBQW9HO1FBQUU2RixLQUFLLEVBQUV1QyxRQUFRLENBQUN4UDtJQUFPLEdBQUMsZUFDckt0QixzQkFBSyxDQUFDQyxhQUFhLENBQUN5TyxLQUFLLEVBQUU7SUFBRTVGLElBQUFBLElBQUksRUFBRWdJLFFBQVE7SUFBRW5DLElBQUFBLElBQUksRUFBRSxDQUMzQztJQUFFak4sTUFBQUEsR0FBRyxFQUFFLElBQUk7SUFBRWEsTUFBQUEsS0FBSyxFQUFFO0lBQUssS0FBQyxFQUMxQjtJQUFFYixNQUFBQSxHQUFHLEVBQUUsV0FBVztJQUFFYSxNQUFBQSxLQUFLLEVBQUU7SUFBTyxLQUFDLEVBQ25DO0lBQUViLE1BQUFBLEdBQUcsRUFBRSxRQUFRO0lBQUVhLE1BQUFBLEtBQUssRUFBRTtJQUFTLEtBQUMsRUFDbEM7SUFBRWIsTUFBQUEsR0FBRyxFQUFFLFlBQVk7SUFBRWEsTUFBQUEsS0FBSyxFQUFFLFVBQVU7SUFBRXFOLE1BQUFBLE1BQU0sRUFBRXdDLENBQUMsSUFBSUEsQ0FBQyxHQUFHLElBQUlDLElBQUksQ0FBQ0QsQ0FBQyxDQUFDLENBQUNFLGtCQUFrQixFQUFFLEdBQUc7U0FBSTtPQUNqRyxDQUFDLENBQUMsZUFDYnRTLHNCQUFLLENBQUNDLGFBQWEsQ0FBQ2lKLFlBQVksRUFBRTtJQUFFUixJQUFBQSxLQUFLLEVBQUUsMkVBQTJFO1FBQUU2RixLQUFLLEVBQUU0QyxPQUFPLENBQUM3UDtJQUFPLEdBQUMsZUFDM0l0QixzQkFBSyxDQUFDQyxhQUFhLENBQUN5TyxLQUFLLEVBQUU7SUFBRTVGLElBQUFBLElBQUksRUFBRXFJLE9BQU87SUFBRXhDLElBQUFBLElBQUksRUFBRSxDQUMxQztJQUFFak4sTUFBQUEsR0FBRyxFQUFFLElBQUk7SUFBRWEsTUFBQUEsS0FBSyxFQUFFO0lBQUssS0FBQyxFQUMxQjtJQUFFYixNQUFBQSxHQUFHLEVBQUUsV0FBVztJQUFFYSxNQUFBQSxLQUFLLEVBQUU7SUFBTyxLQUFDLEVBQ25DO0lBQUViLE1BQUFBLEdBQUcsRUFBRSxjQUFjO0lBQUVhLE1BQUFBLEtBQUssRUFBRTtJQUFXLEtBQUMsRUFDMUM7SUFBRWIsTUFBQUEsR0FBRyxFQUFFLFFBQVE7SUFBRWEsTUFBQUEsS0FBSyxFQUFFO0lBQVMsS0FBQyxFQUNsQztJQUFFYixNQUFBQSxHQUFHLEVBQUUsWUFBWTtJQUFFYSxNQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUFFcU4sTUFBQUEsTUFBTSxFQUFFd0MsQ0FBQyxJQUFJQSxDQUFDLEdBQUcsSUFBSUMsSUFBSSxDQUFDRCxDQUFDLENBQUMsQ0FBQ0Usa0JBQWtCLEVBQUUsR0FBRztTQUFJO09BQzdGLENBQUMsQ0FBQyxlQUNidFMsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFeUMsSUFBQUEsSUFBSSxFQUFFLFFBQVE7SUFBRThLLElBQUFBLFFBQVEsRUFBRWhELFVBQVU7SUFBRXRLLElBQUFBLEtBQUssRUFBRTtJQUNyRThELE1BQUFBLE9BQU8sRUFBRSxXQUFXO1VBQ3BCVixVQUFVLEVBQUUsMkJBQTJCL0UsR0FBQyxDQUFDTSxLQUFLLENBQUEsRUFBQSxFQUFLTixHQUFDLENBQUNPLFNBQVMsQ0FBQSxDQUFBLENBQUc7SUFDakVrQyxNQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNicEMsTUFBQUEsTUFBTSxFQUFFLE1BQU07SUFDZHVGLE1BQUFBLFlBQVksRUFBRSxDQUFDO0lBQ2ZTLE1BQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLE1BQUFBLFVBQVUsRUFBRSxHQUFHO0lBQ2ZXLE1BQUFBLE1BQU0sRUFBRWdGLFVBQVUsR0FBRyxhQUFhLEdBQUc7SUFDekM7T0FBRyxFQUFFQSxVQUFVLEdBQUcsYUFBYSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDaEU7SUFDQSxNQUFNc0MsVUFBVSxHQUFHO0lBQ2ZuSixFQUFBQSxPQUFPLEVBQUUsT0FBTztJQUNoQmlCLEVBQUFBLFFBQVEsRUFBRSxFQUFFO0lBQ1pDLEVBQUFBLFVBQVUsRUFBRSxHQUFHO01BQ2Y3RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNhLEtBQUs7SUFDZHNGLEVBQUFBLFlBQVksRUFBRTtJQUNsQixDQUFDOztJQ3pRRCxNQUFNbkcsR0FBQyxHQUFHO0lBQ05DLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCRSxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFBQUEsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsU0FBUyxFQUFFLFNBQVM7SUFDcEJHLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsS0FBSyxFQUFFLFNBQVM7SUFDaEJDLEVBQ0FDLEtBQUssRUFBRTtJQUNYLENBQUM7SUFDYyxTQUFTbVQsU0FBU0EsQ0FBQzVJLEtBQUssRUFBRTtNQUNyQyxNQUFNK0QsTUFBTSxHQUFHL0QsS0FBSyxDQUFDK0QsTUFBTSxFQUFFbEMsTUFBTSxJQUFJLEVBQUU7TUFDekMsTUFBTWdILGNBQWMsR0FBRyxDQUFDLE1BQU07UUFDMUIsSUFBSTtJQUNBLE1BQUEsT0FBTzlFLE1BQU0sQ0FBQytFLFlBQVksR0FBR3JGLElBQUksQ0FBQ1UsS0FBSyxDQUFDSixNQUFNLENBQUMrRSxZQUFZLENBQUMsR0FBRyxFQUFFO0lBQ3JFLElBQUEsQ0FBQyxDQUNELE1BQU07SUFDRixNQUFBLE9BQU8sRUFBRTtJQUNiLElBQUE7SUFDSixFQUFBLENBQUMsR0FBRztJQUNKLEVBQUEsTUFBTSxDQUFDQyxPQUFPLENBQUMsR0FBRzVTLGNBQVEsQ0FBQzBTLGNBQWMsQ0FBQztJQUMxQyxFQUFBLE1BQU0sQ0FBQ0csUUFBUSxFQUFFQyxXQUFXLENBQUMsR0FBRzlTLGNBQVEsQ0FBQyxJQUFJaVAsR0FBRyxFQUFFLENBQUM7TUFDbkQsTUFBTSxDQUFDeEUsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzFLLGNBQVEsQ0FBQyxLQUFLLENBQUM7SUFDbkQsRUFBQSxNQUFNaUwsTUFBTSxHQUFHdkwsTUFBTSxDQUFDd0wsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQztNQUNwRixNQUFNMkgsWUFBWSxHQUFJdFEsRUFBRSxJQUFLO1FBQ3pCcVEsV0FBVyxDQUFDM0QsSUFBSSxJQUFJO0lBQ2hCLE1BQUEsTUFBTTlILElBQUksR0FBRyxJQUFJNEgsR0FBRyxDQUFDRSxJQUFJLENBQUM7VUFDMUIsSUFBSTlILElBQUksQ0FBQ3VJLEdBQUcsQ0FBQ25OLEVBQUUsQ0FBQyxFQUNaNEUsSUFBSSxDQUFDbUksTUFBTSxDQUFDL00sRUFBRSxDQUFDLENBQUMsS0FFaEI0RSxJQUFJLENBQUMrSCxHQUFHLENBQUMzTSxFQUFFLENBQUM7SUFDaEIsTUFBQSxPQUFPNEUsSUFBSTtJQUNmLElBQUEsQ0FBQyxDQUFDO01BQ04sQ0FBQztJQUNELEVBQUEsTUFBTWdFLFlBQVksR0FBRyxNQUFPcEksQ0FBQyxJQUFLO1FBQzlCQSxDQUFDLENBQUNxSSxjQUFjLEVBQUU7UUFDbEJaLGFBQWEsQ0FBQyxJQUFJLENBQUM7UUFDbkIsSUFBSTtJQUNBLE1BQUEsTUFBTWEsSUFBSSxHQUFHdEksQ0FBQyxDQUFDQyxNQUFNO0lBQ3JCLE1BQUEsTUFBTXNJLEVBQUUsR0FBRyxJQUFJQyxRQUFRLENBQUNGLElBQUksQ0FBQztJQUM3QixNQUFBLE1BQU1HLE1BQU0sR0FBRyxJQUFJQyxlQUFlLEVBQUU7SUFDcEMsTUFBQSxLQUFLLE1BQU0sQ0FBQ2hLLEdBQUcsRUFBRWlLLEdBQUcsQ0FBQyxJQUFJSixFQUFFLENBQUNLLE9BQU8sRUFBRSxFQUFFO0lBQ25DSCxRQUFBQSxNQUFNLENBQUNJLE1BQU0sQ0FBQ25LLEdBQUcsRUFBRWlLLEdBQUcsQ0FBQztJQUMzQixNQUFBO0lBQ0EsTUFBQSxNQUFNRyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDZixNQUFNLEVBQUU7SUFDNUJqSixRQUFBQSxNQUFNLEVBQUUsTUFBTTtJQUNkaUssUUFBQUEsT0FBTyxFQUFFO0lBQUUsVUFBQSxjQUFjLEVBQUU7YUFBcUM7SUFDaEVDLFFBQUFBLElBQUksRUFBRVI7SUFDVixPQUFDLENBQUM7SUFDRixNQUFBLE1BQU1TLElBQUksR0FBRyxNQUFNSixHQUFHLENBQUNLLElBQUksRUFBRTtVQUM3QixJQUFJRCxJQUFJLENBQUNFLFdBQVcsRUFBRTtJQUNsQjNNLFFBQUFBLE1BQU0sQ0FBQ3dMLFFBQVEsQ0FBQ29CLElBQUksR0FBR0gsSUFBSSxDQUFDRSxXQUFXO0lBQzNDLE1BQUEsQ0FBQyxNQUNJO1lBQ0RFLEtBQUssQ0FBQ0osSUFBSSxDQUFDSyxNQUFNLEVBQUVDLE9BQU8sSUFBSSx1QkFBdUIsQ0FBQztJQUMxRCxNQUFBO1FBQ0osQ0FBQyxDQUNELE9BQU9DLEdBQUcsRUFBRTtJQUNSSCxNQUFBQSxLQUFLLENBQUMsQ0FBQSxRQUFBLEVBQVdHLEdBQUcsQ0FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDbkMsSUFBQSxDQUFDLFNBQ087VUFDSi9CLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDeEIsSUFBQTtNQUNKLENBQUM7SUFDRCxFQUFBLG9CQUFRekssc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRThELE1BQUFBLE9BQU8sRUFBRSxFQUFFO0lBQUVQLE1BQUFBLFNBQVMsRUFBRSxPQUFPO1VBQUVLLGVBQWUsRUFBRXZGLEdBQUMsQ0FBQ0MsTUFBTTtVQUFFd0MsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQUU2RSxNQUFBQSxVQUFVLEVBQUU7SUFBdUI7SUFBRSxHQUFDLGVBQzVKL0Qsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLE1BQU0sRUFBRTtJQUFFOEIsSUFBQUEsTUFBTSxFQUFFLE1BQU07SUFBRTJLLElBQUFBLFFBQVEsRUFBRXRCLFlBQVk7SUFBRWxMLElBQUFBLEtBQUssRUFBRTtJQUFFZ0UsTUFBQUEsUUFBUSxFQUFFLEdBQUc7SUFBRXlJLE1BQUFBLE1BQU0sRUFBRTtJQUFTO0lBQUUsR0FBQyxlQUM5RzNNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5TSxNQUFBQSxNQUFNLEVBQUUsU0FBUztJQUFFL0gsTUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFBRUMsTUFBQUEsVUFBVSxFQUFFO0lBQUk7T0FBRyxFQUFFLHFIQUFxSCxDQUFDLGVBQ2pON0Usc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlNLE1BQUFBLE1BQU0sRUFBRSxVQUFVO0lBQUUvSCxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDYztJQUFNO09BQUcsRUFBRSwySkFBMkosQ0FBQyxlQUN0UFcsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXdFLE1BQUFBLFlBQVksRUFBRSxFQUFFO0lBQUVWLE1BQUFBLE9BQU8sRUFBRSxFQUFFO1VBQUVWLFVBQVUsRUFBRS9FLEdBQUMsQ0FBQ0csTUFBTTtJQUFFRSxNQUFBQSxNQUFNLEVBQUUsQ0FBQSxVQUFBLEVBQWFMLEdBQUMsQ0FBQ0ssTUFBTSxDQUFBLENBQUU7SUFBRXVGLE1BQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsR0FBQyxlQUMzSW5FLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUwRSxNQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUFFQyxNQUFBQSxVQUFVLEVBQUUsR0FBRztVQUFFN0QsS0FBSyxFQUFFekMsR0FBQyxDQUFDWSxLQUFLO0lBQUV3TixNQUFBQSxNQUFNLEVBQUU7SUFBVztPQUFHLEVBQ3RHLHNDQUFzQyxlQUN0QzNNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUUwRSxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDYyxLQUFLO0lBQUV3RixNQUFBQSxVQUFVLEVBQUUsR0FBRztJQUFFdUksTUFBQUEsVUFBVSxFQUFFO0lBQUU7T0FBRyxFQUNuRyxHQUFHLEVBQ0h1RixPQUFPLENBQUNyUixNQUFNLEVBQ2QsR0FBRyxDQUFDLENBQUMsRUFDYnFSLE9BQU8sQ0FBQ3JSLE1BQU0sS0FBSyxDQUFDLGtCQUFLdEIsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRTBFLE1BQUFBLFFBQVEsRUFBRSxFQUFFO1VBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNjO0lBQU07T0FBRyxFQUFFLCtEQUErRCxDQUFDLENBQUMsRUFDaEtzVCxPQUFPLENBQUNqTCxHQUFHLENBQUVxTCxLQUFLLElBQUs7UUFDbkIsTUFBTUMsTUFBTSxHQUFHSixRQUFRLENBQUNqRCxHQUFHLENBQUNvRCxLQUFLLENBQUN2USxFQUFFLENBQUM7SUFDckMsSUFBQSxvQkFBUXhDLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7VUFBRXlCLEdBQUcsRUFBRXFSLEtBQUssQ0FBQ3ZRLEVBQUU7SUFBRXRDLE1BQUFBLEtBQUssRUFBRTtJQUNuRHlELFFBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZDLFFBQUFBLFVBQVUsRUFBRSxZQUFZO0lBQ3hCYSxRQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUNOQyxRQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmVixRQUFBQSxPQUFPLEVBQUUsRUFBRTtZQUNYVixVQUFVLEVBQUUvRSxHQUFDLENBQUNJLE9BQU87WUFDckJDLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYW9VLE1BQU0sR0FBR3pVLEdBQUMsQ0FBQ1UsS0FBSyxHQUFHVixHQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQ2xEdUYsUUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZmUsUUFBQUEsT0FBTyxFQUFFOE4sTUFBTSxHQUFHLEdBQUcsR0FBRztJQUM1QjtJQUFFLEtBQUMsZUFDSGhULHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLE1BQUFBLElBQUksRUFBRSxVQUFVO0lBQUUrRCxNQUFBQSxPQUFPLEVBQUV1TSxNQUFNO1VBQUUzTSxRQUFRLEVBQUVBLE1BQU15TSxZQUFZLENBQUNDLEtBQUssQ0FBQ3ZRLEVBQUUsQ0FBQztJQUFFdEMsTUFBQUEsS0FBSyxFQUFFO0lBQUV1RixRQUFBQSxTQUFTLEVBQUUsQ0FBQztZQUFFa0IsV0FBVyxFQUFFcEksR0FBQyxDQUFDVTtJQUFNO0lBQUUsS0FBQyxDQUFDLGVBQzFKZSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLE1BQUFBLEtBQUssRUFBRTtJQUFFbUUsUUFBQUEsSUFBSSxFQUFFO0lBQUU7SUFBRSxLQUFDLGVBQzdDckUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtJQUFFQyxNQUFBQSxLQUFLLEVBQUU7SUFBRTBFLFFBQUFBLFFBQVEsRUFBRSxFQUFFO1lBQUU1RCxLQUFLLEVBQUV6QyxHQUFDLENBQUNjLEtBQUs7SUFBRXFGLFFBQUFBLFlBQVksRUFBRTtJQUFFO0lBQUUsS0FBQyxFQUNuRixHQUFHLEVBQ0hxTyxLQUFLLENBQUN2USxFQUFFLEVBQ1IsVUFBVSxFQUNWdVEsS0FBSyxDQUFDRSxVQUFVLElBQUksUUFBUUYsS0FBSyxDQUFDRyxPQUFPLENBQUEsQ0FBRSxFQUMzQyxVQUFVLEVBQ1YsSUFBSWIsSUFBSSxDQUFDVSxLQUFLLENBQUNJLFVBQVUsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQyxlQUNoRHBULHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsTUFBQUEsS0FBSyxFQUFFO0lBQUUwRSxRQUFBQSxRQUFRLEVBQUUsRUFBRTtZQUFFNUQsS0FBSyxFQUFFekMsR0FBQyxDQUFDVyxLQUFLO0lBQUVzSCxRQUFBQSxVQUFVLEVBQUU7SUFBVztJQUFFLEtBQUMsRUFBRXVNLEtBQUssQ0FBQzlHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekgsRUFBQSxDQUFDLENBQUMsZUFDRmpNLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxPQUFPLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUVELElBQUFBLElBQUksRUFBRSxrQkFBa0I7UUFBRW1ELEtBQUssRUFBRXlILElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUMsR0FBR3NGLFFBQVEsQ0FBQztPQUFHLENBQUMsQ0FBQyxlQUNySDVTLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7SUFBRXlDLElBQUFBLElBQUksRUFBRSxRQUFRO0lBQUU4SyxJQUFBQSxRQUFRLEVBQUVoRCxVQUFVO0lBQUV0SyxJQUFBQSxLQUFLLEVBQUU7SUFDckU4RCxNQUFBQSxPQUFPLEVBQUUsV0FBVztVQUNwQlYsVUFBVSxFQUFFLDJCQUEyQi9FLEdBQUMsQ0FBQ00sS0FBSyxDQUFBLEVBQUEsRUFBS04sR0FBQyxDQUFDTyxTQUFTLENBQUEsQ0FBQSxDQUFHO0lBQ2pFa0MsTUFBQUEsS0FBSyxFQUFFLE1BQU07SUFDYnBDLE1BQUFBLE1BQU0sRUFBRSxNQUFNO0lBQ2R1RixNQUFBQSxZQUFZLEVBQUUsQ0FBQztJQUNmUyxNQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxNQUFBQSxVQUFVLEVBQUUsR0FBRztJQUNmVyxNQUFBQSxNQUFNLEVBQUVnRixVQUFVLEdBQUcsYUFBYSxHQUFHO0lBQ3pDO09BQUcsRUFBRUEsVUFBVSxHQUFHLGFBQWEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ2hFOztJQ2xIQSxNQUFNak0sQ0FBQyxHQUFHO0lBQ05DLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCNlUsRUFDQTNVLE1BQU0sRUFBRSxTQUFTO0lBQ2pCNFUsRUFDQTFVLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQjBVLEVBQUFBLFVBQVUsRUFBRSxTQUFTO0lBQ3JCelUsRUFBQUEsU0FBUyxFQUFFLFNBQVM7SUFDcEJDLEVBQUFBLElBQUksRUFBRSxTQUFTO0lBQ2ZDLEVBQUFBLElBQUksRUFBRSxTQUFTO0lBQ2ZDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCdVUsRUFBQUEsV0FBVyxFQUFFLFNBQVM7SUFDdEJDLEVBQUFBLFNBQVMsRUFBRSxTQUFTO0lBQ3BCQyxFQUFBQSxTQUFTLEVBQUUsU0FBUztJQUNwQkMsRUFBQUEsU0FBUyxFQUFFO0lBQ2YsQ0FBQztJQUNELE1BQU1DLE1BQU0sR0FBRztJQUNYeFQsRUFBQUEsSUFBSSxFQUFFO0lBQ0Y0RCxJQUFBQSxPQUFPLEVBQUUsRUFBRTtJQUNYUCxJQUFBQSxTQUFTLEVBQUUsT0FBTztRQUNsQkssZUFBZSxFQUFFdkYsQ0FBQyxDQUFDQyxNQUFNO1FBQ3pCd0MsS0FBSyxFQUFFekMsQ0FBQyxDQUFDaVYsV0FBVztJQUNwQnpQLElBQUFBLFVBQVUsRUFBRTtPQUNmO0lBQ0Q4UCxFQUFBQSxNQUFNLEVBQUU7SUFDSmxRLElBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZFLElBQUFBLGNBQWMsRUFBRSxlQUFlO0lBQy9CRCxJQUFBQSxVQUFVLEVBQUUsWUFBWTtJQUN4QmMsSUFBQUEsWUFBWSxFQUFFLEVBQUU7SUFDaEJvUCxJQUFBQSxhQUFhLEVBQUUsRUFBRTtJQUNqQnBFLElBQUFBLFlBQVksRUFBRSxDQUFBLFVBQUEsRUFBYW5SLENBQUMsQ0FBQ0ssTUFBTSxDQUFBO09BQ3RDO0lBQ0Q4SixFQUFBQSxLQUFLLEVBQUU7SUFDSGlFLElBQUFBLE1BQU0sRUFBRSxDQUFDO0lBQ1QvSCxJQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxJQUFBQSxVQUFVLEVBQUUsR0FBRztRQUNmN0QsS0FBSyxFQUFFekMsQ0FBQyxDQUFDaVYsV0FBVztJQUNwQnpPLElBQUFBLGFBQWEsRUFBRTtPQUNsQjtJQUNEZ1AsRUFBQUEsUUFBUSxFQUFFO0lBQ050TyxJQUFBQSxTQUFTLEVBQUUsQ0FBQztJQUNaYixJQUFBQSxRQUFRLEVBQUUsRUFBRTtRQUNaNUQsS0FBSyxFQUFFekMsQ0FBQyxDQUFDb1Y7T0FDWjtJQUNESyxFQUFBQSxTQUFTLEVBQUU7SUFDUHBQLElBQUFBLFFBQVEsRUFBRSxFQUFFO1FBQ1o1RCxLQUFLLEVBQUV6QyxDQUFDLENBQUNvVixTQUFTO0lBQ2xCak8sSUFBQUEsU0FBUyxFQUFFLE9BQU87SUFDbEJELElBQUFBLFNBQVMsRUFBRTtPQUNkO0lBQ0R3TyxFQUFBQSxXQUFXLEVBQUU7SUFDVHRRLElBQUFBLE9BQU8sRUFBRSxNQUFNO0lBQ2ZpSixJQUFBQSxtQkFBbUIsRUFBRSx1Q0FBdUM7SUFDNURuSSxJQUFBQSxHQUFHLEVBQUUsRUFBRTtJQUNQQyxJQUFBQSxZQUFZLEVBQUU7T0FDakI7TUFDRHdQLFVBQVUsRUFBR3ZOLFdBQVcsS0FBTTtRQUMxQjdDLGVBQWUsRUFBRXZGLENBQUMsQ0FBQ0csTUFBTTtJQUN6QkUsSUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxDQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO1FBQy9CdVYsU0FBUyxFQUFFLENBQUEsVUFBQSxFQUFheE4sV0FBVyxDQUFBLENBQUU7SUFDckN4QyxJQUFBQSxZQUFZLEVBQUUsRUFBRTtJQUNoQkgsSUFBQUEsT0FBTyxFQUFFLFdBQVc7SUFDcEJRLElBQUFBLFFBQVEsRUFBRSxVQUFVO0lBQ3BCSixJQUFBQSxRQUFRLEVBQUUsUUFBUTtJQUNsQmtCLElBQUFBLFVBQVUsRUFBRTtJQUNoQixHQUFDLENBQUM7SUFDRjhPLEVBQUFBLFdBQVcsRUFBRTtJQUNUeFAsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsSUFBQUEsVUFBVSxFQUFFLEdBQUc7SUFDZkMsSUFBQUEsYUFBYSxFQUFFLFdBQVc7SUFDMUJDLElBQUFBLGFBQWEsRUFBRSxRQUFRO1FBQ3ZCL0QsS0FBSyxFQUFFekMsQ0FBQyxDQUFDb1YsU0FBUztJQUNsQmpQLElBQUFBLFlBQVksRUFBRTtPQUNqQjtJQUNEMlAsRUFBQUEsV0FBVyxFQUFFO0lBQ1R6UCxJQUFBQSxRQUFRLEVBQUUsRUFBRTtJQUNaQyxJQUFBQSxVQUFVLEVBQUUsR0FBRztRQUNmN0QsS0FBSyxFQUFFekMsQ0FBQyxDQUFDaVYsV0FBVztJQUNwQnhPLElBQUFBLFVBQVUsRUFBRSxDQUFDO0lBQ2JOLElBQUFBLFlBQVksRUFBRTtPQUNqQjtJQUNENFAsRUFBQUEsVUFBVSxFQUFFO0lBQ1IxUCxJQUFBQSxRQUFRLEVBQUUsRUFBRTtRQUNaNUQsS0FBSyxFQUFFekMsQ0FBQyxDQUFDZ1YsVUFBVTtJQUNuQmdCLElBQUFBLGNBQWMsRUFBRTtPQUNuQjtJQUNEQyxFQUFBQSxTQUFTLEVBQUU7SUFDUDVQLElBQUFBLFFBQVEsRUFBRSxFQUFFO1FBQ1o1RCxLQUFLLEVBQUV6QyxDQUFDLENBQUNvVjtPQUNaO0lBQ0RjLEVBQUFBLFVBQVUsRUFBRTtJQUNSOVEsSUFBQUEsT0FBTyxFQUFFLE1BQU07SUFDZmlKLElBQUFBLG1CQUFtQixFQUFFLHVDQUF1QztJQUM1RG5JLElBQUFBLEdBQUcsRUFBRTtPQUNSO0lBQ0RpUSxFQUFBQSxNQUFNLEVBQUU7UUFDSjVRLGVBQWUsRUFBRXZGLENBQUMsQ0FBQ0csTUFBTTtJQUN6QkUsSUFBQUEsTUFBTSxFQUFFLENBQUEsVUFBQSxFQUFhTCxDQUFDLENBQUNLLE1BQU0sQ0FBQSxDQUFFO0lBQy9CdUYsSUFBQUEsWUFBWSxFQUFFLEVBQUU7SUFDaEJILElBQUFBLE9BQU8sRUFBRTtPQUNaO0lBQ0QyUSxFQUFBQSxXQUFXLEVBQUU7SUFDVGhJLElBQUFBLE1BQU0sRUFBRSxZQUFZO0lBQ3BCL0gsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsSUFBQUEsVUFBVSxFQUFFLEdBQUc7UUFDZjdELEtBQUssRUFBRXpDLENBQUMsQ0FBQ2tWO09BQ1o7SUFDRG1CLEVBQUFBLFFBQVEsRUFBRTtJQUNOalIsSUFBQUEsT0FBTyxFQUFFLGNBQWM7SUFDdkJLLElBQUFBLE9BQU8sRUFBRSxVQUFVO1FBQ25CVixVQUFVLEVBQUUsMkJBQTJCL0UsQ0FBQyxDQUFDTSxLQUFLLENBQUEsRUFBQSxFQUFLTixDQUFDLENBQUNPLFNBQVMsQ0FBQSxDQUFBLENBQUc7SUFDakVrQyxJQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNibUQsSUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZm9RLElBQUFBLGNBQWMsRUFBRSxNQUFNO0lBQ3RCM1AsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsSUFBQUEsVUFBVSxFQUFFLEdBQUc7SUFDZkUsSUFBQUEsYUFBYSxFQUFFO09BQ2xCO0lBQ0Q4UCxFQUFBQSxPQUFPLEVBQUU7SUFDTGxSLElBQUFBLE9BQU8sRUFBRSxjQUFjO0lBQ3ZCSyxJQUFBQSxPQUFPLEVBQUUsVUFBVTtJQUNuQlYsSUFBQUEsVUFBVSxFQUFFLENBQUEsd0JBQUEsRUFBMkIvRSxDQUFDLENBQUNTLElBQUksQ0FBQSxVQUFBLENBQVk7SUFDekRnQyxJQUFBQSxLQUFLLEVBQUUsTUFBTTtJQUNibUQsSUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZm9RLElBQUFBLGNBQWMsRUFBRSxNQUFNO0lBQ3RCM1AsSUFBQUEsUUFBUSxFQUFFLEVBQUU7SUFDWkMsSUFBQUEsVUFBVSxFQUFFLEdBQUc7SUFDZkUsSUFBQUEsYUFBYSxFQUFFO09BQ2xCO0lBQ0QrUCxFQUFBQSxPQUFPLEVBQUU7SUFDTHJQLElBQUFBLFNBQVMsRUFBRSxFQUFFO0lBQ2J6QixJQUFBQSxPQUFPLEVBQUUsV0FBVztJQUNwQkYsSUFBQUEsZUFBZSxFQUFFLHVCQUF1QjtJQUN4Q2xGLElBQUFBLE1BQU0sRUFBRSxDQUFBLCtCQUFBLENBQWlDO0lBQ3pDdUYsSUFBQUEsWUFBWSxFQUFFLENBQUM7SUFDZlMsSUFBQUEsUUFBUSxFQUFFLEVBQUU7UUFDWjVELEtBQUssRUFBRXpDLENBQUMsQ0FBQ21WO09BQ1o7SUFDRHZSLEVBQUFBLFFBQVEsRUFBRTtJQUNONkIsSUFBQUEsT0FBTyxFQUFFLFdBQVc7SUFDcEJGLElBQUFBLGVBQWUsRUFBRSxxQkFBcUI7SUFDdENsRixJQUFBQSxNQUFNLEVBQUUsQ0FBQSw2QkFBQSxDQUErQjtJQUN2Q3VGLElBQUFBLFlBQVksRUFBRSxFQUFFO0lBQ2hCUyxJQUFBQSxRQUFRLEVBQUUsRUFBRTtRQUNaNUQsS0FBSyxFQUFFekMsQ0FBQyxDQUFDVTtPQUNaO0lBQ0Q4VixFQUFBQSxVQUFVLEVBQUU7SUFDUi9RLElBQUFBLE9BQU8sRUFBRSxXQUFXO1FBQ3BCRixlQUFlLEVBQUV2RixDQUFDLENBQUNHLE1BQU07SUFDekJFLElBQUFBLE1BQU0sRUFBRSxDQUFBLFVBQUEsRUFBYUwsQ0FBQyxDQUFDSyxNQUFNLENBQUEsQ0FBRTtJQUMvQnVGLElBQUFBLFlBQVksRUFBRSxFQUFFO0lBQ2hCUyxJQUFBQSxRQUFRLEVBQUUsRUFBRTtRQUNaNUQsS0FBSyxFQUFFekMsQ0FBQyxDQUFDbVY7T0FDWjtNQUNEc0IsVUFBVSxFQUFHck8sV0FBVyxLQUFNO0lBQzFCbkMsSUFBQUEsUUFBUSxFQUFFLFVBQVU7SUFDcEJ5USxJQUFBQSxHQUFHLEVBQUUsQ0FBQztJQUNOalQsSUFBQUEsS0FBSyxFQUFFLENBQUM7SUFDUjBCLElBQUFBLEtBQUssRUFBRSxFQUFFO0lBQ1RpQixJQUFBQSxNQUFNLEVBQUUsRUFBRTtJQUNWUixJQUFBQSxZQUFZLEVBQUUsZUFBZTtJQUM3QkwsSUFBQUEsZUFBZSxFQUFFNkMsV0FBVztJQUM1QnpCLElBQUFBLE9BQU8sRUFBRSxJQUFJO0lBQ2JFLElBQUFBLGFBQWEsRUFBRTtPQUNsQjtJQUNMLENBQUM7SUFDRCxTQUFTOFAsaUJBQWlCQSxHQUFHO0lBQ3pCLEVBQUEsTUFBTUMsSUFBSSxHQUFHMVYsTUFBTSxDQUFDd0wsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO01BQ3hELE9BQU8sQ0FBQSxFQUFHZ0ssSUFBSSxDQUFBLGNBQUEsQ0FBZ0I7SUFDbEM7SUFDQSxTQUFTQyxVQUFVQSxDQUFDO01BQUU3UyxLQUFLO01BQUVxRCxLQUFLO01BQUV5UCxHQUFHO0lBQUVDLEVBQUFBO0lBQVEsQ0FBQyxFQUFFO0lBQ2hELEVBQUEsb0JBQVF0VixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTBULE1BQU0sQ0FBQ00sVUFBVSxDQUFDb0IsTUFBTTtJQUFFLEdBQUMsZUFDbkV0VixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO0lBQUVDLElBQUFBLEtBQUssRUFBRTBULE1BQU0sQ0FBQ29CLFVBQVUsQ0FBQ00sTUFBTTtJQUFFLEdBQUMsQ0FBQyxlQUNoRXRWLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFMFQsTUFBTSxDQUFDUTtPQUFhLEVBQUU3UixLQUFLLENBQUMsZUFDaEV2QyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRTBULE1BQU0sQ0FBQ1M7T0FBYSxFQUFFek8sS0FBSyxDQUFDLEVBQ2hFeVAsR0FBRyxpQkFBSXJWLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFMFQsTUFBTSxDQUFDWTtPQUFXLEVBQUVhLEdBQUcsQ0FBQyxDQUFDO0lBQzVFO0lBQ2UsU0FBU0UsU0FBU0EsR0FBRztNQUNoQyxNQUFNLENBQUNySixJQUFJLEVBQUVzSixPQUFPLENBQUMsR0FBR3pWLGNBQVEsQ0FBQyxJQUFJLENBQUM7TUFDdEMsTUFBTSxDQUFDMFYsT0FBTyxFQUFFQyxVQUFVLENBQUMsR0FBRzNWLGNBQVEsQ0FBQyxJQUFJLENBQUM7TUFDNUMsTUFBTSxDQUFDNFYsVUFBVSxFQUFFQyxhQUFhLENBQUMsR0FBRzdWLGNBQVEsQ0FBQyxJQUFJLENBQUM7SUFDbEQ4VixFQUFBQSxlQUFTLENBQUMsTUFBTTtJQUNaLElBQUEsTUFBTXpHLEdBQUcsR0FBRzhGLGlCQUFpQixFQUFFO1FBQy9CLElBQUlZLE9BQU8sR0FBRyxJQUFJO1FBQ2xCLGVBQWVDLFNBQVNBLEdBQUc7VUFDdkJMLFVBQVUsQ0FBQyxJQUFJLENBQUM7VUFDaEJFLGFBQWEsQ0FBQyxJQUFJLENBQUM7VUFDbkIsSUFBSTtJQUNBLFFBQUEsTUFBTTlKLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNxRCxHQUFHLEVBQUU7SUFBRTRHLFVBQUFBLFdBQVcsRUFBRTtJQUFjLFNBQUMsQ0FBQztJQUM1RCxRQUFBLElBQUksQ0FBQ2xLLEdBQUcsQ0FBQ21LLEVBQUUsRUFDUCxNQUFNLElBQUlDLEtBQUssQ0FBQyxDQUFBLGVBQUEsRUFBa0JwSyxHQUFHLENBQUNxSyxNQUFNLENBQUEsQ0FBQSxFQUFJckssR0FBRyxDQUFDc0ssVUFBVSxFQUFFLENBQUM7SUFDckUsUUFBQSxNQUFNakssSUFBSSxHQUFHLE1BQU1MLEdBQUcsQ0FBQ0ssSUFBSSxFQUFFO1lBQzdCLElBQUksQ0FBQzJKLE9BQU8sRUFDUjtZQUNKTixPQUFPLENBQUNySixJQUFJLENBQUM7VUFDakIsQ0FBQyxDQUNELE9BQU9NLEdBQUcsRUFBRTtZQUNSLElBQUksQ0FBQ3FKLE9BQU8sRUFDUjtZQUNKRixhQUFhLENBQUN2RyxNQUFNLENBQUM1QyxHQUFHLENBQUNELE9BQU8sSUFBSUMsR0FBRyxDQUFDLENBQUM7SUFDN0MsTUFBQSxDQUFDLFNBQ087SUFDSixRQUFBLElBQUlxSixPQUFPLEVBQ1BKLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDekIsTUFBQTtJQUNKLElBQUE7SUFDQUssSUFBQUEsU0FBUyxFQUFFO0lBQ1gsSUFBQSxNQUFNTSxRQUFRLEdBQUdDLFdBQVcsQ0FBQ1AsU0FBUyxFQUFFLE1BQU0sQ0FBQztJQUMvQyxJQUFBLE9BQU8sTUFBTTtJQUNURCxNQUFBQSxPQUFPLEdBQUcsS0FBSztVQUNmUyxhQUFhLENBQUNGLFFBQVEsQ0FBQztRQUMzQixDQUFDO01BQ0wsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUNOLEVBQUEsTUFBTUcsU0FBUyxHQUFHL1csTUFBTSxDQUFDd0wsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO01BQzdELE1BQU1zTCxNQUFNLEdBQUlDLFVBQVUsSUFBSyxHQUFHRixTQUFTLENBQUEsV0FBQSxFQUFjRSxVQUFVLENBQUEsQ0FBRTtJQUNyRSxFQUFBLG9CQUFRMVcsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUwVCxNQUFNLENBQUN4VDtJQUFLLEdBQUMsZUFDckRKLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFMFQsTUFBTSxDQUFDQztJQUFPLEdBQUMsZUFDL0M3VCxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksZUFDM0JELHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7UUFBRUMsS0FBSyxFQUFFMFQsTUFBTSxDQUFDbEw7T0FBTyxFQUFFLGlCQUFpQixDQUFDLGVBQ3JFMUksc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUwVCxNQUFNLENBQUNHO09BQVUsRUFBRSw2S0FBNkssQ0FBQyxDQUFDLGVBQzFPL1Qsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUwVCxNQUFNLENBQUNJO0lBQVUsR0FBQyxFQUFFOUgsSUFBSSxFQUFFOEgsU0FBUyxHQUFHLENBQUEsV0FBQSxFQUFjLElBQUkzQixJQUFJLENBQUNuRyxJQUFJLENBQUM4SCxTQUFTLENBQUMsQ0FBQ1osY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUUsR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUMzSnFDLE9BQU8saUJBQUl6VixzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRTBULE1BQU0sQ0FBQ21CO09BQVksRUFBRSw2RkFBNkYsQ0FBQyxJQUFJWSxVQUFVLGlCQUFJM1Ysc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUwVCxNQUFNLENBQUN6UjtPQUFVLEVBQ3JPLDBJQUEwSSxFQUMxSXdULFVBQVUsQ0FBQyxrQkFBSzNWLHNCQUFLLENBQUNDLGFBQWEsQ0FBQ0Qsc0JBQUssQ0FBQzRILFFBQVEsRUFBRSxJQUFJLGVBQ3hENUgsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUwVCxNQUFNLENBQUNLO0lBQVksR0FBQyxlQUNwRGpVLHNCQUFLLENBQUNDLGFBQWEsQ0FBQ21WLFVBQVUsRUFBRTtJQUFFN1MsSUFBQUEsS0FBSyxFQUFFLHdEQUF3RDtJQUFFcUQsSUFBQUEsS0FBSyxFQUFFc0csSUFBSSxFQUFFeUssTUFBTSxJQUFJLEdBQUc7SUFBRXRCLElBQUFBLEdBQUcsRUFBRSx3REFBd0Q7UUFBRUMsTUFBTSxFQUFFL1csQ0FBQyxDQUFDUTtJQUFLLEdBQUMsQ0FBQyxlQUMvTWlCLHNCQUFLLENBQUNDLGFBQWEsQ0FBQ21WLFVBQVUsRUFBRTtJQUFFN1MsSUFBQUEsS0FBSyxFQUFFLDBFQUEwRTtJQUFFcUQsSUFBQUEsS0FBSyxFQUFFc0csSUFBSSxFQUFFMEssS0FBSyxJQUFJLEdBQUc7SUFBRXZCLElBQUFBLEdBQUcsZUFBRXJWLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxHQUFHLEVBQUU7SUFBRW9NLE1BQUFBLElBQUksRUFBRW9LLE1BQU0sQ0FBQyxPQUFPLENBQUM7VUFBRXZXLEtBQUssRUFBRTBULE1BQU0sQ0FBQ1U7U0FBWSxFQUFFLGtJQUFrSSxDQUFDO1FBQUVnQixNQUFNLEVBQUUvVyxDQUFDLENBQUNTO0lBQUssR0FBQyxDQUFDLGVBQ3pYZ0Isc0JBQUssQ0FBQ0MsYUFBYSxDQUFDbVYsVUFBVSxFQUFFO0lBQUU3UyxJQUFBQSxLQUFLLEVBQUUsZ0NBQWdDO0lBQUVxRCxJQUFBQSxLQUFLLEVBQUVzRyxJQUFJLEVBQUUySyxPQUFPLElBQUksR0FBRztJQUFFeEIsSUFBQUEsR0FBRyxlQUFFclYsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFb00sTUFBQUEsSUFBSSxFQUFFb0ssTUFBTSxDQUFDLFNBQVMsQ0FBQztVQUFFdlcsS0FBSyxFQUFFMFQsTUFBTSxDQUFDVTtTQUFZLEVBQUUsa0ZBQWtGLENBQUM7UUFBRWdCLE1BQU0sRUFBRS9XLENBQUMsQ0FBQ007SUFBTSxHQUFDLENBQUMsZUFDcFNtQixzQkFBSyxDQUFDQyxhQUFhLENBQUNtVixVQUFVLEVBQUU7SUFBRTdTLElBQUFBLEtBQUssRUFBRSxzQ0FBc0M7SUFBRXFELElBQUFBLEtBQUssRUFBRXNHLElBQUksRUFBRTJFLFdBQVcsSUFBSSxHQUFHO0lBQUV3RSxJQUFBQSxHQUFHLEVBQUUsdUhBQXVIO1FBQUVDLE1BQU0sRUFBRS9XLENBQUMsQ0FBQ2dWO09BQVksQ0FBQyxDQUFDLGVBQzVRdlQsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEtBQUssRUFBRTtRQUFFQyxLQUFLLEVBQUUwVCxNQUFNLENBQUNhO0lBQVcsR0FBQyxlQUNuRHpVLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFMFQsTUFBTSxDQUFDYztJQUFPLEdBQUMsZUFDL0MxVSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsSUFBSSxFQUFFO1FBQUVDLEtBQUssRUFBRTBULE1BQU0sQ0FBQ2U7T0FBYSxFQUFFLGtGQUFrRixDQUFDLGVBQzVJM1Usc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7SUFBRXlNLE1BQUFBLE1BQU0sRUFBRSxTQUFTO0lBQUUvSCxNQUFBQSxRQUFRLEVBQUUsRUFBRTtVQUFFNUQsS0FBSyxFQUFFekMsQ0FBQyxDQUFDbVYsU0FBUztJQUFFMU8sTUFBQUEsVUFBVSxFQUFFO0lBQUk7SUFBRSxHQUFDLEVBQUUsMmNBQTJjLENBQUMsRUFDMWpCa0gsSUFBSSxFQUFFNEssSUFBSSxrQkFBSzlXLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7UUFBRUMsS0FBSyxFQUFFMFQsTUFBTSxDQUFDa0I7SUFBUSxHQUFDLGVBQy9EOVUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsRUFBRTtJQUFFQyxJQUFBQSxLQUFLLEVBQUU7VUFBRWMsS0FBSyxFQUFFekMsQ0FBQyxDQUFDZ1Y7SUFBVztJQUFFLEdBQUMsRUFBRSxxRUFBcUUsQ0FBQyxFQUN4SXJILElBQUksQ0FBQzRLLElBQUksQ0FBQyxDQUFDLENBQUMsZUFDcEI5VyxzQkFBSyxDQUFDQyxhQUFhLENBQUMsS0FBSyxFQUFFO1FBQUVDLEtBQUssRUFBRTBULE1BQU0sQ0FBQ2M7SUFBTyxHQUFDLGVBQy9DMVUsc0JBQUssQ0FBQ0MsYUFBYSxDQUFDLElBQUksRUFBRTtRQUFFQyxLQUFLLEVBQUUwVCxNQUFNLENBQUNlO09BQWEsRUFBRSw2RkFBNkYsQ0FBQyxlQUN2SjNVLHNCQUFLLENBQUNDLGFBQWEsQ0FBQyxLQUFLLEVBQUU7SUFBRUMsSUFBQUEsS0FBSyxFQUFFO0lBQUV5RCxNQUFBQSxPQUFPLEVBQUUsTUFBTTtJQUFFYyxNQUFBQSxHQUFHLEVBQUUsRUFBRTtJQUFFUSxNQUFBQSxRQUFRLEVBQUU7SUFBTztJQUFFLEdBQUMsZUFDaEZqRixzQkFBSyxDQUFDQyxhQUFhLENBQUMsR0FBRyxFQUFFO0lBQUVvTSxJQUFBQSxJQUFJLEVBQUVvSyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQUV2VyxLQUFLLEVBQUUwVCxNQUFNLENBQUNpQjtPQUFTLEVBQUUsMEVBQTBFLENBQUMsZUFDdEo3VSxzQkFBSyxDQUFDQyxhQUFhLENBQUMsR0FBRyxFQUFFO0lBQUVvTSxJQUFBQSxJQUFJLEVBQUVvSyxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQUV2VyxLQUFLLEVBQUUwVCxNQUFNLENBQUNnQjtPQUFVLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0k7O0lDblBBbUMsT0FBTyxDQUFDQyxjQUFjLEdBQUcsRUFBRTtJQUUzQkQsT0FBTyxDQUFDQyxjQUFjLENBQUMxWCxLQUFLLEdBQUdBLEtBQUs7SUFFcEN5WCxPQUFPLENBQUNDLGNBQWMsQ0FBQ0MsaUJBQWlCLEdBQUdBLFlBQWlCO0lBRTVERixPQUFPLENBQUNDLGNBQWMsQ0FBQ0Usa0JBQWtCLEdBQUdBLFVBQWtCO0lBRTlESCxPQUFPLENBQUNDLGNBQWMsQ0FBQ0csZUFBZSxHQUFHQSxVQUFlO0lBRXhESixPQUFPLENBQUNDLGNBQWMsQ0FBQ0ksZUFBZSxHQUFHQSxVQUFlO0lBRXhETCxPQUFPLENBQUNDLGNBQWMsQ0FBQ0ssZ0JBQWdCLEdBQUdBLFFBQWdCO0lBRTFETixPQUFPLENBQUNDLGNBQWMsQ0FBQ00saUJBQWlCLEdBQUdBLFNBQWlCO0lBRTVEUCxPQUFPLENBQUNDLGNBQWMsQ0FBQ3pCLFNBQVMsR0FBR0EsU0FBUzs7Ozs7OyJ9
