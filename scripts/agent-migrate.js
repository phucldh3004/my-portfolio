const fs = require('fs');
const path = require('path');

const SOURCE_DIR = path.resolve(__dirname, '../../portfolio-master');
const TARGET_DIR = path.resolve(__dirname, '..');

console.log('Starting Migration Agent...');
console.log(`Source: ${SOURCE_DIR}`);
console.log(`Target: ${TARGET_DIR}`);

// 1. Create directories
const directories = [
  'src/components',
  'src/components/ui',
  'src/config',
  'src/lib',
  'src/hooks',
  'public'
];

directories.forEach(dir => {
  const fullPath = path.join(TARGET_DIR, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// 2. Define profile config data
const profileConfig = `export interface ProjectLink {
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
`;

fs.writeFileSync(path.join(TARGET_DIR, 'src/config/profile.ts'), profileConfig);
console.log('Written profile config: src/config/profile.ts');

// 3. Create src/lib/utils.ts
const utilsConfig = `import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/lib/utils.ts'), utilsConfig);
console.log('Written utils helper: src/lib/utils.ts');

// 4. Copy required UI components (Button, Card, Badge, Sheet)
const copyUIComponent = (name) => {
  const src = path.join(SOURCE_DIR, `components/ui/${name}`);
  const dest = path.join(TARGET_DIR, `src/components/ui/${name}`);
  let content = fs.readFileSync(src, 'utf8');
  // Fix alias import if needed, but they are already using '@/lib/utils' which is correct
  fs.writeFileSync(dest, content);
  console.log(`Copied UI component: ${name}`);
};

copyUIComponent('button.tsx');
copyUIComponent('badge.tsx');
copyUIComponent('card.tsx');
copyUIComponent('sheet.tsx');

// 5. Create hooks if needed
const useMobileContent = `"use client"

import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(\`(max-width: \${MOBILE_BREAKPOINT - 1}px)\`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/hooks/use-mobile.ts'), useMobileContent);
console.log('Written hooks: use-mobile.ts');

// 6. Write custom optimized components
// Section Background
const sectionBgContent = `"use client"

import type React from "react"
import { motion } from "framer-motion"

interface SectionBackgroundProps {
  variant?: "default" | "accent" | "gradient"
  children: React.ReactNode
}

export function SectionBackground({ variant = "default", children }: SectionBackgroundProps) {
  const backgrounds = {
    default: "bg-background",
    accent: "bg-card",
    gradient: "bg-gradient-to-br from-background via-card to-background",
  }

  return (
    <div className={\`relative \${backgrounds[variant]}\`}>
      {/* Decorative elements */}
      {variant === "accent" && (
        <>
          <motion.div
            className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {variant === "gradient" && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.45_0.18_200_/_0.1),transparent_50%)]" />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  )
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/components/section-background.tsx'), sectionBgContent);

// Animation Wrapper
const animationWrapperContent = `"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale"
}

export function AnimationWrapper({ children, className = "", delay = 0, animation = "fadeUp" }: AnimationWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants[animation]}
      transition={{
        duration: animation === "fadeIn" ? 0.8 : 1,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1] as any,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/components/animation-wrapper.tsx'), animationWrapperContent);

// Navigation
const navigationContent = `"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { profileData } from "@/config/profile";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#resume", label: "Resume" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : ""
      }\`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <div className="relative w-10 h-10 rounded-full ring-2 ring-primary/20 overflow-hidden">
              <Image
                src="/avatar.jpg"
                alt={profileData.name}
                fill
                className="object-cover"
              />
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {menuItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-lg hover:bg-accent"
                    >
                      {item.label}
                    </a>
                  ))}
                  <div className="border-t border-border my-4" />
                  <div className="flex items-center gap-2 px-4">
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={profileData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a
                        href={profileData.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href={\`mailto:\${profileData.email}\`}>
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={\`mailto:\${profileData.email}\`}>
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/components/navigation.tsx'), navigationContent);

// Hero Section (Optimized Vanta loading with next/script)
const heroContent = `"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Script from "next/script"
import { profileData } from "@/config/profile"

export function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const [threeLoaded, setThreeLoaded] = useState(false)
  const [vantaLoaded, setVantaLoaded] = useState(false)
  const vantaEffectRef = useRef<any>(null)

  useEffect(() => {
    // If scripts are loaded and reference is ready, initialize Vanta
    if (threeLoaded && vantaLoaded && vantaRef.current && typeof window !== "undefined") {
      const w = window as any;
      if (w.VANTA && w.VANTA.NET && !vantaEffectRef.current) {
        try {
          vantaEffectRef.current = w.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x3b82f6,
            backgroundColor: 0x0a0a0a,
            points: 10.0,
            maxDistance: 25.0,
            spacing: 15.0,
          });
          console.log("Vanta.js NET initialized successfully");
        } catch (err) {
          console.error("Failed to initialize Vanta.js NET:", err);
        }
      }
    }

    return () => {
      // Destructor cleanup to avoid WebGL memory leaks
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
        console.log("Vanta.js instance destroyed");
      }
    }
  }, [threeLoaded, vantaLoaded]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  }

  const avatarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  }

  return (
    <>
      {/* Declarative loading of dependency scripts using Next.js optimization */}
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" 
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Three.js loaded via next/script");
          setThreeLoaded(true);
        }}
      />
      <Script 
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js" 
        strategy="afterInteractive"
        onLoad={() => {
          console.log("Vanta.js loaded via next/script");
          setVantaLoaded(true);
        }}
      />

      <section ref={vantaRef} className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div className="flex-shrink-0" initial="hidden" animate="visible" variants={avatarVariants}>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/20">
                <Image src="/avatar.jpg" alt={profileData.name} fill className="object-cover" priority />
              </div>
            </motion.div>

            <motion.div className="space-y-8" initial="hidden" animate="visible" variants={containerVariants}>
              <div className="space-y-4">
                <motion.div variants={itemVariants}>
                  <h1 className="text-5xl md:text-7xl font-bold text-balance">{profileData.name}</h1>
                  <p className="text-xl md:text-2xl text-muted-foreground/80 mt-2">{profileData.fullName}</p>
                </motion.div>
                <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-muted-foreground">
                  {profileData.title}
                </motion.p>
              </div>

              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed"
              >
                {profileData.bio[0]}
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="#contact">
                    Get in touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#projects">View projects</a>
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <a href={\`tel:\${profileData.phone}\`} className="hover:text-foreground transition-colors">
                  {profileData.phone}
                </a>
                <a href={\`mailto:\${profileData.email}\`} className="hover:text-foreground transition-colors">
                  {profileData.email}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/components/hero-section.tsx'), heroContent);

// About Section
const aboutContent = `"use client";

import { motion } from "framer-motion";
import { profileData } from "@/config/profile";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
              About
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {profileData.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg leading-relaxed text-muted-foreground"
                variants={itemVariants}
              >
                {index === 1 ? (
                  <>
                    Currently, I'm a{" "}
                    <span className="text-foreground font-medium">
                      Senior Full-stack Developer at Fanzeal Singapore
                    </span>
                    , where I lead teams in building innovative platforms for sports
                    and entertainment enthusiasts. I specialize in React, Next.js,
                    Vue, Node.js, and AWS, with a strong focus on performance
                    optimization and scalability.
                  </>
                ) : (
                  paragraph
                )}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/components/about-section.tsx'), aboutContent);

// Skills Section
const skillsContent = `"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { profileData } from "@/config/profile";

export function SkillsSection() {
  const categoryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1] as any,
      },
    },
  };

  return (
    <section id="skills" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
              Skills
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={categoryVariants}
          >
            {Object.entries(profileData.skills).map(([category, items]) => (
              <motion.div
                key={category}
                className="space-y-3"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {category}
                </h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={badgeContainerVariants}
                >
                  {items.map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge
                        variant="secondary"
                        className="text-sm px-3 py-1 hover:scale-110 transition-transform cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/components/skills-section.tsx'), skillsContent);

// Experience Section
const experienceContent = `"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { profileData } from "@/config/profile";

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const achievementItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
              Experience
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {profileData.experiences.map((exp, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="p-6 space-y-4 border-border bg-card hover:shadow-lg hover:scale-[1.01] transition-all duration-300 overflow-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardContentVariants}
                  >
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-muted-foreground">
                            {exp.company} · {exp.type}
                          </p>
                        </div>
                        <Badge variant="secondary">{exp.period}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Team size: {exp.teamSize}
                      </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Key Achievements:
                      </h4>
                      <motion.ul
                        className="space-y-1 text-sm text-muted-foreground"
                        variants={achievementVariants}
                      >
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex gap-2"
                            variants={achievementItemVariants}
                          >
                            <span className="text-accent">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Technologies:
                      </h4>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        variants={techVariants}
                      >
                        {exp.tech.map((tech, i) => (
                          <motion.div key={i} variants={techItemVariants}>
                            <Badge
                              variant="outline"
                              className="text-xs hover:scale-110 transition-transform"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/components/experience-section.tsx'), experienceContent);

// Projects Section
const projectsContent = `"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { profileData } from "@/config/profile";

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const linksVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
              Projects
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {profileData.projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 space-y-4 border-border bg-card hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardContentVariants}
                  >
                    <motion.div className="space-y-2" variants={headerVariants}>
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </motion.div>

                    <motion.div variants={headerVariants} className="mt-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Key Features:
                      </h4>
                      <motion.ul
                        className="space-y-1 text-sm text-muted-foreground"
                        variants={featureVariants}
                      >
                        {project.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="flex gap-2"
                            variants={featureItemVariants}
                          >
                            <span className="text-accent">•</span>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.div>

                    <motion.div className="flex flex-wrap gap-2 mt-4" variants={techVariants}>
                      {project.tech.map((tech, i) => (
                        <motion.div key={i} variants={techItemVariants}>
                          <Badge
                            variant="outline"
                            className="text-xs hover:scale-110 transition-transform"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>

                    {project.links.length > 0 && (
                      <motion.div
                        className="flex flex-wrap gap-2 pt-2 mt-4"
                        variants={linksVariants}
                      >
                        {project.links.map((link, i) => (
                          <motion.div key={i} variants={linkItemVariants}>
                            <Button
                              variant="link"
                              size="sm"
                              asChild
                              className="h-auto p-0"
                            >
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 hover:gap-2 transition-all"
                              >
                                {link.label}
                                <ExternalLink className="h-3 w-3" />
                              </a>
                            </Button>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/components/projects-section.tsx'), projectsContent);

// Resume Section (Improved download mechanism with standard semantic markup)
const resumeContent = `"use client";

import { motion } from "framer-motion";
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ResumeSection() {
  const highlights = [
    {
      icon: Briefcase,
      title: "5+ Years Experience",
      description: "Fullstack Development",
    },
    {
      icon: Award,
      title: "Team Leadership",
      description: "Led multiple successful projects",
    },
    {
      icon: GraduationCap,
      title: "Strong Background",
      description: "Computer Science & Engineering",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Resume
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my complete resume to see my full experience, education,
            and achievements
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {highlights.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 backdrop-blur border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Download Complete Resume
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get the full PDF version with detailed information about my
                    skills, experience, and achievements
                  </p>
                  
                  {/* Clean semantic download anchor element */}
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group cursor-pointer"
                  >
                    <a href="/VOVUDUC_RESUME.pdf" download="Le_Duong_Hoang_Phuc_Resume.pdf">
                      <Download className="w-5 h-5 group-hover:animate-bounce" />
                      Download Resume (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/components/resume-section.tsx'), resumeContent);

// Contact Section
const contactContent = `"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/config/profile";

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[200px_1fr] gap-12">
          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
              Contact
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-foreground text-balance">
                Let's work together on your next project
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new opportunities and
                collaborations. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <motion.div variants={cardVariants}>
                <Card className="p-6 space-y-3 border-border bg-card hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href={\`mailto:\${profileData.email}\`}
                        className="text-foreground hover:text-accent transition-colors text-sm sm:text-base"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="p-6 space-y-3 border-border bg-card hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href={\`tel:\${profileData.phone}\`}
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="p-6 space-y-3 border-border bg-card hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Github className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <a
                        href={profileData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {profileData.github}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="p-6 space-y-3 border-border bg-card hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Linkedin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a
                        href={profileData.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {profileData.linkedin}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div className="pt-4" variants={itemVariants}>
              <Button size="lg" asChild>
                <a href={\`mailto:\${profileData.email}\`}>Send me an email</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/components/contact-section.tsx'), contactContent);

// 7. Write App globals.css
const srcGlobalsCss = fs.readFileSync(path.join(SOURCE_DIR, 'app/globals.css'), 'utf8');
fs.writeFileSync(path.join(TARGET_DIR, 'src/app/globals.css'), srcGlobalsCss);
console.log('Copied app/globals.css to src/app/globals.css');

// 8. Write Orchestration app/page.tsx
const pageContent = `import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";
import { AnimationWrapper } from "@/components/animation-wrapper";
import { SectionBackground } from "@/components/section-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      <AnimationWrapper delay={100} animation="fadeUp">
        <SectionBackground variant="default">
          <AboutSection />
        </SectionBackground>
      </AnimationWrapper>

      <AnimationWrapper delay={150} animation="slideLeft">
        <SectionBackground variant="accent">
          <ExperienceSection />
        </SectionBackground>
      </AnimationWrapper>

      <AnimationWrapper delay={200} animation="fadeUp">
        <SectionBackground variant="gradient">
          <SkillsSection />
        </SectionBackground>
      </AnimationWrapper>

      <AnimationWrapper delay={250} animation="slideRight">
        <SectionBackground variant="accent">
          <ProjectsSection />
        </SectionBackground>
      </AnimationWrapper>

      <AnimationWrapper delay={275} animation="fadeUp">
        <SectionBackground variant="gradient">
          <ResumeSection />
        </SectionBackground>
      </AnimationWrapper>

      <AnimationWrapper delay={300} animation="fadeUp">
        <SectionBackground variant="default">
          <ContactSection />
        </SectionBackground>
      </AnimationWrapper>
    </main>
  );
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/app/page.tsx'), pageContent);
console.log('Written src/app/page.tsx');

// 9. Write Orchestration app/layout.tsx (Includes SEO, metadata & JSON-LD schema)
const layoutContent = `import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profileData } from "@/config/profile";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: \`\${profileData.name} (\${profileData.fullName}) - Senior Fullstack Developer | React, Next.js, Node.js Expert\`,
  description: \`Senior Fullstack Developer with 5 years of experience specializing in React, Next.js, Vue, Node.js, NestJS, and AWS. Led teams building blockchain collectibles, mobile apps, and enterprise systems.\`,
  keywords: [
    "Fullstack Developer",
    "React Developer",
    "Next.js Expert",
    "Node.js Developer",
    "Vue.js",
    "NestJS",
    "AWS",
    "TypeScript",
    "Senior Developer",
    "Lê Dương Hoàng Phúc",
    "Hoang Phuc",
  ],
  authors: [{ name: profileData.fullName }],
  creator: profileData.fullName,
  icons: {
    icon: [
      { url: "/avatar.jpg", sizes: "any", type: "image/jpeg" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richard-vo.com",
    title: \`\${profileData.name} (\${profileData.fullName}) - Senior Fullstack Developer\`,
    description: "Senior Fullstack Developer with 5 years of experience specializing in React, Next.js, Vue, Node.js, and AWS.",
    siteName: \`\${profileData.name} Portfolio\`,
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: \`\${profileData.name} (\${profileData.fullName}) - Senior Fullstack Developer\`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: \`\${profileData.name} (\${profileData.fullName}) - Senior Fullstack Developer\`,
    description: "Senior Fullstack Developer with 5 years of experience in React, Next.js, Vue, Node.js, and AWS.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profileData.fullName,
              alternateName: profileData.name,
              jobTitle: "Senior Fullstack Developer",
              description: "Senior Fullstack Developer with 5 years of experience specializing in React, Next.js, Vue, Node.js, NestJS, and AWS",
              url: "https://richard-vo.com",
              image: "/avatar.jpg",
              email: profileData.email,
              telephone: profileData.phone,
              sameAs: [
                "https://www.linkedin.com/in/richardvo1412/",
                "https://github.com/vuduc0910",
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Vue.js",
                "Node.js",
                "NestJS",
                "AWS",
                "PostgreSQL",
                "MongoDB",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "Post & Telecoms Institute of Technology",
              },
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Fanzeal Singapore",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={\`\${inter.className} antialiased\`}>
        {children}
      </body>
    </html>
  );
}
`;
fs.writeFileSync(path.join(TARGET_DIR, 'src/app/layout.tsx'), layoutContent);
console.log('Written src/app/layout.tsx');

// 10. Copy Assets
const copyAsset = (name) => {
  const src = path.join(SOURCE_DIR, 'public', name);
  const dest = path.join(TARGET_DIR, 'public', name);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied public asset: ${name}`);
  } else {
    console.warn(`Asset not found: ${name}`);
  }
};
copyAsset('avatar.jpg');
copyAsset('VOVUDUC_RESUME.pdf');

// 11. Write optimized next.config.ts (Image optimization is enabled, unoptimized is set to false or removed)
const nextConfigText = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Image optimization enabled for better performance
};

export default nextConfig;
`;
fs.writeFileSync(path.join(TARGET_DIR, 'next.config.ts'), nextConfigText);
console.log('Optimized next.config.ts written');

console.log('Migration agent execution complete! All optimized and decoupled files created successfully.');
