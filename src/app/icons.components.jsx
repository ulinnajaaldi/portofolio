import htmlIcon from "../../public/icons/html.svg";
import cssIcon from "../../public/icons/css.svg";
import jsIcon from "../../public/icons/js.svg";
import phpIcon from "../../public/icons/php.svg";
import javaIcon from "../../public/icons/java.svg";
import pythonIcon from "../../public/icons/python.svg";
import sassIcon from "../../public/icons/sass.svg";
import bootstrapIcon from "../../public/icons/bootstrap.svg";
import tailwindIcon from "../../public/icons/tailwind.svg";
import reactIcon from "../../public/icons/react.svg";
import nextjsIcon from "../../public/icons/nextjs.svg";
import threejsIcon from "../../public/icons/threejs.svg";
import laravelIcon from "../../public/icons/laravel.svg";
import nodejsIcon from "../../public/icons/nodejs.svg";
import npmIcon from "../../public/icons/npm.svg";
import yarnIcon from "../../public/icons/yarn.svg";
import blenderIcon from "../../public/icons/blender.svg";
import figmaIcon from "../../public/icons/figma.svg";
import gitIcon from "../../public/icons/git.svg";
import githubIcon from "../../public/icons/github.svg";
import mysqlIcon from "../../public/icons/mysql.svg";
import photoshopIcon from "../../public/icons/photoshop.svg";
import splineIcon from "../../public/icons/spline.svg";
import vscodeIcon from "../../public/icons/vscode.svg";
import vite from "../../public/icons/vite.svg";

export const Tools = {
  Git: { name: "Git", src: gitIcon, level: "Version control" },
  Github: { name: "Github", src: githubIcon, level: "Git hosting" },
  NPM: { name: "NPM", src: npmIcon, level: "Package manager" },
  Yarn: { name: "Yarn", src: yarnIcon, level: "Dependency tool" },
  Vite: { name: "Vite", src: vite, level: "Build tool" },
  VSCode: { name: "VSCode", src: vscodeIcon, level: "Code editor" },
  Figma: { name: "Figma", src: figmaIcon, level: "UIUX Design tool" },
  Blender: { name: "Blender", src: blenderIcon, level: "3D software" },
  Spline: { name: "Spline", src: splineIcon, level: "Web 3D design" },
  Photoshop: { name: "Photoshop", src: photoshopIcon, level: "Image editor" },
};

export const Stack = {
  HTML: { name: "HTML", src: htmlIcon, level: "Advanced" },
  CSS: { name: "CSS", src: cssIcon, level: "Advanced" },
  JS: { name: "Javascript", src: jsIcon, level: "Advanced" },
  PHP: { name: "PHP", src: phpIcon, level: "Intermediate" },
  Java: { name: "Java", src: javaIcon, level: "Beginner" },
  Python: { name: "Python", src: pythonIcon, level: "Beginner" },
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Advanced" },
  Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Professional" },
  SASS: { name: "SASS", src: sassIcon, level: "Intermediate" },
  React: { name: "ReactJS", src: reactIcon, level: "Advanced" },
  NextJS: { name: "NextJS", src: nextjsIcon, level: "Intermediate" },
  ThreeJS: {
    name: "ThreeJS",
    src: threejsIcon,
    level: "Use Spline Tools",
  },
  Laravel: { name: "Laravel", src: laravelIcon, level: "Intermediate" },
  NodeJS: { name: "NodeJS", src: nodejsIcon, level: "Beginner" },
  MySQL: { name: "MySQL", src: mysqlIcon, level: "Advanced" },
};
