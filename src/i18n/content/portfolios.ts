import type { Locale } from "../types";
import type { PortfolioIntro } from "@/config/caseStudyNarrative";
import type { RattanaPortfolioProject } from "@/config/rattanaPortfolio";

type PortfolioTh = {
  tagline?: string;
  highlights?: string[];
  process?: string[];
  relatedDescription?: string;
  relatedLabel?: string;
  role?: string;
  sections?: Record<
    string,
    { title?: string; summary?: string; category?: string }
  >;
};

export const portfolioThBySlug: Record<string, PortfolioTh> = {
  "rattana-code-888": {
    tagline:
      "ระบบกับเว็บให้ SME — Inventory, POS, CRM, installment, คีย์ตัวเลข, booking และเว็บแบรนด์",
    highlights: [
      "Inventory & POS",
      "CRM (Sheets + Drive)",
      "Installment",
      "คีย์ตัวเลข / ผลรายงวด",
      "Website",
      "Tour / activity",
    ],
    process: [
      "คุยโจทย์กับลูกค้า แล้วตี scope",
      "วางโครง ทำ UI และ pattern ที่ใช้ซ้ำได้",
      "ส่งทั้ง admin และหน้าลูกค้า",
    ],
    relatedDescription: "ดูละเอียดขึ้น: POS franchise, รับ–คืนของ และใบเสร็จ",
    relatedLabel: "Inventory",
    sections: {
      "inventory-pos": {
        summary: "รับของ ดูสต็อก และขายหน้าร้านด้วย POS — ใช้หลายสาขาได้",
      },
      "number-entry": {
        title: "คีย์ตัวเลขและผลรายงวด",
        summary:
          "Admin คีย์ตัวเลข ตั้งลิมิต ดูยอดรายงวด และดึงผลจากเว็บกลาง",
        category: "System",
      },
      "member-credit": {
        title: "Installment / การเงิน",
        summary:
          "Admin ผ่อนชำระ — เก็บรายวัน ดูยอดค้าง ตามสัญญา และสรุปภาพรวม",
        category: "System",
      },
      "crm-sheets": {
        title: "CRM — Sheets + Drive",
        summary:
          "CRM สตูดิโอ — โปรไฟล์ ประวัติ และคิว บันทึกใน Google Sheets เก็บรูปใน Drive",
        category: "System",
      },
      bermahadev: {
        summary: "เว็บให้คำปรึกษา พร้อม admin บทความและหน้าแบรนด์",
      },
      changthai: {
        summary: "เว็บกิจกรรมทัวร์ ราคาชัด ดูรายละเอียดโปรแกรมง่าย",
      },
    },
  },
  "booking-system": {
    tagline: "ระบบจองทัวร์ — เว็บลูกค้า, admin ขาย และ admin ดูแลทริป",
    highlights: [
      "เว็บจอง",
      "Admin ขาย / checkout",
      "Admin operations",
    ],
    process: [
      "แยก 3 ส่วน ให้ใช้ข้อมูลทัวร์ชุดเดียวกัน",
      "ออกแบบ flow ขายกับดูแลทริปคนละแบบ",
      "จัดหน้าให้อ่านงานประจำวันได้เร็ว",
    ],
    sections: {
      website: {
        summary: "ดูทัวร์ เทียบราคา แล้วจองได้เลย ไม่ต้องโทรถาม",
      },
      "b2c-booking-admin": {
        summary: "สร้างสินค้า ลงเว็บ และจัดการจองจนถึงชำระเงิน",
      },
      "tour-operations-admin": {
        summary:
          "รับจองจาก OTA / agent — รวมกลุ่ม นัดออกเดินทาง check-in และจัดไกด์",
      },
    },
  },
  "inventory-management": {
    tagline:
      "รับของ ดูสต็อก และขายหน้าร้านด้วย POS — ใช้กับ franchise หลายสาขาได้",
    highlights: [
      "Dashboard / รายงานสาขา",
      "Inventory & purchase",
      "ใบเสร็จ POS (รวม 80mm)",
    ],
    process: [
      "จัด module และโทนแบรนด์",
      "ทำตารางกับ preview พิมพ์ใบเสร็จ",
      "ลอง flow คืนของและดูสาขากับลูกค้า",
    ],
    relatedDescription: "ดูคู่กับโปรเจกต์ freelance อื่นได้",
    relatedLabel: "RattanaCode_888",
  },
  "accounting-system": {
    tagline: "บัญชีบริษัทใน admin เดียว — รายรับ รายจ่าย และเอกสาร",
    highlights: [
      "Overview & list",
      "Invoice / print preview",
      "Role-based access",
    ],
    process: [
      "Login → overview → invoice",
      "ทำตารางกับการ์ดให้อ่านยอดง่าย",
      "บิลพร้อมพิมพ์ และตั้งสิทธิ์",
    ],
  },
  "landing-page-website": {
    tagline:
      "Landing page กับเว็บธุรกิจ — marketing site และ web app ร้านค้าในพอร์ตเดียว",
    highlights: [
      "Landing page",
      "Retail / POS web app",
      "Healthcare & field service",
    ],
    process: [
      "ทำ landing, หน้า list และตาราง admin",
      "ใช้ component ซ้ำข้ามหลายธุรกิจ",
      "ลอง flow งานจริงก่อนเก็บ detail",
    ],
  },
  dashboard: {
    tagline: "Admin dashboard — KPI, กราฟ และปฏิทินสำหรับงานประจำวัน",
    highlights: [
      "KPI ผลิต / ค้าปลีก",
      "มุมมองงานทัวร์",
      "Finance overview",
    ],
    process: [
      "เลือกตัวเลขสำคัญตามประเภทงาน",
      "ใช้ card, chart, calendar แบบเดียวกัน",
      "เห็นสถานะก่อน แล้วค่อยเจาะ detail",
    ],
  },
  graphic: {
    tagline: "Persona, storyboard, illustration, poster และ thumbnail",
    highlights: [
      "Persona & storyboard",
      "Poster & illustration",
      "YouTube thumbnail",
    ],
    process: [
      "คิด concept ตามช่องทาง",
      "ปรับตัวอักษรและสีให้อ่านง่ายทั้งจอเล็กและพิมพ์",
      "ส่งไฟล์พร้อมใช้หรืออัปโหลดได้เลย",
    ],
  },
};

export function localizeIntro(
  slug: string,
  intro: PortfolioIntro,
  locale: Locale
): PortfolioIntro {
  if (locale !== "th") return intro;
  const th = portfolioThBySlug[slug];
  if (!th) return intro;

  return {
    ...intro,
    role: th.role ?? intro.role,
    tagline: th.tagline ?? intro.tagline,
    highlights: th.highlights ?? intro.highlights,
    narrative: intro.narrative
      ? {
          ...intro.narrative,
          process: th.process ?? intro.narrative.process,
        }
      : intro.narrative,
    relatedCaseStudy: intro.relatedCaseStudy
      ? {
          ...intro.relatedCaseStudy,
          label: th.relatedLabel ?? intro.relatedCaseStudy.label,
          description:
            th.relatedDescription ?? intro.relatedCaseStudy.description,
        }
      : intro.relatedCaseStudy,
  };
}

export function localizeSections(
  slug: string,
  sections: RattanaPortfolioProject[],
  locale: Locale
): RattanaPortfolioProject[] {
  if (locale !== "th") return sections;
  const thSections = portfolioThBySlug[slug]?.sections;
  if (!thSections) return sections;

  return sections.map((item) => {
    const th = thSections[item.id];
    if (!th) return item;
    return {
      ...item,
      title: th.title ?? item.title,
      summary: th.summary ?? item.summary,
      category: th.category ?? item.category,
    };
  });
}
