# Portfolio Wireframe & Layout Strategy

## Mobile First Strategy (375px+)
All sections stack vertically. Navigation collapses into a hamburger menu.

## Desktop Strategy (1024px+)
Navigation expands. Grids activate (2-col or 3-col).

---

## 1. Navbar (Fixed Top)
- **Desktop:** `[Logo] [Home Skills Projects Experience About Contact] [ThemeToggle]`
- **Mobile:** `[Logo] [HamburgerMenu]`
- **Behavior:** Backdrop blur, highlights current section on scroll.

## 2. Hero Section (#home)
- **Layout:** Centered content.
- **Elements:**
  - Small Label: "Frontend Developer"
  - H1: "Indigo" (Gradient Text)
  - Intro Paragraph
  - CTA Buttons: [View Skills] [Contact Me]
  - Background: Animated Stars
- **Mobile:** Same layout, adjusted padding.

## 3. Skills Section (#skills)
- **Layout:**
  - Desktop: 2-column grid (match mockup).
  - Mobile: 1-column stack.
- **Elements:**
  - Title: "My Toolkit"
  - Cards: [Icon + Name + % Bar + Tier Label]

## 4. Projects Section (#projects)
- **Layout:**
  - Desktop: Carousel (Active Center, Neighbors scaled down).
  - Mobile: Single card view with arrows.
- **Elements:**
  - Card: [Image (Top) | Title + Desc + Tags + Links (Bottom)]
  - Navigation: < Prev | Next >

## 5. Experience Section (#experience)
- **Layout:** Vertical Timeline.
- **Desktop:** Line on left, content on right.
- **Mobile:** Line persists, simplified padding.
- **Elements:**
  - Nodes: Icons on the line.
  - Cards: [Date | Role | Org | Desc]

## 6. About Section (#about)
- **Layout:**
  - Desktop: 3-column grid of "Highlight Cards".
  - Mobile: 1-column stack.
- **Elements:**
  - Cards: [Icon | Title | Short Text]
  - Content: "Pathway", "Learning", "Passion"

## 7. Contact Section (#contact)
- **Layout:**
  - Desktop: Form centered max-width.
  - Mobile: Full width.
- **Elements:**
  - Inputs: Name, Email (Side-by-side on desktop), Subject, Message.
  - Button: "Send Message"

## 8. Footer
- **Layout:** Simple centered text.
- **Elements:** Copyright, Social Links.
