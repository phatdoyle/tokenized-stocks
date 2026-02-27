import { ponder } from "ponder:registry";
import schema from "ponder:schema";
import { getTokenMetadata } from "../../tokenMetadata";

ponder.on("OndoGMToken:Transfer", async ({ event, context }) => {
  const { db } = context;
    const { args, block, transaction, log } = event;

    const metadata = getTokenMetadata(log.address) || {
    name: "Unknown",
    type: "Unknown",
    typeDetail: "",
    ticker: "",
    decimals: 18,
    blockchain: "",
    stockTicker: "",
  };

  await db.insert(schema.transfer).values({
    id: `${transaction.hash}-${log.logIndex}`,
    tokenName: metadata.name,
    ticker: metadata.ticker,
    stockTicker: metadata.stockTicker,
    contractAddress: log.address,
    tokenType: metadata.type,
    tokenTypeDetail: metadata.typeDetail,
    from: args.from,
    to: args.to,
    value: args.value,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
      logIndex: log.logIndex,
    });
});
