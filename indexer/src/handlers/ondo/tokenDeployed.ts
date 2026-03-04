import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("OndoFactory:NewGMTokenDeployed", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.tokenDeployed).values({
    id: `${context.chain.name}-${transaction.hash}-${log.logIndex}`,
    network: context.chain.name,
    proxy: args.proxy,
    beacon: args.beacon,
    name: args.name,
    ticker: args.ticker,
    compliance: args.compliance,
    tokenPauseManager: args.tokenPauseManager,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});

ponder.on("OndoFactoryBinance:NewGMTokenDeployed", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.tokenDeployed).values({
    id: `${context.chain.name}-${transaction.hash}-${log.logIndex}`,
    network: context.chain.name,
    proxy: args.proxy,
    beacon: args.beacon,
    name: args.name,
    ticker: args.ticker,
    compliance: args.compliance,
    tokenPauseManager: args.tokenPauseManager,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});

