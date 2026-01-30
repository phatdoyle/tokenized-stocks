import { onchainTable } from "ponder";

// Approval event: owner, spender, value
export const approval = onchainTable("ondo_approval", (t) => ({
  id: t.text().primaryKey(),
  tokenName: t.text(),
  contractAddress: t.hex(),
  tokenType: t.text(),
  tokenTypeDetail: t.text(),
  owner: t.hex(),
  spender: t.hex(),
  value: t.bigint(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// ComplianceSet event: oldCompliance, newCompliance
export const complianceSet = onchainTable("ondo_complianceSet", (t) => ({
  id: t.text().primaryKey(),
  tokenName: t.text(),
  contractAddress: t.hex(),
  tokenType: t.text(),
  tokenTypeDetail: t.text(),
  oldCompliance: t.hex(),
  newCompliance: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// Initialized event: version
export const initialized = onchainTable("ondo_initialized", (t) => ({
  id: t.text().primaryKey(),
  tokenName: t.text(),
  contractAddress: t.hex(),
  tokenType: t.text(),
  tokenTypeDetail: t.text(),
  version: t.integer(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// NameChanged event: oldName, newName
export const nameChanged = onchainTable("ondo_nameChanged", (t) => ({
  id: t.text().primaryKey(),
  tokenName: t.text(),
  contractAddress: t.hex(),
  tokenType: t.text(),
  tokenTypeDetail: t.text(),
  oldName: t.text(),
  newName: t.text(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// RoleAdminChanged event: role, previousAdminRole, newAdminRole
export const roleAdminChanged = onchainTable("ondo_roleAdminChanged", (t) => ({
  id: t.text().primaryKey(),
  tokenName: t.text(),
  contractAddress: t.hex(),
  tokenType: t.text(),
  tokenTypeDetail: t.text(),
  role: t.hex(),
  previousAdminRole: t.hex(),
  newAdminRole: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// RoleGranted event: role, account, sender
export const roleGranted = onchainTable("ondo_roleGranted", (t) => ({
  id: t.text().primaryKey(),
  tokenName: t.text(),
  contractAddress: t.hex(),
  tokenType: t.text(),
  tokenTypeDetail: t.text(),
  role: t.hex(),
  account: t.hex(),
  sender: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// RoleRevoked event: role, account, sender
export const roleRevoked = onchainTable("ondo_roleRevoked", (t) => ({
  id: t.text().primaryKey(),
  tokenName: t.text(),
  contractAddress: t.hex(),
  tokenType: t.text(),
  tokenTypeDetail: t.text(),
  role: t.hex(),
  account: t.hex(),
  sender: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// SymbolChanged event: oldSymbol, newSymbol
export const symbolChanged = onchainTable("ondo_symbolChanged", (t) => ({
  id: t.text().primaryKey(),
  tokenName: t.text(),
  contractAddress: t.hex(),
  tokenType: t.text(),
  tokenTypeDetail: t.text(),
  oldSymbol: t.text(),
  newSymbol: t.text(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// TokenPauseManagerSet event: oldTokenPauseManager, newTokenPauseManager
export const tokenPauseManagerSet = onchainTable("ondo_tokenPauseManagerSet", (t) => ({
  id: t.text().primaryKey(),
  tokenName: t.text(),
  contractAddress: t.hex(),
  tokenType: t.text(),
  tokenTypeDetail: t.text(),
  oldTokenPauseManager: t.hex(),
  newTokenPauseManager: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// Transfer event: from, to, value
export const transfer = onchainTable("ondo_transfer", (t) => ({
  id: t.text().primaryKey(),
  tokenName: t.text(),
  contractAddress: t.hex(),
  tokenType: t.text(),
  tokenTypeDetail: t.text(),
  from: t.hex(),
  to: t.hex(),
  value: t.bigint(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));
