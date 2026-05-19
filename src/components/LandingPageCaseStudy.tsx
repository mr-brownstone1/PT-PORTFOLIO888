import MacBookScrollDemo from "./MacBookScrollDemo";
import RelatedProjectsSection from "./RelatedProjectsSection";
import {
  CaseStudyBack,
  CaseStudyHero,
  CaseStudyMeta,
  CaseStudyTags,
} from "./case-study/CaseStudyLayout";
import {
  landingPortfolioIntro,
  landingScrollDemo,
} from "@/config/landingPortfolio";
import type { Project } from "@/config/projects";

type Props = {
  project: Project;
  suggestedProjects: Project[];
};

export default function LandingPageCaseStudy({
  project,
  suggestedProjects,
}: Props) {
  const intro = landingPortfolioIntro;

  return (
    <article className="page-container max-w-4xl py-10 pb-24 md:py-14 md:pb-28">
      <CaseStudyBack />
      <CaseStudyTags tags={["Website Design", "Responsive", "UX/UI"]} />
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

      <MacBookScrollDemo
        frameSrc={landingScrollDemo.frame}
        contentSrc={landingScrollDemo.screenshot}
        contentAlt={landingScrollDemo.alt}
        className="mt-10 md:mt-12"
      />

      <RelatedProjectsSection projects={suggestedProjects} />
    </article>
  );
}
