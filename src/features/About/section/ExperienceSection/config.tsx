import {
  ICBootstrap,
  ICExpress,
  ICHtml,
  ICJavascript,
  ICLaravel,
  ICMaterialUI,
  ICMongodb,
  ICNextJS,
  ICNodeJS,
  ICReact,
  ICSass,
  ICTailwind,
  ICWebpack,
} from "@/constants/icons";

export const ORGANIZATIONS = [
  {
    title: "Head of Department Web Development",
    url: "https://www.instagram.com/gdsc_ums/",
    organization: "Google DSC Universitas Muhammadiyah Surakarta (UMS)",
    date: "Aug 2023 - Jun 2024",
    description: (
      <>
        <li>
          Instrumental in developing GDSC UMS during its inaugural year,
          contributing significantly to its establishment and growth.
        </li>
        <li>
          Led a team in implementing innovative web development strategies,
          fostering a vibrant and engaged community within GDSC UMS.
        </li>
      </>
    ),
  },
  {
    title: "Staff of Media and Publications",
    url: "https://www.instagram.com/genbi_solo/?hl=id",
    organization: "GENBI SOLO",
    date: "Apr 2023 - Feb 2024",
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
          Profile Video creation, Parade of Informatics Engineering (PARTI), and
          UNCORE Digital Magazine.
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
          responsible for organizing all the event's visual documentation and
          preparations, including photos, videos,{" "}
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

export const WORK_EXPERIENCE = [
  {
    title: "IDCamp 2023 Front-end Facilitator Intermediate - Expert Level",
    url: "https://www.linkedin.com/company/idcamp/",
    company: "Indosat Ooredoo Digital Camp",
    date: "Dec 2023 - Apr 2024",
    description: (
      <p>
        As an IDCamp 2023 Front-end Facilitator at both Expert and Intermediate
        levels, I successfully graduated 22 out of 25 participants and 18 out of
        25 participants respectively by conducting weekly live sessions with
        live coding examples, monitoring progress, providing additional support,
        and offering tips and assistance related to class modules.
      </p>
    ),
    techs: [
      {
        name: "HTML",
        icon: ICHtml,
      },
      {
        name: "SASS",
        icon: ICSass,
      },
      {
        name: "Javascript",
        icon: ICJavascript,
      },
      {
        name: "Webpack",
        icon: ICWebpack,
      },
    ],
  },
  {
    title: "Frontend Engineer Intern",
    url: "https://www.linkedin.com/company/reyidhealth/",
    company: "Rey.id",
    date: "Sep 2023 - Feb 2024",
    description: (
      <p>
        I participated in maintaining and developing the{" "}
        <a
          href="https://rey.id/id/"
          className="text-underline"
          target="_blank"
          rel="noreferrer"
        >
          Rey.id
        </a>{" "}
        website, the Internal Doctor Chat system, and OLVO, a chat app used as a
        webview on mobile devices.
      </p>
    ),
    techs: [
      {
        name: "NextJS",
        icon: ICNextJS,
      },
      {
        name: "Material UI",
        icon: ICMaterialUI,
      },
    ],
  },
  {
    title: "Generasi GIGIH 3.0 - Fullstack Engineer Apprenticeship",
    url: "https://www.anakbangsabisa.org/generasi-gigih/program",
    company: "GoTo Impact Foundation",
    date: "Jun 2023 - Dec 2023",
    description: (
      <p>
        I underwent skill development encompassing both soft and hard skills,
        emphasizing the MERN technology stack (MongoDB, Express, React,
        Node.js), including crafting a web-based{" "}
        <a
          href="https://github.com/ulinnajaaldi/gigih-3.0-fs-spotify"
          className="text-underline"
          target="_blank"
          rel="noreferrer"
        >
          Spotify clone
        </a>{" "}
        with the official Spotify API, setting up a REST API for a Tokopedia
        Play clone using Express and MongoDB, and building a{" "}
        <a
          href="https://github.com/ulinnajaaldi/gigih-3.0-fs-final-project"
          className="text-underline"
          target="_blank"
          rel="noreferrer"
        >
          Tokopedia Play clone
        </a>{" "}
        website utilizing the MERN technology stack.
      </p>
    ),
    techs: [
      {
        name: "MongoDB",
        icon: ICMongodb,
      },
      {
        name: "Express",
        icon: ICExpress,
      },
      {
        name: "React",
        icon: ICReact,
      },
      {
        name: "NodeJS",
        icon: ICNodeJS,
      },
    ],
  },
  {
    title: "Frontend Engineer",
    url: "https://www.instagram.com/io.ums.official/",
    company: "BKUI Universitas Muhammadiyah Surakarta",
    date: "Jun 2023 - Aug 2023",
    description: (
      <p>
        I am responsible for developing the{" "}
        <a
          href="https://galeriinovasi.ums.ac.id/"
          className="text-underline"
          target="_blank"
          rel="noreferrer"
        >
          Galeri Inovasi UMS
        </a>{" "}
        application system, including selecting and implementing an appropriate
        tech stack for efficient front-end development, collaborating with
        back-end developers for seamless integration, optimizing website
        performance, conducting testing, debugging, and troubleshooting
        front-end issues in collaboration with cross-functional teams when
        needed.
      </p>
    ),
    techs: [
      {
        name: "NextJS",
        icon: ICNextJS,
      },
      {
        name: "TailwindCSS",
        icon: ICTailwind,
      },
    ],
  },
  {
    title: "Fullstack Web Developer Intern",
    url: "https://www.socmediaagency.com/",
    company: "SOC MEDIA GRUP",
    date: "Feb 2023 - May 2023",
    description: (
      <p>
        I contributed to an admin dashboard for a SOCLife site, collaborated via
        GitHub and GitLab, and played a key role as a Front-End Developer in
        building the{" "}
        <a
          href="https://github.com/sgitwhyd/MejengProject"
          className="text-underline"
          target="_blank"
          rel="noreferrer"
        >
          Mejeng
        </a>{" "}
        platform, ensuring functionality. I followed code best practices with
        descriptive commits, organized repositories, and established branching
        strategies.
      </p>
    ),
    techs: [
      {
        name: "Laravel",
        icon: ICLaravel,
      },
      {
        name: "Bootsrap",
        icon: ICBootstrap,
      },
      {
        name: "NextJS",
        icon: ICNextJS,
      },
      {
        name: "TailwindCSS",
        icon: ICTailwind,
      },
    ],
  },
];

export const AWARDS = [
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
          The training I obtained is the Front End Developer Expert Course from
          Dicoding.
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
        Received study allowance from Bank Indonesia and became a member of the
        Generasi Baru Indonesia (GENBI) community.
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
          As part of the Communication and Informatic Festival organized by BEM
          FKI, I took part in the UI/UX Competition Project with the theme
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

export const SPEAKERS = [
  {
    title:
      "Tech Talk: Upgrade Skill, Upgrade Dompet - Web Development Buat Pelajar",
    date: "March 26, 2024 - Zoom Meeting",
    description:
      "This event is aimed at students who want to learn web development in 2023. It will cover trending web development technologies in 2023, effective methods for learning web development, and how to earn money from web development skills.",
    url: "https://www.instagram.com/p/C4pC5VCLHlN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    organization: "GDSC Universitas Muhammadiyah Surakarta",
  },
  {
    title: "Build Web Development: Prepare Yourself To Be Next Web Developer",
    date: "May 28, 2023 & June 4, 2023 - JSEM 2 FKI UMS",
    description:
      "This event aims to provide fundamental knowledge of web development to students of Universitas Muhammadiyah Surakarta. It will cover HTML, CSS, and JavaScript with a focus on creating responsive and interactive websites. At the end of the event, participants will complete a simple project that can be added to their portfolio.",
    url: "https://www.instagram.com/p/CssfK_UrB58/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    organization: "Himatif UMS",
  },
];
