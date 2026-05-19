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

export const rattanaPortfolioIntro = {
  role: "Freelance System Designer & UX/UI Designer",
  tagline:
    "Custom systems and websites for SMEs—inventory, POS, booking, and brand sites.",
  logo: "/projects/rattana-code-888-logo.png",
  logoAlt: "RattanaCode_888",
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
    id: "bermahadev",
    title: "Bermahadev Website",
    category: "Website Design",
    summary:
      "Fortune-telling and lucky-number consultation site, with an admin panel to manage articles and content.",
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
    summary:
      "Tour activity catalog with clear pricing so visitors can browse programs and compare options.",
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
