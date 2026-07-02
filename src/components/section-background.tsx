"use client"

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
    <div className={`relative ${backgrounds[variant]}`}>
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
