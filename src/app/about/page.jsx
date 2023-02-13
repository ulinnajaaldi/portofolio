import React from "react";
import Image from "next/image";
import ulin from "../../../public/images/ulin.webp";
import { Tools, Stack } from "../icons.components";
import Card from "./card.components";
import Experience from "./experience";

export default function About() {
  return (
    <div>
      <div className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
        <div className="flex flex-col justify-center text-primary">
          <div className="flex items-center gap-5 pb-10">
            <h1 className="text-xl font-semibold text-secondary lg:text-2xl">
              <span className="font-mono text-lg font-normal text-accent lg:text-xl">
                02.{" "}
              </span>
              About Me
            </h1>
            <div className="h-[1px] w-96 bg-primary"></div>
          </div>
          <div className="flex flex-col gap-5 pr-0 text-sm md:text-base lg:pr-10 xl:pr-0">
            <p>
              Hello! My real name is Aldilla Ulinnaja, an Informatics
              Engineering student interested and experienced in web development,
              UI design, and 3D modeling.
            </p>
            <p>
              As an Informatics Engineering student, I have strong knowledge and
              expertise in web programming and UI design. I am capable of making
              user-friendly and visually appealing websites and applications.
            </p>
            <p>
              In addition to web development and UI design, I am also skilled in
              3D modeling. This skill helps me create realistic and impressive
              visuals.
            </p>
            <p>
              I am constantly striving to improve my skills and knowledge. I
              believe that ongoing training and personal projects are key to
              success. I am committed to staying up-to-date with the latest
              developments in my field and continuously expanding my knowledge
              and skills.
            </p>
          </div>
        </div>
        <div className="-my-0 pl-0 md:-my-40 xl:pl-24">
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
      <div className="py-[100px]">
        <Experience />
      </div>
      <div>
        <div className="flex items-center gap-2 pb-12">
          <div className="h-[1px] w-12 bg-primary"></div>
          <h1 className="text-2xl font-semibold text-secondary">Tech stack</h1>
        </div>
        <div className="grid grid-cols-2 gap-8 pb-32 lg:grid-cols-3 xl:grid-cols-4">
          {Object.keys(Stack).map((stack, index) => (
            <Card
              src={Stack[stack].src}
              name={Stack[stack].name}
              level={Stack[stack].level}
              key={index}
            />
          ))}
        </div>
        <div className="flex items-center gap-2 pb-12">
          <div className="h-[1px] w-12 bg-primary"></div>
          <h1 className="text-2xl font-semibold text-secondary">Tools used</h1>
        </div>
        <div className="grid grid-cols-2 gap-8 pb-32 lg:grid-cols-3 xl:grid-cols-4">
          {Object.keys(Tools).map((tools, index) => (
            <Card
              src={Tools[tools].src}
              name={Tools[tools].name}
              level={Tools[tools].level}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
