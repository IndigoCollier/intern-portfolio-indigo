import { PROJECTS_DATA } from "@/data/projects";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

/**
 * ProjectsSection
 *
 * Displays a 2-column grid of ProjectCards.
 * Matches mockup-3 layout.
 */
export default function ProjectsSection() {
    return (
        <div className="max-w-screen-2xl mx-auto px-4 py-20">
            {/* Section Header */}
            <ScrollReveal className="text-center mb-16">
                <span className="text-accent-pink tracking-widest font-heading text-sm uppercase">
                    My Work
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mt-2 mb-4">
                    Projects
                </h2>
                <p className="max-w-2xl mx-auto text-text-secondary font-body">
                    Here is a collection of my projects that speak to my heart, my skillset, and my mission.
                </p>
            </ScrollReveal>

            {/* Projects Carousel */}
            <ScrollReveal delay={200} distance={50}>
                <ProjectCarousel projects={PROJECTS_DATA} />
            </ScrollReveal>
        </div>
    );
}
