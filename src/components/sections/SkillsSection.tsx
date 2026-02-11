"use client";

import { SKILLS_DATA } from "@/data/skills";
import ProgressBar from "@/components/ui/ProgressBar";
import Card from "@/components/ui/Card";
import { cn } from "@/lib/utils";

/**
 * SkillsSection
 *
 * Displays a grid of skill cards with progress bars.
 * Includes a legend at the bottom explaining the tier colors.
 */
export default function SkillsSection() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-20">
            {/* Section Header */}
            <div className="text-center mb-16 animate-fade-in-up">
                <span className="text-accent-pink tracking-widest font-heading text-sm uppercase">
                    My Toolkit
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mt-2 mb-4">
                    Skills & Proficiency
                </h2>
                <p className="max-w-2xl mx-auto text-text-secondary font-body">
                    Here&apos;s where I stand with the technologies I&apos;ve been learning.
                    From fundamentals I&apos;m confident in, to newer tools I&apos;m just getting started with.
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {SKILLS_DATA.map((skill, index) => {
                    const Icon = skill.icon;

                    return (
                        <Card
                            key={skill.name}
                            className={cn(
                                "animate-fade-in-up hover:border-accent-pink/50",
                                // Stagger animations based on index
                                `delay-[${index * 100}ms]`
                            )}
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-space-light/5 rounded-lg text-accent-pink">
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-bold text-lg text-text-primary">
                                            {skill.name}
                                        </h3>
                                        <p className="text-xs text-text-secondary uppercase tracking-wider font-body">
                                            {skill.tier}
                                        </p>
                                    </div>
                                </div>
                                <span className="font-body font-bold text-accent-pink">
                                    {skill.percentage}%
                                </span>
                            </div>

                            <ProgressBar percentage={skill.percentage} gradient={skill.gradient} />
                        </Card>
                    );
                })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up delay-700">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent-pink" />
                    <span className="text-text-secondary text-sm">Confident</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-accent-magenta" />
                    <span className="text-text-secondary text-sm">Comfortable</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400" />
                    <span className="text-text-secondary text-sm">Learning</span>
                </div>
            </div>
        </div>
    );
}
