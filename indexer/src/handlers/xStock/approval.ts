import { ponder } from "ponder:registry";
import schema from "ponder:schema";

ponder.on("xStock:Approval", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  await db.insert(schema.xStockApproval).values({
    id: `${context.chain.name}-${transaction.hash}-${log.logIndex}`,
    network: context.chain.name,
    contractAddress: log.address,
    owner: args.owner,
    spender: args.spender,
    value: args.value,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
});
