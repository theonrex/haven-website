import React, { useState, useEffect } from "react";
// import { getCoinData, ICoinData } from "../../lib/coinData";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import { ICoinData } from "../../pages/api/coinData";
import { Spinner } from "flowbite-react";

import { CoinMarketProps } from "@/Types/TopMarketTypes";

interface marketProps {
  marketCoins: CoinMarketProps;
}

export default function MarketTable({ marketCoins }: marketProps) {
  const [coinData, setCoinData] = useState(marketCoins);
  const [perPage, setPerPage] = useState<number>(30);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  //console.log(marketCoins);

  useEffect(() => {
    if (marketCoins) {
      setCoinData(marketCoins);
      setLoading(false);
    }
  }, [marketCoins]);

  useEffect(() => {
    setPageNumber(1); // update pageNumber to 1
  }, []);

  function toggleOrder() {}
  // const perPage = 30;
  // const totalListedCoins = totalCrypto?.data?.active_cryptocurrencies;

  // const result = totalListedCoins / perPage;
  //console.log(coinData);
  if (loading === true)
    return (
      <div className="flex pt-4 justify-center">
        Loading{" "}
        <span className="pl-4">
          {" "}
          <Spinner />{" "}
        </span>
      </div>
    );

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg market_table">
        <table className="w-full text-sm text-left text-white-500 dark:text-white-400">
          <thead className="text-xs text-white-700 uppercase bg-white-50 dark:bg-white-700 dark:text-white-400">
            <tr>
              <th scope="col" onClick={toggleOrder} className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Coin Name
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Coin Price
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  24H%
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>

              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  24H High
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  24H Low
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 ml-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 320 512"
                    >
                      <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                    </svg>
                  </a>
                </div>
              </th>
              {/* <th scope="col" className="px-6 py-3">
                <div className="flex items-center high_24h">Chart</div>
              </th> */}
            </tr>
          </thead>
          {marketCoins.length > 0 ? (
            <tbody>
              {marketCoins &&
                marketCoins?.map((coin, i) => (
                  <tr
                    className=" border-transparent dark:border-white-700"
                    key={i}
                  >
                    <td className="market_cap_rank px-6 py-4">
                      {" "}
                      <section>
                        <AiOutlineStar />
                        {coin.market_cap_rank}
                      </section>
                    </td>
                    <td className="px-6 py-4 symbol">
                      <section>
                        <Image
                          src={coin.image}
                          alt={`${coin.name} image`}
                          height={20}
                          width={20}
                          className="mr-4"
                        />
                        <p className="mr-4">{coin.name}</p>
                        <p className="coin_symbol">{coin.symbol}</p>
                      </section>
                    </td>{" "}
                    <td className="market_cap_rank px-6 py-4">
                      $ {coin.current_price}
                    </td>
                    <td className="px-6 py-4">
                      {coin.price_change_percentage_24h >= 0 ? (
                        <p className="green">
                          +
                          {coin.price_change_percentage_24h
                            ? coin.price_change_percentage_24h.toFixed(2)
                            : coin.price_change_percentage_24h}
                          %
                        </p>
                      ) : (
                        <p className="red">
                          {coin.price_change_percentage_24h
                            ? coin.price_change_percentage_24h.toFixed(2)
                            : coin.price_change_percentage_24h}
                          %
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4 high_24h">
                      {coin.high_24h > 0 ? (
                        <p className="">
                          {" "}
                          {coin.high_24h
                            ? coin.high_24h.toLocaleString()
                            : coin.high_24h}
                        </p>
                      ) : (
                        <p className="">
                          {" "}
                          {coin.high_24h
                            ? coin.high_24h.toLocaleString()
                            : coin.high_24h}
                        </p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {coin.high_24h > 0 ? (
                        <p className="">
                          {" "}
                          {coin.high_24h
                            ? coin.high_24h.toLocaleString()
                            : coin.high_24h}
                        </p>
                      ) : (
                        <p className="">
                          {" "}
                          {coin.high_24h
                            ? coin.high_24h.toLocaleString()
                            : coin.high_24h}
                        </p>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          ) : null}
        </table>
      </div>
    </div>
  );
}
