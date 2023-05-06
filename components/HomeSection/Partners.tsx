import React from "react";
import PartnersData from "../../JsonData/PartnersData.json";
import Image from "next/image";
import TheonImg from "../../public/images/theonblock.png";
import Marquee from "react-fast-marquee";

export default function Partners() {
  return (
    <div className="Partners container mx-auto">
      <header>Backed By Investors</header>
      <div className="Partners_img">
        {PartnersData &&
          PartnersData.Partners.map((data, i) => {
            return (
              <Marquee
                speed={15}
                pauseOnHover={false}
                gradient={false}
                play={true}
              >
                <div className="Partners_img" key={i}>
                  <Image
                    src={TheonImg}
                    alt="GetStartedData Image pt-2"
                    width={100}
                  />
                </div>
              </Marquee>
            );
          })}
      </div>

      {/* <img src="rex.com" alt="investors" /> */}
    </div>
  );
}
