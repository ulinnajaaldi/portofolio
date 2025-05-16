import Image from "next/image";
import { DATA_WORK_EXPERIENCE } from "../config";

export const ContentWorkExperience = () => {
  return (
    <div className="flex flex-col gap-8 text-primary">
      {DATA_WORK_EXPERIENCE.map((data, index) => (
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
          <div className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </div>
          <div className="mt-2">
            <h4 className="mb-1 font-medium">Technologies used</h4>
            <div className="flex flex-wrap gap-2">
              {data.techs.map((tech, index) => (
                <div
                  key={index}
                  className="rounded-md bg-accent/10 p-1"
                  title={tech.name}
                >
                  <div className=" relative h-7">
                    <Image
                      src={tech.icon}
                      alt={tech.icon}
                      width={28}
                      height={28}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
