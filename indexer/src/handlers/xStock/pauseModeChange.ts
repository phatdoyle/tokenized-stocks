import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:PauseModeChange", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockPauseModeChange).values({
    id: `${transaction.hash}-${log.logIndex}`,
    contractAddress: log.address,
    pauseMode: args.pauseMode,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
