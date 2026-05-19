import type { RattanaGalleryImage } from "./rattanaPortfolio";

export const accountingPortfolioIntro = {
  role: "UX/UI Designer",
  tools: "Figma",
  tagline:
    "Company accounting—income, expenses, and finance documents in one admin.",
  overview:
    "Accounting V.1 supports day-to-day company finances: overview dashboards for amounts owed and paid, lists that tie cost to revenue, invoices and other collection documents, bill preview before printing, and role-based access so each team sees only what they need.",
};

export const accountingGalleryImages: RattanaGalleryImage[] = [
  {
    src: "/projects/accounting/01-cover.png",
    alt: "Accounting V.1 — overview dashboard mockup",
  },
  {
    src: "/projects/accounting/02-login.png",
    alt: "Login screen",
  },
  {
    src: "/projects/accounting/03-booking-list.png",
    alt: "Main list — cost, revenue, and profit summary",
  },
  {
    src: "/projects/accounting/04-create-invoice.png",
    alt: "Create invoice — debtor info and line items",
  },
  {
    src: "/projects/accounting/05-access-rights.png",
    alt: "System access permissions form",
  },
  {
    src: "/projects/accounting/06-other-bill-preview.png",
    alt: "Other collection document — print preview",
  },
];
