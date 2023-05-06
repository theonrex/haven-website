import Moralis from "moralis";

export default async function moralis(req, res) {
  try {
    await Moralis.start({
      apiKey: process.env.NEXT_PUBLIC_MORALIS,
    });

    const response = await Moralis.EvmApi.token.getWalletTokenBalances({
      chain: "0x13881",
      tokenAddresses: [],
      address: "0x431658B847914D99F61B8509B836D1A75161F3e8",
    });

    res.status(200).json({ raw: response.raw });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
