"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { ImageUlin } from "@/constants/images";
import {
  motionFadeLeft,
  motionZoomIn,
  motionZoomInLeft,
  motionZoomInRight,
} from "@/utils/motion";

const HeaderSection: FC = () => {
  return (
    <section className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
      <div className="flex flex-col justify-center text-primary">
        <div className="flex items-center gap-5 pb-10">
          <motion.h1
            {...motionFadeLeft}
            transition={{ duration: 0.3 }}
            className="text-xl font-semibold text-secondary lg:text-2xl"
          >
            <span className="font-mono text-lg font-normal text-accent lg:text-xl">
              02.{" "}
            </span>
            About Me
          </motion.h1>
          <motion.div
            {...motionZoomInLeft}
            className="h-[1px] w-32 bg-primary md:w-96"
          ></motion.div>
        </div>
        <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
          <motion.p {...motionZoomInRight}>
            Hello! My name is Aldilla Ulinnaja, an Informatics Engineering
            student with experience and interest in Web Development. I
            specialize in{" "}
            <span className="text-accent">Frontend Development</span> and have
            some experience in{" "}
            <span className="text-accent">Backend Development</span> using
            JavaScript or TypeScript.
          </motion.p>
          <motion.p
            {...motionZoomInRight}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          >
            As an Informatics Engineering student, I have strong knowledge and
            expertise in the <b>ReactJS Ecosystem</b>. I possess the ability to
            create websites and applications that are both user-friendly and
            visually captivating.
          </motion.p>
          <motion.p
            {...motionZoomInRight}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
          >
            I am constantly striving to improve my skills and knowledge. I
            believe that ongoing training and personal projects are key to
            success. I am committed to staying up-to-date with the latest
            developments in my field and continuously expanding my knowledge and
            skills.
          </motion.p>
          <motion.p
            {...motionZoomInRight}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.3 }}
          >
            And oh, there's a little twist &#x2013; I'm also into the world of
            3D modeling, though I confess I might not be diving into its depths
            just yet. It's like my side quest that adds a dash of excitement.
          </motion.p>
        </div>
      </div>
      <motion.div
        {...motionZoomIn}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="-my-20 pl-0 md:-my-40 lg:-my-0 xl:pl-24"
      >
        <div className="grayscale transition-all duration-500 hover:grayscale-0">
          <Image
            src={ImageUlin}
            alt="Aldilla Ulinnaja"
            height={1000}
            width={1000}
            className="scale-50 lg:scale-100 2xl:scale-75"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeaderSection;
