"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "@/components/ui/ProjectCard";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
    projects: Project[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const getSlideStyles = (index: number) => {
        // Calculate distance from current index, handling wrap-around
        let distance = index - currentIndex;

        // Adjust for wrap-around
        if (distance > projects.length / 2) distance -= projects.length;
        if (distance < -projects.length / 2) distance += projects.length;

        // Determine position/style based on distance
        if (distance === 0) {
            return "translate-x-0 scale-100 opacity-100 z-20 pointer-events-auto";
        } else if (distance === 1 || distance === -projects.length + 1) {
            return "translate-x-[60%] scale-85 opacity-50 z-10 pointer-events-auto cursor-pointer"; // Right
        } else if (distance === -1 || distance === projects.length - 1) {
            return "-translate-x-[60%] scale-85 opacity-50 z-10 pointer-events-auto cursor-pointer"; // Left
        } else {
            return "opacity-0 scale-50 z-0 pointer-events-none"; // Hidden/Back
        }
    };

    // Helper to handle clicks on side cards
    const handleCardClick = (index: number) => {
        let distance = index - currentIndex;
        if (distance > projects.length / 2) distance -= projects.length;
        if (distance < -projects.length / 2) distance += projects.length;

        if (distance === 0) return; // Already active
        if (distance === 1 || distance === -projects.length + 1) nextSlide();
        if (distance === -1 || distance === projects.length - 1) prevSlide();
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto h-[600px] flex items-center justify-center">

            {/* Carousel Container */}
            <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                {projects.map((project, index) => {
                    const styles = getSlideStyles(index);

                    return (
                        <div
                            key={project.id}
                            className={cn(
                                "absolute w-[90%] md:w-[60%] max-w-lg transition-all duration-500 ease-in-out transform",
                                styles
                            )}
                            onClick={() => handleCardClick(index)}
                        >
                            <ProjectCard project={project} className="h-full shadow-2xl" />
                        </div>
                    );
                })}
            </div>

            {/* Navigation Buttons (Desktop: Spread out, Mobile: Tucked in) */}
            <button
                onClick={prevSlide}
                className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-space-card/80 border border-space-card-border hover:border-accent-pink text-text-primary transition-colors z-30 backdrop-blur-sm"
                aria-label="Previous Project"
            >
                <ChevronLeft size={24} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-space-card/80 border border-space-card-border hover:border-accent-pink text-text-primary transition-colors z-30 backdrop-blur-sm"
                aria-label="Next Project"
            >
                <ChevronRight size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={cn(
                            "w-2.5 h-2.5 rounded-full transition-colors duration-300",
                            index === currentIndex
                                ? "bg-accent-pink w-6"
                                : "bg-space-card-border hover:bg-space-light/20"
                        )}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
}
