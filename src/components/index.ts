import dynamic from "next/dynamic";

export const CardAbout = dynamic(() => import("./Card/card-about"));
export const CardProject = dynamic(() => import("./Card/card-project"));
export const Contact = dynamic(() => import("./Contact"));
export const Footer = dynamic(() => import("./Footer"));
export const Loading = dynamic(() => import("./Loading"));
export const Navbar = dynamic(() => import("./Navbar"));
export const Dominos = dynamic(() => import("./Dominos"));
