"use client";

import { useEffect, useState } from "react";

/**
 * StarBackground — Animated space background
 *
 * Layers:
 *   1. Static stars: Randomly positioned dots (opacity varies)
 *   2. Twinkling stars: Dots that pulse via CSS animation
 *   3. Shooting stars: Occasional streaks across the sky
 *
 * Implementation:
 *   We generate random positions once on mount to avoid hydration mismatches
 *   between server and client. The 'mounted' state ensures we only render
 *   stars on the client.
 */

interface StarProps {
    id: number;
    top: string;
    left: string;
    size: number;
    opacity: number;
    delay: string;
}

export default function StarBackground() {
    const [mounted, setMounted] = useState(false);
    const [staticStars, setStaticStars] = useState<StarProps[]>([]);
    const [twinklingStars, setTwinklingStars] = useState<StarProps[]>([]);

    useEffect(() => {
        // Generate random stars only on the client
        const generateStars = (count: number) => {
            return Array.from({ length: count }).map((_, i) => ({
                id: i,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                size: Math.random() * 2 + 1, // 1px to 3px
                opacity: Math.random() * 0.5 + 0.1, // 0.1 to 0.6 opacity
                delay: `${Math.random() * 3}s`,
            }));
        };

        setStaticStars(generateStars(80)); // 80 static stars
        setTwinklingStars(generateStars(20)); // 20 twinkling stars
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-space-dark">
            {/* Layer 1: Static Stars */}
            {staticStars.map((star) => (
                <div
                    key={`static-${star.id}`}
                    className="absolute rounded-full bg-white"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                    }}
                />
            ))}

            {/* Layer 2: Twinkling Stars */}
            {twinklingStars.map((star) => (
                <div
                    key={`twinkle-${star.id}`}
                    className="absolute rounded-full bg-accent-pink animate-twinkle"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: star.delay,
                    }}
                />
            ))}

            {/* Layer 3: Shooting Stars (using CSS animation defined in globals.css) */}
            {/*
         - w-[300px]: Long streak for speed effect
         - bg-gradient-to-r from-transparent to-white:
             With 135deg rotation, Right (White) becomes Bottom-Left (Head).
             Left (Transparent) becomes Top-Right (Tail).
      */}
            <div className="absolute top-[-10%] right-[20%] w-[300px] h-[2px] bg-gradient-to-r from-transparent to-white shadow-[0_0_20px_2px_rgba(255,255,255,0.4)] animate-shooting-star opacity-0" style={{ animationDelay: "2s", animationDuration: "3s" }} />
            <div className="absolute top-[10%] right-[-5%] w-[300px] h-[2px] bg-gradient-to-r from-transparent to-white shadow-[0_0_20px_2px_rgba(255,255,255,0.4)] animate-shooting-star opacity-0" style={{ animationDelay: "5s", animationDuration: "4s" }} />
            <div className="absolute top-[0%] right-[30%] w-[300px] h-[2px] bg-gradient-to-r from-transparent to-white shadow-[0_0_20px_2px_rgba(255,255,255,0.4)] animate-shooting-star opacity-0" style={{ animationDelay: "9s", animationDuration: "3.5s" }} />
        </div>
    );
}
