"use client";

import { useEffect, useState } from "react";

/**
 * useScrollSpy — Custom hook that tracks which section is visible
 *
 * How it works:
 *   1. Takes an array of section IDs (e.g., ["home", "skills", "projects"])
 *   2. Creates an IntersectionObserver that watches all those sections
 *   3. When a section crosses 50% visibility in the viewport, it becomes "active"
 *   4. Returns the active section ID so the Navbar can highlight the right link
 *
 * Why IntersectionObserver instead of scroll events:
 *   - More performant (browser-optimized, doesn't fire on every pixel of scroll)
 *   - Doesn't need manual offset calculations
 *   - Built-in threshold support (we can say "50% visible = active")
 *
 * The offset parameter accounts for the fixed navbar height — without it,
 * the observer would consider a section "visible" even when it's hidden
 * behind the navbar.
 */
export function useScrollSpy(
    sectionIds: string[],
    offset: number = 80
): string {
    const [activeId, setActiveId] = useState<string>(sectionIds[0] || "");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Loop through all observed entries
                // When a section enters the viewport (isIntersecting = true),
                // update the active ID to that section
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                // rootMargin offsets the detection area:
                // -80px top = ignore the top 80px (navbar height)
                // -20% bottom = section needs to be well into view, not just peeking
                rootMargin: `-${offset}px 0px -20% 0px`,
                // threshold 0.1 = trigger when at least 10% of section is visible
                threshold: 0.1,
            }
        );

        // Find each section element by its ID and start observing it
        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        // Cleanup: stop observing when the component unmounts
        // This prevents memory leaks
        return () => {
            observer.disconnect();
        };
    }, [sectionIds, offset]);

    return activeId;
}
