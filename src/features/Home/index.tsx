import type { FC } from "react";
import { HomeHeaderSection, HomeMainContent } from "./section";

const Home: FC = () => {
  return (
    <>
      <HomeHeaderSection />
      <HomeMainContent />
    </>
  );
};

export default Home;
