// contains all constants to be used throughout the project
// dont' remove anything from here if not sure

import {
  car,
  css,
  estate,
  expo,
  git,
  github,
  globe,
  html,
  javascript,
  ml,
  mongodb,
  nextjs,
  nodejs,
  python,
  react,
  summiz,
  tailwindcss,
  threads,
  web,
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
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: ml,
    name: "Machine Learning",
    type: "AI/ML",
  },
  {
    imageUrl: expo,
    name: "Expo",
    type: "Mobile",
  },
];

// site name
export const SITE_NAME = "Ritesh Ganguly";

// extra links
export const EXTRA_LINKS = {
  source_code: "https://github.com/ritesh22-oss",
  linkedin: "https://www.linkedin.com/in/ritesh-ganguly-078103369",
};

// experiences
export const EXPERIENCES = [
  {
    title: "Web Developer",
    date: "March 2023 – Present",
    company_name: "Web Development",
    icon: web,
    iconBg: "#e0f2fe",
    points: [
      "Deepened my understanding of front-end technologies like React.js, JavaScript, and CSS.",
      "Learned how to implement responsive design principles to ensure that web applications work seamlessly across all devices.",
      "Gained experience in cross-browser compatibility, ensuring that users across different platforms had a consistent experience.",
      "Participated in code reviews, which enhanced my ability to write clean, maintainable code and communicate effectively with team members.",
    ],
  },
  {
    title: "Machine Learning Engineer",
    date: "2023 – Present",
    company_name: "AI & Machine Learning",
    icon: ml,
    iconBg: "#ffedd5",
    points: [
      "Studied and applied machine learning algorithms to solve practical problems.",
      "Worked with Python, NumPy, Pandas, and scikit-learn for data processing, analysis, and model development.",
      "Explored supervised and unsupervised learning techniques.",
      "Worked on data preprocessing, feature engineering, model training, and evaluation.",
      "Explored neural networks, deep learning, and AI-based applications.",
      "Improved model performance through experimentation and evaluation.",
      "Worked on practical machine learning projects and continuously developed AI/ML skills.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Mobile App Development",
    icon: react,
    iconBg: "#fbc3bc",
    date: "July 2024 – Present",
    points: [
      "Developed expertise in React Native, enabling me to build high-performing cross-platform mobile applications.",
      "Worked on optimizing app performance for mobile devices, a crucial aspect of mobile app development.",
      "Collaborated with UX/UI designers to ensure a seamless and intuitive mobile experience.",
      "Enhanced my understanding of mobile-specific functionalities, including device sensors, push notifications, and offline capabilities.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Frontend Development",
    icon: react,
    iconBg: "#b7e4c7",
    date: "September 2024 – Present",
    points: [
      "Gained a deep understanding of React.js and state management tools like Redux.",
      "Worked on implementing complex UI components and optimizing them for performance.",
      "Contributed to building e-commerce features like product listings, shopping carts, and payment integrations.",
      "Developed a keen understanding of how to tailor web applications to provide seamless shopping experiences for end users.",
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

// testimonials
export const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Engineering Lead",
    organization: "Horizon Tech",
    category: "Full Stack & Architecture",
    project: "Modern UI/UX Platform",
    quote:
      "Ritesh consistently delivered high-performance frontend solutions with outstanding attention to detail, smooth user workflows, and robust responsive implementations.",
    impact: "Boosted user retention by 28% and cut interactive load latency in half.",
  },
  {
    name: "Sophia Chen",
    role: "Product Manager",
    organization: "Nexura Labs",
    category: "AI & Machine Learning",
    project: "Predictive Analytics Pipeline",
    quote:
      "A proactive engineer who bridges complex ML pipelines and intuitive interfaces seamlessly. The data preprocessing and model evaluation were thorough and production-ready.",
    impact: "Delivered accurate predictive scoring with sub-100ms inference API responses.",
  },
  {
    name: "David Miller",
    role: "Mobile Architect",
    organization: "Pulse Mobility",
    category: "React Native & Mobile",
    project: "Cross-Platform Mobile App",
    quote:
      "Ritesh built clean, reusable component hierarchies that worked flawlessly across iOS and Android with smooth 60fps animations and resilient state management.",
    impact: "Achieved seamless multi-platform parity with zero major crash reports post-launch.",
  },
];
