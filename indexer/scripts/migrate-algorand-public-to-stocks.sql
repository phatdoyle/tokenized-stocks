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
  "assetId",
  "createdAtRound",
  deleted,
  "creatorAddress",
  "clawbackAddress",
  "freezeAddress",
  "managerAddress",
  "reserveAddress",
  name,
  "unitName",
  total,
  decimals,
  "defaultFrozen",
  url,
  "metadataHash",
  "indexedAt"
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
ON CONFLICT ("assetId") DO UPDATE SET
  "createdAtRound" = EXCLUDED."createdAtRound",
  deleted = EXCLUDED.deleted,
  "creatorAddress" = EXCLUDED."creatorAddress",
  "clawbackAddress" = EXCLUDED."clawbackAddress",
  "freezeAddress" = EXCLUDED."freezeAddress",
  "managerAddress" = EXCLUDED."managerAddress",
  "reserveAddress" = EXCLUDED."reserveAddress",
  name = EXCLUDED.name,
  "unitName" = EXCLUDED."unitName",
  total = EXCLUDED.total,
  decimals = EXCLUDED.decimals,
  "defaultFrozen" = EXCLUDED."defaultFrozen",
  url = EXCLUDED.url,
  "metadataHash" = EXCLUDED."metadataHash",
  "indexedAt" = EXCLUDED."indexedAt";

-- -------------------------------------------------------
-- 2. transactions -> algorand_transactions
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_transactions (
  id,
  "assetId",
  "txType",
  "confirmedRound",
  "roundTime",
  sender,
  fee,
  "firstValid",
  "lastValid",
  note,
  "groupHash",
  "genesisId",
  "genesisHash",
  "intraRoundOffset",
  "closeRewards",
  "closingAmount",
  "senderRewards",
  "receiverRewards",
  "createdAssetIndex",
  "authAddr",
  "signatureSig",
  "parentTxId",
  "isInnerTxn",
  "innerTxnIndex"
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
  "assetId" = EXCLUDED."assetId",
  "txType" = EXCLUDED."txType",
  "confirmedRound" = EXCLUDED."confirmedRound",
  "roundTime" = EXCLUDED."roundTime",
  sender = EXCLUDED.sender,
  fee = EXCLUDED.fee,
  "firstValid" = EXCLUDED."firstValid",
  "lastValid" = EXCLUDED."lastValid",
  note = EXCLUDED.note,
  "groupHash" = EXCLUDED."groupHash",
  "genesisId" = EXCLUDED."genesisId",
  "genesisHash" = EXCLUDED."genesisHash",
  "intraRoundOffset" = EXCLUDED."intraRoundOffset",
  "closeRewards" = EXCLUDED."closeRewards",
  "closingAmount" = EXCLUDED."closingAmount",
  "senderRewards" = EXCLUDED."senderRewards",
  "receiverRewards" = EXCLUDED."receiverRewards",
  "createdAssetIndex" = EXCLUDED."createdAssetIndex",
  "authAddr" = EXCLUDED."authAddr",
  "signatureSig" = EXCLUDED."signatureSig",
  "parentTxId" = EXCLUDED."parentTxId",
  "isInnerTxn" = EXCLUDED."isInnerTxn",
  "innerTxnIndex" = EXCLUDED."innerTxnIndex";

-- -------------------------------------------------------
-- 3. asset_transfers -> algorand_asset_transfers
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_asset_transfers (
  "txId",
  amount,
  "assetId",
  receiver,
  "closeAmount",
  "closeTo"
)
SELECT
  tx_id,
  amount,
  asset_id,
  receiver,
  close_amount,
  close_to
FROM public.asset_transfers
ON CONFLICT ("txId") DO UPDATE SET
  amount = EXCLUDED.amount,
  "assetId" = EXCLUDED."assetId",
  receiver = EXCLUDED.receiver,
  "closeAmount" = EXCLUDED."closeAmount",
  "closeTo" = EXCLUDED."closeTo";

-- -------------------------------------------------------
-- 4. asset_freezes -> algorand_asset_freezes
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_asset_freezes (
  "txId",
  address,
  "assetId",
  "newFreezeStatus"
)
SELECT
  tx_id,
  address,
  asset_id,
  new_freeze_status
FROM public.asset_freezes
ON CONFLICT ("txId") DO UPDATE SET
  address = EXCLUDED.address,
  "assetId" = EXCLUDED."assetId",
  "newFreezeStatus" = EXCLUDED."newFreezeStatus";

-- -------------------------------------------------------
-- 5. asset_configs -> algorand_asset_configs
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_asset_configs (
  "txId",
  "assetId",
  "creatorAddress",
  "clawbackAddress",
  "freezeAddress",
  "managerAddress",
  "reserveAddress",
  name,
  "unitName",
  total,
  decimals,
  "defaultFrozen",
  url,
  "metadataHash"
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
ON CONFLICT ("txId") DO UPDATE SET
  "assetId" = EXCLUDED."assetId",
  "creatorAddress" = EXCLUDED."creatorAddress",
  "clawbackAddress" = EXCLUDED."clawbackAddress",
  "freezeAddress" = EXCLUDED."freezeAddress",
  "managerAddress" = EXCLUDED."managerAddress",
  "reserveAddress" = EXCLUDED."reserveAddress",
  name = EXCLUDED.name,
  "unitName" = EXCLUDED."unitName",
  total = EXCLUDED.total,
  decimals = EXCLUDED.decimals,
  "defaultFrozen" = EXCLUDED."defaultFrozen",
  url = EXCLUDED.url,
  "metadataHash" = EXCLUDED."metadataHash";

-- -------------------------------------------------------
-- 6. application_calls -> algorand_application_calls
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_application_calls (
  "txId",
  "applicationId",
  "onCompletion",
  "globalStateSchemaNumByteSlice",
  "globalStateSchemaNumUint",
  "localStateSchemaNumByteSlice",
  "localStateSchemaNumUint",
  "approvalProgram",
  "clearStateProgram"
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
ON CONFLICT ("txId") DO UPDATE SET
  "applicationId" = EXCLUDED."applicationId",
  "onCompletion" = EXCLUDED."onCompletion",
  "globalStateSchemaNumByteSlice" = EXCLUDED."globalStateSchemaNumByteSlice",
  "globalStateSchemaNumUint" = EXCLUDED."globalStateSchemaNumUint",
  "localStateSchemaNumByteSlice" = EXCLUDED."localStateSchemaNumByteSlice",
  "localStateSchemaNumUint" = EXCLUDED."localStateSchemaNumUint",
  "approvalProgram" = EXCLUDED."approvalProgram",
  "clearStateProgram" = EXCLUDED."clearStateProgram";

-- -------------------------------------------------------
-- 7. application_call_accounts -> algorand_application_call_accounts
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_application_call_accounts (
  "txId",
  address,
  position
)
SELECT
  tx_id,
  address,
  position
FROM public.application_call_accounts
ON CONFLICT ("txId", position) DO UPDATE SET
  address = EXCLUDED.address;

-- -------------------------------------------------------
-- 8. application_call_args -> algorand_application_call_args
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_application_call_args (
  "txId",
  "argB64",
  position
)
SELECT
  tx_id,
  arg_b64,
  position
FROM public.application_call_args
ON CONFLICT ("txId", position) DO UPDATE SET
  "argB64" = EXCLUDED."argB64";

-- -------------------------------------------------------
-- 9. application_call_foreign_apps -> algorand_application_call_foreign_apps
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_application_call_foreign_apps (
  "txId",
  "appId",
  position
)
SELECT
  tx_id,
  app_id,
  position
FROM public.application_call_foreign_apps
ON CONFLICT ("txId", position) DO UPDATE SET
  "appId" = EXCLUDED."appId";

-- -------------------------------------------------------
-- 10. application_call_foreign_assets -> algorand_application_call_foreign_assets
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_application_call_foreign_assets (
  "txId",
  "assetId",
  position
)
SELECT
  tx_id,
  asset_id,
  position
FROM public.application_call_foreign_assets
ON CONFLICT ("txId", position) DO UPDATE SET
  "assetId" = EXCLUDED."assetId";

-- -------------------------------------------------------
-- 11. global_state_deltas -> algorand_global_state_deltas
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_global_state_deltas (
  "txId",
  "keyB64",
  action,
  "uintValue",
  "bytesValue",
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
ON CONFLICT ("txId", position) DO UPDATE SET
  "keyB64" = EXCLUDED."keyB64",
  action = EXCLUDED.action,
  "uintValue" = EXCLUDED."uintValue",
  "bytesValue" = EXCLUDED."bytesValue";

-- -------------------------------------------------------
-- 12. asset_balances -> algorand_asset_balances
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_asset_balances (
  "assetId",
  address,
  amount,
  deleted,
  "isFrozen",
  "optedInAtRound",
  "optedOutAtRound",
  "indexedAt"
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
ON CONFLICT ("assetId", address) DO UPDATE SET
  amount = EXCLUDED.amount,
  deleted = EXCLUDED.deleted,
  "isFrozen" = EXCLUDED."isFrozen",
  "optedInAtRound" = EXCLUDED."optedInAtRound",
  "optedOutAtRound" = EXCLUDED."optedOutAtRound",
  "indexedAt" = EXCLUDED."indexedAt";

-- -------------------------------------------------------
-- 13. indexer_state -> algorand_indexer_state
-- -------------------------------------------------------
INSERT INTO :"target_schema".algorand_indexer_state (
  "assetId",
  "lastProcessedRound",
  "updatedAt"
)
SELECT
  asset_id,
  last_processed_round,
  COALESCE(updated_at, NOW())
FROM public.indexer_state
ON CONFLICT ("assetId") DO UPDATE SET
  "lastProcessedRound" = EXCLUDED."lastProcessedRound",
  "updatedAt" = EXCLUDED."updatedAt";

-- Done
SELECT 'Migration complete' AS status;
