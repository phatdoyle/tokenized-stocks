import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStockFactory:NewToken", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockDeployed).values({
    id: `${transaction.hash}-${log.logIndex}`,
    newToken: args.newToken,
    name: args.name,
    symbol: args.symbol,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
