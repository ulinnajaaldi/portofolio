import React from "react";
import Card from "./card.components";
import datas from "./datas";

export default function Project() {
  const dataArray = Object.keys(datas).map((key) => {
    return { id: key, ...datas[key] };
  });

  const sortedData = dataArray.sort((a, b) => a.id < b.id).reverse();

  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-semibold leading-relaxed text-secondary md:text-3xl ">
        Past Project Experience
      </h1>
      <p className="text-center text-sm font-medium text-primary md:text-base">
        Discover our track record of success
      </p>
      <div className="my-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-4 xl:grid-cols-3">
        {sortedData.map((data) => (
          <div
            key={data.id}
            className="translate-y-0 cursor-pointer transition-all hover:-translate-y-2"
          >
            <Card
              name={data.name}
              github={data.repo}
              web={data.web}
              image={data.image}
              desc={data.desc}
              stack={data.stack}
              ongoing={data.ongoing}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
