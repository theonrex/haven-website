import { Html, Head, Main, NextScript } from "next/document";
import Layout from "@/Layout/layout";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Layout children />

        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
