import {
  meta,
  kartonmedya,
  verisoft,
  okttrailer,
  AWS,
  Mern_Stack,
} from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  sql,
  java,
} from "../assets/icons";

export const skills = [
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
  // {
  //   imageUrl: motion,
  //   name: "Motion",
  //   type: "Animation",
  // },
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
  {
    imageUrl: sql,
    name: "Sql",
    type: "DataBase",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Programing",
  },
];

export const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Verisoft",
    icon: verisoft,
    iconBg: "#accbe1",
    date: "May 2019 - December 2023",
    points: [
      "Building Fintech businesses at Verisoft as part of a global team. More specifically, developing loyalty, payment system and card products to deliver delightful experiences to Verisoft's customers around the world.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "OKT Trailer",
    icon: okttrailer,
    iconBg: "#c0c0c0",
    date: "Agu 2017 - Sep 2018",
    points: [
      "Taking an important role in the ERP transformation project by being responsible for the finance, sales, vehicle tracking and delivery modules of the Enterprise Resource Planning (ERP) structure.",
      "Demonstrating effective communication and project management skills during the analysis, testing and development process to ensure the successful outcome of the ERP transformation project.",
      "Actively working with business teams throughout this process.",
    ],
  },
  {
    title: "Junior Front-End Developer",
    company_name: "Karton Medya",
    icon: kartonmedya,
    iconBg: "#c8a2c8",
    date: "Feb 2016 - Jun 2017",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
];

export const Certification = [
  {
    title: "Amazon Cloud Practitioner",
    company_name: "Amazon Web Services",
    icon: AWS,
    iconBg: "#CCCCCC",
    date: "Feb 27th, 2023",
    description:
      "Earned the AWS Certified Cloud Practitioner Certification, validating cloud fluency and foundational knowledge of AWS cloud services and solutions.",
    points: [
      "Gained comprehensive understanding of AWS core services, security, and cloud concepts.",
      "Showcased the ability to effectively use cloud technologies and understand AWS global infrastructure.",
      "Validated foundational skills for cloud roles, emphasizing best practices and cost management.",
    ],
  },
  {
    title: "Full Stack Develoment",
    company_name: "Udemy",
    icon: Mern_Stack,
    iiconBg: "linear-gradient(135deg, #56CCF2, #2F80ED)",
    date: "March 10th, 2024",
    description:
      "Completed the Full Stack Web Development course, mastering both front-end and back-end technologies to build scalable, user-friendly web applications.",
    points: [
      "Developed expertise in front-end technologies such as HTML, CSS, JavaScript, React.js, and Next.js to create responsive and interactive user interfaces.",
      "Mastered back-end technologies including Node.js, Express.js, and MongoDB to design and implement scalable server-side applications and RESTful APIs.",
      "Gained hands-on experience with version control tools like Git and GitHub for collaborative development and project management.",
      "Built end-to-end web applications with a strong focus on performance optimization, security, and scalability.",
      "Learned the deployment process using cloud platforms and tools like AWS, Netlify, and Vercel for hosting production-ready applications.",
      "Strengthened debugging, testing, and troubleshooting skills to ensure seamless functionality across different environments.",
      "Enhanced team collaboration skills by contributing to group projects that simulated real-world web development scenarios.",
    ],
  },
];
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/vai844101",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/vaibhav-kumar-65b62a21a/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-pink",
    name: "Event Platform Web Application",
    description:
      "An event organization web app like Eventbrite or Meetup with authentication, event management, search, filtering, categories, checkout and payments using Next JS 14, Tailwind CSS, Shadcn, React Hook Form, Zod, Uploadthing, React-Datepicker, Mongoose, Clerk and Stripe.",
    link: "https://event-platform-dev.vercel.app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "A CRM Dashboard",
    description:
      "Build an admin dashboard with full authentication, a homepage displaying charts and activities, a comprehensive table for companies with CRUD and search, and a Kanban board with real-time synchronization.",
    link: "https://react-dashboard-dev.vercel.app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "An AI Article Summarizer Website",
    description:
      "Summarize Articles with OpenAI GPT-4. Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.",
    link: "https://ai-summarizer-dev.vercel.app",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "A Car Showcase Website",
    description:
      "Build and Deploy a Modern Next.js 14 Application | React, Next JS 14, TypeScript, Tailwind CSS",
    link: "https://carhub-dev.vercel.app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-pink",
    name: "Modern UI/UX website",
    description:
      "Learn to create modern websites with sleek parallax effects and bento box layouts. This project covers everything from stylish UI design to mobile-first principles while strengthening your React.js and Tailwind CSS skills.",
    link: "https://brainstorm-dev.vercel.app",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-yellow",
    name: "Personal portfolio website.",
    description: "Personal portfolio website.",
    link: "https://portfolio-emredkyc.vercel.app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-green",
    name: "React Exercise Application",
    description:
      "This is a Exercise App that was built using Rapid API and is a PWA web app. It shows different exercises for gym freak as well as videos of each and every exercise with full details of the exercises with great explanation.",
    link: "https://exercise-dev.vercel.app",
  },
  {
    iconUrl: threads,
    theme: "btn-back-black",
    name: "Real Estate Website",
    description: "Build and Deploy a Real Estate React & Next.js Application",
    link: "https://realtor-dev.vercel.app",
  },
  {
    iconUrl: threads,
    theme: "btn-back-black",
    name: "A Ecom Price Tracking Application",
    description:
      "Dive into web scraping and build a Next.js 14 eCommerce price tracker within one project that teaches you data scraping, cron jobs, sending emails, deployment, and more.",
    link: "https://price-tracker-dev.vercel.app",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-red",
    name: "AI Prompt Sharing Application",
    description:
      "Next.js has recently become the official React framework as stated in the React documentation. In this project you will learn the most important Next.js concepts and how they fit into the React ecosystem. Finally, you will test your skills by building a modern full-stack Next 14 application.",
    link: "https://promptify-dev.vercel.app",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "3D Portfolio",
    description:
      "Let's create a cool 3D website together! You will learn how to make a portfolio with fun interactive pieces like a floating island and a fox that moves when you type. This way you can show off your skills.",
    link: "https://3d-portfolio-emredkyc.vercel.app",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Anime World",
    description:
      "Curious about Server Actions in Next.js 14? How about infinite scrolling and Framer Motion animations with Next 14? This application will explain these concepts when building a server-side Next 14 Application",
    link: "https://anime-world-development.vercel.app",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "ClubTotal Card - Loyalty Card Application",
    description:
      "Customer loyalty card developed for Total Energies Türkiye fuel stations is the application. Customers included in the application can make fuel purchases you can earn points, benefit from various campaigns and you can spend the points you earn at gas stations.",
    link: "https://www.linkedin.com/in/burak-emre-dokuyucu/details/projects",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "JetEMV - Card Personalization Application",
    description:
      "Debit Card, Prepaid Card and Credit used in payment systems It is the personalization application of cards. The application can make Magnetic and EMV (Chip) personalization, It can work integrated with banks.",
    link: "https://www.linkedin.com/in/burak-emre-dokuyucu/details/projects",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-black",
    name: "Passport Card - Loyalty Card Application",
    description:
      "TAV Operations, one of the subsidiaries of TAV Airports Holding Services Inc. TAV Passport Card, which is a brand, is available to passengers at the airport. It is a membership program that offers privileges. Included in the membership program. Customers can choose the category of membership at airports operated by TAV. You can benefit from different services depending on your needs.",
    link: "https://www.linkedin.com/in/burak-emre-dokuyucu/details/projects",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "MyGini - Loyalty and Offers Management",
    description:
      "Create, personalize and communicate your offers in minutes and push them to your mobile app in real time.",
    link: "https://www.linkedin.com/in/burak-emre-dokuyucu/details/projects",
  },
];
