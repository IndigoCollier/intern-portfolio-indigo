import { GraduationCap, Rocket, Heart } from "lucide-react";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";

/**
 * AboutSection
 *
 * Displays a 3-column grid of "highlight cards" that tell the user's story.
 * Matches mockup-7 with icons in rounded squares and descriptive text.
 */
export default function AboutSection() {
    const highlights = [
        {
            icon: GraduationCap,
            title: "6-Month Pathway",
            description: "Completed an intensive frontend development program covering core web technologies and modern frameworks.",
            color: "text-accent-pink",
            bg: "bg-accent-pink/10",
        },
        {
            icon: Rocket,
            title: "Always Learning",
            description: "Currently diving into TypeScript and Tailwind CSS to expand my toolkit and build more robust applications.",
            color: "text-accent-magenta",
            bg: "bg-accent-magenta/10",
        },
        {
            icon: Heart,
            title: "Passion for Design",
            description: "I love bridging the gap between design and code, creating interfaces that are both beautiful and functional.",
            color: "text-accent-pink", // re-using pink for balance
            bg: "bg-accent-pink/10",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            {/* Section Header */}
            <ScrollReveal className="text-center mb-16">
                <span className="text-accent-pink tracking-widest font-heading text-sm uppercase">
                    About Me
                </span>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-text-primary mt-2 mb-4">
                    My Journey So Far
                </h2>
            </ScrollReveal>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((item, index) => {
                    const Icon = item.icon;

                    return (
                        <ScrollReveal key={index} delay={index * 200}>
                            <Card
                                className="flex flex-col items-center text-center p-8 h-full"
                            >
                                {/* Icon Circle */}
                                <div className={cn("p-4 rounded-2xl mb-6", item.bg, item.color)}>
                                    <Icon size={32} />
                                </div>

                                <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                                    {item.title}
                                </h3>

                                <p className="text-text-secondary font-body leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </Card>
                        </ScrollReveal>
                    );
                })}
            </div>
        </div>
    );
}
