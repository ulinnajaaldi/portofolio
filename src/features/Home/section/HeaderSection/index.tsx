"use client";

import type { FC } from "react";
import { motion } from "framer-motion";

import { motionFadeUp, motionFlipUp, motionZoomInUp } from "@/utils/motion";

const HeaderSection: FC = () => {
  return (
    <section className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12 ">
      <motion.p
        {...motionFadeUp}
        className="ml-1 hidden pb-3 text-sm text-accent md:block md:pb-7 md:text-base"
      >
        Hi, my name is
      </motion.p>
      <motion.h1
        {...motionFadeUp}
        className="pb-1 text-4xl font-semibold text-secondary md:mt-0 md:pb-4 md:text-5xl lg:text-6xl"
      >
        Ulinnaja Aldi.
      </motion.h1>
      <motion.h1
        {...motionFadeUp}
        className="pb-4 text-4xl font-semibold text-primary md:pb-8 md:text-5xl lg:text-6xl"
      >
        I build things for the web.
      </motion.h1>
      <motion.p
        {...motionZoomInUp}
        className="w-full text-sm leading-relaxed text-primary md:w-[580px] md:text-base"
      >
        I'm a Software Developer with <b>over two years</b> of web development
        experience, specializing in <b>TypeScript</b>. I'm passionate about
        staying current with the latest industry advancements and consistently
        enhancing my skills.
      </motion.p>
      <motion.div {...motionFlipUp} className="mt-10 text-sm md:mt-14">
        <a
          className="rounded-[4px] border-2 border-accent px-7 py-5 text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
          href="https://drive.google.com/drive/folders/1QoujbRghInMFjV5ECmudG3Mho-aOdngI?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button>View my cv here!</button>
        </a>
      </motion.div>
    </section>
  );
};

export default HeaderSection;
