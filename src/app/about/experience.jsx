"use client";
import React, { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";

export default function Experience() {
  const [activeCategory, setActiveCategory] = useState("education");

  const educationContent = (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Informatics Engineering
        <br />
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://informatika.ums.ac.id"
            target="blank"
            className="text-underline"
          >
            Muhammadiyah Surakarta University
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Aug 2020 - Present</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          I enrolled in the Informatics Engineering program with the motivation
          that commercial jobs would be replaced by technology in the future, so
          I decided to pursue this field of study.
        </li>
        <li>
          During the first four semesters, I was more interested in graphic
          design and 3D modeling, and I even created a{" "}
          <a
            href="https://www.youtube.com/c/UlinnajaTbx"
            className="text-underline"
            target="blank"
          >
            YouTube channel
          </a>{" "}
          with content on Unity game modding, which now has over 20k++
          subscribers.
        </li>
        <li>
          Starting from the fifth semester, I realized that coding was my main
          goal in pursuing this major. Therefore, I began to learn about
          programming and fell in love with coding.
        </li>
      </ul>
    </div>
  );

  const organizationsContent = (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Staff
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://www.instagram.com/himatifums/"
            target="blank"
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
            target="blank"
          >
            Parade of Informatics Engineering
          </a>
          (PARTI), where I served as the Head of Publication and Documentation,
          responsible for organizing all the event{`'`}s visual documentation
          and preparations, including photos, videos,{" "}
          <a
            href="https://www.instagram.com/p/CiZACw0JXmC/"
            target="blank"
            className="text-underline"
          >
            3D mascot
          </a>
          , and media streaming.
        </li>
      </ul>
    </div>
  );

  const awardsContent = (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        1st Runner Up UI/UX Competition
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://www.instagram.com/himatifums/"
            target="blank"
            className="text-underline"
          >
            CIF BEM-FKI
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">July 2022</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          The UI/UX Competition Project organized by the Communication and
          Informatic Festival BEM FKI with the theme {`"`}Menilik Jendela
          Cakrawala{`"`}
        </li>
        <li>
          Our team of three developed a project called{" "}
          <a
            href="https://www.figma.com/proto/RID0jaEou3qDxGEepjxSAw/Rawuh?page-id=51%3A2&node-id=51%3A3&starting-point-node-id=51%3A3&scaling=scale-down-width"
            target="blank"
            className="text-underline"
          >
            Rawuh
          </a>
          , which is a travel website aimed at promoting hidden tourist
          destinations in Indonesia.
        </li>
      </ul>
    </div>
  );

  const sololearnData = [
    {
      name: "HTML ",
      link: "https://www.sololearn.com/certificates/CT-DJAJTAPO",
    },
    {
      name: "Javascript ",
      link: "https://www.sololearn.com/certificates/CT-VQKUFX6T",
    },
  ];

  const dicodingData = [
    {
      name: "Belajar Dasar Pemrograman JavaScript",
      link: "https://www.dicoding.com/certificates/2VX31QV23ZYQ",
    },
    {
      name: "Belajar Dasar Pemrograman Web",
      link: "https://www.dicoding.com/certificates/QLZ9KGKJ9Z5D",
    },
    {
      name: "Belajar Membuat Front-End Web untuk Pemula",
      link: "https://www.dicoding.com/certificates/2VX3Y55DNPYQ",
    },
    {
      name: "Belajar Fundamental Aplikasi Web dengan React",
      link: "https://www.dicoding.com/certificates/0LZ0GGLJ0X65",
    },
    {
      name: "Belajar Jaringan Komputer untuk Pemula",
      link: "https://www.dicoding.com/certificates/EYX49QGVRPDL",
    },
    {
      name: "Belajar Dasar-Dasar DevOps",
      link: "https://www.dicoding.com/certificates/QLZ926312X5D",
    },
  ];

  const certificationContent = (
    <div className="cursor-default text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Course
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://www.dicoding.com"
            target="blank"
            className="text-underline"
          >
            Dicoding
          </a>
        </span>
      </h3>
      <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
        {dicodingData.map((item) => (
          <li key={item.name}>
            {item.name}
            {` `}
            <a href={item.link} target="blank">
              <BiLinkExternal
                className="inline-flex transition-all hover:text-accent"
                size={14.5}
              />
            </a>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Course
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://www.sololearn.com"
            target="blank"
            className="text-underline"
          >
            Sololearn
          </a>
        </span>
      </h3>
      <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
        {sololearnData.map((item) => (
          <li key={item.name}>
            {item.name}
            <a href={item.link} target="blank">
              <BiLinkExternal
                className="inline-flex transition-all hover:text-accent"
                size={14.5}
              />
            </a>
          </li>
        ))}
      </ul>
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Competence
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://bnsp.go.id"
            target="blank"
            className="text-underline"
          >
            BNSP
          </a>
        </span>
      </h3>
      <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
        <li>
          Junior Web Developer{" "}
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7005734510378041344/"
            target="blank"
          >
            <BiLinkExternal
              className="inline-flex transition-all hover:text-accent"
              size={14.5}
            />
          </a>
        </li>
      </ul>
    </div>
  );

  let selectedContent;

  if (activeCategory === "education") {
    selectedContent = educationContent;
  } else if (activeCategory === "organizations") {
    selectedContent = organizationsContent;
  } else if (activeCategory === "awards") {
    selectedContent = awardsContent;
  } else if (activeCategory === "certification") {
    selectedContent = certificationContent;
  }

  const categories = [
    { name: "Education", value: "education" },
    { name: "Organizations", value: "organizations" },
    { name: "Awards", value: "awards" },
    { name: "Certification", value: "certification" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-32">
      <div className="mb-5 flex w-full items-center justify-start gap-4 lg:w-[776px]">
        <h1 className="text-xl font-semibold text-secondary md:text-2xl">
          My Experience
        </h1>
        <div className="h-[1px] w-48 bg-primary md:w-96"></div>
      </div>
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
        <div className="flex flex-row overflow-auto font-mono text-sm text-primary md:flex-col">
          {categories.map((category) => (
            <button
              className={`w-auto px-3 py-2 text-start text-xs transition-all duration-300 hover:bg-accent hover:bg-opacity-10 hover:text-accent md:py-3 md:px-5 md:text-base ${
                activeCategory === category.value
                  ? "bg-accent bg-opacity-10 text-accent"
                  : ""
              }`}
              onClick={() => setActiveCategory(category.value)}
              key={category.value}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="h-[400px] w-[377px] overflow-auto md:w-[490.78px] lg:w-[600px]">
          {selectedContent}
        </div>
      </div>
    </div>
  );
}
