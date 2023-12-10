import { useState } from "react";

export const ContentCertification = () => {
  const [hover, setHover] = useState([]);

  const vendorList = [
    {
      type: "Course",
      name: "Dicoding",
      link: "https://www.dicoding.com",
      certificate: [
        {
          name: "Front-End Web Developer Expert",
          link: "https://www.dicoding.com/certificates/RVZKOMWKQPD5",
        },
        {
          name: "Intermediate Front-End Web Tools",
          link: "https://www.dicoding.com/certificates/NVP7ONEYRPR0",
        },
        {
          name: "Fundamental Web Applications with React",
          link: "https://www.dicoding.com/certificates/0LZ0GGLJ0X65",
        },
        {
          name: "Fundamental Front-End Web Development",
          link: "https://www.dicoding.com/certificates/MEPJVR344P3V",
        },
        {
          name: "Create Front-End Web for Beginners",
          link: "https://www.dicoding.com/certificates/2VX3Y55DNPYQ",
        },
        {
          name: "Build Back-End Applications for Beginners",
          link: "https://www.dicoding.com/certificates/72ZD93V26PYW",
        },
        {
          name: "Basics of Web Programming",
          link: "https://www.dicoding.com/certificates/QLZ9KGKJ9Z5D",
        },
        {
          name: "Basics of JavaScript Programming",
          link: "https://www.dicoding.com/certificates/2VX31QV23ZYQ",
        },
        {
          name: "Computer Networking for Beginners",
          link: "https://www.dicoding.com/certificates/EYX49QGVRPDL",
        },
        {
          name: "Basics of DevOps",
          link: "https://www.dicoding.com/certificates/QLZ926312X5D",
        },
        {
          name: "Cloud Practitioner Essentials (Learning AWS Cloud Basics)",
          link: "https://www.dicoding.com/certificates/ERZR0817QXYV",
        },
      ],
    },
    {
      type: "Course",
      name: "Progate",
      link: "https://progate.com/",
      certificate: [
        {
          name: "React",
          link: "https://drive.google.com/file/d/1b80zFNL9-Cc5jSKa2Hpkc_6l_NwsvOoP/view?usp=sharing",
        },
        {
          name: "NodeJS",
          link: "https://drive.google.com/file/d/1GydrUfjuYXyKf4PPa9xOfDS9Ag4RN03C/view?usp=sharing",
        },
        {
          name: "Javascript",
          link: "https://drive.google.com/file/d/1eVteeFTAeOZdjySVwk32LbsbipnBvCrd/view?usp=sharing",
        },
        {
          name: "HTML & CSS",
          link: "https://drive.google.com/file/d/1fZB2CwZ1c7UL_clMIuSp3W98NAavhBnJ/view?usp=sharing",
        },
      ],
    },
    {
      type: "Competence",
      name: "BNSP",
      link: "https://www.bnsp.go.id",
      certificate: [
        {
          name: "Junior Web Developer",
          link: "https://www.linkedin.com/feed/update/urn:li:activity:7005734510378041344/",
        },
      ],
    },
    {
      type: "Course",
      name: "Sololearn",
      link: "https://www.sololearn.com",
      certificate: [
        {
          name: "HTML ",
          link: "https://www.sololearn.com/certificates/CT-DJAJTAPO",
        },
        {
          name: "Javascript ",
          link: "https://www.sololearn.com/certificates/CT-VQKUFX6T",
        },
      ],
    },
  ];

  return (
    <div className="cursor-default text-primary">
      {vendorList.map((vendor, index) => {
        return (
          <div key={index}>
            <h3 className="pb-3 text-lg font-medium leading-loose text-secondary md:text-xl">
              {vendor.type}
              <span className="text-base text-accent">
                {" "}
                @
                <a
                  href={vendor.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-underline"
                >
                  {vendor.name}
                </a>
              </span>
            </h3>
            <ul className="flex list-inside list-disc flex-col gap-4 pb-5 text-sm leading-relaxed lg:text-base">
              {vendor.certificate.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="static  items-center justify-start transition-all duration-300 hover:text-accent md:inline-flex"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
