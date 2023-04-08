//Stack Icons
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

//Project Images
import mulih from "@images/mulih.webp";
import travel from "@images/travel.webp";
import bookshelf from "@images/bookshelf.webp";
import notes from "@images/notes.webp";
import rose from "@images/rose.webp";
import treede from "@images/3d.webp";
import abinawa from "@images/abinawa.webp";
import inpoums from "@images/inpoums.webp";
import portfolio_v1 from "@images/portfolio-v1.webp";
import bertumbuh from "@images/bertumbuh.webp";
import coffe_bean from "@images/coffe-bean.webp";
import dapbunda from "@images/dapbunda.webp";

const tools = {
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

const stacks = {
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

const projects = [
  {
    id: 1,
    name: "Mulih!",
    desc: "My first project was created using HTML, CSS, and JavaScript. This website was created to fulfill the final assignment for the Belajar Dasar Pemrograman Web course from Dicoding.",
    image: mulih,
    web: "https://mulih.netlify.app/",
    repo: "https://github.com/ulinnajaaldi/Dicoding-Mulih",
    stack: "HTML, CSS, JavaScript, Responsive Web Design",
    ongoing: false,
  },
  {
    id: 2,
    name: "Travel.",
    desc: "This website serves as a platform to showcase hidden tourism spots in Bali, Indonesia. In addition to featuring these hidden gems, the website also offers an online booking system.",
    image: travel,
    web: "https://travel-apps.ulinnajaaldi.repl.co",
    repo: "https://github.com/ulinnajaaldi/Vacation-Ticket-PHP",
    stack: "HTML, Javascript, PHP, MySQL, TailwindCSS, DaisyUI, AOS, SwiperJS",
    ongoing: false,
  },
  {
    id: 3,
    name: "Bookshelf",
    desc: "This is a website that allows users to keep track of books they have read or plan to read, utilizing DOM modification and CRUD operations with data storage in LocalStorage.",
    image: bookshelf,
    web: "https://bookshelf-js.vercel.app",
    repo: "https://github.com/ulinnajaaldi/Bookshelf-JS",
    stack: "HTML, Javascript, Bootstrap, SASS, ToastifyJS",
    ongoing: false,
  },
  {
    id: 4,
    name: "Rose for Yours",
    desc: "Experiment in creating interactive 3D objects within a website, where users can input a name to display the object.",
    image: rose,
    web: "https://rose-for-u.vercel.app",
    repo: "https://github.com/ulinnajaaldi/Rose-for-u-too-3",
    stack:
      "Vite, React, React-spline, React-router, TypewriterJS, QuotesAPI, TailwindCSS",
    ongoing: false,
  },
  {
    id: 5,
    name: "3D World Journey",
    desc: "Learning process using spline with react for Interactive 3D Object Web projects",
    image: treede,
    web: "https://ulinnaja-3-d-apps-intective.vercel.app",
    repo: "https://github.com/ulinnajaaldi/React-3D-Object-Intective",
    stack: "React, React-spline, React-router, SwiperJS, TailwindCSS, DaisyUI",
    ongoing: false,
  },
  {
    id: 6,
    name: "Abinawa",
    desc: "This website is designed as a digital learning tool to introduce the art of wayang kulit to the public. The website features interactive 3D models of wayang kulit.",
    image: abinawa,
    web: "http://abinawa.vercel.app",
    repo: "https://github.com/ulinnajaaldi/abinawa",
    stack: "Vite, React, React-spline, React-router, TailwindCSS",
    ongoing: false,
  },
  {
    id: 7,
    name: "Inpo UMS",
    desc: "The purpose of this platform is to provide students with a medium to share information about the latest events or news happening in the UMS community.",
    image: inpoums,
    web: "",
    repo: "https://github.com/ulinnajaaldi/laravel-react-inpo-ums",
    stack: "Laravel, Laravel Breeze, React, React-icons, TailwindCSS, DaisyUI",
    ongoing: false,
  },
  {
    id: 8,
    name: "Notes",
    desc: "Welcome to Notes app! With this app, you can create, edit, delete and organize your notes. You can also sign up and log in to access your notes. This app I made for complete the Dicoding React Fundamental course.",
    image: notes,
    web: "https://notes-app-api-db-dicoding.vercel.app",
    repo: "https://github.com/ulinnajaaldi/Notes",
    stack: "React, React-Icons, React-Router, Rest API, TailwindCSS, DaisyUI",
    ongoing: false,
  },
  {
    id: 9,
    name: "Portfolio",
    desc: "My first personal portfolio!! I designed it by combining different ideas from various sources. It also has a secret game that you can play on your desktop. Can you find it?",
    image: portfolio_v1,
    web: "https://ulinnaja-aldi.vercel.app/",
    repo: "https://github.com/ulinnajaaldi/portofolio",
    stack: "NextJS, TailwindCSS, ThreeJS, React-spline",
    ongoing: false,
  },
  {
    id: 10,
    name: "Bertumbuh",
    desc: "Trying to slice from Figma correctly to create a responsive website, and actually, it is already very good for being responsive (can be checked through inspect), but sometimes on certain screens, the margin is not read properly.",
    image: bertumbuh,
    web: "https://bertumbuh.vercel.app/",
    repo: "",
    stack: "React, React-Icons, React-Router, TailwindCSS",
    ongoing: false,
  },
  {
    id: 11,
    name: "Coffe Bean",
    desc: "Interactive website featuring a 3D model that can be rendered online. I wanted to apply the creative idea I had, even if it was just from a picture ✨, I hope you enjoy the enjoyable experience on the website!",
    image: coffe_bean,
    web: "https://coffee-bean-3d.vercel.app/",
    repo: "https://github.com/ulinnajaaldi/coffee-bean",
    stack: "Vite, React, React-Icons, TailwindCSS, Spline, Framer Motion",
    ongoing: false,
  },
  {
    id: 12,
    name: "DapBunda Meal",
    desc: "This website provides information about various meals and how to cook them 🍴, using the API from TheMealDB. I created this website to complete the Dicoding Front End Fundamental course.",
    image: dapbunda,
    web: "https://dapbunda.vercel.app/",
    repo: "https://github.com/ulinnajaaldi/dicoding-dapbunda-fe-fundamental",
    stack: "Webpack, Axios, TailwindCSS, DaisyUI, AOS",
    ongoing: false,
  },
];

export { tools, stacks, projects };
