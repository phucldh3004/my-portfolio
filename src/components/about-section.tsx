"use client";

import { motion } from "framer-motion";
import { profileData } from "@/config/profile";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section id="about" className="py-24 px-4">
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
              About
            </h2>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {profileData.bio.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg leading-relaxed text-muted-foreground"
                variants={itemVariants}
              >
                {index === 1 ? (
                  <>
                    Currently, I'm a{" "}
                    <span className="text-foreground font-medium">
                      Senior Full-stack Developer at Fanzeal Singapore
                    </span>
                    , where I lead teams in building innovative platforms for sports
                    and entertainment enthusiasts. I specialize in React, Next.js,
                    Vue, Node.js, and AWS, with a strong focus on performance
                    optimization and scalability.
                  </>
                ) : (
                  paragraph
                )}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
