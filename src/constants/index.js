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
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  google,
  microsoft,
  developer,
  iit,
  clientOne,
  clientTwo,
  clientThree,
  first_project,
  second_project,
  third_project,
  fourth_project,
  fifth_project,
  fifth_project_image,
  sixth_project,
  x,
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
    title: "Ui/Ux Designer",
    icon: web,
  },
  {
    title: "MERN STACK Developer",
    icon: mobile,
  },
  {
    title: "Generative AI",
    icon: backend,
  },
  {
    title: "Ethical Hacking",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UI/UX DESIGNER",
    company_name: "Google",
    icon: google,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - May 2024",
    points: [
      "Human-Centered Design: Craft intuitive, accessible experiences focused on user empathy.",
      "Iterative Improvement: Use data-driven iterations to refine and perfect usability.",
      "Insight-Driven: Rely on deep research and user insights to guide design choices.",
      "Prototyping & Validation: Apply rigorous prototyping and testing to ensure functionality and engagement.",
    ],
    certificate: "https://res.cloudinary.com/didzyox00/image/upload/v1730450354/DOC-20240522-WA0002._nubkfp.pdf"
  },
  {
    title: "GENERATIVE AI",
    company_name: "Microsoft",
    icon: microsoft,
    iconBg: "#E6DEDD",
    date: "May 2024 - Oct 2024",
    points: [
      "Strategic AI Integration: Apply AI thoughtfully to enhance user experience and product functionality.",
      "Data-Informed Models: Utilize well-curated data to build accurate, relevant AI solutions.",
      "Continuous Optimization: Regularly fine-tune AI systems to improve performance and alignment with user needs.",
      "Ethical AI Practices: Prioritize transparency, fairness, and responsible AI usage in all applications.",
    ],
    certificate: "https://res.cloudinary.com/didzyox00/image/upload/v1730450353/CertificateOfCompletion_Career_Essentials_in_Generative_AI_by_Microsoft_and_LinkedIn_rl5ysa.pdf"
  },
  {
    title: "ETHICAL HACKING",
    company_name: "RemarkSkill, IIT GUWAHATI",
    icon: iit,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Jan 2024",
    points: [
      "Proactive Security: Implement preventive measures to secure systems from emerging threats.",
      "Vulnerability Assessment: Conduct rigorous assessments to identify and mitigate potential risks.",
      "Data Integrity Focus: Prioritize safeguarding sensitive data through robust security protocols.",
      "Continuous Monitoring: Employ ongoing analysis and threat detection for adaptive security.",
    ],
    certificate: "https://res.cloudinary.com/didzyox00/image/upload/v1730450353/DOC-20241029-WA0036._sgv8z9.pdf"
  },
  {
    title: "MERN STACK Development",
    company_name: "Self Taught",
    icon: developer,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - April 2024",
    points: [
      "Full-Stack Optimization: Develop seamless, high-performing applications with a balanced front-end and back-end approach.",
      "Efficient Scalability: Design scalable architectures that grow with user demand and business needs.",
      "Clean Code Practices: Maintain clean, modular code for readability, flexibility, and easy maintenance.",
      "Continuous Learning: Leverage the latest MERN advancements to refine and innovate in each project.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Abhijit proved me wrong.",
    name: "Aryan",
    image: clientOne,
  },
  {
    testimonial:
      "I've never met a UX Designer who really cares about clients' success like Abhijit does.",
    name: "Lakshya",
    image: clientThree,
  },
  {
    testimonial:
      "A Eye Mouse is such a miscellaneous project yet helped many people with disabilities. Happily satisfied with the work.",
    name: "Jayeesmita",
    image: clientTwo,
  },
];

const projects = [
  {
    name: "Restaurant Reservation",
    description:
      "A MERN STACK restaurant reservation project which shows my skills as a fullstack developer.",
    tags: [
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
    ],
    image: first_project,
    source_code_link: "https://relaxed-sable-e4fce3.netlify.app",
  },
  {
    name: "PLANET SEARCH",
    description:
      "A Figma based interactive UX design of Random planets with their research.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: " Ux",
        color: "green-text-gradient",
      },
      {
        name: "Planets",
        color: "pink-text-gradient",
      },
    ],
    image: second_project,
    source_code_link:
      "https://www.figma.com/proto/qy4qLPP6sEsguTwqYQdxdA/3D-Interactive-Planet-Animation?page-id=0%3A1&node-id=1-473&node-type=canvas&viewport=91%2C-2260%2C0.85&t=QiDaoY4do6JbWllm-1&scaling=contain&content-scaling=fixed&starting-point-node-id=0%3A9",
  },
  {
    name: "3D Parallax (UX)",
    description:
      "A Scrolling page with screen popping 3D Parallax effect without a single line of code, CLICKS-N-DRAGS.",
    tags: [
      {
        name: "Parallax",
        color: "blue-text-gradient",
      },
      {
        name: " Ux",
        color: "green-text-gradient",
      },
      {
        name: "3d",
        color: "pink-text-gradient",
      },
    ],
    image: third_project,
    source_code_link:
      "https://www.figma.com/proto/YBdJ3U0O1uLaRn8Crgl2pD/parallax.fig?page-id=3313%3A13&node-id=3313-14&node-type=canvas&viewport=167%2C331%2C0.1&t=wo7m957GcYtWw7Aa-1&scaling=contain&content-scaling=fixed&starting-point-node-id=3313%3A14",
  },
  {
    name: "Real Estate",
    description:
      "A webpage featuring involvement of Blender into Frontend Dev.",
    tags: [
      {
        name: "Blender",
        color: "blue-text-gradient",
      },
      {
        name: "Frontend",
        color: "green-text-gradient",
      },
    ],
    image: fourth_project,
    source_code_link: "https://real-estate-nine-snowy.vercel.app/",
  },
  {
    name: "3D Modelling",
    description:
      "A Scrolling page with futuristic aesthetics and logics, something unique.",
    tags: [
      {
        name: " 3d",
        color: "blue-text-gradient",
      },
      {
        name: "Frontend",
        color: "green-text-gradient",
      },
    ],
    image: fifth_project_image,
    source_code_link: "https://3-d-model-frontend.vercel.app/",
  },
  {
    name: "Eye Mouse",
    description:
      "Tired of old school mouse and feel lazy ? Gotcha ! Use your Eyes to surf through your device.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Webcam",
        color: "green-text-gradient",
      },
    ],
    image: sixth_project,
    source_code_link: "https://github.com/PEGAZIZ/EYE-MOUSE.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
