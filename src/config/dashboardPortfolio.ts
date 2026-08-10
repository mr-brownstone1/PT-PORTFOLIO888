import type { RattanaGalleryImage, RattanaPortfolioProject } from "./rattanaPortfolio";
import type { PortfolioIntro } from "./caseStudyNarrative";

export const dashboardPortfolioIntro: PortfolioIntro = {
  role: "UX/UI Designer",
  tools: "Figma",
  tagline: "Admin dashboards — KPI cards, charts, and calendars for daily work.",
  highlights: [
    "Manufacturing & retail KPIs",
    "Tour ops & booking views",
    "Finance overview",
  ],
  narrative: {
    problem:
      "Ops teams needed dashboards that fit their work — generic templates hid the morning numbers.",
    process: [
      "Pick the right KPIs per domain",
      "Reuse card, chart, and calendar patterns",
      "Show status first, details second",
    ],
    outcome:
      "Dashboards that put the useful numbers up front for daily decisions.",
  },
};

const img = (file: string, alt: string): RattanaGalleryImage => ({
  src: `/projects/dashboard/${file}`,
  alt,
});

export const dashboardPortfolioSections: RattanaPortfolioProject[] = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    category: "Jewelry / Gold",
    summary: "Stock, orders, casting, and loss—charts and tables on one screen.",
    images: [img("01-jewelry-dashboard.png", "Manufacturing executive dashboard")],
  },
  {
    id: "retail",
    title: "Sales & Inventory",
    category: "Jewelry / Retail",
    summary: "Sales, orders, and stock—monthly charts and product mix on one screen.",
    images: [img("06-retail-overview.png", "Retail overview — sales, orders, and stock")],
  },
  {
    id: "tour",
    title: "Tour Operations",
    category: "Travel",
    summary: "Guides, bookings, and team KPIs—filters, calendars, and usage at a glance.",
    images: [
      img("02-tour-guide.png", "Guide dashboard — staff and language usage"),
      img("03-tour-booking.png", "Booking overview — status chart and calendar"),
      img("05-tour-kpi.png", "KPI dashboard — actions by team member"),
    ],
  },
  {
    id: "finance",
    title: "Finance Overview",
    category: "Accounting",
    summary: "Income, expenses, profit, and payables/receivables in one view.",
    images: [img("04-finance-overview.png", "Financial overview dashboard")],
  },
];
