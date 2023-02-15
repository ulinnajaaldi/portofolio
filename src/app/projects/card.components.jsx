import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function Card(props) {
  return (
    <div className="w-[330px] bg-accent bg-opacity-10 px-7 py-5 text-secondary transition-all hover:text-accent lg:w-[350px]">
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
          <a
            href={props.github}
            target="blank"
            className="transition-all hover:text-accent"
          >
            <FiGithub size={16} />
          </a>
          {props.web && (
            <a
              href={props.web}
              target="blank"
              className="transition-all hover:text-accent"
            >
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <div className="auto my-2 flex h-[180px] justify-center">
        <Image
          src={props.image}
          alt={props.name}
          className="m-auto h-full w-full rounded-md object-cover"
        />
      </div>
      <p className="max-h-[130px] min-h-[130px] overflow-auto text-sm text-primary">
        {props.desc}
      </p>
      <div className="mt-5 font-mono text-xs text-primary">{props.stack}</div>
    </div>
  );
}
