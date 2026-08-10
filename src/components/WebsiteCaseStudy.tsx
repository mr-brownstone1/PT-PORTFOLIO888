"use client";

import MacBookScrollDemo from "./MacBookScrollDemo";
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
  websiteLandingMacDemo,
  websitePortfolioIntro,
  websitePortfolioSections,
} from "@/config/websitePortfolio";
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

export default function WebsiteCaseStudy({
  project,
  suggestedProjects,
}: Props) {
  const { locale, t } = useLocale();
  const slug = "landing-page-website";
  const intro = localizeIntro(slug, websitePortfolioIntro, locale);
  const sections = localizeSections(slug, websitePortfolioSections, locale);
  const mac = websiteLandingMacDemo;

  return (
    <article className="page-container max-w-4xl py-10 pb-24 md:py-14 md:pb-28">
      <CaseStudyBack />
      <CaseStudyTags tags={["Website Design", "Responsive", "UX/UI"]} />
      <CaseStudyHero title={project.title} subtitle={intro.tagline} />
      <CaseStudyMeta
        items={[
          { label: t.caseStudy.role, value: intro.role },
          { label: t.caseStudy.tools, value: intro.tools ?? "Figma" },
        ]}
      />

      <CaseStudyIntroBlock intro={intro} />

      <div className="mt-10 space-y-12 md:mt-12 md:space-y-14">
        <CaseStudyWorkSection
          item={{
            id: mac.id,
            title: mac.title,
            category: mac.category,
            summary:
              locale === "th"
                ? "Landing page หลังขาย — hero, features, ราคา, ติดต่อ เลื่อนดูทั้งหน้าใน MacBook ได้"
                : mac.summary,
          }}
          index={1}
        >
          <div className="relative left-1/2 mt-5 w-[min(100vw-2rem,56rem)] max-w-4xl -translate-x-1/2 md:mt-6">
            <MacBookScrollDemo
              frameSrc={mac.frame}
              contentSrc={mac.screenshot}
              contentAlt={mac.alt}
            />
          </div>
        </CaseStudyWorkSection>

        {sections.map((item, index) => (
          <CaseStudyWorkSection
            key={item.id}
            item={item}
            index={index + 2}
          />
        ))}
      </div>

      <RelatedProjectsSection projects={suggestedProjects} />
    </article>
  );
}
