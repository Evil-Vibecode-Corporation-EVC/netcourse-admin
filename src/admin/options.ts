import { AdminJSOptions } from 'adminjs';
import bcrypt from 'bcryptjs';

import componentLoader from './component-loader.js';

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
    },
  });

  // ── enrollments ────────────────────────────────────────────────────────────
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
