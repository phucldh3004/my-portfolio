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
  period?: string;
  company?: string;
  type?: string;
  teamSize?: number;
}

export interface Experience {
  period: string;
  company: string;
  role: string;
  type: string;
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
      period: "August 2022 - Present",
      company: "Gianty Vietnam",
      role: "Senior Frontend / Full-stack Developer",
      type: "On-site",
      achievements: [
        "Core Framework Migration: Spearheaded the successful migration of an enterprise web application from Nuxt 2 to Nuxt 4, boosting Core Web Vitals (LCP/FID) by 25% and reducing main bundle size.",
        "Performance Engineering: Implemented route-level lazy loading, code splitting, and dynamic imports in Next.js/Nuxt.js, optimizing initial page load times and user experience.",
        "E-Commerce & Enterprise Platforms: Architected and built scalable B2C, B2B, and B2B2C e-commerce platforms, affiliate loyalty systems (Shopee model), and core ERP modules (Sales, Multi-warehouse, E-KYC).",
        "Full-stack & Quality Assurance: Implemented robust RESTful APIs using NestJS, integrated Firebase FCM push notifications, and built Playwright E2E testing suites, reducing regression bugs by 30%."
      ],
      tech: ["Nuxt.js 2/4", "Vue.js 2/3", "Next.js", "React.js", "NestJS", "TypeScript", "Ant Design", "Playwright", "Java"]
    },
    {
      period: "January 2025 - January 2026",
      company: "DIGITAL UNICORN",
      role: "Freelance Full-stack Developer",
      type: "Freelancer",
      achievements: [
        "CMS & Data Visualization: Developed responsive CMS web portals with pixel-perfect UI implementation from Figma, integrating interactive data charts using D3.js and Chart.js.",
        "Headless Architecture: Engineered scalable headless CMS solutions for medical center platforms (FMP) utilizing Strapi and Vue 3."
      ],
      tech: ["Vue.js 3", "TypeScript", "NestJS", "D3.js", "Chart.js", "Strapi CMS", "Figma"]
    },
    {
      period: "July 2020 - August 2022",
      company: "FPT Software HCM",
      role: "Junior Full-stack / Frontend Developer",
      type: "On-site",
      achievements: [
        "Core Development: Designed reusable UI components in Vue.js and built backend RESTful APIs with database management tools using Java Spring Boot.",
        "System Modernization: Successfully led UI migration initiatives from legacy browsers (Internet Explorer) to modern Edge standards and resolved complex legacy system issues."
      ],
      tech: ["Vue.js 2/3", "Java Spring Boot", "JPA", "Hibernate", "Nuxt.js 3", "JavaScript", "jQuery", "MySQL"]
    }
  ],
  projects: [
    {
      title: "GO Inc",
      description: "GO is Japan's leading mobility web and mobile platform that facilitates real-time taxi dispatching, seamless cashless payments (GO Pay), and on-demand ride-hailing services for millions of users.",
      period: "January 2026 - Now",
      company: "Gianty VN",
      type: "On-site",
      teamSize: 8,
      features: [
        "Developed new features and maintained legacy functionalities.",
        "Successfully migrated a core web application from Nuxt 2 to Nuxt 4, improving Core Web Vitals (LCP/FID) by 25% and optimizing bundle size.",
        "Optimized application responsiveness and reduced initial bundle size by implementing route-level Lazy Loading (page-based splitting) and dynamic component imports.",
        "Utilized AI tools like Antigravity and Claude to accelerate development velocity."
      ],
      tech: ["Vue.js", "Nuxt.js"],
      links: [
        { label: "GO Inc", url: "https://go.goinc.jp/" }
      ]
    },
    {
      title: "Nobinobi web",
      description: "Nobinobi is an e-commerce web platform specializing in high-quality, Japanese-standard consumer goods, food, and maternity & baby products for the Vietnamese market",
      period: "August 2023 - January 2026",
      company: "Gianty VN",
      type: "On-site",
      teamSize: 12,
      features: [
        "Delivered optimized web layouts for both B2C retail shoppers and B2B wholesale partners with custom pricing tiers",
        "Ensured seamless, mobile-first shopping experiences across all desktop, tablet, and mobile browsers",
        "Built high-performance product catalogs with multi-attribute filtering (brand, age group, categories)",
        "Optimized Core Web Vitals, SSR (Server-Side Rendering), and metadata to maximize search engine visibility",
        "ERP System Development & API Integration: Built robust admin dashboards and secure web-to-backend APIs for real-time synchronization with central ERP systems, managing core modules including Products, Multi-warehouse, Sales, Users, E-KYC, and Promotions.",
        "E-Commerce Platforms & User Engagement Features: Developed scalable B2C, B2B, and B2B2C web platforms incorporating Shopee-style Affiliate programs, Loyalty reward systems, and Gamification campaigns.",
        "Integrated Firebase Cloud Messaging (FCM) for push notification features."
      ],
      tech: ["Next.js", "Nest.js", "MongoDB", "AWS", "Redux", "Tailwind CSS"],
      links: [
        { label: "Nobinobi web B2C", url: "https://nobinobi.vn" },
        { label: "Nobinobi web B2B", url: "https://banhang.nobinobi.vn/" },
        { label: "Nobinobi web B2B2C", url: "https://retail.nobinobi.vn/" }
      ]
    },
    {
      title: "HKN & FMP Medical Center",
      description: "CMS website for HKN project and FMP Medical Center — pixel-perfect UI built to Figma designs, with data visualization dashboards and full-stack features.",
      period: "January 2025 - January 2026",
      company: "DIGITAL UNICORN",
      type: "Freelancer",
      teamSize: 5,
      features: [
        "Built CMS website for HKN project with pixel-perfect UI matching Figma designs.",
        "Built website for FMP Medical Center project with pixel-perfect UI matching Figma designs.",
        "Developed full-stack features using Vue.js 3 with NestJS and Strapi CMS.",
        "Integrated D3.js and Chart.js for data visualization dashboards."
      ],
      tech: ["Vue.js 3", "JavaScript", "TypeScript", "D3.js", "Chart.js", "NestJS", "Strapi", "Figma"],
      links: []
    },
    {
      title: "R&D Internal Platform",
      description: "Research & Development internal web platform at Gianty VN — full-stack application with OAuth2 authentication, built from scratch with Vue/Nuxt frontend and Java Spring Boot backend.",
      period: "April 2023 - September 2023",
      company: "Gianty VN",
      type: "On-site",
      teamSize: 6,
      features: [
        "Selected technology stack and initialized frontend source codebase.",
        "Developed UI interfaces, core functional logic, and reusable common components.",
        "Implemented backend APIs using Java Spring Boot.",
        "Integrated OAuth2 login authentication flow.",
        "Managed and estimated tasks following agile development processes."
      ],
      tech: ["Vue.js 2", "Nuxt.js 2", "Java Spring Boot"],
      links: []
    },
    {
      title: "SBworks",
      description: "B2B SaaS web application at Gianty VN — maintained system stability and developed UI features for complex business logic flows including coupon and payment systems.",
      period: "August 2022 - April 2023",
      company: "Gianty VN",
      type: "On-site",
      teamSize: 12,
      features: [
        "Developed UI and integrated with APIs.",
        "Maintained system stability by resolving legacy source code issues.",
        "Fixed bugs in business logic flows (e.g., coupon flow, payment flow)."
      ],
      tech: ["Vue.js 2", "Nuxt.js 2"],
      links: []
    },
    {
      title: "FUKUMA",
      description: "Enterprise web application at FPT Software HCM — maintained and extended a large-scale Vue.js project for a Japanese client with 30+ team members.",
      period: "August 2021 - August 2022",
      company: "FPT Software HCM",
      type: "On-site",
      teamSize: 30,
      features: [
        "Developed user interfaces and integrated with backend APIs.",
        "Maintained legacy source code and resolved system-wide issues."
      ],
      tech: ["Vue.js 2", "Vue.js 3", "Nuxt.js 3", "jQuery"],
      links: []
    },
    {
      title: "HTCTOPE",
      description: "Enterprise portal migration project at FPT Software HCM — migrated UI from Internet Explorer to Microsoft Edge and added new feature tickets.",
      period: "July 2021 - August 2021",
      company: "FPT Software HCM",
      type: "On-site",
      teamSize: 20,
      features: [
        "Migrated UI integration from Internet Explorer to Microsoft Edge.",
        "Implemented new feature tickets and fixed bugs.",
        "Wrote test cases and performed manual testing."
      ],
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript", "jQuery", "Vue.js 2", "Java Spring Boot"],
      links: []
    },
    {
      title: "SENMONTEN",
      description: "Large-scale e-commerce web platform at FPT Software HCM — full-stack development with Java Spring Boot backend and Vue.js frontend for a 50-member Japanese project.",
      period: "July 2020 - September 2021",
      company: "FPT Software HCM",
      type: "On-site",
      teamSize: 50,
      features: [
        "Developed common frontend functions and reusable components.",
        "Wrote dummy data tools, migrated and managed PostgreSQL databases.",
        "Implemented backend APIs using Java Spring Boot (JPA, Hibernate)."
      ],
      tech: ["Java Spring Boot", "JPA", "Hibernate", "Vue.js 2", "PostgreSQL"],
      links: []
    }
  ]
};
