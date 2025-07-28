import { AnchorProvider, Program } from "@coral-xyz/anchor";
import { PublicKey } from "@solana/web3.js";
import { getGlobalAccount } from "./globalAccount";
import { getBondingCurveAccount } from "./bondingCurveAccount";

export class PumpFunSDK {
  private provider: AnchorProvider;

  constructor(provider: AnchorProvider) {
    this.provider = provider;
  }

  async getGlobalAccount(commitment?: string) {
    return await getGlobalAccount(this.provider.connection, commitment);
  }

  getBondingCurvePDA(mint: PublicKey): PublicKey {
    // This is a placeholder implementation
    // In a real implementation, this would derive the bonding curve PDA
    return new PublicKey("11111111111111111111111111111111");
  }

  async getBondingCurveAccount(mint: PublicKey, commitment?: string) {
    return await getBondingCurveAccount(this.provider.connection, mint, commitment);
  }
} 