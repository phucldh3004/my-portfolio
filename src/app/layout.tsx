import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profileData } from "@/config/profile";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${profileData.name} (${profileData.fullName}) - Senior Fullstack Developer | React, Next.js, Node.js Expert`,
  description: `Senior Fullstack Developer with 5 years of experience specializing in React, Next.js, Vue, Node.js, NestJS, and AWS. Led teams building blockchain collectibles, mobile apps, and enterprise systems.`,
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
      { url: "/avatar_phucldh.jpg", sizes: "any", type: "image/jpeg" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://richard-vo.com",
    title: `${profileData.name} (${profileData.fullName}) - Senior Fullstack Developer`,
    description: "Senior Fullstack Developer with 5 years of experience specializing in React, Next.js, Vue, Node.js, and AWS.",
    siteName: `${profileData.name} Portfolio`,
    images: [
      {
        url: "/avatar_phucldh.jpg",
        width: 1200,
        height: 630,
        alt: `${profileData.name} (${profileData.fullName}) - Senior Fullstack Developer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.name} (${profileData.fullName}) - Senior Fullstack Developer`,
    description: "Senior Fullstack Developer with 5 years of experience in React, Next.js, Vue, Node.js, and AWS.",
    images: ["/avatar_phucldh.jpg"],
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
              jobTitle: "Senior Fullstack Developer",
              description: "Senior Fullstack Developer with 5 years of experience specializing in React, Next.js, Vue, Node.js, NestJS, and AWS",
              url: "https://richard-vo.com",
              image: "/avatar_phucldh.jpg",
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
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
