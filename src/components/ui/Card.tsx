import { cn } from "@/lib/utils";

/**
 * Card — Glass-morphism card wrapper
 *
 * This is the base card used across Skills, Projects, Experience,
 * and About sections. It provides the shared visual style:
 *   - Semi-transparent dark background (glass effect)
 *   - Subtle purple/pink border glow
 *   - Rounded corners
 *   - Hover lift + glow increase
 *
 * It accepts `children` so you can put ANY content inside — the card
 * doesn't care what's in it. This makes it truly reusable.
 *
 * The optional `className` prop lets each section customize the card
 * further (e.g., different padding or width) without modifying this file.
 *
 * Why no "use client"?
 *   Pure display component — no hooks, no state, no browser APIs.
 *   Stays as a Server Component for better performance.
 */

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

export default function Card({ children, className }: CardProps) {
    return (
        <div
            className={cn(
                // Glass-morphism background and border
                "bg-space-card border border-space-card-border",
                // Rounded corners and padding
                "rounded-2xl p-6",
                // Hover effect: lift up and increase border glow
                "hover:-translate-y-1 hover:border-accent-pink/40",
                // Smooth transition for all hover effects
                "transition-all duration-300",
                // Allow parent sections to add custom styles
                className
            )}
        >
            {children}
        </div>
    );
}
