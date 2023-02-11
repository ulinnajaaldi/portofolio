import React from "react";
import Image from "next/image";
import ulin from "../../../public/images/ulin.webp";
import { Tools, Stack } from "../icons.components";
import Card from "./card.components";

export default function About() {
  return (
    <div>
      <div className="flex h-screen items-center justify-between">
        <div className="flex flex-col justify-center text-primary">
          <div className="flex items-center gap-5 pb-10">
            <h1 className="text-2xl font-semibold text-secondary">
              <span className="font-mono text-xl font-normal text-accent">
                02.{" "}
              </span>
              About Me
            </h1>
            <div className="h-[1px] w-96 bg-primary"></div>
          </div>
          <div className="flex flex-col gap-5 ">
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
        <div className="pl-24">
          <div className="grayscale transition-all duration-500 hover:grayscale-0">
            <Image src={ulin} alt="ulin" height={1000} />
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 pb-12">
          <div className="h-[1px] w-12 bg-primary"></div>
          <h1 className="text-2xl font-semibold text-secondary">Tech stack</h1>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {Object.keys(Stack).map((stack, index) => (
            <div key={index} className="flex items-center gap-5 border">
              <div className="flex h-16 w-16 items-center justify-center">
                <Image
                  src={Stack[stack].src}
                  alt={Stack[stack].name}
                  className="h-[90%] w-[90%] transition-all duration-300 hover:h-full hover:w-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium text-secondary">
                  {Stack[stack].name}
                </h3>
                <p className="font-mono text-sm text-accent">
                  {Stack[stack].level}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}