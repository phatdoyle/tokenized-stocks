import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:NewTerms", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockNewTerms).values({
    id: `${transaction.hash}-${log.logIndex}`,
    contractAddress: log.address,
    newTerms: args.newTerms,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
