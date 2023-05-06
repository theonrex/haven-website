import React from "react";
import servicesData from "../../JsonData/Services.json";
import Image from "next/image";
export default function Services() {
  return (
    <div className="Best_Service container mx-auto">
      <h4>Benefits</h4>
      <header>Our Best Service</header>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
        voluptas, dolor quos qui quas nisi inventore at ad ex maxime! Natus ex
        ratione deserunt quidem error qui nostrum nisi iusto?
      </p>
      <section className="rowx services">
        {servicesData &&
          servicesData.OurServices.map((data, i) => {
            return (
              <div key={i} className="servicesData col30">
                <Image
                  src={data.url}
                  alt="GetStartedData Image pt-4"
                  width={40}
                  height={40}
                />{" "}
                <h1>{data.title}</h1>
                <p>
                  nostrum at ad ex maxime! Natus ex ratione deserunt quidem
                  error qui nostrum nisi iusto?
                </p>
              </div>
            );
          })}
      </section>
    </div>
  );
}
