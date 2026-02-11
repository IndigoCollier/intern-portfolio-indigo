/**
 * cn() — Class Name merge utility
 *
 * Combines multiple CSS class name strings into one,
 * filtering out any falsy values (undefined, null, false, "").
 *
 * Usage:
 *   cn("base-class", isActive && "active", className)
 *   → "base-class active extra-class"
 *
 * Logic:
 *   1. Takes any number of arguments (strings, undefined, false, etc.)
 *   2. Filters out anything that isn't a non-empty string
 *   3. Joins the remaining strings with a space
 *   This lets components conditionally apply classes without messy template literals.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(" ");
}
