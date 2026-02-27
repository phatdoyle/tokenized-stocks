import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:DelegateModeChange", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockDelegateModeChange).values({
    id: `${transaction.hash}-${log.logIndex}`,
    contractAddress: log.address,
    delegateMode: args.delegateMode,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
