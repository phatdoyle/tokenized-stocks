import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:DelegateWhitelistChange", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockDelegateWhitelistChange).values({
    id: `${transaction.hash}-${log.logIndex}`,
    contractAddress: log.address,
    whitelistAddress: args.whitelistAddress,
    status: args.status,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
