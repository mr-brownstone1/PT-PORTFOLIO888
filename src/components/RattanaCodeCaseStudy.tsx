import CaseStudyMockup from "./CaseStudyMockup";
import RelatedProjectsSection from "./RelatedProjectsSection";
import ProjectImageGallery from "./ProjectImageGallery";
import {
  CaseStudyBack,
  CaseStudyHero,
  CaseStudyMeta,
  CaseStudyTags,
} from "./case-study/CaseStudyLayout";
import {
  rattanaPortfolioIntro,
  rattanaPortfolioProjects,
} from "@/config/rattanaPortfolio";
import type { Project } from "@/config/projects";

type Props = {
  project: Project;
  suggestedProjects: Project[];
};

export default function RattanaCodeCaseStudy({
  project,
  suggestedProjects,
}: Props) {
  const intro = rattanaPortfolioIntro;

  return (
    <article className="page-container max-w-3xl py-10 pb-24 md:py-14 md:pb-28">
      <CaseStudyBack />
      <CaseStudyTags tags={["System Design", "Freelance", "UX/UI"]} />
      <CaseStudyHero
        subtitle={intro.tagline}
        logoSrc={intro.logo}
        logoAlt={intro.logoAlt}
      />
      <CaseStudyMeta items={[{ label: "Role", value: intro.role }]} />

      <div className="mt-12 space-y-16 md:mt-14 md:space-y-20">
        {rattanaPortfolioProjects.map((item, index) => (
          <article
            key={item.id}
            className="border-t border-kathin-border pt-12 first:border-t-0 first:pt-0 md:pt-14"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-display text-sm font-semibold tabular-nums text-[var(--kathin-orange)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-xs font-medium text-kathin-muted">
                {item.category}
              </span>
            </div>

            <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-kathin-text sm:text-2xl">
              {item.title}
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-kathin-muted sm:text-base">
              {item.summary}
            </p>

            {item.images && item.images.length > 0 ? (
              <ProjectImageGallery images={item.images} title={item.title} />
            ) : item.image ? (
              <CaseStudyMockup
                src={item.image}
                alt={item.title}
                className="mt-6"
                prominent
              />
            ) : null}
          </article>
        ))}
      </div>

      <RelatedProjectsSection projects={suggestedProjects} />
    </article>
  );
}
