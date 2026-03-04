#!/bin/bash
# Migrate Algorand tables from public schema to target schema.
# Loads .env.local and runs the SQL migration.
#
# Usage:
#   ./scripts/run-algorand-migration.sh [target_schema]
#   pnpm run migrate:algorand [target_schema]
#
# Examples:
#   ./scripts/run-algorand-migration.sh          # uses stocks (from DATABASE_SCHEMA) or stocks
#   ./scripts/run-algorand-migration.sh stocks   # insert into stocks schema
#   ./scripts/run-algorand-migration.sh my_schema # insert into my_schema

set -e
cd "$(dirname "$0")/.."

if [ -f .env.local ]; then
  set -a
  source .env.local
  set +a
fi

if [ -z "$DATABASE_URL" ]; then
  echo "Error: DATABASE_URL is not set. Add it to .env.local or export it."
  exit 1
fi

# Target schema: 1st arg, or DATABASE_SCHEMA from .env, or "stocks"
TARGET_SCHEMA="${1:-${DATABASE_SCHEMA:-stocks}}"

echo "Running migration from public -> $TARGET_SCHEMA schema..."
psql "$DATABASE_URL" -v target_schema="$TARGET_SCHEMA" -f scripts/migrate-algorand-public-to-stocks.sql
echo "Done."
