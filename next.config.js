/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.coingecko.com", "ipfs.thirdwebcdn.com", "img.icons8.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/account123/**",
      },
      {
        protocol: "https",
        hostname: "assets.coingecko.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
};
const path = require("path");

module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "https://api.coingecko.com/",
      },
      {
        source: "/",
        destination: "http://localhost:3000/",
      },
    ];
  },

  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
