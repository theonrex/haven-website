export interface ICoinData {
  id: string;
  name: string;
  current_price: number;
  market_cap: number;
  image: string;
  market_cap_rank: number;
  symbol: string;
  price_change_percentage_24h: number;
}

export const getCoinData = async (perPage: number): Promise<ICoinData[]> => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=1&sparkline=true&locale=en`
    );
    const data = await response.json();

    return data.map((coin: any) => ({
      id: coin.id,
      name: coin.name,
      current_price: coin.current_price,
      market_cap: coin.market_cap,
      image: coin.image,
    }));
  } catch (error) {
    console.error("Error fetching coin data:", error);
    throw error;
  }
};
