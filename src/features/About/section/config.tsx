import ICONS from "@/constants/icons";
import {
  IDATA_AWARDS,
  IDATA_ORGANIZATION,
  IDATA_WORK_EXPERIENCE,
} from "./types";

export const DATA_WORK_EXPERIENCE: IDATA_WORK_EXPERIENCE[] = [
  {
    title: "Frontend Developer",
    url: "https://broilerx.com/",
    company: "BroilerX",
    date: "Dec 2024 - Present",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Successfully developed the{" "}
          <a
            href="https://www.erpana.com/"
            className="text-underline"
            target="_blank"
            rel="noreferrer"
          >
            Erpana
          </a>{" "}
          landing page using Next.js
        </li>
        <li>
          Developed and maintained internal applications ReactJS, to support
          administrative needs across regions
        </li>
        <li>
          Successfully refactored the legacy codebase by applying clean code
          architecture principles, resulting in faster development time and a
          significant reduction in potential bugs across the web application.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "Javascript",
        icon: ICONS.javascript,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Shadcn UI",
        icon: ICONS.shadcn,
      },
      {
        name: "Storybook",
        icon: ICONS.storybook,
      },
    ],
  },
  {
    title: "Frontend Facilitator",
    url: "https://dicoding.com/",
    company: "Dicoding",
    date: "Periodic Event",
    description: (
      <ul className="list-inside list-disc">
        <li>
          Frontend Facilitator Intermediate & Expert Level - IDCamp 2024 <br />
          <span className="text-accent">(Jan 2025 - Present)</span> -
          Successfully graduated 12 participants out of a total of 22
          participants in the class Intermediate.
        </li>
        <li>
          Frontend Facilitator Intermediate & Expert Level - DBS 2024 <br />
          <span className="text-accent">(Jul 2024 - Jan 2025)</span> -
          Successfully graduated 17 participants out of a total of 25
          participants in the class Expert, and graduated 19 participants out of
          a total of 25 participants in the class Intermediate.
        </li>
        <li>
          Frontend Facilitator Intermediate & Expert Level - IDCamp 2023 <br />
          <span className="text-accent">(Dec 2023 - Apr 2024)</span> -
          Successfully graduated 22 participants out of a total of 25
          participants in the class Expert, and graduated 18 participants out of
          a total of 25 participants in the class Intermediate.
        </li>
      </ul>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "Javascript",
        icon: ICONS.javascript,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "SASS",
        icon: ICONS.sass,
      },
      {
        name: "Webpack",
        icon: ICONS.webpackBundler,
      },
      {
        name: "Vite",
        icon: ICONS.vite,
      },
    ],
  },
  {
    title: "Frontend Engineer",
    url: "https://library.ums.ac.id/",
    company: "BHP - Muhammadiyah University of Surakarta",
    date: "Aug 2024 - Dec 2024",
    description: (
      <p>
        Managed and optimized relevant tech stacks to support efficient project
        execution, including the implementation of the AKADEMIK UMAM web
        app—translating complex design systems into a fully functional platform
        with core features, seamless interfaces, and robust architecture. Also
        developed and implemented several internal web applications for UMS,
        such as the Pelayanan Biro web app, University Ranking Monitoring
        system, and HAKI Submission system.
      </p>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "NextJS",
        icon: ICONS.nextjs,
      },
      {
        name: "React Query",
        icon: ICONS.reactQueryLogo,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Shadcn UI",
        icon: ICONS.shadcn,
      },
      {
        name: "Hono.js",
        icon: ICONS.honoJs,
      },
      {
        name: "Firebase",
        icon: ICONS.firebase,
      },
      {
        name: "Drizzle ORM",
        icon: ICONS.drizzleOrm,
      },
      {
        name: "Neon DB",
        icon: ICONS.neonDb,
      },
    ],
  },
  {
    title: "Application Awardee",
    url: "https://library.ums.ac.id/",
    company: "UMS Library",
    date: "Apr 2024 - Jul 2024",
    description: (
      <p>
        Improved the efficiency of room booking through an integrated digital
        system that was officially adopted and further developed by the UMS
        Library, recognized as the Best Awardee for delivering a high-impact,
        real-world application that directly addressed the needs of the academic
        institution.
      </p>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "NextJS",
        icon: ICONS.nextjs,
      },
      {
        name: "React Query",
        icon: ICONS.reactQueryLogo,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "Shadcn UI",
        icon: ICONS.shadcn,
      },
      {
        name: "Express",
        icon: ICONS.express,
      },
      {
        name: "Prisma ORM",
        icon: ICONS.prismaOrm,
      },
      {
        name: "Supabase",
        icon: ICONS.supabaseDb,
      },
    ],
  },
  {
    title: "Rey.id - Frontend Engineer",
    url: "https://rey.id/",
    company: "Rey.id",
    date: "Sep 2023 - Feb 2024",
    description: (
      <p>
        Contributed to the maintenance and development of the{" "}
        <a
          href="https://rey.id/"
          className="text-underline"
          target="_blank"
          rel="noreferrer"
        >
          Rey.id
        </a>{" "}
        website and the Internal Doctor Chat system, while also developing OLVO,
        a chat application integrated as a webview within mobile devices.
      </p>
    ),
    techs: [
      {
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "NextJS",
        icon: ICONS.nextjs,
      },
      {
        name: "React Query",
        icon: ICONS.reactQueryLogo,
      },
      {
        name: "Material UI",
        icon: ICONS.materialUI,
      },
      {
        name: "WebSocket",
        icon: ICONS.websocket,
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
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "Javascript",
        icon: ICONS.javascript,
      },
      {
        name: "Express",
        icon: ICONS.express,
      },
      {
        name: "React Query",
        icon: ICONS.reactQueryLogo,
      },
      {
        name: "Formik",
        icon: ICONS.formikLogo,
      },
      {
        name: "React",
        icon: ICONS.react,
      },
      {
        name: "WebSocket",
        icon: ICONS.websocket,
      },
      {
        name: "NodeJS",
        icon: ICONS.nodejs,
      },
      {
        name: "MongoDB",
        icon: ICONS.mongodb,
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
        name: "Typescript",
        icon: ICONS.typescriptTsLogo,
      },
      {
        name: "NextJS",
        icon: ICONS.nextjs,
      },
      {
        name: "React Query",
        icon: ICONS.reactQueryLogo,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
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
        name: "Javascript",
        icon: ICONS.javascript,
      },
      {
        name: "PHP",
        icon: ICONS.php,
      },
      {
        name: "Laravel",
        icon: ICONS.laravel,
      },

      {
        name: "NextJS",
        icon: ICONS.nextjs,
      },
      {
        name: "Bootsrap",
        icon: ICONS.bootstrap,
      },
      {
        name: "TailwindCSS",
        icon: ICONS.tailwind,
      },
      {
        name: "MySQL",
        icon: ICONS.mysqlDb,
      },
    ],
  },
];

export const DATA_ORGANIZATION: IDATA_ORGANIZATION[] = [
  {
    title: "Head of Department Web Development ",
    url: "https://www.instagram.com/gdsc_ums/",
    organization: "Google DSC Universitas Muhammadiyah Surakarta",
    date: "Aug 2023 - Jun 2024",
    description: (
      <>
        <li>
          Instrumental in developing GDSC UMS during its inaugural year, I
          played a key role in establishing and growing the community by leading
          a team in implementing innovative web development strategies,
          fostering engagement, and collaborating with cross-functional teams to
          organize and execute impactful events.
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

export const DATA_AWARDS: IDATA_AWARDS[] = [
  {
    title: "Best Awardee of UMS Library Digital Scholarship",
    url: "https://library.ums.ac.id/",
    organization: "UMS Library",
    date: "Jul 2024",
    description: (
      <>
        <li>
          Successfully developed a web application for the UMS Library, which
          was recognized as the Best Awardee for delivering a high-impact,
          real-world application that directly addressed the needs of the
          academic institution.
        </li>
      </>
    ),
  },
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
