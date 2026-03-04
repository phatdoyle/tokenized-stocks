import { ponder } from "ponder:registry";
import schema from "ponder:schema";
import { getTokenMetadata } from "../../tokenMetadata";

ponder.on("OndoGMToken:Approval", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  const metadata = getTokenMetadata(log.address) || {
    name: "Unknown",
    type: "Unknown",
    typeDetail: "",
  };

  await db.insert(schema.approval).values({
    id: `${context.chain.name}-${transaction.hash}-${log.logIndex}`,
    network: context.chain.name,
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

ponder.on("OndoGMTokenBinance:Approval", async ({ event, context }) => {
  const { db } = context;
  const { args, block, transaction, log } = event;

  const metadata = getTokenMetadata(log.address) || {
    name: "Unknown",
    type: "Unknown",
    typeDetail: "",
  };

  await db.insert(schema.approval).values({
    id: `${context.chain.name}-${transaction.hash}-${log.logIndex}`,
    network: context.chain.name,
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

