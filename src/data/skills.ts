import { Code, FileCode, Cpu, Layers, Palette, Terminal } from "lucide-react";

export interface Skill {
    name: string;
    percentage: number;
    tier: "Confident" | "Comfortable" | "Learning";
    icon: any; // Lucide icon type
    gradient: string;
}

export const SKILLS_DATA: Skill[] = [
    {
        name: "HTML",
        percentage: 90,
        tier: "Confident",
        icon: FileCode,
        gradient: "from-accent-pink to-accent-gold",
    },
    {
        name: "CSS",
        percentage: 85,
        tier: "Confident",
        icon: Palette,
        gradient: "from-accent-pink to-accent-gold",
    },
    {
        name: "JavaScript",
        percentage: 75,
        tier: "Comfortable",
        icon: Code,
        gradient: "from-accent-magenta to-accent-pink",
    },
    {
        name: "React",
        percentage: 70,
        tier: "Comfortable",
        icon: Cpu,
        gradient: "from-blue-500 to-accent-magenta",
    },
    {
        name: "Tailwind CSS",
        percentage: 45,
        tier: "Learning",
        icon: Layers,
        gradient: "from-blue-400 to-cyan-400",
    },
    {
        name: "TypeScript",
        percentage: 35,
        tier: "Learning",
        icon: Terminal,
        gradient: "from-blue-400 to-cyan-400",
    },
];
