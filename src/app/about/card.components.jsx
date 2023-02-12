"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function Card(props) {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div
      className="flex cursor-pointer items-center gap-3 rounded border border-accent px-3 py-2 hover:bg-accent hover:bg-opacity-10"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex h-16 w-16 items-center justify-center p-2">
        <Image
          src={props.src}
          alt={props.name}
          className={`drop-shadow-xl transition-all duration-300 ${
            hover ? "h-full w-full" : "h-[85%] w-[85%] "
          } `}
        />
      </div>
      <div className="flex items-center text-lg">
        <div
          className={`font-medium text-secondary transition-all duration-300 ${
            hover ? "-translate-y-3 " : "translate-y-0 "
          }`}
        >
          {props.name}
        </div>
        <div
          className={`${
            hover ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          } absolute mt-6 font-mono text-sm text-accent transition-all duration-300`}
        >
          {props.level}
        </div>
      </div>
    </div>
  );
}
