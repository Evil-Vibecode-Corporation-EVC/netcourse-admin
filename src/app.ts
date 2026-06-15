import express from 'express';
import AdminJS from 'adminjs';
import { buildAuthenticatedRouter } from '@adminjs/express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import formidable from 'express-formidable';
import pg from 'pg';
import { uploadFile, deleteFile, extractKeyFromUrl } from './utils/r2.js';

import provider from './admin/auth-provider.js';
import options from './admin/options.js';
import initializeDb from './db/index.js';

const port = process.env.PORT || 3001;

const start = async () => {
  const app = express();

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  app.get('/admin-custom.css', (_req, res) => {
    const cssPath = path.join(__dirname, 'admin', 'custom.css');
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

  // Badge image upload route — behind AdminJS auth (session set by AdminJS router)
  app.post('/api/upload-badge-image/:id',
    formidable({ maxFileSize: 2 * 1024 * 1024 }),
    async (req, res) => {
      try {
        if (!(req as any).session?.adminUser) {
          return res.status(401).json({ error: 'Unauthorized' });
        }

        const { id } = req.params;
        const file = (req as any).files?.image;
        if (!file) {
          return res.status(400).json({ error: 'No image file provided' });
        }

        const ext = path.extname(file.name) || '.jpg';
        const allowed = ['.jpg', '.jpeg', '.png', '.webp'];
        if (!allowed.includes(ext.toLowerCase())) {
          return res.status(400).json({ error: 'Only JPEG, PNG, and WebP images are allowed' });
        }

        const key = `badges/${id}-${Date.now()}${ext}`;
        const buffer = readFileSync(file.path);
        const mimeType = file.type || 'image/jpeg';
        const url = await uploadFile(key, buffer, mimeType);

        const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });

        const oldResult = await pool.query('SELECT image_url FROM badges WHERE id = $1', [id]);
        if (oldResult.rows.length === 0) {
          await deleteFile(key).catch(() => {});
          await pool.end();
          return res.status(404).json({ error: 'Badge not found' });
        }

        const oldImageUrl = oldResult.rows[0].image_url;
        if (oldImageUrl) {
          const oldKey = extractKeyFromUrl(oldImageUrl);
          if (oldKey) {
            deleteFile(oldKey).catch((err) =>
              console.error('Failed to delete old badge image:', err),
            );
          }
        }

        const result = await pool.query(
          'UPDATE badges SET image_url = $1 WHERE id = $2 RETURNING *',
          [url, id],
        );

        await pool.end();

        res.json(result.rows[0]);
      } catch (error: any) {
        console.error('Failed to upload badge image:', error);
        res.status(500).json({ error: error.message || 'Failed to upload badge image' });
      }
    },
  );

  app.listen(port, () => {
    console.log(`AdminJS available at http://localhost:${port}/`);
  });
};

start();
