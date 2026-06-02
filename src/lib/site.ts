/** Site URL for metadata, sitemap, and Open Graph */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

export const siteName = "Suphaphorn | UX/UI Designer";

export const siteDescription =
  "UX/UI designer portfolio—case studies for booking systems, inventory & POS, websites, dashboards, and product design.";
