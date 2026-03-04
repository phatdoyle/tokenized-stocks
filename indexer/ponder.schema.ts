import { onchainTable, primaryKey, index } from "ponder";

// Approval event: owner, spender, value
export const approval = onchainTable("ondo_approval", (t) => ({
  id: t.text().primaryKey(),
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
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
  network: t.text(),
  contractAddress: t.hex(),
  from: t.hex(),
  to: t.hex(),
  value: t.bigint(),
  blockNumber: t.bigint(),
  blockTimestamp: t.bigint(),
  transactionHash: t.hex(),
  logIndex: t.integer(),
}));
// daily_stock_summary - populated by fetch_stocks script from Polygon API
export const dailyStockSummary = onchainTable("daily_stock_summary", (t) => ({
  id: t.integer().primaryKey(),
  ticker: t.text().notNull(),
  closePrice: t.real(),
  high: t.real(),
  low: t.real(),
  numTransactions: t.integer(),
  open: t.real(),
  barTimestamp: t.bigint(),
  volume: t.real(),
  volumeWeightedPrice: t.real(),
}));

// ticker_reference - populated by fetch_ticker_reference script from Polygon API
export const tickerReference = onchainTable("ticker_reference", (t) => ({
  ticker: t.text().primaryKey(),
  requestId: t.text(),
  status: t.text(),
  active: t.boolean(),
  cik: t.text(),
  compositeFigi: t.text(),
  currencyName: t.text(),
  description: t.text(),
  homepageUrl: t.text(),
  listDate: t.text(),
  locale: t.text(),
  market: t.text(),
  marketCap: t.real(),
  name: t.text(),
  phoneNumber: t.text(),
  primaryExchange: t.text(),
  roundLot: t.integer(),
  shareClassFigi: t.text(),
  shareClassSharesOutstanding: t.real(),
  sicCode: t.text(),
  sicDescription: t.text(),
  tickerRoot: t.text(),
  totalEmployees: t.integer(),
  type: t.text(),
  weightedSharesOutstanding: t.real(),
  addressAddress1: t.text(),
  addressCity: t.text(),
  addressPostalCode: t.text(),
  addressState: t.text(),
  brandingIconUrl: t.text(),
  brandingLogoUrl: t.text(),
  updatedAt: t.timestamp().notNull(),
}));

// asset_balances - populated by external script (e.g. Securitize/EXOD balances)
export const assetBalances = onchainTable("asset_balances", (t) => ({
  address: t.text().primaryKey(),
  amount: t.real().notNull(),
}));

// =============================================================
// Algorand Asset Indexer — Flat Table Schema
// =============================================================

// 1. algorand_assets — One row per indexed asset
export const algorandAssets = onchainTable("algorand_assets", (t) => ({
  assetId: t.bigint().primaryKey(),
  createdAtRound: t.bigint(),
  deleted: t.boolean().notNull(),
  creatorAddress: t.text(),
  clawbackAddress: t.text(),
  freezeAddress: t.text(),
  managerAddress: t.text(),
  reserveAddress: t.text(),
  name: t.text(),
  unitName: t.text(),
  total: t.bigint(),
  decimals: t.integer(),
  defaultFrozen: t.boolean(),
  url: t.text(),
  metadataHash: t.text(),
  indexedAt: t.timestamp().notNull(),
}));

// 2. algorand_transactions — One row per transaction (outer and inner)
export const algorandTransactions = onchainTable(
  "algorand_transactions",
  (t) => ({
    id: t.text().primaryKey(),
    assetId: t.bigint().notNull(),
    txType: t.text().notNull(),
    confirmedRound: t.bigint(),
    roundTime: t.timestamp(),
    sender: t.text(),
    fee: t.bigint(),
    firstValid: t.bigint(),
    lastValid: t.bigint(),
    note: t.text(),
    groupHash: t.text(),
    genesisId: t.text(),
    genesisHash: t.text(),
    intraRoundOffset: t.integer(),
    closeRewards: t.bigint(),
    closingAmount: t.bigint(),
    senderRewards: t.bigint(),
    receiverRewards: t.bigint(),
    createdAssetIndex: t.bigint(),
    authAddr: t.text(),
    signatureSig: t.text(),
    parentTxId: t.text(),
    isInnerTxn: t.boolean().notNull(),
    innerTxnIndex: t.integer(),
  }),
  (table) => ({
    assetIdIdx: index().on(table.assetId),
    confirmedRoundIdx: index().on(table.confirmedRound),
    txTypeIdx: index().on(table.txType),
    senderIdx: index().on(table.sender),
    roundTimeIdx: index().on(table.roundTime),
    parentTxIdIdx: index().on(table.parentTxId),
  })
);

// 3. algorand_asset_transfers — tx_type = 'axfer'
export const algorandAssetTransfers = onchainTable(
  "algorand_asset_transfers",
  (t) => ({
    txId: t.text().primaryKey(),
    amount: t.bigint(),
    assetId: t.bigint(),
    receiver: t.text(),
    closeAmount: t.bigint(),
    closeTo: t.text(),
  }),
  (table) => ({
    receiverIdx: index().on(table.receiver),
  })
);

// 4. algorand_asset_freezes — tx_type = 'afrz'
export const algorandAssetFreezes = onchainTable(
  "algorand_asset_freezes",
  (t) => ({
    txId: t.text().primaryKey(),
    address: t.text(),
    assetId: t.bigint(),
    newFreezeStatus: t.boolean(),
  }),
  (table) => ({
    addressIdx: index().on(table.address),
  })
);

// 5. algorand_asset_configs — tx_type = 'acfg'
export const algorandAssetConfigs = onchainTable("algorand_asset_configs", (t) => ({
  txId: t.text().primaryKey(),
  assetId: t.bigint(),
  creatorAddress: t.text(),
  clawbackAddress: t.text(),
  freezeAddress: t.text(),
  managerAddress: t.text(),
  reserveAddress: t.text(),
  name: t.text(),
  unitName: t.text(),
  total: t.bigint(),
  decimals: t.integer(),
  defaultFrozen: t.boolean(),
  url: t.text(),
  metadataHash: t.text(),
}));

// 6. algorand_application_calls — tx_type = 'appl'
export const algorandApplicationCalls = onchainTable(
  "algorand_application_calls",
  (t) => ({
    txId: t.text().primaryKey(),
    applicationId: t.bigint(),
    onCompletion: t.text(),
    globalStateSchemaNumByteSlice: t.integer(),
    globalStateSchemaNumUint: t.integer(),
    localStateSchemaNumByteSlice: t.integer(),
    localStateSchemaNumUint: t.integer(),
    approvalProgram: t.text(),
    clearStateProgram: t.text(),
  }),
  (table) => ({
    applicationIdIdx: index().on(table.applicationId),
  })
);

// 7. algorand_application_call_accounts — The 'accounts' array on appl tx
export const algorandApplicationCallAccounts = onchainTable(
  "algorand_application_call_accounts",
  (t) => ({
    txId: t.text().notNull(),
    address: t.text().notNull(),
    position: t.integer().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.txId, table.position] }),
    txIdIdx: index().on(table.txId),
    addressIdx: index().on(table.address),
  })
);

// 8. algorand_application_call_args — The 'application-args' array (base64)
export const algorandApplicationCallArgs = onchainTable(
  "algorand_application_call_args",
  (t) => ({
    txId: t.text().notNull(),
    argB64: t.text().notNull(),
    position: t.integer().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.txId, table.position] }),
    txIdIdx: index().on(table.txId),
  })
);

// 9. algorand_application_call_foreign_apps
export const algorandApplicationCallForeignApps = onchainTable(
  "algorand_application_call_foreign_apps",
  (t) => ({
    txId: t.text().notNull(),
    appId: t.bigint().notNull(),
    position: t.integer().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.txId, table.position] }),
    txIdIdx: index().on(table.txId),
  })
);

// 10. algorand_application_call_foreign_assets
export const algorandApplicationCallForeignAssets = onchainTable(
  "algorand_application_call_foreign_assets",
  (t) => ({
    txId: t.text().notNull(),
    assetId: t.bigint().notNull(),
    position: t.integer().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.txId, table.position] }),
    txIdIdx: index().on(table.txId),
  })
);

// 11. algorand_global_state_deltas — Key/value state changes from appl tx
export const algorandGlobalStateDeltas = onchainTable(
  "algorand_global_state_deltas",
  (t) => ({
    txId: t.text().notNull(),
    keyB64: t.text().notNull(),
    action: t.integer(),
    uintValue: t.bigint(),
    bytesValue: t.text(),
    position: t.integer().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.txId, table.position] }),
    txIdIdx: index().on(table.txId),
  })
);

// 12. algorand_asset_balances — Current snapshot of accounts holding asset
export const algorandAssetBalances = onchainTable(
  "algorand_asset_balances",
  (t) => ({
    assetId: t.bigint().notNull(),
    address: t.text().notNull(),
    amount: t.bigint(),
    deleted: t.boolean().notNull(),
    isFrozen: t.boolean().notNull(),
    optedInAtRound: t.bigint(),
    optedOutAtRound: t.bigint(),
    indexedAt: t.timestamp().notNull(),
  }),
  (table) => ({
    pk: primaryKey({ columns: [table.assetId, table.address] }),
    addressIdx: index().on(table.address),
    amountIdx: index().on(table.amount),
    isFrozenIdx: index().on(table.isFrozen),
  })
);

// 13. algorand_indexer_state — Tracks last processed round per asset
export const algorandIndexerState = onchainTable("algorand_indexer_state", (t) => ({
  assetId: t.bigint().primaryKey(),
  lastProcessedRound: t.bigint().notNull(),
  updatedAt: t.timestamp().notNull(),
}));

