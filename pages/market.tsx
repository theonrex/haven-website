import React from "react";
import MarketBanner from "@/components/Market/MarketBanner";
import MarketCoins from "@/components/Market/MarketCoins";
import axios from "axios";

export default function market() {
  return (
    <div className="container mx-auto">
      <MarketBanner />
      <MarketCoins />

    </div>
  );
}


export async function getServerSideProps() {
  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=1&per_page=10&order=market_cap_desc",

    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API,
      "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);

    const topCoinData = response.data;
    console.log(response.data);
    return {
      props: {
        topCoin: topCoinData,
        // Total_Listed_Coins: data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        topCoin: [],
        // Total_Listed_Coins: {},
      },
    };
  }
}