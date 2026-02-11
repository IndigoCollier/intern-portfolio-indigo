import { Github, ExternalLink, Image as ImageIcon } from "lucide-react";
import Card from "@/components/ui/Card";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    project: Project;
    className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
    return (
        <Card className={cn("overflow-hidden flex flex-col h-full group p-0", className)}>

            {/* Top Half: Image Area */}
            <div className="relative h-48 bg-space-light/5 border-b border-space-card-border/50 flex items-center justify-center overflow-hidden">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="text-space-light/20 group-hover:text-accent-pink/50 transition-colors duration-300">
                        <ImageIcon size={48} />
                    </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-space-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.repoUrl && (
                        <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-space-dark rounded-full text-text-primary hover:text-accent-pink hover:bg-space-light/10 transition-colors"
                            aria-label="View Source Code"
                        >
                            <Github size={20} />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-space-dark rounded-full text-text-primary hover:text-accent-pink hover:bg-space-light/10 transition-colors"
                            aria-label="View Live Project"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
            </div>

            {/* Bottom Half: Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-3">
                    <h3 className="font-heading font-bold text-xl text-text-primary group-hover:text-accent-pink transition-colors">
                        {project.title}
                    </h3>
                </div>

                <p className="text-text-secondary text-sm font-body mb-4 line-clamp-3 flex-grow">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-body px-2 py-1 rounded-full bg-space-light/5 text-text-secondary border border-space-card-border/30"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    );
}
