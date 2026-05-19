import type { StandardSpotlightCard } from "./spotlight";

export type SkillCategory = StandardSpotlightCard & {
  /** รายละเอียดเต็ม — หน้า About */
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    emoji: "🎯",
    title: "UX/UI",
    description: "Figma, flows, systems, and handoff—from wireframe to ship.",
    items: [
      "UX/UI Design (Figma, Framer)",
      "Design System, User Flow, Prototyping",
      "Developer handoff, responsive design",
    ],
  },
  {
    emoji: "🎨",
    title: "Graphic Design & Video",
    description: "Illustrator, Photoshop, and motion tools for visual work.",
    items: [
      "Illustrator, Photoshop",
      "After Effects, Premiere Pro, CapCut",
    ],
  },
  {
    emoji: "💻",
    title: "Coding (Basic)",
    description: "HTML, CSS, React, and Next.js for design-to-code.",
    items: ["HTML, CSS", "React, Next.js"],
  },
];

export const skillsByCategory = Object.fromEntries(
  skillCategories.map((c) => [c.title, c.items])
) as Record<string, string[]>;
