import type { FC } from "react";
import Image from "next/image";
import ulin from "@images/ulin.webp";

const HeaderSection: FC = () => {
  return (
    <section className="mt-32 flex h-auto flex-col items-center justify-between lg:mt-6 lg:h-screen lg:flex-row xl:mt-0">
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
            Hello! My name is Aldilla Ulinnaja, an Informatics Engineering
            student with experience and interest in Web Development. I
            specialize in{" "}
            <span className="text-accent">Frontend Development</span> and have
            some experience in{" "}
            <span className="text-accent">Backend Development</span> using
            JavaScript or TypeScript.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="100">
            As an Informatics Engineering student, I have strong knowledge and
            expertise in the <b>ReactJS Ecosystem</b>. I possess the ability to
            create websites and applications that are both user-friendly and
            visually captivating.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="200">
            I am constantly striving to improve my skills and knowledge. I
            believe that ongoing training and personal projects are key to
            success. I am committed to staying up-to-date with the latest
            developments in my field and continuously expanding my knowledge and
            skills.
          </p>
          <p data-aos="zoom-in-right" data-aos-delay="300">
            And oh, there's a little twist &#x2013; I'm also into the world of
            3D modeling, though I confess I might not be diving into its depths
            just yet. It's like my side quest that adds a dash of excitement.
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
    </section>
  );
};

export default HeaderSection;
