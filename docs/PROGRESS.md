# Project Progress Tracker

**Last Updated:** Feb 11, 2026

---

## Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Heading font | Oxanium | Geometric, futuristic — fits space/tech theme |
| Body font | Space Mono | Monospace reinforces developer aesthetic |
| Tailwind version | v4 | Uses `@theme` in CSS instead of `tailwind.config.ts` |
| Branch naming | `<type>/<ticket>-<description>` | e.g., `feat/task-4-reusable-components` |
| Commit format | `<type>(<scope>): <subject>` + body + footer | Conventional commits with scope and ticket ref |
| Docs in repo | Yes | Shows planning process for Task 8 presentation |
| Private docs | `docs/private/` in `.gitignore` | ClickUp screenshots excluded from GitHub |

---

## Completed Tasks

### Task 2: Repo Setup & Docs ✅
- Next.js project initialized (TypeScript + Tailwind CSS v4)
- README.md created
- `docs/` folder with BuildPlan.md, TechSpecs.md, UserStory.md
- lucide-react installed

### Task 3: Wireframe & Mockup ✅
- Wireframe layout saved to `docs/wireframes/layout.md`
- 8 mockup screenshots saved to `docs/mockups/`
- `docs/private/` created for ClickUp screenshots (gitignored)
- Branch: `docs/task-3-wireframe-mockup` → merged to main

### Task 4: Reusable Components ✅
- **Design system** set up in `src/app/globals.css` (Tailwind v4 `@theme` with space theme colors)
- **Fonts** configured in `src/app/layout.tsx` (Oxanium + Space Mono via `next/font/google`)
- **Metadata** updated (title: "Indigo's Portfolio")
- **Components built:**
  - `src/components/layout/Navbar.tsx` — fixed nav, scroll-spy active state, mobile hamburger menu
  - `src/components/layout/Footer.tsx` — copyright + GitHub/LinkedIn social links
  - `src/components/ui/Button.tsx` — primary/outline/ghost variants, polymorphic `<a>`/`<button>`
  - `src/components/ui/Card.tsx` — glass-morphism wrapper with hover lift
- **Hook:** `src/hooks/useScrollSpy.ts` — IntersectionObserver section tracking
- **Utility:** `src/lib/utils.ts` — `cn()` class name merge function
- **Folders scaffolded:** `sections/`, `forms/`, `data/` (with `.gitkeep`)
- Branch: `feat/task-4-reusable-components` → merged to main

---

## Current File Structure

```
src/
├── app/
│   ├── globals.css         ← Design system (@theme colors, fonts)
│   ├── layout.tsx          ← Oxanium + Space Mono, metadata
│   ├── page.tsx            ← Renders Navbar + placeholder + Footer
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── sections/.gitkeep   ← Task 5
│   └── forms/.gitkeep      ← Task 7
├── hooks/
│   └── useScrollSpy.ts
├── lib/
│   └── utils.ts
└── data/.gitkeep           ← Task 5
```

---

## Next Up

### Task 5: Core Pages (Day 6–8) — NOT STARTED
**Branch:** `feat/task-5-core-pages`

Build all six scroll sections + data files:

1. **HeroSection** — animated star background, name, title, CTAs, resume download
2. **SkillsSection** — skill cards with animated progress bars + `data/skills.ts`
3. **ProjectsSection** — carousel with project cards + `data/projects.ts`
4. **ExperienceSection** — vertical timeline + `data/experience.ts`
5. **AboutSection** — 3-column highlight cards
6. **ContactSection** — form layout (visual only, wired up in Task 7)
7. Assemble all sections in `page.tsx`
8. Test responsiveness at 375px, 390px, 768px, 1024px, 1440px

Also need to build supporting UI components:
- `StarBackground.tsx`, `ProgressBar.tsx`, `ProjectCarousel.tsx`
- `ProjectCard.tsx`, `TimelineItem.tsx`

### Remaining Tasks After Task 5
- **Task 6:** Deploy to Vercel + update README with live link
- **Task 7:** Dark mode toggle, animations, contact form (Formspree)
- **Task 8:** Final review & presentation prep
