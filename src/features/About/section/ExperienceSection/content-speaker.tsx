import type { FC } from "react";
import { SPEAKERS } from "./config";

const ContentSpeaker: FC = () => {
  return (
    <div className="flex flex-col gap-8 text-primary">
      {SPEAKERS.map((data, index) => (
        <div key={index}>
          <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
            {data.title}
            <span className="text-base text-accent">
              {" "}
              @
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="text-underline"
              >
                {data.organization}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <p className="pb-5 text-justify text-sm lg:text-base">
            {data.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContentSpeaker;
