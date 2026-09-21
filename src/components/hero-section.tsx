"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { m } from "framer-motion";
import { useRef } from "react"
import Script from "next/script"
import { profileData } from "@/config/profile"
import { useVantaBackground } from "@/hooks/use-vanta-background"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

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
};

const avatarVariants = {
  // Keep opacity at 1 so the avatar (LCP element) is painted immediately instead of after a fade-in.
  hidden: { opacity: 1, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

export function HeroSection() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vanta = useVantaBackground(vantaRef)

  return (
    <>
      {/* Scripts are mounted only when the background is enabled (see useVantaBackground). Vanta is loaded after three.js so window.THREE always exists. */}
      {vanta.enabled && (
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          strategy="afterInteractive"
          onLoad={vanta.onThreeLoad}
        />
      )}
      {vanta.threeLoaded && (
        <Script
          src="https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.net.min.js"
          strategy="afterInteractive"
          onLoad={vanta.onVantaLoad}
        />
      )}

      <section ref={vantaRef} className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <m.div className="flex-shrink-0" initial="hidden" animate="visible" variants={avatarVariants}>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-[#0c4a6e]/20">
                <Image
                  src="/avatar_phucldh.webp"
                  alt={profileData.name}
                  fill
                  sizes="(min-width: 768px) 256px, 192px"
                  className="object-cover"
                  preload
                  fetchPriority="high"
                  loading="eager"
                />
              </div>
            </m.div>

            <m.div className="space-y-8" initial="hidden" animate="visible" variants={containerVariants}>
              <div className="space-y-4">
                <m.div variants={itemVariants}>
                  <h1 className="text-5xl md:text-7xl font-bold text-balance text-center sm:text-left">{profileData.name}</h1>
                  <p className="text-xl md:text-2xl text-muted-foreground/80 mt-2 md:mt-4 text-center sm:text-left">{profileData.fullName}</p>
                </m.div>
                <m.p variants={itemVariants} className="text-2xl md:text-3xl text-muted-foreground text-center sm:text-left">
                  {profileData.title}
                </m.p>
              </div>

              <m.p
                variants={itemVariants}
                className="text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed text-center sm:text-left"
              >
                {profileData.bio[0]}
              </m.p>

              <m.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center sm:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium text-white transition-all duration-300 hover:opacity-90 hover:scale-[1.03] active:scale-[0.97] shadow-lg"
                  style={{ background: "linear-gradient(to right, #0f172a, #0c4a6e)" }}
                >
                  Get in touch
                  <ArrowRight className="h-5 w-5" />
                </a>
                <Button size="lg" variant="outline" asChild>
                  <a href="#projects">View projects</a>
                </Button>
              </m.div>

              <m.div variants={itemVariants} className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <a href={`tel:${profileData.phone}`} className="hover:text-foreground transition-colors">
                  {profileData.phone}
                </a>
                <a href={`mailto:${profileData.email}`} className="hover:text-foreground transition-colors">
                  {profileData.email}
                </a>
              </m.div>
            </m.div>
          </div>
        </div>
      </section>
    </>
  )
}
