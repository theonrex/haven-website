import React from "react";
import DashboardBody from "../../DashboardSection/dashboardBody";
import "flowbite"; //tailwind plugin
import axios from "axios";
import DashboardSidebar from "@/DashboardSection/dashboardSidebar";
import { WalletDataType } from "@/Types/WalletTypes";

export default function Dashboard({
  WalletData,
}: {
  WalletData: WalletDataType;
}) {


  return (
    <div className="dashboard_row">
      <DashboardSidebar />
      <DashboardBody WalletData={WalletData} />
    </div>
  );
}

export async function getServerSideProps() {
  const address = "0xbB57fe722f02B9125F626aebCFb8Ca67d81f68EB";
  const chain = "0x13881";
  try {
    const resquest = await fetch(
      `http://localhost:5001/getwalletbalance?address=${address}&chain=${chain}`
    );

    const WalletBalanceData = await resquest.json();
    console.log(WalletBalanceData);
    return {
      props: {
        WalletData: WalletBalanceData,
      },
    };
  } catch (error) {
    console.log("Something went wrong", error);
    return {
      props: {
        response: null,
      },
    };
  }
}
