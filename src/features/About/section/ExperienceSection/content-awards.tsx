import { DATA_AWARDS } from "../config";

export const ContentAward = () => {
  return (
    <div className="flex flex-col gap-8 text-primary">
      {DATA_AWARDS.map((data, index) => (
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
          <ul className="flex list-inside list-disc flex-col gap-2 text-sm leading-relaxed lg:text-base">
            {data.description}
          </ul>
        </div>
      ))}
    </div>
  );
};
