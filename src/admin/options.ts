import { AdminJSOptions } from 'adminjs';

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
// The argument is the id used by AdminJS to reference this component.
const DashboardComponent = componentLoader.add('Dashboard', './components/dashboard');

// Options for AdminJS instance
const options: AdminJSOptions = {
  componentLoader,
  rootPath: process.env.ADMIN_ROOT_PATH || '/admin',
  resources: [], // explicit resources can be added here if desired
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
  branding: {
    companyName: 'Netcourse Admin',
    // Note: `softwareBrothers` property removed because it is not part of
    // the AdminJS BrandingOptions type and causes TS errors.
  },
};

export default options;
