export const ContentOrganization = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Staff
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://www.instagram.com/himatifums/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Himatif UMS
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Dec 2020 - Dec 2022</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          In the Student Association of Informatics Engineering at UMS
          (HIMATIF), I hold a position as the coordinator of the Interest and
          Talent Division, which oversees various work programs such as Himatif
          {`'`}s social media management, Himatif Portable Club (HPC), Profile
          Video creation, Parade of Informatics Engineering (PARTI), and UNCORE
          Digital Magazine.
        </li>
        <li>
          One of the biggest events is the{" "}
          <a
            href="https://www.instagram.com/parti.ums/"
            className="text-underline"
            target="_blank"
            rel="noreferrer"
          >
            Parade of Informatics Engineering
          </a>
          (PARTI), where I served as the Head of Publication and Documentation,
          responsible for organizing all the event{`'`}s visual documentation
          and preparations, including photos, videos,{" "}
          <a
            href="https://www.instagram.com/p/CiZACw0JXmC/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            3D mascot
          </a>
          , and media streaming.
        </li>
      </ul>
    </div>
  );
};
