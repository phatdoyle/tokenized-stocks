import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:MultiplierUpdated", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockMultiplierUpdated).values({
    id: `${transaction.hash}-${log.logIndex}`,
    contractAddress: log.address,
    value: args.value,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
