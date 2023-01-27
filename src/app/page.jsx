export default function Home() {
  return (
    <div>
      <div className="flex h-screen w-full flex-col justify-center leading-relaxed">
        <p className="ml-1 pb-7 text-base text-accent">Hi, my name is</p>
        <h1 className="pb-4 text-6xl font-semibold text-base-300">
          Aldilla Ulinnaja.
        </h1>
        <h1 className="pb-8 text-6xl font-semibold">
          I build things for the web.
        </h1>
        <p className="text-md w-[540px]">
          {`I'm a software engineer specializes in building (and sometimes designing) amazing and new digital experiences. Currently, I am focusing on creating interactive 3d website applications for industrial needs`}
        </p>
      </div>
    </div>
  );
}
