"use client";

import RelatedProjectsSection from "./RelatedProjectsSection";
import CaseStudyIntroBlock from "./case-study/CaseStudyIntroBlock";
import CaseStudyWorkSection from "./case-study/CaseStudyWorkSection";
import {
  CaseStudyBack,
  CaseStudyHero,
  CaseStudyMeta,
  CaseStudyTags,
} from "./case-study/CaseStudyLayout";
import {
  bookingPortfolioIntro,
  bookingPortfolioSections,
} from "@/config/bookingPortfolio";
import type { Project } from "@/config/projects";
import { useLocale } from "@/i18n/LocaleProvider";
import {
  localizeIntro,
  localizeSections,
} from "@/i18n/content/portfolios";

type Props = {
  project: Project;
  suggestedProjects: Project[];
};

export default function BookingSystemCaseStudy({
  project,
  suggestedProjects,
}: Props) {
  const { locale, t } = useLocale();
  const slug = "booking-system";
  const intro = localizeIntro(slug, bookingPortfolioIntro, locale);
  const sections = localizeSections(slug, bookingPortfolioSections, locale);

  return (
    <article className="page-container max-w-4xl py-10 pb-24 md:py-14 md:pb-28">
      <CaseStudyBack />
      <CaseStudyTags tags={["System Design", "Travel", "UX/UI"]} />
      <CaseStudyHero title={project.title} subtitle={intro.tagline} />
      <CaseStudyMeta
        items={[{ label: t.caseStudy.role, value: intro.role }]}
      />

      <CaseStudyIntroBlock intro={intro} />

      <div className="mt-10 space-y-12 md:mt-12 md:space-y-14">
        {sections.map((item, index) => (
          <CaseStudyWorkSection key={item.id} item={item} index={index + 1} />
        ))}
      </div>

      <RelatedProjectsSection projects={suggestedProjects} />
    </article>
  );
}
