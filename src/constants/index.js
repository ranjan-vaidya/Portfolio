import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  next,
  sql,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  alphastream,
  ecsion,
  iphone15,
  cryptoverse,
  instamedia
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Indian Institute of Information Technology Nagpur",
    icon: web,
    degree: "Bachelor of Technology in Computer Science and Engineering",
    duration: "August 2019 – June 2023",
  },
  {
    title: "Nandanwan Junior College",
    icon: mobile,
    degree: "Higher Secondary School Certificate",
    duration: "August 2017 – May 2019",
  },
  {
    title: "Vidya Niketan Convent",
    icon: backend,
    degree: "Secondary School Certificate ",
    duration: "June 2016 – June 2017",
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
    name: "MongoDB",
    icon: mongodb,
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
    name: "Next js",
    icon: next,
  },
  {
    name: "sql",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Full Stack Web Developer Intern",
    company_name: "Alphastream.ai",
    icon: alphastream,
    iconBg: "#FFF",
    date: "Jan 2023 - June 2023",
    points: [
      "Develop applications using React, Node.js and Django frameworks.",
      "Write clean and efficient code, implement functionalities and troubleshoot bugs.",
      "Design visually appealing and responsive user interfaces to enhance user experience.",
      "Optimize application performance to ensure fast loading times and smooth user interactions.",
    ],
  },
  {
    title: "Junior Software Developer",
    company_name: "Ecsion Research Labs",
    icon: ecsion,
    iconBg: "#FFF",
    date: "Sept 2023 - Present",
    points: [
      "Proficiently utilize React.js and Next.js frameworks for web development projects.",
      "Successfully fetch APIs and render data, ensuring seamless integration and functionality.",
      "Implement optimization techniques to enhance code efficiency and application performance.",
      "Design and develop responsive user interfaces to deliver an exceptional user experience.",
    ],
  },
  
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Iphone 15 Website",
    description:
      "Developed a visually striking website for the iPhone 15, utilizing GSAP for smooth, interactive animations and Three.js for 3D rendering. The site features dynamic transitions and engaging visual effects that highlight the phone’s features, providing an immersive user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: iphone15,
    source_code_link: "https://github.com/ranjan-vaidya/iphone15",
  },
  {
    name: "InstaMedia",
    description:
      "Developed a social media app using the MERN stack. Implemented secure user authentication with JWT. Enabled user interactions with follow/unfollow functionality, photo posting, and commenting. Integrated liking and commenting features for user posts.",
    tags: [
      {
        name: "mern stack",
        color: "blue-text-gradient",
      },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: instamedia,
    source_code_link: "https://github.com/ranjan-vaidya/InstaMedia",
  },
  {
    name: "Cryptoverse",
    description:
      "Developed a dynamic web app for cryptocurrency updates, integrating real-time data from rapidapi.com. The app features market standards, the latest news, and integrated search filters, all within a user-friendly interface designed for seamless navigation and efficient data presentation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "ant design",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoverse,
    source_code_link: "https://github.com/ranjan-vaidya/cryptoverse",
  },
];

export { services, technologies, experiences, testimonials, projects };
