import Link from "next/link";
import Dominos from "./models";
import Image from "next/image";
import secret from "../../public/images/secret.webp";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen w-full flex-col justify-center leading-relaxed">
        <p className="ml-1 pb-3 text-sm text-accent md:pb-7 md:text-base">
          Hi, my name is
        </p>
        <h1 className="pb-1 text-4xl font-semibold text-secondary md:pb-4 md:text-5xl lg:text-6xl">
          Ulinnaja Aldi.
        </h1>
        <h1 className="pb-4 text-4xl font-semibold text-primary md:pb-8 md:text-5xl lg:text-6xl">
          I build things for the web.
        </h1>
        <p className="w-full text-sm text-primary md:w-[540px] md:text-base">
          {`I'm a Front-End software engineer specializes in building (and sometimes designing) amazing and new digital experiences. Currently, I am focusing on creating interactive 3d website applications for industrial needs.`}
        </p>
        <div className="mt-10 text-sm md:mt-16">
          <Link
            href="/"
            className="rounded-[4px] border-2 border-accent px-7 py-5 text-accent transition-all duration-300 hover:bg-accent hover:bg-opacity-10"
          >
            View my cv here!
          </Link>
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
        <div className="z-40 ">
          <h2 className="pb-2 text-3xl font-bold leading-tight text-secondary md:pb-0 md:text-4xl md:leading-relaxed lg:text-5xl lg:leading-relaxed">
            Delivering modern,
            <br />
            cohensive & instuitive web solution.
          </h2>
          <p className="text-sm text-primary md:text-base">
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
