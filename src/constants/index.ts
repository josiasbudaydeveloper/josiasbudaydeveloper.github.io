import {
  BlogApp,
  HooBank
} from '../assets';

export const technologies = [
  {
    id: "Front-End",
    header: "Front-End",
    skills: [
      { 
        id: "HTML 5",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        title: "HTML 5",
        alt: "HTML 5"
      },
      { 
        id: "CSS 3",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        title: "CSS 3",
        alt: "CSS 3"
      },
      { 
        id: "JavaScript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        title: "JavaScript",
        alt: "JavaScript"
      },
      { 
        id: "Bootstrap",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        title: "Bootstrap",
        alt: "Bootstrap"
      },
      { 
        id: "React.js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        title: "React.js",
        alt: "React.js"
      },
      { 
        id: "Tailwind.css",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        title: "Tailwind.css",
        alt: "Tailwind.css"
      },
      { 
        id: "Next.js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
        title: "Next.js (Only App Router for now)",
        alt: "Next.js (Only App Router for now)"
      }
    ]
  },
  {
    id:"Back-End",
    header: "Back-End",
    skills: [
      { 
        id: "Node.js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        title: "Node.js",
        alt: "Node.js"
      },
      { 
        id: "Express.js",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        title: "Express.js",
        alt: "Express.js"
      },
      { 
        id: "TypeScript",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        title: "TypeScript",
        alt: "TypeScript"
      },
      { 
        id: "Jest",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        title: "Jest",
        alt: "Jest"
      },
      { 
        id: "Sequelize",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
        title: "Sequelize",
        alt: "Sequelize"
      }
    ]
  },
  {
    id:"Database",
    header: "Database",
    skills: [
      { 
        id: "MongoDB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
        title: "MongoDB",
        alt: "MongoDB"
      },
      { 
        id: "PostGreSQL",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg",
        title: "PostGreSQL",
        alt: "PostGreSQL"
      },
      { 
        id: "MySQLandMariaDB",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
        title: "MySQL / MariaDB",
        alt: "MySQL / MariaDB"
      },
    ]
  },    
  {
    id:"DevOps",
    header: "DevOps",
    skills: [
      { 
        id: "Git",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
        title: "Git",
        alt: "Git"
      },
      { 
        id: "GitHub",
        link: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
        title: "GitHub",
        alt: "GitHub"
      }
    ]
  }
]

export const liveProjects = [
  {
    id: "BlogApp",
    header: "Next.js 13's Official Pages Router Tutorial",
    description: `A simple fake blog for teaching Next.js 13's Pages Router principles: <br />
    - CSR vs SSR vs SSG <br />
    - Styling, Performance & SEO  <br />
    - TypeScript <br />`,
    link: "https://josiasbudaydeveloper-blog-app.vercel.app/",
    img: BlogApp,
    alt: "Blog App: A simple fake blog for teaching the Next.js's principles"
  },
  {
    id: "HooBank",
    header: "JavaScript Mastery's HooBank Tutorial",
    description: "Beautiful Responsive Web Design built with React.js, Vite, TypeScript and Tailwind.css",
    link: "https://josiasbudaydeveloper-beautiful-responsive-web-design.vercel.app/",
    img: HooBank,
    alt: "HooBank: A beautiful responsive web design"
  }
]