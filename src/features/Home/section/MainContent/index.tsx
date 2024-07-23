"use client";

import type { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { Dominos } from "@/components";
import { ImageSecretPlay } from "@/constants/images";
import { useVisibility } from "@/utils/visibility";

const MainContent: FC = () => {
  const { ref: refH2, isVisible: isVisibleH2 } = useVisibility();
  const { ref: refP, isVisible: isVisibleP } = useVisibility();

  return (
    <section className="flex h-[650px] w-full flex-col items-center justify-center py-24 text-center ">
      <div className="absolute mb-[-430px] mr-[10px] md:mb-[400px] md:mr-[200px] lg:mr-[300px] xl:mr-[480px]">
        <div className="relative h-[150px] w-auto opacity-20 md:h-[200px] lg:h-[250px]">
          <Image
            src={ImageSecretPlay}
            alt="secret game"
            width={1024}
            height={1024}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      <div className="z-40 mb-0 md:mb-10">
        <motion.h2
          ref={refH2}
          initial={{ scale: 0.7, y: 60, opacity: 0 }}
          animate={isVisibleH2 ? { scale: 1, y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="pb-2 text-3xl font-bold leading-tight text-secondary md:pb-0 md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed"
        >
          Delivering modern,
          <br />
          cohensive & instuitive web solution.
        </motion.h2>
        <motion.p
          ref={refP}
          initial={{ y: 60, opacity: 0 }}
          animate={isVisibleP ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="text-sm text-primary md:text-base"
        >
          I enjoy designing meaningful experiences for brands & businesses to
          help them serve their target users.
        </motion.p>
      </div>
      <div className="bg-base-100 absolute z-0 m-auto h-[600px] w-[350px] opacity-25 md:w-[672px] lg:w-[825px] xl:w-[1080px]">
        <Dominos />
      </div>
    </section>
  );
};

export default MainContent;
