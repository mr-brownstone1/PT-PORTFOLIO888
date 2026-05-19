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
  /** หมวดหมู่ระบบ (Website Design, ERP, POS ฯลฯ) — ถ้าไม่ใส่จะไม่โผล่ใน section ตามประเภท */
  systemTypes?: SystemTypeSlug[];
};

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
    title: "Project - Booking System",
    category: "System Design",
    summary:
      "Tour booking ecosystem—customer website and web admin for operations.",
    image: "/projects/booking-system.png",
    systemTypes: ["software-for-business", "admin-system"],
  },
  {
    slug: "bermahadev-website",
    title: "Project - Inventory Management System",
    category: "System Design",
    summary:
      "Stock receiving, inventory tracking, and in-store POS—with franchise support for cross-branch sales.",
    image: "/projects/inventory-management.png",
    systemTypes: ["stock-inventory", "pos", "admin-system"],
  },
  {
    slug: "payment-system",
    title: "Project - Accounting System",
    category: "System Design",
    summary:
      "Company income and expense accounting—invoices, documents, and role-based access in one admin.",
    image: "/projects/accounting-system.png",
    systemTypes: ["accounting-system", "admin-system"],
  },
  {
    slug: "landing-page-website",
    title: "Landing page website, responsive",
    category: "Customer Project (Web)",
    summary:
      "YSERVICE marketing landing—responsive layout with hero, features, pricing, and contact on one scroll.",
    systemTypes: ["website-design"],
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    category: "UX/UI Design",
    summary:
      "Admin and analytics dashboards for operations—data density, scanability, and role-based views that teams use every day.",
    systemTypes: ["admin-system"],
  },
  {
    slug: "graphic",
    title: "Graphic",
    category: "Graphic Design",
    summary:
      "Visual design for brands—logos, social assets, posters, and marketing materials with a consistent look and feel.",
  },
];

/** โปรเจกต์แยกตามประเภทระบบ (สำหรับ section ตามหมวดหมู่) */
export function getProjectsBySystemType(slug: SystemTypeSlug): Project[] {
  return projects.filter((p) => p.systemTypes?.includes(slug) ?? false);
}
