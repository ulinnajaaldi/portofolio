"use client";
import React, { useEffect, useState } from "react";
import Card from "./card.components";
import datas from "./datas";

export default function Project() {
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
    <div className="mt-40 flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-semibold leading-relaxed text-secondary md:text-3xl ">
        Past Project Experience
      </h1>
      <p className="text-center text-sm font-medium text-primary md:text-base">
        Discover our track record of success
      </p>
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
      <div className="my-60 flex flex-col items-center justify-center gap-3 text-center md:gap-5">
        <p className="font-mono text-accent">What{`'`}s Next?</p>
        <h1 className="pb-1 text-4xl font-semibold leading-relaxed text-secondary md:text-5xl">
          Get In Touch
        </h1>
        <p className="w-full pb-8 leading-relaxed text-primary md:w-5/6 lg:w-4/6 xl:w-1/2">
          I am currently seeking job opportunities to gain more experience in
          the industry. Whether you have any questions or simply want to say hi,
          I will do my best to get back to you!
        </p>
        <button className="rounded-[4px] border-2 border-accent px-7 py-4 font-mono text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10">
          <a href="mailto:ulinnajaaldi24@gmail.com">Say Hello</a>
        </button>
      </div>
    </div>
  );
}
