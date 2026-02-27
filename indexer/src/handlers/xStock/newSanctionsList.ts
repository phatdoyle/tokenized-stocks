import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:NewSanctionsList", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockNewSanctionsList).values({
    id: `${transaction.hash}-${log.logIndex}`,
    contractAddress: log.address,
    newSanctionsList: args.newSanctionsList,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
