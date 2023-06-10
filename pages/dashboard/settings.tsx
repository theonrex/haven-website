import React from "react";
import DashboardSidebar from "@/DashboardSection/dashboardSidebar";
import DashboardSettings from "@/DashboardSection/dashboardSettings";
export default function settings() {
    return (
      <div>
        <DashboardSidebar />
            <DashboardSettings/>
    
          </div>
    );
}
