import type { FC } from "react";
import { stacks } from "@/utils/datas";
import { CardAbout } from "@/components";

const TechstackSection: FC = () => {
  return (
    <section className="flex flex-col space-y-12">
      <div className="flex items-center gap-2">
        <div
          className="h-[1px] w-12 bg-primary"
          data-aos="zoom-in-right"
          data-aos-duration="300"
          data-aos-once="true"
        ></div>
        <h1
          className="text-xl font-semibold text-secondary md:text-2xl"
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-once="true"
        >
          Tech stack
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
        {Object.keys(stacks).map((stack, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={`${index}00`}
            data-aos-duration="300"
            data-aos-once="true"
          >
            <CardAbout
              images={stacks[stack].src}
              title={stacks[stack].name}
              informationLevel={stacks[stack].level}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechstackSection;
