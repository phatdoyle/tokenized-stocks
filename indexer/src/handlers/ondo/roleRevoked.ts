import { ponder } from "ponder:registry";
import schema from "ponder:schema";
import { getTokenMetadata } from "../../tokenMetadata";

ponder.on("OndoGMToken:RoleRevoked", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  const metadata = getTokenMetadata(log.address) || {
    name: "Unknown",
    type: "Unknown",
    typeDetail: "",
  };

  await db.insert(schema.roleRevoked).values({
    id: `${context.chain.name}-${transaction.hash}-${log.logIndex}`,
    network: context.chain.name,
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

ponder.on("OndoGMTokenBinance:RoleRevoked", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  const metadata = getTokenMetadata(log.address) || {
    name: "Unknown",
    type: "Unknown",
    typeDetail: "",
  };

  await db.insert(schema.roleRevoked).values({
    id: `${context.chain.name}-${transaction.hash}-${log.logIndex}`,
    network: context.chain.name,
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

