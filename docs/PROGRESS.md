# Project Progress Tracker

**Last Updated:** Feb 12, 2026

---

## Key Decisions

| Decision | Choice | Reason |
|----------|--------|--------|
| Heading font | Oxanium | Geometric, futuristic — fits space/tech theme |
| Body font | Space Mono | Monospace reinforces developer aesthetic |
| Tailwind version | v4 | Uses `@theme` in CSS instead of `tailwind.config.ts` |
| Branch naming | `<type>/<ticket>-<description>` | e.g., `feat/task-5-core-pages` |
| Commit format | `<type>(<scope>): <subject>` | Conventional commits |
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
- **Design system** set up in `src/app/globals.css`
- **Fonts** configured (Oxanium + Space Mono)
- **Components built:** Navbar, Footer, Button, Card
- **Hook:** `src/hooks/useScrollSpy.ts`
- Branch: `feat/task-4-reusable-components` → merged to main

### Task 5: Core Pages ✅
- **All Sections Built:** Hero, Skills, Projects, Experience, About, Contact
- **Supporting Components:** StarBackground, ProgressBar, ProjectCarousel, ProjectCard, TimelineItem
- **Data Files:** All populated with real content
- **UI Polish:** 135° shooting stars, glitch effects, pulsing nav glow, maximized project layout
- **Resume:** Download button added and linked
- Branch: `feat/task-5-core-pages` → merged to main

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

### Task 6: Deployment (Day 9) — NOT STARTED
- Deploy to Vercel
- Update README with live link

### Task 7: Stretch Tasks (Day 10) — [/]
- Dark mode toggle
- Contact form logic (Formspree) ✅
- Scroll animations
