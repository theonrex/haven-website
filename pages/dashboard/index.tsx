import React, { useEffect, useState } from "react";
import DashboardBody from "../../DashboardSection/dashboardBody";
import "flowbite"; //tailwind plugin
import DashboardSidebar from "@/DashboardSection/dashboardSidebar";
import { WalletDataType } from "@/Types/WalletTypes";
import GetUserAddress from "@/lib/WagmiHooks";
import { useAccount, useNetwork } from "wagmi";
// import { getAccount ,} from "@wagmi/core";

export default function Dashboard() {
  const [WalletData, setWalletData] = useState<WalletDataType | null>(null);
  const { address, isConnecting, isDisconnected } = useAccount();
  const { chain, chains } = useNetwork();

  console.log("chains", chains);
  console.log("chain", chain?.id);

  useEffect(() => {
    const fetchData = async () => {
      const chainID = chain?.id;
      try {
        const response = await fetch(
          `http://localhost:5001/getwalletbalance?address=${address}&chain=${chainID}`
        );
        const data = await response.json();
        setWalletData(data);
      } catch (error) {
        console.log("Something went wrong", error);
      }
    };

    fetchData();
  }, [address]);

  console.log("address", address);
  console.log("WalletData", WalletData);

  return (
    <div className="dashboard_row">
      <DashboardSidebar />
      <DashboardBody WalletData={WalletData} />
    </div>
  );
}
