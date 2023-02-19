import React from "react";
import ListProject from "./list-project";

export default function Project() {
  return (
    <div className="mt-40 flex flex-col items-center justify-center">
      <h1
        className="text-center text-2xl font-semibold leading-relaxed text-secondary md:text-3xl"
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
        Discover our track record of success
      </p>
      <div data-aos="zoom-in" data-aos-duration="600" data-aos-once="true">
        <ListProject />
      </div>
      <div className="my-60 flex flex-col items-center justify-center gap-3 text-center md:gap-5">
        <p className="font-mono text-accent" data-aos="fade-up">
          What{`'`}s Next?
        </p>
        <h1
          className="pb-1 text-4xl font-semibold leading-relaxed text-secondary md:text-5xl"
          data-aos="zoom-in-up"
        >
          Get In Touch
        </h1>
        <p
          className="w-full pb-8 text-sm leading-relaxed text-primary md:w-5/6 md:text-base lg:w-4/6 xl:w-1/2"
          data-aos="zoom-in-up"
        >
          I am currently seeking job opportunities to gain more experience in
          the industry. Whether you have any questions or simply want to say hi,
          I will do my best to get back to you!
        </p>
        <button
          className="rounded-[4px] border-2 border-accent px-7 py-4 font-mono text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
          data-aos="flip-up"
          data-aos-duration="600"
        >
          <a href="mailto:ulinnajaaldi24@gmail.com">Say Hello</a>
        </button>
      </div>
    </div>
  );
}
