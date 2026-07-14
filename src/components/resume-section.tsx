"use client";

import { motion } from "framer-motion";
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function ResumeSection() {
  const highlights = [
    {
      icon: Briefcase,
      title: "5+ Years Experience",
      description: "Fullstack Development",
    },
    {
      icon: Award,
      title: "Team Leadership",
      description: "Led multiple successful projects",
    },
    {
      icon: GraduationCap,
      title: "Strong Background",
      description: "Computer Science & Engineering",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="resume" className="py-20 px-4">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
            My Resume
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download my complete resume to see my full experience, education,
            and achievements
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {highlights.map((item, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 hover:scale-105 transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <Card className="bg-gradient-to-br from-primary/10 via-black-500/10 to-blue-500/10 backdrop-blur border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    Download Complete Resume
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Get the full PDF version with detailed information about my
                    skills, experience, and achievements
                  </p>

                  {/* Clean semantic download anchor element */}
                  <Button
                    size="lg"
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 group cursor-pointer"
                  >
                    <a href="/LeDuongHoangPhuc_CV.pdf" download="LeDuongHoangPhuc_CV.pdf">
                      <Download className="w-5 h-5 group-hover:animate-bounce" />
                      Download Resume (PDF)
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
