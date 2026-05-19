import RelatedProjectsSection from "./RelatedProjectsSection";
import ProjectImageGallery from "./ProjectImageGallery";
import {
  CaseStudyBack,
  CaseStudyHero,
  CaseStudyMeta,
  CaseStudyTags,
} from "./case-study/CaseStudyLayout";
import {
  accountingGalleryImages,
  accountingPortfolioIntro,
} from "@/config/accountingPortfolio";
import type { Project } from "@/config/projects";

type Props = {
  project: Project;
  suggestedProjects: Project[];
};

export default function AccountingCaseStudy({
  project,
  suggestedProjects,
}: Props) {
  const intro = accountingPortfolioIntro;

  return (
    <article className="page-container max-w-3xl py-10 pb-24 md:py-14 md:pb-28">
      <CaseStudyBack />
      <CaseStudyTags tags={["System Design", "Accounting", "UX/UI"]} />
      <CaseStudyHero title={project.title} subtitle={intro.tagline} />
      <CaseStudyMeta
        items={[
          { label: "Role", value: intro.role },
          { label: "Tools", value: intro.tools },
        ]}
      />

      <p className="mt-6 max-w-xl text-sm leading-relaxed text-kathin-muted sm:text-base">
        {intro.overview}
      </p>

      <ProjectImageGallery
        images={accountingGalleryImages}
        title={project.title}
        className="mt-10 md:mt-12"
      />

      <RelatedProjectsSection projects={suggestedProjects} />
    </article>
  );
}
