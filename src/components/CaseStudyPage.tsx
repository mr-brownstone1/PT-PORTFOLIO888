"use client";

import RelatedProjectsSection from "./RelatedProjectsSection";
import CaseStudyNarrativeBlock from "./case-study/CaseStudyNarrative";
import {
  CaseStudyBack,
  CaseStudyHero,
  CaseStudyMeta,
  CaseStudyTags,
} from "./case-study/CaseStudyLayout";
import type { Project } from "@/config/projects";
import { useLocale } from "@/i18n/LocaleProvider";

type Detail = {
  role: string;
  problem: string;
  solution: string;
  process: string[];
  website?: string;
  tools?: string;
  highlights?: string[];
};

type Props = {
  project: Project;
  detail: Detail;
  suggestedProjects: Project[];
};

export default function CaseStudyPage({
  project,
  detail,
  suggestedProjects,
}: Props) {
  const { t } = useLocale();

  const meta = [
    { label: t.caseStudy.role, value: detail.role },
    ...(detail.tools
      ? [{ label: t.caseStudy.tools, value: detail.tools }]
      : []),
    ...(detail.website
      ? [{ label: "Live preview", value: "View site", href: detail.website }]
      : []),
  ];

  const highlights = detail.highlights?.filter(Boolean) ?? [];

  return (
    <article className="page-container max-w-4xl py-10 pb-24 md:py-14 md:pb-28">
      <CaseStudyBack />
      <CaseStudyTags tags={[project.category]} />
      <CaseStudyHero title={project.title} subtitle={project.summary} />
      <CaseStudyMeta items={meta} />

      <div className="mt-6 border-b border-kathin-border pb-10 md:pb-12">
        {highlights.length > 0 ? (
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-kathin-muted">
              {t.caseStudy.delivered}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-kathin-border bg-kathin-surface-solid/40 px-3 py-1.5 text-xs font-medium text-kathin-text sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <CaseStudyNarrativeBlock
          narrative={{
            problem: detail.problem,
            process: detail.process,
            outcome: detail.solution,
          }}
          className={highlights.length > 0 ? "mt-8 md:mt-10" : "mt-0"}
        />
      </div>

      <RelatedProjectsSection projects={suggestedProjects} />
    </article>
  );
}
