import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  meta,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  shopify,
  starbucks,
  tailwind,
  tesla,
  threejs,
  tripguide,
  typescript,
  web,
} from "../assets";

import bootstrap from "../assets/bootstrap.png";
import coding from "../assets/company/coding.png";
import muiIcon from "../assets/muiIcon.png";
import reactCalculator from "../assets/reactCalculator.png";
import reactCounter from "../assets/reactCounter.png";
import reactTodo from "../assets/reactTodo.png";

// import { javascript } from "../assets/company/java-script.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js",
    icon: mobile,
  },
  {
    title: "Front-end Developer",
    icon: backend,
  },
  {
    title: "Tailwind and MUI",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MUI",
    icon: muiIcon,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
];

const experiences = [
  {
    title: "HTML & CSS",
    company_name: "freeCodeCamp",
    icon: coding,
    iconBg: "#383E56",
    date: "July 2022 - August 2022",
    points: [
      "HTML (the Hypertext Markup Language) and CSS (Cascading Style Sheets) are two of the core technologies for building Web pages. ",
      // "HTML provides the structure of the page, CSS the (visual and aural) layout, for a variety of devices.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "JavaScript",
    company_name: "Udemy",
    icon: javascript,
    iconBg: "#E6DEDD",
    date: "August 2022 - Jan 2023",
    points: [
      "JavaScript is a dynamic computer programming language.",
      "It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages.",
      // "Implementing responsive design and ensuring cross-browser compatibility.",
      // "It is an interpreted programming language with object-oriented capabilities.",
    ],
  },
  {
    title: "React.js",
    company_name: "Udemy",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Jan 2023 - Current",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Utilizing appropriate frameworks and libraries",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "React Calculator",
    description:
      "A general calculator built with state that allows users to make calculations",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reduxToolkit",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: reactCalculator,
    source_code_link: "https://github.com/canJessCode/react-calculator",
  },
  {
    name: "Todo list",
    description:
      "Web application that enables users to add and remove Todo list items with timestamp",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: reactTodo,
    source_code_link: "https://github.com/canJessCode/react-todo",
  },
  {
    name: "React Counter",
    description:
      "A basic React Counter app that allows users to increment & decrement",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reduxToolkit",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: reactCounter,
    source_code_link: "https://github.com/canJessCode/redux-toolkit-counter",
  },
];

export { services, technologies, experiences, testimonials, projects };
