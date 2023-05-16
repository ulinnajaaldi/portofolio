import { BsArrowUpRightCircle } from "react-icons/bs";
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
          name: "Belajar Fundamental Aplikasi Web dengan React",
          link: "https://www.dicoding.com/certificates/0LZ0GGLJ0X65",
        },
        {
          name: "Belajar Fundamental Front-End Web Development",
          link: "https://www.dicoding.com/certificates/MEPJVR344P3V",
        },
        {
          name: "Belajar Membuat Front-End Web untuk Pemula",
          link: "https://www.dicoding.com/certificates/2VX3Y55DNPYQ",
        },
        {
          name: "Belajar Membuat Aplikasi Back-End untuk Pemula",
          link: "https://www.dicoding.com/certificates/72ZD93V26PYW",
        },
        {
          name: "Belajar Dasar Pemrograman Web",
          link: "https://www.dicoding.com/certificates/QLZ9KGKJ9Z5D",
        },
        {
          name: "Belajar Dasar Pemrograman JavaScript",
          link: "https://www.dicoding.com/certificates/2VX31QV23ZYQ",
        },
        {
          name: "Belajar Jaringan Komputer untuk Pemula",
          link: "https://www.dicoding.com/certificates/EYX49QGVRPDL",
        },
        {
          name: "Belajar Dasar-Dasar DevOps",
          link: "https://www.dicoding.com/certificates/QLZ926312X5D",
        },
        {
          name: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)",
          link: "https://www.dicoding.com/certificates/ERZR0817QXYV",
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
  ];

  return (
    <div className="cursor-default text-primary">
      {vendorList.map((vendor, index) => {
        return (
          <div key={index}>
            <h3 className="pb-3 text-lg font-medium leading-loose text-secondary md:text-xl">
              {vendor.type}
              <span className=" text-accent">
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
                  <li
                    key={index}
                    onMouseEnter={() => {
                      setHover((prehover) => {
                        const newHover = [...prehover];
                        newHover[index] = true;
                        return newHover;
                      });
                    }}
                    onMouseLeave={() => {
                      setHover((prehover) => {
                        const newHover = [...prehover];
                        newHover[index] = false;
                        return newHover;
                      });
                    }}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="static  items-center justify-start transition-all duration-300 hover:text-accent md:inline-flex"
                    >
                      {item.name}
                      <BsArrowUpRightCircle
                        className={`ml-1 hidden transition-all duration-300 md:inline-flex ${
                          hover[index] && "rotate-45"
                        }`}
                        size={16}
                      />
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
