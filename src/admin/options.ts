import { AdminJSOptions } from 'adminjs';
import bcrypt from 'bcryptjs';

import componentLoader, { CourseQuickCreate, CourseDetailedEdit, QuizQuickCreate, UserQuickCreate, ForumDetailedEdit } from './component-loader.js';

/**
 * AdminJS options builder
 *
 * - Uses `AUTOLOAD_DB` env var to decide whether to auto-load database resources.
 * - Uses `ADMIN_ROOT_PATH` env var to override the admin root path.
 *
 * NOTE:
 * - This module performs a dynamic import of `../db/index.js` when AUTOLOAD_DB
 *   is enabled. The db module in this repo uses top-level-await during
 *   initialization, so importing it here should provide the ready-to-use `db`.
 */

let databases: unknown[] = [];
let db: any = null;

if (process.env.AUTOLOAD_DB === 'true') {
  try {
    // Import the initialized database/adapter from the db module.
    // @ts-ignore - dynamic import of the db module
    const dbModule = await import('../db/index.js');
    if (dbModule && dbModule.db) {
      db = dbModule.db;
      databases = [db];
    }
  } catch (error) {
    // If importing the DB fails, fall back to empty databases array.
    // We log a warning so it's visible during development.
    // eslint-disable-next-line no-console
    console.warn('AUTOLOAD_DB enabled but failed to import database:', error);
    databases = [];
  }
}

// Register dashboard component with the component loader.
const DashboardComponent = componentLoader.add('Dashboard', './components/dashboard');

const hashPasswordHook = async (request: any) => {
  const pwd = request?.payload?.password;
  if (pwd && pwd.trim() !== '') {
    request.payload.password = await bcrypt.hash(pwd, 10);
  } else if (pwd !== undefined) {
    delete request.payload.password;
  }
  return request;
};

const configuredResources: AdminJSOptions['resources'] = [];

if (db) {
  configuredResources.push({
    resource: db.table('users'),
    options: {
      id: 'users',
      navigation: { name: 'Пользователи', icon: 'User' },
      listProperties: ['id', 'email', 'username', 'role', 'created_at'],
      showProperties: ['id', 'email', 'username', 'avatar_url', 'bio', 'role', 'created_at'],
      editProperties: ['email', 'username', 'password', 'avatar_url', 'bio', 'role'],
      newProperties: ['email', 'username', 'password', 'avatar_url', 'bio', 'role'],
      filterProperties: ['email', 'username', 'role', 'created_at'],
      properties: {
        password: {
          isVisible: { list: false, show: false, edit: true, filter: false },
          type: 'password',
        },
        bio: { type: 'textarea' },
        created_at: { isVisible: { list: true, show: true, edit: false, filter: true } },
        role: {
          availableValues: [
            { value: 'ADMIN', label: 'Администратор' },
            { value: 'USER', label: 'Пользователь' },
            { value: 'STUDENT', label: 'Студент' },
          ],
        },
      },
      actions: {
        new: { before: [hashPasswordHook] },
        edit: { before: [hashPasswordHook] },
        quickCreate: {
          actionType: 'resource',
          component: UserQuickCreate,
          icon: 'Add',
          label: 'Создать пользователя',
          handler: async (request: any, _response: any, context: any) => {
            if (request.method !== 'post') return {};
            try {
              const { Pool } = await import('pg');
              const pool = new Pool({ connectionString: process.env.DATABASE_URL });
              try {
                const { email, password, username, role } = request.payload;
                if (!email || !password) {
                  return { notice: { message: 'Email и пароль обязательны', type: 'error' } };
                }
                const hashed = await bcrypt.hash(password, 10);
                await pool.query(
                  `INSERT INTO users (email, password, username, role) VALUES ($1, $2, $3, $4)`,
                  [email, hashed, username || null, role || 'USER']
                );
                return {
                  redirectUrl: '/resources/users',
                  notice: { message: `Пользователь ${email} создан`, type: 'success' },
                };
              } finally {
                await pool.end();
              }
            } catch (err: any) {
              return { notice: { message: `Ошибка: ${err.message}`, type: 'error' } };
            }
          },
        },
      },
    },
  });

  // ── courses ────────────────────────────────────────────────────────────────
  configuredResources.push({
    resource: db.table('courses'),
    options: {
      id: 'courses',
      navigation: { name: 'Курсы', icon: 'Video' },
      listProperties: ['id', 'title', 'category', 'require_quiz_completion', 'min_quiz_score'],
      showProperties: ['id', 'title', 'description', 'category', 'require_quiz_completion', 'min_quiz_score'],
      editProperties: ['title', 'description', 'category', 'require_quiz_completion', 'min_quiz_score'],
      newProperties: ['title', 'description', 'category', 'require_quiz_completion', 'min_quiz_score'],
      filterProperties: ['title', 'category', 'require_quiz_completion'],
      properties: {
        description: { type: 'textarea' },
      },
      actions: {
        quickCreate: {
          actionType: 'resource',
          component: CourseQuickCreate,
          icon: 'Add',
          label: 'Создать курс целиком',
          handler: async (request: any, _response: any, context: any) => {
            if (request.method !== 'post') return {};
            try {
              const { Pool } = await import('pg');
              const pool = new Pool({ connectionString: process.env.DATABASE_URL });
              try {
                const { title, description, category, require_quiz_completion, min_quiz_score, sections_json } = request.payload;
                if (!title) {
                  return { notice: { message: 'Название курса обязательно', type: 'error' } };
                }
                const sections = sections_json ? JSON.parse(sections_json) : [];
                const { rows: [course] } = await pool.query(
                  `INSERT INTO courses (title, description, category, require_quiz_completion, min_quiz_score)
                   VALUES ($1, $2, $3, $4, $5) RETURNING id`,
                  [title, description || null, category || null, require_quiz_completion === 'true' || require_quiz_completion === true, parseInt(min_quiz_score || '65', 10)]
                );
                const courseId = course.id;
                let quizCount = 0;

                for (let i = 0; i < sections.length; i++) {
                  const sec = sections[i];
                  if (!sec.title) continue;
                  const { rows: [sectionRes] } = await pool.query(
                    `INSERT INTO sections (course_id, title, order_index) VALUES ($1, $2, $3) RETURNING id`,
                    [courseId, sec.title, i]
                  );
                  const lessons = sec.lessons || [];
                  for (let j = 0; j < lessons.length; j++) {
                    const lesson = lessons[j];
                    if (!lesson.title) continue;
                    const { rows: [lessonRes] } = await pool.query(
                      `INSERT INTO lessons (section_id, title, content_type, video_url, text_content, order_index) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
                      [sectionRes.id, lesson.title, lesson.content_type || 'text', lesson.video_url || null, lesson.text_content || null, j]
                    );

                    if (lesson.content_type === 'quiz' && lesson.quiz_title) {
                      const { rows: [quizRes] } = await pool.query(
                        `INSERT INTO quizzes (lesson_id, title) VALUES ($1, $2) RETURNING id`,
                        [lessonRes.id, lesson.quiz_title]
                      );
                      quizCount++;
                      const questions = lesson.questions || [];
                      for (let qi = 0; qi < questions.length; qi++) {
                        const q = questions[qi];
                        if (!q.question_text) continue;
                        const { rows: [questionRes] } = await pool.query(
                          `INSERT INTO questions (quiz_id, question_text, question_type) VALUES ($1, $2, $3) RETURNING id`,
                          [quizRes.id, q.question_text, q.question_type || 'single']
                        );
                        const answers = q.answers || [];
                        for (let ai = 0; ai < answers.length; ai++) {
                          const a = answers[ai];
                          if (!a.answer_text) continue;
                          await pool.query(
                            `INSERT INTO answers (question_id, answer_text, is_correct) VALUES ($1, $2, $3)`,
                            [questionRes.id, a.answer_text, a.is_correct === true]
                          );
                        }
                      }
                    }
                  }
                }

                return {
                  redirectUrl: '/resources/courses',
                  notice: { message: `Курс «${title}» создан: ${sections.length} разд., ${quizCount} тестов`, type: 'success' },
                };
              } finally {
                await pool.end();
              }
            } catch (err: any) {
              return { notice: { message: `Ошибка: ${err.message}`, type: 'error' } };
            }
          },
        },
        detailedEdit: {
          actionType: 'record',
          component: CourseDetailedEdit,
          icon: 'Edit',
          label: 'Подробное редактирование',
          handler: async (request: any, _response: any, context: any) => {
            if (request.method !== 'get' && request.method !== 'post') return {};
            const { Pool } = await import('pg');
            const pool = new Pool({ connectionString: process.env.DATABASE_URL });
            try {
              const urlParts = request.url.split('/');
              const recordIdx = urlParts.indexOf('records');
              const recordId = recordIdx !== -1 ? parseInt(urlParts[recordIdx + 1], 10) : null;
              if (!recordId) {
                return { notice: { message: 'ID курса не найден', type: 'error' } };
              }

              if (request.method === 'get') {
                const { rows: [course] } = await pool.query(`SELECT * FROM courses WHERE id = $1`, [recordId]);
                if (!course) {
                  return { notice: { message: 'Курс не найден', type: 'error' } };
                }

                const { rows: sectionRows } = await pool.query(
                  `SELECT * FROM sections WHERE course_id = $1 ORDER BY order_index`, [recordId]
                );

                const sections = [];
                for (const sec of sectionRows) {
                  const { rows: lessonRows } = await pool.query(
                    `SELECT * FROM lessons WHERE section_id = $1 ORDER BY order_index`, [sec.id]
                  );
                  const lessons = [];
                  for (const lesson of lessonRows) {
                    const l: any = {
                      title: lesson.title,
                      content_type: lesson.content_type || 'text',
                      video_url: lesson.video_url,
                      text_content: lesson.text_content,
                    };
                    if (lesson.content_type === 'quiz') {
                      const { rows: [quiz] } = await pool.query(
                        `SELECT * FROM quizzes WHERE lesson_id = $1`, [lesson.id]
                      );
                      if (quiz) {
                        l.quiz_title = quiz.title;
                        const { rows: questionRows } = await pool.query(
                          `SELECT * FROM questions WHERE quiz_id = $1`, [quiz.id]
                        );
                        const questions = [];
                        for (const q of questionRows) {
                          const { rows: answerRows } = await pool.query(
                            `SELECT * FROM answers WHERE question_id = $1`, [q.id]
                          );
                          questions.push({
                            question_text: q.question_text,
                            question_type: q.question_type || 'single',
                            answers: answerRows.map((a: any) => ({
                              answer_text: a.answer_text,
                              is_correct: a.is_correct,
                            })),
                          });
                        }
                        l.questions = questions;
                      }
                    }
                    lessons.push(l);
                  }
                  sections.push({ title: sec.title, lessons });
                }

                return {
                  record: {
                    ...context.record.toJSON(context.currentAdmin),
                    params: {
                      ...context.record.toJSON(context.currentAdmin).params,
                      course_data_json: JSON.stringify(sections),
                    },
                  },
                };
              }

              if (request.method === 'post') {
                const { title, description, category, require_quiz_completion, min_quiz_score, sections_json } = request.payload;
                if (!title) {
                  return { notice: { message: 'Название курса обязательно', type: 'error' } };
                }
                const sections = sections_json ? JSON.parse(sections_json) : [];

                await pool.query(
                  `UPDATE courses SET title = $1, description = $2, category = $3, require_quiz_completion = $4, min_quiz_score = $5 WHERE id = $6`,
                  [title, description || null, category || null, require_quiz_completion === 'true' || require_quiz_completion === true, parseInt(min_quiz_score || '65', 10), recordId]
                );

                await pool.query(`DELETE FROM sections WHERE course_id = $1`, [recordId]);

                let quizCount = 0;
                for (let i = 0; i < sections.length; i++) {
                  const sec = sections[i];
                  if (!sec.title) continue;
                  const { rows: [sectionRes] } = await pool.query(
                    `INSERT INTO sections (course_id, title, order_index) VALUES ($1, $2, $3) RETURNING id`,
                    [recordId, sec.title, i]
                  );
                  const lessons = sec.lessons || [];
                  for (let j = 0; j < lessons.length; j++) {
                    const lesson = lessons[j];
                    if (!lesson.title) continue;
                    const { rows: [lessonRes] } = await pool.query(
                      `INSERT INTO lessons (section_id, title, content_type, video_url, text_content, order_index) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
                      [sectionRes.id, lesson.title, lesson.content_type || 'text', lesson.video_url || null, lesson.text_content || null, j]
                    );

                    if (lesson.content_type === 'quiz' && lesson.quiz_title) {
                      const { rows: [quizRes] } = await pool.query(
                        `INSERT INTO quizzes (lesson_id, title) VALUES ($1, $2) RETURNING id`,
                        [lessonRes.id, lesson.quiz_title]
                      );
                      quizCount++;
                      const questions = lesson.questions || [];
                      for (let qi = 0; qi < questions.length; qi++) {
                        const q = questions[qi];
                        if (!q.question_text) continue;
                        const { rows: [questionRes] } = await pool.query(
                          `INSERT INTO questions (quiz_id, question_text, question_type) VALUES ($1, $2, $3) RETURNING id`,
                          [quizRes.id, q.question_text, q.question_type || 'single']
                        );
                        const answers = q.answers || [];
                        for (let ai = 0; ai < answers.length; ai++) {
                          const a = answers[ai];
                          if (!a.answer_text) continue;
                          await pool.query(
                            `INSERT INTO answers (question_id, answer_text, is_correct) VALUES ($1, $2, $3)`,
                            [questionRes.id, a.answer_text, a.is_correct === true]
                          );
                        }
                      }
                    }
                  }
                }

                return {
                  record: context.record.toJSON(context.currentAdmin),
                  redirectUrl: '/resources/courses',
                  notice: { message: `Курс «${title}» сохранён: ${sections.length} разд., ${quizCount} тестов`, type: 'success' },
                };
              }
            } catch (err: any) {
              return { notice: { message: `Ошибка: ${err.message}`, type: 'error' } };
            } finally {
              await pool.end();
            }
          },
        },
      },
    },
  });

  // ── sections (доступны через курсы) ──────────────────────────────────────
  configuredResources.push({
    resource: db.table('sections'),
    options: {
      id: 'sections',
      navigation: false,
      listProperties: ['id', 'course_id', 'title', 'order_index'],
      showProperties: ['id', 'course_id', 'title', 'order_index'],
      editProperties: ['course_id', 'title', 'order_index'],
      newProperties: ['course_id', 'title', 'order_index'],
    },
  });

  // ── lessons (доступны через разделы) ─────────────────────────────────────
  configuredResources.push({
    resource: db.table('lessons'),
    options: {
      id: 'lessons',
      navigation: false,
      listProperties: ['id', 'section_id', 'title', 'content_type', 'order_index'],
      showProperties: ['id', 'section_id', 'title', 'content_type', 'video_url', 'text_content', 'order_index'],
      editProperties: ['section_id', 'title', 'content_type', 'video_url', 'text_content', 'order_index'],
      newProperties: ['section_id', 'title', 'content_type', 'video_url', 'text_content', 'order_index'],
    },
  });

  // ── quizzes (доступны через уроки) ──────────────────────────────────────
  configuredResources.push({
    resource: db.table('quizzes'),
    options: {
      id: 'quizzes',
      navigation: false,
      listProperties: ['id', 'lesson_id', 'title'],
      showProperties: ['id', 'lesson_id', 'title'],
      editProperties: ['lesson_id', 'title'],
      newProperties: ['lesson_id', 'title'],
    },
  });

  // ── questions (доступны через тесты) ────────────────────────────────────
  configuredResources.push({
    resource: db.table('questions'),
    options: {
      id: 'questions',
      navigation: false,
      listProperties: ['id', 'quiz_id', 'question_text', 'question_type'],
      showProperties: ['id', 'quiz_id', 'question_text', 'question_type'],
      editProperties: ['quiz_id', 'question_text', 'question_type'],
      newProperties: ['quiz_id', 'question_text', 'question_type'],
    },
  });

  // ── answers (доступны через вопросы) ────────────────────────────────────
  configuredResources.push({
    resource: db.table('answers'),
    options: {
      id: 'answers',
      navigation: false,
      listProperties: ['id', 'question_id', 'answer_text', 'is_correct'],
      showProperties: ['id', 'question_id', 'answer_text', 'is_correct'],
      editProperties: ['question_id', 'answer_text', 'is_correct'],
      newProperties: ['question_id', 'answer_text', 'is_correct'],
    },
  });

  // ── enrollments ──────────────────────────────────────────────────────────
  configuredResources.push({
    resource: db.table('enrollments'),
    options: {
      id: 'enrollments',
      navigation: { name: 'Курсы', icon: 'Video' },
      listProperties: ['id', 'user_id', 'course_id', 'enrolled_at'],
      showProperties: ['id', 'user_id', 'course_id', 'enrolled_at'],
      editProperties: ['user_id', 'course_id'],
      newProperties: ['user_id', 'course_id'],
      filterProperties: ['user_id', 'course_id', 'enrolled_at'],
    },
  });

  // ── forum posts ──────────────────────────────────────────────────────────
  configuredResources.push({
    resource: db.table('forum_posts'),
    options: {
      id: 'forum_posts',
      navigation: { name: 'Форум', icon: 'Chat' },
      listProperties: ['id', 'title', 'user_id', 'likes_count', 'created_at'],
      showProperties: ['id', 'title', 'body', 'user_id', 'likes_count', 'created_at', 'updated_at'],
      editProperties: ['title', 'body', 'user_id'],
      filterProperties: ['title', 'user_id', 'created_at'],
      properties: {
        likes_count: {
          type: 'number',
          isVisible: { list: true, show: true, edit: false, filter: false },
          sortable: false,
        },
      },
      actions: {
        list: {
          after: async (response: any) => {
            const ids = response.records?.map((r: any) => r.params.id) || [];
            if (ids.length === 0) return response;
            const { Pool } = await import('pg');
            const pool = new Pool({ connectionString: process.env.DATABASE_URL });
            try {
              const placeholders = ids.map((_, i) => `$${i + 1}`).join(',');
              const { rows } = await pool.query(
                `SELECT post_id, COUNT(*)::int AS count FROM forum_post_likes WHERE post_id IN (${placeholders}) GROUP BY post_id`,
                ids
              );
              const countMap = Object.fromEntries(rows.map((r: any) => [r.post_id, r.count]));
              for (const record of response.records) {
                record.params.likes_count = String(countMap[record.params.id] || 0);
              }
            } finally {
              await pool.end();
            }
            return response;
          },
        },
        show: {
          after: async (response: any) => {
            if (!response?.record?.params?.id) return response;
            const { Pool } = await import('pg');
            const pool = new Pool({ connectionString: process.env.DATABASE_URL });
            try {
              const { rows } = await pool.query(
                `SELECT COUNT(*)::int AS count FROM forum_post_likes WHERE post_id = $1`,
                [response.record.params.id]
              );
              response.record.params.likes_count = String(rows[0].count);
            } finally {
              await pool.end();
            }
            return response;
          },
        },
        detailedEdit: {
          actionType: 'record',
          component: ForumDetailedEdit,
          icon: 'Edit',
          label: 'Подробное редактирование',
          handler: async (request: any, _response: any, context: any) => {
            if (request.method !== 'get' && request.method !== 'post') return {};
            const { Pool } = await import('pg');
            const pool = new Pool({ connectionString: process.env.DATABASE_URL });
            try {
              const urlParts = request.url.split('/');
              const recordIdx = urlParts.indexOf('records');
              const recordId = recordIdx !== -1 ? parseInt(urlParts[recordIdx + 1], 10) : null;
              if (!recordId) {
                return { notice: { message: 'ID поста не найден', type: 'error' } };
              }

              if (request.method === 'get') {
                const { rows: replies } = await pool.query(
                  `SELECT fr.id, fr.body, fr.user_id, fr.created_at, u.email AS user_email
                   FROM forum_replies fr LEFT JOIN users u ON u.id = fr.user_id
                   WHERE fr.post_id = $1 ORDER BY fr.created_at ASC`,
                  [recordId]
                );

                const { rows: [{ count: likes_count }] } = await pool.query(
                  `SELECT COUNT(*)::int AS count FROM forum_post_likes WHERE post_id = $1`,
                  [recordId]
                );

                return {
                  record: {
                    ...context.record.toJSON(context.currentAdmin),
                    params: {
                      ...context.record.toJSON(context.currentAdmin).params,
                      replies_json: JSON.stringify(replies),
                      likes_count: String(likes_count),
                    },
                  },
                };
              }

              if (request.method === 'post') {
                const { delete_reply_ids } = request.payload;
                if (delete_reply_ids) {
                  const ids = JSON.parse(delete_reply_ids) as number[];
                  for (const id of ids) {
                    await pool.query(`DELETE FROM forum_replies WHERE id = $1`, [id]);
                  }
                }

                return {
                  record: context.record.toJSON(context.currentAdmin),
                  redirectUrl: '/resources/forum_posts',
                  notice: { message: 'Пост обновлён', type: 'success' },
                };
              }
            } catch (err: any) {
              return { notice: { message: `Ошибка: ${err.message}`, type: 'error' } };
            } finally {
              await pool.end();
            }
          },
        },
      },
    },
  });

  // Hidden child tables (доступны через родительские записи)
  configuredResources.push({ resource: db.table('forum_replies'), options: { id: 'forum_replies', navigation: false, listProperties: ['id', 'post_id', 'user_id', 'created_at'], showProperties: ['id', 'post_id', 'body', 'user_id', 'created_at', 'updated_at'], editProperties: ['body'] } });
  configuredResources.push({ resource: db.table('forum_tags'), options: { id: 'forum_tags', navigation: false, listProperties: ['id', 'name'], showProperties: ['id', 'name'], editProperties: ['name'], newProperties: ['name'] } });
  configuredResources.push({ resource: db.table('forum_post_tags'), options: { id: 'forum_post_tags', navigation: false, listProperties: ['id', 'post_id', 'tag_id'], showProperties: ['id', 'post_id', 'tag_id'] } });
  configuredResources.push({ resource: db.table('forum_reply_tags'), options: { id: 'forum_reply_tags', navigation: false, listProperties: ['id', 'reply_id', 'tag_id'], showProperties: ['id', 'reply_id', 'tag_id'] } });
  configuredResources.push({ resource: db.table('forum_post_likes'), options: { id: 'forum_post_likes', navigation: false, listProperties: ['id', 'post_id', 'user_id', 'created_at'], showProperties: ['id', 'post_id', 'user_id', 'created_at'] } });
  configuredResources.push({ resource: db.table('forum_reply_likes'), options: { id: 'forum_reply_likes', navigation: false, listProperties: ['id', 'reply_id', 'user_id', 'created_at'], showProperties: ['id', 'reply_id', 'user_id', 'created_at'] } });
  // ── user-related tables (скрыты, отображаются как связанные записи на странице пользователя) ──
  configuredResources.push({ resource: db.table('quiz_attempts'), options: { id: 'quiz_attempts', navigation: false, listProperties: ['id', 'user_id', 'quiz_id', 'score', 'passed', 'completed_at'], showProperties: ['id', 'user_id', 'quiz_id', 'score', 'passed', 'completed_at'] } });
  configuredResources.push({ resource: db.table('progress'), options: { id: 'progress', navigation: false, listProperties: ['id', 'user_id', 'course_id', 'status', 'updated_at'], showProperties: ['id', 'user_id', 'course_id', 'status', 'updated_at'] } });
  configuredResources.push({ resource: db.table('user_social_links'), options: { id: 'user_social_links', navigation: false, listProperties: ['id', 'user_id', 'platform', 'url'], showProperties: ['id', 'user_id', 'platform', 'url'] } });
  configuredResources.push({ resource: db.table('badges'), options: { id: 'badges', navigation: false, listProperties: ['id', 'name', 'description', 'course_id'], showProperties: ['id', 'name', 'description', 'image_url', 'course_id'], editProperties: ['name', 'description', 'image_url', 'course_id'], newProperties: ['name', 'description', 'image_url', 'course_id'] } });
  configuredResources.push({ resource: db.table('user_badges'), options: { id: 'user_badges', navigation: false, listProperties: ['id', 'user_id', 'badge_id', 'awarded_at'], showProperties: ['id', 'user_id', 'badge_id', 'awarded_at'] } });
  configuredResources.push({ resource: db.table('certifications'), options: { id: 'certifications', navigation: false, listProperties: ['id', 'user_id', 'course_id', 'certificate_code', 'issued_at'], showProperties: ['id', 'user_id', 'course_id', 'certificate_code', 'issued_at'] } });
  configuredResources.push({ resource: db.table('course_ratings'), options: { id: 'course_ratings', navigation: false, listProperties: ['id', 'user_id', 'course_id', 'rating', 'created_at'], showProperties: ['id', 'user_id', 'course_id', 'rating', 'created_at'] } });
}

// Options for AdminJS instance
const options: AdminJSOptions = {
  componentLoader,
  rootPath: process.env.ADMIN_ROOT_PATH || '/',
  resources: configuredResources,
  databases,
  dashboard: {
    // Handler returns data consumed by the dashboard component.
    // It attempts to query counts from the database (users, courses, enrollments)
    // and will note if a specialized table (site_visits) is missing.
    handler: async (request: any, response: any, context: any) => {
      const result: Record<string, any> = {
        visits: 0,
        users: 0,
        courses: 0,
        enrollments: 0,
        timestamp: new Date().toISOString(),
        note: '',
      };

      const safeCount = (res: any) => {
        if (!res) return 0;
        const val =
          (res.rows && res.rows[0] && res.rows[0].count) ||
          (Array.isArray(res) && res[0] && res[0].count) ||
          (res[0] && res[0].count) ||
          0;
        return Number(val ?? 0);
      };

      try {
        // Prefer using DATABASE_URL (pg Pool) for reliable runtime queries.
        if (process.env.DATABASE_URL) {
          try {
            const { Pool } = await import('pg');
            const pool = new Pool({ connectionString: process.env.DATABASE_URL });

            try {
              const [usersRes, coursesRes, enrollRes] = await Promise.all([
                pool.query('SELECT COUNT(*)::int AS count FROM users'),
                pool.query('SELECT COUNT(*)::int AS count FROM courses'),
                pool.query('SELECT COUNT(*)::int AS count FROM enrollments'),
              ]);

              result.users = safeCount(usersRes);
              result.courses = safeCount(coursesRes);
              result.enrollments = safeCount(enrollRes);

              try {
                const visitsRes = await pool.query('SELECT COUNT(*)::int AS count FROM site_visits');
                result.visits = safeCount(visitsRes);
              } catch (e) {
                // If there is no site_visits table, keep other counts and add note
                result.note = 'site_visits table not found; showing users/courses/enrollments counts instead';
              }
            } finally {
              // close pool
              try {
                await pool.end();
              } catch (e) {
                // ignore pool shutdown errors
              }
            }
          } catch (errInner) {
            // Couldn't load or query via pg - fall back to adapter if available
            if (db && typeof db.query === 'function') {
              const q = (sql: string) => db.query(sql);
              const [usersRes, coursesRes, enrollRes] = await Promise.all([
                q('SELECT COUNT(*)::int AS count FROM users'),
                q('SELECT COUNT(*)::int AS count FROM courses'),
                q('SELECT COUNT(*)::int AS count FROM enrollments'),
              ]);
              result.users = safeCount(usersRes);
              result.courses = safeCount(coursesRes);
              result.enrollments = safeCount(enrollRes);
              try {
                const visitsRes = await q('SELECT COUNT(*)::int AS count FROM site_visits');
                result.visits = safeCount(visitsRes);
              } catch (e) {
                result.note = 'site_visits table not found; showing users/courses/enrollments counts instead';
              }
            } else {
              result.note = 'DATABASE_URL set but pg failed and no adapter available: ' + String(errInner);
            }
          }
        } else if (db && typeof db.query === 'function') {
          // No DATABASE_URL provided — use adapter/db exported by AUTOLOAD_DB import
          const q = (sql: string) => db.query(sql);
          const [usersRes, coursesRes, enrollRes] = await Promise.all([
            q('SELECT COUNT(*)::int AS count FROM users'),
            q('SELECT COUNT(*)::int AS count FROM courses'),
            q('SELECT COUNT(*)::int AS count FROM enrollments'),
          ]);
          result.users = safeCount(usersRes);
          result.courses = safeCount(coursesRes);
          result.enrollments = safeCount(enrollRes);
          try {
            const visitsRes = await q('SELECT COUNT(*)::int AS count FROM site_visits');
            result.visits = safeCount(visitsRes);
          } catch (e) {
            result.note = 'site_visits table not found; showing users/courses/enrollments counts instead';
          }
        } else {
          result.note = 'No DB connection: set DATABASE_URL or enable AUTOLOAD_DB';
        }
      } catch (err: any) {
        result.note = 'Query failed: ' + String(err?.message ?? err);
      }

      return result;
    },
    component: DashboardComponent,
  },
  pages: {
    
  },
  assets: {
    styles: ['/admin-custom.css'],
  },
  branding: {
    logo: false,
    companyName: 'Netcourse Admin',
    withMadeWithLove: false,
    theme: {
      colors: {
        bg: '#020617',
        filterBg: '#0f172a',
        container: '#1e293b',
        sidebar: '#0f172a',

        primary100: '#10b981',
        primary80: '#34d399',
        primary60: '#059669',
        primary40: '#065f46',
        primary20: '#022c22',

        accent: '#06b6d4',

        grey100: '#ffffff',
        grey80: '#cbd5e1',
        grey60: '#94a3b8',
        grey40: '#64748b',
        grey20: '#1e293b',

        white: '#ffffff',
        black: '#020617',
        text: '#ffffff',
        border: '#1e293b',

        inputBorder: '#334155',
        separator: '#334155',
        highlight: '#1e293b',

        error: '#ef4444',
        errorDark: '#dc2626',
        errorLight: '#450a0a',

        success: '#10b981',
        successDark: '#059669',
        successLight: '#022c22',

        info: '#3b82f6',
        infoDark: '#2563eb',
        infoLight: '#1e3a8a',

        warning: '#f59e0b',
        warningDark: '#d97706',
        warningLight: '#451a03',

        love: '#10b981',
      },
      shadows: {
        login: '0 15px 24px 0 rgba(0,0,0,0.6)',
        cardHover: '0 4px 12px 0 rgba(0,0,0,0.5)',
        drawer: '-2px 0 8px 0 rgba(0,0,0,0.4)',
        card: '0 0.25rem 0.5rem rgba(0,0,0,0.35)',
        inputFocus: '0 2px 4px 0 rgba(16,185,129,0.4)',
        buttonFocus: '0 4px 6px 0 rgba(16,185,129,0.35)',
      },
      borders: {
        input: '1px solid #334155',
        filterInput: '1px rgba(255,255,255,0.08)',
        bg: '1px solid #020617',
        default: '1px solid #1e293b',
      },
    },
  },
};

export default options;
