import React from "react";
import Image from "next/image";
import HomeBannerImage from "../../public/images/havenimg.webp";
import { Button } from "flowbite-react";
import ArrowIcon from "../../public/icons/Arrow_03.png";

export default function HomeBanner() {
  return (
    <div className=" mx-auto HomeBanner rowx ">
      <section className="col50">
        <header className="Welcome ">
          <h1 className="">
            <span className="arrow_icon relative">
              Welcome to
              <Image
                src={ArrowIcon}
                alt="arrow icon"
                width={120}
                className="absolute "
              />
            </span>
            <br /> <span>Crypto & NFT trading</span> <br /> Market Hub
          </h1>
        </header>
        <p>
          Welcome to the Crypto & NFT Market Hub, your go-to destination for all
          things related to cryptocurrency and NFTs. Explore the exciting world
          of digital assets, stay updated with market trends, and gain valuable
          insights into the latest developments. Join us on this transformative
          journey and unlock the potential of the blockchain revolution.
        </p>
        <div className="orange_btn_div">
          <Button className="orange_btn mt-6">Start Trading</Button>
        </div>{" "}
      </section>
      <section className="col50">
     
        <Image
          src={HomeBannerImage}
          alt="HomeBannerImage"
          width={1000}
          className="HomeBannerImage"
        />
      </section>
    </div>
  );
}
