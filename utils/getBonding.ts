import { Connection, PublicKey } from "@solana/web3.js";
import dotenv from "dotenv";

dotenv.config();

const api = process.env.SHYFT_RPC as string;

const shyft = `https://rpc.ny.shyft.to?api_key=${api}`;
const connection = new Connection(shyft,'confirmed')
export async function getBondingCurveAddress(bondingCurve){
    let solBalance;
      const address = new PublicKey(bondingCurve)
      const systemOwner = await connection.getAccountInfo(address);
    if (systemOwner) {
      solBalance = systemOwner.lamports;
      return Number(solBalance/1000000000).toFixed(2);
      }
    else return 0
  }