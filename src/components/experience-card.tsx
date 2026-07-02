"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
import { Experience } from "@/config/profile";

interface ExperienceCardProps {
  exp: Experience;
  index: number;
  cardVariants: Variants;
  /** "left" = card on left side, "right" = card on right side */
  side: "left" | "right";
}

const cardContentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
  },
};

const achievementVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const achievementItemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

const techVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const techItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

/** Color map based on employment type */
const typeColorMap: Record<string, string> = {
  "On-site": "text-blue-400",
  "Hybrid": "text-violet-400",
  "Freelancer": "text-amber-400",
  "Remote": "text-emerald-400",
};

export function ExperienceCard({
  exp,
  index,
  cardVariants,
  side,
}: ExperienceCardProps) {
  const typeColor = typeColorMap[exp.type] ?? "text-muted-foreground";

  return (
    /* ---- This wrapper is the one the user asked us NOT to change ---- */
    <motion.div key={index} variants={cardVariants}>
      <Card
        className={`p-5 space-y-3 border-border bg-card hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden relative
          ${side === "left" ? "text-right" : "text-left"}`}
      >
        {/* Subtle accent bar */}
        <span
          className={`absolute top-0 ${side === "left" ? "right-0" : "left-0"} w-1 h-full rounded-full bg-gradient-to-b from-primary/60 to-transparent`}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardContentVariants}
        >
          {/* Header */}
          <motion.div className="space-y-1" variants={itemVariants}>
            <span className={`text-xs font-semibold uppercase tracking-widest ${typeColor}`}>
              {exp.type}
            </span>
            <h3 className="text-base font-bold leading-tight text-foreground">
              {exp.role}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">
              {exp.company}
            </p>
            <Badge variant="secondary" className="text-xs">
              {exp.period}
            </Badge>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants} className="mt-3">
            <h4 className={`text-xs font-semibold text-foreground/70 mb-1 uppercase tracking-wider`}>
              Key Achievements
            </h4>
            <motion.ul
              className={`space-y-1 text-xs text-muted-foreground ${side === "left" ? "items-end" : "items-start"} flex flex-col`}
              variants={achievementVariants}
            >
              {exp.achievements.map((achievement, i) => (
                <motion.li
                  key={i}
                  className={`flex gap-1.5 ${side === "left" ? "flex-row-reverse" : "flex-row"}`}
                  variants={achievementItemVariants}
                >
                  <span className="text-primary shrink-0">•</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Tech badges */}
          <motion.div variants={itemVariants} className="mt-3">
            <motion.div
              className={`flex flex-wrap gap-1.5 ${side === "left" ? "justify-end" : "justify-start"}`}
              variants={techVariants}
            >
              {exp.tech.map((tech, i) => (
                <motion.div key={i} variants={techItemVariants}>
                  <Badge
                    variant="outline"
                    className="text-xs hover:scale-110 transition-transform cursor-default"
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
  );
}
