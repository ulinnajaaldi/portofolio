import type { FC } from "react";
import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import { WORK_EXPERIENCE } from "./config";

export const ContentWorkExperience: FC = () => {
  return (
    <div className="flex flex-col gap-8 text-primary">
      {WORK_EXPERIENCE.map((data, index) => (
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
                {data.company}
              </a>
            </span>
          </h3>
          <p className="pb-5 font-mono text-sm lg:text-base">{data.date}</p>
          <div className="flex list-inside list-disc flex-col gap-4 text-justify text-sm leading-relaxed lg:text-base">
            {data.description}
          </div>
          <div className="mt-2">
            <h4 className="mb-1 font-medium">Technologies used</h4>

            <div className="flex flex-wrap gap-2">
              {data.techs.map((tech, index) => (
                <TooltipProvider key={index} delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="rounded-md bg-accent/10 p-1">
                        <Image
                          src={tech.icon}
                          alt={tech.icon}
                          width={28}
                          height={28}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="bg-primary text-base_col_darker">
                        {tech.name}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
