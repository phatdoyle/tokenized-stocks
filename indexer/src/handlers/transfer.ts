import { ponder } from "ponder:registry";
import schema from "ponder:schema";
import { getTokenMetadata } from "../tokenMetadata";
import { CONTRACT_NAMES } from "../contracts";

for (const contractName of CONTRACT_NAMES) {
  ponder.on(`${contractName}:Transfer`, async ({ event, context }) => {
    const { db } = context;
    const { args, block, transaction, log } = event;

    const metadata = getTokenMetadata(log.address) || {
      name: "Unknown",
      type: "Unknown",
      typeDetail: "",
      ticker: "",
      stockTicker: "",
    };

    // Determine if this is a Robinhood token
    const isRobinhoodToken = contractName.endsWith("robinhood");

    if (isRobinhoodToken) {
      // Use robinhood_transfer schema for Robinhood tokens
      await db.insert(schema.robinhoodTransfer).values({
        id: `${transaction.hash}-${log.logIndex}`,
        tokenName: metadata.name,
        contractAddress: log.address,
        tokenType: metadata.type,
        tokenTypeDetail: metadata.typeDetail,
        ticker: metadata.ticker || "",
        stockTicker: metadata.stockTicker || "",
        from: args.from,
        to: args.to,
        value: args.value,
        blockNumber: block.number,
        blockTimestamp: block.timestamp,
        transactionHash: transaction.hash,
        logIndex: log.logIndex,
      });
    } else {
      // Use ondo_transfer schema for Ondo tokens
      await db.insert(schema.transfer).values({
        id: `${transaction.hash}-${log.logIndex}`,
        tokenName: metadata.name,
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
    }
  });
}
