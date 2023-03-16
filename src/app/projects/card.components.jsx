import React, { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Card(props) {
  const [hover, setHover] = useState(false);
  const handleClick = (url) => {
    window.open(url, "_blank");
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="w-[330px] bg-accent/10 px-7 py-5 text-secondary transition-all hover:text-accent lg:w-[350px]">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold tracking-wide">
          {props.name}
          {props.ongoing && (
            <span className="font-mono text-base font-medium text-slate-400">
              {" "}
              WIP Project
            </span>
          )}
        </h3>

        <div className="flex cursor-pointer items-end gap-2 text-primary">
          {props.github && (
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              title="View github repository"
              className="transition-all hover:text-accent"
            >
              <FiGithub size={16} />
            </a>
          )}
          {props.web && (
            <a
              href={props.web}
              target="_blank"
              rel="noreferrer"
              title="View finished project"
              className="transition-all hover:text-accent"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <div
        onClick={() => {
          handleClick(props.web ? props.web : props.github);
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative my-2 flex h-[180px] items-center justify-center"
      >
        <Image
          src={props.image}
          alt={props.name}
          className="m-auto h-full w-full rounded-md object-cover"
        />
        {hover ? (
          <div className="absolute top-0 flex h-full w-full items-center justify-center gap-1 bg-base_col_darker/80 text-white">
            {props.web ? "DEMO" : "REPO"}
          </div>
        ) : null}
      </div>
      <p className="max-h-[130px] min-h-[130px] overflow-auto text-sm text-primary">
        {props.desc}
      </p>
      <div className="mt-5 font-mono text-xs text-primary">{props.stack}</div>
    </div>
  );
}
