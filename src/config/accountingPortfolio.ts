import type { RattanaGalleryImage, RattanaPortfolioProject } from "./rattanaPortfolio";
import type { PortfolioIntro } from "./caseStudyNarrative";

export const accountingPortfolioIntro: PortfolioIntro = {
  role: "UX/UI Designer",
  tools: "Figma",
  tagline:
    "Company accounting in one admin — income, expenses, and finance docs.",
  highlights: [
    "Finance overview & lists",
    "Invoices & print preview",
    "Role-based access",
  ],
  narrative: {
    problem:
      "Income, expenses, and docs lived in spreadsheets — slow to check and hard to control who sees what.",
    process: [
      "Login → overview → invoices",
      "Tables and cards for owed vs. paid",
      "Print-ready bills and permissions",
    ],
    outcome:
      "One admin for lists, invoices, previews, and who can access what.",
  },
};

const img = (file: string, alt: string): RattanaGalleryImage => ({
  src: `/projects/accounting/${file}`,
  alt,
});

export const accountingPortfolioSections: RattanaPortfolioProject[] = [
  {
    id: "overview",
    title: "Finance overview",
    category: "Dashboard & lists",
    summary: "Login, summary dashboard, and cost/revenue/profit lists.",
    images: [
      img("01-cover.png", "Accounting V.1 — overview dashboard mockup"),
      img("02-login.png", "Login screen"),
      img("03-booking-list.png", "Main list — cost, revenue, and profit summary"),
    ],
  },
  {
    id: "documents",
    title: "Invoices & collection documents",
    category: "Documents",
    summary: "Create invoices and preview collection docs before print.",
    images: [
      img("04-create-invoice.png", "Create invoice — debtor info and line items"),
      img(
        "06-other-bill-preview.png",
        "Other collection document — print preview"
      ),
    ],
  },
  {
    id: "access",
    title: "Role-based access",
    category: "Settings",
    summary: "Who can view or edit—sensitive finance data by role.",
    images: [img("05-access-rights.png", "System access permissions form")],
  },
];
