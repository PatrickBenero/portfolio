import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { EducationSection } from "@/components/sections/education-section";
import { GitHubSection } from "@/components/sections/github-section";
import { JourneySection } from "@/components/sections/journey-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <GitHubSection />
      <JourneySection />
      <ContactSection />
    </>
  );
}
