"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { TbBrandTelegram, TbBrandTiktok } from "react-icons/tb";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import { motionFadeLeft, motionFadeRight, motionFadeUp } from "@/utils/motion";

export default function Contact() {
  const DATAS = [
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
        <div className="flex flex-col items-center">
          {DATAS.map((data, index) => (
            <motion.div
              key={`${data.name}-${index}`}
              {...motionFadeRight}
              transition={{ delay: index * 0.1 }}
            >
              <TooltipProvider delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="cursor-pointer px-2 py-3 text-primary transition-all duration-300 hover:-translate-y-1 hover:text-accent">
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-hidden
                      >
                        {data.icon}
                      </a>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <p className="bg-primary text-base_col_darker">
                      {data.name}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          ))}
          <div className="mt-4 h-20 w-[1px] bg-primary"></div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 w-[105px]">
        <div className="flex flex-col items-center">
          <motion.div {...motionFadeLeft}>
            <a
              href="mailto:ulinnajaaldi.tech@gmail.com"
              className="writ px-2 py-3 font-mono text-xs tracking-[0.075em] text-primary transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              style={{ writingMode: "vertical-rl" }}
            >
              ulinnajaaldi.tech@gmail.com
            </a>
          </motion.div>
          <div className="mt-4 h-20 w-[1px] bg-primary"></div>
        </div>
      </div>
    </div>
  );
}
