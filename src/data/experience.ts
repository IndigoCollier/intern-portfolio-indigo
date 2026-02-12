export interface Experience {
    id: string;
    year: string;
    role: string;
    organization: string;
    description: string;
    type: "work" | "education";
}

export const EXPERIENCE_DATA: Experience[] = [
    {
        id: "exp-2",
        year: "Feb 2026 – Present",
        role: "Software Developer",
        organization: "Banyan Labs",
        description: "Working on production-ready applications, collaborating with senior developers, and shipping scalable and visually impressive features to real users.",
        type: "work",
    },
    {
        id: "exp-1",
        year: "Feb 2025 – Jul 2025",
        role: "Frontend Development Pathway",
        organization: "PERSEVERE",
        description: "Completed an intensive 6-month training program focused on HTML, CSS, JavaScript, React, and Git. Built multiple solo and group projects.",
        type: "education",
    },
];
