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
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import {
  arbitrum,
  arbitrumGoerli,
  aurora,
  auroraTestnet,
  avalanche,
  avalancheFuji,
  baseGoerli,
  bronos,
  bronosTestnet,
  bsc,
  bscTestnet,
  canto,
  celo,
  celoAlfajores,
  fantom,
  fantomTestnet,
  foundry,
  goerli,
  hardhat,
  iotex,
  iotexTestnet,
  localhost,
  mainnet,
  metis,
  metisGoerli,
  moonbaseAlpha,
  moonbeam,
  moonriver,
  okc,
  optimism,
  optimismGoerli,
  polygon,
  polygonMumbai,
  skaleBlockBrawlers,
  skaleCalypso,
  skaleCalypsoTestnet,
  skaleChaosTestnet,
  skaleCryptoBlades,
  skaleCryptoColosseum,
  skaleEuropa,
  skaleEuropaTestnet,
  skaleExorde,
  skaleHumanProtocol,
  skaleNebula,
  skaleNebulaTestnet,
  skaleRazor,
  skaleTitan,
  skaleTitanTestnet,
  sepolia,
  taraxa,
  taraxaTestnet,
  telos,
  telosTestnet,
  zkSync,
  zkSyncTestnet,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { store } from "../store";
import { Provider } from "react-redux";
const { chains, provider } = configureChains(
  [
    arbitrum,
    arbitrumGoerli,
    aurora,
    auroraTestnet,
    avalanche,
    avalancheFuji,
    baseGoerli,
    bronos,
    bronosTestnet,
    bsc,
    bscTestnet,
    canto,
    celo,
    celoAlfajores,
    fantom,
    fantomTestnet,
    foundry,
    goerli,
    hardhat,
    iotex,
    iotexTestnet,
    localhost,
    mainnet,
    metis,
    metisGoerli,
    moonbaseAlpha,
    moonbeam,
    moonriver,
    okc,
    optimism,
    optimismGoerli,
    polygon,
    polygonMumbai,
    skaleBlockBrawlers,
    skaleCalypso,
    skaleCalypsoTestnet,
    skaleChaosTestnet,
    skaleCryptoBlades,
    skaleCryptoColosseum,
    skaleEuropa,
    skaleEuropaTestnet,
    skaleExorde,
    skaleHumanProtocol,
    skaleNebula,
    skaleNebulaTestnet,
    skaleRazor,
    skaleTitan,
    skaleTitanTestnet,
    sepolia,
    taraxa,
    taraxaTestnet,
    telos,
    telosTestnet,
    zkSync,
    zkSyncTestnet,
  ],
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
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              accentColor: "#7b3fe4",
              accentColorForeground: "white",
              borderRadius: "small",
              fontStack: "system",
              overlayBlur: "small",
            })}
          >
            <Navbar />
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      </Provider>
    </>
  );
}
