"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { profileData } from "@/config/profile";

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const cardContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  const achievementVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const achievementItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const techItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
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
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">
              Experience
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {profileData.experiences.map((exp, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="p-6 space-y-4 border-border bg-card hover:shadow-lg hover:scale-[1.01] transition-all duration-300 overflow-hidden">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={cardContentVariants}
                  >
                    <motion.div className="space-y-2" variants={itemVariants}>
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-muted-foreground">
                            {exp.company} · {exp.type}
                          </p>
                        </div>
                        <Badge variant="secondary">{exp.period}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Team size: {exp.teamSize}
                      </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="mt-4">
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

                    <motion.div variants={itemVariants} className="mt-4">
                      <h4 className="text-sm font-medium text-foreground mb-2">
                        Technologies:
                      </h4>
                      <motion.div
                        className="flex flex-wrap gap-2"
                        variants={techVariants}
                      >
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
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
