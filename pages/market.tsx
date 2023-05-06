import React from "react";
import MarketBanner from "@/components/Market/MarketBanner";
import MarketCoins from "@/components/Market/MarketCoins";
// import FavoriteCoins from "@/components/Favorite/FavoriteCoins";
// import PaginatedItems from "@/components/pagenation/MarketPage";
export default function market() {
  return (
    <div className="container mx-auto">
      <MarketBanner />
      <MarketCoins />
      {/* <FavoriteCoins /> */}

      {/* <PaginatedItems itemsPerPage={4} /> */}
    </div>
  );
}
