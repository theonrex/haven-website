import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import MarketBanner from "@/components/Market/MarketBanner";
import axios from "axios";
import MarketTable from "@/components/Market/MarketTable";
import { CoinMarketProps } from "@/Types/TopMarketTypes";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextPageContext } from "next";
import Pagination from "react-js-pagination";
import { useParams } from "react-router-dom";
import Link from "next/link";
interface marketProps {
  marketCoins: CoinMarketProps;
}

export default function market({ marketCoins }: marketProps) {
  const [markets, setMarkets] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState(markets);
  const [search, setSearch] = useState("");
  // const [page, setPage] = useState(5);
  const [limit, setLimit] = useState(10);
  const [totalCrypto, setTotalCrypto] = useState(1000);
  const [data, setData] = useState(false);

  const { page } = useParams();

  console.log(page);
  const router = useRouter();
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (page: number) => {
    console.log(`active page is ${page}`);
    setActivePage(page);
    router.push(`market/?page=${page}`, undefined);
  };

 useEffect(() => {
   const { page } = router.query;
   if (page) {
     setActivePage(Number(page));
   }
 }, [router.query]);

  return (
    <div className="container mx-auto">
      <MarketBanner />
      <MarketTable marketCoins={marketCoins} />
      <div className="container">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={5}
          totalItemsCount={1900}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          lastPageText={""}
          firstPageText={""}
        />
      </div>{" "}
    </div>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  try {
    const { page } = context.query;
    console.log(page);

    const request = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C1y`
    );

    console.log("request", request);

    const coinPageData = await request.json();

    return {
      props: {
        marketCoins: coinPageData,
      },
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      marketCoins: [],
    },
  };
}

// export async function getServerSideProps(context: NextPageContext) {
//   const page = context.query.page;

//   const options = {
//     method: "GET",
//     // url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=${page}&sparkline=false&locale=en`,
//     url: `https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&page=${page}&per_page=40&order=market_cap_desc`,
//     headers: {
//       "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RAPID_API}`,
//       "X-RapidAPI-Host": "coingecko.p.rapidapi.com",
//     },
//   };
//   try {
//     const response = await axios.request(options);

//     const marketCoinsData = response.data;
//     // console.log(response.data);
//     return {
//       props: {
//         marketCoins: marketCoinsData,
//         // Total_Listed_Coins: data,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return {
//       props: {
//         marketCoins: [],
//         // Total_Listed_Coins: {},
//       },
//     };
//   }
// }
