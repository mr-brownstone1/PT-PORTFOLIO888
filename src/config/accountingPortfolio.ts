import type { RattanaGalleryImage, RattanaPortfolioProject } from "./rattanaPortfolio";
import type { PortfolioIntro } from "./caseStudyNarrative";

export const accountingPortfolioIntro: PortfolioIntro = {
  role: "UX/UI Designer",
  tools: "Figma",
  tagline:
    "Company accounting—income, expenses, and finance documents in one admin.",
  overview:
    "Accounting V.1 supports day-to-day company finances: overview dashboards for amounts owed and paid, lists that tie cost to revenue, invoices and other collection documents, bill preview before printing, and role-based access so each team sees only what they need.",
  narrative: {
    problem:
      "Finance and operations teams were tracking income, expenses, and documents across spreadsheets and disconnected tools—slow to reconcile and hard to control who could see sensitive figures.",
    process: [
      "Mapped core flows: login, financial overview, invoice creation, document preview, and permission setup",
      "Structured dense tables and summary cards so owed vs. paid amounts scan quickly",
      "Designed print-ready bill layouts and role-based access before development handoff",
    ],
    outcome:
      "A single admin where staff manage lists, create invoices, preview documents before print, and assign access by role—reducing context switching and keeping finance data in one place.",
    learnings: [
      "Permission screens need the same clarity as customer-facing flows—ambiguous access rules create support load later.",
    ],
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
    summary:
      "Login, summary dashboard, and main list tying cost, revenue, and profit so teams see financial health at a glance.",
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
    summary:
      "Create invoices with line items and preview other collection documents before printing.",
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
    summary:
      "Configure who can view or edit modules—keeping sensitive finance data limited to the right roles.",
    images: [img("05-access-rights.png", "System access permissions form")],
  },
];
