import React from "react";
import DashboardSidebar from "@/DashboardSection/dashboardSidebar";
import CryptoPage from "@/DashboardSection/cryptoPage";
export default function crypto() {
  return (
    <div className="rowx">
          <DashboardSidebar />
          <CryptoPage/>
    </div>
  );
}
