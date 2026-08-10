import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import ProjectPortfolioList from "@/components/ProjectPortfolioList";
import ProjectsPageHeader from "@/components/ProjectsPageHeader";
import { projects } from "@/config/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "UX/UI case studies—booking systems, inventory & POS, websites, dashboards, accounting, and graphic design.",
};

function sortProjectsForPortfolio() {
  return [...projects].sort((a, b) => {
    const aHasPreview = Boolean(a.image || a.lottie);
    const bHasPreview = Boolean(b.image || b.lottie);
    if (aHasPreview && !bHasPreview) return -1;
    if (!aHasPreview && bHasPreview) return 1;
    return 0;
  });
}

export default function ProjectsPage() {
  const portfolioProjects = sortProjectsForPortfolio();

  return (
    <PageLayout>
      <div className="page-container pb-20 md:pb-28">
        <ProjectsPageHeader />
        <ProjectPortfolioList projects={portfolioProjects} />
      </div>
    </PageLayout>
  );
}
