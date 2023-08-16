import Dominos from "./models";
import Image from "next/image";
import secret from "@images/secret.webp";

export const metadata = {
  title: "Ulinnaja Aldi",
  description:
    "Ulinnaja Aldi is a Front-End software engineer specializes in building (and sometimes designing) amazing and new digital experiences.",
};

export default function Home() {
  return (
    <div>
      <div className="flex h-[80vh] w-full flex-col justify-center px-0 pt-44 leading-relaxed md:h-screen md:pt-16 lg:px-[70px] lg:pt-12 ">
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
          className="w-full text-sm leading-relaxed text-primary md:w-[540px] md:text-base"
          data-aos="zoom-in-up"
        >
          I'm a Front-End Software Engineer with a year of web development
          experience, specializing in the JavaScript. I'm passionate about
          staying current with the latest industry advancements and consistently
          enhancing my skills.
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
      </div>
      <div className="flex h-[650px] w-full flex-col items-center justify-center py-24 text-center ">
        <div className="absolute mb-[-430px] mr-[10px] md:mb-[400px] md:mr-[200px] lg:mr-[300px] xl:mr-[480px]">
          <Image
            src={secret}
            alt="secret game"
            className="h-[150px] w-auto opacity-20 md:h-[200px] lg:h-[250px]"
          />
        </div>
        <div className="z-40 mb-0 md:mb-10">
          <h2
            className="pb-2 text-3xl font-bold leading-tight text-secondary md:pb-0 md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed"
            data-aos="zoom-in-up"
            data-aos-duration="300"
          >
            Delivering modern,
            <br />
            cohensive & instuitive web solution.
          </h2>
          <p
            className="text-sm text-primary md:text-base"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            I enjoy designing meaningful experiences for brands & businesses to
            help them serve their target users.
          </p>
        </div>
        <div className="bg-base-100 absolute z-0 m-auto h-[600px] w-[350px] opacity-25 md:w-[672px] lg:w-[825px] xl:w-[1080px]">
          <Dominos />
        </div>
      </div>
    </div>
  );
}
