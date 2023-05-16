"use client";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin } from "react-icons/fi";
import { TbBrandTelegram, TbBrandTiktok } from "react-icons/tb";

export default function Contact() {
  const sosmeds = [
    {
      name: "Tiktok",
      icon: <TbBrandTiktok size={20} />,
      link: "https://www.tiktok.com/@ulinnaja.code",
    },
    {
      name: "Github",
      icon: <FiGithub size={20} />,
      link: "https://github.com/ulinnajaaldi",
    },
    {
      name: "Instagram",
      icon: <FiInstagram size={20} />,
      link: "https://www.instagram.com/ulinnaja.aldi/",
    },
    {
      name: "Telegram",
      icon: <TbBrandTelegram size={20} />,
      link: "https://t.me/ulinnajaah",
    },
    {
      name: "Linkedin",
      icon: <FiLinkedin size={20} />,
      link: "https://www.linkedin.com/in/ulinnaja-aldi/",
    },
  ];
  return (
    <div className="hidden lg:block">
      <div className="fixed bottom-0 left-0 w-[105px]">
        <div className="flex flex-col items-center" data-aos="fade-up">
          {sosmeds.map((sosmed, index) => (
            <div
              key={index}
              data-aos="fade-right"
              data-aos-delay={`${index}00`}
              data-aos-duration="600"
            >
              <div
                className="cursor-pointer px-2 py-3 text-primary transition-all duration-300 hover:-translate-y-1 hover:text-accent"
                title={sosmed.name}
              >
                <a
                  href={sosmed.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={sosmed.name}
                >
                  {sosmed.icon}
                </a>
              </div>
            </div>
          ))}
          <div className="mt-4 h-20 w-[1px] bg-primary"></div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-[105px]">
        <div className="flex flex-col items-center" data-aos="fade-up">
          <div data-aos="fade-left" data-aos-duration="600">
            <a
              href="mailto:ulinnajaaldi24@gmail.com"
              className="writ px-2 py-3 font-mono text-xs tracking-[0.075em] text-primary transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              style={{ writingMode: "vertical-rl" }}
            >
              ulinnajaaldi24@gmail.com
            </a>
          </div>
          <div className="mt-4 h-20 w-[1px] bg-primary"></div>
        </div>
      </div>
    </div>
  );
}
