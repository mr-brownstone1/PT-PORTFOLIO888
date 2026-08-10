import type { PortfolioIntro } from "./caseStudyNarrative";
import {
  inventoryGalleryImages,
  inventoryPortfolioIntro,
} from "./inventoryPortfolio";

export type RattanaGalleryImage = {
  src: string;
  alt: string;
};

export type RattanaPortfolioProject = {
  id: string;
  title: string;
  category: string;
  summary: string;
  image?: string;
  images?: RattanaGalleryImage[];
};

export const rattanaPortfolioIntro: PortfolioIntro & {
  logo: string;
  logoAlt: string;
} = {
  role: "Freelance System Designer & UX/UI Designer",
  tagline:
    "Systems and websites for SMEs — inventory, POS, CRM, installments, number entry, booking, and brand sites.",
  logo: "/projects/rattana-code-888-logo.png",
  logoAlt: "RattanaCode_888",
  highlights: [
    "Inventory & POS",
    "CRM (Sheets & Drive)",
    "Finance & installments",
    "Number entry & results",
    "Brand websites",
    "Tour / activity sites",
  ],
  relatedCaseStudy: {
    href: "/case-study/inventory-management",
    label: "Inventory Management System",
    description: "Closer look: franchise POS, purchase/returns, and receipts.",
  },
  narrative: {
    problem:
      "SME clients needed custom tools and sites that fit how they already work — not generic templates.",
    process: [
      "Talk through the brief and set the scope",
      "Structure, UI, and reusable patterns",
      "Handoff for admin and customer screens",
    ],
    outcome:
      "Systems and sites clients use every day — under one freelance practice.",
  },
};

export const rattanaPortfolioProjects: RattanaPortfolioProject[] = [
  {
    id: "inventory-pos",
    title: "Inventory Management System + POS",
    category: "System Design",
    summary: inventoryPortfolioIntro.tagline,
    images: inventoryGalleryImages,
  },
  {
    id: "number-entry",
    title: "Number Entry & Period Results",
    category: "System Design",
    summary:
      "Back office to key numbers, set limits, check period totals, and pull results from a central site.",
    images: [
      {
        src: "/projects/rattana/number-entry/01-dashboard-overview.png",
        alt: "Back office dashboard — today’s totals and shortcuts",
      },
      {
        src: "/projects/rattana/number-entry/02-period-report.png",
        alt: "Period report — entries, matched/unmatched, and net settlement",
      },
      {
        src: "/projects/rattana/number-entry/03-results-sync.png",
        alt: "Period results — select draw and sync from central source",
      },
    ],
  },
  {
    id: "member-credit",
    title: "Finance & Installment Management",
    category: "System Design",
    summary:
      "Installment finance admin — daily collections, outstanding balances, contracts, and overview.",
    images: [
      {
        src: "/projects/rattana/member-credit/01-daily-collections.png",
        alt: "Daily payments — due today, collected, and pending installments",
      },
      {
        src: "/projects/rattana/member-credit/02-outstanding-balances.png",
        alt: "Outstanding balances — overdue and inactive installment totals",
      },
      {
        src: "/projects/rattana/member-credit/03-service-agreements.png",
        alt: "Installment contracts — principal, fees, paid, and remaining",
      },
      {
        src: "/projects/rattana/member-credit/04-business-overview.png",
        alt: "Finance overview — working capital, fees collected, and portfolio status",
      },
    ],
  },
  {
    id: "crm-sheets",
    title: "Studio CRM — Sheets & Drive",
    category: "System Design",
    summary:
      "Studio CRM — customer profiles, visit history, and bookings. Saves to Google Sheets; photos go to Google Drive.",
    images: [
      {
        src: "/projects/rattana/crm-sheets/01-login.png",
        alt: "Login — studio CRM sign-in",
      },
      {
        src: "/projects/rattana/crm-sheets/02-customer-home.png",
        alt: "Customers home — new vs returning customer",
      },
      {
        src: "/projects/rattana/crm-sheets/03-customer-list.png",
        alt: "Customer list — search by phone and visit history",
      },
      {
        src: "/projects/rattana/crm-sheets/04-customer-profile.png",
        alt: "Customer profile — service notes and visit log",
      },
      {
        src: "/projects/rattana/crm-sheets/05-new-booking.png",
        alt: "New booking — date, time, and service type",
      },
    ],
  },
  {
    id: "bermahadev",
    title: "Bermahadev Website",
    category: "Website Design",
    summary:
      "Consultation site with article admin — prediction flows and brand pages.",
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
    summary: "Tour activity site with clear pricing and easy program details.",
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
