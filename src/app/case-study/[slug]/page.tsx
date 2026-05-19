import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import CaseStudyPage from "@/components/CaseStudyPage";
import RattanaCodeCaseStudy from "@/components/RattanaCodeCaseStudy";
import { projects } from "@/config/projects";

const caseStudyDetails: Record<
  string,
  {
    role: string;
    problem: string;
    solution: string;
    process: string[];
    website?: string;
    tools?: string;
  }
> = {
  "changthai-thappraya-website": {
    role: "UX/UI Designer",
    tools: "Figma",
    problem:
      "Travel teams needed one place to manage bookings across the full trip lifecycle—not scattered tools for programs, reservations, and operations.",
    solution:
      "Designed a full-cycle booking platform covering tour program setup, reservation management, and trip organization—with dashboards that keep teams aligned from planning to departure.",
    process: [
      "Discovery & Workflow Mapping",
      "Information Architecture",
      "UX/UI Design",
      "Design Handoff",
    ],
  },
  "bermahadev-website": {
    role: "UX/UI Designer",
    tools: "Figma",
    problem:
      "Retail teams juggled separate tools for stock tracking and checkout—leading to mismatched inventory and slow sales at the counter.",
    solution:
      "Designed a unified inventory and POS platform: manage stock levels, track sales across locations, and process in-store transactions from one dashboard.",
    process: [
      "Discovery & Workflow Mapping",
      "Information Architecture",
      "UX/UI Design",
      "Design Handoff",
    ],
  },
  "payment-system": {
    role: "UX/UI Designer",
    tools: "Figma",
    problem:
      "Small teams tracked income and expenses across spreadsheets and notes—making it hard to see cash flow or spot issues early.",
    solution:
      "Designed an accounting platform to record income and expenses, visualize financial trends, and give teams a clear view of their books in one place.",
    process: [
      "Discovery & Requirements",
      "Information Architecture",
      "UX/UI Design",
      "Design Handoff",
    ],
  },
  dashboard: {
    role: "UX/UI Designer",
    tools: "Figma",
    problem:
      "Operations teams needed dashboards that surface the right metrics without clutter—so they could act quickly without hunting through screens.",
    solution:
      "Designed admin and analytics views with clear hierarchy, scannable data tables, and role-based layouts tuned for daily use.",
    process: [
      "Discovery & Requirements",
      "Information Architecture",
      "UX/UI Design",
      "Design Handoff",
    ],
  },
  "landing-page-website": {
    role: "UX/UI Designer",
    tools: "Figma",
    problem:
      "Client brands needed responsive landing pages that communicate value fast on mobile and desktop—not one-size layouts that break on small screens.",
    solution:
      "Designed conversion-focused landing pages with responsive grids, clear CTAs, and section rhythm that works from phone to desktop.",
    process: [
      "Discovery & Content",
      "Wireframes",
      "Visual Design",
      "Responsive Handoff",
    ],
  },
  graphic: {
    role: "Graphic Designer",
    tools: "Adobe Illustrator, Photoshop",
    problem:
      "Brands needed consistent visual assets across channels—without mismatched logos, colors, or ad-hoc social posts.",
    solution:
      "Delivered logo systems, marketing collateral, and social-ready graphics with a cohesive visual language.",
    process: [
      "Brand Discovery",
      "Concept & Exploration",
      "Refinement",
      "Asset Delivery",
    ],
  },
};

function pickSuggestedProjects(currentSlug: string, count = 3) {
  const candidates = projects
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => a.slug.localeCompare(b.slug));
  return candidates.slice(0, Math.min(count, candidates.length));
}

export default async function CaseStudyRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const suggestedProjects = pickSuggestedProjects(slug, 3);

  if (slug === "rattana-code-888") {
    return (
      <PageLayout>
        <RattanaCodeCaseStudy
          project={project}
          suggestedProjects={suggestedProjects}
        />
      </PageLayout>
    );
  }

  const detail = caseStudyDetails[slug] ?? {
    role: "UX/UI Designer",
    problem: "อยู่ระหว่างสรุปปัญหาและบริบทของโปรเจกต์",
    solution: "อยู่ระหว่างอัปเดตแนวทางและผลลัพธ์ของงาน",
    process: ["Context", "Problem / Opportunity", "Process", "Outcomes"],
  };

  return (
    <PageLayout>
      <CaseStudyPage
        project={project}
        detail={detail}
        suggestedProjects={suggestedProjects}
      />
    </PageLayout>
  );
}
