import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import laravelIcon from "@icons/laravel.svg";
import nodejsIcon from "@icons/nodejs.svg";
import expressIcon from "@icons/express.svg";
import mongodbIcon from "@icons/mongodb.svg";
import Image from "next/image";

export const ContentWorkExperience = () => {
  const datas = [
    {
      title: "Generasi GIGIH 3.0 - Fullstack Engineer Apprenticeship",
      url: "https://www.anakbangsabisa.org/generasi-gigih/program",
      company: "GoTo Impact Foundation",
      date: "Jun 2023 - Present",
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
          icon: mongodbIcon,
        },
        {
          name: "Express",
          icon: expressIcon,
        },
        {
          name: "React",
          icon: reactIcon,
        },
        {
          name: "NodeJS",
          icon: nodejsIcon,
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
          application system, including selecting and implementing an
          appropriate tech stack for efficient front-end development,
          collaborating with back-end developers for seamless integration,
          optimizing website performance, conducting testing, debugging, and
          troubleshooting front-end issues in collaboration with
          cross-functional teams when needed.
        </p>
      ),
      techs: [
        {
          name: "NextJS",
          icon: nextjsIcon,
        },
        {
          name: "TailwindCSS",
          icon: tailwindIcon,
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
          I contributed to an admin dashboard for a SOCLife site, collaborated
          via GitHub and GitLab, and played a key role as a Front-End Developer
          in building the{" "}
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
          icon: laravelIcon,
        },
        {
          name: "Bootsrap",
          icon: bootstrapIcon,
        },
        {
          name: "NextJS",
          icon: nextjsIcon,
        },
        {
          name: "TailwindCSS",
          icon: tailwindIcon,
        },
      ],
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
                  <Image
                    src={tech.icon}
                    alt={tech.icon}
                    width={28}
                    height={28}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
