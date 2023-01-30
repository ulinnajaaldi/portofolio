export default function Home() {
  return (
    <div>
      <div className="flex h-screen w-full flex-col justify-center leading-relaxed">
        <p className="ml-1 pb-3 text-sm text-accent md:pb-7 md:text-base">
          Hi, my name is
        </p>
        <h1 className="pb-1 text-4xl font-semibold text-base-300 md:pb-4 md:text-5xl lg:text-6xl">
          Aldilla Ulinnaja.
        </h1>
        <h1 className="pb-4 text-4xl font-semibold md:pb-8 md:text-5xl lg:text-6xl">
          I build things for the web.
        </h1>
        <p className="w-full text-sm md:w-[540px] md:text-base">
          {`I'm a software engineer specializes in building (and sometimes designing) amazing and new digital experiences. Currently, I am focusing on creating interactive 3d website applications for industrial needs`}
        </p>
      </div>
      <div>
        <h2>Delivering modern, cohensive & instuitive web solution</h2>
      </div>
    </div>
  );
}
