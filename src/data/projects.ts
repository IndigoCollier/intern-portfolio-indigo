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
        title: "Lo and Lady Labs",
        description: "Lo and Lady Labs is a React-based puppy adoption platform with advanced search, interactive galleries, and streamlined inquiry workflows.",
        tags: ["React", "Node.js"],
        liveUrl: "https://indigocollier.github.io/lo-and-lady-labs/",
        repoUrl: "https://github.com/IndigoCollier/lo-and-lady-labs",
        image: "/projects/project-1.png",
    },
    {
        id: "project-2",
        title: "Zodiac Countdown",
        description: "A fun, interactive web app where users can select their birthdate and watch a countdown to their next birthday — complete with a personalized zodiac theme, seasonal messages, and in-depth yearly horoscopes.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        liveUrl: "https://indigocollier.github.io/countdown-timer/",
        repoUrl: "https://github.com/IndigoCollier/countdown-timer",
        image: "/projects/project-2.png",
    },
    {
        id: "project-3",
        title: "Rescue Tennessee",
        description: "A comprehensive donation platform that connects potential donors with dog rescue organizations across Tennessee.",
        tags: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://github.com/IndigoCollier/rescue-tennessee", // Fallback to repo until live link confirmed
        repoUrl: "https://github.com/IndigoCollier/rescue-tennessee",
        image: "/projects/project-3.png",
    }
];
