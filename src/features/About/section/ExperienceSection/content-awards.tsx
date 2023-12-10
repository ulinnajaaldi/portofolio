export const ContentAward = () => {
  const datas = [
    {
      title:
        "Scholarship for Offline Training Path of Front-End Web Developer Learning",
      url: "https://idcamp.ioh.co.id/news/861/coding-scholarship-offline-training-gratis-idcamp-x-kadin",
      organization: "IDCamp x Kadin",
      date: "May 2023",
      description: (
        <>
          <li>
            Chosen from among hundreds of participants in the Intermediate
            Front-End Web Developer class from Solo city (and its surrounding
            areas) based on the best learning progress and participants'
            commitment to attendance.
          </li>
          <li>Attended a 2-day offline training event in Solo city.</li>
          <li>
            Earned the Intermediate Front End Developer Course from Dicoding due
            to showcasing during the event session.
          </li>
        </>
      ),
    },
    {
      title: "Bapekraf Developer Day 2023 Participant",
      url: "https://bdd.kemenparekraf.go.id/",
      organization: "Kemenparekraf",
      date: "May 2023",
      description: (
        <>
          <li>
            In the BDD 2023 event, I successfully qualified as one of the
            participants who received training course facilitation from the
            Ministry of Tourism and Creative Economy (Kemenparekraf).
          </li>
          <li>
            The training I obtained is the Front End Developer Expert Course
            from Dicoding.
          </li>
        </>
      ),
    },
    {
      title: "Awardee of the Bank Indonesia Scholarship 2023",
      url: "https://kemahasiswaan.ums.ac.id/tawaran-beasiswa-bi-tahun-2023/",
      organization: "Bank Indonesia",
      date: "Apr 2023",
      description: (
        <li>
          Received study allowance from Bank Indonesia and became a member of
          the Generasi Baru Indonesia (GENBI) community.
        </li>
      ),
    },
    {
      title: "1st Runner Up UI/UX Competition",
      url: "https://www.instagram.com/cif_fkiums/",
      organization: "BEM FKI UMS",
      date: "July 2022",
      description: (
        <>
          <li>
            As part of the Communication and Informatic Festival organized by
            BEM FKI, I took part in the UI/UX Competition Project with the theme
            "Menilik Jendela Cakrawala".
          </li>
          <li>
            In a team of three, we developed a project named{" "}
            <a
              href="https://www.figma.com/proto/RID0jaEou3qDxGEepjxSAw/Rawuh?page-id=51%3A2&node-id=51%3A3&starting-point-node-id=51%3A3&scaling=scale-down-width"
              target="_blank"
              rel="noreferrer"
              className="text-underline"
            >
              Rawuh
            </a>
            —a travel website dedicated to showcasing lesser-known tourist
            destinations across Indonesia.
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
          <ul className="flex list-inside list-disc flex-col gap-2 text-sm leading-relaxed lg:text-base">
            {data.description}
          </ul>
        </div>
      ))}
    </div>
  );
};
