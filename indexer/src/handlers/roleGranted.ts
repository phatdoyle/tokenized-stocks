import { ponder } from "ponder:registry";
import schema from "ponder:schema";
import { getTokenMetadata } from "../tokenMetadata";
import { CONTRACT_NAMES } from "../contracts";

for (const contractName of CONTRACT_NAMES) {
  ponder.on(`${contractName}:RoleGranted`, async ({ event, context }) => {
  const { db } = context;
    const { args, block, transaction, log } = event;

    const metadata = getTokenMetadata(log.address) || {
    name: "Unknown",
    type: "Unknown",
    typeDetail: "",
  };

  await db.insert(schema.roleGranted).values({
    id: `${transaction.hash}-${log.logIndex}`,
    tokenName: metadata.name,
      contractAddress: log.address,
    tokenType: metadata.type,
    tokenTypeDetail: metadata.typeDetail,
    role: args.role,
    account: args.account,
    sender: args.sender,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
    logIndex: log.logIndex,
  });
  });
}
