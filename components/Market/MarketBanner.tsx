import React from "react";
import Search from "../../features/search/search";
export default function MarketBanner() {
  return (
    <div>
      <section className="flex MarketBanner_Price">
        <div>
          <h1> Market Coins</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          </p>
        </div>
        <div>
          <Search/>
        </div>
      </section>
    </div>
  );
}
