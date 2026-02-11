"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
    percentage: number;
    gradient: string;
    className?: string;
}

export default function ProgressBar({ percentage, gradient, className }: ProgressBarProps) {
    const [isVisible, setIsVisible] = useState(false);
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    // Optional: disconnect after triggering once to keep it filled
                    // observer.disconnect(); 
                }
            },
            { threshold: 0.1 }
        );

        if (barRef.current) {
            observer.observe(barRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={barRef}
            className={cn("w-full h-3 bg-space-light/10 rounded-full overflow-hidden", className)}
        >
            <div
                className={cn(
                    "h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r",
                    gradient
                )}
                style={{ width: isVisible ? `${percentage}%` : "0%" }}
            />
        </div>
    );
}
