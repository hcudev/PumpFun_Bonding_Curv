# Welcome to PumpFun Bonding Curve Monitoring Script

This script monitors bonding curve of Pumpfun tokens and alerts when any token reachs 97.7% of the bonding curve. 
To get monitoring signal on your Telegram channel, you need to add your Telegram Bot to your channel as an Administrator.

## Prerequisites

- [NodeJS](https://nodejs.org/en/download) (> v18.0.0)
- Shyft RPC, Shyft GRPC, Telegram Bot Token, 


## Quick Start

1. **Clone and Install**
   ```bash
   git clone [your-repository-url]
   cd [project-directory]
   ```

2. **Configure Environment**
   
   Create a `.env` file in the root directory:
   ```env
    SHYFT_RPC=""
    SHYFT_GRPC=""
    TELEGRAM_BOT_TOKEN=""
   ```

3. **Build and Run**
   ```bash
   # Install dependencies
   npm install

   # Run in development mode
   ts-node index.ts
   ```

## Feature

| Variable | Description | Required |
|----------|-------------|----------|
| `LANGUAGE` | Typescript | Yes |
| `BOT` | Telegram Bot, Telegram Channel | Yes |
| `ENVIRONMENT` | Shyft RPC, Shyft gRPC | Yes |
