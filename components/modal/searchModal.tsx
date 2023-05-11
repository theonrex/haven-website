import React, { useState, useEffect } from "react";
import "flowbite"; //tailwind plugin
import { ICoinData } from "../../pages/api/coinData";
import Image from "next/image";
import { GlobalDataProps } from "@/pages/api/globalData";

export default function searchModal() {
  const [coinData, setCoinData] = useState<ICoinData[]>([]);
  const [perPage, setPerPage] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredCoinData, setFilteredCoinData] = useState<ICoinData[]>([]);
  const [loading, setLoading] = useState(true);
  const [global, setGlobal] = useState<GlobalDataProps[]>([]);

  useEffect(() => {
    async function fetchGlobalCoinData() {
      const response = await fetch(`/api/globalData`);
      const data = await response.json();
      setGlobal(data);

      setLoading(false);
    }

    fetchGlobalCoinData();
  }, []);

  //console.log(global);

  useEffect(() => {
    async function fetchCoinData() {
      const response = await fetch(
        `/api/searchData?page=${pageNumber}&perPage=${perPage}`
      );
      const data = await response.json();
      setCoinData(data);
      setLoading(false);
    }

    fetchCoinData();
  }, []);

  //console.log("coinData", coinData);

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setSearchQuery(query);
    if (query === "") {
      setFilteredCoinData(coinData);
    } else {
      const filteredData = coinData.filter((coin) =>
        coin.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCoinData(filteredData);
    }
  }

  // //console.log(filteredCoinData);

  return (
    <div>
      {/* Modal toggle */}

      <input
        type="text"
        value={searchQuery}
        id="simple-search"
        className="searchQuery bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search"
        required
        onChange={handleSearch}
      />
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>

      <button
        data-modal-target="staticModal"
        data-modal-toggle="staticModal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>
      {/* Main modal */}
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-black rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    id="simple-search"
                    className="searchQuery bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                    onChange={handleSearch}
                  />
                </div>
              </form>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="staticModal"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-6 space-y-6">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
                <table className="w-full text-sm text-left text-white-500 dark:text-white-400">
                  <thead className="text-xs text-white-700 uppercase bg-black-50 dark:bg-black-700 dark:text-white-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
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
                    </tr>
                  </thead>
                  {filteredCoinData ? (
                    <tbody>
                      {filteredCoinData &&
                        filteredCoinData?.map((coin, i) => (
                          <tr
                            className=" border-transparent dark:border-white-700"
                            key={i}
                          >
                            <td className="market_cap_rank px-6 py-4">
                              {" "}
                              <section>{coin.market_cap_rank}</section>
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
                                    ? coin.price_change_percentage_24h.toFixed(
                                        2
                                      )
                                    : coin.price_change_percentage_24h}
                                  %
                                </p>
                              ) : (
                                <p className="red">
                                  {coin.price_change_percentage_24h
                                    ? coin.price_change_percentage_24h.toFixed(
                                        2
                                      )
                                    : coin.price_change_percentage_24h}
                                  %
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
          </div>
        </div>
      </div>
    </div>
  );
}
