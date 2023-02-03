import Dominos from "./dominos";
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
          {`I'm a software engineer specializes in building (and sometimes designing) amazing and new digital experiences. Currently, I am focusing on creating interactive 3d website applications for industrial needs`}
        </p>
      </div>
      <div className="flex h-[650px] w-full flex-col justify-center py-24 text-center">
        <div className="z-40 ">
          <h2 className="text-5xl font-bold leading-relaxed text-secondary">
            Delivering modern,
            <br />
            cohensive & instuitive web solution.
          </h2>
          <p className="text-primary">
            I enjoy designing meaningful experiences for brands & businesses to
            help them serve their target users.
          </p>
        </div>
        <div className="bg-base-100 absolute z-0 m-auto opacity-25 ">
          <Dominos />
        </div>
      </div>
    </div>
  );
}
