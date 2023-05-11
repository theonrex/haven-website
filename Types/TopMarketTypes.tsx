import React from "react";

 interface Coin {
  id: number;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
  market_cap: number;
  high_24h: number;
  low_24h: number;
}


export interface CoinMarketProps extends Array<Coin> {}

export interface TopMarketProps {
  id: number;
  name: string;
  image: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap_rank: number;
  market_cap: number;
  high_24h: number;
  low_24h: number;
}


