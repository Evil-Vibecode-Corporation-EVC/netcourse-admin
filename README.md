Netcourse Admin — кратко

Тёмная админ‑панель на AdminJS (Express + PostgreSQL).

Установка и запуск
- npm install
- Создать .env (пример ниже)
- npm run build
- npm start

По умолчанию: http://localhost:3001/ (PORT).

Краткие env
- DATABASE_URL — Postgres connection string (рекомендуется)
- DATABASE_DIALECT — диалект адаптера (например: postgres)
- AUTOLOAD_DB — true для автодетекта таблиц
- COOKIE_SECRET — обязателен в продакшене
- ADMIN_ROOT_PATH — путь монтирования (по умолчанию /)

.env пример
DATABASE_URL=postgres://user:pass@localhost:5432/netcourse
DATABASE_DIALECT=postgres
AUTOLOAD_DB=true
COOKIE_SECRET=your_secret
PORT=3001

Создать администратора
1) Сгенерировать bcrypt‑хэш: node -e "import('bcryptjs').then(b=>b.hash('PASS',10).then(h=>console.log(h)))"
2) Вставить запись в users с role='ADMIN' и полученным хэшем.

Коротко по файлам
- src/app.ts — запуск сервера
- src/admin/options.ts — ресурсы, дашборд, тема
- src/admin/auth-provider.ts — вход (только role='ADMIN')
- src/db/* — адаптер @adminjs/sql (при ошибке БД панель стартует в degraded mode)

Примечание
Если нет DATABASE_URL и AUTOLOAD_DB!=true — панель стартует без ресурсов/дашборда.
