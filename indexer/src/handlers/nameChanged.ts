import { ponder } from "ponder:registry";
import schema from "ponder:schema";
import { getTokenMetadata } from "../tokenMetadata";
import { CONTRACT_NAMES } from "../contracts";

for (const contractName of CONTRACT_NAMES) {
  // Skip Robinhood contracts - they don't have NameChanged event in their ABI
  if (contractName.toLowerCase().endsWith("robinhood")) {
    continue;
  }
  
  ponder.on(`${contractName}:NameChanged`, async ({ event, context }) => {
  const { db } = context;
    const { args, block, transaction, log } = event;

    const metadata = getTokenMetadata(log.address) || {
    name: "Unknown",
    type: "Unknown",
    typeDetail: "",
  };

  await db.insert(schema.nameChanged).values({
    id: `${transaction.hash}-${log.logIndex}`,
    tokenName: metadata.name,
      contractAddress: log.address,
    tokenType: metadata.type,
    tokenTypeDetail: metadata.typeDetail,
    oldName: args.oldName,
    newName: args.newName,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
  });
}
