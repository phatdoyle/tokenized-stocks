import { ponder } from "ponder:registry";
import schema from "ponder:schema";
import { getTokenMetadata } from "../tokenMetadata";
import { CONTRACT_NAMES } from "../contracts";

for (const contractName of CONTRACT_NAMES) {
  // Skip Robinhood contracts - they don't have Approval event in their ABI
  if (contractName.toLowerCase().endsWith("robinhood")) {
    continue;
  }
  
  ponder.on(`${contractName}:Approval`, async ({ event, context }) => {
    const { db } = context;
    const { args, block, transaction, log } = event;

    const metadata = getTokenMetadata(log.address) || {
      name: "Unknown",
      type: "Unknown",
      typeDetail: "",
    };

    await db.insert(schema.approval).values({
      id: `${transaction.hash}-${log.logIndex}`,
      tokenName: metadata.name,
      contractAddress: log.address,
      tokenType: metadata.type,
      tokenTypeDetail: metadata.typeDetail,
      owner: args.owner,
      spender: args.spender,
      value: args.value,
      blockNumber: block.number,
      blockTimestamp: block.timestamp,
      transactionHash: transaction.hash,
      logIndex: log.logIndex,
    });
  });
}
