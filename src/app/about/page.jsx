import React from "react";
import Image from "next/image";
import ulin from "@images/ulin.webp";
import { tools, stacks } from "@/utils/datas";
import CardAbout from "@/components/card/card-about";
import Experience from "./experience/experience";

export const metadata = {
  title: "About | Ulinnaja Aldi",
  description:
    "About Ulinnaja Aldi | Hello! My real name is Aldilla Ulinnaja, an Informatics Engineering student interested and experienced in web development, UI design, and 3D modeling.",
};

export default function About() {
  return (
    <section>
      <div className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
        <div className="flex flex-col justify-center text-primary">
          <div className="flex items-center gap-5 pb-10">
            <h1
              className="text-xl font-semibold text-secondary lg:text-2xl"
              data-aos="fade-left"
              data-aos-duration="300"
            >
              <span className="font-mono text-lg font-normal text-accent lg:text-xl">
                02.{" "}
              </span>
              About Me
            </h1>
            <div
              className="h-[1px] w-32 bg-primary md:w-96"
              data-aos="zoom-in-left"
              data-aos-duration="600"
            ></div>
          </div>
          <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
            <p data-aos="zoom-in-right">
              Hello! My real name is Aldilla Ulinnaja, an Informatics
              Engineering student interested and experienced in web development,
              UI design, and 3D modeling.
            </p>
            <p data-aos="zoom-in-right" data-aos-delay="100">
              As an Informatics Engineering student, I have strong knowledge and
              expertise in web programming and UI design. I am capable of making
              user-friendly and visually appealing websites and applications.
            </p>
            <p data-aos="zoom-in-right" data-aos-delay="200">
              In addition to web development and UI design, I am also skilled in
              3D modeling. This skill helps me create realistic and impressive
              visuals.
            </p>
            <p data-aos="zoom-in-right" data-aos-delay="300">
              I am constantly striving to improve my skills and knowledge. I
              believe that ongoing training and personal projects are key to
              success. I am committed to staying up-to-date with the latest
              developments in my field and continuously expanding my knowledge
              and skills.
            </p>
          </div>
        </div>
        <div
          className="-my-20 pl-0 md:-my-40 lg:-my-0 xl:pl-24"
          data-aos="zoom-in"
          data-aos-duration="300"
        >
          <div className="grayscale transition-all duration-500 hover:grayscale-0">
            <Image
              src={ulin}
              alt="ulin"
              height={1000}
              className="scale-50 lg:scale-100 2xl:scale-75"
            />
          </div>
        </div>
      </div>
      <div className="pt-[100px] pb-[50px] lg:pb-[60px]">
        <Experience />
      </div>
      <div>
        <div className="flex items-center gap-2 pb-12">
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
                src={stacks[stack].src}
                name={stacks[stack].name}
                level={stacks[stack].level}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 pb-12">
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
            Tools used
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 pb-32 md:grid-cols-3 md:gap-8 xl:grid-cols-4 xl:gap-10 2xl:gap-12">
          {Object.keys(tools).map((tool, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${index}00`}
              data-aos-duration="300"
              data-aos-once="true"
            >
              <CardAbout
                src={tools[tool].src}
                name={tools[tool].name}
                level={tools[tool].level}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
