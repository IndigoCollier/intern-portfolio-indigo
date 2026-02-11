# Indigo's Developer Portfolio — 2-Week Build Plan

**Student:** Indigo
**Project:** Personal Developer Portfolio
**Duration:** 2 weeks (10 working days, Mon–Fri)
**Methodology:** Agile sprint with feature-branch workflow
**Project Management:** ClickUp (tickets + subtasks) → GitHub (feature branches + PRs)
**Dev Environment:** Antigravity (local editor) + Next.js dev server (`npm run dev`)
**Design Reference:** v0 mockup screenshots (visual reference only — all code written fresh)

---

## Workflow for Every Task

Before starting any task, follow this process:

1. **Open the ClickUp task** and read through all subtasks
2. **Create a feature branch** from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b task-X/short-description
   ```
3. **Work through subtasks**, committing after each meaningful chunk
4. **Push the branch** and create a PR (or merge to main if working solo):
   ```bash
   git push origin task-X/short-description
   ```
5. **Mark subtasks complete** in ClickUp as you go
6. **Merge to main** when the task is fully done and tested
7. **Mark the ClickUp task complete**

---

## Sprint Overview

```
Week 1: Foundation, Components & Core Sections
  Day 1–2  → Task 2: Repo Setup & Docs (finish remaining subtasks)
  Day 2–3  → Task 3: Wireframe & Mockup (finalize designs)
  Day 3–5  → Task 4: Reusable Components (Navbar, Footer, Buttons, Cards)
  Day 5    → Begin Task 5 if ahead of schedule

Week 2: Pages, Features, Deployment & Polish
  Day 6–8  → Task 5: Core Pages (Home, About, Projects + all sections)
  Day 9    → Task 6: Deployment (Vercel + README)
  Day 10   → Task 7: Stretch Tasks (Dark mode, animations, contact form)
  Day 10   → Task 8: Final Review & Presentation prep

Buffer: Tasks 7–8 have built-in flexibility. If core work spills over, stretch tasks can be trimmed.
```

---

## Task 2: Repo Setup & Docs (Day 1–2)

**ClickUp:** Task 2 — Repo Setup & Docs (Day 2–3)
**Branch:** `task-2/repo-setup-docs`
**Status:** Sub-Task 1 ✅ complete (repo created)

### Sub-Task 2: Initialize React + Tailwind project

Since we're building fresh (not using v0 code), create a brand new Next.js project:

**Step 1: Verify your environment**
```bash
node -v        # Must be 18.18 or higher
npm -v         # Should show a version number
git --version  # Should show a version number
```

**Step 2: Create the project**
```bash
npx create-next-app@latest intern-portfolio --typescript --tailwind --eslint --app --use-npm
```

During setup, it may ask you some questions. Here are the recommended answers:
- Would you like to use `src/` directory? → **No** (keeps structure simpler)
- Would you like to customize the default import alias? → **No** (use the default `@/`)

**Step 3: Navigate in and verify it works**
```bash
cd intern-portfolio
npm run dev
```

Open `http://localhost:3000` in your browser. You should see the default Next.js welcome page. This confirms everything is working.

**Step 4: Install additional dependencies**
```bash
npm install lucide-react
```

**Step 5: Connect to your existing GitHub repo**

If your repo already exists on GitHub:
```bash
git remote add origin https://github.com/YOUR-USERNAME/intern-portfolio.git
git branch -M main
git push -u origin main
```

If you created the project inside an already-cloned repo, just verify the remote:
```bash
git remote -v
```

**Step 6: Clean up the default Next.js starter content**
- Open `app/page.tsx` — delete all the default JSX and replace with a simple placeholder:
  ```tsx
  export default function Home() {
    return (
      <main>
        <h1>Indigo's Portfolio</h1>
        <p>Coming soon...</p>
      </main>
    )
  }
  ```
- Open `app/globals.css` — keep the Tailwind directives at the top (`@tailwind base; @tailwind components; @tailwind utilities;`) but delete all the other default CSS below them

**🔑 From now on, you start your dev server with `npm run dev` instead of `npx serve`. The browser auto-refreshes when you save files.**

### Sub-Task 3: Add README

Create a `README.md` in the project root with:

- **Project name:** Indigo's Developer Portfolio
- **Description:** 1-2 sentences about what this is
- **Tech stack:** Next.js, React, Tailwind CSS, TypeScript, Formspree, Vercel
- **How to run locally:** `npm install` → `npm run dev` → open `localhost:3000`
- **Deploy link:** `[placeholder — will update in Task 6]`
- **Screenshot:** `[placeholder — will add after build]`

### Sub-Task 4: Create /docs folder

Create a `docs/` folder in the project root and add these three documents:
- `UserStory.md`
- `TechSpecs.md`
- `BuildPlan.md` (this document)

### Sub-Task 5: Push initial commit

```bash
git add .
git commit -m "chore: initialize Next.js project with Tailwind and docs"
git push origin task-2/repo-setup-docs
```

Merge branch to `main`.

---

## Task 3: Wireframe & Mockup (Day 2–3)

**ClickUp:** Task 3 — Wireframe & Mockup (Day 3–4)
**Branch:** `task-3/wireframe-mockup`

### Sub-Task 1: Create wireframe (layout sketch)

Create a simple layout sketch showing the scroll order and content blocks for each section. This can be hand-drawn on paper, done in Figma, or even a quick diagram in a markdown file. The goal is to map out:

- **Section order:** Hero → Skills → Projects → Experience → About → Contact
- **Content per section:** What data/elements live in each section
- **Responsive behavior:** How sections stack on mobile vs. desktop

Save wireframe images or files to `docs/wireframes/`.

### Sub-Task 2: Create mockup (basic styling)

You already have a beta mockup from v0. For this subtask:

- **Save your v0 mockup screenshots** to `docs/mockups/` for documentation (you already have these — the ones you shared with me)
- **Review the mockup** against the User Story — does every user story have a corresponding UI element?
- **Identify gaps:** The carousel for projects, the dark/light toggle, and the resume download button aren't in the mockup yet. Sketch or note how these will look
- **Note design changes** from the original mockup (e.g., the About section staying in, simplified hero paragraph)

```bash
git add .
git commit -m "docs: add wireframes and mockup screenshots"
git push origin task-3/wireframe-mockup
```

Merge branch to `main`.

---

## Task 4: Reusable Components (Day 3–5)

**ClickUp:** Task 4 — Reusable Components (Day 5–6)
**Branch:** `task-4/reusable-components`

This is where you build the building blocks. These components should be generic and reusable — they don't know about specific content yet. Have your v0 mockup screenshots open for visual reference as you style these.

### Sub-Task 1: Build Navbar component (React)

**File:** `components/layout/Navbar.tsx`

**Requirements:**
- Fixed to the top of the viewport (`fixed top-0 w-full z-50`)
- Transparent background with backdrop blur (`backdrop-blur-md`)
- Logo on the left: `</> portfolio` with pink accent
- Nav links on the right: Home, Skills, Projects, Experience, About, Contact
- Each link scrolls to the matching section `id` on click
- Active section highlighted with pink pill (use `useScrollSpy` hook — build this in `hooks/useScrollSpy.ts`)
- Mobile: hamburger icon that opens a slide-out or overlay menu
- Include a spot for the theme toggle button (can be empty/placeholder for now)

**Scroll Spy Hook** (`hooks/useScrollSpy.ts`):
- Uses `IntersectionObserver` to watch each section
- Returns the `id` of the currently visible section
- Navbar uses this to set the active class

### Sub-Task 2: Build Footer component (React)

**File:** `components/layout/Footer.tsx`

**Requirements:**
- Simple footer at the bottom of the page
- Copyright line: `© 2026 Indigo. Built with Next.js & Tailwind CSS.`
- Optional: social media icon links (GitHub, LinkedIn) using Lucide React icons
- Consistent styling with the space theme

### Sub-Task 3: Build Buttons component (React)

**File:** `components/ui/Button.tsx`

**Requirements:**
- Accepts a `variant` prop: `primary` (pink gradient fill), `outline` (border only), `ghost` (text only)
- Accepts standard button props (`onClick`, `disabled`, `type`, `children`)
- Can render as a button or an anchor tag (for external links)
- Responsive sizing
- Hover and focus states with smooth transitions

### Sub-Task 4: Build Cards component (React)

**File:** `components/ui/Card.tsx`

**Requirements:**
- Glass-morphism style: semi-transparent dark background, subtle border glow, rounded corners (`rounded-xl` or `rounded-2xl`)
- Accepts `children` for flexible content
- Optional `className` prop for customization per usage
- Hover effect: subtle lift or glow increase
- This is the base card used across Skills, Projects, Experience, and About sections

### Sub-Task 5: Organize in /components

Ensure your folder structure is clean:
```
components/
├── layout/
│   ├── Navbar.tsx
│   └── Footer.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   └── (more will be added in Task 5)
├── sections/
│   └── (will be populated in Task 5)
└── forms/
    └── (will be populated in Task 7)
```

Create the empty folders now so the structure is ready.

### Sub-Task 6: Commit with clear messages

Example commit messages for this task:
```bash
git commit -m "feat: add Navbar with scroll-spy and mobile hamburger menu"
git commit -m "feat: add Footer component"
git commit -m "feat: add Button component with primary, outline, ghost variants"
git commit -m "feat: add Card component with glass-morphism styling"
git commit -m "chore: organize component folder structure"
```

Merge branch to `main`.

---

## Task 5: Core Pages (Day 6–8)

**ClickUp:** Task 5 — Core Pages (Day 7–10)
**Branch:** `task-5/core-pages`

This is the biggest task. You're building all six sections of the single page plus the data files. Work through them in scroll order. Keep your v0 mockup screenshots open as your visual target.

### Sub-Task 1: Build Home page (React + Tailwind)

This means assembling `app/page.tsx` with all sections AND building the **Hero Section** and **Skills Section**.

**Main Page** (`app/page.tsx`):
```tsx
import HeroSection from '@/components/sections/HeroSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import ExperienceSection from '@/components/sections/ExperienceSection'
import AboutSection from '@/components/sections/AboutSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <section id="home"><HeroSection /></section>
      <section id="skills"><SkillsSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="experience"><ExperienceSection /></section>
      <section id="about"><AboutSection /></section>
      <section id="contact"><ContactSection /></section>
    </main>
  )
}
```

**Hero Section** (`components/sections/HeroSection.tsx`):
- Animated star background (build `components/ui/StarBackground.tsx`)
- Small label: "✨ FRONTEND DEVELOPER ✨"
- Large heading: "Welcome. I'm **Indigo**" (with name in gradient pink)
- Short punchy paragraph (1-2 sentences max)
- "SCROLL" indicator
- Two CTA buttons: "View My Skills" → scrolls to skills, "Get In Touch" → scrolls to contact
- Resume download button

**Star Background** (`components/ui/StarBackground.tsx`):
- Layer 1: Static tiny dots (randomly positioned, varying sizes)
- Layer 2: Twinkling stars (CSS `@keyframes` toggling opacity)
- Layer 3: Shooting stars (diagonal translate animation, appearing at intervals)
- Uses `position: fixed` to sit behind all content
- Add `@keyframes` to `app/globals.css`
- Respect `prefers-reduced-motion`

**Skills Section** (`components/sections/SkillsSection.tsx`):
- Section label: "MY TOOLKIT"
- Heading: "Skills & Proficiency"
- Subtitle paragraph
- 2-column grid of skill cards
- Each card: icon + skill name + proficiency label + percentage + progress bar
- Build `components/ui/ProgressBar.tsx`: animates width on scroll-into-view using Intersection Observer
- Legend at bottom: Confident (pink), Comfortable (magenta), Learning (blue)

**Create data file** — `data/skills.ts`:
```ts
export const skills = [
  { name: "HTML", percentage: 90, tier: "Confident" as const, icon: "code-xml" },
  { name: "CSS", percentage: 85, tier: "Confident" as const, icon: "palette" },
  { name: "JavaScript", percentage: 75, tier: "Comfortable" as const, icon: "braces" },
  { name: "React", percentage: 70, tier: "Comfortable" as const, icon: "atom" },
  { name: "Tailwind CSS", percentage: 45, tier: "Learning" as const, icon: "wind" },
  { name: "TypeScript", percentage: 35, tier: "Learning" as const, icon: "file-type" },
]
```

Adjust percentages and tiers to match your actual confidence level.

### Sub-Task 2: Build About section (React + Tailwind)

**About Section** (`components/sections/AboutSection.tsx`):
- Section label: "ABOUT ME"
- Heading: "My Journey So Far"
- 3-column grid (stacks to 1 column on mobile) of highlight cards:
  - Card 1: Graduation cap icon → "6-Month Pathway" → Description of your intensive frontend program
  - Card 2: Rocket icon → "Always Learning" → What you're currently diving into
  - Card 3: Heart icon → "Passion for Design" → Your design philosophy
- Uses the reusable Card component from Task 4
- Icons from Lucide React

### Sub-Task 3: Build Projects section (React + Tailwind)

**Projects Section** (`components/sections/ProjectsSection.tsx`):
- Section label: "MY WORK"
- Heading: "Projects"
- Subtitle: "A collection of things I've built along the way. Each one taught me something new."

**Project Carousel** (`components/ui/ProjectCarousel.tsx`):
- Displays one project at a time, centered and expanded
- Adjacent projects visible on either side, scaled down (`scale-75`) and dimmed (`opacity-50`)
- Left and right arrow buttons to navigate
- Wrap-around navigation (last → first and vice versa)
- Smooth CSS transitions on slide change
- On mobile: show only the active card with arrows

**Project Card** (`components/ui/ProjectCard.tsx`):
- Screenshot image area (top half)
- Project icon and external link icon
- Project title (bold)
- Description (1-2 sentences)
- Tech tags as pill badges (e.g., "React", "Tailwind CSS")

**Create data file** — `data/projects.ts`:
```ts
export const projects = [
  {
    id: 1,
    title: "Project One",           // ← UPDATE: Your actual project name
    description: "A brief description of your project.",  // ← UPDATE
    tags: ["React", "Tailwind CSS"], // ← UPDATE: Actual tech used
    image: "/images/projects/project-1.png",  // ← UPDATE: Add screenshot
    liveUrl: "https://...",          // ← UPDATE: Deployed URL (optional)
    repoUrl: "https://github.com/...",  // ← UPDATE: GitHub repo
  },
  // Repeat for all 7 projects
]
```

**📋 HOW TO ADD/EDIT PROJECTS LATER:**
1. Open `data/projects.ts`
2. **To add a project:** Copy an existing object, paste it at the end of the array, update all fields, increment the `id`
3. **To edit:** Find the project by `title` and change the fields you need
4. **To add a screenshot:** Take a screenshot of the deployed project, save it to `public/images/projects/project-X.png`, then set the `image` field to `/images/projects/project-X.png`
5. **To add links:** Paste the deployed URL into `liveUrl` and/or the GitHub repo URL into `repoUrl`
6. The carousel automatically picks up any changes — no other files need editing

**Also build the Experience Section** within this subtask timeframe:

**Experience Section** (`components/sections/ExperienceSection.tsx`):
- Section label: "MY TIMELINE"
- Heading: "Experience"
- Subtitle: "The milestones that shaped my path into frontend development."
- Vertical timeline with a line down the left side
- Timeline nodes with themed icons
- Cards for each entry

**Timeline Item** (`components/ui/TimelineItem.tsx`):
- Icon node on the timeline line
- Card with date, title, org, and description

**Create data file** — `data/experience.ts`:
```ts
export const experience = [
  {
    id: 1,
    year: "Feb 2026 – Present",     // ← UPDATE if dates change
    role: "Frontend Developer Intern",
    organization: "Company Name",    // ← UPDATE: Your actual company
    description: "Working on production React applications, collaborating with senior developers, and shipping features to real users.",  // ← UPDATE
    icon: "briefcase",
  },
  {
    id: 2,
    year: "Feb 2025 – Jul 2025",
    role: "Frontend Development Pathway",
    organization: "Program Name",    // ← UPDATE: Your actual program
    description: "Completed an intensive 6-month frontend development program covering HTML, CSS, JavaScript, React, and modern web development practices.",  // ← UPDATE
    icon: "graduation-cap",
  },
]
```

**📋 HOW TO UPDATE EXPERIENCE LATER:**
1. Open `data/experience.ts`
2. Edit any field directly — change organization names, descriptions, dates
3. To add a new entry: copy an existing object, add it to the **top** of the array (newest first), update all fields
4. The timeline renders whatever is in this array — no other files need editing

**Contact Section** (`components/sections/ContactSection.tsx`):
- Section label: "LET'S CONNECT"
- Heading: "Get In Touch"
- Subtitle paragraph about being open to opportunities
- Form fields: Name, Email (side by side on desktop), Subject, Message (full width)
- Submit button
- Form logic will be wired up in Task 7; for now, build the visual layout with a placeholder `onSubmit` that just `console.log`s the values

### Sub-Task 4: Ensure responsiveness

Go through every section and test at these widths (use browser DevTools):
- **375px** (iPhone SE)
- **390px** (iPhone 14)
- **768px** (iPad)
- **1024px** (small laptop)
- **1440px** (desktop)

Key things to check:
- Navbar collapses to hamburger on mobile
- Skill cards stack to single column on mobile
- Project carousel shows only the active card on mobile
- Timeline stacks cleanly on mobile
- About cards stack to single column on mobile
- Contact form fields stack on mobile
- No horizontal scrolling on any viewport
- Text is readable at all sizes

```bash
git add .
git commit -m "feat: build all core sections with responsive layouts"
git push origin task-5/core-pages
```

Merge branch to `main`.

---

## Task 6: Deployment (Day 9)

**ClickUp:** Task 6 — Deployment (Day 10–11)
**Branch:** `task-6/deployment`

### Sub-Task 1: Deploy to Vercel

**Step 1:** Go to [vercel.com](https://vercel.com) and sign in with your GitHub account

**Step 2:** Click "Add New Project"

**Step 3:** Import your `intern-portfolio` repository from GitHub

**Step 4:** Vercel auto-detects Next.js — confirm settings:
- Framework Preset: **Next.js**
- Build Command: `npm run build` (auto-detected)
- Output Directory: `.next` (default)
- Install Command: `npm install` (auto-detected)

**Step 5:** Add environment variable (if you've set up Formspree by now):
- Key: `NEXT_PUBLIC_FORMSPREE_ID`
- Value: your Formspree form ID

**Step 6:** Click **Deploy**

**Step 7:** Once live, grab the URL (e.g., `intern-portfolio.vercel.app`)

**Troubleshooting:**
- If build fails, run `npm run build` locally first and fix any errors
- Common issues: TypeScript errors, missing imports, or case-sensitivity in file names
- Check the Vercel build logs for the exact error message

### Sub-Task 2: Update README with live link

Open `README.md` and replace the deploy link placeholder:

```md
## Live Site
🔗 [View Portfolio](https://your-portfolio.vercel.app)
```

```bash
git commit -m "docs: update README with live deploy link"
git push origin task-6/deployment
```

Merge branch to `main`.

---

## Task 7: Stretch Tasks (Day 10)

**ClickUp:** Task 7 — Stretch Tasks (Optional) (Day 11–12)
**Branch:** `task-7/stretch-features` (or separate branches per feature)

These are stretch goals. Prioritize in this order — if you run out of time, the portfolio is still complete without them.

### Sub-Task 1: Add dark mode toggle

**Files:** `components/ui/ThemeToggle.tsx` + `hooks/useTheme.ts`

**Step 1: Configure Tailwind for dark mode**

Open `tailwind.config.ts` and add:
```ts
const config = {
  darkMode: 'class',
  // ... rest of config
}
```

**Step 2: Create the `useTheme` hook** (`hooks/useTheme.ts`):
- On mount, check `localStorage` for a saved theme preference
- Default to `'dark'` if nothing is saved
- Provide a `toggleTheme` function that:
  - Switches between `'dark'` and `'light'`
  - Saves the choice to `localStorage`
  - Adds or removes the `dark` class on the `<html>` element

**Step 3: Create the `ThemeToggle` component** (`components/ui/ThemeToggle.tsx`):
- Import `Sun` and `Moon` icons from `lucide-react`
- Use the `useTheme` hook
- Render a button that shows Sun when in dark mode (click to go light) and Moon when in light mode (click to go dark)

**Step 4: Add it to the Navbar**

**Step 5: Add `dark:` variants to your Tailwind classes throughout your sections**
```tsx
// Example
<div className="bg-white dark:bg-space-dark text-gray-900 dark:text-[#e8e0f0]">
```

**⚠️ IMPORTANT:** Since your primary design is dark mode, start by making sure dark mode looks exactly like your mockup, then add light mode styles on top. Don't break what already works.

### Sub-Task 2: Add animations

Enhance the existing space theme with these animations:

**Scroll-triggered fade-in:**
- Sections fade and slide up as they enter the viewport
- Use Intersection Observer (similar to progress bar animation)
- Add a custom hook or utility for this

**Progress bar fill:** Should already be working from Task 5 — verify it animates on scroll

**Hover effects:** Cards lift slightly on hover (`hover:-translate-y-1`), buttons scale up (`hover:scale-105`)

**Shooting stars:** If not already implemented, add periodic diagonal CSS animations to `StarBackground.tsx`

**Respect `prefers-reduced-motion`** — add this to `app/globals.css`:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Sub-Task 3: Add contact form (Formspree)

**📋 HOW TO SET UP A SECOND FORMSPREE FORM:**
1. Go to [formspree.io](https://formspree.io) and log in to your existing account
2. Click **"+ New Form"**
3. Name it **"Portfolio Contact Form"** (to distinguish from your Rescue TN form)
4. Set the email where you want to receive submissions
5. Copy the form endpoint ID (looks like `xPWEaBcD`)
6. Create a `.env.local` file in your project root (if it doesn't exist):
   ```
   NEXT_PUBLIC_FORMSPREE_ID=xPWEaBcD
   ```
7. Also add this to your Vercel project: Settings → Environment Variables → add `NEXT_PUBLIC_FORMSPREE_ID`
8. **IMPORTANT:** Make sure `.env.local` is in your `.gitignore` (it should be by default with Next.js)

**Wire up the form** in `components/forms/ContactForm.tsx`:
```tsx
'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch(
        `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      )

      if (response.ok) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Your form fields here */}
      {/* Show different messages based on status */}
    </form>
  )
}
```

**Add validation** (`hooks/useFormValidation.ts`):
- Name: required, minimum 2 characters
- Email: required, valid email format
- Subject: required
- Message: required, minimum 10 characters
- Show inline error messages below each field

```bash
git commit -m "feat: add dark mode toggle with localStorage persistence"
git commit -m "feat: add scroll animations and enhanced star effects"
git commit -m "feat: wire up contact form with Formspree"
git push origin task-7/stretch-features
```

Merge branch to `main`.

---

## Task 8: Final Review & Presentation (Day 10)

**ClickUp:** Task 8 — Final Review & Presentation (Day 13–14)
**Branch:** `task-8/final-polish` (if any last fixes needed)

### Sub-Task 1: Prepare presentation of workflow

Document your entire workflow from start to finish. This is about showing your **process**, not just the final product. Prepare to walk through:

1. **Planning:** User Story, Tech Specs, Build Plan → show the `/docs` folder
2. **Repo setup:** GitHub repo, branch strategy, ClickUp integration
3. **Wireframe → Mockup:** Show the progression from sketch to v0 mockup to final build
4. **Components:** Show how you built reusable components first, then assembled them into sections
5. **Pages/Sections:** Walk through each section of the live site
6. **Deployment:** Show the Vercel dashboard and live URL
7. **Stretch features:** Demo dark/light toggle, carousel, contact form, animations

### Sub-Task 2: Highlight reusable components and coding practices

Be prepared to show and explain:

- **Component reusability:** How the Card component is used across Skills, Projects, Experience, and About sections
- **Data-driven rendering:** How sections render from data files (`projects.ts`, `skills.ts`, `experience.ts`) — changing data changes the UI with zero code changes to components
- **Custom hooks:** `useScrollSpy`, `useTheme`, `useFormValidation` — explain what each one does and why it's a hook
- **Responsive design:** Show the same page at mobile (375px) and desktop (1440px) widths
- **Commit history:** Show clean, descriptive commit messages organized by feature branch
- **Git workflow:** Show how branches map to ClickUp tasks
- **Accessibility:** Keyboard navigation demo, mention `prefers-reduced-motion`, show semantic HTML

---

## 📋 HOW TO UPLOAD YOUR RESUME

1. Export your resume as a PDF file
2. Name it something clean like `Indigo-Resume.pdf`
3. Create the folder: `public/resume/`
4. Place the PDF in `public/resume/Indigo-Resume.pdf`
5. The download button in your Hero section links to `/resume/Indigo-Resume.pdf`:
   ```tsx
   <a href="/resume/Indigo-Resume.pdf" download className="...your button styles...">
     Download Resume
   </a>
   ```
6. Test by clicking the button — it should download the PDF
7. To update the resume later, just replace the file with the same filename

---

## 📋 HOW TO SET UP GOOGLE FONTS

1. Browse [fonts.google.com](https://fonts.google.com) and pick your two fonts
2. In `app/layout.tsx`, import them:
   ```tsx
   import { YourHeadingFont, YourBodyFont } from 'next/font/google'

   const heading = YourHeadingFont({
     subsets: ['latin'],
     variable: '--font-heading',
   })

   const body = YourBodyFont({
     subsets: ['latin'],
     weight: ['400', '700'],
     variable: '--font-body',
   })

   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en" className={`${heading.variable} ${body.variable}`}>
         <body>{children}</body>
       </html>
     )
   }
   ```
3. In `tailwind.config.ts`, add the font families:
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
4. Use in your components: `className="font-heading"` or `className="font-body"`
5. **Note:** `next/font/google` automatically downloads and self-hosts the fonts — no external requests, great for performance

---

## 📋 HOW TO ADD PROJECT SCREENSHOTS

1. Deploy your project (or open it locally)
2. Take a full-page or hero-section screenshot
3. Resize/crop to a consistent aspect ratio (recommended: 16:9 or 4:3)
4. Save as PNG or JPG to `public/images/projects/project-X.png`
5. In `data/projects.ts`, set the `image` field to `/images/projects/project-X.png`
6. The carousel will display it automatically
7. **Tip:** For consistency, try to make all screenshots the same dimensions (e.g., 1200×675)

---

## Quick Reference: Git Branch Names

| Task | Branch Name |
|------|------------|
| Task 2 | `task-2/repo-setup-docs` |
| Task 3 | `task-3/wireframe-mockup` |
| Task 4 | `task-4/reusable-components` |
| Task 5 | `task-5/core-pages` |
| Task 6 | `task-6/deployment` |
| Task 7 | `task-7/stretch-features` |
| Task 8 | `task-8/final-polish` (if needed) |

---

## Quick Reference: Commit Message Conventions

| Prefix | Usage |
|--------|-------|
| `feat:` | New feature or component |
| `fix:` | Bug fix |
| `style:` | Styling changes only (no logic) |
| `docs:` | Documentation updates |
| `chore:` | Setup, config, folder structure |
| `refactor:` | Code restructuring (no behavior change) |

Examples:
```
feat: add Navbar with scroll-spy and mobile hamburger
feat: add project carousel with arrow navigation
style: update hero section spacing for mobile
fix: carousel wrap-around not resetting to first project
docs: update README with live deploy link
chore: organize component folder structure
```

---

## Quick Reference: Useful Commands

| Command | What It Does |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Build for production (test before deploying) |
| `npm run lint` | Check for code quality issues |
| `git checkout -b task-X/name` | Create a new feature branch |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Commit with a message |
| `git push origin branch-name` | Push branch to GitHub |
| `git checkout main` | Switch back to main branch |
| `git pull origin main` | Get latest changes from main |
