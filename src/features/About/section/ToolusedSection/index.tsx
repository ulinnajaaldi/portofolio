"use client";

import type { FC } from "react";
import { motion } from "framer-motion";

import { CardAbout } from "@/components";
import { useVisibility } from "@/utils/visibility";
import { TOOLS } from "../../config";

const ToolusedSection: FC = () => {
  const { ref: refH1, isVisible: isVisibleH1 } = useVisibility();
  const { ref: refLine, isVisible: isVisibleLine } = useVisibility();
  const { ref: refContent, isVisible: isVisibleContent } = useVisibility();

  return (
    <section className="flex flex-col space-y-12">
      <div className="flex items-center gap-2">
        <motion.div
          ref={refLine}
          initial={{ scale: 0.7, x: -60, opacity: 0 }}
          animate={isVisibleLine ? { scale: 1, x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="h-[1px] w-12 bg-primary"
        ></motion.div>
        <motion.h1
          ref={refH1}
          initial={{ x: -60, opacity: 0 }}
          animate={isVisibleH1 ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-xl font-semibold text-secondary md:text-2xl"
        >
          Tools used
        </motion.h1>
      </div>
      <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
        {TOOLS.map((tool, index) => (
          <motion.div
            key={`${tool.name}-${index}`}
            ref={refContent}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={isVisibleContent ? { scale: 1, opacity: 1 } : {}}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * index,
            }}
          >
            <CardAbout
              images={tool.src}
              title={tool.name}
              informationLevel={tool.label}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ToolusedSection;
