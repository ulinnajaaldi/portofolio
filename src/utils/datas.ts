// Project Images
import mulih from "@images/mulih.webp";
import travel from "@images/travel.webp";
import bookshelf from "@images/bookshelf.webp";
import notes from "@images/notes.webp";
import treede from "@images/3d.webp";
import abinawa from "@images/abinawa.webp";
import inpoums from "@images/inpoums.webp";
import portfolio_v1 from "@images/portfolio-v1.webp";
import bertumbuh from "@images/bertumbuh.webp";
import coffe_bean from "@images/coffe-bean.webp";
import dapbunda from "@images/dapbunda.webp";
import hpcjapan from "@images/hpc-japan.webp";
import ceritain from "@images/ceritain.webp";
import pinarak_resto from "@images/pinarak_resto.webp";

// Gif Images
import dapbundaGif from "@gif/dapbunda.gif";
import coffebeanGif from "@gif/coffe-bean.gif";
import portfolioGif from "@gif/portfolio.gif";
import notesGif from "@gif/notes.gif";
import abinawaGif from "@gif/abinawa.gif";
import bookshelfGif from "@gif/bookshelf.gif";
import sakurajapanGif from "@gif/sakura-japan.gif";
import ceritainGif from "@gif/ceritain.gif";
import pinarakrestoGif from "@gif/pinarak-resto.gif";
import ICONS from "@/constants/icons";
import { StaticImageData } from "next/image";

const tools = {
  Git: { name: "Git", src: ICONS.git, level: "Version control" },
  Github: { name: "Github", src: ICONS.github, level: "Git hosting" },
  NPM: { name: "PNPM", src: ICONS.npm, level: "Depedencies manager" },
  VSCode: { name: "VSCode", src: ICONS.vscodeCodeEditor, level: "Code editor" },
  Figma: { name: "Figma", src: ICONS.figma, level: "UIUX Design tool" },
  Blender: { name: "Blender", src: ICONS.blender, level: "3D software" },
  Spline: { name: "Spline", src: ICONS.spline, level: "Web 3D design" },
  Firebase: {
    name: "Firebase",
    src: ICONS.firebase,
    level: "Database,Auth,Realtime",
  },
  MongoDB: {
    name: "MongoDB",
    src: ICONS.mongodb,
    level: "NoSQL database",
  },
  MySQL: {
    name: "MySQL",
    src: ICONS.mysqlDb,
    level: "Relational database",
  },
  PostgreSQL: {
    name: "PostgreSQL",
    src: ICONS.postgreSQL,
    level: "Relational database",
  },
};

interface IStack {
  name: string;
  src: string | StaticImageData;
  level: "Beginer" | "Intermediate" | "Advanced" | "Expert";
}

const stacks: Record<string, IStack> = {
  HTML: { name: "HTML", src: ICONS.html5, level: "Expert" },
  CSS: { name: "CSS", src: ICONS.css3, level: "Expert" },
  SASS: { name: "SASS", src: ICONS.sass, level: "Advanced" },
  JS: { name: "Javascript", src: ICONS.js, level: "Expert" },
  Typescript: {
    name: "Typescript",
    src: ICONS.typescriptTsLogo,
    level: "Expert",
  },
  // Styling / UI Frameworks
  Tailwind: { name: "TailwindCSS", src: ICONS.tailwind, level: "Expert" },
  Bootstrap: { name: "Bootstrap", src: ICONS.bootstrap, level: "Expert" },
  MaterialUI: {
    name: "MaterialUI",
    src: ICONS.materialUI,
    level: "Intermediate",
  },
  Shadcn: { name: "Shadcn", src: ICONS.shadcn, level: "Expert" },

  // 3. JavaScript Frameworks & Libraries
  React: { name: "React", src: ICONS.react, level: "Expert" },
  ReactNative: { name: "React Native", src: ICONS.react, level: "Advanced" },
  NextJS: { name: "Next", src: ICONS.nextjs, level: "Expert" },
  Vue: { name: "Vue", src: ICONS.vue, level: "Intermediate" },
  ThreeJS: {
    name: "ThreeJS",
    src: ICONS.threejs,
    level: "Intermediate",
  },
  Vite: { name: "Vite", src: ICONS.vite, level: "Advanced" },
  Webpack: { name: "Webpack", src: ICONS.webpackBundler, level: "Advanced" },
  Storybook: { name: "Storybook", src: ICONS.storybook, level: "Advanced" },
  ReactQuery: {
    name: "React Query",
    src: ICONS.reactQueryLogo,
    level: "Expert",
  },

  // 4. Backend / Fullstack Technologies
  Express: { name: "Express", src: ICONS.express, level: "Advanced" },
  HonoJs: { name: "Hono", src: ICONS.honoJs, level: "Expert" },
  WebSocket: {
    name: "WebSocket",
    src: ICONS.websocket,
    level: "Intermediate",
  },
  Laravel: { name: "Laravel", src: ICONS.laravel, level: "Intermediate" },

  // 5. Databases & ORMs
  PrismaORM: {
    name: "Prisma ORM",
    src: ICONS.prismaOrm,
    level: "Intermediate",
  },
  DrizzleOrm: {
    name: "Drizzle ORM",
    src: ICONS.drizzleOrm,
    level: "Advanced",
  },
};

const projects = [
  {
    id: 1,
    name: "Mulih!",
    desc: "My first project was created using HTML, CSS, and JavaScript. This website was created to fulfill the final assignment for the Basics of Web Programming course from Dicoding ⭐5.",
    image: mulih,
    web: "https://mulih.netlify.app/",
    repo: "https://github.com/ulinnajaaldi/Dicoding-Mulih",
    stack: "HTML, CSS, JavaScript, Responsive Web Design",
    gif: "",
  },
  {
    id: 2,
    name: "Travel.",
    desc: "This website serves as a platform to showcase hidden tourism spots in Bali, Indonesia. In addition to featuring these hidden gems, the website also offers an online booking system.",
    image: travel,
    web: "https://travel-apps.ulinnajaaldi.repl.co",
    repo: "https://github.com/ulinnajaaldi/Vacation-Ticket-PHP",
    stack: "HTML, Javascript, PHP, MySQL, TailwindCSS, DaisyUI, AOS, SwiperJS",
    gif: "",
  },
  {
    id: 3,
    name: "Bookshelf",
    desc: "This is a website that allows users to keep track of books they have read or plan to read, utilizing DOM modification and CRUD operations with data storage in LocalStorage ⭐5.",
    image: bookshelf,
    web: "https://bookshelf-js.vercel.app",
    repo: "https://github.com/ulinnajaaldi/Bookshelf-JS",
    stack: "HTML, Javascript, Bootstrap, SASS, ToastifyJS",
    gif: bookshelfGif,
  },
  {
    id: 4,
    name: "3D World Journey",
    desc: "Learning process using spline with react for Interactive 3D Object Web projects",
    image: treede,
    web: "https://ulinnaja-3-d-apps-intective.vercel.app",
    repo: "https://github.com/ulinnajaaldi/React-3D-Object-Intective",
    stack: "React, React-spline, React-router, SwiperJS, TailwindCSS, DaisyUI",
    gif: "",
  },
  {
    id: 5,
    name: "Abinawa",
    desc: "This website is designed as a digital learning tool to introduce the art of wayang kulit to the public. The website features interactive 3D models of wayang kulit.",
    image: abinawa,
    web: "http://abinawa.vercel.app",
    repo: "https://github.com/ulinnajaaldi/abinawa",
    stack: "Vite, React, React-spline, React-router, TailwindCSS",
    gif: abinawaGif,
  },
  {
    id: 6,
    name: "Inpo UMS",
    desc: "The purpose of this platform is to provide students with a medium to share information about the latest events or news happening in the UMS community.",
    image: inpoums,
    web: "",
    repo: "https://github.com/ulinnajaaldi/laravel-react-inpo-ums",
    stack: "Laravel, Laravel Breeze, React, React-icons, TailwindCSS, DaisyUI",
    gif: "",
  },
  {
    id: 7,
    name: "Notes",
    desc: "Welcome to Notes app! With this app, you can create, edit, delete and organize your notes. You can also sign up and log in to access your notes. This app I made for complete the Dicoding React Fundamental course ⭐5.",
    image: notes,
    web: "https://notes-app-api-db-dicoding.vercel.app",
    repo: "https://github.com/ulinnajaaldi/Notes",
    stack: "React, React-Icons, React-Router, Rest API, TailwindCSS, DaisyUI",
    gif: notesGif,
  },
  {
    id: 8,
    name: "Portfolio",
    desc: "My first personal portfolio!! I designed it by combining different ideas from various sources. It also has a secret game that you can play on your desktop. Can you find it? 🛸",
    image: portfolio_v1,
    web: "https://ulinnaja-aldi.vercel.app/",
    repo: "https://github.com/ulinnajaaldi/portofolio",
    stack: "NextJS, TailwindCSS, ThreeJS, React-spline",
    gif: portfolioGif,
  },
  {
    id: 9,
    name: "Bertumbuh (Slice)",
    desc: "Trying to slice from Figma correctly to create a responsive website, and actually, it is already very good for being responsive (can be checked through inspect), but sometimes on certain screens, the margin is not read properly.",
    image: bertumbuh,
    web: "https://bertumbuh.vercel.app/",
    repo: "",
    stack: "React, React-Icons, React-Router, TailwindCSS",
    gif: "",
  },
  {
    id: 10,
    name: "Coffe Bean",
    desc: "Interactive website featuring a 3D model that can be rendered online. I wanted to apply the creative idea I had, even if it was just from a picture ✨, I hope you enjoy the enjoyable experience on the website!",
    image: coffe_bean,
    web: "https://coffee-bean-3d.vercel.app/",
    repo: "https://github.com/ulinnajaaldi/coffee-bean",
    stack: "Vite, React, React-Icons, TailwindCSS, Spline, Framer Motion",
    gif: coffebeanGif,
  },
  {
    id: 11,
    name: "DapBunda Meal",
    desc: "This website provides information about various meals and how to cook them 🍴, using the API from TheMealDB. I created this website to complete the Dicoding Front End Fundamental course.",
    image: dapbunda,
    web: "https://dapbunda.vercel.app/",
    repo: "https://github.com/ulinnajaaldi/dicoding-dapbunda-fe-fundamental",
    stack: "Webpack, Axios, TailwindCSS, DaisyUI, AOS",
    gif: dapbundaGif,
  },
  {
    id: 12,
    name: "Sakura Japan HPC",
    desc: "This website was crafted during my role as a speaker at Himatif Portable Club (HPC) 2023, aimed at introducing basic web development. If you're keen on learning how to build this site, please visit the project repository 🚀",
    image: hpcjapan,
    web: "https://sakura-japan-hpc.vercel.app/",
    repo: "https://github.com/ulinnajaaldi/sakura-japan-hpc",
    stack: "HTML, Javascript, TailwindCSS, Custom Element Javascript",
    gif: sakurajapanGif,
  },
  {
    id: 13,
    name: "Ceritain!",
    desc: "This website was developed as part of the final assignment for the Intermediate Front-End Web Tools course by Dicoding ⭐4. It is designed to enable users to share their stories, photos, and current location.",
    image: ceritain,
    web: "https://ceritain-app.web.app/",
    repo: "https://github.com/ulinnajaaldi/story-app-fe-intermediate",
    stack: "Javascript, Webpack, Axios, LitElement, Saas, Bootstrap, Firebase",
    gif: ceritainGif,
  },
  {
    id: 14,
    name: "Pinarak Resto",
    desc: "This website was developed as part of the final assignment for the Front-End Web Developer Expert course by Dicoding ⭐5, and this website serves as an informational platform where users can comment on each restaurant.",
    image: pinarak_resto,
    web: "https://pinarak-resto.netlify.app/",
    repo: "https://github.com/ulinnajaaldi/dicoding-pinarak-fe-expert",
    stack: "Javascript, Webpack, PWA, IDB, CodeceptJs, Jasmine, Karma, Sass",
    gif: pinarakrestoGif,
  },
];

export { tools, stacks, projects };
