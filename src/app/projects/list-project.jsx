"use client";
import React, { useState, useEffect } from "react";
import Card from "./card.components";
import datas from "./datas";

export default function ListProject() {
  const [numToShow, setNumToShow] = useState(6);

  const dataArray = Object.keys(datas).map((key) => {
    return { id: key, ...datas[key] };
  });

  const sortedData = dataArray.sort((a, b) => a.id < b.id).reverse();

  const handleShowMore = () => {
    setNumToShow(numToShow + 6);
  };

  useEffect(() => {
    if (numToShow > sortedData.length) {
      setNumToShow(sortedData.length);
    }
  }, [numToShow, sortedData.length]);

  const shouldShowMore = () => {
    return numToShow < sortedData.length;
  };

  const handleShowLess = () => {
    setNumToShow(6);
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="my-10 grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-4 xl:grid-cols-3">
        {sortedData.slice(0, numToShow).map((data) => (
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
      <button
        onClick={shouldShowMore() ? handleShowMore : handleShowLess}
        className="rounded-[4px] border-2 border-accent px-7 py-4 font-mono text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
      >
        {shouldShowMore() ? "Show More" : "Show Less"}
      </button>
    </div>
  );
}
