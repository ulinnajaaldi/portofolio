import type { FC } from "react";
import { ProjectGetInTouchSection, ProjectListProjectSection } from "./section";

export const metadata = {
  title: "Projects | Ulinnaja Aldi",
  description: "Projects page of Aldilla Ulinnaja portfolio website",
};

const Project: FC = () => {
  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <h1
        className="pb-2 text-center text-2xl font-semibold leading-relaxed text-secondary md:text-3xl"
        data-aos="zoom-in-up"
        data-aos-duration="300"
      >
        Past Project Experience
      </h1>
      <p
        className="text-center text-sm font-medium text-primary md:text-base"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        Explore how I consistently delivered maximum results in my previous
        projects.
      </p>
      <div data-aos="zoom-in" data-aos-duration="600" data-aos-once="true">
        <ProjectListProjectSection />
      </div>
      <ProjectGetInTouchSection />
    </div>
  );
};

export default Project;
