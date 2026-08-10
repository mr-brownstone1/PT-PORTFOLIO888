import type { Locale } from "./types";

export type Dictionary = typeof en;

const en = {
  nav: {
    home: "Home",
    projects: "Work",
    about: "About",
    connect: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    greeting: "Hi!",
    im: "I'm",
    roleStrong: "UX/UI Designer",
    bioBefore: "I'm a",
    bioMid: "who designs",
    bioStrong: "websites and software people actually enjoy using",
    bioAfter:
      "— from research and wireframes to polished UI and handoff for developers.",
    cta: "See my work",
    ctaSecondary: "Contact",
  },
  workTypes: {
    aria: "Types of systems I've designed",
    items: [
      "Inventory",
      "POS",
      "CRM",
      "Booking",
      "Dashboard",
      "Accounting",
      "Installments",
      "Websites",
    ],
  },
  featured: {
    eyebrow: "Work",
    title: "Featured projects",
    description:
      "A few highlights — systems and sites made for real day-to-day use.",
    viewAll: "See all work",
  },
  skills: {
    eyebrow: "Skills",
    title: "What I'm good at",
    description: "UX/UI, visuals, and a bit of front-end — the short version.",
    viewProfile: "Full profile & experience →",
    cards: [
      {
        title: "UX/UI",
        description: "Figma, flows, systems, handoff — wireframe to ship.",
      },
      {
        title: "Graphic & video",
        description: "Illustrator, Photoshop, and motion for everyday visuals.",
      },
      {
        title: "Coding (basics)",
        description: "HTML, CSS, React, Next.js — enough to speak design-to-code.",
      },
    ],
  },
  value: {
    eyebrow: "Why me",
    title: "What I bring",
    description: "Clear thinking, careful craft, and easy teamwork.",
    cards: [
      { lead: "Built on", bold: "4+ years of experience" },
      { lead: "Comfortable with", bold: "modern design tools" },
      { lead: "Happy working with", bold: "product teams" },
      { lead: "I solve problems", bold: "with design" },
      { lead: "I turn ideas into", bold: "real products" },
    ],
  },
  contact: {
    title: "Let's talk",
    body: "Open to full-time UX/UI roles, freelance, or one-off design work.",
    cta: "Contact",
  },
  projectsPage: {
    eyebrow: "Work",
    title: "Selected projects",
    description:
      "Systems, websites, and dashboards made for real day-to-day work.",
  },
  aboutPage: {
    eyebrow: "About",
    nickname: "Nickname",
    dob: "Birthday",
    viewPortfolio: "See my work",
    downloadResume: "Download resume",
    journeyTitle: "My path",
    educationTitle: "Education",
    experienceTitle: "Experience",
    productTypesTitle: "What I've designed",
    toolsTitle: "Tools I use",
    role: "UX/UI Designer",
    intro:
      "UX/UI designer with 4+ years making software, websites, and apps. I turn messy needs into clear flows, wireframes, and design systems — and work side by side with developers so it ships clean.",
    journey:
      "From co-op and jewelry products to bigger systems today. Research, clear structure, and careful UI stay at the heart of every job.",
  },
  footer: {
    pages: "Pages",
    info: "Info",
    contact: "Contact",
    role: "UX/UI Designer",
  },
  caseStudy: {
    back: "Back to work",
    role: "Role",
    tools: "Tools",
    delivered: "What I made",
    process: "How I worked",
    related: "Related work",
    viewCase: "View project",
    exploreMore: "More",
    moreCases: "Other projects",
    viewAll: "See all work →",
  },
  lang: {
    en: "EN",
    th: "TH",
    switchTo: "Language",
  },
  categories: {
    "System Design": "System Design",
    "Client Project (Web)": "Client web",
    "UX/UI Design": "UX/UI",
    "Graphic Design": "Graphic",
    "Website Design": "Website",
  } as Record<string, string>,
};

const th: Dictionary = {
  nav: {
    home: "Home",
    projects: "Work",
    about: "About",
    connect: "Contact",
    openMenu: "เปิดเมนู",
    closeMenu: "ปิดเมนู",
  },
  hero: {
    greeting: "สวัสดี!",
    im: "",
    roleStrong: "UX/UI Designer",
    bioBefore: "ทำงานเป็น",
    bioMid: "ออกแบบ",
    bioStrong: "เว็บกับระบบให้น่าใช้",
    bioAfter:
      " — จาก research, wireframe ไปถึง UI แล้วส่งให้ dev",
    cta: "ดูงาน",
    ctaSecondary: "Contact",
  },
  workTypes: {
    aria: "ประเภทงานที่เคยทำ",
    items: [
      "Inventory",
      "POS",
      "CRM",
      "Booking",
      "Dashboard",
      "Accounting",
      "Installment",
      "Website",
    ],
  },
  featured: {
    eyebrow: "Work",
    title: "งานเด่น",
    description: "ระบบกับเว็บที่ออกแบบให้ใช้จริงทุกวัน",
    viewAll: "ดูทั้งหมด",
  },
  skills: {
    eyebrow: "Skills",
    title: "สิ่งที่ทำได้ดี",
    description: "UX/UI, กราฟิก และ front-end นิดหน่อย",
    viewProfile: "ดูโปรไฟล์เต็ม →",
    cards: [
      {
        title: "UX/UI",
        description: "Figma, flow, design system, handoff",
      },
      {
        title: "Graphic & video",
        description: "Illustrator, Photoshop และงาน motion",
      },
      {
        title: "Coding",
        description: "HTML, CSS, React, Next.js พอคุยกับทีมได้",
      },
    ],
  },
  value: {
    eyebrow: "Value",
    title: "จุดแข็ง",
    description: "คิดชัด ละเอียด คุยงานง่าย",
    cards: [
      { lead: "มีประสบการณ์", bold: "4+ ปี" },
      { lead: "ใช้", bold: "design tools" },
      { lead: "ทำงานกับ", bold: "product team" },
      { lead: "แก้ปัญหาด้วย", bold: "design" },
      { lead: "ทำไอเดียให้เป็น", bold: "ของจริง" },
    ],
  },
  contact: {
    title: "ทักมาได้เลย",
    body: "รับทั้งงานประจำ UX/UI, freelance หรือโปรเจกต์ออกแบบ",
    cta: "Contact",
  },
  projectsPage: {
    eyebrow: "Work",
    title: "ผลงาน",
    description: "ระบบ เว็บ และ dashboard ที่ออกแบบให้ใช้จริง",
  },
  aboutPage: {
    eyebrow: "About",
    nickname: "ชื่อเล่น",
    dob: "วันเกิด",
    viewPortfolio: "ดูงาน",
    downloadResume: "Resume",
    journeyTitle: "Journey",
    educationTitle: "การศึกษา",
    experienceTitle: "ประสบการณ์",
    productTypesTitle: "เคยทำอะไรบ้าง",
    toolsTitle: "Tools",
    role: "UX/UI Designer",
    intro:
      "UX/UI Designer มา 4+ ปี ทำทั้งระบบ เว็บ และแอป — ชอบเคลียร์โจทย์เป็น flow, wireframe กับ design system แล้วทำงานกับ dev ให้ขึ้นจริงได้",
    journey:
      "เริ่มจากสหกิจ ผ่านงานเครื่องประดับ มาถึงระบบใหญ่ขึ้น ยังโฟกัส research วางโครงให้ชัด และทำ UI ที่ใช้แล้วรู้สึกดี",
  },
  footer: {
    pages: "Pages",
    info: "Info",
    contact: "Contact",
    role: "UX/UI Designer",
  },
  caseStudy: {
    back: "← Work",
    role: "Role",
    tools: "Tools",
    delivered: "งานที่ทำ",
    process: "Process",
    related: "งานอื่น",
    viewCase: "ดูโปรเจกต์",
    exploreMore: "เพิ่มเติม",
    moreCases: "โปรเจกต์อื่น",
    viewAll: "ดูทั้งหมด →",
  },
  lang: {
    en: "EN",
    th: "TH",
    switchTo: "ภาษา",
  },
  categories: {
    "System Design": "System",
    "Client Project (Web)": "Client web",
    "UX/UI Design": "UX/UI",
    "Graphic Design": "Graphic",
    "Website Design": "Website",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, th };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
