import React, { useState, useEffect } from "react";
import { Props } from "@/Types/TopMarketTypes";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";



export default function TopMarket({
  image,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
}: Props) {
  return (
    <section className="">
      <div className="flex justify-start items-center pb-2">
        <Image
          src={image}
          alt={`${name} image`}
          width={30}
          height={30}
          className="pr-2.5 TopMarket_img"
        />
        <h2 className="pr-2.5 font-bold">{name}</h2>
        <h3 className=" capitalize bg-orange-600 mx-auto px-2 rounded-md">
          {symbol}
        </h3>
      </div>
      <div className="widget_price flex justify-start items-center pl-2">
        <h2 className="pr-2.5">$ {current_price}</h2>
        <div className="pr-2.5">
          {price_change_percentage_24h > 0 ? (
            <section className="green flex items-center">
              <h3 className="pr-2">
                {price_change_percentage_24h.toFixed(2)}%
              </h3>{" "}
              <BiTrendingUp />
            </section>
          ) : (
            <section className="red flex items-center">
              <h3 className="pr-2">
                +{price_change_percentage_24h.toFixed(2)}%
              </h3><BiTrendingDown /> 
            </section>
          )}
        </div>
        {/* <Image
          src={image}
          alt={`${name} image`}
          width={30}
          height={30}
          className="pr-2.5"
        /> */}
      </div>
    </section>
  );
}
