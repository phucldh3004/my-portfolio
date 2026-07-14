"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import { motion, useInView, useAnimation } from "framer-motion"

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale"
}

export function AnimationWrapper({ children, className = "", delay = 0, animation = "fadeUp" }: AnimationWrapperProps) {
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const controls = useAnimation()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && isInView) {
      controls.start("visible")
    }
  }, [isInView, controls, mounted])

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

  // Render a plain div before hydration to avoid SSR/client mismatch (React #418)
  if (!mounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
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
