import { retrieveEnvVariable } from "./utils/utils";

// RPC Configuration
export const RPC_ENDPOINT = retrieveEnvVariable("RPC_ENDPOINT");
export const RPC_WEBSOCKET_ENDPOINT = retrieveEnvVariable("RPC_WEBSOCKET_ENDPOINT");

// Commitment level
export const COMMITMENT = retrieveEnvVariable("COMMITMENT") || "confirmed";

// Debug mode
export const DEBUG_MODE = process.env.DEBUG_MODE === "true";

// Retry mode
export const RETRY_MODE = process.env.RETRY_MODE === "true";

// Wallet configuration
export const MAIN_WALLET_PRIVATE_KEY = retrieveEnvVariable("MAIN_WALLET_PRIVATE_KEY");

// Token configuration
export const BUYER_SOL_AMOUNT = parseFloat(retrieveEnvVariable("BUYER_SOL_AMOUNT"));
export const MAKER_WALLET_NUM = parseInt(retrieveEnvVariable("MAKER_WALLET_NUM"));
export const VOLUME_WALLET_NUM = parseInt(retrieveEnvVariable("VOLUME_WALLET_NUM"));
export const TOKEN_DISTRIBUTION_WALLET_NUM = parseInt(retrieveEnvVariable("TOKEN_DISTRIBUTION_WALLET_NUM"));

// Maker configuration
export const MAKER_RUN_DURATION = parseInt(retrieveEnvVariable("MAKER_RUN_DURATION"));
export const MAKER_TOKEN_BUY_MIN = parseFloat(retrieveEnvVariable("MAKER_TOKEN_BUY_MIN"));
export const MAKER_TOKEN_BUY_MAX = parseFloat(retrieveEnvVariable("MAKER_TOKEN_BUY_MAX"));

// Volume configuration
export const VOLUME_DURATION = parseInt(retrieveEnvVariable("VOLUME_DURATION"));
export const VOLUME_BUY_AMOUNT_MIN = parseFloat(retrieveEnvVariable("VOLUME_BUY_AMOUNT_MIN"));
export const VOLUME_BUY_AMOUNT_MAX = parseFloat(retrieveEnvVariable("VOLUME_BUY_AMOUNT_MAX"));

// Swap configuration
export const SWAP_AMOUNT_MIN = parseFloat(retrieveEnvVariable("SWAP_AMOUNT_MIN"));
export const SWAP_AMOUNT_MAX = parseFloat(retrieveEnvVariable("SWAP_AMOUNT_MAX"));
export const SWAP_AMOUNT_TOTAL = parseFloat(retrieveEnvVariable("SWAP_AMOUNT_TOTAL"));
export const BUNDLE_SLIPPAGE = parseFloat(retrieveEnvVariable("BUNDLE_SLIPPAGE"));

// Global mint for volume process
export const GLOBAL_MINT = retrieveEnvVariable("GLOBAL_MINT");

// Manual gather configuration
export const MINT_TO_MANUAL_GATHER = retrieveEnvVariable("MINT_TO_MANUAL_GATHER");

// Jito configuration
export const BLOCK_ENGINE_URL = retrieveEnvVariable("BLOCK_ENGINE_URL");
export const JITO_KEY = retrieveEnvVariable("JITO_KEY"); 