import dynamic from "next/dynamic";

export const HomeHeaderSection = dynamic(() => import("./HeaderSection"));
export const HomeMainContent = dynamic(() => import("./MainContent"));
