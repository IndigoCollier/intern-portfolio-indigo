# Indigo's Developer Portfolio — Technical Specifications

**Student:** Indigo
**Project:** Personal Developer Portfolio
**Type:** Internship Project — Frontend Development

---

## Tech Stack

### Core Framework & Build

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | Next.js 14+ (App Router) | Fresh local setup via `create-next-app` |
| UI Library | React 18+ | Component-based architecture |
| Styling | Tailwind CSS | Utility-first; configured during project creation |
| Language | TypeScript | Type safety, included in project scaffold |
| Package Manager | npm | Pre-installed with Node.js |
| Dev Server | `npm run dev` | Hot-reloading at `localhost:3000` |
| Code Editor | Antigravity (local) | VS Code-style editor with integrated terminal |
| Deployment | Vercel | Required; native Next.js integration |
| Version Control | Git + GitHub | Feature-branch workflow, ClickUp ticket tracking |

### Additional Libraries & Services

| Purpose | Tool | Notes |
|---------|------|-------|
| Icons | Lucide React | Lightweight, tree-shakable icon set (`npm install lucide-react`) |
| Fonts | Google Fonts | Two fonts TBD; loaded via `next/font/google` (zero external requests) |
| Contact Form | Formspree | Second form endpoint (separate from donation app) |
| Animations | CSS transitions + Tailwind `animate-*` utilities | Framer Motion optional for carousel (`npm install framer-motion` if needed) |
| Star/Particle Effects | CSS keyframe animations | Custom `@keyframes` in globals.css |

### What We're NOT Using

| Tool | Why Not |
|------|---------|
| v0 generated code | Used for mockup/visual reference only; building fresh for clean, maintainable code |
| pnpm | v0 used this; we're using npm since it's already installed with Node.js |
| shadcn/ui | Optional later; building custom components first to demonstrate skill |
| `npx serve` | Replaced by Next.js dev server (`npm run dev`) which gives hot-reloading |

---

## Local Development Setup

### Prerequisites

- **Node.js 18.18+** (check with `node -v`)
- **npm** (comes with Node.js; check with `npm -v`)
- **Git** (check with `git -v`)
- **Antigravity** (local code editor)

### Project Initialization (One Time)

```bash
# Create the Next.js project with Tailwind, TypeScript, ESLint, and App Router
npx create-next-app@latest intern-portfolio --typescript --tailwind --eslint --app --use-npm

# Navigate into the project
cd intern-portfolio

# Start the dev server
npm run dev
```

Open `http://localhost:3000` in your browser. The page hot-reloads on every save.

### Daily Workflow

```bash
# Start your day
cd intern-portfolio
npm run dev

# Work in Antigravity, browser updates automatically on save

# When done, stop the server with Ctrl+C
```

---

## File Structure

Below is the target structure for the completed portfolio. `create-next-app` generates the foundation; you'll add the rest as you build.

```
intern-portfolio/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, theme provider)
│   ├── page.tsx                # Main single-page entry (renders all sections)
│   ├── globals.css             # Global styles, Tailwind directives, CSS variables
│   └── favicon.ico
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Fixed nav with scroll-spy, hamburger mobile menu
│   │   └── Footer.tsx          # Footer with social links, copyright
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx     # Welcome, name, title, CTA buttons, star background
│   │   ├── SkillsSection.tsx   # Skill cards with progress bars and proficiency tiers
│   │   ├── ProjectsSection.tsx # Carousel with 7 project cards
│   │   ├── ExperienceSection.tsx # Vertical timeline (2 entries)
│   │   ├── AboutSection.tsx    # Story cards (Pathway, Learning, Design)
│   │   └── ContactSection.tsx  # Formspree contact form
│   │
│   ├── ui/
│   │   ├── Button.tsx          # Reusable button (primary, outline, ghost variants)
│   │   ├── Card.tsx            # Reusable card wrapper (glass-morphism style)
│   │   ├── ProgressBar.tsx     # Animated skill progress bar
│   │   ├── ProjectCarousel.tsx # Carousel logic (active/prev/next sizing, arrows)
│   │   ├── ProjectCard.tsx     # Individual project card (screenshot, tags, link)
│   │   ├── TimelineItem.tsx    # Single timeline entry
│   │   ├── ThemeToggle.tsx     # Dark/light mode switch
│   │   └── StarBackground.tsx  # Animated stars/particles/shooting stars
│   │
│   └── forms/
│       └── ContactForm.tsx     # Form fields, validation, Formspree submission
│
├── hooks/
│   ├── useScrollSpy.ts         # Tracks active section for nav highlighting
│   ├── useTheme.ts             # Dark/light mode state + localStorage persistence
│   └── useFormValidation.ts    # Contact form validation logic
│
├── lib/
│   └── utils.ts                # Utility functions (classname merging, etc.)
│
├── data/
│   ├── projects.ts             # Array of 7 project objects (title, description, tags, image, links)
│   ├── skills.ts               # Array of skill objects (name, percentage, tier, icon)
│   └── experience.ts           # Array of timeline entries (role, org, dates, description)
│
├── public/
│   ├── images/
│   │   └── projects/           # Project screenshots (project-1.png, project-2.png, etc.)
│   └── resume/
│       └── Indigo-Resume.pdf   # Downloadable resume file
│
├── docs/
│   ├── UserStory.md            # User stories for the portfolio
│   ├── TechSpecs.md            # This document
│   └── BuildPlan.md            # 2-week sprint plan
│
├── .env.local                  # Environment variables (Formspree ID) — NOT committed to git
├── .gitignore
├── next.config.mjs             # Next.js configuration (auto-generated)
├── package.json                # Dependencies and scripts
├── package-lock.json           # npm lock file
├── postcss.config.mjs          # PostCSS config for Tailwind (auto-generated)
├── tailwind.config.ts          # Tailwind theme customization
└── tsconfig.json               # TypeScript configuration (auto-generated)
```

### What `create-next-app` Generates vs. What You Build

**Auto-generated (don't worry about creating these):**
- `app/layout.tsx`, `app/page.tsx`, `app/globals.css`
- `next.config.mjs`, `postcss.config.mjs`, `tailwind.config.ts`, `tsconfig.json`
- `package.json`, `package-lock.json`, `.gitignore`

**You create during the build:**
- Everything in `components/`, `hooks/`, `lib/`, `data/`
- Files in `public/images/` and `public/resume/`
- Everything in `docs/`
- `.env.local` (for Formspree)

---

## Design System

### Color Palette (Space Girly-Tech Theme)

Reference your v0 mockup screenshots for exact colors. Below is the system extracted from your mockup:

**Dark Mode (Primary — Default)**

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0a0a0f` | Main page background (deep space) |
| `--bg-card` | `rgba(20, 15, 35, 0.8)` | Card backgrounds (glass-morphism) |
| `--bg-card-border` | `rgba(168, 85, 170, 0.25)` | Card border glow |
| `--text-primary` | `#e8e0f0` | Main body text (soft white-lavender) |
| `--text-secondary` | `#9a8eb0` | Muted/subtitle text |
| `--accent-pink` | `#e84393` | Primary accent (nav active, headings, CTA) |
| `--accent-magenta` | `#c44dff` | Secondary accent (gradient endpoint) |
| `--accent-gold` | `#f5a623` | Tertiary accent (highlights, hover states) |
| `--progress-confident` | Linear gradient pink → orange | HTML, CSS progress bars |
| `--progress-comfortable` | Linear gradient magenta → blue | JS, React progress bars |
| `--progress-learning` | Linear gradient blue → cyan | Tailwind, TypeScript progress bars |

**Light Mode (Alternate)**

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#f5f0fa` | Soft lavender-white background |
| `--bg-card` | `#ffffff` | Clean white cards |
| `--text-primary` | `#1a1225` | Dark purple-black text |
| `--accent-pink` | `#d63384` | Slightly deeper pink for contrast |

**Implementing in Tailwind** — add to `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      space: {
        dark: '#0a0a0f',
        card: 'rgba(20, 15, 35, 0.8)',
      },
      accent: {
        pink: '#e84393',
        magenta: '#c44dff',
        gold: '#f5a623',
      },
    },
  },
}
```

Then use in components: `className="bg-space-dark text-accent-pink"`

### Typography

Two Google Fonts (final selections TBD — current mockup uses a monospace font for body text). Recommended approach:

| Role | Candidate Style | Usage |
|------|----------------|-------|
| Headings / Display | Serif or stylized sans-serif | Section titles, name, nav items |
| Body / UI | Clean sans-serif or mono | Paragraphs, labels, skill names, tags |

**Loading via Next.js** (in `app/layout.tsx`):
```tsx
import { Outfit, Space_Mono } from 'next/font/google'
// ^ Replace with your actual chosen fonts

const headingFont = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
})

const bodyFont = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

Then reference in `tailwind.config.ts`:
```ts
theme: {
  extend: {
    fontFamily: {
      heading: ['var(--font-heading)', 'serif'],
      body: ['var(--font-body)', 'sans-serif'],
    },
  },
}
```

Use in components: `className="font-heading text-3xl"` or `className="font-body"`

### Spacing & Layout

| Token | Value | Usage |
|-------|-------|-------|
| Section padding | `py-20` to `py-28` | Vertical spacing between scroll sections |
| Container | `max-w-6xl mx-auto px-4` | Content width constraint |
| Card gap | `gap-6` to `gap-8` | Grid/flex spacing between cards |
| Border radius | `rounded-xl` to `rounded-2xl` | Card corners (glass-morphism style) |

### Responsive Breakpoints (Tailwind defaults)

| Breakpoint | Tailwind Prefix | Behavior |
|-----------|----------------|----------|
| Mobile | Default (< 640px) | Single column, hamburger nav, stacked cards |
| Tablet | `sm:` (640px+) | 2-column skill grid, carousel visible |
| Desktop | `lg:` (1024px+) | Full nav bar, 3-column skills, full carousel |
| Wide | `xl:` (1280px+) | Max container width, generous spacing |

---

## Component Specifications

### Navbar

- **Position:** Fixed top, transparent background with blur backdrop (`backdrop-blur-md`)
- **Logo:** `</> portfolio` with pink accent on the brackets
- **Nav items:** Home, Skills, Projects, Experience, About, Contact
- **Active state:** Pink pill/highlight around current section (driven by `useScrollSpy`)
- **Mobile:** Hamburger icon that opens a slide-out or overlay menu
- **Scroll behavior:** `scroll-behavior: smooth` on html element; nav clicks scroll to section `id`
- **Theme toggle:** Sun/moon icon in the navbar (desktop) or in the mobile menu

### Star Background

- **Layers:** Static stars (small dots), twinkling stars (opacity animation), shooting stars (diagonal translate animation)
- **Implementation:** CSS `@keyframes` with absolutely positioned elements
- **Z-index:** Behind all content (`z-0`), sections have `relative z-10`
- **Both themes:** Dark mode = white/colored stars on dark bg; Light mode = subtle sparkle or disabled
- **Performance:** Use `will-change: transform` on animated elements; respect `prefers-reduced-motion`

### Project Carousel

- **Layout:** Horizontal strip; active card is centered and full-size, adjacent cards are scaled down (`scale-75 opacity-60`)
- **Navigation:** Left/right arrow buttons; optionally keyboard arrow keys and touch swipe on mobile
- **Card content:** Screenshot image (top), project title, 1-2 sentence description, tech tags (pill badges), external link icon/button
- **Transition:** CSS `transform` + `transition-all duration-300` for smooth scaling and sliding
- **Data source:** `data/projects.ts` array
- **State:** `useState` for `activeIndex`, increment/decrement with wrap-around

### Skills Cards

- **Layout:** 2-column grid (matching mockup), stacks to 1 column on mobile
- **Card content:** Icon, skill name, proficiency label, percentage, animated progress bar
- **Proficiency tiers:** Confident (90%+, pink/orange gradient), Comfortable (70-89%, magenta/blue), Learning (< 70%, blue/cyan)
- **Animation:** Progress bar fills on scroll-into-view (Intersection Observer)
- **Data source:** `data/skills.ts`

### Experience Timeline

- **Layout:** Vertical line with cards to the right of each node
- **Entry content:** Year/date range, role title, organization name, description paragraph
- **Icons:** Themed icons at each node (graduation cap, briefcase, code brackets)
- **Card style:** Glass-morphism matching other cards, with pink/magenta border accent
- **Data source:** `data/experience.ts`

### Contact Form

- **Fields:** Name (text), Email (email), Subject (text), Message (textarea)
- **Validation:** Required fields, email format check, minimum message length
- **Submission:** POST to Formspree endpoint via `fetch`
- **States:** Default → Submitting (loading spinner) → Success (confirmation message) → Error (retry prompt)
- **Styling:** Dark-themed inputs matching card style, pink focus ring

### Theme Toggle

- **Position:** In navbar
- **Icons:** Sun icon for light mode, moon icon for dark mode (from Lucide React)
- **Implementation:** Tailwind `darkMode: 'class'` strategy; toggle adds/removes `dark` class on `<html>`
- **Persistence:** `localStorage` to save preference; `useTheme` hook reads on mount
- **Default:** Dark mode (the space theme is the primary identity)

### Resume Download

- **Implementation:** `<a href="/resume/Indigo-Resume.pdf" download>` styled as a button
- **Location:** Hero section CTA area and/or Contact section
- **File:** Static PDF placed in `public/resume/`

---

## Data Models

### Project

```ts
interface Project {
  id: number
  title: string              // "Rescue Tennessee"
  description: string        // What it does, what you learned
  tags: string[]             // ["React", "Tailwind CSS", "Formspree"]
  image: string              // "/images/projects/project-1.png"
  liveUrl?: string           // Deployed URL (optional)
  repoUrl?: string           // GitHub repo URL (optional)
}
```

### Skill

```ts
interface Skill {
  name: string               // "JavaScript"
  percentage: number         // 75
  tier: 'Confident' | 'Comfortable' | 'Learning'
  icon: string               // Lucide icon name
}
```

### Experience Entry

```ts
interface ExperienceEntry {
  id: number
  year: string               // "Feb 2025 – Jul 2025"
  role: string               // "Frontend Development Pathway"
  organization: string       // "Program Name"
  description: string        // What you did and learned
  icon: string               // "graduation-cap" | "code" | "briefcase"
}
```

---

## Deployment

| Concern | Approach |
|---------|----------|
| Platform | Vercel (connect GitHub repo) |
| Build command | `npm run build` (auto-detected by Vercel) |
| Framework preset | Next.js (auto-detected by Vercel) |
| Environment variables | `NEXT_PUBLIC_FORMSPREE_ID` for contact form endpoint |
| Domain | Vercel subdomain initially (e.g., `indigo-portfolio.vercel.app`) |
| Preview deploys | Automatic on every branch push / PR |

---

## Performance Targets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Lighthouse Performance | 90+ |
| Lighthouse Accessibility | 90+ |
| Bundle size | Minimize — avoid heavy libraries when CSS can do the job |

---

## Accessibility Requirements

| Requirement | Implementation |
|------------|---------------|
| Keyboard navigation | All interactive elements focusable and operable via keyboard |
| Color contrast | WCAG AA (4.5:1 for body text, 3:1 for large text) in both themes |
| Screen reader | Semantic HTML (`<nav>`, `<main>`, `<section>`), meaningful `aria-label` on sections |
| Alt text | All project screenshots have descriptive alt text |
| Reduced motion | `prefers-reduced-motion` media query disables star animations and carousel transitions |
| Focus indicators | Visible focus ring (pink outline) on all interactive elements |
