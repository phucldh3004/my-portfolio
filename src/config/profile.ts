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
  teamSize: number;
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
  email: "vuduc1711@gmail.com",
  phone: "0328691535",
  github: "vuduc0910",
  linkedin: "richardvo1412",
  githubUrl: "https://github.com/vuduc0910",
  linkedinUrl: "https://www.linkedin.com/in/richardvo1412/",
  bio: [
    "I'm a developer passionate about crafting high-quality, scalable web applications that deliver exceptional user experiences. My expertise lies at the intersection of frontend and backend development, creating solutions that are both visually appealing and technically robust.",
    "Currently, I'm a Senior Full-stack Developer at Fanzeal Singapore, where I lead teams in building innovative platforms for sports and entertainment enthusiasts. I specialize in React, Next.js, Vue, Node.js, and AWS, with a strong focus on performance optimization and scalability.",
    "Throughout my career, I've had the opportunity to work on diverse projects—from blockchain-powered collectibles platforms to mobile applications serving thousands of users. I'm committed to staying current with emerging technologies and delivering products that precisely meet client requirements."
  ],
  skills: {
    "Front End": [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue",
      "Next.js",
      "Nuxt",
      "React Native",
      "Remix"
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
      period: "04/2023 - Present",
      company: "Fanzeal Singapore",
      role: "Senior Full-stack Developer",
      type: "Hybrid",
      teamSize: 12,
      achievements: [
        "Led development of mobile app and web platforms serving 10,000+ concurrent users",
        "Implemented hybrid authentication systems supporting 30,000+ account creations",
        "Managed and mentored 4 junior developers",
        "Configured CI/CD pipelines and AWS infrastructure",
        "Integrated payment systems (Stripe, PayPal, Apple IAP) and analytics platforms"
      ],
      tech: [
        "React",
        "React Native",
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "Blockchain",
        "AWS"
      ]
    },
    {
      period: "01/2022 - Present",
      company: "Hachix",
      role: "Full-stack Developer",
      type: "Freelancer",
      teamSize: 5,
      achievements: [
        "Designed and implemented scalable backend system and database schema",
        "Built responsive user interfaces for workflow management platforms",
        "Optimized database queries and implemented effective caching strategies",
        "Developed automated warehouse management system for workforce tracking"
      ],
      tech: ["Express.js", "Node.js", "Vue.js", "MongoDB", "AWS"]
    },
    {
      period: "09/2022 - 04/2023",
      company: "Pangara",
      role: "Full-stack Developer",
      type: "Hybrid",
      teamSize: 5,
      achievements: [
        "Completed sprint tasks on time with high quality",
        "Collaborated with designers and provided UI feedback",
        "Built and deployed responsive user interfaces for freelancer platform"
      ],
      tech: ["Vue.js", "Laravel", "PHP", "MariaDB"]
    },
    {
      period: "03/2021 - 09/2022",
      company: "FPT Software",
      role: "Front-end Developer",
      type: "On-site",
      teamSize: 40,
      achievements: [
        "Led 6 fresher/junior developers and hosted product planning",
        "Developed and maintained multiple products using Vue and Nuxt",
        "Ensured cross-browser compatibility, accessibility, and responsiveness",
        "Improved site performance through optimization techniques",
        "Collaborated with PO and UX/UI designers to implement designs"
      ],
      tech: ["Vue", "Nuxt", "Python", "AWS"]
    }
  ],
  projects: [
    {
      title: "VFF Mobile App",
      description: "A platform connecting Vietnamese football fans by enabling them to follow the national team's match schedule, purchase official merchandise, watch live broadcasts, and engage with posts.",
      features: [
        "Native sign-in with Google, Facebook, and Apple",
        "Apple In-App Purchases and OnePay integration",
        "Adjust tracking integration for comprehensive analytics and attribution",
        "Crashlytics implementation on Android for real-time crash reporting",
        "Robust performance optimization handling 10,000+ concurrent users without crashes",
        "Live streaming and social features",
        "Performance optimization with lazy loading and virtualized lists"
      ],
      tech: ["React Native", "Expo", "NestJS", "PostgreSQL", "Redis", "AWS"],
      links: [
        {
          label: "iOS App",
          url: "https://apps.apple.com/vn/app/vff-app/id6744911455?l=vi"
        },
        {
          label: "Android App",
          url: "https://play.google.com/store/apps/details?id=vn.vff.app"
        }
      ]
    },
    {
      title: "Fan Collectibles Platform",
      description: "A platform dedicated to bringing sports and entertainment enthusiasts closer to their passions through exclusive merchandise, memorabilia, and digital collectibles.",
      features: [
        "Hybrid authentication system (Web2 + Web3)",
        "Stripe and PayPal payment integration",
        "Prediction tournament system",
        "Server-side rendering for SEO optimization"
      ],
      tech: [
        "React",
        "Next.js",
        "NestJS",
        "PostgreSQL",
        "Redis",
        "Blockchain",
        "AWS"
      ],
      links: [
        { label: "VFB Collectible", url: "https://collectibles.vfb.de" },
        { label: "African Legends", url: "https://aflc.fanzeal.com" },
        { label: "GNK Dinamo", url: "https://collectibles.gnkdinamo.hr" }
      ]
    },
    {
      title: "Viqualita",
      description: "Workflow management and production automation platform for engineering firms, enabling seamless handling of individual orders.",
      features: [
        "Scalable backend system and database schema",
        "Process thousands of orders under peak load",
        "Responsive and intuitive user interface",
        "Optimized database queries and caching"
      ],
      tech: ["Express.js", "Node.js", "Vue.js", "MongoDB", "AWS"],
      links: []
    },
    {
      title: "IoT Warehouse Management",
      description: "Automated warehouse management system to track workforce hours and monitor production efficiency.",
      features: [
        "Real-time workforce tracking",
        "Production efficiency monitoring",
        "Automated reporting system",
        "Performance optimization"
      ],
      tech: ["Express.js", "Node.js", "Vue.js", "MongoDB", "AWS"],
      links: []
    }
  ]
};
