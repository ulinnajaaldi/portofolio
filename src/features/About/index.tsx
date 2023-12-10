import type { FC } from "react";
import {
  AboutExperienceSection,
  AboutHeaderSection,
  AboutTechstackSection,
  AboutToolusedSection,
} from "./section";

const About: FC = () => {
  return (
    <>
      <AboutHeaderSection />
      <AboutExperienceSection />
      <AboutTechstackSection />
      <AboutToolusedSection />
    </>
  );
};

export default About;
