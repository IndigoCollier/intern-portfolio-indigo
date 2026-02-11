import { Briefcase, GraduationCap } from "lucide-react";
import Card from "@/components/ui/Card";
import { Experience } from "@/data/experience";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
    experience: Experience;
    isLast?: boolean;
}

export default function TimelineItem({ experience, isLast }: TimelineItemProps) {
    const Icon = experience.type === "work" ? Briefcase : GraduationCap;
    const iconColor = experience.type === "work" ? "text-accent-pink" : "text-accent-magenta";
    const borderColor = experience.type === "work" ? "border-accent-pink" : "border-accent-magenta";

    return (
        <div className="relative pl-8 md:pl-0">

            {/* Desktop Layout: Timeline content creates a row */}
            <div className="md:flex items-center justify-between group">

                {/* Left Side (Desktop): Date */}
                <div className="hidden md:block md:w-5/12 text-right pr-8">
                    <span className="text-accent-pink font-heading font-bold text-lg">
                        {experience.year}
                    </span>
                </div>

                {/* Center: Icon Node on Line */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center h-full">
                    {/* The Dot */}
                    <div className={cn(
                        "w-12 h-12 rounded-full border-2 bg-space-dark z-10 flex items-center justify-center transition-colors duration-300",
                        borderColor,
                        "group-hover:bg-space-light/10"
                    )}>
                        <Icon size={20} className={iconColor} />
                    </div>

                    {/* The Line (only if not last item) */}
                    {!isLast && (
                        <div className="w-0.5 h-full bg-space-card-border/30 absolute top-12" />
                    )}
                </div>

                {/* Right Side (Desktop) / Main Content (Mobile): Card */}
                <div className="md:w-5/12 pl-4 md:pl-8 pb-12">

                    {/* Mobile Date (hidden on desktop) */}
                    <div className="md:hidden mb-2">
                        <span className="text-accent-pink font-heading font-bold text-sm">
                            {experience.year}
                        </span>
                    </div>

                    <Card className="hover:border-accent-pink/40 animate-fade-in-up">
                        <h3 className="font-heading font-bold text-xl text-text-primary mb-1">
                            {experience.role}
                        </h3>
                        <div className="text-text-secondary font-body text-sm mb-4">
                            {experience.organization}
                        </div>
                        <p className="text-text-secondary/80 text-sm leading-relaxed">
                            {experience.description}
                        </p>
                    </Card>
                </div>

            </div>
        </div>
    );
}
