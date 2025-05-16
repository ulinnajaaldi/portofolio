import type { FC } from "react";

const HeaderSection: FC = () => {
  return (
    <section className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12 ">
      <p
        className="ml-1 hidden pb-3 text-sm text-accent md:block md:pb-7 md:text-base"
        data-aos="fade-up"
      >
        Hi, my name is
      </p>
      <h1
        className="pb-1 text-4xl font-semibold text-secondary md:mt-0 md:pb-4 md:text-5xl lg:text-6xl"
        data-aos="fade-up"
      >
        Ulinnaja Aldi.
      </h1>
      <h1
        className="pb-4 text-4xl font-semibold text-primary md:pb-8 md:text-5xl lg:text-6xl"
        data-aos="fade-up"
      >
        I build things for the web.
      </h1>
      <p
        className="w-full text-sm leading-relaxed text-primary md:w-[640px] md:text-base"
        data-aos="zoom-in-up"
      >
        I'm a software engineer with over three years of experience, primarily
        focused on web development and specializing in TypeScript. I am
        passionate about staying current with the latest industry advancements
        and continuously enhancing my skills.
      </p>
      <div
        className="mt-10 text-sm md:mt-14"
        data-aos="flip-up"
        data-aos-duration="600"
      >
        <a
          className="rounded-[4px] border-2 border-accent px-7 py-5 text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
          href="https://drive.google.com/drive/folders/1QoujbRghInMFjV5ECmudG3Mho-aOdngI?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <button>View my cv here!</button>
        </a>
      </div>
    </section>
  );
};

export default HeaderSection;
