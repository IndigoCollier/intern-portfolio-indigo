"use client";

import { EXPERIENCE_DATA } from "@/data/experience";
import TimelineItem from "@/components/ui/TimelineItem";

/**
 * ExperienceSection
 *
 * Displays a vertical timeline of professional/educational experience.
 * Matches mockup-5.
 */
export default function ExperienceSection() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-20">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in-up">
                <span className="text-accent-pink tracking-widest font-heading text-sm uppercase">
                    My Timeline
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mt-2 mb-4">
                    Experience
                </h2>
                <p className="max-w-2xl mx-auto text-text-secondary font-body">
                    The milestones that shaped my path into frontend development.
                </p>
            </div>

            {/* Timeline */}
            <div className="relative">
                {EXPERIENCE_DATA.map((item, index) => (
                    <TimelineItem
                        key={item.id}
                        experience={item}
                        isLast={index === EXPERIENCE_DATA.length - 1}
                    />
                ))}
            </div>
        </div>
    );
}
