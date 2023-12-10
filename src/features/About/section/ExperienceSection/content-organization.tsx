export const ContentOrganization = () => {
  const datas = [
    {
      title: "Staff of Media and Publications",
      url: "https://www.instagram.com/genbi_solo/?hl=id",
      organization: "GENBI SOLO",
      date: "Apr 2023 - Present",
      description: (
        <>
          <li>
            Being selected as one of the recipients of the Bank Indonesia
            Scholarship in 2023 is a source of pride for myself. Additionally,
            Bank Indonesia runs a program called the "Generasi Baru Indonesia"
            (Genbi), which aims to cultivate a young generation with leadership
            qualities, creativity, innovation, and integrity.
          </li>
        </>
      ),
    },
    {
      title: "Staff of Interest and Talent",
      url: "https://www.instagram.com/himatifums/",
      organization: "HIMATIF UMS",
      date: "Dec 2020 - Dec 2022",
      description: (
        <>
          <li>
            In the Student Association of Informatics Engineering at UMS
            (HIMATIF), I hold a position as the coordinator of the Interest and
            Talent Division, which oversees various work programs such as
            Himatif's social media management, Himatif Portable Club (HPC),
            Profile Video creation, Parade of Informatics Engineering (PARTI),
            and UNCORE Digital Magazine.
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
            (PARTI), where I served as the Head of Publication and
            Documentation, responsible for organizing all the event's visual
            documentation and preparations, including photos, videos,{" "}
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
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-8 text-primary">
      {datas.map((data, index) => (
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
          <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
            {data.description}
          </ul>
        </div>
      ))}
    </div>
  );
};
