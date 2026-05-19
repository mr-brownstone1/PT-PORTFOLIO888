import PageLayout from "@/components/PageLayout";
import ProjectPortfolioList from "@/components/ProjectPortfolioList";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/config/projects";

/** โปรเจกต์ที่มีรูป preview ขึ้นก่อน */
function sortProjectsForPortfolio() {
  return [...projects].sort((a, b) => {
    if (a.image && !b.image) return -1;
    if (!a.image && b.image) return 1;
    return 0;
  });
}

export default function ProjectsPage() {
  const portfolioProjects = sortProjectsForPortfolio();

  return (
    <PageLayout>
      <div className="page-container pb-20 md:pb-28">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Portfolio"
            title="Crafted Experiences"
            description="A collection of design solutions crafted with purpose, creativity, and attention to detail."
          />
        </ScrollReveal>

        <ProjectPortfolioList projects={portfolioProjects} />
      </div>
    </PageLayout>
  );
}
