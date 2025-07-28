# Environment Variables Setup

Create a `.env` file in the root directory with the following variables:

## RPC Configuration
```
RPC_ENDPOINT=https://api.mainnet-beta.solana.com
RPC_WEBSOCKET_ENDPOINT=wss://api.mainnet-beta.solana.com
```

## Commitment level
```
COMMITMENT=confirmed
```

## Debug mode
```
DEBUG_MODE=false
```

## Retry mode
```
RETRY_MODE=false
```

## Wallet configuration
```
MAIN_WALLET_PRIVATE_KEY=your_main_wallet_private_key_here
```

## Token configuration
```
BUYER_SOL_AMOUNT=0.1
MAKER_WALLET_NUM=50
VOLUME_WALLET_NUM=50
TOKEN_DISTRIBUTION_WALLET_NUM=10
```

## Maker configuration
```
MAKER_RUN_DURATION=300
MAKER_TOKEN_BUY_MIN=0.001
MAKER_TOKEN_BUY_MAX=0.005
```

## Volume configuration
```
VOLUME_DURATION=300
VOLUME_BUY_AMOUNT_MIN=0.001
VOLUME_BUY_AMOUNT_MAX=0.005
```

## Swap configuration
```
SWAP_AMOUNT_MIN=0.001
SWAP_AMOUNT_MAX=0.005
SWAP_AMOUNT_TOTAL=0.1
BUNDLE_SLIPPAGE=50
```

## Global mint for volume process
```
GLOBAL_MINT=So11111111111111111111111111111111111111112
```

## Manual gather configuration
```
MINT_TO_MANUAL_GATHER=your_mint_address_here
```

## Jito configuration
```
BLOCK_ENGINE_URL=https://block-engine.jito.wtf
JITO_KEY=your_jito_key_here
```

## Usage

1. Copy all the variables above to a `.env` file
2. Replace the placeholder values with your actual values
3. Make sure your main wallet has enough SOL for the operations
4. Run the bot with: `npm start`

## Contact Information

- Telegram: @topsecretagent_007
- Twitter: @lendon1114 