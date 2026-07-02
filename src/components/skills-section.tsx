"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { profileData } from "@/config/profile";

export function SkillsSection() {
  const categoryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const badgeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1] as any,
      },
    },
  };

  return (
    <section id="skills" className="py-24 px-4">
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
              Skills
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={categoryVariants}
          >
            {Object.entries(profileData.skills).map(([category, items]) => (
              <motion.div
                key={category}
                className="space-y-3"
                variants={itemVariants}
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {category}
                </h3>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={badgeContainerVariants}
                >
                  {items.map((skill) => (
                    <motion.div key={skill} variants={itemVariants}>
                      <Badge
                        variant="secondary"
                        className="text-sm px-3 py-1 hover:scale-110 transition-transform cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
