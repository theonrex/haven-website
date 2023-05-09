import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import axios from "axios";

export interface ICoinData {
  id: string;
  name: string;
  current_price: number;
  market_cap: number;
  image: string;
  market_cap_rank: number;
  symbol: string;
  low_24h: number;
  high_24h: number;
  price_change_percentage_24h: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ICoinData[]>
) {
  const { perPage } = req.query;
  const { pageNumber } = req.query;

  const options = {
    method: "GET",
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${pageNumber}&sparkline=false&locale=en`,
  };
  try {
    const response = await axios.request(options);

    const data = await response.data;

    const coinData = data.map((coin: any) => ({
      market_cap_rank: coin.market_cap_rank,
      id: coin.id,
      name: coin.name,
      current_price: coin.current_price,
      market_cap: coin.market_cap,
      image: coin.image,
      symbol: coin.symbol,
      high_24h: coin.high_24h,
      low_24h: coin.low_24h,
      price_change_percentage_24h: coin.price_change_percentage_24h,
    }));

    res.status(200).json(coinData);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json([]);
  }
}
