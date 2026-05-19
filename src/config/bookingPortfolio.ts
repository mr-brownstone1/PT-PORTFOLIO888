import type { RattanaGalleryImage, RattanaPortfolioProject } from "./rattanaPortfolio";

/** เนื้อหาเฉพาะหน้า Project - Booking System */
export const bookingPortfolioIntro = {
  role: "UX/UI Designer",
  tagline:
    "End-to-end tour booking—public website and back-office admin in one connected system.",
  overview:
    "A full tour-management platform: travelers browse and book on the website, and operations teams run programs and reservations in the web admin.",
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
    id: "web-admin",
    title: "Web Admin",
    category: "Back office",
    summary:
      "Back-office system to create tour programs, manage bookings, assign trips, and coordinate sales with operations from one dashboard.",
    images: [
      {
        src: "/projects/booking/admin/12-overview-mockup.png",
        alt: "Admin dashboard overview",
      },
      {
        src: "/projects/booking/admin/01-login.png",
        alt: "Admin login",
      },
      {
        src: "/projects/booking/admin/02-booking-dashboard.png",
        alt: "Booking dashboard and calendar",
      },
      {
        src: "/projects/booking/admin/03-bookings-list.png",
        alt: "Bookings list and status",
      },
      {
        src: "/projects/booking/admin/04-product-detail.png",
        alt: "Product detail and options",
      },
      {
        src: "/projects/booking/admin/05-create-product.png",
        alt: "Create new product flow",
      },
      {
        src: "/projects/booking/admin/06-reviews.png",
        alt: "View and filter reviews",
      },
      {
        src: "/projects/booking/admin/07-own-vehicle-group.png",
        alt: "Assign bookings to vehicles",
      },
      {
        src: "/projects/booking/admin/08-check-in.png",
        alt: "Guest check-in",
      },
      {
        src: "/projects/booking/admin/09-create-guide.png",
        alt: "Create guide / staff",
      },
      {
        src: "/projects/booking/admin/10-payment-balance.png",
        alt: "Payment balance report",
      },
      {
        src: "/projects/booking/admin/11-invite-email.png",
        alt: "New user invite email",
      },
    ],
  },
];

export type { RattanaGalleryImage };
