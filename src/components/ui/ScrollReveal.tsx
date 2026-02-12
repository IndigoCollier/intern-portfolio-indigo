"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
    delay?: number;
    duration?: number;
    distance?: number;
    once?: boolean;
}

/**
 * ScrollReveal Component
 * 
 * Wraps content and animates it into view when it enters the viewport.
 * Uses IntersectionObserver for performance and clean triggering.
 */
export default function ScrollReveal({
    children,
    className,
    direction = "up",
    delay = 0,
    duration = 800,
    distance = 30,
    once = true,
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once && ref.current) {
                        observer.unobserve(ref.current);
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.01,
                rootMargin: "0px",
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [once]);

    // Determine starting transform based on direction
    const getTransform = () => {
        if (isVisible) return "translate(0, 0)";

        switch (direction) {
            case "up":
                return `translateY(${distance}px)`;
            case "down":
                return `translateY(-${distance}px)`;
            case "left":
                return `translateX(${distance}px)`;
            case "right":
                return `translateX(-${distance}px)`;
            default:
                return "translateY(0)";
        }
    };

    return (
        <div
            ref={ref}
            className={cn("transition-all ease-[cubic-bezier(0.25,1,0.5,1)]", className)}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: getTransform(),
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                willChange: "transform, opacity",
            }}
        >
            {children}
        </div>
    );
}
