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
        id: "exp-1",
        year: "Feb 2025 – Jul 2025",
        role: "Frontend Development Pathway",
        organization: "PERSEVERE",
        description: "Completed an intensive 6-month training program focused on HTML, CSS, JavaScript, React, and Git. Built multiple solo and group projects.",
        type: "education",
    },
    {
        id: "exp-2",
        year: "Feb 2026 – Present",
        role: "Frontend Developer Intern",
        organization: "Banyan Labs",
        description: "Working on production React applications, collaborating with senior developers, and shipping features to real users.",
        type: "work",
    },
];
