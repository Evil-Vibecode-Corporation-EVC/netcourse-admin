#!/usr/bin/env bash
# Simple helper to create a local test DB and an admin user for Netcourse
# Usage:
#   PGHOST=localhost PGPORT=5432 PG_SUPERUSER=postgres ./scripts/setup-test-db.sh
# The script expects psql/createdb in PATH and that the superuser can connect (passwordless or via .pgpass).

set -euo pipefail

PGHOST=${PGHOST:-localhost}
PGPORT=${PGPORT:-5432}
PG_SUPERUSER=${PG_SUPERUSER:-postgres}
DB_NAME=${DB_NAME:-netcourse}
TEST_DB=${TEST_DB:-netcourse_test}
ADMIN_ROLE=${ADMIN_ROLE:-netcourse_admin}
ADMIN_PASS=${ADMIN_PASS:-admin}

echo "Using PGHOST=$PGHOST PGPORT=$PGPORT PG_SUPERUSER=$PG_SUPERUSER"

PSQL_SUPER="psql -v ON_ERROR_STOP=1 -h $PGHOST -p $PGPORT -U $PG_SUPERUSER"

echo "Create role $ADMIN_ROLE if not exists"
ROLE_EXISTS=$($PSQL_SUPER -tAc "SELECT 1 FROM pg_catalog.pg_roles WHERE rolname = '$ADMIN_ROLE'")
if [ "$ROLE_EXISTS" != '1' ]; then
  $PSQL_SUPER -c "CREATE ROLE \"$ADMIN_ROLE\" WITH LOGIN PASSWORD '$ADMIN_PASS';"
  echo "Role $ADMIN_ROLE created"
else
  echo "Role $ADMIN_ROLE already exists"
fi

echo "Create database $TEST_DB if not exists and set owner to $ADMIN_ROLE"
DB_EXISTS=$($PSQL_SUPER -tAc "SELECT 1 FROM pg_database WHERE datname = '$TEST_DB'")
if [ "$DB_EXISTS" != '1' ]; then
  createdb -h "$PGHOST" -p "$PGPORT" -U "$PG_SUPERUSER" -O "$ADMIN_ROLE" "$TEST_DB"
  echo "Database $TEST_DB created"
else
  echo "Database $TEST_DB already exists"
fi

echo "Ensure minimal users table exists and insert admin user"
PSQL_ADMIN="psql -v ON_ERROR_STOP=1 -h $PGHOST -p $PGPORT -U $ADMIN_ROLE -d $TEST_DB"

# Create a minimal users table if it does not exist (compatible with admin auth)
$PSQL_ADMIN -c "CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  username TEXT,
  password TEXT NOT NULL,
  role TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);"

# Precomputed bcrypt hash for password 'password' (rounds=10)
ADMIN_HASH=$2b$10$PWhGTHqimlpVKjdwL/uqwOnxym/vAGJs7nVJi51cgaUXHTuNY5P4K

echo "Insert admin user if not exists (email: admin@example.com, password: password)"
$PSQL_ADMIN -c "INSERT INTO users (email, username, password, role)
  SELECT 'admin@example.com', 'admin', '${ADMIN_HASH}', 'ADMIN'
  WHERE NOT EXISTS (SELECT 1 FROM users WHERE email = 'admin@example.com');"

echo "Done. Test DB: $TEST_DB, admin user: admin@example.com / password"
