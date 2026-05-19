import type { RattanaGalleryImage, RattanaPortfolioProject } from "./rattanaPortfolio";

export const graphicPortfolioIntro = {
  role: "Graphic Designer",
  tools: "Adobe Illustrator, Photoshop, Figma",
  tagline: "Personas, storyboards, illustrations, posters, and thumbnails.",
  overview:
    "Graphic work by category—from personal and UX research pieces to posters and YouTube thumbnails.",
};

const img = (file: string, alt: string): RattanaGalleryImage => ({
  src: `/projects/graphic/${file}`,
  alt,
});

export const graphicPortfolioSections: RattanaPortfolioProject[] = [
  {
    id: "personal",
    title: "Personal",
    category: "UX / Profile",
    summary: "Personas and testimonials—short summaries of users and project context.",
    images: [
      img("ux-01-internship.png", "Internship testimonial"),
      img("ux-02-persona-admin.png", "User persona — admin"),
      img("ux-03-persona-traveler.png", "User persona — traveler"),
    ],
  },
  {
    id: "storyboard",
    title: "Storyboard",
    category: "UX",
    summary: "User journeys as visual sequences—from research through to review.",
    images: [
      img("ux-04-storyboard-journey.png", "Memo Road user journey"),
      img("ux-05-storyboard-krabi.png", "Krabi trip storyboard"),
    ],
  },
  {
    id: "drawing",
    title: "Drawing",
    category: "Illustration",
    summary: "Digital illustrations for gifts and special occasions—graduations, anniversaries, and couples.",
    images: [img("social-02-portrait-grid.png", "Custom portrait illustration grid")],
  },
  {
    id: "poster",
    title: "Poster",
    category: "Marketing",
    summary: "GIS posters and banners—software for jewelry retail management.",
    images: [
      img("gis-01-banner.png", "All-in-one jewelry platform banner"),
      img("gis-02-vertical.png", "Vertical software promo"),
      img("gis-03-features.png", "Feature overview poster"),
      img("gis-04-omnichannel.png", "Omnichannel infographic"),
      img("gis-05-platform.png", "Platform dashboard features"),
      img("gis-06-banner-2.png", "Marketing banner with isometric art"),
      img("gis-07-inventory.png", "Inventory and POS flyer"),
    ],
  },
  {
    id: "thumbnail",
    title: "Thumbnail",
    category: "YouTube",
    summary: "YouTube thumbnails—bold type and vivid colors built to earn clicks.",
    images: [
      img("social-01-youtube-grid.png", "YouTube thumbnail set"),
      img("social-03-weight-loss.png", "Weight loss transformation thumbnail"),
      img("social-04-family.png", "Family lifestyle thumbnail"),
    ],
  },
];
