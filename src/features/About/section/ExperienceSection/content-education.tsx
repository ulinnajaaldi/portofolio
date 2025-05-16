export const ContentEducation = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        Informatics Engineering
        <span className="text-base text-accent">
          {" "}
          @
          <a
            href="https://informatika.ums.ac.id"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Muhammadiyah Surakarta University
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">Aug 2020 - Present</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          Activities and Associations: Himpunan Mahasiswa Teknik Informatika and
          Event Committee.
        </li>
        <li>
          Becoming the #1 Hokage of GDSC UMS, core member of the web development
          team, active contribution in the first-year development of GDSC UMS.
        </li>
        <li>
          Graduated with a final thesis building INNOVATION OF ACADEMIC
          INFORMATION SYSTEM - A REACT NATIVE-BASED APPLICATION
        </li>
      </ul>
    </div>
  );
};
