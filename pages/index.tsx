import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import axios from "axios";
import HomeBanner from "@/components/HomeSection/HomeBanner";
import TopMarket from "@/components/HomeSection/TopMarket";
import Header from "../components/header";
import GetStarted from "@/components/HomeSection/GetStarted";
import Partners from "@/components/HomeSection/Partners";
import Services from "@/components/HomeSection/Services";
import Subscribe from "@/components/HomeSection/Subscribe";
import Marquee from "react-fast-marquee";
import { Spinner } from "flowbite-react";

import { TopMarketProps } from "@/Types/TopMarketTypes";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  topCoin,
}: {
  topCoin: TopMarketProps[] | null;
}) {
  return (
    <>
      <main className="pt-26 ">
        <HomeBanner />
        <div>
          <section className="container mx-auto pt-8"></section>

          {topCoin ? (
            <Marquee
              speed={15}
              pauseOnHover={false}
              gradient={false}
              play={true}
            >
              <div className="widget_scroll">
                {topCoin &&
                  topCoin.map((coin, index) => {
                    return (
                      <div className="widget" key={index}>
                        <TopMarket
                          name={coin.name}
                          image={coin.image}
                          symbol={coin.symbol}
                          current_price={coin.current_price}
                          price_change_percentage_24h={
                            coin.price_change_percentage_24h
                          }
                        />
                      </div>
                    );
                  })}
              </div>{" "}
            </Marquee>
          ) : (
            <div className="mx-auto pr-8 pt-8 pl-8 pb-6 flex">
              Loading
              <div role="status" className="pl-4">
                <svg
                  aria-hidden="true"
                  className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          )}

          <section className=""></section>
        </div>
        {/* <TopMarket name={topCoin.name} image={topCoin.image} /> */}
        {/* <section className={styles.container}>
          <main className={styles.main}>
            <Header />
            <Main />
            
          </main>
        </section> */}

        <GetStarted />
        <Services />
        <Partners />
        {/* <Subscribe /> */}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const options = {
    method: "GET",
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${`10`}&page=${`1`}&sparkline=false&locale=en`,
  };
  try {
    const response = await axios.request(options);

    const topCoinData = response.data;
    // console.log(response.data);
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
