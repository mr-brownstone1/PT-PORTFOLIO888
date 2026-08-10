import type { Locale } from "../types";

export const aboutExperienceTh = [
  {
    period: "ก.ค. 2023 – ปัจจุบัน",
    role: "UX/UI Designer (Full-time)",
    company: "TTD GLOBAL Co., Ltd.",
    responsibilities: [
      "คุยโจทย์ผู้ใช้ แล้วทำเป็น flow, wireframe และ prototype",
      "ออกแบบ design system และ UI เว็บ/มือถือ",
      "ทำ usability test ก่อนขึ้นจริง",
      "ทำงานกับ dev กับ product ให้ไปทางเดียวกัน",
      "ทำ responsive แล้วส่ง spec / component ให้ชัด",
    ],
  },
  {
    period: "ก.ค. 2021 – 2023",
    role: "UX/UI Designer (Full-time)",
    company: "Jeweal Prosoft Co., Ltd.",
    responsibilities: [
      "ลีดงาน UX/UI ข้ามทีม",
      "เก็บ requirement เพื่อหาทางแก้ที่ใช่",
      "ทำ flow, wireframe และ prototype",
      "ดูแล design system ให้ UI สม่ำเสมอ",
      "ลองใช้กับคนจริง แล้วเก็บ feedback",
      "ออกแบบเว็บและแอปแบบ responsive",
    ],
  },
  {
    period: "ม.ค. 2019 – ก.ค. 2019",
    role: "UX/UI Designer (Co-op)",
    company: "Finn Solution Co., Ltd.",
    responsibilities: [
      "เก็บโจทย์แล้วจับปัญหาหลัก",
      "ทำ journey, persona, system flow และ wireframe",
      "ออกแบบ UI concept และ prototype",
      "ทำ usability test แล้วสรุปจุดที่ต้องปรับ",
    ],
  },
  {
    period: "Freelance",
    role: "UX/UI Designer (Freelance)",
    company: "—",
    responsibilities: [
      "คุยกับลูกค้า แล้วแปลงเป้าธุรกิจเป็นดีไซน์ที่ใช้จริงได้",
      "ออกแบบ UI, กราฟิก และสื่อการตลาด",
      "ส่งไฟล์ให้เว็บหรือ product",
    ],
  },
] as const;

export const aboutEducationTh = [
  {
    year: "2017–2020",
    degree: "ปริญญาตรี วิทยาการคอมพิวเตอร์",
    school: "KMITL",
    description: "คณะวิทยาศาสตร์ กรุงเทพฯ",
    logo: "/about/kmitl-logo.png",
  },
] as const;

export const aboutProductGroupsTh = [
  {
    title: "Core",
    items: [
      { icon: "globe" as const, label: "Website" },
      { icon: "cog" as const, label: "Admin system" },
      { icon: "banknotes" as const, label: "Accounting" },
      { icon: "chart" as const, label: "ERP" },
      { icon: "store" as const, label: "POS" },
    ],
  },
  {
    title: "Operations",
    items: [
      { icon: "cube" as const, label: "Inventory" },
      { icon: "airplane" as const, label: "Travel / Booking" },
      { icon: "users" as const, label: "CRM" },
      { icon: "briefcase" as const, label: "Business software" },
    ],
  },
] as const;

export function pickAboutExperience(locale: Locale) {
  return locale === "th" ? aboutExperienceTh : null;
}

export function pickAboutEducation(locale: Locale) {
  return locale === "th" ? aboutEducationTh : null;
}

export function pickAboutProductGroups(locale: Locale) {
  return locale === "th" ? aboutProductGroupsTh : null;
}
