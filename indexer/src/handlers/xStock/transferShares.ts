import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:TransferShares", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockTransferShares).values({
    id: `${transaction.hash}-${log.logIndex}`,
    contractAddress: log.address,
    from: args.from,
    to: args.to,
    value: args.value,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
