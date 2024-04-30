import {
  BeautifulFigmaDesignToRealWebPage,
  // BlogApp,
  DashboardApp,
  HooBank
} from '../assets';

import Logos from '../assets/technology-logos';

export const contactsList = [
  {
    id: "GitHub",
    title: "GitHub",
    content: "GitHub",
    logo: "logo-github",
    href: "https://github.com/josiasbudaydeveloper"
  },
  {
    id: "LinkedIn",
    title: "LinkedIn",
    content: "LinkedIn",
    logo: "logo-linkedin",
    href: "https://www.linkedin.com/in/josias-buday-dias-b5a3a2253/"
  },
  {
    id: "Email",
    title: "josiasbudaydeveloper@gmail.com",
    content: "Email",
    logo: "mail",
    href: "mailto:josiasbudaydeveloper@gmail.com"
  },
  {
    id: "WhatsApp",
    title: "+55 (014) 99690-8677",
    content: "WhatsApp",
    logo: "logo-whatsapp",
    href: "https://wa.me/5514996908677"
  },
  {
    id: "Telegram",
    title: "+55 (014) 99690-8677",
    content: "Telegram",
    logo: "send-outline",
    href: "https://t.me/Josias_Buday"
  }
]

export const technologies : {
  id: string,
  header: string,
  skills: {
    id: string;
    link: string;
    title: string;
    alt: string;
  }[]
}[] = [
  {
    id: "Front-End",
    header: "Front-End",
    skills: [
      { 
        id: "HTML 5",
        link: Logos.HTML,
        title: "HTML 5",
        alt: "HTML 5"
      },
      { 
        id: "CSS 3",
        link: Logos.CSS,
        title: "CSS 3",
        alt: "CSS 3"
      },
      { 
        id: "JavaScript",
        link: Logos.JavaScript,
        title: "JavaScript",
        alt: "JavaScript"
      },
      { 
        id: "TypeScript",
        link: Logos.TypeScript,
        title: "TypeScript",
        alt: "TypeScript"
      },
      { 
        id: "Bootstrap",
        link: Logos.Bootstrap,
        title: "Bootstrap",
        alt: "Bootstrap"
      },
      { 
        id: "React.js",
        link: Logos.React,
        title: "React.js",
        alt: "React.js"
      },
      { 
        id: "ReactBoostrap.js",
        link: Logos.ReactBootstrap,
        title: "ReactBoostrap.js",
        alt: "ReactBoostrap.js"
      },
      { 
        id: "Tailwind.css",
        link: Logos.Tailwind,
        title: "Tailwind.css",
        alt: "Tailwind.css"
      },
      { 
        id: "Vite.js",
        link: Logos.Vite,
        title: "Vite.js",
        alt: "Vite.js"
      },
      { 
        id: "Next.js",
        link: Logos.Next,
        title: "Next.js (Both Pages and App Router)",
        alt: "Next.js (Both Pages and App Router)"
      }
    ]
  },
  {
    id:"Back-End",
    header: "Back-End",
    skills: [
      { 
        id: "Node.js",
        link: Logos.Node,
        title: "Node.js",
        alt: "Node.js"
      },
      { 
        id: "Express.js",
        link: Logos.Express,
        title: "Express.js",
        alt: "Express.js"
      },
      { 
        id: "TypeScript",
        link: Logos.TypeScript,
        title: "TypeScript",
        alt: "TypeScript"
      },
      { 
        id: "Jest",
        link: Logos.Jest,
        title: "Jest",
        alt: "Jest"
      },
      { 
        id: "Sequelize",
        link: Logos.Sequelize,
        title: "Sequelize",
        alt: "Sequelize"
      }
    ]
  },
  {
    id:"DevOps",
    header: "DevOps",
    skills: [
      { 
        id: "Git",
        link: Logos.Git,
        title: "Git",
        alt: "Git"
      },
      { 
        id: "GitHub",
        link: Logos.GitHub,
        title: "GitHub",
        alt: "GitHub"
      }
    ]
  },
  // {
  //   id: "CMS",
  //   header: "CMS",
  //   skills: [
  //     { 
  //       id: "Payload",
  //       link: Logos.Payload,
  //       title: "Payload",
  //       alt: "Payload"
  //     }
  //   ]
  // },
  {
    id:"Database",
    header: "Database",
    skills: [
      { 
        id: "MongoDB",
        link: Logos.MongoDB,
        title: "MongoDB",
        alt: "MongoDB"
      },
      { 
        id: "PostGreSQL",
        link: Logos.PostGreSQL,
        title: "PostGreSQL",
        alt: "PostGreSQL"
      },
      { 
        id: "MySQLandMariaDB",
        link: Logos.MySQL,
        title: "MySQL / MariaDB",
        alt: "MySQL / MariaDB"
      },
    ]
  }
]

export const liveProjects = [
  // {
  //   id: "BlogApp",
  //   header: "Next.js 13's Official Pages Router Tutorial",
  //   description: `A simple fake blog for teaching Next.js 13's Pages Router principles: <br />
  //   - CSR vs SSR vs SSG <br />
  //   - Styling, Performance & SEO  <br />
  //   - TypeScript <br />`,
  //   link: "https://josiasbudaydeveloper-blog-app.vercel.app/",
  //   img: BlogApp,
  //   alt: "Blog App: A simple fake blog for teaching the Next.js's principles"
  // },
  {
    id: "HooBank",
    header: "JavaScript Mastery's HooBank Tutorial",
    description: "Beautiful Responsive Web Design built with React.js, Vite, TypeScript and Tailwind.css",
    link: "https://josiasbudaydeveloper-beautiful-responsive-web-design.vercel.app/",
    img: HooBank,
    alt: "HooBank: A beautiful responsive web design"
  },
  {
    id: "DashboardApp",
    header: "NextJS 14's Dashboard App Tutorial (App Router)",
    description: `A Dashboard App where users can create an account 
      (with their credentials or using an OAuth provider), create customers and assign invoices to them. 
      Invoices will be shown at the Dashboard page as a summary. <br /><br />

      <ul>
        <li>
          There's also a darkmode built with Tailwind.css that's 
          based on the user's browser theme.
        </li>
        <li>
          If the account was created using an OAuth provider, it will be impossible to create another 
          account using the same email as the one of the account assotiated with that OAuth provider. If the
          user wants to login with the same email he used for his OAuth assotiated account, he needs to login
          with his OAuth provider and once logged in, he needs to go to the Profile page and assign a password
          for his account. Then he will be able to login with both his credentials and his OAuth provider.
        </li>
      </ul>

    `,
    link: "https://josiasbudaydeveloper-next-14-dashboard-app.vercel.app/",
    img: DashboardApp,
    alt: "NextJS 14's Dashboard App Tutorial (App Router)"
  },
  // {
  //   id: "Beautiful Figma Design to Real Web Page",
  //   header: "Beautiful Figma Design to Real Web Page",
  //   description: `A fake website where I got a public Figma design created by JavaScript Mastery
  //     for a tutorial of using AI to convert it to a real web page, but I decided to implement it
  //     on my own, using Next.js 14, TypeScript and Tailwind.css
  //   `,
  //   link: "https://josiasbudaydeveloper-beautiful-figma-design-to-real-web-page.vercel.app/",
  //   img: BeautifulFigmaDesignToRealWebPage,
  //   alt: "Beautiful Figma Design to Real Web Page"
  // }
]