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
          I enrolled in the Informatics Engineering program with the motivation
          that commercial jobs would be replaced by technology in the future, so
          I decided to pursue this field of study.
        </li>
        <li>
          During the first four semesters, I was more interested in graphic
          design and 3D modeling, and I even created a{" "}
          <a
            href="https://www.youtube.com/c/UlinnajaTbx"
            className="text-underline"
            target="_blank"
            rel="noreferrer"
          >
            YouTube channel
          </a>{" "}
          with content on Unity game modding, which now has over 20k++
          subscribers.
        </li>
        <li>
          Starting from the fifth semester, I realized that coding was my main
          goal in pursuing this major. Therefore, I began to learn about
          programming and fell in love with coding ✨
        </li>
      </ul>
    </div>
  );
};
