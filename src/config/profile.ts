export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  links: ProjectLink[];
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  type: string;
  teamSize?: number;
  achievements: string[];
  tech: string[];
}

export interface ProfileData {
  name: string;
  fullName: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  githubUrl: string;
  linkedinUrl: string;
  bio: string[];
  skills: Record<string, string[]>;
  experiences: Experience[];
  projects: Project[];
}

export const profileData: ProfileData = {
  name: "Hoang Phuc",
  fullName: "Lê Dương Hoàng Phúc",
  title: "Fullstack Developer",
  email: "leduonghoangphuc3004@gmail.com",
  phone: "0886392505",
  github: "phucldh3004",
  linkedin: "phucldh3004",
  githubUrl: "https://github.com/phucldh3004",
  linkedinUrl: "https://www.linkedin.com/in/phucldh3004/",
  bio: [
    "A Technical Senior Frontend Developer with over 5 years of experience in building scalable web applications using React/Next.js and Vue/Nuxt.js.",
    "Aiming to leverage strong leadership skills and full-stack expertise to drive technical excellence, optimize system performance, and mentor engineering teams in a professional global environment.",
    "Seeking to transition into a Frontend Architect/Senior Fullstack role in the near future."
  ],
  skills: {
    "Front End": [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue",
      "Next.js",
      "Nuxt",
    ],
    "Back End": [
      "Node.js",
      "Express",
      "NestJS",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Prisma",
      "Mongoose"
    ],
    "Cloud & AWS": [
      "S3",
      "Fargate",
      "Lightsail",
      "EC2",
      "ECR",
      "VPC",
      "Route53",
      "Lambda",
      "EBS",
      "Cognito",
      "SQS",
      "SES"
    ],
    "Other": [
      "Docker",
      "GitHub CI/CD",
      "Bitbucket Pipeline",
      "Git"
    ]
  },
  experiences: [
    {
      period: "January 2026 - June 2026",
      company: "Gianty VN",
      role: "Senior Frontend Developer (Go project)",
      type: "On-site",
      teamSize: 8,
      achievements: [
        "Developed new features and maintained legacy functionalities.",
        "Successfully migrated a core web application from Nuxt 2 to Nuxt 4, improving Core Web Vitals (LCP/FID) by 25% and optimizing bundle size.",
        "Optimized application responsiveness and reduced initial bundle size by implementing route-level Lazy Loading (page-based splitting) and dynamic component imports.",
        "Utilized AI tools like Antigravity and Claude to accelerate development velocity."
      ],
      tech: ["Vue.js 2", "Vue.js 3", "Nuxt 2", "Nuxt 4", "Figma", "Stitch (Google AI)"]
    },
    {
      period: "September 2023 - January 2026",
      company: "Gianty VN",
      role: "Senior Frontend Developer / Software Engineer (NobiNobi project)",
      type: "On-site",
      teamSize: 12,
      achievements: [
        "Selected technology stack and initialized frontend source codebase.",
        "Developed UI features and functional handlers, including common shared utilities.",
        "Created reusable common components to streamline interface development.",
        "Integrated front-end applications with APIs and built Firebase Cloud Messaging (FCM) push notification features.",
        "Managed merge requests, performed deployments to multiple environments, and resolved code conflicts.",
        "Participated in requirements discussion and agile processes, including task management and estimation.",
        "Supported team members with technical issues and algorithmic challenges.",
        "Implemented E2E testing using Playwright, reducing regression bugs by 30% and improving deployment confidence.",
        "Worked on B2C, B2B, B2B2C, and ERP platforms for the company.",
        "Optimized initial page load times and bundle sizes by implementing route-level Lazy Loading and dynamic Next.js imports.",
        "Developed backend APIs and leveraged AI tools (ChatGPT 4.0, Cursor, Claude) to speed up delivery."
      ],
      tech: ["React", "Next.js", "Node.js", "NestJS", "Ant Design", "TypeScript", "Strapi", "Firebase", "Playwright", "Figma"]
    },
    {
      period: "March 2025 - January 2026",
      company: "DIGITAL UNICORN",
      role: "Fullstack Developer",
      type: "Freelancer",
      teamSize: 5,
      achievements: [
        "Developed full-stack web applications for HKN and FMP Medical Center projects.",
        "Designed pixel-perfect UI mapping closely to Figma design mockups.",
        "Integrated APIs and Firebase with backend systems and Strapi CMS.",
        "Implemented backend APIs using NestJS.",
        "Utilized AI assistants (ChatGPT 4.0, Cursor, Claude) to optimize development speed and code quality."
      ],
      tech: ["Vue.js 3", "JavaScript", "TypeScript", "D3.js", "Chart.js", "NestJS", "Strapi", "Firebase", "Figma"]
    },
    {
      period: "April 2023 - December 2023",
      company: "Gianty VN",
      role: "Middle Frontend Developer / Scrum Master (R&D project)",
      type: "On-site",
      teamSize: 6,
      achievements: [
        "Served as Project Leader and Scrum Master for the R&D project.",
        "Selected technical stacks and initialized project code repositories.",
        "Developed UI interfaces, core functional logic, and reusable components.",
        "Integrated backend APIs and built login flows with OAuth2 authentication.",
        "Fixed critical, high-priority, and hotfix bugs in both frontend and backend code.",
        "Designed workflows, confirmed requirements with Business Analysts, and managed/estimated sprint tasks."
      ],
      tech: ["Vue.js 2", "Nuxt.js 2", "Java Spring Boot"]
    },
    {
      period: "August 2022 - April 2023",
      company: "Gianty VN",
      role: "Middle Frontend Developer (SBworks project)",
      type: "On-site",
      teamSize: 12,
      achievements: [
        "Developed UI and functional logic for SBworks project.",
        "Maintained system stability by resolving legacy code issues and bugs.",
        "Integrated APIs and resolved business logic bugs (e.g., coupon flow, payment flow)."
      ],
      tech: ["Vue.js 2", "Nuxt.js 2"]
    },
    {
      period: "September 2021 - August 2022",
      company: "FPT software HCM",
      role: "Frontend Developer (FUKUMA project)",
      type: "On-site",
      teamSize: 30,
      achievements: [
        "Developed user interfaces and functional logic for FUKUMA project.",
        "Maintained legacy source code and resolved system-wide issues.",
        "Integrated backend APIs and fixed frontend-related bugs."
      ],
      tech: ["Vue.js 2", "Vue.js 3", "Nuxt.js 3", "jQuery", "MySQL", "GitHub"]
    },
    {
      period: "August 2021 - September 2021",
      company: "FPT software HCM",
      role: "Fullstack Developer (HTCTOPE project)",
      type: "On-site",
      teamSize: 20,
      achievements: [
        "Contributed to HTCTOPE project by migrating UI integration from Internet Explorer to Microsoft Edge.",
        "Implemented new features and fixed bugs based on ticket specifications.",
        "Wrote test cases and performed manual testing."
      ],
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Vue.js 2", "Java Spring Boot"]
    },
    {
      period: "January 2021 - August 2021",
      company: "FPT software HCM",
      role: "Full-stack Developer (SENMONTEN project)",
      type: "On-site",
      teamSize: 50,
      achievements: [
        "Developed business functions and frontend/backend components for SENMONTEN project.",
        "Created database migration tools, managed PostgreSQL databases, and wrote dummy data script generators.",
        "Developed a custom data checking tool using Java Spring Boot.",
        "Debugged and fixed full-stack bugs."
      ],
      tech: ["Java Spring Boot", "JPA", "Hibernate", "Vue.js 2", "PostgreSQL"]
    },
    {
      period: "July-2020 - January 2021",
      company: "FPT software HCM",
      role: "Backend Developer (HINO project)",
      type: "On-site",
      teamSize: 12,
      achievements: [
        "Developed backend API endpoints using Java Spring Boot.",
        "Integrated Jasper Reports and Vue.js framework components.",
        "Implemented test automation using JUnit."
      ],
      tech: ["Java Spring Boot", "JPA", "Hibernate", "Jasper Reports", "Vue.js 2", "JUnit"]
    }
  ],
  projects: [
    {
      title: "GO Inc",
      description: "GO is Japan’s leading mobility web and mobile platform that facilitates real-time taxi dispatching, seamless cashless payments (GO Pay), and on-demand ride-hailing services for millions of users.",
      features: [
        "Developed new features and maintained legacy functionalities.",
        "Successfully migrated a core web application from Nuxt 2 to Nuxt 4, improving Core Web Vitals (LCP/FID) by 25% and optimizing bundle size.",
        "Optimized application responsiveness and reduced initial bundle size by implementing route-level Lazy Loading (page-based splitting) and dynamic component imports.",
        "Utilized AI tools like Antigravity and Claude to accelerate development velocity."
      ],
      tech: [
        "Vue.js",
        "Nuxt.js",
      ],
      links: [
        { label: "GO Inc", url: "https://go.goinc.jp/" },
      ]
    },
    {
      title: "Nobinobi web",
      description: "Nobinobi is an e-commerce web platform specializing in high-quality, Japanese-standard consumer goods, food, and maternity & baby products for the Vietnamese market",
      features: [
        "Delivered optimized web layouts for both B2C retail shoppers and B2B wholesale partners with custom pricing tiers",
        "Ensured seamless, mobile-first shopping experiences across all desktop, tablet, and mobile browsers",
        "Built high-performance product catalogs with multi-attribute filtering (brand, age group, categories)",
        "Optimized Core Web Vitals, SSR (Server-Side Rendering), and metadata to maximize search engine visibility",
        "Developed a robust admin dashboard to manage products, banners, promotional campaigns, multi-warehouse, and loyalty rewards",
        "Maintained secure web-to-backend API integrations for seamless synchronization with the central ERP system",

      ],
      tech: ["Next.js", "Nest.js", "MongoDB", "AWS", "Redux", "Tailwind CSS"],
      links: [
        {
          label: "Nobinobi web B2C",
          url: "https://nobinobi.vn"
        },
        {
          label: "Nobinobi web B2B",
          url: "https://banhang.nobinobi.vn/"
        },
        {
          label: "Nobinobi web B2B2C",
          url: "https://retail.nobinobi.vn/"
        },
      ]
    },

  ]
};
