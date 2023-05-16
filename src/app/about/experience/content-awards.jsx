export const ContentAward = () => {
  return (
    <div className="text-primary">
      <h3 className="text-lg font-medium leading-loose text-secondary md:text-xl">
        1st Runner Up UI/UX Competition
        <span className=" text-accent">
          {" "}
          @
          <a
            href="https://www.instagram.com/himatifums/"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            CIF BEM-FKI
          </a>
        </span>
      </h3>
      <p className="pb-5 font-mono text-sm lg:text-base">July 2022</p>
      <ul className="flex list-inside list-disc flex-col gap-4 text-sm leading-relaxed lg:text-base">
        <li>
          The UI/UX Competition Project organized by the Communication and
          Informatic Festival BEM FKI with the theme {`"`}Menilik Jendela
          Cakrawala{`"`}
        </li>
        <li>
          Our team of three developed a project called{" "}
          <a
            href="https://www.figma.com/proto/RID0jaEou3qDxGEepjxSAw/Rawuh?page-id=51%3A2&node-id=51%3A3&starting-point-node-id=51%3A3&scaling=scale-down-width"
            target="_blank"
            rel="noreferrer"
            className="text-underline"
          >
            Rawuh
          </a>
          , which is a travel website aimed at promoting hidden tourist
          destinations in Indonesia.
        </li>
      </ul>
    </div>
  );
};
