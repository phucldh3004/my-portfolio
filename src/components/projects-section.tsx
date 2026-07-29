"use client";

import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { profileData, Project } from "@/config/profile";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Users } from "lucide-react";

/* ─── responsive hook ────────────────────────────────────────────── */
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return isMobile;
}

/* ─── helpers ───────────────────────────────────────────────────── */
const MONTH_NAMES: Record<string, number> = {
  january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
  july: 6, august: 7, september: 8, october: 9, november: 10, december: 11,
  jan: 0, feb: 1, mar: 2, apr: 3, jun: 5, jul: 6, aug: 7,
  sep: 8, oct: 9, nov: 10, dec: 11,
};
function parseDate(token: string): Date {
  const clean = token.replace(/-/g, " ").trim();
  const parts = clean.split(/\s+/);
  if (parts.length >= 2) {
    const monthKey = parts[0].toLowerCase();
    const year = parseInt(parts[1], 10);
    if (monthKey in MONTH_NAMES && !isNaN(year)) {
      return new Date(year, MONTH_NAMES[monthKey], 1);
    }
  }
  const d = new Date(clean);
  return isNaN(d.getTime()) ? new Date(0) : d;
}

const MONTH_ABBR = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function formatMonthYear(d: Date): string {
  return `${MONTH_ABBR[d.getMonth()]} ${d.getFullYear()}`;
}

function parsePeriod(period: string): { start: Date; end: Date } {
  const parts = period.split(" - ").map((s) => s.trim());
  const start = parseDate(parts[0]);
  const end =
    parts[1] && parts[1].toLowerCase() !== "now" && parts[1].toLowerCase() !== "present"
      ? parseDate(parts[1])
      : new Date();
  return { start, end };
}

/* ─── animation variants ─────────────────────────────────────────── */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as any },
  },
};

const connectorVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

/* ─── color map ─────────────────────────────────────────────────── */
const typeColorMap: Record<string, string> = {
  "On-site": "text-blue-400",
  "Hybrid": "text-violet-400",
  "Freelancer": "text-amber-400",
  "Remote": "text-emerald-400",
};

/* ─── dot label on the centre spine ─────────────────────────────── */
function TimelineDot({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center shrink-0 w-28 select-none">
      <div className="relative flex flex-col items-center">
        <div className="w-3.5 h-3.5 rounded-full border-2 border-primary bg-background z-10 shadow-[0_0_8px_2px_hsl(var(--primary)/0.4)]" />
        <p className="text-[11px] text-muted-foreground font-medium mt-1 whitespace-nowrap">
          {label}
        </p>
      </div>
    </div>
  );
}

/* ─── project card ───────────────────────────────────────────────── */
function ProjectCard({
  project,
  index,
  side,
}: {
  project: Project;
  index: number;
  side: "left" | "right";
}) {
  const typeColor = typeColorMap[project.type ?? ""] ?? "text-muted-foreground";

  const cardContentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } },
  };
  const featureVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  const featureItemVariants: Variants = {
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

  return (
    <motion.div key={index} variants={cardVariants}>
      <Card
        className={`p-5 space-y-3 border-border bg-card hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden relative
          ${side === "left" ? "text-right" : "text-left"}`}
      >
        {/* Accent bar */}
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
            {project.type && (
              <span className={`text-xs font-semibold uppercase tracking-widest ${typeColor}`}>
                {project.type}
                {project.teamSize ? ` · ${project.teamSize} members` : ""}
              </span>
            )}
            <h3 className="text-base font-bold leading-tight text-foreground">
              {project.title}
            </h3>
            {project.company && (
              <p className="text-sm text-muted-foreground font-medium">{project.company}</p>
            )}
            {project.period && (
              <Badge variant="secondary" className="text-xs">
                {project.period}
              </Badge>
            )}
            <p className={`text-xs text-muted-foreground leading-relaxed mt-1`}>
              {project.description}
            </p>
          </motion.div>

          {/* Features */}
          <motion.div variants={itemVariants} className="mt-3">
            <h4 className="text-xs font-semibold text-foreground/70 mb-1 uppercase tracking-wider">
              Key Features
            </h4>
            <motion.ul
              className={`space-y-1 text-xs text-muted-foreground ${side === "left" ? "items-end" : "items-start"} flex flex-col`}
              variants={featureVariants}
            >
              {project.features.map((feature, i) => (
                <motion.li
                  key={i}
                  className={`flex gap-1.5 ${side === "left" ? "flex-row-reverse" : "flex-row"}`}
                  variants={featureItemVariants}
                >
                  <span className="text-primary shrink-0">•</span>
                  <span>{feature}</span>
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
              {project.tech.map((tech, i) => (
                <motion.div key={i} variants={techItemVariants}>
                  <Badge variant="outline" className="text-xs hover:scale-110 transition-transform cursor-default">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Links */}
          {project.links && project.links.length > 0 && (
            <motion.div
              variants={itemVariants}
              className={`flex flex-wrap gap-2 mt-3 ${side === "left" ? "justify-end" : "justify-start"}`}
            >
              {project.links.map((link, i) => (
                <Button key={i} variant="link" size="sm" asChild className="h-auto p-0">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:gap-2 transition-all text-xs"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </Card>
    </motion.div>
  );
}

/* ─── main section ───────────────────────────────────────────────── */
export function ProjectsSection() {
  const projects = profileData.projects;
  const isMobile = useIsMobile();

  return (
    <section id="projects" className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-base uppercase tracking-widest text-muted-foreground mb-2">
            Work History
          </h2>
          <p className="text-2xl font-bold text-foreground">Projects</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative flex flex-col items-center gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          {/* Vertical spine */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-primary/60 via-border to-transparent pointer-events-none" />

          {projects.map((project, idx) => {
            const dotLabel = project.period
              ? formatMonthYear(parsePeriod(project.period).start)
              : "";
            const side: "left" | "right" = idx % 2 === 0 ? "left" : "right";

            return (
              <div key={idx} className="w-full">
                {/* Dot */}
                <div className="flex justify-center mb-4">
                  <TimelineDot label={dotLabel} />
                </div>

                <div className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] items-start gap-0 mb-10 md:mb-14">
                  {side === "left" ? (
                    <>
                      <div className="w-full md:pr-6 md:flex md:justify-end">
                        <div className="w-full md:max-w-sm">
                          <ProjectCard project={project} index={idx} side={isMobile ? "right" : "left"} />
                        </div>
                      </div>
                      <div className="hidden md:flex w-28 items-center justify-start pt-6">
                        <motion.div
                          className="h-px w-full bg-border origin-right"
                          variants={connectorVariants}
                        />
                      </div>
                      <div className="hidden md:block md:pl-6" />
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block md:pr-6" />
                      <div className="hidden md:flex w-28 items-center justify-end pt-6">
                        <motion.div
                          className="h-px w-full bg-border origin-left"
                          variants={connectorVariants}
                        />
                      </div>
                      <div className="w-full md:pl-6 md:flex md:justify-start">
                        <div className="w-full md:max-w-sm">
                          <ProjectCard project={project} index={idx} side="right" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}

          {/* End cap */}
          <div className="flex flex-col items-center gap-1 mt-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
            <p className="text-xs text-muted-foreground">Jul 2020</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
