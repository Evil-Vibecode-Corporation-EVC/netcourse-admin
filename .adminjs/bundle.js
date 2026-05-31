(function (React) {
    'use strict';

    function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

    var React__default = /*#__PURE__*/_interopDefault(React);

    const C$5 = {
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
          borderColor: C$5.green,
          color: C$5.green
        }
      }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          ...s.decorChip,
          borderColor: C$5.cyan,
          color: C$5.cyan
        }
      }, "\u041A\u0443\u0440\u0441\u044B"), /*#__PURE__*/React__default.default.createElement("div", {
        style: {
          ...s.decorChip,
          borderColor: C$5.blue,
          color: C$5.blue
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
          color: C$5.error
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
          e.target.style.borderColor = C$5.green;
          e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
        },
        onBlur: e => {
          setHover(null);
          e.target.style.borderColor = C$5.border;
          e.target.style.boxShadow = 'none';
        }
      })), /*#__PURE__*/React__default.default.createElement("div", {
        style: s.field
      }, /*#__PURE__*/React__default.default.createElement("label", {
        htmlFor: "login-password",
        style: s.label
      }, "\u041F\u0430\u0440\u043E\u043B\u044C ", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          color: C$5.error
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
          e.target.style.borderColor = C$5.green;
          e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,0.15)`;
        },
        onBlur: e => {
          setHover(null);
          e.target.style.borderColor = C$5.border;
          e.target.style.boxShadow = 'none';
        }
      })), /*#__PURE__*/React__default.default.createElement("button", {
        type: "submit",
        style: s.btn,
        onMouseEnter: e => e.target.style.background = `linear-gradient(135deg, ${C$5.greenDark}, #047857)`,
        onMouseLeave: e => e.target.style.background = `linear-gradient(135deg, ${C$5.green}, ${C$5.greenDark})`
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
        backgroundColor: C$5.bgPage,
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
        border: `1px solid ${C$5.border}`,
        boxShadow: '0 25px 50px rgba(0,0,0,0.6)'
      },
      left: {
        flex: '0 0 380px',
        background: `linear-gradient(145deg, #0d2d20 0%, #0a2540 100%)`,
        borderRight: `1px solid ${C$5.border}`,
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
        backgroundColor: C$5.green,
        boxShadow: `0 0 8px ${C$5.green}`
      },
      brandName: {
        fontSize: 13,
        fontWeight: 600,
        color: C$5.faint,
        textTransform: 'uppercase',
        letterSpacing: '0.1em'
      },
      welcome: {
        fontSize: 36,
        fontWeight: 700,
        color: C$5.white,
        lineHeight: 1.2,
        marginBottom: 16,
        letterSpacing: '-0.5px'
      },
      welcomeSub: {
        fontSize: 14,
        color: C$5.faint,
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
        backgroundColor: C$5.bgDark,
        padding: '48px 44px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      },
      formTitle: {
        fontSize: 24,
        fontWeight: 700,
        color: C$5.white,
        marginBottom: 6,
        letterSpacing: '-0.3px'
      },
      formSub: {
        fontSize: 13,
        color: C$5.ghost,
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
        color: C$5.error,
        marginBottom: 20
      },
      errorDot: {
        fontSize: 8,
        lineHeight: 1,
        color: C$5.error
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
        color: C$5.faint
      },
      input: {
        width: '100%',
        padding: '11px 14px',
        backgroundColor: C$5.bgInput,
        color: C$5.white,
        border: `1px solid ${C$5.border}`,
        borderRadius: 8,
        fontSize: 14,
        outline: 'none',
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
        boxSizing: 'border-box',
        WebkitTextFillColor: C$5.white
      },
      btn: {
        width: '100%',
        padding: '12px',
        background: `linear-gradient(135deg, ${C$5.green}, ${C$5.greenDark})`,
        color: C$5.white,
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
        color: C$5.ghost,
        textAlign: 'center',
        lineHeight: 1.5
      }
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
      background: C$4.bgInput,
      color: C$4.white,
      border: `1px solid ${C$4.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const selectStyle$2 = {
      padding: '8px 10px',
      background: C$4.bgInput,
      color: C$4.white,
      border: `1px solid ${C$4.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      cursor: 'pointer'
    };
    const btnDanger$2 = {
      background: 'none',
      border: 'none',
      color: C$4.error,
      fontSize: 14,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 4
    };
    const btnAdd$2 = {
      padding: '6px 12px',
      background: 'transparent',
      color: C$4.green,
      border: `1px dashed ${C$4.green}`,
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
      }, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u0443\u0440\u0441\u0430"), /*#__PURE__*/React__default.default.createElement("p", {
        style: {
          margin: '0 0 24px',
          fontSize: 13,
          color: C$4.ghost
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
          accentColor: C$4.green
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
      color: C$4.faint,
      marginBottom: 4
    };
    const fullInputStyle$2 = {
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
    const addSectionBtnStyle$1 = {
      padding: '8px 16px',
      background: 'transparent',
      color: C$4.cyan,
      border: `1px dashed ${C$4.cyan}`,
      borderRadius: 6,
      fontSize: 13,
      cursor: 'pointer'
    };
    const submitBtnStyle$3 = {
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
      background: C$3.bgInput,
      color: C$3.white,
      border: `1px solid ${C$3.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const selectStyle$1 = {
      padding: '8px 10px',
      background: C$3.bgInput,
      color: C$3.white,
      border: `1px solid ${C$3.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      cursor: 'pointer'
    };
    const btnDanger$1 = {
      background: 'none',
      border: 'none',
      color: C$3.error,
      fontSize: 14,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 4
    };
    const btnAdd$1 = {
      padding: '6px 12px',
      background: 'transparent',
      color: C$3.green,
      border: `1px dashed ${C$3.green}`,
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
          background: C$3.bgCard,
          border: `1px solid ${C$3.border}`,
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
          background: C$3.bgCard,
          border: `1px solid ${C$3.border}`,
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
          color: C$3.cyan
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
          backgroundColor: C$3.bgPage,
          color: C$3.white,
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
          color: C$3.ghost
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
          accentColor: C$3.green
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
          color: C$3.muted,
          margin: '0 0 12px'
        }
      }, "\u0420\u0430\u0437\u0434\u0435\u043B\u044B \u0438 \u0443\u0440\u043E\u043A\u0438", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 12,
          color: C$3.ghost,
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
      color: C$3.faint,
      marginBottom: 4
    };
    const fullInputStyle$1 = {
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
    const addSectionBtnStyle = {
      padding: '8px 16px',
      background: 'transparent',
      color: C$3.cyan,
      border: `1px dashed ${C$3.cyan}`,
      borderRadius: 6,
      fontSize: 13,
      cursor: 'pointer'
    };
    const submitBtnStyle$2 = {
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
      background: C$2.bgInput,
      color: C$2.white,
      border: `1px solid ${C$2.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      boxSizing: 'border-box'
    };
    const selectStyle = {
      padding: '8px 10px',
      background: C$2.bgInput,
      color: C$2.white,
      border: `1px solid ${C$2.border}`,
      borderRadius: 6,
      fontSize: 13,
      outline: 'none',
      cursor: 'pointer'
    };
    const btnDanger = {
      background: 'none',
      border: 'none',
      color: C$2.error,
      fontSize: 14,
      cursor: 'pointer',
      padding: '4px 8px',
      borderRadius: 4
    };
    const btnAdd = {
      padding: '6px 12px',
      background: 'transparent',
      color: C$2.green,
      border: `1px dashed ${C$2.green}`,
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
          color: C$2.faint,
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
          accentColor: C$2.green
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
          backgroundColor: C$2.bgPage,
          color: C$2.white,
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
          color: C$2.ghost
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
          color: C$2.muted,
          margin: '0 0 12px'
        }
      }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B", /*#__PURE__*/React__default.default.createElement("span", {
        style: {
          fontSize: 12,
          color: C$2.ghost,
          fontWeight: 400,
          marginLeft: 8
        }
      }, "(", questions.length, ")")), questions.map((q, qi) => (/*#__PURE__*/React__default.default.createElement("div", {
        key: qi,
        style: {
          marginBottom: 12,
          padding: 12,
          background: C$2.bgCard,
          border: `1px solid ${C$2.border}`,
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
      color: C$2.faint,
      marginBottom: 4
    };
    const fullInputStyle = {
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
    const addQuestionBtnStyle = {
      padding: '8px 16px',
      background: 'transparent',
      color: C$2.cyan,
      border: `1px dashed ${C$2.cyan}`,
      borderRadius: 6,
      fontSize: 13,
      cursor: 'pointer'
    };
    const submitBtnStyle$1 = {
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
          backgroundColor: C$1.bgPage,
          color: C$1.white,
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
          color: C$1.ghost
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
      color: C$1.faint,
      marginBottom: 4
    };
    const inputStyle = {
      width: '100%',
      padding: '9px 12px',
      background: C$1.bgInput,
      color: '#fff',
      border: `1px solid ${C$1.border}`,
      borderRadius: 6,
      fontSize: 14,
      outline: 'none',
      boxSizing: 'border-box'
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
    AdminJS.UserComponents.CourseDetailedEdit = CourseEdit;
    AdminJS.UserComponents.QuizQuickCreate = QuizCreate;
    AdminJS.UserComponents.UserQuickCreate = UserCreate;
    AdminJS.UserComponents.Dashboard = Dashboard;

})(React);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvbG9naW4uanMiLCIuLi9kaXN0L2FkbWluL2NvbXBvbmVudHMvY291cnNlLWNyZWF0ZS5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9jb3Vyc2UtZWRpdC5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9xdWl6LWNyZWF0ZS5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy91c2VyLWNyZWF0ZS5qcyIsIi4uL2Rpc3QvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQuanMiLCJlbnRyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBDID0ge1xuICAgIGJnUGFnZTogJyMwMjA2MTcnLFxuICAgIGJnRGFyazogJyMwZjE3MmEnLFxuICAgIGJnQ2FyZDogJyMxZTI5M2InLFxuICAgIGJnSW5wdXQ6ICcjMGYxNzJhJyxcbiAgICBib3JkZXI6ICcjMzM0MTU1JyxcbiAgICBncmVlbjogJyMxMGI5ODEnLFxuICAgIGdyZWVuRGFyazogJyMwNTk2NjknLFxuICAgIGN5YW46ICcjMDZiNmQ0JyxcbiAgICBibHVlOiAnIzNiODJmNicsXG4gICAgZXJyb3I6ICcjZWY0NDQ0JyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIG11dGVkOiAnI2NiZDVlMScsXG4gICAgZmFpbnQ6ICcjOTRhM2I4JyxcbiAgICBnaG9zdDogJyM2NDc0OGInLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICAgIGNvbnN0IHsgYWN0aW9uID0gJy9sb2dpbicsIGVycm9yTWVzc2FnZSB9ID0gKHdpbmRvdy5fX0FQUF9TVEFURV9fID8/IHt9KTtcbiAgICBjb25zdCBicmFuZGluZyA9IHdpbmRvdy5SRURVWF9TVEFURT8uYnJhbmRpbmcgPz8ge307XG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5wYWdlIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5jYXJkIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMubGVmdCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5icmFuZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMuYnJhbmREb3QgfSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHMuYnJhbmROYW1lIH0sIGJyYW5kaW5nLmNvbXBhbnlOYW1lID8/ICdOZXRjb3Vyc2UgQWRtaW4nKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHsgc3R5bGU6IHMud2VsY29tZSB9LFxuICAgICAgICAgICAgICAgICAgICBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0NDBcXHUwNDNFXCIsXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLCBudWxsKSxcbiAgICAgICAgICAgICAgICAgICAgXCJcXHUwNDNGXFx1MDQzRVxcdTA0MzZcXHUwNDMwXFx1MDQzQlxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRDXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHMud2VsY29tZVN1YiB9LCBcIlxcdTA0MUZcXHUwNDMwXFx1MDQzRFxcdTA0MzVcXHUwNDNCXFx1MDQ0QyBcXHUwNDQzXFx1MDQzRlxcdTA0NDBcXHUwNDMwXFx1MDQzMlxcdTA0M0JcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGIFxcdTA0M0ZcXHUwNDNCXFx1MDQzMFxcdTA0NDJcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQzRVxcdTA0MzkgTmV0Y291cnNlLiBcXHUwNDE0XFx1MDQzRVxcdTA0NDFcXHUwNDQyXFx1MDQ0M1xcdTA0M0YgXFx1MDQ0MlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0M0FcXHUwNDNFIFxcdTA0MzRcXHUwNDNCXFx1MDQ0RiBcXHUwNDMwXFx1MDQzMlxcdTA0NDJcXHUwNDNFXFx1MDQ0MFxcdTA0MzhcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0M0RcXHUwNDRCXFx1MDQ0NSBcXHUwNDMwXFx1MDQzNFxcdTA0M0NcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0VcXHUwNDQwXFx1MDQzRVxcdTA0MzIuXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5kZWNvclJvdyB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgLi4ucy5kZWNvckNoaXAsIGJvcmRlckNvbG9yOiBDLmdyZWVuLCBjb2xvcjogQy5ncmVlbiB9IH0sIFwiXFx1MDQxRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDM4XCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgLi4ucy5kZWNvckNoaXAsIGJvcmRlckNvbG9yOiBDLmN5YW4sIGNvbG9yOiBDLmN5YW4gfSB9LCBcIlxcdTA0MUFcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDRCXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgLi4ucy5kZWNvckNoaXAsIGJvcmRlckNvbG9yOiBDLmJsdWUsIGNvbG9yOiBDLmJsdWUgfSB9LCBcIlxcdTA0MTBcXHUwNDNEXFx1MDQzMFxcdTA0M0JcXHUwNDM4XFx1MDQ0MlxcdTA0MzhcXHUwNDNBXFx1MDQzMFwiKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7IHN0eWxlOiBzLmRvdHMsIHZpZXdCb3g6IFwiMCAwIDEyMCA4MFwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sIEFycmF5LmZyb20oeyBsZW5ndGg6IDYgfSwgKF8sIHJvdykgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogOCB9LCAoXywgY29sKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImNpcmNsZVwiLCB7IGtleTogYCR7cm93fS0ke2NvbH1gLCBjeDogY29sICogMTYgKyA4LCBjeTogcm93ICogMTMgKyA2LCByOiBcIjEuNVwiLCBmaWxsOiBcInJnYmEoMjU1LDI1NSwyNTUsMC4xNSlcIiB9KSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBhY3Rpb246IGFjdGlvbiwgbWV0aG9kOiBcIlBPU1RcIiwgc3R5bGU6IHMucmlnaHQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDJcIiwgeyBzdHlsZTogcy5mb3JtVGl0bGUgfSwgXCJcXHUwNDEyXFx1MDQ0NVxcdTA0M0VcXHUwNDM0IFxcdTA0MzIgXFx1MDQ0MVxcdTA0MzhcXHUwNDQxXFx1MDQ0MlxcdTA0MzVcXHUwNDNDXFx1MDQ0M1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiBzLmZvcm1TdWIgfSwgXCJcXHUwNDEyXFx1MDQzMlxcdTA0MzVcXHUwNDM0XFx1MDQzOFxcdTA0NDJcXHUwNDM1IFxcdTA0MzJcXHUwNDMwXFx1MDQ0OFxcdTA0MzggXFx1MDQ0M1xcdTA0NDdcXHUwNDUxXFx1MDQ0MlxcdTA0M0RcXHUwNDRCXFx1MDQzNSBcXHUwNDM0XFx1MDQzMFxcdTA0M0RcXHUwNDNEXFx1MDQ0QlxcdTA0MzVcIiksXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHMuZXJyb3JCb3ggfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogcy5lcnJvckRvdCB9LCBcIlxcdTI1Q0ZcIiksXG4gICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5maWVsZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImxvZ2luLWVtYWlsXCIsIHN0eWxlOiBzLmxhYmVsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkVtYWlsIFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyBjb2xvcjogQy5lcnJvciB9IH0sIFwiKlwiKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGlkOiBcImxvZ2luLWVtYWlsXCIsIG5hbWU6IFwiZW1haWxcIiwgdHlwZTogXCJlbWFpbFwiLCBwbGFjZWhvbGRlcjogXCJhZG1pbkBleGFtcGxlLmNvbVwiLCBhdXRvQ29tcGxldGU6IFwiZW1haWxcIiwgcmVxdWlyZWQ6IHRydWUsIHN0eWxlOiBzLmlucHV0LCBvbkZvY3VzOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcignZW1haWwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAwIDNweCByZ2JhKDE2LDE4NSwxMjksMC4xNSlgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25CbHVyOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuYm9yZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogcy5maWVsZCB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImxvZ2luLXBhc3N3b3JkXCIsIHN0eWxlOiBzLmxhYmVsIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdTA0MUZcXHUwNDMwXFx1MDQ0MFxcdTA0M0VcXHUwNDNCXFx1MDQ0QyBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgY29sb3I6IEMuZXJyb3IgfSB9LCBcIipcIikpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBpZDogXCJsb2dpbi1wYXNzd29yZFwiLCBuYW1lOiBcInBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MjAyMlxcdTIwMjJcXHUyMDIyXFx1MjAyMlxcdTIwMjJcXHUyMDIyXFx1MjAyMlxcdTIwMjJcIiwgYXV0b0NvbXBsZXRlOiBcImN1cnJlbnQtcGFzc3dvcmRcIiwgcmVxdWlyZWQ6IHRydWUsIHN0eWxlOiBzLmlucHV0LCBvbkZvY3VzOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcigncGFzc3dvcmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAwIDNweCByZ2JhKDE2LDE4NSwxMjksMC4xNSlgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgb25CbHVyOiBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3ZlcihudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXJDb2xvciA9IEMuYm9yZGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcInN1Ym1pdFwiLCBzdHlsZTogcy5idG4sIG9uTW91c2VFbnRlcjogZSA9PiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVuRGFya30sICMwNDc4NTcpYCksIG9uTW91c2VMZWF2ZTogZSA9PiAoZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCkgfSwgXCJcXHUwNDEyXFx1MDQzRVxcdTA0MzlcXHUwNDQyXFx1MDQzOFwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiBzLmhpbnQgfSwgXCJcXHUwNDFGXFx1MDQ0MFxcdTA0M0VcXHUwNDMxXFx1MDQzQlxcdTA0MzVcXHUwNDNDXFx1MDQ0QiBcXHUwNDQxXFx1MDQzRSBcXHUwNDMyXFx1MDQ0NVxcdTA0M0VcXHUwNDM0XFx1MDQzRVxcdTA0M0M/IFxcdTA0MUVcXHUwNDMxXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzOFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NEMgXFx1MDQzQSBcXHUwNDQxXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQzNVxcdTA0M0NcXHUwNDNEXFx1MDQzRVxcdTA0M0NcXHUwNDQzIFxcdTA0MzBcXHUwNDM0XFx1MDQzQ1xcdTA0MzhcXHUwNDNEXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzRVxcdTA0NDBcXHUwNDQzLlwiKSkpKSk7XG59XG5jb25zdCBzID0ge1xuICAgIHBhZ2U6IHtcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5iZ1BhZ2UsXG4gICAgICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIixcbiAgICAgICAgcGFkZGluZzogJzI0cHgnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICB9LFxuICAgIGNhcmQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogOTAwLFxuICAgICAgICBtaW5IZWlnaHQ6IDUyMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxNixcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgICAgICBib3hTaGFkb3c6ICcwIDI1cHggNTBweCByZ2JhKDAsMCwwLDAuNiknLFxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgICBmbGV4OiAnMCAwIDM4MHB4JyxcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxNDVkZWcsICMwZDJkMjAgMCUsICMwYTI1NDAgMTAwJSlgLFxuICAgICAgICBib3JkZXJSaWdodDogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIHBhZGRpbmc6ICc0OHB4IDQwcHgnLFxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIH0sXG4gICAgYnJhbmQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgZ2FwOiAxMCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA0MCxcbiAgICB9LFxuICAgIGJyYW5kRG90OiB7XG4gICAgICAgIHdpZHRoOiAxMCxcbiAgICAgICAgaGVpZ2h0OiAxMCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmdyZWVuLFxuICAgICAgICBib3hTaGFkb3c6IGAwIDAgOHB4ICR7Qy5ncmVlbn1gLFxuICAgIH0sXG4gICAgYnJhbmROYW1lOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBjb2xvcjogQy5mYWludCxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgIGxldHRlclNwYWNpbmc6ICcwLjFlbScsXG4gICAgfSxcbiAgICB3ZWxjb21lOiB7XG4gICAgICAgIGZvbnRTaXplOiAzNixcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBjb2xvcjogQy53aGl0ZSxcbiAgICAgICAgbGluZUhlaWdodDogMS4yLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDE2LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcbiAgICB9LFxuICAgIHdlbGNvbWVTdWI6IHtcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBjb2xvcjogQy5mYWludCxcbiAgICAgICAgbGluZUhlaWdodDogMS42NSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAzMixcbiAgICB9LFxuICAgIGRlY29yUm93OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcbiAgICAgICAgZ2FwOiA4LFxuICAgICAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcbiAgICB9LFxuICAgIGRlY29yQ2hpcDoge1xuICAgICAgICBmb250U2l6ZTogMTEsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgcGFkZGluZzogJzRweCAxMHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAyMCxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkJyxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDVlbScsXG4gICAgICAgIG9wYWNpdHk6IDAuNyxcbiAgICB9LFxuICAgIGRvdHM6IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGJvdHRvbTogMjQsXG4gICAgICAgIHJpZ2h0OiAyNCxcbiAgICAgICAgd2lkdGg6IDEyMCxcbiAgICAgICAgaGVpZ2h0OiA4MCxcbiAgICAgICAgb3BhY2l0eTogMC42LFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdEYXJrLFxuICAgICAgICBwYWRkaW5nOiAnNDhweCA0NHB4JyxcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIH0sXG4gICAgZm9ybVRpdGxlOiB7XG4gICAgICAgIGZvbnRTaXplOiAyNCxcbiAgICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgICBjb2xvcjogQy53aGl0ZSxcbiAgICAgICAgbWFyZ2luQm90dG9tOiA2LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuM3B4JyxcbiAgICB9LFxuICAgIGZvcm1TdWI6IHtcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBjb2xvcjogQy5naG9zdCxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAzMixcbiAgICB9LFxuICAgIGVycm9yQm94OiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgIGdhcDogOCxcbiAgICAgICAgcGFkZGluZzogJzEwcHggMTRweCcsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMjM5LDY4LDY4LDAuMSknLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgcmdiYSgyMzksNjgsNjgsMC4zKWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBjb2xvcjogQy5lcnJvcixcbiAgICAgICAgbWFyZ2luQm90dG9tOiAyMCxcbiAgICB9LFxuICAgIGVycm9yRG90OiB7XG4gICAgICAgIGZvbnRTaXplOiA4LFxuICAgICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgICBjb2xvcjogQy5lcnJvcixcbiAgICB9LFxuICAgIGZpZWxkOiB7XG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjAsXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIGdhcDogNixcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBjb2xvcjogQy5mYWludCxcbiAgICB9LFxuICAgIGlucHV0OiB7XG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIHBhZGRpbmc6ICcxMXB4IDE0cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdJbnB1dCxcbiAgICAgICAgY29sb3I6IEMud2hpdGUsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICAgIHRyYW5zaXRpb246ICdib3JkZXItY29sb3IgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIFdlYmtpdFRleHRGaWxsQ29sb3I6IEMud2hpdGUsXG4gICAgfSxcbiAgICBidG46IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgcGFkZGluZzogJzEycHgnLFxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICAgICAgY29sb3I6IEMud2hpdGUsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgIGZvbnRTaXplOiAxNSxcbiAgICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICAgbWFyZ2luVG9wOiA4LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMmVtJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2JhY2tncm91bmQgMC4xNXMgZWFzZScsXG4gICAgfSxcbiAgICBoaW50OiB7XG4gICAgICAgIG1hcmdpblRvcDogMjAsXG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgY29sb3I6IEMuZ2hvc3QsXG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICB9LFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdJbnB1dDogJyMwZjE3MmEnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgY3lhbjogJyMwNmI2ZDQnLFxuICAgIGJsdWU6ICcjM2I4MmY2JyxcbiAgICBlcnJvcjogJyNlZjQ0NDQnLFxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgbXV0ZWQ6ICcjY2JkNWUxJyxcbiAgICBmYWludDogJyM5NGEzYjgnLFxuICAgIGdob3N0OiAnIzY0NzQ4YicsXG59O1xuY29uc3QgQ09OVEVOVF9UWVBFUyA9IFtcbiAgICB7IHZhbHVlOiAndGV4dCcsIGxhYmVsOiAn0KLQtdC60YHRgicgfSxcbiAgICB7IHZhbHVlOiAndmlkZW8nLCBsYWJlbDogJ9CS0LjQtNC10L4nIH0sXG4gICAgeyB2YWx1ZTogJ3F1aXonLCBsYWJlbDogJ9Ci0LXRgdGCJyB9LFxuXTtcbmNvbnN0IFFVRVNUSU9OX1RZUEVTID0gW1xuICAgIHsgdmFsdWU6ICdzaW5nbGUnLCBsYWJlbDogJ9Ce0LTQuNC9INCy0LDRgNC40LDQvdGCJyB9LFxuICAgIHsgdmFsdWU6ICdtdWx0aXBsZScsIGxhYmVsOiAn0J3QtdGB0LrQvtC70YzQutC+INCy0LDRgNC40LDQvdGC0L7QsicgfSxcbiAgICB7IHZhbHVlOiAndGV4dCcsIGxhYmVsOiAn0KLQtdC60YHRgtC+0LLRi9C5INC+0YLQstC10YInIH0sXG5dO1xuY29uc3QgQ0FURUdPUklFUyA9IFtcbiAgICB7IHZhbHVlOiAnZnJvbnRlbmQnLCBsYWJlbDogJ0Zyb250ZW5kJyB9LFxuICAgIHsgdmFsdWU6ICdiYWNrZW5kJywgbGFiZWw6ICdCYWNrZW5kJyB9LFxuICAgIHsgdmFsdWU6ICdkZXZvcHMnLCBsYWJlbDogJ0Rldk9wcycgfSxcbiAgICB7IHZhbHVlOiAnbW9iaWxlJywgbGFiZWw6ICdNb2JpbGUnIH0sXG4gICAgeyB2YWx1ZTogJ2Rlc2lnbicsIGxhYmVsOiAnRGVzaWduJyB9LFxuICAgIHsgdmFsdWU6ICdvdGhlcicsIGxhYmVsOiAn0JTRgNGD0LPQvtC1JyB9LFxuXTtcbmNvbnN0IGlucHV0U3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzhweCAxMHB4JyxcbiAgICBiYWNrZ3JvdW5kOiBDLmJnSW5wdXQsXG4gICAgY29sb3I6IEMud2hpdGUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94Jyxcbn07XG5jb25zdCBzZWxlY3RTdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnOHB4IDEwcHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogQy53aGl0ZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTMsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbmNvbnN0IGJ0bkRhbmdlciA9IHtcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgY29sb3I6IEMuZXJyb3IsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIHBhZGRpbmc6ICc0cHggOHB4JyxcbiAgICBib3JkZXJSYWRpdXM6IDQsXG59O1xuY29uc3QgYnRuQWRkID0ge1xuICAgIHBhZGRpbmc6ICc2cHggMTJweCcsXG4gICAgYmFja2dyb3VuZDogJ3RyYW5zcGFyZW50JyxcbiAgICBjb2xvcjogQy5ncmVlbixcbiAgICBib3JkZXI6IGAxcHggZGFzaGVkICR7Qy5ncmVlbn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTIsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgbWFyZ2luVG9wOiA0LFxufTtcbmZ1bmN0aW9uIEFuc3dlclJvdyh7IGFuc3dlciwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDQgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxMlxcdTA0MzBcXHUwNDQwXFx1MDQzOFxcdTA0MzBcXHUwNDNEXFx1MDQ0MiBcXHUwNDNFXFx1MDQ0MlxcdTA0MzJcXHUwNDM1XFx1MDQ0MlxcdTA0MzBcIiwgdmFsdWU6IGFuc3dlci5hbnN3ZXJfdGV4dCwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5hbnN3ZXIsIGFuc3dlcl90ZXh0OiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgZmxleDogMSB9IH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLmZhaW50LCBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDQsIGN1cnNvcjogJ3BvaW50ZXInLCB3aGl0ZVNwYWNlOiAnbm93cmFwJyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImNoZWNrYm94XCIsIGNoZWNrZWQ6IGFuc3dlci5pc19jb3JyZWN0LCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmFuc3dlciwgaXNfY29ycmVjdDogZS50YXJnZXQuY2hlY2tlZCB9KSwgc3R5bGU6IHsgYWNjZW50Q29sb3I6IEMuZ3JlZW4gfSB9KSxcbiAgICAgICAgICAgIFwiXFx1MDQzMlxcdTA0MzVcXHUwNDQwXFx1MDQzRFxcdTA0M0VcIiksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBvblJlbW92ZSwgc3R5bGU6IGJ0bkRhbmdlciB9LCBcIlxcdTI3MTVcIikpKTtcbn1cbmZ1bmN0aW9uIFF1ZXN0aW9uQmxvY2soeyBxdWVzdGlvbiwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgY29uc3QgYWRkQW5zd2VyID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBhbnN3ZXJzOiBbLi4ucXVlc3Rpb24uYW5zd2VycywgeyBhbnN3ZXJfdGV4dDogJycsIGlzX2NvcnJlY3Q6IGZhbHNlIH1dIH0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlQW5zd2VyID0gKGksIGEpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IFsuLi5xdWVzdGlvbi5hbnN3ZXJzXTtcbiAgICAgICAgbmV4dFtpXSA9IGE7XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4ucXVlc3Rpb24sIGFuc3dlcnM6IG5leHQgfSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVBbnN3ZXIgPSAoaSkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBhbnN3ZXJzOiBxdWVzdGlvbi5hbnN3ZXJzLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGkpIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luQm90dG9tOiAxMCwgcGFkZGluZzogMTIsIGJhY2tncm91bmQ6ICcjMGExNjI4JywgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgYm9yZGVyUmFkaXVzOiA2IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA4IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDIyXFx1MDQzNVxcdTA0M0FcXHUwNDQxXFx1MDQ0MiBcXHUwNDMyXFx1MDQzRVxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDFcXHUwNDMwXCIsIHZhbHVlOiBxdWVzdGlvbi5xdWVzdGlvbl90ZXh0LCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBxdWVzdGlvbl90ZXh0OiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgZmxleDogMSB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IHZhbHVlOiBxdWVzdGlvbi5xdWVzdGlvbl90eXBlLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBxdWVzdGlvbl90eXBlOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHNlbGVjdFN0eWxlIH0sIFFVRVNUSU9OX1RZUEVTLm1hcChxdCA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogcXQudmFsdWUsIHZhbHVlOiBxdC52YWx1ZSB9LCBxdC5sYWJlbCkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSxcbiAgICAgICAgcXVlc3Rpb24ucXVlc3Rpb25fdHlwZSAhPT0gJ3RleHQnICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgcXVlc3Rpb24uYW5zd2Vycy5tYXAoKGFucywgYWkpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KEFuc3dlclJvdywgeyBrZXk6IGFpLCBhbnN3ZXI6IGFucywgb25DaGFuZ2U6IGEgPT4gdXBkYXRlQW5zd2VyKGFpLCBhKSwgb25SZW1vdmU6ICgpID0+IHJlbW92ZUFuc3dlcihhaSkgfSkpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyBvbkNsaWNrOiBhZGRBbnN3ZXIsIHN0eWxlOiBidG5BZGQgfSwgXCIrIFxcdTA0MTJcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcXHUwNDMwXFx1MDQzRFxcdTA0NDIgXFx1MDQzRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDMwXCIpKSkpKTtcbn1cbmZ1bmN0aW9uIExlc3NvblJvdyh7IGxlc3Nvbiwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgY29uc3QgYWRkUXVlc3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHtcbiAgICAgICAgICAgIC4uLmxlc3NvbixcbiAgICAgICAgICAgIHF1ZXN0aW9uczogWy4uLihsZXNzb24ucXVlc3Rpb25zIHx8IFtdKSwgeyBxdWVzdGlvbl90ZXh0OiAnJywgcXVlc3Rpb25fdHlwZTogJ3NpbmdsZScsIGFuc3dlcnM6IFt7IGFuc3dlcl90ZXh0OiAnJywgaXNfY29ycmVjdDogZmFsc2UgfV0gfV0sXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgdXBkYXRlUXVlc3Rpb24gPSAoaSwgcSkgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gWy4uLihsZXNzb24ucXVlc3Rpb25zIHx8IFtdKV07XG4gICAgICAgIG5leHRbaV0gPSBxO1xuICAgICAgICBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgcXVlc3Rpb25zOiBuZXh0IH0pO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlUXVlc3Rpb24gPSAoaSkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgcXVlc3Rpb25zOiAobGVzc29uLnF1ZXN0aW9ucyB8fCBbXSkuZmlsdGVyKChfLCBpZHgpID0+IGlkeCAhPT0gaSkgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpc1F1aXogPSBsZXNzb24uY29udGVudF90eXBlID09PSAncXVpeic7XG4gICAgY29uc3QgaXNWaWRlbyA9IGxlc3Nvbi5jb250ZW50X3R5cGUgPT09ICd2aWRlbyc7XG4gICAgY29uc3QgaXNUZXh0ID0gbGVzc29uLmNvbnRlbnRfdHlwZSA9PT0gJ3RleHQnO1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogOCwgcGFkZGluZzogJzEwcHggMTJweCcsIGJhY2tncm91bmQ6IEMuYmdDYXJkLCBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLCBib3JkZXJSYWRpdXM6IDYgfSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA2LCBtYXJnaW5Cb3R0b206IDYgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MURcXHUwNDMwXFx1MDQzN1xcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDMwXCIsIHZhbHVlOiBsZXNzb24udGl0bGUsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ubGVzc29uLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogbGVzc29uLmNvbnRlbnRfdHlwZSwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5sZXNzb24sIGNvbnRlbnRfdHlwZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiBzZWxlY3RTdHlsZSB9LCBDT05URU5UX1RZUEVTLm1hcChjdCA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogY3QudmFsdWUsIHZhbHVlOiBjdC52YWx1ZSB9LCBjdC5sYWJlbCkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSxcbiAgICAgICAgaXNWaWRlbyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MjFcXHUwNDQxXFx1MDQ0QlxcdTA0M0JcXHUwNDNBXFx1MDQzMCBcXHUwNDNEXFx1MDQzMCBcXHUwNDMyXFx1MDQzOFxcdTA0MzRcXHUwNDM1XFx1MDQzRSAoWW91VHViZS9WaW1lb1xcdTIwMjYpXCIsIHZhbHVlOiBsZXNzb24udmlkZW9fdXJsIHx8ICcnLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgdmlkZW9fdXJsOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgd2lkdGg6ICcxMDAlJyB9IH0pKSxcbiAgICAgICAgaXNUZXh0ICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgeyBwbGFjZWhvbGRlcjogXCJcXHUwNDIyXFx1MDQzNVxcdTA0M0FcXHUwNDQxXFx1MDQ0MlxcdTA0M0VcXHUwNDMyXFx1MDQzRVxcdTA0MzUgXFx1MDQ0MVxcdTA0M0VcXHUwNDM0XFx1MDQzNVxcdTA0NDBcXHUwNDM2XFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQzXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXFx1MDQzMFwiLCB2YWx1ZTogbGVzc29uLnRleHRfY29udGVudCB8fCAnJywgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5sZXNzb24sIHRleHRfY29udGVudDogZS50YXJnZXQudmFsdWUgfSksIHJvd3M6IDMsIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIHdpZHRoOiAnMTAwJScsIHJlc2l6ZTogJ3ZlcnRpY2FsJyB9IH0pKSxcbiAgICAgICAgaXNRdWl6ICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiA4IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQzMFwiLCB2YWx1ZTogbGVzc29uLnF1aXpfdGl0bGUgfHwgJycsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ubGVzc29uLCBxdWl6X3RpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgd2lkdGg6ICcxMDAlJywgbWFyZ2luQm90dG9tOiA4IH0gfSksXG4gICAgICAgICAgICAobGVzc29uLnF1ZXN0aW9ucyB8fCBbXSkubWFwKChxLCBxaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUXVlc3Rpb25CbG9jaywgeyBrZXk6IHFpLCBxdWVzdGlvbjogcSwgb25DaGFuZ2U6IGEgPT4gdXBkYXRlUXVlc3Rpb24ocWksIGEpLCBvblJlbW92ZTogKCkgPT4gcmVtb3ZlUXVlc3Rpb24ocWkpIH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogYWRkUXVlc3Rpb24sIHN0eWxlOiBidG5BZGQgfSwgXCIrIFxcdTA0MTJcXHUwNDNFXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQ0MVwiKSkpKSk7XG59XG5mdW5jdGlvbiBTZWN0aW9uQmxvY2soeyBzZWN0aW9uLCBpbmRleCwgb25DaGFuZ2UsIG9uUmVtb3ZlLCB9KSB7XG4gICAgY29uc3QgYWRkTGVzc29uID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnNlY3Rpb24sIGxlc3NvbnM6IFsuLi5zZWN0aW9uLmxlc3NvbnMsIHsgdGl0bGU6ICcnLCBjb250ZW50X3R5cGU6ICd0ZXh0JyB9XSB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZUxlc3NvbiA9IChsaSwgbGVzc29uKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4uc2VjdGlvbi5sZXNzb25zXTtcbiAgICAgICAgbmV4dFtsaV0gPSBsZXNzb247XG4gICAgICAgIG9uQ2hhbmdlKHsgLi4uc2VjdGlvbiwgbGVzc29uczogbmV4dCB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZUxlc3NvbiA9IChsaSkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnNlY3Rpb24sIGxlc3NvbnM6IHNlY3Rpb24ubGVzc29ucy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGxpKSB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTYsIHBhZGRpbmc6IDE2LCBiYWNrZ3JvdW5kOiBDLmJnQ2FyZCwgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgYm9yZGVyUmFkaXVzOiA4IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgbWFyZ2luQm90dG9tOiAxMiB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7IHN0eWxlOiB7IGZvbnRTaXplOiAxMywgZm9udFdlaWdodDogNjAwLCBjb2xvcjogQy5jeWFuIH0gfSxcbiAgICAgICAgICAgICAgICBcIlxcdTA0MjBcXHUwNDMwXFx1MDQzN1xcdTA0MzRcXHUwNDM1XFx1MDQzQiBcIixcbiAgICAgICAgICAgICAgICBpbmRleCArIDEpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MURcXHUwNDMwXFx1MDQzN1xcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDBcXHUwNDMwXFx1MDQzN1xcdTA0MzRcXHUwNDM1XFx1MDQzQlxcdTA0MzBcIiwgdmFsdWU6IHNlY3Rpb24udGl0bGUsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4uc2VjdGlvbiwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCBmbGV4OiAxIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSxcbiAgICAgICAgc2VjdGlvbi5sZXNzb25zLm1hcCgobGVzc29uLCBsaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGVzc29uUm93LCB7IGtleTogbGksIGxlc3NvbjogbGVzc29uLCBvbkNoYW5nZTogbCA9PiB1cGRhdGVMZXNzb24obGksIGwpLCBvblJlbW92ZTogKCkgPT4gcmVtb3ZlTGVzc29uKGxpKSB9KSkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogYWRkTGVzc29uLCBzdHlsZTogYnRuQWRkIH0sIFwiKyBcXHUwNDIzXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXCIpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3Vyc2VDcmVhdGUocHJvcHMpIHtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKCdmcm9udGVuZCcpO1xuICAgIGNvbnN0IFtyZXF1aXJlUXVpeiwgc2V0UmVxdWlyZVF1aXpdID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW21pblNjb3JlLCBzZXRNaW5TY29yZV0gPSB1c2VTdGF0ZSg2NSk7XG4gICAgY29uc3QgW3NlY3Rpb25zLCBzZXRTZWN0aW9uc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHsgdGl0bGU6ICcnLCBsZXNzb25zOiBbeyB0aXRsZTogJycsIGNvbnRlbnRfdHlwZTogJ3ZpZGVvJyB9XSB9LFxuICAgIF0pO1xuICAgIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhZGRTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRTZWN0aW9ucyhbLi4uc2VjdGlvbnMsIHsgdGl0bGU6ICcnLCBsZXNzb25zOiBbeyB0aXRsZTogJycsIGNvbnRlbnRfdHlwZTogJ3RleHQnIH1dIH1dKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVNlY3Rpb24gPSAoaSwgc2VjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gWy4uLnNlY3Rpb25zXTtcbiAgICAgICAgbmV4dFtpXSA9IHNlY3Rpb247XG4gICAgICAgIHNldFNlY3Rpb25zKG5leHQpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlU2VjdGlvbiA9IChpKSA9PiB7XG4gICAgICAgIHNldFNlY3Rpb25zKHNlY3Rpb25zLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGkpKTtcbiAgICB9O1xuICAgIGNvbnN0IHRvdGFsTGVzc29ucyA9IHNlY3Rpb25zLnJlZHVjZSgocywgc2VjKSA9PiBzICsgc2VjLmxlc3NvbnMubGVuZ3RoLCAwKTtcbiAgICBjb25zdCBhcGlVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcL3Jlc291cmNlc1xcLy8sICcvYXBpL3Jlc291cmNlcy8nKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlZGlyZWN0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5ub3RpY2U/Lm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0YHQvtC30LTQsNC90LjQuCDQutGD0YDRgdCwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgYWxlcnQoYNCe0YjQuNCx0LrQsDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBwYWRkaW5nOiAyNCwgbWluSGVpZ2h0OiAnMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdQYWdlLCBjb2xvcjogQy53aGl0ZSwgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBtZXRob2Q6IFwiUE9TVFwiLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCBzdHlsZTogeyBtYXhXaWR0aDogODAwLCBtYXJnaW46ICcwIGF1dG8nIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCA0cHgnLCBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sIFwiXFx1MDQyMVxcdTA0M0VcXHUwNDM3XFx1MDQzNFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQzQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0MzBcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCAyNHB4JywgZm9udFNpemU6IDEzLCBjb2xvcjogQy5naG9zdCB9IH0sIFwiXFx1MDQxQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MSwgXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0QiwgXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzggXFx1MDQzOCBcXHUwNDQyXFx1MDQzNVxcdTA0NDFcXHUwNDQyXFx1MDQ0QiBcXHUyMDE0IFxcdTA0MzJcXHUwNDQxXFx1MDQ1MSBcXHUwNDM3XFx1MDQzMCBcXHUwNDNFXFx1MDQzNFxcdTA0MzhcXHUwNDNEIFxcdTA0NDhcXHUwNDMwXFx1MDQzM1wiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJywgZ2FwOiAxNiwgbWFyZ2luQm90dG9tOiAyNCB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQzMCAqXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB2YWx1ZTogdGl0bGUsIG9uQ2hhbmdlOiBlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJ0aXRsZVwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0M0ZcXHUwNDQwXFx1MDQzOFxcdTA0M0NcXHUwNDM1XFx1MDQ0MDogSmF2YVNjcmlwdCBcXHUwNDQxIFxcdTA0M0RcXHUwNDQzXFx1MDQzQlxcdTA0NEZcIiwgc3R5bGU6IGZ1bGxJbnB1dFN0eWxlLCByZXF1aXJlZDogdHJ1ZSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFFXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHsgdmFsdWU6IGRlc2NyaXB0aW9uLCBvbkNoYW5nZTogZSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSksIG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxQVxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0FcXHUwNDNFXFx1MDQzNSBcXHUwNDNFXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQzMCBcXHUyMDE0IFxcdTA0NDdcXHUwNDM1XFx1MDQzQ1xcdTA0NDMgXFx1MDQzRFxcdTA0MzBcXHUwNDQzXFx1MDQ0N1xcdTA0MzhcXHUwNDQyXFx1MDQ0MVxcdTA0NEYgXFx1MDQ0MVxcdTA0NDJcXHUwNDQzXFx1MDQzNFxcdTA0MzVcXHUwNDNEXFx1MDQ0MlwiLCByb3dzOiAzLCBzdHlsZTogeyAuLi5mdWxsSW5wdXRTdHlsZSwgcmVzaXplOiAndmVydGljYWwnIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFBXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzM1xcdTA0M0VcXHUwNDQwXFx1MDQzOFxcdTA0NEZcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogY2F0ZWdvcnksIG9uQ2hhbmdlOiBlID0+IHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJjYXRlZ29yeVwiLCBzdHlsZTogZnVsbElucHV0U3R5bGUgfSwgQ0FURUdPUklFUy5tYXAoYyA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogYy52YWx1ZSwgdmFsdWU6IGMudmFsdWUgfSwgYy5sYWJlbCkpKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiB7IC4uLmxhYmVsU3R5bGUsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgY3Vyc29yOiAncG9pbnRlcicgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiByZXF1aXJlUXVpeiwgb25DaGFuZ2U6IGUgPT4gc2V0UmVxdWlyZVF1aXooZS50YXJnZXQuY2hlY2tlZCksIG5hbWU6IFwicmVxdWlyZV9xdWl6X2NvbXBsZXRpb25cIiwgc3R5bGU6IHsgYWNjZW50Q29sb3I6IEMuZ3JlZW4gfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyMlxcdTA0NDBcXHUwNDM1XFx1MDQzMVxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRDIFxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDVcXHUwNDNFXFx1MDQzNlxcdTA0MzRcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlUXVpeiAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpblRvcDogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MUNcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDNDXFx1MDQzMFxcdTA0M0JcXHUwNDRDXFx1MDQzRFxcdTA0NEJcXHUwNDM5IFxcdTA0MzFcXHUwNDMwXFx1MDQzQlxcdTA0M0JcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcIm51bWJlclwiLCB2YWx1ZTogbWluU2NvcmUsIG9uQ2hhbmdlOiBlID0+IHNldE1pblNjb3JlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpLCBuYW1lOiBcIm1pbl9xdWl6X3Njb3JlXCIsIG1pbjogMCwgbWF4OiAxMDAsIHN0eWxlOiB7IC4uLmZ1bGxJbnB1dFN0eWxlLCB3aWR0aDogMTIwIH0gfSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBDLm11dGVkLCBtYXJnaW46ICcwIDAgMTJweCcgfSB9LFxuICAgICAgICAgICAgICAgIFwiXFx1MDQyMFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0QiBcXHUwNDM4IFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDM4XCIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLmdob3N0LCBmb250V2VpZ2h0OiA0MDAsIG1hcmdpbkxlZnQ6IDggfSB9LFxuICAgICAgICAgICAgICAgICAgICBcIihcIixcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBcIiBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0LiwgXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsTGVzc29ucyxcbiAgICAgICAgICAgICAgICAgICAgXCIgXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0M0VcXHUwNDMyKVwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcInNlY3Rpb25zX2pzb25cIiwgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zKSB9KSxcbiAgICAgICAgICAgIHNlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbkJsb2NrLCB7IGtleTogaSwgc2VjdGlvbjogc2VjdGlvbiwgaW5kZXg6IGksIG9uQ2hhbmdlOiBzID0+IHVwZGF0ZVNlY3Rpb24oaSwgcyksIG9uUmVtb3ZlOiAoKSA9PiByZW1vdmVTZWN0aW9uKGkpIH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMjQgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBhZGRTZWN0aW9uLCBzdHlsZTogYWRkU2VjdGlvbkJ0blN0eWxlIH0sIFwiKyBcXHUwNDE0XFx1MDQzRVxcdTA0MzFcXHUwNDMwXFx1MDQzMlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBzdWJtaXR0aW5nLCBzdHlsZTogc3VibWl0QnRuU3R5bGUgfSwgc3VibWl0dGluZyA/ICfQodC+0LfQtNCw0L3QuNC14oCmJyA6ICfQodC+0LfQtNCw0YLRjCDQutGD0YDRgScpKSkpO1xufVxuY29uc3QgbGFiZWxTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgY29sb3I6IEMuZmFpbnQsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxufTtcbmNvbnN0IGZ1bGxJbnB1dFN0eWxlID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZzogJzlweCAxMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiBDLmJnSW5wdXQsXG4gICAgY29sb3I6IEMud2hpdGUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDE0LFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94Jyxcbn07XG5jb25zdCBhZGRTZWN0aW9uQnRuU3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzhweCAxNnB4JyxcbiAgICBiYWNrZ3JvdW5kOiAndHJhbnNwYXJlbnQnLFxuICAgIGNvbG9yOiBDLmN5YW4sXG4gICAgYm9yZGVyOiBgMXB4IGRhc2hlZCAke0MuY3lhbn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTMsXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXG59O1xuY29uc3Qgc3VibWl0QnRuU3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzEycHggMzJweCcsXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7Qy5ncmVlbn0sICR7Qy5ncmVlbkRhcmt9KWAsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgZm9udFNpemU6IDE1LFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5jb25zdCBDID0ge1xuICAgIGJnUGFnZTogJyMwMjA2MTcnLFxuICAgIGJnQ2FyZDogJyMxZTI5M2InLFxuICAgIGJnSW5wdXQ6ICcjMGYxNzJhJyxcbiAgICBib3JkZXI6ICcjMzM0MTU1JyxcbiAgICBncmVlbjogJyMxMGI5ODEnLFxuICAgIGdyZWVuRGFyazogJyMwNTk2NjknLFxuICAgIGN5YW46ICcjMDZiNmQ0JyxcbiAgICBibHVlOiAnIzNiODJmNicsXG4gICAgZXJyb3I6ICcjZWY0NDQ0JyxcbiAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgIG11dGVkOiAnI2NiZDVlMScsXG4gICAgZmFpbnQ6ICcjOTRhM2I4JyxcbiAgICBnaG9zdDogJyM2NDc0OGInLFxufTtcbmNvbnN0IENPTlRFTlRfVFlQRVMgPSBbXG4gICAgeyB2YWx1ZTogJ3RleHQnLCBsYWJlbDogJ9Ci0LXQutGB0YInIH0sXG4gICAgeyB2YWx1ZTogJ3ZpZGVvJywgbGFiZWw6ICfQktC40LTQtdC+JyB9LFxuICAgIHsgdmFsdWU6ICdxdWl6JywgbGFiZWw6ICfQotC10YHRgicgfSxcbl07XG5jb25zdCBRVUVTVElPTl9UWVBFUyA9IFtcbiAgICB7IHZhbHVlOiAnc2luZ2xlJywgbGFiZWw6ICfQntC00LjQvSDQstCw0YDQuNCw0L3RgicgfSxcbiAgICB7IHZhbHVlOiAnbXVsdGlwbGUnLCBsYWJlbDogJ9Cd0LXRgdC60L7Qu9GM0LrQviDQstCw0YDQuNCw0L3RgtC+0LInIH0sXG4gICAgeyB2YWx1ZTogJ3RleHQnLCBsYWJlbDogJ9Ci0LXQutGB0YLQvtCy0YvQuSDQvtGC0LLQtdGCJyB9LFxuXTtcbmNvbnN0IENBVEVHT1JJRVMgPSBbXG4gICAgeyB2YWx1ZTogJ2Zyb250ZW5kJywgbGFiZWw6ICdGcm9udGVuZCcgfSxcbiAgICB7IHZhbHVlOiAnYmFja2VuZCcsIGxhYmVsOiAnQmFja2VuZCcgfSxcbiAgICB7IHZhbHVlOiAnZGV2b3BzJywgbGFiZWw6ICdEZXZPcHMnIH0sXG4gICAgeyB2YWx1ZTogJ21vYmlsZScsIGxhYmVsOiAnTW9iaWxlJyB9LFxuICAgIHsgdmFsdWU6ICdkZXNpZ24nLCBsYWJlbDogJ0Rlc2lnbicgfSxcbiAgICB7IHZhbHVlOiAnb3RoZXInLCBsYWJlbDogJ9CU0YDRg9Cz0L7QtScgfSxcbl07XG5jb25zdCBpbnB1dFN0eWxlID0ge1xuICAgIHBhZGRpbmc6ICc4cHggMTBweCcsXG4gICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgIGNvbG9yOiBDLndoaXRlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG59O1xuY29uc3Qgc2VsZWN0U3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzhweCAxMHB4JyxcbiAgICBiYWNrZ3JvdW5kOiBDLmJnSW5wdXQsXG4gICAgY29sb3I6IEMud2hpdGUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG5jb25zdCBidG5EYW5nZXIgPSB7XG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGNvbG9yOiBDLmVycm9yLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBwYWRkaW5nOiAnNHB4IDhweCcsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxufTtcbmNvbnN0IGJ0bkFkZCA9IHtcbiAgICBwYWRkaW5nOiAnNnB4IDEycHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IEMuZ3JlZW4sXG4gICAgYm9yZGVyOiBgMXB4IGRhc2hlZCAke0MuZ3JlZW59YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG1hcmdpblRvcDogNCxcbn07XG5mdW5jdGlvbiBBbnN3ZXJSb3coeyBhbnN3ZXIsIG9uQ2hhbmdlLCBvblJlbW92ZSwgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA0IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MTJcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcXHUwNDMwXFx1MDQzRFxcdTA0NDIgXFx1MDQzRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDMwXCIsIHZhbHVlOiBhbnN3ZXIuYW5zd2VyX3RleHQsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4uYW5zd2VyLCBhbnN3ZXJfdGV4dDogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogQy5mYWludCwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA0LCBjdXJzb3I6ICdwb2ludGVyJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiBhbnN3ZXIuaXNfY29ycmVjdCwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5hbnN3ZXIsIGlzX2NvcnJlY3Q6IGUudGFyZ2V0LmNoZWNrZWQgfSksIHN0eWxlOiB7IGFjY2VudENvbG9yOiBDLmdyZWVuIH0gfSksXG4gICAgICAgICAgICBcIlxcdTA0MzJcXHUwNDM1XFx1MDQ0MFxcdTA0M0RcXHUwNDNFXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSk7XG59XG5mdW5jdGlvbiBRdWVzdGlvbkJsb2NrKHsgcXVlc3Rpb24sIG9uQ2hhbmdlLCBvblJlbW92ZSwgfSkge1xuICAgIGNvbnN0IGFkZEFuc3dlciA9ICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVzdGlvbiwgYW5zd2VyczogWy4uLnF1ZXN0aW9uLmFuc3dlcnMsIHsgYW5zd2VyX3RleHQ6ICcnLCBpc19jb3JyZWN0OiBmYWxzZSB9XSB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZUFuc3dlciA9IChpLCBhKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4ucXVlc3Rpb24uYW5zd2Vyc107XG4gICAgICAgIG5leHRbaV0gPSBhO1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnF1ZXN0aW9uLCBhbnN3ZXJzOiBuZXh0IH0pO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlQW5zd2VyID0gKGkpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5xdWVzdGlvbiwgYW5zd2VyczogcXVlc3Rpb24uYW5zd2Vycy5maWx0ZXIoKF8sIGlkeCkgPT4gaWR4ICE9PSBpKSB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTAsIHBhZGRpbmc6IDEyLCBiYWNrZ3JvdW5kOiAnIzBhMTYyOCcsIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsIGJvcmRlclJhZGl1czogNiB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDYsIG1hcmdpbkJvdHRvbTogOCB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQyMlxcdTA0MzVcXHUwNDNBXFx1MDQ0MVxcdTA0NDIgXFx1MDQzMlxcdTA0M0VcXHUwNDNGXFx1MDQ0MFxcdTA0M0VcXHUwNDQxXFx1MDQzMFwiLCB2YWx1ZTogcXVlc3Rpb24ucXVlc3Rpb25fdGV4dCwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5xdWVzdGlvbiwgcXVlc3Rpb25fdGV4dDogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogcXVlc3Rpb24ucXVlc3Rpb25fdHlwZSwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5xdWVzdGlvbiwgcXVlc3Rpb25fdHlwZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiBzZWxlY3RTdHlsZSB9LCBRVUVTVElPTl9UWVBFUy5tYXAocXQgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyBrZXk6IHF0LnZhbHVlLCB2YWx1ZTogcXQudmFsdWUgfSwgcXQubGFiZWwpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IG9uUmVtb3ZlLCBzdHlsZTogYnRuRGFuZ2VyIH0sIFwiXFx1MjcxNVwiKSksXG4gICAgICAgIHF1ZXN0aW9uLnF1ZXN0aW9uX3R5cGUgIT09ICd0ZXh0JyAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCxcbiAgICAgICAgICAgIHF1ZXN0aW9uLmFuc3dlcnMubWFwKChhbnMsIGFpKSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChBbnN3ZXJSb3csIHsga2V5OiBhaSwgYW5zd2VyOiBhbnMsIG9uQ2hhbmdlOiBhID0+IHVwZGF0ZUFuc3dlcihhaSwgYSksIG9uUmVtb3ZlOiAoKSA9PiByZW1vdmVBbnN3ZXIoYWkpIH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogYWRkQW5zd2VyLCBzdHlsZTogYnRuQWRkIH0sIFwiKyBcXHUwNDEyXFx1MDQzMFxcdTA0NDBcXHUwNDM4XFx1MDQzMFxcdTA0M0RcXHUwNDQyIFxcdTA0M0VcXHUwNDQyXFx1MDQzMlxcdTA0MzVcXHUwNDQyXFx1MDQzMFwiKSkpKSk7XG59XG5mdW5jdGlvbiBMZXNzb25Sb3coeyBsZXNzb24sIG9uQ2hhbmdlLCBvblJlbW92ZSwgfSkge1xuICAgIGNvbnN0IGFkZFF1ZXN0aW9uID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZSh7XG4gICAgICAgICAgICAuLi5sZXNzb24sXG4gICAgICAgICAgICBxdWVzdGlvbnM6IFsuLi4obGVzc29uLnF1ZXN0aW9ucyB8fCBbXSksIHsgcXVlc3Rpb25fdGV4dDogJycsIHF1ZXN0aW9uX3R5cGU6ICdzaW5nbGUnLCBhbnN3ZXJzOiBbeyBhbnN3ZXJfdGV4dDogJycsIGlzX2NvcnJlY3Q6IGZhbHNlIH1dIH1dLFxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVF1ZXN0aW9uID0gKGksIHEpID0+IHtcbiAgICAgICAgY29uc3QgbmV4dCA9IFsuLi4obGVzc29uLnF1ZXN0aW9ucyB8fCBbXSldO1xuICAgICAgICBuZXh0W2ldID0gcTtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5sZXNzb24sIHF1ZXN0aW9uczogbmV4dCB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVF1ZXN0aW9uID0gKGkpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5sZXNzb24sIHF1ZXN0aW9uczogKGxlc3Nvbi5xdWVzdGlvbnMgfHwgW10pLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGkpIH0pO1xuICAgIH07XG4gICAgY29uc3QgaXNRdWl6ID0gbGVzc29uLmNvbnRlbnRfdHlwZSA9PT0gJ3F1aXonO1xuICAgIGNvbnN0IGlzVmlkZW8gPSBsZXNzb24uY29udGVudF90eXBlID09PSAndmlkZW8nO1xuICAgIGNvbnN0IGlzVGV4dCA9IGxlc3Nvbi5jb250ZW50X3R5cGUgPT09ICd0ZXh0JztcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDgsIHBhZGRpbmc6ICcxMHB4IDEycHgnLCBiYWNrZ3JvdW5kOiBDLmJnQ2FyZCwgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCwgYm9yZGVyUmFkaXVzOiA2IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA2IH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQzXFx1MDQ0MFxcdTA0M0VcXHUwNDNBXFx1MDQzMFwiLCB2YWx1ZTogbGVzc29uLnRpdGxlLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgdGl0bGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCBmbGV4OiAxIH0gfSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgdmFsdWU6IGxlc3Nvbi5jb250ZW50X3R5cGUsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ubGVzc29uLCBjb250ZW50X3R5cGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogc2VsZWN0U3R5bGUgfSwgQ09OVEVOVF9UWVBFUy5tYXAoY3QgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgeyBrZXk6IGN0LnZhbHVlLCB2YWx1ZTogY3QudmFsdWUgfSwgY3QubGFiZWwpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IG9uUmVtb3ZlLCBzdHlsZTogYnRuRGFuZ2VyIH0sIFwiXFx1MjcxNVwiKSksXG4gICAgICAgIGlzVmlkZW8gJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDIxXFx1MDQ0MVxcdTA0NEJcXHUwNDNCXFx1MDQzQVxcdTA0MzAgXFx1MDQzRFxcdTA0MzAgXFx1MDQzMlxcdTA0MzhcXHUwNDM0XFx1MDQzNVxcdTA0M0UgKFlvdVR1YmUvVmltZW9cXHUyMDI2KVwiLCB2YWx1ZTogbGVzc29uLnZpZGVvX3VybCB8fCAnJywgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5sZXNzb24sIHZpZGVvX3VybDogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIHdpZHRoOiAnMTAwJScgfSB9KSksXG4gICAgICAgIGlzVGV4dCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHsgcGxhY2Vob2xkZXI6IFwiXFx1MDQyMlxcdTA0MzVcXHUwNDNBXFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQzMlxcdTA0M0VcXHUwNDM1IFxcdTA0NDFcXHUwNDNFXFx1MDQzNFxcdTA0MzVcXHUwNDQwXFx1MDQzNlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0MzBcIiwgdmFsdWU6IGxlc3Nvbi50ZXh0X2NvbnRlbnQgfHwgJycsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4ubGVzc29uLCB0ZXh0X2NvbnRlbnQ6IGUudGFyZ2V0LnZhbHVlIH0pLCByb3dzOiAzLCBzdHlsZTogeyAuLi5pbnB1dFN0eWxlLCB3aWR0aDogJzEwMCUnLCByZXNpemU6ICd2ZXJ0aWNhbCcgfSB9KSksXG4gICAgICAgIGlzUXVpeiAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpblRvcDogOCB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM3XFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcIiwgdmFsdWU6IGxlc3Nvbi5xdWl6X3RpdGxlIHx8ICcnLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLmxlc3NvbiwgcXVpel90aXRsZTogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIHdpZHRoOiAnMTAwJScsIG1hcmdpbkJvdHRvbTogOCB9IH0pLFxuICAgICAgICAgICAgKGxlc3Nvbi5xdWVzdGlvbnMgfHwgW10pLm1hcCgocSwgcWkpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFF1ZXN0aW9uQmxvY2ssIHsga2V5OiBxaSwgcXVlc3Rpb246IHEsIG9uQ2hhbmdlOiBhID0+IHVwZGF0ZVF1ZXN0aW9uKHFpLCBhKSwgb25SZW1vdmU6ICgpID0+IHJlbW92ZVF1ZXN0aW9uKHFpKSB9KSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IGFkZFF1ZXN0aW9uLCBzdHlsZTogYnRuQWRkIH0sIFwiKyBcXHUwNDEyXFx1MDQzRVxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDFcIikpKSkpO1xufVxuZnVuY3Rpb24gU2VjdGlvbkJsb2NrKHsgc2VjdGlvbiwgaW5kZXgsIG9uQ2hhbmdlLCBvblJlbW92ZSwgfSkge1xuICAgIGNvbnN0IGFkZExlc3NvbiA9ICgpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5zZWN0aW9uLCBsZXNzb25zOiBbLi4uc2VjdGlvbi5sZXNzb25zLCB7IHRpdGxlOiAnJywgY29udGVudF90eXBlOiAndGV4dCcgfV0gfSk7XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGVMZXNzb24gPSAobGksIGxlc3NvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gWy4uLnNlY3Rpb24ubGVzc29uc107XG4gICAgICAgIG5leHRbbGldID0gbGVzc29uO1xuICAgICAgICBvbkNoYW5nZSh7IC4uLnNlY3Rpb24sIGxlc3NvbnM6IG5leHQgfSk7XG4gICAgfTtcbiAgICBjb25zdCByZW1vdmVMZXNzb24gPSAobGkpID0+IHtcbiAgICAgICAgb25DaGFuZ2UoeyAuLi5zZWN0aW9uLCBsZXNzb25zOiBzZWN0aW9uLmxlc3NvbnMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBsaSkgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDE2LCBwYWRkaW5nOiAxNiwgYmFja2dyb3VuZDogQy5iZ0NhcmQsIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsIGJvcmRlclJhZGl1czogOCB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMTIgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTMsIGZvbnRXZWlnaHQ6IDYwMCwgY29sb3I6IEMuY3lhbiB9IH0sXG4gICAgICAgICAgICAgICAgXCJcXHUwNDIwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0IgXCIsXG4gICAgICAgICAgICAgICAgaW5kZXggKyAxKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcXHUwNDMwXCIsIHZhbHVlOiBzZWN0aW9uLnRpdGxlLCBvbkNoYW5nZTogZSA9PiBvbkNoYW5nZSh7IC4uLnNlY3Rpb24sIHRpdGxlOiBlLnRhcmdldC52YWx1ZSB9KSwgc3R5bGU6IHsgLi4uaW5wdXRTdHlsZSwgZmxleDogMSB9IH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IG9uUmVtb3ZlLCBzdHlsZTogYnRuRGFuZ2VyIH0sIFwiXFx1MjcxNVwiKSksXG4gICAgICAgIHNlY3Rpb24ubGVzc29ucy5tYXAoKGxlc3NvbiwgbGkpID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KExlc3NvblJvdywgeyBrZXk6IGxpLCBsZXNzb246IGxlc3Nvbiwgb25DaGFuZ2U6IGwgPT4gdXBkYXRlTGVzc29uKGxpLCBsKSwgb25SZW1vdmU6ICgpID0+IHJlbW92ZUxlc3NvbihsaSkgfSkpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IGFkZExlc3Nvbiwgc3R5bGU6IGJ0bkFkZCB9LCBcIisgXFx1MDQyM1xcdTA0NDBcXHUwNDNFXFx1MDQzQVwiKSkpO1xufVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlRWRpdChwcm9wcykge1xuICAgIGNvbnN0IHJlY29yZCA9IHByb3BzLnJlY29yZD8ucGFyYW1zIHx8IHt9O1xuICAgIGNvbnN0IGNvdXJzZUlkID0gcmVjb3JkLmlkO1xuICAgIGNvbnN0IGluaXRpYWxTZWN0aW9ucyA9ICgoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gcmVjb3JkLmNvdXJzZV9kYXRhX2pzb24gPyBKU09OLnBhcnNlKHJlY29yZC5jb3Vyc2VfZGF0YV9qc29uKSA6IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShyZWNvcmQudGl0bGUgfHwgJycpO1xuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUocmVjb3JkLmRlc2NyaXB0aW9uIHx8ICcnKTtcbiAgICBjb25zdCBbY2F0ZWdvcnksIHNldENhdGVnb3J5XSA9IHVzZVN0YXRlKHJlY29yZC5jYXRlZ29yeSB8fCAnZnJvbnRlbmQnKTtcbiAgICBjb25zdCBbcmVxdWlyZVF1aXosIHNldFJlcXVpcmVRdWl6XSA9IHVzZVN0YXRlKHJlY29yZC5yZXF1aXJlX3F1aXpfY29tcGxldGlvbiA9PT0gdHJ1ZSB8fCByZWNvcmQucmVxdWlyZV9xdWl6X2NvbXBsZXRpb24gPT09ICd0cnVlJyk7XG4gICAgY29uc3QgW21pblNjb3JlLCBzZXRNaW5TY29yZV0gPSB1c2VTdGF0ZShOdW1iZXIocmVjb3JkLm1pbl9xdWl6X3Njb3JlID8/IDY1KSk7XG4gICAgY29uc3QgW3NlY3Rpb25zLCBzZXRTZWN0aW9uc10gPSB1c2VTdGF0ZShpbml0aWFsU2VjdGlvbnMpO1xuICAgIGNvbnN0IFtzdWJtaXR0aW5nLCBzZXRTdWJtaXR0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBhcGlVcmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcL3Jlc291cmNlc1xcLy8sICcvYXBpL3Jlc291cmNlcy8nKTtcbiAgICBjb25zdCBhZGRTZWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBzZXRTZWN0aW9ucyhbLi4uc2VjdGlvbnMsIHsgdGl0bGU6ICcnLCBsZXNzb25zOiBbeyB0aXRsZTogJycsIGNvbnRlbnRfdHlwZTogJ3RleHQnIH1dIH1dKTtcbiAgICB9O1xuICAgIGNvbnN0IHVwZGF0ZVNlY3Rpb24gPSAoaSwgc2VjdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBuZXh0ID0gWy4uLnNlY3Rpb25zXTtcbiAgICAgICAgbmV4dFtpXSA9IHNlY3Rpb247XG4gICAgICAgIHNldFNlY3Rpb25zKG5leHQpO1xuICAgIH07XG4gICAgY29uc3QgcmVtb3ZlU2VjdGlvbiA9IChpKSA9PiB7XG4gICAgICAgIHNldFNlY3Rpb25zKHNlY3Rpb25zLmZpbHRlcigoXywgaWR4KSA9PiBpZHggIT09IGkpKTtcbiAgICB9O1xuICAgIGNvbnN0IHRvdGFsTGVzc29ucyA9IHNlY3Rpb25zLnJlZHVjZSgocywgc2VjKSA9PiBzICsgc2VjLmxlc3NvbnMubGVuZ3RoLCAwKTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlZGlyZWN0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5ub3RpY2U/Lm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0YHQvtGF0YDQsNC90LXQvdC40Lgg0LrRg9GA0YHQsCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGFsZXJ0KGDQntGI0LjQsdC60LA6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgcGFkZGluZzogMjQsIG1pbkhlaWdodDogJzEwMHZoJywgYmFja2dyb3VuZENvbG9yOiBDLmJnUGFnZSwgY29sb3I6IEMud2hpdGUsIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIiB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgbWV0aG9kOiBcIlBPU1RcIiwgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCwgc3R5bGU6IHsgbWF4V2lkdGg6IDgwMCwgbWFyZ2luOiAnMCBhdXRvJyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogeyBtYXJnaW46ICcwIDAgNHB4JywgZm9udFNpemU6IDIyLCBmb250V2VpZ2h0OiA3MDAgfSB9LCBcIlxcdTA0MjBcXHUwNDM1XFx1MDQzNFxcdTA0MzBcXHUwNDNBXFx1MDQ0MlxcdTA0MzhcXHUwNDQwXFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDMwXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBzdHlsZTogeyBtYXJnaW46ICcwIDAgMjRweCcsIGZvbnRTaXplOiAxMywgY29sb3I6IEMuZ2hvc3QgfSB9LFxuICAgICAgICAgICAgICAgIFwiSUQ6IFwiLFxuICAgICAgICAgICAgICAgIGNvdXJzZUlkLFxuICAgICAgICAgICAgICAgIFwiIFxcdTIwMTQgXFx1MDQ0MFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQzRVxcdTA0MzIsIFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDNFXFx1MDQzMiBcXHUwNDM4IFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDNFXFx1MDQzMlwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJywgZ2FwOiAxNiwgbWFyZ2luQm90dG9tOiAyNCB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFEXFx1MDQzMFxcdTA0MzdcXHUwNDMyXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQzMCAqXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB2YWx1ZTogdGl0bGUsIG9uQ2hhbmdlOiBlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJ0aXRsZVwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0M0ZcXHUwNDQwXFx1MDQzOFxcdTA0M0NcXHUwNDM1XFx1MDQ0MDogSmF2YVNjcmlwdCBcXHUwNDQxIFxcdTA0M0RcXHUwNDQzXFx1MDQzQlxcdTA0NEZcIiwgc3R5bGU6IGZ1bGxJbnB1dFN0eWxlLCByZXF1aXJlZDogdHJ1ZSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGdyaWRDb2x1bW46ICcxIC8gLTEnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFFXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNVwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIsIHsgdmFsdWU6IGRlc2NyaXB0aW9uLCBvbkNoYW5nZTogZSA9PiBzZXREZXNjcmlwdGlvbihlLnRhcmdldC52YWx1ZSksIG5hbWU6IFwiZGVzY3JpcHRpb25cIiwgcGxhY2Vob2xkZXI6IFwiXFx1MDQxQVxcdTA0NDBcXHUwNDMwXFx1MDQ0MlxcdTA0M0FcXHUwNDNFXFx1MDQzNSBcXHUwNDNFXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQzNSBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQzMCBcXHUyMDE0IFxcdTA0NDdcXHUwNDM1XFx1MDQzQ1xcdTA0NDMgXFx1MDQzRFxcdTA0MzBcXHUwNDQzXFx1MDQ0N1xcdTA0MzhcXHUwNDQyXFx1MDQ0MVxcdTA0NEYgXFx1MDQ0MVxcdTA0NDJcXHUwNDQzXFx1MDQzNFxcdTA0MzVcXHUwNDNEXFx1MDQ0MlwiLCByb3dzOiAzLCBzdHlsZTogeyAuLi5mdWxsSW5wdXRTdHlsZSwgcmVzaXplOiAndmVydGljYWwnIH0gfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IGxhYmVsU3R5bGUgfSwgXCJcXHUwNDFBXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzM1xcdTA0M0VcXHUwNDQwXFx1MDQzOFxcdTA0NEZcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyB2YWx1ZTogY2F0ZWdvcnksIG9uQ2hhbmdlOiBlID0+IHNldENhdGVnb3J5KGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJjYXRlZ29yeVwiLCBzdHlsZTogZnVsbElucHV0U3R5bGUgfSwgQ0FURUdPUklFUy5tYXAoYyA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCB7IGtleTogYy52YWx1ZSwgdmFsdWU6IGMudmFsdWUgfSwgYy5sYWJlbCkpKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiB7IC4uLmxhYmVsU3R5bGUsIGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogOCwgY3Vyc29yOiAncG9pbnRlcicgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiByZXF1aXJlUXVpeiwgb25DaGFuZ2U6IGUgPT4gc2V0UmVxdWlyZVF1aXooZS50YXJnZXQuY2hlY2tlZCksIG5hbWU6IFwicmVxdWlyZV9xdWl6X2NvbXBsZXRpb25cIiwgc3R5bGU6IHsgYWNjZW50Q29sb3I6IEMuZ3JlZW4gfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFx1MDQyMlxcdTA0NDBcXHUwNDM1XFx1MDQzMVxcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDRDIFxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDVcXHUwNDNFXFx1MDQzNlxcdTA0MzRcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0NDJcXHUwNDM1XFx1MDQ0MVxcdTA0NDJcXHUwNDMwXCIpLFxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlUXVpeiAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpblRvcDogOCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MUNcXHUwNDM4XFx1MDQzRFxcdTA0MzhcXHUwNDNDXFx1MDQzMFxcdTA0M0JcXHUwNDRDXFx1MDQzRFxcdTA0NEJcXHUwNDM5IFxcdTA0MzFcXHUwNDMwXFx1MDQzQlxcdTA0M0JcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcIm51bWJlclwiLCB2YWx1ZTogbWluU2NvcmUsIG9uQ2hhbmdlOiBlID0+IHNldE1pblNjb3JlKE51bWJlcihlLnRhcmdldC52YWx1ZSkpLCBuYW1lOiBcIm1pbl9xdWl6X3Njb3JlXCIsIG1pbjogMCwgbWF4OiAxMDAsIHN0eWxlOiB7IC4uLmZ1bGxJbnB1dFN0eWxlLCB3aWR0aDogMTIwIH0gfSkpKSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBDLm11dGVkLCBtYXJnaW46ICcwIDAgMTJweCcgfSB9LFxuICAgICAgICAgICAgICAgIFwiXFx1MDQyMFxcdTA0MzBcXHUwNDM3XFx1MDQzNFxcdTA0MzVcXHUwNDNCXFx1MDQ0QiBcXHUwNDM4IFxcdTA0NDNcXHUwNDQwXFx1MDQzRVxcdTA0M0FcXHUwNDM4XCIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgeyBzdHlsZTogeyBmb250U2l6ZTogMTIsIGNvbG9yOiBDLmdob3N0LCBmb250V2VpZ2h0OiA0MDAsIG1hcmdpbkxlZnQ6IDggfSB9LFxuICAgICAgICAgICAgICAgICAgICBcIihcIixcbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBcIiBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0LiwgXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsTGVzc29ucyxcbiAgICAgICAgICAgICAgICAgICAgXCIgXFx1MDQ0M1xcdTA0NDBcXHUwNDNFXFx1MDQzQVxcdTA0M0VcXHUwNDMyKVwiKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcInNlY3Rpb25zX2pzb25cIiwgdmFsdWU6IEpTT04uc3RyaW5naWZ5KHNlY3Rpb25zKSB9KSxcbiAgICAgICAgICAgIHNlY3Rpb25zLm1hcCgoc2VjdGlvbiwgaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2VjdGlvbkJsb2NrLCB7IGtleTogaSwgc2VjdGlvbjogc2VjdGlvbiwgaW5kZXg6IGksIG9uQ2hhbmdlOiBzID0+IHVwZGF0ZVNlY3Rpb24oaSwgcyksIG9uUmVtb3ZlOiAoKSA9PiByZW1vdmVTZWN0aW9uKGkpIH0pKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDgsIG1hcmdpbkJvdHRvbTogMjQgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiBhZGRTZWN0aW9uLCBzdHlsZTogYWRkU2VjdGlvbkJ0blN0eWxlIH0sIFwiKyBcXHUwNDE0XFx1MDQzRVxcdTA0MzFcXHUwNDMwXFx1MDQzMlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcXHUwNDQwXFx1MDQzMFxcdTA0MzdcXHUwNDM0XFx1MDQzNVxcdTA0M0JcIikpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBzdWJtaXR0aW5nLCBzdHlsZTogc3VibWl0QnRuU3R5bGUgfSwgc3VibWl0dGluZyA/ICfQodC+0YXRgNCw0L3QtdC90LjQteKApicgOiAn0KHQvtGF0YDQsNC90LjRgtGMINC60YPRgNGBJykpKSk7XG59XG5jb25zdCBsYWJlbFN0eWxlID0ge1xuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBjb2xvcjogQy5mYWludCxcbiAgICBtYXJnaW5Cb3R0b206IDQsXG59O1xuY29uc3QgZnVsbElucHV0U3R5bGUgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiAnOXB4IDEycHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogQy53aGl0ZSxcbiAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgIGJvcmRlclJhZGl1czogNixcbiAgICBmb250U2l6ZTogMTQsXG4gICAgb3V0bGluZTogJ25vbmUnLFxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxufTtcbmNvbnN0IGFkZFNlY3Rpb25CdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IEMuY3lhbixcbiAgICBib3JkZXI6IGAxcHggZGFzaGVkICR7Qy5jeWFufWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG5jb25zdCBzdWJtaXRCdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnMTJweCAzMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBmb250U2l6ZTogMTUsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdJbnB1dDogJyMwZjE3MmEnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgY3lhbjogJyMwNmI2ZDQnLFxuICAgIGJsdWU6ICcjM2I4MmY2JyxcbiAgICBlcnJvcjogJyNlZjQ0NDQnLFxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXG4gICAgbXV0ZWQ6ICcjY2JkNWUxJyxcbiAgICBmYWludDogJyM5NGEzYjgnLFxuICAgIGdob3N0OiAnIzY0NzQ4YicsXG59O1xuY29uc3QgUVVFU1RJT05fVFlQRVMgPSBbXG4gICAgeyB2YWx1ZTogJ3NpbmdsZScsIGxhYmVsOiAn0J7QtNC40L0g0LLQsNGA0LjQsNC90YInIH0sXG4gICAgeyB2YWx1ZTogJ211bHRpcGxlJywgbGFiZWw6ICfQndC10YHQutC+0LvRjNC60L4g0LLQsNGA0LjQsNC90YLQvtCyJyB9LFxuICAgIHsgdmFsdWU6ICd0ZXh0JywgbGFiZWw6ICfQotC10LrRgdGC0L7QstGL0Lkg0L7RgtCy0LXRgicgfSxcbl07XG5jb25zdCBpbnB1dFN0eWxlID0ge1xuICAgIHBhZGRpbmc6ICc4cHggMTBweCcsXG4gICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgIGNvbG9yOiBDLndoaXRlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG59O1xuY29uc3Qgc2VsZWN0U3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzhweCAxMHB4JyxcbiAgICBiYWNrZ3JvdW5kOiBDLmJnSW5wdXQsXG4gICAgY29sb3I6IEMud2hpdGUsXG4gICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEzLFxuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG5jb25zdCBidG5EYW5nZXIgPSB7XG4gICAgYmFja2dyb3VuZDogJ25vbmUnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGNvbG9yOiBDLmVycm9yLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICBwYWRkaW5nOiAnNHB4IDhweCcsXG4gICAgYm9yZGVyUmFkaXVzOiA0LFxufTtcbmNvbnN0IGJ0bkFkZCA9IHtcbiAgICBwYWRkaW5nOiAnNnB4IDEycHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IEMuZ3JlZW4sXG4gICAgYm9yZGVyOiBgMXB4IGRhc2hlZCAke0MuZ3JlZW59YCxcbiAgICBib3JkZXJSYWRpdXM6IDYsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgIG1hcmdpblRvcDogNCxcbn07XG5mdW5jdGlvbiBBbnN3ZXJSb3coeyBhbnN3ZXIsIG9uQ2hhbmdlLCBvblJlbW92ZSwgfSkge1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA0IH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MTJcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcXHUwNDMwXFx1MDQzRFxcdTA0NDIgXFx1MDQzRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDMwXCIsIHZhbHVlOiBhbnN3ZXIuYW5zd2VyX3RleHQsIG9uQ2hhbmdlOiBlID0+IG9uQ2hhbmdlKHsgLi4uYW5zd2VyLCBhbnN3ZXJfdGV4dDogZS50YXJnZXQudmFsdWUgfSksIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogQy5mYWludCwgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZ2FwOiA0LCBjdXJzb3I6ICdwb2ludGVyJywgd2hpdGVTcGFjZTogJ25vd3JhcCcgfSB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJjaGVja2JveFwiLCBjaGVja2VkOiBhbnN3ZXIuaXNfY29ycmVjdCwgb25DaGFuZ2U6IGUgPT4gb25DaGFuZ2UoeyAuLi5hbnN3ZXIsIGlzX2NvcnJlY3Q6IGUudGFyZ2V0LmNoZWNrZWQgfSksIHN0eWxlOiB7IGFjY2VudENvbG9yOiBDLmdyZWVuIH0gfSksXG4gICAgICAgICAgICBcIlxcdTA0MzJcXHUwNDM1XFx1MDQ0MFxcdTA0M0RcXHUwNDNFXCIpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgb25DbGljazogb25SZW1vdmUsIHN0eWxlOiBidG5EYW5nZXIgfSwgXCJcXHUyNzE1XCIpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWl6Q3JlYXRlKHByb3BzKSB7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gICAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHsgcXVlc3Rpb25fdGV4dDogJycsIHF1ZXN0aW9uX3R5cGU6ICdzaW5nbGUnLCBhbnN3ZXJzOiBbeyBhbnN3ZXJfdGV4dDogJycsIGlzX2NvcnJlY3Q6IGZhbHNlIH1dIH0sXG4gICAgXSk7XG4gICAgY29uc3QgYXBpVXJsID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC9yZXNvdXJjZXNcXC8vLCAnL2FwaS9yZXNvdXJjZXMvJyk7XG4gICAgY29uc3QgYWRkUXVlc3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHNldFF1ZXN0aW9ucyhbLi4ucXVlc3Rpb25zLCB7IHF1ZXN0aW9uX3RleHQ6ICcnLCBxdWVzdGlvbl90eXBlOiAnc2luZ2xlJywgYW5zd2VyczogW3sgYW5zd2VyX3RleHQ6ICcnLCBpc19jb3JyZWN0OiBmYWxzZSB9XSB9XSk7XG4gICAgfTtcbiAgICBjb25zdCB1cGRhdGVRdWVzdGlvbiA9IChpLCBxKSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHQgPSBbLi4ucXVlc3Rpb25zXTtcbiAgICAgICAgbmV4dFtpXSA9IHE7XG4gICAgICAgIHNldFF1ZXN0aW9ucyhuZXh0KTtcbiAgICB9O1xuICAgIGNvbnN0IHJlbW92ZVF1ZXN0aW9uID0gKGkpID0+IHtcbiAgICAgICAgc2V0UXVlc3Rpb25zKHF1ZXN0aW9ucy5maWx0ZXIoKF8sIGlkeCkgPT4gaWR4ICE9PSBpKSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMuYXBwZW5kKGtleSwgdmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0sXG4gICAgICAgICAgICAgICAgYm9keTogcGFyYW1zLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnJlZGlyZWN0VXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZGF0YS5ub3RpY2U/Lm1lc3NhZ2UgfHwgJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0YHQvtC30LTQsNC90LjQuCDRgtC10YHRgtCwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgYWxlcnQoYNCe0YjQuNCx0LrQsDogJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFN1Ym1pdHRpbmcoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBwYWRkaW5nOiAyNCwgbWluSGVpZ2h0OiAnMTAwdmgnLCBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdQYWdlLCBjb2xvcjogQy53aGl0ZSwgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiIH0gfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImZvcm1cIiwgeyBtZXRob2Q6IFwiUE9TVFwiLCBvblN1Ym1pdDogaGFuZGxlU3VibWl0LCBzdHlsZTogeyBtYXhXaWR0aDogNjQwLCBtYXJnaW46ICcwIGF1dG8nIH0gfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCA0cHgnLCBmb250U2l6ZTogMjIsIGZvbnRXZWlnaHQ6IDcwMCB9IH0sIFwiXFx1MDQyMVxcdTA0M0VcXHUwNDM3XFx1MDQzNFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzBcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwicFwiLCB7IHN0eWxlOiB7IG1hcmdpbjogJzAgMCAyNHB4JywgZm9udFNpemU6IDEzLCBjb2xvcjogQy5naG9zdCB9IH0sIFwiXFx1MDQyMlxcdTA0MzVcXHUwNDQxXFx1MDQ0MiBcXHUwNDQxIFxcdTA0MzJcXHUwNDNFXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQ0MVxcdTA0MzBcXHUwNDNDXFx1MDQzOCBcXHUwNDM4IFxcdTA0M0VcXHUwNDQyXFx1MDQzMlxcdTA0MzVcXHUwNDQyXFx1MDQzMFxcdTA0M0NcXHUwNDM4IFxcdTA0MzdcXHUwNDMwIFxcdTA0M0VcXHUwNDM0XFx1MDQzOFxcdTA0M0QgXFx1MDQ0OFxcdTA0MzBcXHUwNDMzXCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTYgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiXFx1MDQxRFxcdTA0MzBcXHUwNDM3XFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0MzUgXFx1MDQ0MlxcdTA0MzVcXHUwNDQxXFx1MDQ0MlxcdTA0MzAgKlwiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB2YWx1ZTogdGl0bGUsIG9uQ2hhbmdlOiBlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKSwgbmFtZTogXCJ0aXRsZVwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFEXFx1MDQzMFxcdTA0M0ZcXHUwNDQwXFx1MDQzOFxcdTA0M0NcXHUwNDM1XFx1MDQ0MDogXFx1MDQxMlxcdTA0NDVcXHUwNDNFXFx1MDQzNFxcdTA0M0RcXHUwNDNFXFx1MDQzOSBcXHUwNDQyXFx1MDQzNVxcdTA0NDFcXHUwNDQyIFxcdTA0M0ZcXHUwNDNFIEphdmFTY3JpcHRcIiwgc3R5bGU6IGZ1bGxJbnB1dFN0eWxlLCByZXF1aXJlZDogdHJ1ZSB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyB0eXBlOiBcImhpZGRlblwiLCBuYW1lOiBcInF1ZXN0aW9uc19qc29uXCIsIHZhbHVlOiBKU09OLnN0cmluZ2lmeShxdWVzdGlvbnMpIH0pLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDE2LCBmb250V2VpZ2h0OiA2MDAsIGNvbG9yOiBDLm11dGVkLCBtYXJnaW46ICcwIDAgMTJweCcgfSB9LFxuICAgICAgICAgICAgICAgIFwiXFx1MDQxMlxcdTA0M0VcXHUwNDNGXFx1MDQ0MFxcdTA0M0VcXHUwNDQxXFx1MDQ0QlwiLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgc3R5bGU6IHsgZm9udFNpemU6IDEyLCBjb2xvcjogQy5naG9zdCwgZm9udFdlaWdodDogNDAwLCBtYXJnaW5MZWZ0OiA4IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgXCIoXCIsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIFwiKVwiKSksXG4gICAgICAgICAgICBxdWVzdGlvbnMubWFwKChxLCBxaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBrZXk6IHFpLCBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDEyLCBwYWRkaW5nOiAxMiwgYmFja2dyb3VuZDogQy5iZ0NhcmQsIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsIGJvcmRlclJhZGl1czogNiB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGdhcDogNiwgbWFyZ2luQm90dG9tOiA4IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlxcdTA0MjJcXHUwNDM1XFx1MDQzQVxcdTA0NDFcXHUwNDQyIFxcdTA0MzJcXHUwNDNFXFx1MDQzRlxcdTA0NDBcXHUwNDNFXFx1MDQ0MVxcdTA0MzBcIiwgdmFsdWU6IHEucXVlc3Rpb25fdGV4dCwgb25DaGFuZ2U6IGUgPT4gdXBkYXRlUXVlc3Rpb24ocWksIHsgLi4ucSwgcXVlc3Rpb25fdGV4dDogZS50YXJnZXQudmFsdWUgfSksIG5hbWU6IGBxdWVzdGlvbl8ke3FpfWAsIHN0eWxlOiB7IC4uLmlucHV0U3R5bGUsIGZsZXg6IDEgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IHZhbHVlOiBxLnF1ZXN0aW9uX3R5cGUsIG9uQ2hhbmdlOiBlID0+IHVwZGF0ZVF1ZXN0aW9uKHFpLCB7IC4uLnEsIHF1ZXN0aW9uX3R5cGU6IGUudGFyZ2V0LnZhbHVlIH0pLCBzdHlsZTogc2VsZWN0U3R5bGUgfSwgUVVFU1RJT05fVFlQRVMubWFwKHF0ID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsga2V5OiBxdC52YWx1ZSwgdmFsdWU6IHF0LnZhbHVlIH0sIHF0LmxhYmVsKSkpKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6ICgpID0+IHJlbW92ZVF1ZXN0aW9uKHFpKSwgc3R5bGU6IGJ0bkRhbmdlciB9LCBcIlxcdTI3MTVcIikpLFxuICAgICAgICAgICAgICAgIHEucXVlc3Rpb25fdHlwZSAhPT0gJ3RleHQnICYmIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLFxuICAgICAgICAgICAgICAgICAgICBxLmFuc3dlcnMubWFwKChhLCBhaSkgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQW5zd2VyUm93LCB7IGtleTogYWksIGFuc3dlcjogYSwgb25DaGFuZ2U6IGFucyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IFsuLi5xLmFuc3dlcnNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRbYWldID0gYW5zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXN0aW9uKHFpLCB7IC4uLnEsIGFuc3dlcnM6IG5leHQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBvblJlbW92ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVF1ZXN0aW9uKHFpLCB7IC4uLnEsIGFuc3dlcnM6IHEuYW5zd2Vycy5maWx0ZXIoKF8sIGlkeCkgPT4gaWR4ICE9PSBhaSkgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IH0pKSksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgeyB0eXBlOiBcImJ1dHRvblwiLCBvbkNsaWNrOiAoKSA9PiB1cGRhdGVRdWVzdGlvbihxaSwgeyAuLi5xLCBhbnN3ZXJzOiBbLi4ucS5hbnN3ZXJzLCB7IGFuc3dlcl90ZXh0OiAnJywgaXNfY29ycmVjdDogZmFsc2UgfV0gfSksIHN0eWxlOiBidG5BZGQgfSwgXCIrIFxcdTA0MTJcXHUwNDMwXFx1MDQ0MFxcdTA0MzhcXHUwNDMwXFx1MDQzRFxcdTA0NDIgXFx1MDQzRVxcdTA0NDJcXHUwNDMyXFx1MDQzNVxcdTA0NDJcXHUwNDMwXCIpKSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJidXR0b25cIiwgb25DbGljazogYWRkUXVlc3Rpb24sIHN0eWxlOiBhZGRRdWVzdGlvbkJ0blN0eWxlIH0sIFwiKyBcXHUwNDE0XFx1MDQzRVxcdTA0MzFcXHUwNDMwXFx1MDQzMlxcdTA0MzhcXHUwNDQyXFx1MDQ0QyBcXHUwNDMyXFx1MDQzRVxcdTA0M0ZcXHUwNDQwXFx1MDQzRVxcdTA0NDFcIiksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgbWFyZ2luVG9wOiAyNCB9IH0sXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiBzdWJtaXR0aW5nLCBzdHlsZTogc3VibWl0QnRuU3R5bGUgfSwgc3VibWl0dGluZyA/ICfQodC+0LfQtNCw0L3QuNC14oCmJyA6ICfQodC+0LfQtNCw0YLRjCDRgtC10YHRgicpKSkpKTtcbn1cbmNvbnN0IGxhYmVsU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBmb250U2l6ZTogMTIsXG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGNvbG9yOiBDLmZhaW50LFxuICAgIG1hcmdpbkJvdHRvbTogNCxcbn07XG5jb25zdCBmdWxsSW5wdXRTdHlsZSA9IHtcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6ICc5cHggMTJweCcsXG4gICAgYmFja2dyb3VuZDogQy5iZ0lucHV0LFxuICAgIGNvbG9yOiBDLndoaXRlLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG59O1xuY29uc3QgYWRkUXVlc3Rpb25CdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnOHB4IDE2cHgnLFxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXG4gICAgY29sb3I6IEMuY3lhbixcbiAgICBib3JkZXI6IGAxcHggZGFzaGVkICR7Qy5jeWFufWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxMyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG5jb25zdCBzdWJtaXRCdG5TdHlsZSA9IHtcbiAgICBwYWRkaW5nOiAnMTJweCAzMnB4JyxcbiAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDEzNWRlZywgJHtDLmdyZWVufSwgJHtDLmdyZWVuRGFya30pYCxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIGJvcmRlclJhZGl1czogOCxcbiAgICBmb250U2l6ZTogMTUsXG4gICAgZm9udFdlaWdodDogNjAwLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdJbnB1dDogJyMwZjE3MmEnLFxuICAgIGJvcmRlcjogJyMzMzQxNTUnLFxuICAgIGdyZWVuOiAnIzEwYjk4MScsXG4gICAgZ3JlZW5EYXJrOiAnIzA1OTY2OScsXG4gICAgZmFpbnQ6ICcjOTRhM2I4JyxcbiAgICBnaG9zdDogJyM2NDc0OGInLFxuICAgIHdoaXRlOiAnI2ZmZmZmZicsXG59O1xuY29uc3QgUk9MRVMgPSBbXG4gICAgeyB2YWx1ZTogJ1NUVURFTlQnLCBsYWJlbDogJ9Ch0YLRg9C00LXQvdGCJyB9LFxuICAgIHsgdmFsdWU6ICdVU0VSJywgbGFiZWw6ICfQn9C+0LvRjNC30L7QstCw0YLQtdC70YwnIH0sXG4gICAgeyB2YWx1ZTogJ0FETUlOJywgbGFiZWw6ICfQkNC00LzQuNC90LjRgdGC0YDQsNGC0L7RgCcgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQ3JlYXRlKHByb3BzKSB7XG4gICAgY29uc3QgW3N1Ym1pdHRpbmcsIHNldFN1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGFwaVVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvcmVzb3VyY2VzXFwvLywgJy9hcGkvcmVzb3VyY2VzLycpO1xuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc2V0U3VibWl0dGluZyh0cnVlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZkLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHBhcmFtcy5hcHBlbmQoa2V5LCB2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBwYXJhbXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgaWYgKGRhdGEucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRhdGEucmVkaXJlY3RVcmw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydChkYXRhLm5vdGljZT8ubWVzc2FnZSB8fCAn0J7RiNC40LHQutCwINC/0YDQuCDRgdC+0LfQtNCw0L3QuNC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGFsZXJ0KGDQntGI0LjQsdC60LA6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICBzZXRTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgcGFkZGluZzogMjQsIG1pbkhlaWdodDogJzEwMHZoJywgYmFja2dyb3VuZENvbG9yOiBDLmJnUGFnZSwgY29sb3I6IEMud2hpdGUsIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsIHNhbnMtc2VyaWZcIiB9IH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIsIHsgbWV0aG9kOiBcIlBPU1RcIiwgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdCwgc3R5bGU6IHsgbWF4V2lkdGg6IDUwMCwgbWFyZ2luOiAnMCBhdXRvJyB9IH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaDFcIiwgeyBzdHlsZTogeyBtYXJnaW46ICcwIDAgNHB4JywgZm9udFNpemU6IDIyLCBmb250V2VpZ2h0OiA3MDAgfSB9LCBcIlxcdTA0MjFcXHUwNDNFXFx1MDQzN1xcdTA0MzRcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1IFxcdTA0M0ZcXHUwNDNFXFx1MDQzQlxcdTA0NENcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQ0RlwiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgc3R5bGU6IHsgbWFyZ2luOiAnMCAwIDI0cHgnLCBmb250U2l6ZTogMTMsIGNvbG9yOiBDLmdob3N0IH0gfSwgXCJFbWFpbCwgXFx1MDQzRlxcdTA0MzBcXHUwNDQwXFx1MDQzRVxcdTA0M0JcXHUwNDRDIFxcdTA0MzggXFx1MDQ0MFxcdTA0M0VcXHUwNDNCXFx1MDQ0QyBcXHUyMDE0IFxcdTA0MzJcXHUwNDQxXFx1MDQ1MSBcXHUwNDQxXFx1MDQ0MFxcdTA0MzBcXHUwNDM3XFx1MDQ0M1wiKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDE2IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIkVtYWlsICpcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJlbWFpbFwiLCBuYW1lOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcInVzZXJAZXhhbXBsZS5jb21cIiwgc3R5bGU6IGlucHV0U3R5bGUsIHJlcXVpcmVkOiB0cnVlIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDE2IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MUZcXHUwNDMwXFx1MDQ0MFxcdTA0M0VcXHUwNDNCXFx1MDQ0QyAqXCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwicGFzc3dvcmRcIiwgbmFtZTogXCJwYXNzd29yZFwiLCBwbGFjZWhvbGRlcjogXCJcXHUwNDFDXFx1MDQzOFxcdTA0M0RcXHUwNDM4XFx1MDQzQ1xcdTA0NDNcXHUwNDNDIDggXFx1MDQ0MVxcdTA0MzhcXHUwNDNDXFx1MDQzMlxcdTA0M0VcXHUwNDNCXFx1MDQzRVxcdTA0MzJcIiwgc3R5bGU6IGlucHV0U3R5bGUsIHJlcXVpcmVkOiB0cnVlIH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogeyBtYXJnaW5Cb3R0b206IDE2IH0gfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBzdHlsZTogbGFiZWxTdHlsZSB9LCBcIlxcdTA0MThcXHUwNDNDXFx1MDQ0RiBcXHUwNDNGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0NEZcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwidXNlcm5hbWVcIiwgcGxhY2Vob2xkZXI6IFwidXNlcm5hbWVcIiwgc3R5bGU6IGlucHV0U3R5bGUgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMTYgfSB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IHN0eWxlOiBsYWJlbFN0eWxlIH0sIFwiXFx1MDQyMFxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgbmFtZTogXCJyb2xlXCIsIHN0eWxlOiBpbnB1dFN0eWxlIH0sIFJPTEVTLm1hcChyID0+IChSZWFjdC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIsIHsga2V5OiByLnZhbHVlLCB2YWx1ZTogci52YWx1ZSB9LCByLmxhYmVsKSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6IHN1Ym1pdHRpbmcsIHN0eWxlOiBzdWJtaXRCdG5TdHlsZSB9LCBzdWJtaXR0aW5nID8gJ9Ch0L7Qt9C00LDQvdC40LXigKYnIDogJ9Ch0L7Qt9C00LDRgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjycpKSkpO1xufVxuY29uc3QgbGFiZWxTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgY29sb3I6IEMuZmFpbnQsXG4gICAgbWFyZ2luQm90dG9tOiA0LFxufTtcbmNvbnN0IGlucHV0U3R5bGUgPSB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiAnOXB4IDEycHgnLFxuICAgIGJhY2tncm91bmQ6IEMuYmdJbnB1dCxcbiAgICBjb2xvcjogJyNmZmYnLFxuICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgYm9yZGVyUmFkaXVzOiA2LFxuICAgIGZvbnRTaXplOiAxNCxcbiAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG59O1xuY29uc3Qgc3VibWl0QnRuU3R5bGUgPSB7XG4gICAgcGFkZGluZzogJzEycHggMzJweCcsXG4gICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICR7Qy5ncmVlbn0sICR7Qy5ncmVlbkRhcmt9KWAsXG4gICAgY29sb3I6ICcjZmZmJyxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgZm9udFNpemU6IDE1LFxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEMgPSB7XG4gICAgYmdQYWdlOiAnIzAyMDYxNycsXG4gICAgYmdTaWRlYmFyOiAnIzBmMTcyYScsXG4gICAgYmdDYXJkOiAnIzFlMjkzYicsXG4gICAgYmdDYXJkSG92ZXI6ICcjMjQzMjQ3JyxcbiAgICBib3JkZXI6ICcjMzM0MTU1JyxcbiAgICBncmVlbjogJyMxMGI5ODEnLFxuICAgIGdyZWVuTGlnaHQ6ICcjMzRkMzk5JyxcbiAgICBncmVlbkRhcms6ICcjMDU5NjY5JyxcbiAgICBjeWFuOiAnIzA2YjZkNCcsXG4gICAgYmx1ZTogJyMzYjgyZjYnLFxuICAgIGVycm9yOiAnI2VmNDQ0NCcsXG4gICAgdGV4dFByaW1hcnk6ICcjZmZmZmZmJyxcbiAgICB0ZXh0TXV0ZWQ6ICcjY2JkNWUxJyxcbiAgICB0ZXh0RmFpbnQ6ICcjOTRhM2I4JyxcbiAgICB0ZXh0R2hvc3Q6ICcjNjQ3NDhiJyxcbn07XG5jb25zdCBzdHlsZXMgPSB7XG4gICAgcGFnZToge1xuICAgICAgICBwYWRkaW5nOiAyNCxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdQYWdlLFxuICAgICAgICBjb2xvcjogQy50ZXh0UHJpbWFyeSxcbiAgICAgICAgZm9udEZhbWlseTogXCInUm9ib3RvJywgc2Fucy1zZXJpZlwiLFxuICAgIH0sXG4gICAgaGVhZGVyOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgICAgICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxuICAgICAgICBtYXJnaW5Cb3R0b206IDI4LFxuICAgICAgICBwYWRkaW5nQm90dG9tOiAyMCxcbiAgICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICB9LFxuICAgIHRpdGxlOiB7XG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgZm9udFNpemU6IDI0LFxuICAgICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICAgIGNvbG9yOiBDLnRleHRQcmltYXJ5LFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuM3B4JyxcbiAgICB9LFxuICAgIHN1YnRpdGxlOiB7XG4gICAgICAgIG1hcmdpblRvcDogNCxcbiAgICAgICAgZm9udFNpemU6IDEzLFxuICAgICAgICBjb2xvcjogQy50ZXh0R2hvc3QsXG4gICAgfSxcbiAgICB0aW1lc3RhbXA6IHtcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBjb2xvcjogQy50ZXh0R2hvc3QsXG4gICAgICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgbWFyZ2luVG9wOiA0LFxuICAgIH0sXG4gICAgbWV0cmljc0dyaWQ6IHtcbiAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAncmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDIwMHB4LCAxZnIpKScsXG4gICAgICAgIGdhcDogMTYsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogMjQsXG4gICAgfSxcbiAgICBtZXRyaWNDYXJkOiAoYWNjZW50Q29sb3IpID0+ICh7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogQy5iZ0NhcmQsXG4gICAgICAgIGJvcmRlcjogYDFweCBzb2xpZCAke0MuYm9yZGVyfWAsXG4gICAgICAgIGJvcmRlclRvcDogYDNweCBzb2xpZCAke2FjY2VudENvbG9yfWAsXG4gICAgICAgIGJvcmRlclJhZGl1czogMTAsXG4gICAgICAgIHBhZGRpbmc6ICcxOHB4IDIwcHgnLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZScsXG4gICAgfSksXG4gICAgbWV0cmljTGFiZWw6IHtcbiAgICAgICAgZm9udFNpemU6IDExLFxuICAgICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wOGVtJyxcbiAgICAgICAgY29sb3I6IEMudGV4dEdob3N0LFxuICAgICAgICBtYXJnaW5Cb3R0b206IDgsXG4gICAgfSxcbiAgICBtZXRyaWNWYWx1ZToge1xuICAgICAgICBmb250U2l6ZTogMzIsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICAgICAgY29sb3I6IEMudGV4dFByaW1hcnksXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogOCxcbiAgICB9LFxuICAgIG1ldHJpY0xpbms6IHtcbiAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICBjb2xvcjogQy5ncmVlbkxpZ2h0LFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgIH0sXG4gICAgbWV0cmljU3ViOiB7XG4gICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgY29sb3I6IEMudGV4dEdob3N0LFxuICAgIH0sXG4gICAgd2lkZ2V0c1Jvdzoge1xuICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICdyZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpJyxcbiAgICAgICAgZ2FwOiAxNixcbiAgICB9LFxuICAgIHdpZGdldDoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IEMuYmdDYXJkLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtDLmJvcmRlcn1gLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICBwYWRkaW5nOiAnMjBweCAyMnB4JyxcbiAgICB9LFxuICAgIHdpZGdldFRpdGxlOiB7XG4gICAgICAgIG1hcmdpbjogJzAgMCAxNHB4IDAnLFxuICAgICAgICBmb250U2l6ZTogMTUsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICAgICAgY29sb3I6IEMudGV4dE11dGVkLFxuICAgIH0sXG4gICAgYnRuR3JlZW46IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBhZGRpbmc6ICc4cHggMTRweCcsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuZ3JlZW59LCAke0MuZ3JlZW5EYXJrfSlgLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDcsXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXG4gICAgICAgIGZvbnRTaXplOiAxMyxcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxuICAgICAgICBsZXR0ZXJTcGFjaW5nOiAnMC4wMWVtJyxcbiAgICB9LFxuICAgIGJ0bkJsdWU6IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBhZGRpbmc6ICc4cHggMTRweCcsXG4gICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAke0MuYmx1ZX0sICMyNTYzZWIpYCxcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA3LFxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgICBmb250U2l6ZTogMTMsXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICAgICAgbGV0dGVyU3BhY2luZzogJzAuMDFlbScsXG4gICAgfSxcbiAgICBub3RlQm94OiB7XG4gICAgICAgIG1hcmdpblRvcDogMTIsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4IDE0cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDE2LDE4NSwxMjksMC4wOCknLFxuICAgICAgICBib3JkZXI6IGAxcHggc29saWQgcmdiYSgxNiwxODUsMTI5LDAuMjUpYCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA3LFxuICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgIGNvbG9yOiBDLnRleHRGYWludCxcbiAgICB9LFxuICAgIGVycm9yQm94OiB7XG4gICAgICAgIHBhZGRpbmc6ICcxNHB4IDE4cHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDIzOSw2OCw2OCwwLjEpJyxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkIHJnYmEoMjM5LDY4LDY4LDAuMylgLFxuICAgICAgICBib3JkZXJSYWRpdXM6IDEwLFxuICAgICAgICBmb250U2l6ZTogMTQsXG4gICAgICAgIGNvbG9yOiBDLmVycm9yLFxuICAgIH0sXG4gICAgbG9hZGluZ0JveDoge1xuICAgICAgICBwYWRkaW5nOiAnMTRweCAxOHB4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBDLmJnQ2FyZCxcbiAgICAgICAgYm9yZGVyOiBgMXB4IHNvbGlkICR7Qy5ib3JkZXJ9YCxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAxMCxcbiAgICAgICAgZm9udFNpemU6IDE0LFxuICAgICAgICBjb2xvcjogQy50ZXh0RmFpbnQsXG4gICAgfSxcbiAgICBtZXRyaWNHbG93OiAoYWNjZW50Q29sb3IpID0+ICh7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogNjAsXG4gICAgICAgIGhlaWdodDogNjAsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzAgMTBweCAwIDYwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjY2VudENvbG9yLFxuICAgICAgICBvcGFjaXR5OiAwLjA4LFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgfSksXG59O1xuZnVuY3Rpb24gYnVpbGREYXNoYm9hcmRVcmwoKSB7XG4gICAgY29uc3QgYmFzZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgIHJldHVybiBgJHtiYXNlfS9hcGkvZGFzaGJvYXJkYDtcbn1cbmZ1bmN0aW9uIE1ldHJpY0NhcmQoeyBsYWJlbCwgdmFsdWUsIHN1YiwgYWNjZW50LCB9KSB7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5tZXRyaWNDYXJkKGFjY2VudCkgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubWV0cmljR2xvdyhhY2NlbnQpIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5tZXRyaWNMYWJlbCB9LCBsYWJlbCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLm1ldHJpY1ZhbHVlIH0sIHZhbHVlKSxcbiAgICAgICAgc3ViICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLm1ldHJpY1N1YiB9LCBzdWIpKSk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gICAgY29uc3QgW2ZldGNoRXJyb3IsIHNldEZldGNoRXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gYnVpbGREYXNoYm9hcmRVcmwoKTtcbiAgICAgICAgbGV0IG1vdW50ZWQgPSB0cnVlO1xuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgICAgICAgc2V0RmV0Y2hFcnJvcihudWxsKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCB7IGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nIH0pO1xuICAgICAgICAgICAgICAgIGlmICghcmVzLm9rKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5ldHdvcmsgZXJyb3I6ICR7cmVzLnN0YXR1c30gJHtyZXMuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1vdW50ZWQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBzZXREYXRhKGpzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGlmICghbW91bnRlZClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHNldEZldGNoRXJyb3IoU3RyaW5nKGVyci5tZXNzYWdlID8/IGVycikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgaWYgKG1vdW50ZWQpXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZldGNoRGF0YSgpO1xuICAgICAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGZldGNoRGF0YSwgMzBfMDAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIG1vdW50ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICB9O1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBhZG1pbkJhc2UgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICBjb25zdCBsaW5rVG8gPSAocmVzb3VyY2VJZCkgPT4gYCR7YWRtaW5CYXNlfS9yZXNvdXJjZXMvJHtyZXNvdXJjZUlkfWA7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5wYWdlIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLmhlYWRlciB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IHN0eWxlOiBzdHlsZXMudGl0bGUgfSwgXCJBZG1pbiBEYXNoYm9hcmRcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMuc3VidGl0bGUgfSwgXCJcXHUwNDFFXFx1MDQzMVxcdTA0MzdcXHUwNDNFXFx1MDQ0MCBcXHUwNDNBXFx1MDQzQlxcdTA0NEVcXHUwNDQ3XFx1MDQzNVxcdTA0MzJcXHUwNDRCXFx1MDQ0NSBcXHUwNDNDXFx1MDQzNVxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0M0EgXFx1MDQzRlxcdTA0M0JcXHUwNDMwXFx1MDQ0MlxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDRCXCIpKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLnRpbWVzdGFtcCB9LCBkYXRhPy50aW1lc3RhbXAgPyBg0J7QsdC90L7QstC70LXQvdC+OiAke25ldyBEYXRlKGRhdGEudGltZXN0YW1wKS50b0xvY2FsZVN0cmluZygncnUtUlUnKX1gIDogJ1xcdTAwYTAnKSksXG4gICAgICAgIGxvYWRpbmcgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMubG9hZGluZ0JveCB9LCBcIlxcdTA0MTdcXHUwNDMwXFx1MDQzM1xcdTA0NDBcXHUwNDQzXFx1MDQzN1xcdTA0M0FcXHUwNDMwIFxcdTA0M0NcXHUwNDM1XFx1MDQ0MlxcdTA0NDBcXHUwNDM4XFx1MDQzQVxcdTIwMjZcIikpIDogZmV0Y2hFcnJvciA/IChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5lcnJvckJveCB9LFxuICAgICAgICAgICAgXCJcXHUwNDFFXFx1MDQ0OFxcdTA0MzhcXHUwNDMxXFx1MDQzQVxcdTA0MzAgXFx1MDQzN1xcdTA0MzBcXHUwNDMzXFx1MDQ0MFxcdTA0NDNcXHUwNDM3XFx1MDQzQVxcdTA0MzggXFx1MDQzNFxcdTA0MzBcXHUwNDQ4XFx1MDQzMVxcdTA0M0VcXHUwNDQwXFx1MDQzNFxcdTA0MzA6IFwiLFxuICAgICAgICAgICAgZmV0Y2hFcnJvcikpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy5tZXRyaWNzR3JpZCB9LFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWV0cmljQ2FyZCwgeyBsYWJlbDogXCJcXHUwNDFGXFx1MDQzRVxcdTA0NDFcXHUwNDM1XFx1MDQ0OVxcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0NEZcIiwgdmFsdWU6IGRhdGE/LnZpc2l0cyA/PyAn4oCUJywgc3ViOiBcIlxcdTA0MjJcXHUwNDMwXFx1MDQzMVxcdTA0M0JcXHUwNDM4XFx1MDQ0NlxcdTA0MzAgc2l0ZV92aXNpdHNcIiwgYWNjZW50OiBDLmN5YW4gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXRyaWNDYXJkLCB7IGxhYmVsOiBcIlxcdTA0MUZcXHUwNDNFXFx1MDQzQlxcdTA0NENcXHUwNDM3XFx1MDQzRVxcdTA0MzJcXHUwNDMwXFx1MDQ0MlxcdTA0MzVcXHUwNDNCXFx1MDQzOFwiLCB2YWx1ZTogZGF0YT8udXNlcnMgPz8gJ+KAlCcsIHN1YjogUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBsaW5rVG8oJ3VzZXJzJyksIHN0eWxlOiBzdHlsZXMubWV0cmljTGluayB9LCBcIlxcdTA0MUVcXHUwNDQyXFx1MDQzQVxcdTA0NDBcXHUwNDRCXFx1MDQ0MlxcdTA0NEMgXFx1MDQzRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDM1XFx1MDQzOSBcXHUyMTkyXCIpLCBhY2NlbnQ6IEMuYmx1ZSB9KSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1ldHJpY0NhcmQsIHsgbGFiZWw6IFwiXFx1MDQxQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0NEJcIiwgdmFsdWU6IGRhdGE/LmNvdXJzZXMgPz8gJ+KAlCcsIHN1YjogUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgeyBocmVmOiBsaW5rVG8oJ2NvdXJzZXMnKSwgc3R5bGU6IHN0eWxlcy5tZXRyaWNMaW5rIH0sIFwiXFx1MDQxRVxcdTA0NDJcXHUwNDNBXFx1MDQ0MFxcdTA0NEJcXHUwNDQyXFx1MDQ0QyBcXHUwNDNBXFx1MDQ0M1xcdTA0NDBcXHUwNDQxXFx1MDQ0QiBcXHUyMTkyXCIpLCBhY2NlbnQ6IEMuZ3JlZW4gfSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChNZXRyaWNDYXJkLCB7IGxhYmVsOiBcIlxcdTA0MTdcXHUwNDMwXFx1MDQzRlxcdTA0MzhcXHUwNDQxXFx1MDQzOFwiLCB2YWx1ZTogZGF0YT8uZW5yb2xsbWVudHMgPz8gJ+KAlCcsIHN1YjogXCJcXHUwNDEyXFx1MDQ0MVxcdTA0MzVcXHUwNDMzXFx1MDQzRSBcXHUwNDM3XFx1MDQzMFxcdTA0M0ZcXHUwNDM4XFx1MDQ0MVxcdTA0MzVcXHUwNDM5IFxcdTA0M0RcXHUwNDMwIFxcdTA0M0FcXHUwNDQzXFx1MDQ0MFxcdTA0NDFcXHUwNDRCXCIsIGFjY2VudDogQy5ncmVlbkxpZ2h0IH0pKSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLndpZGdldHNSb3cgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHN0eWxlcy53aWRnZXQgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgzXCIsIHsgc3R5bGU6IHN0eWxlcy53aWRnZXRUaXRsZSB9LCBcIlxcdTA0MjFcXHUwNDMyXFx1MDQzRVxcdTA0MzRcXHUwNDNBXFx1MDQzMCBcXHUwNDNGXFx1MDQzRSBcXHUwNDQxXFx1MDQzMFxcdTA0MzlcXHUwNDQyXFx1MDQ0M1wiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwgeyBzdHlsZTogeyBtYXJnaW46ICcwIDAgOHB4JywgZm9udFNpemU6IDE0LCBjb2xvcjogQy50ZXh0RmFpbnQsIGxpbmVIZWlnaHQ6IDEuNiB9IH0sIFwiXFx1MDQxRlxcdTA0MzBcXHUwNDNEXFx1MDQzNVxcdTA0M0JcXHUwNDRDIFxcdTA0NDNcXHUwNDNGXFx1MDQ0MFxcdTA0MzBcXHUwNDMyXFx1MDQzQlxcdTA0MzVcXHUwNDNEXFx1MDQzOFxcdTA0NEYgXFx1MDQzRlxcdTA0M0JcXHUwNDMwXFx1MDQ0MlxcdTA0NDRcXHUwNDNFXFx1MDQ0MFxcdTA0M0NcXHUwNDNFXFx1MDQzOSBOZXRjb3Vyc2UuIFxcdTA0MTRcXHUwNDNFXFx1MDQ0MVxcdTA0NDJcXHUwNDQzXFx1MDQzRiBcXHUwNDNFXFx1MDQzM1xcdTA0NDBcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDQ3XFx1MDQzNVxcdTA0M0QgXFx1MDQzNFxcdTA0M0JcXHUwNDRGIFxcdTA0MzBcXHUwNDMyXFx1MDQ0MlxcdTA0M0VcXHUwNDQwXFx1MDQzOFxcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDNEXFx1MDQzRFxcdTA0NEJcXHUwNDQ1IFxcdTA0MzBcXHUwNDM0XFx1MDQzQ1xcdTA0MzhcXHUwNDNEXFx1MDQzOFxcdTA0NDFcXHUwNDQyXFx1MDQ0MFxcdTA0MzBcXHUwNDQyXFx1MDQzRVxcdTA0NDBcXHUwNDNFXFx1MDQzMi5cIiksXG4gICAgICAgICAgICAgICAgICAgIGRhdGE/Lm5vdGUgJiYgKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGVzLm5vdGVCb3ggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIiwgeyBzdHlsZTogeyBjb2xvcjogQy5ncmVlbkxpZ2h0IH0gfSwgXCJcXHUwNDFGXFx1MDQ0MFxcdTA0MzhcXHUwNDNDXFx1MDQzNVxcdTA0NDdcXHUwNDMwXFx1MDQzRFxcdTA0MzhcXHUwNDM1OlxcdTAwQTBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm5vdGUpKSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlOiBzdHlsZXMud2lkZ2V0IH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7IHN0eWxlOiBzdHlsZXMud2lkZ2V0VGl0bGUgfSwgXCJcXHUwNDExXFx1MDQ0QlxcdTA0NDFcXHUwNDQyXFx1MDQ0MFxcdTA0NEJcXHUwNDM1IFxcdTA0MzRcXHUwNDM1XFx1MDQzOVxcdTA0NDFcXHUwNDQyXFx1MDQzMlxcdTA0MzhcXHUwNDRGXCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGU6IHsgZGlzcGxheTogJ2ZsZXgnLCBnYXA6IDEwLCBmbGV4V3JhcDogJ3dyYXAnIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHsgaHJlZjogbGlua1RvKCd1c2VycycpLCBzdHlsZTogc3R5bGVzLmJ0bkJsdWUgfSwgXCJcXHUwNDFGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0MzhcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7IGhyZWY6IGxpbmtUbygnY291cnNlcycpLCBzdHlsZTogc3R5bGVzLmJ0bkdyZWVuIH0sIFwiXFx1MDQxQVxcdTA0NDNcXHUwNDQwXFx1MDQ0MVxcdTA0NEJcIikpKSkpKSkpO1xufVxuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL2xvZ2luJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Mb2dpbiA9IExvZ2luXG5pbXBvcnQgQ291cnNlUXVpY2tDcmVhdGUgZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL2NvdXJzZS1jcmVhdGUnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLkNvdXJzZVF1aWNrQ3JlYXRlID0gQ291cnNlUXVpY2tDcmVhdGVcbmltcG9ydCBDb3Vyc2VEZXRhaWxlZEVkaXQgZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL2NvdXJzZS1lZGl0J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Db3Vyc2VEZXRhaWxlZEVkaXQgPSBDb3Vyc2VEZXRhaWxlZEVkaXRcbmltcG9ydCBRdWl6UXVpY2tDcmVhdGUgZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL3F1aXotY3JlYXRlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5RdWl6UXVpY2tDcmVhdGUgPSBRdWl6UXVpY2tDcmVhdGVcbmltcG9ydCBVc2VyUXVpY2tDcmVhdGUgZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL3VzZXItY3JlYXRlJ1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5Vc2VyUXVpY2tDcmVhdGUgPSBVc2VyUXVpY2tDcmVhdGVcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSAnLi4vZGlzdC9hZG1pbi9jb21wb25lbnRzL2Rhc2hib2FyZCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuRGFzaGJvYXJkID0gRGFzaGJvYXJkIl0sIm5hbWVzIjpbIkMiLCJiZ1BhZ2UiLCJiZ0RhcmsiLCJiZ0NhcmQiLCJiZ0lucHV0IiwiYm9yZGVyIiwiZ3JlZW4iLCJncmVlbkRhcmsiLCJjeWFuIiwiYmx1ZSIsImVycm9yIiwid2hpdGUiLCJtdXRlZCIsImZhaW50IiwiZ2hvc3QiLCJMb2dpbiIsImFjdGlvbiIsImVycm9yTWVzc2FnZSIsIndpbmRvdyIsIl9fQVBQX1NUQVRFX18iLCJicmFuZGluZyIsIlJFRFVYX1NUQVRFIiwiaG92ZXIiLCJzZXRIb3ZlciIsInVzZVN0YXRlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJzIiwicGFnZSIsImNhcmQiLCJsZWZ0IiwiYnJhbmQiLCJicmFuZERvdCIsImJyYW5kTmFtZSIsImNvbXBhbnlOYW1lIiwid2VsY29tZSIsIndlbGNvbWVTdWIiLCJkZWNvclJvdyIsImRlY29yQ2hpcCIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJkb3RzIiwidmlld0JveCIsInhtbG5zIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsInJvdyIsImNvbCIsImtleSIsImN4IiwiY3kiLCJyIiwiZmlsbCIsIm1ldGhvZCIsInJpZ2h0IiwiZm9ybVRpdGxlIiwiZm9ybVN1YiIsImVycm9yQm94IiwiZXJyb3JEb3QiLCJmaWVsZCIsImh0bWxGb3IiLCJsYWJlbCIsImlkIiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImF1dG9Db21wbGV0ZSIsInJlcXVpcmVkIiwiaW5wdXQiLCJvbkZvY3VzIiwiZSIsInRhcmdldCIsImJveFNoYWRvdyIsIm9uQmx1ciIsImJ0biIsIm9uTW91c2VFbnRlciIsImJhY2tncm91bmQiLCJvbk1vdXNlTGVhdmUiLCJoaW50IiwibWluSGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiZm9udEZhbWlseSIsInBhZGRpbmciLCJib3hTaXppbmciLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwiZmxleCIsImJvcmRlclJpZ2h0IiwiZmxleERpcmVjdGlvbiIsInBvc2l0aW9uIiwiZ2FwIiwibWFyZ2luQm90dG9tIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0IiwiZmxleFdyYXAiLCJvcGFjaXR5IiwiYm90dG9tIiwicG9pbnRlckV2ZW50cyIsIm91dGxpbmUiLCJ0cmFuc2l0aW9uIiwiV2Via2l0VGV4dEZpbGxDb2xvciIsImN1cnNvciIsIm1hcmdpblRvcCIsInRleHRBbGlnbiIsIkNPTlRFTlRfVFlQRVMiLCJ2YWx1ZSIsIlFVRVNUSU9OX1RZUEVTIiwiQ0FURUdPUklFUyIsImlucHV0U3R5bGUiLCJzZWxlY3RTdHlsZSIsImJ0bkRhbmdlciIsImJ0bkFkZCIsIkFuc3dlclJvdyIsImFuc3dlciIsIm9uQ2hhbmdlIiwib25SZW1vdmUiLCJhbnN3ZXJfdGV4dCIsIndoaXRlU3BhY2UiLCJjaGVja2VkIiwiaXNfY29ycmVjdCIsImFjY2VudENvbG9yIiwib25DbGljayIsIlF1ZXN0aW9uQmxvY2siLCJxdWVzdGlvbiIsImFkZEFuc3dlciIsImFuc3dlcnMiLCJ1cGRhdGVBbnN3ZXIiLCJpIiwiYSIsIm5leHQiLCJyZW1vdmVBbnN3ZXIiLCJmaWx0ZXIiLCJpZHgiLCJxdWVzdGlvbl90ZXh0IiwicXVlc3Rpb25fdHlwZSIsIm1hcCIsInF0IiwiRnJhZ21lbnQiLCJhbnMiLCJhaSIsIkxlc3NvblJvdyIsImxlc3NvbiIsImFkZFF1ZXN0aW9uIiwicXVlc3Rpb25zIiwidXBkYXRlUXVlc3Rpb24iLCJxIiwicmVtb3ZlUXVlc3Rpb24iLCJpc1F1aXoiLCJjb250ZW50X3R5cGUiLCJpc1ZpZGVvIiwiaXNUZXh0IiwidGl0bGUiLCJjdCIsInZpZGVvX3VybCIsInRleHRfY29udGVudCIsInJvd3MiLCJyZXNpemUiLCJxdWl6X3RpdGxlIiwicWkiLCJTZWN0aW9uQmxvY2siLCJzZWN0aW9uIiwiaW5kZXgiLCJhZGRMZXNzb24iLCJsZXNzb25zIiwidXBkYXRlTGVzc29uIiwibGkiLCJyZW1vdmVMZXNzb24iLCJsIiwiQ291cnNlQ3JlYXRlIiwicHJvcHMiLCJzZXRUaXRsZSIsImRlc2NyaXB0aW9uIiwic2V0RGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwicmVxdWlyZVF1aXoiLCJzZXRSZXF1aXJlUXVpeiIsIm1pblNjb3JlIiwic2V0TWluU2NvcmUiLCJzZWN0aW9ucyIsInNldFNlY3Rpb25zIiwic3VibWl0dGluZyIsInNldFN1Ym1pdHRpbmciLCJhZGRTZWN0aW9uIiwidXBkYXRlU2VjdGlvbiIsInJlbW92ZVNlY3Rpb24iLCJ0b3RhbExlc3NvbnMiLCJyZWR1Y2UiLCJzZWMiLCJhcGlVcmwiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwicmVwbGFjZSIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImZkIiwiRm9ybURhdGEiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ2YWwiLCJlbnRyaWVzIiwiYXBwZW5kIiwicmVzIiwiZmV0Y2giLCJoZWFkZXJzIiwiYm9keSIsImRhdGEiLCJqc29uIiwicmVkaXJlY3RVcmwiLCJocmVmIiwiYWxlcnQiLCJub3RpY2UiLCJtZXNzYWdlIiwiZXJyIiwib25TdWJtaXQiLCJtYXJnaW4iLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZENvbHVtbiIsImxhYmVsU3R5bGUiLCJmdWxsSW5wdXRTdHlsZSIsImMiLCJOdW1iZXIiLCJtaW4iLCJtYXgiLCJtYXJnaW5MZWZ0IiwiSlNPTiIsInN0cmluZ2lmeSIsImFkZFNlY3Rpb25CdG5TdHlsZSIsImRpc2FibGVkIiwic3VibWl0QnRuU3R5bGUiLCJDb3Vyc2VFZGl0IiwicmVjb3JkIiwiY291cnNlSWQiLCJpbml0aWFsU2VjdGlvbnMiLCJjb3Vyc2VfZGF0YV9qc29uIiwicGFyc2UiLCJyZXF1aXJlX3F1aXpfY29tcGxldGlvbiIsIm1pbl9xdWl6X3Njb3JlIiwiUXVpekNyZWF0ZSIsInNldFF1ZXN0aW9ucyIsImFkZFF1ZXN0aW9uQnRuU3R5bGUiLCJST0xFUyIsIlVzZXJDcmVhdGUiLCJiZ1NpZGViYXIiLCJiZ0NhcmRIb3ZlciIsImdyZWVuTGlnaHQiLCJ0ZXh0UHJpbWFyeSIsInRleHRNdXRlZCIsInRleHRGYWludCIsInRleHRHaG9zdCIsInN0eWxlcyIsImhlYWRlciIsInBhZGRpbmdCb3R0b20iLCJib3JkZXJCb3R0b20iLCJzdWJ0aXRsZSIsInRpbWVzdGFtcCIsIm1ldHJpY3NHcmlkIiwibWV0cmljQ2FyZCIsImJvcmRlclRvcCIsIm1ldHJpY0xhYmVsIiwibWV0cmljVmFsdWUiLCJtZXRyaWNMaW5rIiwidGV4dERlY29yYXRpb24iLCJtZXRyaWNTdWIiLCJ3aWRnZXRzUm93Iiwid2lkZ2V0Iiwid2lkZ2V0VGl0bGUiLCJidG5HcmVlbiIsImJ0bkJsdWUiLCJub3RlQm94IiwibG9hZGluZ0JveCIsIm1ldHJpY0dsb3ciLCJ0b3AiLCJidWlsZERhc2hib2FyZFVybCIsImJhc2UiLCJNZXRyaWNDYXJkIiwic3ViIiwiYWNjZW50IiwiRGFzaGJvYXJkIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hFcnJvciIsInNldEZldGNoRXJyb3IiLCJ1c2VFZmZlY3QiLCJ1cmwiLCJtb3VudGVkIiwiZmV0Y2hEYXRhIiwiY3JlZGVudGlhbHMiLCJvayIsIkVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsIlN0cmluZyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiYWRtaW5CYXNlIiwibGlua1RvIiwicmVzb3VyY2VJZCIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsInZpc2l0cyIsInVzZXJzIiwiY291cnNlcyIsImVucm9sbG1lbnRzIiwibm90ZSIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyIsIkNvdXJzZVF1aWNrQ3JlYXRlIiwiQ291cnNlRGV0YWlsZWRFZGl0IiwiUXVpelF1aWNrQ3JlYXRlIiwiVXNlclF1aWNrQ3JlYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0lBQ0EsTUFBTUEsR0FBQyxHQUFHO0lBQ05DLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxNQUFNLEVBQUUsU0FBUztJQUNqQkMsRUFDQUMsT0FBTyxFQUFFLFNBQVM7SUFDbEJDLEVBQUFBLE1BQU0sRUFBRSxTQUFTO0lBQ2pCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFBQUEsU0FBUyxFQUFFLFNBQVM7SUFDcEJDLEVBQUFBLElBQUksRUFBRSxTQUFTO0lBQ2ZDLEVBQUFBLElBQUksRUFBRSxTQUFTO0lBQ2ZDLEVBQUFBLEtBQUssRUFBRSxTQUFTO0lBQ2hCQyxFQUFBQSxLQUFLLEVBQUUsU0FBUztJQUNoQkMsRUFDQUMs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
