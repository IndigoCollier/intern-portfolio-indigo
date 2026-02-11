import { Github, ExternalLink } from "lucide-react";

export interface Project {
    id: string;
    title: string;
    description: string;
    image?: string; // Optional image URL
    tags: string[];
    liveUrl?: string;
    repoUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
    {
        id: "project-1",
        title: "Project One",
        description: "A brief description of your project. What it does, the problem it solves, and what you learned building it.",
        tags: ["React", "Tailwind CSS", "Node.js"],
        liveUrl: "https://example.com",
        repoUrl: "https://github.com/example/repo",
    },
    {
        id: "project-2",
        title: "Project Two",
        description: "A brief description of your project. What it does, the problem it solves, and what you learned building it.",
        tags: ["TypeScript", "Next.js", "API Integration"],
        liveUrl: "https://example.com",
        repoUrl: "https://github.com/example/repo",
    },
    {
        id: "project-3",
        title: "Project Three",
        description: "A brief description of your project. What it does, the problem it solves, and what you learned building it.",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://example.com",
        repoUrl: "https://github.com/example/repo",
    },
    {
        id: "project-4",
        title: "Project Four",
        description: "A brief description of your project. What it does, the problem it solves, and what you learned building it.",
        tags: ["React", "State Management", "Design System"],
        liveUrl: "https://example.com",
        repoUrl: "https://github.com/example/repo",
    },
];
