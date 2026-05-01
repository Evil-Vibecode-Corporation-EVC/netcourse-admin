import { DefaultAuthProvider } from 'adminjs';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';

import componentLoader from './component-loader.js';
let pool: Pool | null = null;

if (process.env.DATABASE_URL) {
  pool = new Pool({ connectionString: process.env.DATABASE_URL });
} else {
  // eslint-disable-next-line no-console
  console.warn('[auth] DATABASE_URL не задан — вход через БД невозможен.');
}

const provider = new DefaultAuthProvider({
  componentLoader,
  authenticate: async ({ email, password }) => {
    if (!pool) {
      // eslint-disable-next-line no-console
      console.error('[auth] Нет подключения к БД.');
      return null;
    }

    try {
      const { rows } = await pool.query<{
        id: number;
        email: string;
        username: string | null;
        password: string;
        role: string;
      }>(
        `SELECT id, email, username, password, role
         FROM users
         WHERE email = $1
           AND role = 'ADMIN'
         LIMIT 1`,
        [email]
      );

      if (rows.length === 0) {
        return null;
      }

      const user = rows[0];

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return null;
      }

      return {
        email: user.email,
        id: String(user.id),
        title: user.username ?? user.email,
        role: user.role,
      };
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('[auth] Ошибка запроса к БД:', (err as Error).message);
      return null;
    }
  },
});

export default provider;
