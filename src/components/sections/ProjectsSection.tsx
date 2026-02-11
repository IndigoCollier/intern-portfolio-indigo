import { PROJECTS_DATA } from "@/data/projects";
import ProjectCarousel from "@/components/ui/ProjectCarousel";
import { cn } from "@/lib/utils";

/**
 * ProjectsSection
 *
 * Displays a 2-column grid of ProjectCards.
 * Matches mockup-3 layout.
 */
export default function ProjectsSection() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-20">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in-up">
                <span className="text-accent-pink tracking-widest font-heading text-sm uppercase">
                    My Work
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mt-2 mb-4">
                    Projects
                </h2>
                <p className="max-w-2xl mx-auto text-text-secondary font-body">
                    A collection of things I&apos;ve built along the way. Each one taught me something new.
                </p>
            </div>

            {/* Projects Carousel */}
            <div className="animate-fade-in-up delay-200">
                <ProjectCarousel projects={PROJECTS_DATA} />
            </div>
        </div>
    );
}
