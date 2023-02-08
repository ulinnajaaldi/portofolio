"use client";
import React from "react";
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { TbBrandTelegram } from "react-icons/tb";

export default function Contact() {
  const sosmeds = [
    {
      name: "Github",
      icon: <FiGithub size={20} />,
      link: "https://github.com/ulinnajaaldi",
    },
    {
      name: "Linkedin",
      icon: <FiLinkedin size={20} />,
      link: "https://www.linkedin.com/in/ulinnaja-aldi/",
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
      name: "Twitter",
      icon: <FiTwitter size={20} />,
      link: "https://twitter.com/UlinnajaAldi",
    },
  ];
  return (
    <div className="hidden lg:block">
      <div className="fixed bottom-0 left-0 w-[105px] ">
        <div className="flex flex-col items-center">
          {sosmeds.map((sosmed, index) => (
            <div
              className="cursor-pointer px-2 py-3 text-primary transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              key={index}
              title={sosmed.name}
            >
              <a href={sosmed.link} target="_blank" rel="noreferrer">
                {sosmed.icon}
              </a>
            </div>
          ))}
          <div className="mt-4 h-20 w-[1px] bg-primary"></div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-[105px] ">
        <div className="flex flex-col items-center">
          <a
            href="mailto:ulinnajaaldi24@gmail.com"
            className="writ px-2 py-3 font-mono text-xs tracking-[0.075em] text-primary transition-all duration-300 hover:-translate-y-1 hover:text-accent"
            style={{ writingMode: "vertical-rl" }}
          >
            ulinnajaaldi24@gmail.com
          </a>
          <div className="mt-4 h-20 w-[1px] bg-primary"></div>
        </div>
      </div>
    </div>
  );
}
