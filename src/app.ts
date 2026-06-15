import express from 'express';
import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import provider from './admin/auth-provider.js';
import options from './admin/options.js';
import initializeDb from './db/index.js';

const port = process.env.PORT || 3001;

const start = async () => {
  const app = express();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  app.get('/admin-custom.css', (_req, res) => {
    const cssPath = join(__dirname, 'admin', 'custom.css');
    res.setHeader('Content-Type', 'text/css');
    res.send(readFileSync(cssPath, 'utf-8'));
  });

  try {
    await initializeDb();
  } catch (dbErr) {
    // eslint-disable-next-line no-console
    console.warn('[app] DB initialization error (panel will run in degraded mode):', (dbErr as Error).message ?? dbErr);
  }

  const admin = new AdminJS({ ...options, rootPath: '/' });

  if (process.env.NODE_ENV === 'production') {
    await admin.initialize();
  } else {
    admin.watch();
  }

  const router = buildAuthenticatedRouter(
    admin,
    {
      cookiePassword: process.env.COOKIE_SECRET,
      cookieName: 'adminjs',
      provider,
    },
    null,
    {
      secret: process.env.COOKIE_SECRET,
      saveUninitialized: true,
      resave: true,
    }
  );

  app.use(admin.options.rootPath, router);

  app.listen(port, () => {
    console.log(`AdminJS available at http://localhost:${port}/`);
  });
};

start();
