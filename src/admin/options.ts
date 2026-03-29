import { AdminJSOptions } from 'adminjs';

import componentLoader from './component-loader.js';

/**
 * AdminJS options builder
 *
 * - Uses `AUTOLOAD_DB` env var to decide whether to auto-load database resources.
 * - Uses `ADMIN_ROOT_PATH` env var to override the admin root path.
 *
 * NOTES:
 * - If `AUTOLOAD_DB` is set to "true", this module imports the DB adapter export
 *   from `src/db/index.ts` and passes it to AdminJS via `databases`.
 * - This is intended to make it easy to toggle automatic resource loading for
 *   local development / coursework. For production you might want to pass
 *   explicit resources or wire this differently.
 */
let databases: any[] = [];

if (process.env.AUTOLOAD_DB === 'true') {
  try {
    // Import the initialized database/adapter from the db module.
    // The db module uses top-level await to initialize the adapter, so importing
    // it here will provide the ready-to-use `db` instance.
    // Path is relative to this file (src/admin/options.ts -> src/db/index.ts).
    // eslint-disable-next-line import/no-unresolved
    // (If your build setup complains, adjust the import strategy accordingly.)
    // We use a static import because the db module exports `db` as a top-level awaited value.
    // If you prefer lazy/dynamic loading, you can change this to a dynamic import.
    // The try/catch ensures that if the db is not available we fall back gracefully.
    // @ts-ignore
    const { db } = await import('../db/index.js');
    if (db) {
      databases = [db];
    }
  } catch (error) {
    // If importing the DB fails, fall back to empty databases array.
    // During development it's fine; in production surface the error instead.
    // eslint-disable-next-line no-console
    console.warn('AUTOLOAD_DB enabled but failed to import database:', error);
    databases = [];
  }
}

const options: AdminJSOptions = {
  componentLoader,
  rootPath: process.env.ADMIN_ROOT_PATH || '/admin',
  resources: [], // add explicit resources here if needed
  databases,
};

export default options;
