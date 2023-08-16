"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function CardAbout(props) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="flex items-center gap-2 rounded border border-accent px-2 py-2 hover:bg-accent hover:bg-opacity-10 md:gap-3 lg:px-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex h-12 w-12 items-center justify-center p-0 lg:h-16 lg:w-16 lg:p-2">
        <Image
          src={props.src}
          alt={props.name}
          className={`drop-shadow-xl transition-all duration-300 ${
            hover
              ? "h-[75%] w-[75%] md:h-[85%] md:w-[85%] lg:h-full lg:w-full"
              : "h-[65%] w-[65%] lg:h-[85%] lg:w-[85%] "
          } `}
        />
      </div>
      <div className="flex items-center text-sm md:text-base lg:text-lg">
        <div
          className={`font-medium text-secondary transition-all duration-300 ${
            hover ? "-translate-y-2 md:-translate-y-3 " : "translate-y-0 "
          }`}
        >
          {props.name}
        </div>
        <div
          className={`${
            hover
              ? "translate-x-0 opacity-100"
              : "translate-x-3 opacity-0 md:translate-x-5 lg:translate-x-10"
          } absolute mt-6 font-mono text-[10px] text-accent transition-all duration-300 md:text-xs lg:text-sm`}
        >
          {props.level}
        </div>
      </div>
    </div>
  );
}
