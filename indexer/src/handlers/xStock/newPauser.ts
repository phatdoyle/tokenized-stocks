import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:NewPauser", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockNewPauser).values({
    id: `${transaction.hash}-${log.logIndex}`,
    contractAddress: log.address,
    newPauser: args.newPauser,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
