import type { RattanaGalleryImage, RattanaPortfolioProject } from "./rattanaPortfolio";
import type { PortfolioIntro } from "./caseStudyNarrative";

/** หน้า Project - Inventory Management System (standalone deep-dive) */
export const inventoryPortfolioIntro: PortfolioIntro = {
  role: "Freelance System Designer & UX/UI Designer",
  tagline:
    "Stock receiving, inventory tracking, and in-store POS—with franchise support for cross-branch sales.",
  overview:
    "Inventory and POS for retail—manage stock, purchases, branch performance, and in-store sales with configurable receipts and franchise-ready reporting. This case study expands the inventory + POS work with franchise flows and receipt formats; a shorter version also appears under the RattanaCode_888 freelance overview.",
  relatedCaseStudy: {
    href: "/case-study/rattana-code-888",
    label: "RattanaCode_888 overview",
    description:
      "See this project in context with other freelance client work (website, inventory snapshot, Changthai).",
  },
  narrative: {
    problem:
      "Retail clients needed stock, purchasing, branch reporting, and in-store POS in one system—with receipt formats and franchise rules that varied by branch.",
    process: [
      "Structured modules: dashboards, inventory/purchase, POS receipts, and brand tokens",
      "Designed dense tables and print previews for 80mm receipts and installment sales",
      "Validated flows for branch performance and returns with stakeholders before handoff",
    ],
    outcome:
      "Staff manage inventory and sales from one admin, print configured receipts at the counter, and compare branch performance—without switching tools for PU, returns, or POS.",
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
    summary:
      "Login, branch dashboards, and profit/loss reporting—see performance across locations at a glance.",
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
    summary:
      "Receive stock, process returns, and create purchases (PU) with barcode search and line-item entry.",
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
    summary:
      "Bill settings, print preview, and receipt layouts for cash and installment sales—including compact 80mm formats.",
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
    summary:
      "Color system and typography for a consistent look across admin and POS touchpoints.",
    image: "/projects/rattana/inventory/10-brand-colors.png",
  },
];
