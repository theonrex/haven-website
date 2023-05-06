import React from "react";
import GetStartedData from "../../JsonData/GetStartedData.json";
import Image from "next/image";
import CryptoImg from "../../public/images/cryptophone.png"

export default function GetStarted() {
  return (
    <div className="rowx get_started">
      <div className="container mx-auto">
        <section className="col50">
          <h4> Create Profile</h4>
          <h1>Easy ways to get Started</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quia
            voluptas quas aspernatur commodi quam iure fugit ipsam, ea, unde hic
            facere. Itaque laboriosam ducimus dolores voluptatem, fugiat quaerat
            vel.
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
          <section className="col50">
            <Image
              src={CryptoImg}
              alt="GetStartedData Image pt-2 pr-4"
              width={900}
            />
          </section>
          <section className="col50">
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
                      <p className="text-slate-300">{data.details}</p>
                    </div>
                  );
                })}
            </div>{" "}
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
              width={900}
            />
          </section>
          <section className="col50">
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
