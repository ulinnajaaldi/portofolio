import dynamic from "next/dynamic";

export const AboutHeaderSection = dynamic(() => import("./HeaderSection"));
export const AboutExperienceSection = dynamic(
  () => import("./ExperienceSection")
);
export const AboutTechstackSection = dynamic(
  () => import("./TechstackSection")
);
export const AboutToolusedSection = dynamic(() => import("./ToolusedSection"));
