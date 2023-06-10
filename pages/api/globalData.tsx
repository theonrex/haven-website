import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";
import axios from "axios";
// Define the shape of the data returned from the API

export interface GlobalDataProps {
  active_cryptocurrencies: number;
  upcoming_icos: number;
  ongoing_icos: number;
  current_price: number;
  ended_icos: number;
  total_market_cap: number;
  markets: number;
  data: any;
}

export default async function handler(res: NextApiResponse<GlobalDataProps[]>) {
  // Define the options for the request to the API
  const options = {
    method: "GET",
    url: "https://api.coingecko.com/api/v3/global",
  };

  try {
    // Make the request to the API

    const response = await axios.request(options);
    // Extract the data from the response

    const data = await response.data;
    // Map the data to match the interface defined above
    console.log(data);
    const GlobalData = data.map((coin: GlobalDataProps) => ({
      active_cryptocurrencies: coin.active_cryptocurrencies,
      upcoming_icos: coin.upcoming_icos,
      ongoing_icos: coin.ongoing_icos,
      current_price: coin.current_price,
      ended_icos: coin.ended_icos,
      markets: coin.markets,
      total_market_cap: coin.total_market_cap,
    }));
    // Return the mapped data

    res.status(200).json(GlobalData);
  } catch (error) {
    // Log any errors and return an empty array

    console.error("Error fetching global coin data:", error);
    res.status(500).json([]);
  }
}
