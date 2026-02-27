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
  ticker: t.text(),
  stockTicker: t.text(),
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

// NewGMTokenDeployed event: proxy, beacon, name, ticker, compliance, tokenPauseManager
export const tokenDeployed = onchainTable("ondo_tokenDeployed", (t) => ({
  id: t.text().primaryKey(),
  proxy: t.hex(),
  beacon: t.hex(),
  name: t.text(),
  ticker: t.text(),
  compliance: t.hex(),
  tokenPauseManager: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// AnotherFactory deployment event (address in data position 0)
export const anotherFactoryDeployed = onchainTable("another_factory_deployed", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  factoryAddress: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock Factory NewToken event: newToken, name, symbol
export const xStockDeployed = onchainTable("xstock_deployed", (t) => ({
  id: t.text().primaryKey(),
  newToken: t.hex(),
  name: t.text(),
  symbol: t.text(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock Approval event: owner, spender, value
export const xStockApproval = onchainTable("xstock_approval", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  owner: t.hex(),
  spender: t.hex(),
  value: t.bigint(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock DelegateModeChange event: delegateMode
export const xStockDelegateModeChange = onchainTable("xstock_delegateModeChange", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  delegateMode: t.boolean(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock DelegateWhitelistChange event: whitelistAddress, status
export const xStockDelegateWhitelistChange = onchainTable("xstock_delegateWhitelistChange", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  whitelistAddress: t.hex(),
  status: t.boolean(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock MultiplierUpdated event: value
export const xStockMultiplierUpdated = onchainTable("xstock_multiplierUpdated", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  value: t.bigint(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock NewBurner event: newBurner
export const xStockNewBurner = onchainTable("xstock_newBurner", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  newBurner: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock NewMinter event: newMinter
export const xStockNewMinter = onchainTable("xstock_newMinter", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  newMinter: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock NewMultiplierUpdater event: newMultiplierUpdater
export const xStockNewMultiplierUpdater = onchainTable("xstock_newMultiplierUpdater", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  newMultiplierUpdater: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock NewPauser event: newPauser
export const xStockNewPauser = onchainTable("xstock_newPauser", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  newPauser: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock NewSanctionsList event: newSanctionsList
export const xStockNewSanctionsList = onchainTable("xstock_newSanctionsList", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  newSanctionsList: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock NewTerms event: newTerms
export const xStockNewTerms = onchainTable("xstock_newTerms", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  newTerms: t.text(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock OwnershipTransferred event: previousOwner, newOwner
export const xStockOwnershipTransferred = onchainTable("xstock_ownershipTransferred", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  previousOwner: t.hex(),
  newOwner: t.hex(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock PauseModeChange event: pauseMode
export const xStockPauseModeChange = onchainTable("xstock_pauseModeChange", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  pauseMode: t.boolean(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock Transfer event: from, to, value
export const xStockTransfer = onchainTable("xstock_transfer", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  from: t.hex(),
  to: t.hex(),
  value: t.bigint(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));

// xStock TransferShares event: from, to, value
export const xStockTransferShares = onchainTable("xstock_transferShares", (t) => ({
  id: t.text().primaryKey(),
  contractAddress: t.hex(),
  from: t.hex(),
  to: t.hex(),
  value: t.bigint(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));
