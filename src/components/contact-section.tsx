"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { profileData } from "@/config/profile";

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as any,
      },
    },
  };

  return (
    <section id="contact" className="py-24 px-4">
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
              Contact
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-foreground text-balance">
                Let's work together on your next project
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new opportunities and
                collaborations. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              <motion.div variants={cardVariants}>
                <Card className="p-6 space-y-3 border-border bg-card hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-foreground hover:text-accent transition-colors text-sm sm:text-base"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="p-6 space-y-3 border-border bg-card hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href={`tel:${profileData.phone}`}
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {profileData.phone}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="p-6 space-y-3 border-border bg-card hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Github className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">GitHub</p>
                      <a
                        href={profileData.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {profileData.github}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={cardVariants}>
                <Card className="p-6 space-y-3 border-border bg-card hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Linkedin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">LinkedIn</p>
                      <a
                        href={profileData.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {profileData.linkedin}
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div className="pt-4" variants={itemVariants}>
              <Button size="lg" asChild>
                <a href={`mailto:${profileData.email}`}>Send me an email</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
