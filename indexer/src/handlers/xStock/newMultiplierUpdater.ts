import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:NewMultiplierUpdater", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockNewMultiplierUpdater).values({
    id: `${transaction.hash}-${log.logIndex}`,
    contractAddress: log.address,
    newMultiplierUpdater: args.newMultiplierUpdater,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
