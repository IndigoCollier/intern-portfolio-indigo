import { cn } from "@/lib/utils";

/**
 * Button — Reusable button with three style variants
 *
 * Variants:
 *   - primary: Pink gradient fill, white text (main CTAs)
 *   - outline: Transparent with pink border (secondary actions)
 *   - ghost: Text only, no border (subtle actions)
 *
 * Polymorphic rendering:
 *   - If `href` is provided → renders as an <a> tag (for links)
 *   - If no `href` → renders as a <button> tag (for actions)
 *   This means the same component works for both navigation links
 *   and interactive buttons, with the correct HTML semantics.
 *
 * Why no "use client"?
 *   This component doesn't use any hooks or browser APIs.
 *   The onClick handler is passed as a prop, so the PARENT decides
 *   whether this needs to be a client component.
 */

// Style maps for each variant
// Each key maps to the Tailwind classes for that visual style
const VARIANT_STYLES = {
    primary:
        "bg-gradient-to-r from-accent-pink to-accent-magenta text-white hover:opacity-90",
    outline:
        "border border-accent-pink text-accent-pink hover:bg-accent-pink/10",
    ghost:
        "text-text-secondary hover:text-text-primary",
};

interface ButtonProps {
    variant?: "primary" | "outline" | "ghost";
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    className?: string;
    download?: string;
}

export default function Button({
    variant = "primary",
    href,
    children,
    onClick,
    disabled = false,
    type = "button",
    className,
    download,
}: ButtonProps) {
    // Shared styles applied to both <a> and <button> versions
    const sharedStyles = cn(
        // Base layout and typography
        "inline-flex items-center justify-center px-6 py-3 rounded-full font-body text-sm",
        // Smooth hover transitions
        "transition-all duration-300",
        // Slight scale-up on hover for interactivity feel
        "hover:scale-105",
        // Focus ring for keyboard accessibility
        "focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-offset-2 focus:ring-offset-space-dark",
        // Disabled state: reduced opacity and no pointer events
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        // Apply the variant-specific styles
        VARIANT_STYLES[variant],
        // Allow parent to add extra classes
        className
    );

    // If href is provided, render as a link
    if (href) {
        return (
            <a href={href} className={sharedStyles} download={download}>
                {children}
            </a>
        );
    }

    // Otherwise, render as a button
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={sharedStyles}
        >
            {children}
        </button>
    );
}
