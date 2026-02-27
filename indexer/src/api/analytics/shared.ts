import schema from "ponder:schema";
import type { Protocol } from "./helpers.js";

export const ONDO_TRANSFER = schema.transfer;
export const XSTOCK_TRANSFER = schema.xStockTransfer;
export const XSTOCK_TRANSFER_SHARES = schema.xStockTransferShares;
export const XSTOCK_DEPLOYED = schema.xStockDeployed;

export function getTransferTable(protocol: Protocol) {
  return protocol === "ondo" ? ONDO_TRANSFER : XSTOCK_TRANSFER;
}
