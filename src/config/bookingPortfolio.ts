import type { RattanaGalleryImage, RattanaPortfolioProject } from "./rattanaPortfolio";

/** เนื้อหาเฉพาะหน้า Project - Booking System */
export const bookingPortfolioIntro = {
  role: "UX/UI Designer",
  tagline:
    "Tour booking platform—customer website plus two back-office systems for B2C sales and tour operations.",
  overview:
    "One connected ecosystem: travelers book on the public website, while teams run direct web sales (products, checkout, payments) and fulfill reservations from other platforms (grouping, departures, guides) in separate admin experiences.",
};

export const bookingPortfolioSections: RattanaPortfolioProject[] = [
  {
    id: "website",
    title: "Website",
    category: "Customer-facing",
    summary:
      "Public site for tour programs and packages—browse activities, compare pricing, and submit inquiries or bookings without calling the office.",
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
      "Back office for direct sales on your own website—create tour products, publish them to the public site, and manage the full flow from browsing and selection through checkout and payment recording.",
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
      "Operations hub for bookings imported from other platforms (OTAs, agents, partners)—linked to products already in the system. When reservations arrive, teams manage them here: group passengers, schedule departures, and assign guides.",
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
