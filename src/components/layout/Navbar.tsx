"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

/**
 * Navbar — Fixed top navigation with scroll-spy and mobile menu
 *
 * How it works:
 *   - Stays fixed at the top of the viewport (doesn't scroll away)
 *   - Has a frosted glass effect (backdrop-blur) so content shows through
 *   - Uses the useScrollSpy hook to detect which section is on screen
 *   - Highlights the active section link with a pink pill background
 *   - On mobile: collapses to a hamburger icon that opens a full-screen overlay
 *
 * "use client" is required because:
 *   - useState (mobile menu toggle)
 *   - useScrollSpy (uses useEffect + IntersectionObserver)
 *   Both of these are client-side React features that can't run on the server.
 */

const NAV_ITEMS = [
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

// Extract just the IDs (without #) for the scroll-spy hook
const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace("#", ""));

export default function Navbar() {
    // Controls whether the mobile menu is open or closed
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Tracks which section is currently visible in the viewport
    const activeSection = useScrollSpy(SECTION_IDS);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-space-dark/80 backdrop-blur-md border-b border-space-card-border">
                <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                    {/* Logo — pink brackets with "portfolio" text */}
                    <a href="#home" className="flex items-center gap-1 font-heading text-lg">
                        <span className="text-accent-pink">&lt;/&gt;</span>
                        <span className="text-text-primary">portfolio</span>
                    </a>

                    {/* Desktop nav links — hidden on mobile, shown on md (768px+) */}
                    <ul className="hidden md:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => {
                            // Check if this link's section is the currently active one
                            const isActive = activeSection === item.href.replace("#", "");

                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={cn(
                                            // Base styles for all nav links
                                            "px-4 py-2 rounded-full text-sm font-body transition-all duration-300",
                                            // Conditional: active = pink pill, inactive = muted text with hover
                                            isActive
                                                ? "bg-accent-pink/20 text-accent-pink nav-pulse"
                                                : "text-text-secondary hover:text-text-primary"
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Theme toggle placeholder — will be built in Task 7 */}
                    <div className="hidden md:block w-10" />

                    {/* Mobile hamburger button — shown below md, hidden on desktop */}
                    <button
                        className="flex md:hidden items-center text-text-primary p-2 z-50 border border-space-card-border rounded-lg"
                        onClick={() => setIsMobileMenuOpen(true)}
                        aria-label="Open navigation menu"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu overlay — OUTSIDE the nav so it has its own stacking context */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-[100] md:hidden" style={{ backgroundColor: '#0a0a0f' }}>
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Close navigation menu"
                            className="text-text-primary p-2"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <ul className="flex flex-col items-center gap-6 mt-16">
                        {NAV_ITEMS.map((item) => {
                            const isActive = activeSection === item.href.replace("#", "");

                            return (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        // Close the mobile menu when a link is clicked
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "text-xl font-body transition-colors duration-300",
                                            isActive
                                                ? "text-accent-pink"
                                                : "text-text-secondary hover:text-text-primary"
                                        )}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
}
