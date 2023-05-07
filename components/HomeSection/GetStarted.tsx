import React from "react";
import GetStartedData from "../../JsonData/GetStartedData.json";
import Image from "next/image";
import CryptoImg from "../../public/images/cryptophone.png";
import CryptoImg1 from "../../public/images/havenmobile.webp";
import CryptoImg2 from "../../public/images/havenpng.webp";

export default function GetStarted() {
  return (
    <div className="rowx get_started">
      <div className="container mx-auto">
        <section className="col50">
          <h4> Create Profile</h4>
          <h1>Easy ways to get Started</h1>
          <p>
            Looking to dip your toes into the world of cryptocurrency and NFT
            trading? Look no further than Market Hub with HavenSwap! Our
            user-friendly platform is the perfect place for beginners to start
            their trading journey.
          </p>
          <button className="Start_trading_btn"> Start Trading</button>
        </section>
        <section className="col50">
          <div className="rowx GetStarted">
            {GetStartedData &&
              GetStartedData.GetStartedData.map((data, index) => {
                return (
                  <div key={index} className=" GetStartedData">
                    <Image
                      src={data.url}
                      alt="GetStartedData Image pt-2"
                      width={40}
                      height={40}
                    />

                    <h3 className="pb-2"> {data.title}</h3>
                    <p className="text-slate-300">{data.details}</p>
                  </div>
                );
              })}
          </div>{" "}
        </section>
      </div>
      {/* crypto  */}
      <div className="rowx get_started">
        <div className="container mx-auto">
          <section className="col50 pr-20">
            <div className="  Crypto_Premium">
              <header>Features</header>
              <h1>Crypto Premium</h1>
              {GetStartedData &&
                GetStartedData.GetStartedData.map((data, index) => {
                  return (
                    <div key={index} className=" Crypto_PremiumData">
                      <section>
                        <Image
                          src={data.url}
                          alt="GetStartedData Image pt-2 pr-4"
                          width={40}
                          height={40}
                        />

                        <h3 className="pb-2"> {data.title}</h3>
                      </section>
                      <p className="text-slate-300 pl-8">{data.details}</p>
                    </div>
                  );
                })}
            </div>{" "}
          </section>

          <section className="col50">
            <Image
              src={CryptoImg1}
              alt="GetStartedData Image pt-2 pr-4"
              width={600}
            />
          </section>
        </div>
      </div>

      {/* nft */}
      <div className="rowx get_started">
        <div className="container mx-auto">
          <section className="col50">
            <Image
              src={CryptoImg}
              alt="GetStartedData Image pt-2 pr-4"
              width={700}
            />
          </section>
          <section className="col50">
            <div className="  Crypto_Premium">
              <header>Features</header>
              <h1>NFTs Premium</h1>
              {GetStartedData &&
                GetStartedData.GetStartedData.map((data, index) => {
                  return (
                    <div key={index} className=" Crypto_PremiumData">
                      <section>
                        <Image
                          src={data.url}
                          alt="GetStartedData Image pt-2 pr-4"
                          width={40}
                          height={40}
                        />

                        <h3 className="pb-2"> {data.title}</h3>
                      </section>
                      <p className="text-slate-300">{data.details}</p>
                    </div>
                  );
                })}
            </div>{" "}
          </section>
        </div>
      </div>
    </div>
  );
}
