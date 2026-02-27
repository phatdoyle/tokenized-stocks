import { createConfig, factory } from "ponder";
import { parseAbiItem } from "viem";

import { OndoGMTokenABI } from "./abis/OndoGMTokenABI";
import { OndoFactoryABI } from "./abis/OndoFactoryABI";
import { xStockABI } from "./abis/xStockABI";

export default createConfig({
  chains: {
    mainnet: {
      id: 1,
      // Use environment variable or fallback to a public RPC endpoint
      // For production, set PONDER_RPC_URL_1 to your preferred RPC provider (Infura, Alchemy, QuickNode, etc.)
      rpc: process.env.PONDER_RPC_URL_1 || "https://eth-mainnet.g.alchemy.com/v2/TljSBj78y_f7Eky0LTdU2",
    },
    arbitrum: {
      id: 42161,
      rpc: process.env.PONDER_RPC_URL_2 || "https://arb-mainnet.g.alchemy.com/v2/TljSBj78y_f7Eky0LTdU2",
    },
  },
  contracts: {
    OndoFactory: {
      address: "0xE60F44AA6b7084d5Ca05D0e9145921e94bc23caB",
      chain: "mainnet",
      abi: OndoFactoryABI,
      startBlock: 22926532, // Adjust this to the block where the factory was deployed
    },
    OndoGMToken: {
      abi: OndoGMTokenABI,
      chain: "mainnet",
      address: factory({
        // Address of the factory contract.
        address: "0xE60F44AA6b7084d5Ca05D0e9145921e94bc23caB",
        // Event from the factory contract ABI which contains the child address.
        event: parseAbiItem("event NewGMTokenDeployed(address indexed proxy, address indexed beacon, string name, string ticker, address compliance, address tokenPauseManager)"),
        // Name of the event parameter containing the child address.
        parameter: "proxy",
      }),
      startBlock: 22926532, // Adjust this to the block where the factory was deployed
    },
    xStockFactory: {
      address: "0x9768D3956a850913fb74594eBf40DFf9b5b576F3",
      chain: "mainnet",
      abi: [
        parseAbiItem("event NewToken(address indexed newToken, string name, string symbol)")
      ],
      startBlock: 22229268,
    },
    xStock: {
      abi: xStockABI,
      chain: "mainnet",
      address: factory({
        // Address of the factory contract.
        address: "0x9768D3956a850913fb74594eBf40DFf9b5b576F3",
        // Event from the factory contract ABI which contains the child address.
        event: parseAbiItem("event NewToken(address indexed newToken, string name, string symbol)"),
        // Name of the event parameter containing the child address.
        parameter: "newToken",
      }),
      startBlock: 22229268,
    },
  },
});
