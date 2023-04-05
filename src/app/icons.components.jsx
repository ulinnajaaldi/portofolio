import htmlIcon from "@icons/html.svg";
import cssIcon from "@icons/css.svg";
import jsIcon from "@icons/js.svg";
import phpIcon from "@icons/php.svg";
import javaIcon from "@icons/java.svg";
import pythonIcon from "@icons/python.svg";
import sassIcon from "@icons/sass.svg";
import bootstrapIcon from "@icons/bootstrap.svg";
import tailwindIcon from "@icons/tailwind.svg";
import reactIcon from "@icons/react.svg";
import nextjsIcon from "@icons/nextjs.svg";
import threejsIcon from "@icons/threejs.svg";
import laravelIcon from "@icons/laravel.svg";
import nodejsIcon from "@icons/nodejs.svg";
import npmIcon from "@icons/npm.svg";
import yarnIcon from "@icons/yarn.svg";
import blenderIcon from "@icons/blender.svg";
import figmaIcon from "@icons/figma.svg";
import gitIcon from "@icons/git.svg";
import githubIcon from "@icons/github.svg";
import mysqlIcon from "@icons/mysql.svg";
import photoshopIcon from "@icons/photoshop.svg";
import splineIcon from "@icons/spline.svg";
import vscodeIcon from "@icons/vscode.svg";
import vite from "@icons/vite.svg";

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
  Bootstrap: { name: "Bootstrap", src: bootstrapIcon, level: "Intermediate" },
  Tailwind: { name: "TailwindCSS", src: tailwindIcon, level: "Advanced" },
  SASS: { name: "SASS", src: sassIcon, level: "Intermediate" },
  React: { name: "ReactJS", src: reactIcon, level: "Advanced" },
  NextJS: { name: "NextJS", src: nextjsIcon, level: "Intermediate" },
  ThreeJS: {
    name: "ThreeJS",
    src: threejsIcon,
    level: "Use Spline Tools",
  },
  Laravel: { name: "Laravel", src: laravelIcon, level: "Beginer" },
  NodeJS: { name: "NodeJS", src: nodejsIcon, level: "Beginner" },
  MySQL: { name: "MySQL", src: mysqlIcon, level: "Intermediate" },
};
