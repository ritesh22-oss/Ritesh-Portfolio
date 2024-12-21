// contains all constants to be used throughout the project
// dont' remove anything from here if not sure

import { meta, shopify,starbucks,tesla } from "../assets/images";
import {
  car,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  summiz,
  tailwindcss,
  threads,
  youtube,
  snappy,
  typescript,
  
} from "../assets/icons";

// sidebar links
export const SIDEBAR_LINKS = [
  {
    route: "/about",
    label: "About",
  },
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/contact",
    label: "Contact",
  },
];

// skills
export const SKILLS = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

// site name
export const SITE_NAME = "Ritesh Ganguly";

// extra links
export const EXTRA_LINKS = {
  source_code: "https://github.com/ritesh22-oss",
};

// experiences
export const EXPERIENCES = [
  {
    title: "Web Developer",
    date: "March 2023 - April 2024",
    company_name: "Starbucks",
    icon: starbucks,
    points: [
      "Deepened my understanding of front-end technologies like React.js, JavaScript, and CSS.",
      "Learned how to implement responsive design principles to ensure that web applications work seamlessly across all devices.",
      "Gained experience in cross-browser compatibility, ensuring that users across different platforms had a consistent experience",
      "Participated in code reviews, which enhanced my ability to write clean, maintainable code and communicate effectively with team members.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "July 2024 - September 2024",
    points: [
      "Developed expertise in React Native, enabling me to build high-performing cross-platform mobile applications.",
      "Worked on optimizing app performance for mobile devices, a crucial aspect of mobile app development.",
      "Collaborated with UX/UI designers to ensure a seamless and intuitive mobile experience.",
      "Enhanced my understanding of mobile-specific functionalities, including device sensors, push notifications, and offline capabilities.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "September 2024 - October 2024",
    points: [
      "Gained a deep understanding of React.js and state management tools like Redux.",
      "Worked on implementing complex UI components and optimizing them for performance.",
      "Contributed to building e-commerce features like product listings, shopping carts, and payment integrations.",
      "Developed a keen understanding of how to tailor web applications to provide seamless shopping experiences for end users.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "October 2024 - Present",
    points: [
      "Mastered both front-end and back-end technologies, including React.js, Node.js, Express, and MongoDB.",
      "Worked on building and deploying full-stack applications, gaining experience in API development, server management, and database integration.",
      "Focused on creating scalable and secure web applications by following best practices in architecture and security.",
      "Gained an in-depth understanding of DevOps practices, including continuous integration and deployment (CI/CD).",
    ],
  },
];

// projects
export const PROJECTS = [
  {
    iconUrl: youtube,
    theme: "btn-back-red",
    name: "Modern UI/UX YouTube Clone",
    description:
      "Explore my React.js-based YouTube clone, powered by Rapid API. Seamlessly navigate, search, and enjoy dynamic video content with a sleek and intuitive design.",
    link: "http://yt-youtube.netlify.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://threaad.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://carhb.vercel.app/",
  },
  {
    iconUrl: snappy,
    theme: "btn-back-pink",
    name: "Online Chat Application",
    description:
      "Experience my chat app, built on React.js, Socket.io, and MongoDB. Enjoy seamless communication with a sleek design for an intuitive and engaging messaging experience.",
    link: "https://snappy-chatapp.netlify.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://real-estate-app-react.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://summise.netlify.app/",
  },
];
