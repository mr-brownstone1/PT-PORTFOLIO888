import { notFound } from "next/navigation";
import PageLayout from "@/components/PageLayout";
import CaseStudyPage from "@/components/CaseStudyPage";
import AccountingCaseStudy from "@/components/AccountingCaseStudy";
import BookingSystemCaseStudy from "@/components/BookingSystemCaseStudy";
import LandingPageCaseStudy from "@/components/LandingPageCaseStudy";
import InventoryCaseStudy from "@/components/InventoryCaseStudy";
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

  if (slug === "payment-system") {
    return (
      <PageLayout>
        <AccountingCaseStudy
          project={project}
          suggestedProjects={suggestedProjects}
        />
      </PageLayout>
    );
  }

  if (slug === "booking-system") {
    return (
      <PageLayout>
        <BookingSystemCaseStudy
          project={project}
          suggestedProjects={suggestedProjects}
        />
      </PageLayout>
    );
  }

  if (slug === "landing-page-website") {
    return (
      <PageLayout>
        <LandingPageCaseStudy
          project={project}
          suggestedProjects={suggestedProjects}
        />
      </PageLayout>
    );
  }

  if (slug === "bermahadev-website") {
    return (
      <PageLayout>
        <InventoryCaseStudy
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
