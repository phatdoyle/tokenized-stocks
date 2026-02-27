import { ponder } from "ponder:registry";
import schema from "ponder:schema";
import { getTokenMetadata } from "../../tokenMetadata";

ponder.on("OndoGMToken:RoleAdminChanged", async ({ event, context }) => {
  const { db } = context;
    const { args, block, transaction, log } = event;

    const metadata = getTokenMetadata(log.address) || {
    name: "Unknown",
    type: "Unknown",
    typeDetail: "",
  };

  await db.insert(schema.roleAdminChanged).values({
    id: `${transaction.hash}-${log.logIndex}`,
    tokenName: metadata.name,
      contractAddress: log.address,
    tokenType: metadata.type,
    tokenTypeDetail: metadata.typeDetail,
    role: args.role,
    previousAdminRole: args.previousAdminRole,
    newAdminRole: args.newAdminRole,
    blockNumber: block.number,
    blockTimestamp: block.timestamp,
    transactionHash: transaction.hash,
      logIndex: log.logIndex,
    });
});
