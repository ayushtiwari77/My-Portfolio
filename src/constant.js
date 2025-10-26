// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import supabaseLogo from "./assets/tech_logo/supabase.svg";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import shadcnlogo from "./assets/tech_logo/shadcn.webp";
import zodlogo from "./assets/tech_logo/zod.png";
import zustandlogo from "./assets/tech_logo/zustand.svg";
import formiklogo from "./assets/tech_logo/formik.png";
import clerklogo from "./assets/tech_logo/clerk.svg";
import arcjet from "./assets/tech_logo/arcjet.svg";
import inngest from "./assets/tech_logo/inngest.jpeg";
import socketio from "./assets/tech_logo/socketio.svg";

// Experience Section Logo's
import etechlogo from "./assets/company_logo/etechlogo.jpeg";
import freelancelogo from "./assets/company_logo/freelancelogo.png";

// Education Section Logo's
import choukseylogo from "./assets/education_logo/choukseylogo.jpeg";
import sflogo from "./assets/education_logo/sflogo.webp";

// Project Section Logo's
import dinedashlogo from "./assets/work_logo/DineDash.png";
import trellologo from "./assets/work_logo/trelloclone.png";
import chatifylogo from "./assets/work_logo/chatify.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "GSAP", logo: gsapLogo },
      { name: "ShadCn", logo: shadcnlogo },
      { name: "Zod", logo: zodlogo },
      { name: "Zustand", logo: zustandlogo },
      { name: "Formik", logo: formiklogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Supabase", logo: supabaseLogo },
      { name: "Clerk", logo: clerklogo },
      { name: "Arcjet", logo: arcjet },
      { name: "Inngest", logo: inngest },
      { name: "SocketIo", logo: socketio },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
  {
    title: "Database & Technologies",
    skills: [{ name: "Git", logo: gitLogo }],
  },
];

export const experiences = [
  {
    id: 0,
    img: freelancelogo,
    role: "Fullstack Developer",
    company: "Self Employed",
    date: "October 2022 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development.  Build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment. The most significant impact Is I developed a billing software in Nextjs for a spare parts bussiness for handling transactions and filter them through dates with an responsive ui.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Express",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: etechlogo,
    role: "Web Developer Internship",
    company: "E-tech",
    date: "July 2024 -  August 2024",
    desc: "Web developer internship at Etech , where i had amazing mentors that guide me on implementing theory concepts to practical projects . I learned react in dept along with several packages in the react library and how to use them , which then helped me to create responsive and catchy Uis.",
    skills: [
      "ReactJS",
      "Redux Toolkit",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "MongoDb",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: choukseylogo,
    school: "Chouksey Engineering College, Bilaspur",
    date: "October 2021 - June 2025",
    grade: "82.2%",
    desc: "I completed my Bachelor's of technology degree in Computer Science (B.Tech.) from Chouksey Engineering College, Bilaspur. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at Chouksey Engineering College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 1,
    img: sflogo,
    school: "Delta Public School, Bilaspur",
    date: "Apr 2020 - March 2021",
    grade: "91%",
    desc: "I completed my class 12 education from Delta Public School, Bilaspur , under the CG board, where I studied Physics, Chemistry, and Mathematics (PCM) .",
    degree: "CG Board(XII) - PCM ",
  },
  {
    id: 2,
    img: sflogo,
    school: "St Francis Higher Secondary School, Bilaspur",
    date: "Apr 2018 - March 2019",
    grade: "85.5%",
    desc: "I completed my class 10 education from St Francis Higher Secondary School, Bilaspur, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Dine Dash - Online Food & Delivery Platform",
    description:
      "An online food & delivery fullstack application with email verification and high level authentication. DineDash is equipped with completely responsive ui with dark and light mode functionality.Dine Dash provides user an interface to order dishes , as well as a admin panel for restaurant owners. DineDash uses mongodb for storage, Typescript for robust code , zod for form validation, along with various tools such as Cloudinary , mailtrap , stripe webhooks and Zustand for state management.Dine Dash is a completely scalable platform developed to scale efficiently",
    image: dinedashlogo,
    tags: ["React Js", "Express", "Typescript", "Stripe", "Zustand", "MongoDb"],
    github: "https://github.com/ayushtiwari77/Dine-Dash-Official",
    webapp: "https://dinedashofficial.netlify.app/",
  },
  {
    id: 1,
    title: "Trello-Clone",
    description:
      "A fullstack professional clone of Trello- A task and life management tool. TrelloClone helps teams move work forward. Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office.Equipped with enterprise level authentication using Clerk , created on Nextjs and typescript with a complex drag and drop functionality to manage tasks.",
    image: trellologo,
    tags: ["NextJs", "Supabase", "Clerk", "Typescript"],
    github: "https://github.com/ayushtiwari77/Trello-clone.git",
    webapp: "https://trello-clone-pink-eta.vercel.app/",
  },
  {
    id: 2,
    title: "Chatify",
    description:
      "A fullstack chat application that supports Real-Time messaging via socket.io . The teck stack used is React , Mongo , Express , Node. Along with that it has various futuristic features like Online/Offline presence indicators, Notifications and Typing sounds , Welcome emails , Api rate limiting via arject. The state management is handled using Zustand and UI is comination of TailwindCSS and DaisyUI ",
    image: chatifylogo,
    tags: [
      "React",
      "Express",
      "MongoDB",
      "Zustand",
      "DaisyUi",
      "Cloudinary",
      "SocketIo",
    ],
    github:
      "https://github.com/ayushtiwari77/Chatify-Public/tree/main/Chatify-main",
    webapp: "https://chatify-88jzh.sevalla.app/",
  },
];
