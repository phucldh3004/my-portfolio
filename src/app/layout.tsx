import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { profileData } from "@/config/profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profileData.name} (${profileData.fullName}) - ${profileData.title} | React, Next.js, Vue, Nuxt, Node.js, NestJS, and Java Spring Boot`,
  description: `Senior Frontend / Full-stack Developer with 6+ years of experience specializing in React.js, Next.js, Vue.js, and Nuxt.js ecosystems. Solid full-stack capability with Node.js/Nest.js and Java Spring Boot.`,
  keywords: [
    "Senior Frontend Developer",
    "Full-stack Developer",
    "React Developer",
    "Next.js Expert",
    "Vue.js",
    "Nuxt.js",
    "NestJS",
    "Node.js",
    "Java Spring Boot",
    "TypeScript",
    "Lê Dương Hoàng Phúc",
    "Hoang Phuc",
  ],
  authors: [{ name: profileData.fullName }],
  creator: profileData.fullName,
  icons: {
    icon: [
      { url: "/avatar_phucldh.webp", sizes: "any", type: "image/webp" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://le-duong-hoang-phuc-3004.vercel.app/",
    title: `${profileData.name} (${profileData.fullName}) - ${profileData.title}`,
    description: `Senior Frontend / Full-stack Developer with 6+ years of experience specializing in React.js, Next.js, Vue.js, and Nuxt.js ecosystems.`,
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/avatar_phucldh.webp",
        width: 1200,
        height: 630,
        alt: `${profileData.name} (${profileData.fullName}) - ${profileData.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} (${profileData.fullName}) - ${profileData.title}`,
    description: `Senior Frontend / Full-stack Developer with 6+ years of experience in React, Next.js, Vue, Nuxt, NestJS, and Spring Boot.`,
    images: ["/avatar_phucldh.webp"],
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: profileData.fullName,
              alternateName: profileData.name,
              jobTitle: profileData.title,
              description: `Senior Frontend / Full-stack Developer with 6+ years of experience specializing in React.js, Next.js, Vue.js, and Nuxt.js ecosystems.`,
              url: "https://le-duong-hoang-phuc-3004.vercel.app/",
              image: "/avatar_phucldh.webp",
              email: profileData.email,
              telephone: profileData.phone,
              sameAs: [
                profileData.linkedinUrl,
                profileData.githubUrl,
              ],
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React.js",
                "Next.js",
                "Vue.js",
                "Nuxt.js",
                "Node.js",
                "NestJS",
                "Java Spring Boot",
                "Playwright",
                "gRPC",
                "WebSocket",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: profileData.education.school,
              },
              worksFor: [
                {
                  "@type": "Organization",
                  name: "Prestige Home",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
