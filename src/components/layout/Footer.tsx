import { Github, Linkedin } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

/**
 * Footer — Simple footer with copyright and social links
 *
 * No "use client" needed because:
 *   - This is a pure display component with no state or effects
 *   - It stays as a Server Component (renders on the server, faster load)
 *
 * Social links use target="_blank" to open in a new tab.
 * rel="noopener noreferrer" is a security best practice — it prevents
 * the new tab from accessing the original page's window object.
 */

export default function Footer() {
    return (
        <footer className="border-t border-space-card-border bg-space-dark py-8">
            <ScrollReveal direction="down" distance={10}>
                <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Copyright line */}
                    <p className="text-text-secondary text-sm font-body">
                        &copy; 2026 Indigo. Built with Next.js &amp; Tailwind CSS.
                    </p>

                    {/* Social icon links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/IndigoCollier"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent-pink transition-colors duration-300"
                            aria-label="GitHub profile"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/indigo-collier-134230288/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-accent-pink transition-colors duration-300"
                            aria-label="LinkedIn profile"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </ScrollReveal>
        </footer>
    );
}
