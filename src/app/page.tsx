import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarBackground from "@/components/ui/StarBackground";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

/**
 * Home page — Main single-page entry point
 * 
 * Task 5 Complete:
 * - All six sections implemented and mounted
 * - Smooth scrolling enabled via globals.css
 * - StarBackground fixed behind all content
 */
export default function Home() {
  return (
    <>
      <StarBackground />
      <Navbar />
      <main className="relative z-10">

        {/* Section 1: Hero */}
        <section id="home">
          <HeroSection />
        </section>

        {/* Section 2: Skills */}
        <section id="skills" className="min-h-screen flex items-center justify-center py-20 bg-space-dark/50 backdrop-blur-sm">
          <SkillsSection />
        </section>

        {/* Section 3: Projects */}
        <section id="projects" className="min-h-screen border-t border-space-card-border/30 flex items-center justify-center py-20">
          <ProjectsSection />
        </section>

        {/* Section 4: Experience */}
        <section id="experience" className="min-h-screen border-t border-space-card-border/30 flex items-center justify-center py-20 bg-space-dark/50 backdrop-blur-sm">
          <ExperienceSection />
        </section>

        {/* Section 5: About */}
        <section id="about" className="min-h-screen border-t border-space-card-border/30 flex items-center justify-center py-20">
          <AboutSection />
        </section>

        {/* Section 6: Contact */}
        <section id="contact" className="min-h-screen border-t border-space-card-border/30 flex items-center justify-center py-20 bg-space-dark/50 backdrop-blur-sm">
          <ContactSection />
        </section>

      </main>
      <Footer />
    </>
  );
}
