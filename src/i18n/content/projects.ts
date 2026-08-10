import type { Locale } from "./types";

/** Thai project cards — keep product terms in English where Thai sounds forced */
export const projectCopyTh: Record<
  string,
  { summary: string; category?: string }
> = {
  "rattana-code-888": {
    summary:
      "Freelance ระบบกับเว็บให้ SME — Inventory, POS, CRM, installment, คีย์ตัวเลข, booking และเว็บแบรนด์",
    category: "System",
  },
  "booking-system": {
    summary:
      "ระบบจองทัวร์ — เว็บลูกค้า, admin ขาย และ admin ดูแลทริป",
    category: "System",
  },
  "inventory-management": {
    summary:
      "รับของ ดูสต็อก และขายหน้าร้านด้วย POS — ใช้กับ franchise หลายสาขาได้",
    category: "System",
  },
  "accounting-system": {
    summary:
      "บัญชีรายรับ–รายจ่ายในที่เดียว — invoice, เอกสาร และสิทธิ์ตาม role",
    category: "System",
  },
  "landing-page-website": {
    summary:
      "Landing page กับเว็บธุรกิจ — พร้อม dashboard ร้านค้า, POS และ inventory",
    category: "Client web",
  },
  dashboard: {
    summary:
      "Dashboard งานประจำวัน — ตัวเลขชัด อ่านเร็ว แยกตาม role",
    category: "UX/UI",
  },
  graphic: {
    summary:
      "กราฟิกแบรนด์ — logo, social, poster และสื่อโปรโมทในโทนเดียวกัน",
    category: "Graphic",
  },
};

export function getProjectSummary(
  slug: string,
  summaryEn: string,
  locale: Locale
): string {
  if (locale === "th") return projectCopyTh[slug]?.summary ?? summaryEn;
  return summaryEn;
}

export function getProjectCategory(
  slug: string,
  categoryEn: string,
  locale: Locale,
  categoryMap: Record<string, string>
): string {
  if (locale === "th") {
    return (
      projectCopyTh[slug]?.category ??
      categoryMap[categoryEn] ??
      categoryEn
    );
  }
  return categoryEn;
}
