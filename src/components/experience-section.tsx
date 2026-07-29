"use client";

import { motion } from "framer-motion";
import { profileData } from "@/config/profile";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const achievementItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  const techVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const typeColorMap: Record<string, string> = {
    "On-site": "text-blue-400",
    "Hybrid": "text-violet-400",
    "Freelancer": "text-amber-400",
    "Remote": "text-emerald-400",
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
            <h2 className="text-base uppercase tracking-wider text-muted-foreground">
              Career Timeline
            </h2>
            <p className="text-2xl font-bold text-foreground">Experience</p>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {profileData.experiences.length === 0 ? (
              <motion.p
                variants={itemVariants}
                className="text-muted-foreground text-sm"
              >
                No experience entries.
              </motion.p>
            ) : (
              profileData.experiences.map((exp, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-6 space-y-4 border-border bg-card hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                    <motion.div
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                      variants={cardContentVariants}
                    >
                      <motion.div className="space-y-2" variants={headerVariants}>
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <span className={`text-xs font-semibold uppercase tracking-widest ${typeColorMap[exp.type] ?? "text-muted-foreground"}`}>
                              {exp.type}
                            </span>
                            <h3 className="text-xl font-semibold text-foreground">
                              {exp.role}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                              {exp.company}
                            </p>
                          </div>
                          <Badge variant="secondary" className="text-xs shrink-0">
                            {exp.period}
                          </Badge>
                        </div>
                      </motion.div>

                      <motion.div variants={headerVariants} className="mt-4">
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

                      <motion.div className="flex flex-wrap gap-2 mt-4" variants={techVariants}>
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
                  </Card>
                </motion.div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
