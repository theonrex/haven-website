import React from "react";
import { useEffect, useState } from "react";
import { WalletDataType } from "@/Types/WalletTypes";
import { FaRegCopy } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useConnect } from "wagmi";

export default function DashboardBody({
  WalletData,
}: {
  WalletData: WalletDataType[] | any;
  }) {
  
  const { connector: activeConnector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  const [copiedTokenAddress, setCopiedTokenAddress] = useState("");

  const handleCopyTokenAddress = (tokenAddress: string) => {
    navigator.clipboard.writeText(tokenAddress);
    setCopiedTokenAddress(tokenAddress);
  };
  
  // console.log("WalletData", WalletData);
  return (
    <div id="myTabContent" className="">
      <div className="p-4 myTabContent">
        <div className="p-4  rounded-lg ">
          <div
            className=" mb-4 flex items-center justify-between  p-4 rounded-lg bg-zinc-950 "
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            Welcome REX
            <ConnectButton />
          </div>
          {/* <div
            className="  mb-4  p-4 rounded-lg bg-gray-50 "
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            {WalletData ? (
              <section className="flex items-center">
                <ul className="flex items-center">
                  <li>Wallet Balance: </li>
                  <li> No of NFTs: </li>
                  <li>Current Network</li>
                  <li>No. of Cryptos</li>
                </ul>
              </section>
            ) : null}
            <section className="px-7">
              <header>Crypto Selling Rate</header>

              <h1>N736.00</h1>
            </section>{" "}
          </div> */}
        </div>
        <div className="buy_sell_crypto_section h-48 mb-4 rounded ">
          <header className="pb-10 text-bold">Coin Allocation</header>
          {isConnected ? (
            <section className="buy_crypto_bg pt-2 ">
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 ">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase"
                            >
                              Pair/ Holdings
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase"
                            >
                              Symbol
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase"
                            >
                              Amount
                            </th>{" "}
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-bold text-gray-100 uppercase"
                            >
                              Contract Address
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-right text-xs font-bold text-gray-100 uppercase"
                            >
                              Spam
                            </th>
                          </tr>
                        </thead>
                        {WalletData ? (
                          WalletData?.map((data: WalletDataType, i: string) => (
                            <tbody
                              key={data.name}
                              className="divide-y divide-gray-200 dark:divide-gray-700"
                            >
                              <tr>
                                <td className="uppercase font-bold px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                                  {data.name}{" "}
                                </td>
                                <td className="capitalize px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                  {data.symbol}{" "}
                                </td>
                                <td className="capitalize px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                  <div className="hs-tooltip  [--trigger:hover]">
                                    <a href="javascript:;">
                                      <span className="w-1-der-white/[.1] dark:hover:text-white">
                                        {data.balance && data.balance.length < 6
                                          ? data.balance
                                          : `${data.balance.slice(0, 6)}....`}
                                      </span>
                                      <div
                                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white  text-sm text-gray-600 rounded-md shadow-md dark:bg-gray-900  dark:text-gray-400"
                                        role="tooltip"
                                      >
                                        {data.balance}
                                      </div>
                                    </a>
                                  </div>
                                </td>{" "}
                                <td className="capitalize px-6 py-4 token_address_flex whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                                  {data.token_address
                                    ? data.token_address.slice(0, 5)
                                    : ""}
                                  ....
                                  <button
                                    onClick={() =>
                                      handleCopyTokenAddress(
                                        data.token_address || ""
                                      )
                                    }
                                    disabled={
                                      copiedTokenAddress === data.token_address
                                    }
                                  >
                                    {copiedTokenAddress ===
                                    data.token_address ? (
                                      <span className="m-4">
                                        <IoMdDoneAll />
                                      </span>
                                    ) : (
                                      <span className="m-8">
                                        <FaRegCopy />
                                      </span>
                                    )}
                                  </button>
                                </td>
                                <td className="capitalize px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <a
                                    className="text-blue-500 hover:text-blue-700"
                                    href="#"
                                  >
                                    {data.possible_spam === true ? (
                                      <p className="red">true</p>
                                    ) : (
                                      <p className="green">False</p>
                                    )}{" "}
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          ))
                        ) : (
                          <div className="text-centter">
                            Loading
                            <div
                              className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-red-600 rounded-full"
                              role="status"
                              aria-label="loading"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          </div>
                        )}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            <div className="text-center flex items-center align-center justify-center flex-col">
              <ConnectButton />
              <span className="pt-2">to continue..</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
