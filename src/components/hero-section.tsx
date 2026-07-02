"use client"

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
                <a href={`tel:${profileData.phone}`} className="hover:text-foreground transition-colors">
                  {profileData.phone}
                </a>
                <a href={`mailto:${profileData.email}`} className="hover:text-foreground transition-colors">
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
