/** ข้อมูล mockup สำหรับ marquee แบบ Austin — แก้/เพิ่มที่นี่ */
export type MockupVariant =
  | "phones-trio"
  | "laptop"
  | "desktop-wide"
  | "phone-single"
  | "dashboard";

export type ShowcaseMockup = {
  id: string;
  title: string;
  category: string;
  slug?: string;
  variant: MockupVariant;
  /** สี accent ของ mock UI */
  accent: "green" | "blue" | "orange" | "cyan" | "violet";
};

const accentMap = {
  green: { from: "#17bf6f", to: "#0d8f52", ui: "#e8fff3" },
  blue: { from: "#0f94fa", to: "#0066cc", ui: "#e8f4ff" },
  orange: { from: "#faa40f", to: "#e07b00", ui: "#fff8e8" },
  cyan: { from: "#00ddd8", to: "#00a8a4", ui: "#e8fffe" },
  violet: { from: "#8b5cf6", to: "#6d28d9", ui: "#f3eeff" },
} as const;

export function getMockupAccent(accent: ShowcaseMockup["accent"]) {
  return accentMap[accent];
}

/** แถวบน — เลื่อนซ้าย */
export const showcaseRowTop: ShowcaseMockup[] = [
  {
    id: "changthai",
    title: "Changthai Thappraya",
    category: "Website",
    slug: "changthai-thappraya-website",
    variant: "desktop-wide",
    accent: "green",
  },
  {
    id: "payment",
    title: "Payment System",
    category: "UX/UI",
    slug: "payment-system",
    variant: "phones-trio",
    accent: "blue",
  },
  {
    id: "bermahadev",
    title: "Bermahadev",
    category: "Website",
    slug: "bermahadev-website",
    variant: "phones-trio",
    accent: "violet",
  },
  {
    id: "dashboard",
    title: "Analytics Dashboard",
    category: "UX/UI",
    slug: "dashboard",
    variant: "dashboard",
    accent: "cyan",
  },
  {
    id: "brand",
    title: "Brand Identity",
    category: "Graphic",
    slug: "brand-identity",
    variant: "laptop",
    accent: "orange",
  },
];

/** แถวล่าง — เลื่อนขวา (ลำดับต่างจากบน) */
export const showcaseRowBottom: ShowcaseMockup[] = [
  {
    id: "nestify-style",
    title: "E-commerce App",
    category: "Mobile App",
    variant: "phones-trio",
    accent: "green",
  },
  {
    id: "marketing-style",
    title: "Marketing Website",
    category: "Website",
    variant: "laptop",
    accent: "blue",
  },
  {
    id: "erp-style",
    title: "Admin System",
    category: "ERP / Back office",
    variant: "desktop-wide",
    accent: "orange",
  },
  {
    id: "pos-style",
    title: "POS Interface",
    category: "Product Design",
    variant: "phone-single",
    accent: "cyan",
  },
  {
    id: "portfolio-style",
    title: "Portfolio Site",
    category: "Website",
    variant: "laptop",
    accent: "violet",
  },
];
