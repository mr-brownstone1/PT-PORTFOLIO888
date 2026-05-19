import type { RattanaGalleryImage, RattanaPortfolioProject } from "./rattanaPortfolio";

const img = (n: number, alt: string): RattanaGalleryImage => ({
  src: `/projects/website/${String(n).padStart(2, "0")}.png`,
  alt,
});

const ymedi = (file: string, alt: string): RattanaGalleryImage => ({
  src: `/projects/website/ymedi/${file}`,
  alt,
});

const yservice = (file: string, alt: string): RattanaGalleryImage => ({
  src: `/projects/website/yservice/${file}`,
  alt,
});

import { landingScrollDemo } from "./landingPortfolio";

/** Marketing landing — MacBook scroll demo */
export const websiteLandingMacDemo = {
  id: "marketing-landing",
  title: "Marketing Landing Page",
  category: "Landing page",
  summary:
    "After-sales service marketing site—hero, features, pricing, and contact on one responsive scroll. Explore the full page inside the MacBook frame.",
  frame: landingScrollDemo.frame,
  screenshot: landingScrollDemo.screenshot,
  alt: landingScrollDemo.alt,
};

export const websitePortfolioIntro = {
  role: "UX/UI Designer",
  tools: "Figma",
  tagline:
    "Landing pages and business websites—marketing sites and retail web apps in one portfolio.",
  overview:
    "Work spans marketing landings, retail dashboards, hospital equipment management, and field-service platforms—responsive layouts with clear tables, forms, and workflows for desktop and smaller screens.",
};

export const websitePortfolioSections: RattanaPortfolioProject[] = [
  {
    id: "dashboard",
    title: "Dashboard & Overview",
    category: "Analytics",
    summary:
      "Overview reports and executive dashboards—KPI cards, charts, and inventory summaries at a glance.",
    images: [
      img(4, "Overview report — sales and inventory metrics"),
      img(8, "Executive dashboard — sales, orders, and stock"),
      img(10, "Stock take — scan workflow and status cards"),
      img(1, "Overview screen — module navigation"),
    ],
  },
  {
    id: "sales-pos",
    title: "Sales & POS",
    category: "In-store",
    summary:
      "Point-of-sale flows: browse products, build a cart, receive items, and check out with payment summary.",
    images: [
      img(11, "POS — product detail and checkout sidebar"),
      img(15, "POS — ring catalog grid"),
      img(6, "Receive — order detail and payment"),
      img(12, "Custom order — product and stone entry"),
      img(20, "Sell — ring selection with filters"),
    ],
  },
  {
    id: "inventory",
    title: "Inventory & Products",
    category: "Stock",
    summary:
      "Product master data, stock analysis, and gemstone information—with tables tuned for daily operations.",
    images: [
      img(2, "Product info — gemstone / diamond form"),
      img(3, "Jewelry stock analysis table"),
      img(9, "Inventory list — SKU and quantities"),
      img(19, "Stock movement and storage view"),
    ],
  },
  {
    id: "orders-reports",
    title: "Orders & Reports",
    category: "Back office",
    summary:
      "Purchase orders, sales documents, and reporting—with filters, status badges, and export-friendly tables.",
    images: [
      img(5, "Transaction — purchase order list"),
      img(14, "Daily sale report"),
      img(16, "Sales — gemstone order form"),
      img(21, "General sales report by store"),
      img(22, "Report filters and country summary cards"),
    ],
  },
  {
    id: "admin-design",
    title: "Admin & Design System",
    category: "Foundation",
    summary:
      "Employee profiles, access rights, UI components, and full-flow maps for handoff to development.",
    images: [
      img(18, "Employee profile and permissions"),
      img(13, "UI component library"),
      img(7, "Full product flow — screen map overview"),
      img(23, "Additional admin screen"),
    ],
  },
  {
    id: "ymedi",
    title: "Hospital Equipment Platform",
    category: "Healthcare",
    summary:
      "Medical equipment registration and tracking—users, device lists, multi-step forms, and borrow/return workflows.",
    images: [
      ymedi("01-users.png", "User management table"),
      ymedi("02-equipment-list.png", "Registered equipment list"),
      ymedi("03-registration.png", "Equipment registration — step form"),
      ymedi("04-borrow-return.png", "Borrow and return equipment"),
      ymedi("05-equipment-form.png", "Equipment detail form"),
    ],
  },
  {
    id: "yservice",
    title: "Field Service Platform",
    category: "Operations",
    summary:
      "Technician service platform—warehouse inventory, branches, service contracts, PM/CAL jobs, and installation documents.",
    images: [
      yservice("01-warehouse.png", "Equipment warehouse list"),
      yservice("02-branches.png", "Branches and departments"),
      yservice("03-service-contract.png", "Create service contract"),
      yservice("04-pm-cal.png", "PM / CAL service report"),
      yservice("05-document-checklist.png", "Document checklist — equipment selection"),
      yservice("06-installation.png", "Installation workflow"),
    ],
  },
];
