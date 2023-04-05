import mulih from "@images/mulih.webp";
import travel from "@images/travel.webp";
import bookshelf from "@images/bookshelf.webp";
import notes from "@images/notes.webp";
import rose from "@images/rose.webp";
import treede from "@images/3d.webp";
import abinawa from "@images/abinawa.webp";
import inpoums from "@images/inpoums.webp";
import wip from "@images/wip.webp";
import portfolio_v1 from "@images/portfolio-v1.webp";
import bertumbuh from "@images/bertumbuh.webp";
import coffe_bean from "@images/coffe-bean.webp";

const datas = [
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
    name: "Notes",
    desc: "This website is designed to create a note-taking application that includes user authentication and CRUD operations utilizing an API as the service provider.",
    image: notes,
    web: "https://notes-app-api-db-dicoding.vercel.app",
    repo: "https://github.com/ulinnajaaldi/Notes",
    stack: "React, React-Icons, React-Router, Rest API, TailwindCSS, DaisyUI",
    ongoing: false,
  },
  {
    id: 5,
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
    id: 6,
    name: "3D World Journey",
    desc: "Learning process using spline with react for Interactive 3D Object Web projects",
    image: treede,
    web: "https://ulinnaja-3-d-apps-intective.vercel.app",
    repo: "https://github.com/ulinnajaaldi/React-3D-Object-Intective",
    stack: "React, React-spline, React-router, SwiperJS, TailwindCSS, DaisyUI",
    ongoing: false,
  },
  {
    id: 7,
    name: "Abinawa",
    desc: "This website is designed as a digital learning tool to introduce the art of wayang kulit to the public. The website features interactive 3D models of wayang kulit.",
    image: abinawa,
    web: "http://abinawa.vercel.app",
    repo: "https://github.com/ulinnajaaldi/abinawa",
    stack: "Vite, React, React-spline, React-router, TailwindCSS",
    ongoing: false,
  },
  {
    id: 8,
    name: "Inpo UMS",
    desc: "The purpose of this platform is to provide students with a medium to share information about the latest events or news happening in the UMS community.",
    image: inpoums,
    web: "",
    repo: "https://github.com/ulinnajaaldi/laravel-react-inpo-ums",
    stack: "Laravel, Laravel Breeze, React, React-icons, TailwindCSS, DaisyUI",
    ongoing: false,
  },
  {
    id: 9,
    name: "Portfolio",
    desc: "This is my first portfolio where the design was inspired by various sources, It also features a hidden game which can only be accessed in desktop mode.",
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
];

export default datas;
