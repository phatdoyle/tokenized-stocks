-- =============================================================
-- Migrate Algorand tables from public schema to target schema
-- =============================================================
--
-- Prerequisites:
--   1. Run Ponder at least once so it creates the target schema's algorand_* tables
--   2. Ensure public.assets, public.transactions, etc. exist and have data
--
-- Run with (target_schema passed via -v, default: stocks):
--   pnpm run migrate:algorand [schema]
--   psql $DATABASE_URL -v target_schema=stocks -f scripts/migrate-algorand-public-to-stocks.sql
--
-- Uses ON CONFLICT DO UPDATE for idempotent re-runs.
-- =============================================================

-- target_schema must be passed via: psql -v target_schema=your_schema
-- Ensure we're in the right schema context
SET search_path TO :"target_schema", public;

-- -------------------------------------------------------
-- 1. assets -> algorand_assets
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_assets (
  asset_id,
  created_at_round,
  deleted,
  creator_address,
  clawback_address,
  freeze_address,
  manager_address,
  reserve_address,
  name,
  unit_name,
  total,
  decimals,
  default_frozen,
  url,
  metadata_hash,
  indexed_at
)
SELECT
  asset_id,
  created_at_round,
  COALESCE(deleted, false),
  creator_address,
  clawback_address,
  freeze_address,
  manager_address,
  reserve_address,
  name,
  unit_name,
  total,
  decimals,
  default_frozen,
  url,
  metadata_hash,
  COALESCE(indexed_at, NOW())
FROM public.assets
ON CONFLICT (asset_id) DO UPDATE SET
  created_at_round = EXCLUDED.created_at_round,
  deleted = EXCLUDED.deleted,
  creator_address = EXCLUDED.creator_address,
  clawback_address = EXCLUDED.clawback_address,
  freeze_address = EXCLUDED.freeze_address,
  manager_address = EXCLUDED.manager_address,
  reserve_address = EXCLUDED.reserve_address,
  name = EXCLUDED.name,
  unit_name = EXCLUDED.unit_name,
  total = EXCLUDED.total,
  decimals = EXCLUDED.decimals,
  default_frozen = EXCLUDED.default_frozen,
  url = EXCLUDED.url,
  metadata_hash = EXCLUDED.metadata_hash,
  indexed_at = EXCLUDED.indexed_at;

-- -------------------------------------------------------
-- 2. transactions -> algorand_transactions
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_transactions (
  id,
  asset_id,
  tx_type,
  confirmed_round,
  round_time,
  sender,
  fee,
  first_valid,
  last_valid,
  note,
  group_hash,
  genesis_id,
  genesis_hash,
  intra_round_offset,
  close_rewards,
  closing_amount,
  sender_rewards,
  receiver_rewards,
  created_asset_index,
  auth_addr,
  signature_sig,
  parent_tx_id,
  is_inner_txn,
  inner_txn_index
)
SELECT
  id,
  asset_id,
  tx_type,
  confirmed_round,
  round_time,
  sender,
  fee,
  first_valid,
  last_valid,
  note,
  "group",
  genesis_id,
  genesis_hash,
  intra_round_offset,
  close_rewards,
  closing_amount,
  sender_rewards,
  receiver_rewards,
  created_asset_index,
  auth_addr,
  signature_sig,
  parent_tx_id,
  COALESCE(is_inner_txn, false),
  inner_txn_index
FROM public.transactions
ON CONFLICT (id) DO UPDATE SET
  asset_id = EXCLUDED.asset_id,
  tx_type = EXCLUDED.tx_type,
  confirmed_round = EXCLUDED.confirmed_round,
  round_time = EXCLUDED.round_time,
  sender = EXCLUDED.sender,
  fee = EXCLUDED.fee,
  first_valid = EXCLUDED.first_valid,
  last_valid = EXCLUDED.last_valid,
  note = EXCLUDED.note,
  group_hash = EXCLUDED.group_hash,
  genesis_id = EXCLUDED.genesis_id,
  genesis_hash = EXCLUDED.genesis_hash,
  intra_round_offset = EXCLUDED.intra_round_offset,
  close_rewards = EXCLUDED.close_rewards,
  closing_amount = EXCLUDED.closing_amount,
  sender_rewards = EXCLUDED.sender_rewards,
  receiver_rewards = EXCLUDED.receiver_rewards,
  created_asset_index = EXCLUDED.created_asset_index,
  auth_addr = EXCLUDED.auth_addr,
  signature_sig = EXCLUDED.signature_sig,
  parent_tx_id = EXCLUDED.parent_tx_id,
  is_inner_txn = EXCLUDED.is_inner_txn,
  inner_txn_index = EXCLUDED.inner_txn_index;

-- -------------------------------------------------------
-- 3. asset_transfers -> algorand_asset_transfers
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_asset_transfers (
  tx_id,
  amount,
  asset_id,
  receiver,
  close_amount,
  close_to
)
SELECT
  tx_id,
  amount,
  asset_id,
  receiver,
  close_amount,
  close_to
FROM public.asset_transfers
ON CONFLICT (tx_id) DO UPDATE SET
  amount = EXCLUDED.amount,
  asset_id = EXCLUDED.asset_id,
  receiver = EXCLUDED.receiver,
  close_amount = EXCLUDED.close_amount,
  close_to = EXCLUDED.close_to;

-- -------------------------------------------------------
-- 4. asset_freezes -> algorand_asset_freezes
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_asset_freezes (
  tx_id,
  address,
  asset_id,
  new_freeze_status
)
SELECT
  tx_id,
  address,
  asset_id,
  new_freeze_status
FROM public.asset_freezes
ON CONFLICT (tx_id) DO UPDATE SET
  address = EXCLUDED.address,
  asset_id = EXCLUDED.asset_id,
  new_freeze_status = EXCLUDED.new_freeze_status;

-- -------------------------------------------------------
-- 5. asset_configs -> algorand_asset_configs
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_asset_configs (
  tx_id,
  asset_id,
  creator_address,
  clawback_address,
  freeze_address,
  manager_address,
  reserve_address,
  name,
  unit_name,
  total,
  decimals,
  default_frozen,
  url,
  metadata_hash
)
SELECT
  tx_id,
  asset_id,
  creator_address,
  clawback_address,
  freeze_address,
  manager_address,
  reserve_address,
  name,
  unit_name,
  total,
  decimals,
  default_frozen,
  url,
  metadata_hash
FROM public.asset_configs
ON CONFLICT (tx_id) DO UPDATE SET
  asset_id = EXCLUDED.asset_id,
  creator_address = EXCLUDED.creator_address,
  clawback_address = EXCLUDED.clawback_address,
  freeze_address = EXCLUDED.freeze_address,
  manager_address = EXCLUDED.manager_address,
  reserve_address = EXCLUDED.reserve_address,
  name = EXCLUDED.name,
  unit_name = EXCLUDED.unit_name,
  total = EXCLUDED.total,
  decimals = EXCLUDED.decimals,
  default_frozen = EXCLUDED.default_frozen,
  url = EXCLUDED.url,
  metadata_hash = EXCLUDED.metadata_hash;

-- -------------------------------------------------------
-- 6. application_calls -> algorand_application_calls
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_application_calls (
  tx_id,
  application_id,
  on_completion,
  global_state_schema_num_byte_slice,
  global_state_schema_num_uint,
  local_state_schema_num_byte_slice,
  local_state_schema_num_uint,
  approval_program,
  clear_state_program
)
SELECT
  tx_id,
  application_id,
  on_completion,
  global_state_schema_num_byte_slice,
  global_state_schema_num_uint,
  local_state_schema_num_byte_slice,
  local_state_schema_num_uint,
  approval_program,
  clear_state_program
FROM public.application_calls
ON CONFLICT (tx_id) DO UPDATE SET
  application_id = EXCLUDED.application_id,
  on_completion = EXCLUDED.on_completion,
  global_state_schema_num_byte_slice = EXCLUDED.global_state_schema_num_byte_slice,
  global_state_schema_num_uint = EXCLUDED.global_state_schema_num_uint,
  local_state_schema_num_byte_slice = EXCLUDED.local_state_schema_num_byte_slice,
  local_state_schema_num_uint = EXCLUDED.local_state_schema_num_uint,
  approval_program = EXCLUDED.approval_program,
  clear_state_program = EXCLUDED.clear_state_program;

-- -------------------------------------------------------
-- 7. application_call_accounts -> algorand_application_call_accounts
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_application_call_accounts (
  tx_id,
  address,
  position
)
SELECT
  tx_id,
  address,
  position
FROM public.application_call_accounts
ON CONFLICT (tx_id, position) DO UPDATE SET
  address = EXCLUDED.address;

-- -------------------------------------------------------
-- 8. application_call_args -> algorand_application_call_args
-- -------------------------------------------------------
-- Note: Ponder schema uses argB64 (camelCase); DB column may be argb64
INSERT INTO :"target_schema".algorand_application_call_args (
  tx_id,
  "argB64",
  position
)
SELECT
  tx_id,
  arg_b64,
  position
FROM public.application_call_args
ON CONFLICT (tx_id, position) DO UPDATE SET
  "argB64" = EXCLUDED."argB64";

-- -------------------------------------------------------
-- 9. application_call_foreign_apps -> algorand_application_call_foreign_apps
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_application_call_foreign_apps (
  tx_id,
  app_id,
  position
)
SELECT
  tx_id,
  app_id,
  position
FROM public.application_call_foreign_apps
ON CONFLICT (tx_id, position) DO UPDATE SET
  app_id = EXCLUDED.app_id;

-- -------------------------------------------------------
-- 10. application_call_foreign_assets -> algorand_application_call_foreign_assets
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_application_call_foreign_assets (
  tx_id,
  asset_id,
  position
)
SELECT
  tx_id,
  asset_id,
  position
FROM public.application_call_foreign_assets
ON CONFLICT (tx_id, position) DO UPDATE SET
  asset_id = EXCLUDED.asset_id;

-- -------------------------------------------------------
-- 11. global_state_deltas -> algorand_global_state_deltas
-- -------------------------------------------------------
-- Note: Ponder schema uses keyB64 (camelCase); DB column may be keyb64
INSERT INTO :"target_schema".algorand_global_state_deltas (
  tx_id,
  "keyB64",
  action,
  uint_value,
  bytes_value,
  position
)
SELECT
  tx_id,
  key_b64,
  action,
  uint_value,
  bytes_value,
  position
FROM public.global_state_deltas
ON CONFLICT (tx_id, position) DO UPDATE SET
  "keyB64" = EXCLUDED."keyB64",
  action = EXCLUDED.action,
  uint_value = EXCLUDED.uint_value,
  bytes_value = EXCLUDED.bytes_value;

-- -------------------------------------------------------
-- 12. asset_balances -> algorand_asset_balances
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_asset_balances (
  asset_id,
  address,
  amount,
  deleted,
  is_frozen,
  opted_in_at_round,
  opted_out_at_round,
  indexed_at
)
SELECT
  asset_id,
  address,
  amount,
  COALESCE(deleted, false),
  COALESCE(is_frozen, false),
  opted_in_at_round,
  opted_out_at_round,
  COALESCE(indexed_at, NOW())
FROM public.asset_balances
ON CONFLICT (asset_id, address) DO UPDATE SET
  amount = EXCLUDED.amount,
  deleted = EXCLUDED.deleted,
  is_frozen = EXCLUDED.is_frozen,
  opted_in_at_round = EXCLUDED.opted_in_at_round,
  opted_out_at_round = EXCLUDED.opted_out_at_round,
  indexed_at = EXCLUDED.indexed_at;

-- -------------------------------------------------------
-- 13. indexer_state -> algorand_indexer_state
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_indexer_state (
  asset_id,
  last_processed_round,
  updated_at
)
SELECT
  asset_id,
  last_processed_round,
  COALESCE(updated_at, NOW())
FROM public.indexer_state
ON CONFLICT (asset_id) DO UPDATE SET
  last_processed_round = EXCLUDED.last_processed_round,
  updated_at = EXCLUDED.updated_at;

-- Done
SELECT 'Migration complete' AS status;
