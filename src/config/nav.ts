import { projectCategories } from "./projectCategories";

/**
 * รายการเมนู Sidebar
 * แก้ไขที่นี่เมื่อต้องการเพิ่ม/ลบ/เปลี่ยนลำดับเมนู
 * children = submenu (แสดงเมื่อคลิกหรืออยู่หน้านั้น)
 */
export type NavSubItem = { href: string; label: string };

export type NavItem = {
  href: string;
  label: string;
  icon: string;
  children?: readonly NavSubItem[];
};

export const navItems: readonly NavItem[] = [
  {
    href: "/",
    label: "Home",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    href: "/about",
    label: "About",
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  },
  {
    href: "/projects",
    label: "Projects",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    children: projectCategories.map((c) => ({
      href: `/projects#${c.slug}`,
      label: c.label,
    })),
  },
];
