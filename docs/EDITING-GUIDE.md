# Editing guide — where to change what

Quick reference: which files to edit for each menu and section.

---

## Menu: **Home** (`/`)

| What to edit | File |
|--------------|------|
| Main homepage layout & sections | `src/app/page.tsx` |
| Hero / intro block | `src/components/Hero.tsx` |
| “About” teaser on homepage | `src/components/About.tsx` |
| “Projects” section on homepage | `src/components/Projects.tsx` |
| Single project card (used in Projects) | `src/components/ProjectCard.tsx` |
| Stack / skills section | `src/components/Stack.tsx` |
| “Work with me” / CTA | `src/components/WorkWithMe.tsx` |
| Contact section | `src/components/Contact.tsx` |
| Shared page wrapper (padding, width) | `src/components/PageLayout.tsx` |
| Sidebar, top bar, footer | `src/components/Sidebar.tsx`, `TopBar.tsx`, `Footer.tsx` |

---

## Menu: **About** (`/about`)

| What to edit | File |
|--------------|------|
| Full About page (profile, bio, contact, skills, education, experience) | `src/app/about/page.tsx` |
| Profile image | `public/avatar.png` |

---

## Menu: **Project** (`/projects`)

| What to edit | File |
|--------------|------|
| Projects page (Company / Freelance sections) | `src/app/projects/page.tsx` |
| Project list & categories (company vs freelance) | `src/config/projects.ts` |
| Project card design | `src/components/ProjectCard.tsx` |
| Projects section on homepage | `src/components/Projects.tsx` |
| Single case study page (layout, content source) | `src/app/case-study/[slug]/page.tsx` |
| Case study content (markdown) | `ux-portfolio/case-study/payment-system.md`, `dashboard.md`, etc. |

---

## Menu: **Stacks** (`/stack`)

| What to edit | File |
|--------------|------|
| Stacks page | `src/app/stack/page.tsx` |
| Stack section on homepage | `src/components/Stack.tsx` |

---

## Navigation & layout

| What to edit | File |
|--------------|------|
| Sidebar labels, links, submenu (e.g. Company / Freelance under Project) | `src/config/nav.ts` |
| Sidebar UI & behaviour | `src/components/Sidebar.tsx` |
| Menu icons | `src/components/SidebarNavIcon.tsx` |
| Root layout (fonts, body) | `src/app/layout.tsx` |
| Global styles | `src/app/globals.css` |
| Tailwind theme | `tailwind.config.ts` |

---

## Content (markdown)

| Content | File |
|---------|------|
| About (if you use markdown as source) | `ux-portfolio/about.md` |
| Case studies | `ux-portfolio/case-study/*.md` |
| Portfolio content overview | `ux-portfolio/README.md` |
