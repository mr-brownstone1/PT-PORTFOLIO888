import type { RattanaGalleryImage, RattanaPortfolioProject } from "./rattanaPortfolio";
import type { PortfolioIntro } from "./caseStudyNarrative";

/** หน้า Project - Inventory Management System (standalone deep-dive) */
export const inventoryPortfolioIntro: PortfolioIntro = {
  role: "Freelance System Designer & UX/UI Designer",
  tagline:
    "Receive stock, track inventory, and sell in-store with POS — including multi-branch franchise use.",
  highlights: [
    "Branch dashboards & reports",
    "Inventory & purchase flows",
    "POS receipts (incl. 80mm)",
  ],
  relatedCaseStudy: {
    href: "/case-study/rattana-code-888",
    label: "RattanaCode_888 overview",
    description: "See this next to other freelance client work.",
  },
  narrative: {
    problem:
      "Retail needed stock, purchasing, branch reports, and POS in one place — with receipts and rules that differ by branch.",
    process: [
      "Set up modules and brand look",
      "Dense tables + receipt print previews",
      "Walked returns and branch flows with the client",
    ],
    outcome:
      "One admin for inventory and sales — receipts at the counter, branch results easy to see.",
  },
};

export const inventoryGalleryImages: RattanaGalleryImage[] = [
  { src: "/projects/rattana/inventory/01-login.png", alt: "Login screen" },
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
    src: "/projects/rattana/inventory/07-create-purchase.png",
    alt: "Create purchase (PU)",
  },
  {
    src: "/projects/rattana/inventory/05-bill-settings.png",
    alt: "Receipt and bill settings",
  },
  {
    src: "/projects/rattana/inventory/06-receipt-print.png",
    alt: "Receipt print preview",
  },
  {
    src: "/projects/rattana/inventory/08-receipt-80mm.png",
    alt: "POS receipt — 80mm",
  },
  {
    src: "/projects/rattana/inventory/09-receipt-installment.png",
    alt: "Sale receipt with installment",
  },
  {
    src: "/projects/rattana/inventory/10-brand-colors.png",
    alt: "Brand colors and typography",
  },
];

export const inventoryPortfolioSections: RattanaPortfolioProject[] = [
  {
    id: "dashboard",
    title: "Dashboard & Reports",
    category: "Back office",
    summary: "Login, branch dashboards, and profit/loss at a glance.",
    images: [
      { src: "/projects/rattana/inventory/01-login.png", alt: "Login screen" },
      {
        src: "/projects/rattana/inventory/04-branch-dashboard.png",
        alt: "Branch performance dashboard",
      },
      {
        src: "/projects/rattana/inventory/02-profit-loss.png",
        alt: "Profit and loss reports",
      },
    ],
  },
  {
    id: "inventory",
    title: "Inventory & Purchase",
    category: "Stock management",
    summary: "Returns, purchases (PU), and barcode line-item entry.",
    images: [
      {
        src: "/projects/rattana/inventory/03-product-return.png",
        alt: "Product return flow",
      },
      {
        src: "/projects/rattana/inventory/07-create-purchase.png",
        alt: "Create purchase (PU)",
      },
    ],
  },
  {
    id: "pos",
    title: "POS & Receipts",
    category: "In-store sales",
    summary: "Bill settings and receipt layouts—cash, installment, 80mm.",
    images: [
      {
        src: "/projects/rattana/inventory/05-bill-settings.png",
        alt: "Receipt and bill settings",
      },
      {
        src: "/projects/rattana/inventory/06-receipt-print.png",
        alt: "Receipt print preview",
      },
      {
        src: "/projects/rattana/inventory/08-receipt-80mm.png",
        alt: "POS receipt — 80mm",
      },
      {
        src: "/projects/rattana/inventory/09-receipt-installment.png",
        alt: "Sale receipt with installment",
      },
    ],
  },
  {
    id: "brand",
    title: "Brand",
    category: "Design system",
    summary: "Colors and type for admin and POS.",
    image: "/projects/rattana/inventory/10-brand-colors.png",
  },
];
