import { Database, Resource, Adapter } from '@adminjs/sql';
import AdminJS from 'adminjs';

import { connectionOptions, databaseType } from './config.js';

AdminJS.registerAdapter({ Database, Resource });

export const adapter = new Adapter(databaseType, connectionOptions);

// Top-level await: if the DB is unreachable we export null and let the
// application decide whether to crash or run in degraded mode.
let _db: Awaited<ReturnType<typeof adapter.init>> | null = null;

try {
  _db = await adapter.init();
} catch (err) {
  // eslint-disable-next-line no-console
  console.warn(
    '[db] Could not connect to the database — admin panel will start in degraded mode.\n' +
      '     Check DATABASE_URL in your .env file and make sure PostgreSQL is running.\n' +
      '     Error:',
    (err as Error).message ?? err
  );
}

export const db = _db;

const initialize = async () => ({ db, adapter });

export default initialize;
