"use client";

import React, { FC, useState } from "react";
import { motion } from "framer-motion";

import { useVisibility } from "@/utils/visibility";
import { ContentCertification } from "./content-certification";
import { ContentEducation } from "./content-education";
import { ContentAward } from "./content-awards";
import { ContentOrganization } from "./content-organization";
import { ContentWorkExperience } from "./content-work-experience";
import ContentSpeaker from "./content-speaker";

const ExperienceSection: FC = () => {
  const [activeCategory, setActiveCategory] = useState("education");
  const { ref: refH1, isVisible: isVisibleH1 } = useVisibility();
  const { ref: refLine, isVisible: isVisibleLine } = useVisibility();
  const { ref: refContent, isVisible: isVisibleContent } = useVisibility();

  let selectedContent;

  if (activeCategory === "education") {
    selectedContent = <ContentEducation />;
  } else if (activeCategory === "organizations") {
    selectedContent = <ContentOrganization />;
  } else if (activeCategory === "experience") {
    selectedContent = <ContentWorkExperience />;
  } else if (activeCategory === "awards") {
    selectedContent = <ContentAward />;
  } else if (activeCategory === "certification") {
    selectedContent = <ContentCertification />;
  } else if (activeCategory === "speaker") {
    selectedContent = <ContentSpeaker />;
  }

  const categories = [
    { name: "Education", value: "education" },
    { name: "Organizations", value: "organizations" },
    { name: "Work Experience", value: "experience" },
    // { name: "Certification", value: "certification" },
    { name: "Speaker", value: "speaker" },
    { name: "Awards", value: "awards" },
  ];

  return (
    <section className="pb-[50px] pt-[100px] lg:pb-[60px]">
      <div className="flex flex-col items-center justify-center gap-5 pb-32">
        <div className="mb-5 flex w-full items-center justify-start gap-4 lg:w-[776px]">
          <motion.h1
            ref={refH1}
            initial={{ x: 60, opacity: 0 }}
            animate={isVisibleH1 ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-xl font-semibold text-secondary md:text-2xl"
          >
            My Experience
          </motion.h1>
          <motion.div
            ref={refLine}
            initial={{ scale: 0.7, x: 60, opacity: 0 }}
            animate={isVisibleLine ? { scale: 1, x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-[1px] w-32 bg-primary md:w-96"
          ></motion.div>
        </div>
        <motion.div
          ref={refContent}
          initial={{ y: 60, opacity: 0 }}
          animate={isVisibleContent ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="flex flex-col items-center gap-5 md:flex-row md:items-start md:gap-8"
        >
          <div className="flex w-[370px] flex-row overflow-x-scroll font-mono text-sm text-primary md:w-auto md:flex-col  md:overflow-auto">
            {categories.map((category) => (
              <button
                className={`w-auto whitespace-nowrap px-4 py-3 text-start text-xs transition-all duration-300 hover:bg-accent/10 hover:text-accent md:px-5 md:py-3 md:text-base ${
                  activeCategory === category.value
                    ? "bg-accent/10 text-accent"
                    : ""
                }`}
                onClick={() => setActiveCategory(category.value)}
                key={category.value}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div className="h-[480px] w-[350px] overflow-auto pr-2 md:w-[490.78px] lg:w-[680px]">
            {selectedContent}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
