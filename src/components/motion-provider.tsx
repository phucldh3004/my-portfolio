"use client";

import type { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

// Sections use the lightweight `m` component; domAnimation (~15 KB) replaces the
// full `motion` bundle (~34 KB) while keeping variants/animate/whileInView working.
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
