import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ResumeSection } from "@/components/resume-section";
import { ContactSection } from "@/components/contact-section";
import { Navigation } from "@/components/navigation";
import { AnimationWrapper } from "@/components/animation-wrapper";
import { SectionBackground } from "@/components/section-background";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      
      <AnimationWrapper delay={100} animation="fadeUp">
        <SectionBackground variant="default">
          <AboutSection />
        </SectionBackground>
      </AnimationWrapper>

      <AnimationWrapper delay={150} animation="slideLeft">
        <SectionBackground variant="accent">
          <ExperienceSection />
        </SectionBackground>
      </AnimationWrapper>

      <AnimationWrapper delay={200} animation="fadeUp">
        <SectionBackground variant="gradient">
          <SkillsSection />
        </SectionBackground>
      </AnimationWrapper>

      <AnimationWrapper delay={250} animation="slideRight">
        <SectionBackground variant="accent">
          <ProjectsSection />
        </SectionBackground>
      </AnimationWrapper>

      <AnimationWrapper delay={275} animation="fadeUp">
        <SectionBackground variant="gradient">
          <ResumeSection />
        </SectionBackground>
      </AnimationWrapper>

      <AnimationWrapper delay={300} animation="fadeUp">
        <SectionBackground variant="default">
          <ContactSection />
        </SectionBackground>
      </AnimationWrapper>
    </main>
  );
}
