import React, { useState, useEffect } from "react";
// import { getCoinData, ICoinData } from "../../lib/coinData";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Image from "next/image";
import { ICoinData } from "../../pages/api/coinData";
import { Spinner } from "flowbite-react";
export default function MarketTable() {
  const [coinData, setCoinData] = useState<ICoinData[]>([]);
  const [perPage, setPerPage] = useState<number>(30);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true)

useEffect(() => {
  async function fetchCoinData() {
    const response = await fetch(
      `/api/coinData?page=${pageNumber}&perPage=${perPage}`
    );
    const data = await response.json();
    setCoinData(data);
    setLoading(false)
  }

  const timer = setTimeout(() => {
    fetchCoinData();
  }, 100); // add a delay of 1 second

  return () => clearTimeout(timer);
}, []);
  if (loading === true) return (
    <div className="flex pt-4 justify-center">
      Loading <span className="pl-4"> <Spinner/> </span>
  </div>
)
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg market_table">
        <table className="w-full text-sm text-left text-white-500 dark:text-white-400">
       
          
          {coinData ? (
            <tbody>
              {coinData &&
                coinData?.map((coin, i) => (
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
