/**
 * โปรเจกต์ภายใต้ RattanaCode_888 — แสดงในหน้า case study
 * ใส่รูป mockup ที่ public/projects/rattana/ ตามชื่อไฟล์ใน image
 */
export type RattanaGalleryImage = {
  src: string;
  alt: string;
};

export type RattanaPortfolioProject = {
  id: string;
  title: string;
  category: string;
  /** คำอธิบายสั้น 1–2 ประโยค */
  summary: string;
  /** รูปเดียว (fallback) */
  image?: string;
  /** แกลเลอรีหลายรูป — ถ้ามีจะใช้แทน image เดียว */
  images?: RattanaGalleryImage[];
};

export const rattanaPortfolioIntro = {
  role: "Freelance System Designer & UX/UI Designer",
  tagline:
    "Custom systems and websites for SMEs—inventory, POS, booking, and brand sites.",
  logo: "/projects/rattana-code-888-logo.png",
  logoAlt: "RattanaCode_888",
};

export const rattanaPortfolioProjects: RattanaPortfolioProject[] = [
  {
    id: "inventory-pos",
    title: "Inventory Management System + POS",
    category: "System Design",
    summary:
      "Stock receiving, inventory tracking, and in-store POS—with franchise support for cross-branch sales.",
    images: [
      {
        src: "/projects/rattana/inventory/01-login.png",
        alt: "Login screen",
      },
      {
        src: "/projects/rattana/inventory/02-profit-loss.png",
        alt: "Profit and loss reports",
      },
      {
        src: "/projects/rattana/inventory/03-product-return.png",
        alt: "Product return flow",
      },
      {
        src: "/projects/rattana/inventory/04-branch-dashboard.png",
        alt: "Branch performance dashboard",
      },
      {
        src: "/projects/rattana/inventory/05-bill-settings.png",
        alt: "Receipt and bill settings",
      },
      {
        src: "/projects/rattana/inventory/06-receipt-print.png",
        alt: "Receipt print preview",
      },
    ],
  },
  {
    id: "bermahadev",
    title: "Bermahadev Website",
    category: "Website Design",
    summary:
      "Fortune-telling and lucky-number consultation site, with an admin panel to manage articles and content.",
    images: [
      {
        src: "/projects/rattana/bermahadev/01-hero-predict.png",
        alt: "Hero — phone number prediction",
      },
      {
        src: "/projects/rattana/bermahadev/02-home-profile.png",
        alt: "Home — guru profile and Line contact",
      },
      {
        src: "/projects/rattana/bermahadev/03-hero-articles.png",
        alt: "Hero — articles landing",
      },
      {
        src: "/projects/rattana/bermahadev/04-analysis-result.png",
        alt: "Number analysis result",
      },
      {
        src: "/projects/rattana/bermahadev/05-consultation.png",
        alt: "Consultation and contact page",
      },
      {
        src: "/projects/rattana/bermahadev/06-about.png",
        alt: "About page",
      },
      {
        src: "/projects/rattana/bermahadev/07-brand-colors.png",
        alt: "Brand colors and logo",
      },
      {
        src: "/projects/rattana/bermahadev/08-logo-mockup.png",
        alt: "Logo mockup",
      },
    ],
  },
  {
    id: "changthai",
    title: "Changthai Thappraya Website",
    category: "Website Design",
    summary:
      "Tour activity catalog with clear pricing so visitors can browse programs and compare options.",
    images: [
      {
        src: "/projects/rattana/changthai/01-device-mockup.png",
        alt: "Responsive web ticket — desktop and mobile",
      },
      {
        src: "/projects/rattana/changthai/02-mobile-screens.png",
        alt: "Mobile — highlights, home, and program detail",
      },
      {
        src: "/projects/rattana/changthai/03-program-detail.png",
        alt: "Program detail page with gallery",
      },
      {
        src: "/projects/rattana/changthai/04-gallery-modal.png",
        alt: "Image gallery modal",
      },
      {
        src: "/projects/rattana/changthai/05-brand-colors.png",
        alt: "Brand colors and typography",
      },
    ],
  },
];
