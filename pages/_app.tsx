import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/dashboard.css";
import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/Home.css";
import "../styles/market.css";
import Head from "next/head";
import Navbar from "../Layout/layout";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { store } from "../store";
import { Provider } from "react-redux";
const { chains, provider } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "Haven Swap",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("preline");
  }, []);

  return (
    <>
      <Provider store={store}>
        <Head>
          <meta
            name="description"
            content="Welcome to Haven Swap, your go-to source for all things Blockchain. Our website is designed to provide you with everything you need to stay up-to-date on the world of digital currencies, from real-time price updates to the latest news and articles."
          />

          <link rel="shortcut icon" href="/havenlogo.png" />
          <title> Haven Swap</title>
        </Head>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Navbar />
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </Provider>
    </>
  );
}
