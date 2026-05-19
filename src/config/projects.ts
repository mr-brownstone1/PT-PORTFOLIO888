import { projectCategories } from "./projectCategories";

/** Slug ของหมวดหมู่ระบบ (ใช้กรองโปรเจกต์ตามประเภท) */
export type SystemTypeSlug = (typeof projectCategories)[number]["slug"];

/**
 * รายการโปรเจกต์ — แก้ไขที่นี่เมื่อเพิ่ม/ลบโปรเจกต์
 * group: "company" = โปรเจกต์จากงานบริษัท, "freelance" = โปรเจกต์ฟรีแลนซ์
 * systemTypes: หมวดหมู่ระบบที่โปรเจกต์นี้เกี่ยวข้อง (เช่น erp, pos, crm)
 */
export type ProjectGroup = "company" | "freelance";

export type Project = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  group: ProjectGroup;
  /** หมวดหมู่ระบบ (Website Design, ERP, POS ฯลฯ) — ถ้าไม่ใส่จะไม่โผล่ใน section ตามประเภท */
  systemTypes?: SystemTypeSlug[];
};

export const projects: Project[] = [
  {
    slug: "changthai-thappraya-website",
    title: "Website Changthai Thappraya",
    category: "Website Design",
    date: "2024",
    summary:
      "ระบบแสดงกิจกรรม + ระบบจัดการ Back office สำหรับเพิ่ม ลบ และแก้ไขข้อมูล Product",
    group: "freelance",
    systemTypes: ["website-design"],
  },
  {
    slug: "bermahadev-website",
    title: "Website Bermahadev",
    category: "Website Design",
    date: "2024",
    summary:
      "ระบบทำนายเบอร์มงคล + ระบบจัดการ Back office สำหรับเพิ่ม ลบ และแก้ไขข้อมูลตามต้องการ",
    group: "freelance",
    systemTypes: ["website-design"],
  },
  {
    slug: "payment-system",
    title: "Payment System",
    category: "UX/UI Design",
    date: "2024",
    summary:
      "Redesigned the payment process to reduce steps and improve clarity. Users previously struggled to understand the flow.",
    group: "company",
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    category: "UX/UI Design",
    date: "2024",
    summary:
      "Case study in progress — context, problem, process, and outcomes.",
    group: "company",
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    category: "Graphic Design",
    date: "2024",
    summary:
      "Brand identity and visual design for a startup. Logo, guidelines, and marketing materials.",
    group: "freelance",
  },
];

/** โปรเจกต์แยกตามหมวด สำหรับแสดงในหน้า Project */
export const projectsByGroup = {
  company: projects.filter((p) => p.group === "company"),
  freelance: projects.filter((p) => p.group === "freelance"),
};

/** โปรเจกต์แยกตามประเภทระบบ (สำหรับ section ตามหมวดหมู่) */
export function getProjectsBySystemType(slug: SystemTypeSlug): Project[] {
  return projects.filter((p) => p.systemTypes?.includes(slug) ?? false);
}
