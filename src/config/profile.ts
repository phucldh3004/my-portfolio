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
  title: "Software Engineer / Senior Frontend Developer",
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
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Vue.js 2/3/4",
      "Nuxt.js 2/3/4",
      "HTML5 / CSS3"
    ],
    "Back End": [
      "Node.js",
      "NestJS",
      "Java Spring Boot",
      "PostgreSQL",
      "MySQL",
      "MongoDB"
    ],
    "Tools & Design": [
      "Figma",
      "Adobe XD",
      "Docker",
      "Git",
      "GitHub / GitLab",
      "Jira / Backlog / Redmine",
      "Playwright",
      "Firebase"
    ]
  },
  experiences: [
    {
      period: "January 2026 - Now",
      company: "Gianty VN",
      role: "Senior Frontend Developer (Go project)",
      type: "On-site",
      teamSize: 8,
      achievements: [
        "Developed new features and maintained legacy functionalities.",
        "Successfully migrated a core web application from Nuxt 2 to Nuxt 4, improving Core Web Vitals (LCP/FID) by 25% and optimizing bundle size.",
        "Optimized application responsiveness and reduced initial bundle size by implementing route-level Lazy Loading (page-based splitting) and dynamic component imports."
      ],
      tech: ["Vue.js 2", "Vue.js 3", "Nuxt.js 2", "Nuxt.js 4"]
    },
    {
      period: "August 2023 - January 2026",
      company: "Gianty VN",
      role: "Senior Frontend Developer / Software Engineer (NobiNobi project)",
      type: "On-site",
      teamSize: 12,
      achievements: [
        "Selected technology stack and initialized frontend source codebase.",
        "Developed UI features and integrated with APIs, including implementing core and common shared components.",
        "Implemented backend APIs using NestJS.",
        "Integrated Firebase Cloud Messaging (FCM) for push notification features.",
        "Worked on e-commerce systems including B2C, B2B, B2B2C web platforms, and ERP modules (Sales, Users, Multi-warehouse, Promotions, Products, Affiliate, E-KYC, etc.).",
        "Developed B2C web affiliate programs (similar to Shopee model), loyalty platforms, and gamification campaigns.",
        "Implemented E2E testing using Playwright, reducing regression bugs by 30% and improving deployment confidence.",
        "Optimized initial page load times and code splitting by implementing lazy loading via Next.js dynamic imports, significantly reducing bundle size and improving UX."
      ],
      tech: ["React.js", "Next.js", "Node.js", "NestJS", "Ant Design", "TypeScript", "Firebase", "Playwright", "Figma"]
    },
    {
      period: "January 2025 - January 2026",
      company: "DIGITAL UNICORN",
      role: "Fullstack Developer",
      type: "Freelancer",
      teamSize: 5,
      achievements: [
        "Built CMS website for HKN project with pixel-perfect UI matching Figma designs.",
        "Built website for FMP Medical Center project with pixel-perfect UI matching Figma designs.",
        "Developed full-stack features using Vue.js 3 with NestJS and Strapi CMS.",
        "Integrated D3.js and Chart.js for data visualization dashboards."
      ],
      tech: ["Vue.js 3", "JavaScript", "TypeScript", "D3.js", "Chart.js", "NestJS", "Strapi", "Figma"]
    },
    {
      period: "April 2023 - September 2023",
      company: "Gianty VN",
      role: "Middle Frontend Developer / Software Engineer (R&D project)",
      type: "On-site",
      teamSize: 6,
      achievements: [
        "Selected technology stack and initialized frontend source codebase.",
        "Developed UI interfaces, core functional logic, and reusable common components.",
        "Implemented backend APIs using Java Spring Boot.",
        "Integrated OAuth2 login authentication flow.",
        "Managed and estimated tasks following agile development processes."
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
        "Developed UI and integrated with APIs.",
        "Maintained system stability by resolving legacy source code issues.",
        "Fixed bugs in business logic flows (e.g., coupon flow, payment flow)."
      ],
      tech: ["Vue.js 2", "Nuxt.js 2"]
    },
    {
      period: "August 2021 - August 2022",
      company: "FPT Software HCM",
      role: "Junior Frontend Developer (FUKUMA project)",
      type: "On-site",
      teamSize: 30,
      achievements: [
        "Developed user interfaces and integrated with backend APIs.",
        "Maintained legacy source code and resolved system-wide issues."
      ],
      tech: ["Vue.js 2", "Vue.js 3", "Nuxt.js 3", "jQuery"]
    },
    {
      period: "July 2021 - August 2021",
      company: "FPT Software HCM",
      role: "Junior Frontend Developer / Fullstack Developer (HTCTOPE project)",
      type: "On-site",
      teamSize: 20,
      achievements: [
        "Migrated UI integration from Internet Explorer to Microsoft Edge.",
        "Implemented new feature tickets and fixed bugs.",
        "Wrote test cases and performed manual testing."
      ],
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Vue.js 2", "Java Spring Boot"]
    },
    {
      period: "July 2020 - September 2021",
      company: "FPT Software HCM",
      role: "Fullstack Developer (SENMONTEN project)",
      type: "On-site",
      teamSize: 50,
      achievements: [
        "Developed common frontend functions and reusable components.",
        "Wrote dummy data tools, migrated and managed PostgreSQL databases.",
        "Implemented backend APIs using Java Spring Boot (JPA, Hibernate)."
      ],
      tech: ["Java Spring Boot", "JPA", "Hibernate", "Vue.js 2", "PostgreSQL"]
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
        "ERP System Development & API Integration: Built robust admin dashboards and secure web-to-backend APIs for real-time synchronization with central ERP systems, managing core modules including Products, Multi-warehouse, Sales, Users, E-KYC, and Promotions  .",
        "E-Commerce Platforms & User Engagement Features: Developed scalable B2C, B2B, and B2B2C web platforms incorporating Shopee-style Affiliate programs, Loyalty reward systems, and Gamification campaigns.",
        "Integrated Firebase Cloud Messaging (FCM) for push notification features.",
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
