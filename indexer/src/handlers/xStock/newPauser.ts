import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:NewPauser", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockNewPauser).values({
    id: `${context.chain.name}-${transaction.hash}-${log.logIndex}`,
    network: context.chain.name,
    contractAddress: log.address,
    newPauser: args.newPauser,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
