import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:NewBurner", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockNewBurner).values({
    id: `${transaction.hash}-${log.logIndex}`,
    contractAddress: log.address,
    newBurner: args.newBurner,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
