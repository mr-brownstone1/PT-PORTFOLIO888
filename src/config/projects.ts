import { projectCategories } from "./projectCategories";

/** Slug ของหมวดหมู่ระบบ (ใช้กรองโปรเจกต์ตามประเภท) */
export type SystemTypeSlug = (typeof projectCategories)[number]["slug"];

/**
 * รายการโปรเจกต์ — แก้ไขที่นี่เมื่อเพิ่ม/ลบโปรเจกต์
 * systemTypes: หมวดหมู่ระบบที่โปรเจกต์นี้เกี่ยวข้อง (เช่น erp, pos, crm)
 */
export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  /** รูป preview สำหรับ carousel / การ์ด (optional) */
  image?: string;
  /** Lottie animation สำหรับการ์ด (optional, ใช้แทน image) */
  lottie?: string;
  /** หมวดหมู่ระบบ (Website Design, ERP, POS ฯลฯ) — ถ้าไม่ใส่จะไม่โผล่ใน section ตามประเภท */
  systemTypes?: SystemTypeSlug[];
};

/** โปรเจกต์ที่แสดงบนหน้าแรก (carousel) — เรียงตามลำดับนี้ */
export const featuredProjectSlugs = [
  "booking-system",
  "landing-page-website",
  "inventory-management",
  "dashboard",
] as const;

export const projects: Project[] = [
  {
    slug: "rattana-code-888",
    title: "RattanaCode_888",
    category: "System Design",
    summary:
      "Freelance practice delivering custom systems and websites—inventory, POS, booking, and brand sites.",
    image: "/projects/rattana-code-888.png",
    systemTypes: ["software-for-business", "admin-system"],
  },
  {
    slug: "booking-system",
    title: "Booking System",
    category: "System Design",
    summary:
      "Tour booking ecosystem—customer website, B2C booking admin, and tour operations admin.",
    image: "/projects/booking-system.png",
    systemTypes: ["software-for-business", "admin-system", "travel-system"],
  },
  {
    slug: "inventory-management",
    title: "Inventory Management System",
    category: "System Design",
    summary:
      "Stock receiving, inventory tracking, and in-store POS—with franchise support for cross-branch sales.",
    lottie: "/projects/inventory-preview.lottie",
    systemTypes: ["stock-inventory", "pos", "admin-system"],
  },
  {
    slug: "accounting-system",
    title: "Accounting System",
    category: "System Design",
    summary:
      "Company income and expense accounting—invoices, documents, and role-based access in one admin.",
    lottie: "/projects/accounting-preview.lottie",
    image: "/projects/accounting-system.png",
    systemTypes: ["accounting-system", "admin-system"],
  },
  {
    slug: "landing-page-website",
    title: "Website",
    category: "Client Project (Web)",
    summary:
      "Landing pages and business web apps—responsive marketing sites plus retail dashboards, POS, and inventory.",
    image: "/projects/website/card-preview.png",
    systemTypes: ["website-design"],
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    category: "UX/UI Design",
    summary:
      "Admin and analytics dashboards for operations—data density, scannability, and role-based views that teams use every day.",
    lottie: "/projects/dashboard-preview.lottie",
    systemTypes: ["admin-system"],
  },
  {
    slug: "graphic",
    title: "Graphic Design",
    category: "Graphic Design",
    summary:
      "Visual design for brands—logos, social assets, posters, and marketing materials with a consistent look and feel.",
    lottie: "/projects/graphic-preview.lottie",
    systemTypes: ["website-design"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return featuredProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is Project => p !== undefined);
}

/** โปรเจกต์แยกตามประเภทระบบ (สำหรับ section ตามหมวดหมู่) */
export function getProjectsBySystemType(slug: SystemTypeSlug): Project[] {
  return projects.filter((p) => p.systemTypes?.includes(slug) ?? false);
}
