import type { RattanaGalleryImage, RattanaPortfolioProject } from "./rattanaPortfolio";
import type { PortfolioIntro } from "./caseStudyNarrative";

/** เนื้อหาเฉพาะหน้า Project - Booking System */
export const bookingPortfolioIntro: PortfolioIntro = {
  role: "UX/UI Designer",
  tagline:
    "Tour booking — customer website, sales admin, and trip operations admin.",
  highlights: [
    "Public booking website",
    "Sales & checkout admin",
    "Trip operations admin",
  ],
  narrative: {
    problem:
      "Sales and ops work differently — direct web bookings vs. OTA/agent trips — but share the same tour catalog.",
    process: [
      "Split into three parts on one catalog",
      "Designed sales and ops flows separately",
      "Kept each screen easy to scan day to day",
    ],
    outcome:
      "Teams sell on their site and run third-party bookings without mixing screens.",
  },
};

export const bookingPortfolioSections: RattanaPortfolioProject[] = [
  {
    id: "website",
    title: "Website",
    category: "Customer-facing",
    summary: "Browse tours, compare prices, and book without calling the office.",
    images: [
      {
        src: "/projects/booking/website/01-home-explore-thailand.png",
        alt: "Home — explore destinations and search",
      },
      {
        src: "/projects/booking/website/02-tour-listing.png",
        alt: "Tour listing grid",
      },
      {
        src: "/projects/booking/website/05-tour-detail.png",
        alt: "Tour detail and booking card",
      },
      {
        src: "/projects/booking/website/06-login-modal.png",
        alt: "Log in or sign up modal",
      },
      {
        src: "/projects/booking/website/03-why-choose-us.png",
        alt: "Why choose us section",
      },
      {
        src: "/projects/booking/website/04-reviews.png",
        alt: "Customer reviews carousel",
      },
    ],
  },
  {
    id: "b2c-booking-admin",
    title: "B2C Booking Management",
    category: "Back office · B2C",
    summary:
      "Create and publish products; manage bookings from browse through payment.",
    images: [
      {
        src: "/projects/booking/b2c/01-login.png",
        alt: "Admin login",
      },
      {
        src: "/projects/booking/b2c/02-product-list.png",
        alt: "Product catalog — publish, draft, and unpublish",
      },
      {
        src: "/projects/booking/b2c/03-create-product-descriptions.png",
        alt: "Create product — descriptions and highlights",
      },
      {
        src: "/projects/booking/b2c/04-create-option-pricing.png",
        alt: "Create product option — availability and pricing",
      },
      {
        src: "/projects/booking/b2c/05-bookings-list.png",
        alt: "Bookings list — pending, confirmed, and canceled",
      },
      {
        src: "/projects/booking/b2c/06-view-reviews.png",
        alt: "View and filter customer reviews",
      },
      {
        src: "/projects/booking/b2c/07-reset-password-email.png",
        alt: "Reset password transactional email",
      },
    ],
  },
  {
    id: "tour-operations-admin",
    title: "Tour Operations Management",
    category: "Back office · Operations",
    summary:
      "Fulfill OTA/agent bookings—group passengers, departures, check-in, and guides.",
    images: [
      {
        src: "/projects/booking/operations/01-create-program.png",
        alt: "Create program — itinerary, cost, and seller mapping",
      },
      {
        src: "/projects/booking/operations/02-edit-seller.png",
        alt: "Edit seller — OTA and partner configuration (e.g. Klook)",
      },
      {
        src: "/projects/booking/operations/03-own-vehicle-group.png",
        alt: "Own vehicle group — assign bookings to departures",
      },
      {
        src: "/projects/booking/operations/04-check-in.png",
        alt: "Check in — scan or enter booking ID",
      },
      {
        src: "/projects/booking/operations/05-check-in-list.png",
        alt: "Check in list — waiting, checked in, and no-show by trip",
      },
      {
        src: "/projects/booking/operations/06-create-guide.png",
        alt: "Create guide — staff profile and documents",
      },
      {
        src: "/projects/booking/operations/07-user-list.png",
        alt: "User list — roles and team access",
      },
    ],
  },
];

export type { RattanaGalleryImage };
