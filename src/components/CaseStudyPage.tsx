import RelatedProjectsSection from "./RelatedProjectsSection";
import {
  CaseStudyBack,
  CaseStudyHero,
  CaseStudyMeta,
  CaseStudySection,
  CaseStudyTags,
} from "./case-study/CaseStudyLayout";
import type { Project } from "@/config/projects";

type Detail = {
  role: string;
  problem: string;
  solution: string;
  process: string[];
  website?: string;
  tools?: string;
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
  const meta = [
    { label: "Role", value: detail.role },
    ...(detail.tools ? [{ label: "Tools", value: detail.tools }] : []),
    ...(detail.website
      ? [{ label: "Live preview", value: "View site", href: detail.website }]
      : []),
  ];

  return (
    <article className="page-container max-w-[42rem] py-10 pb-24 md:py-14 md:pb-28">
      <CaseStudyBack />
      <CaseStudyTags tags={[project.category]} />
      <CaseStudyHero title={project.title} subtitle={project.summary} />
      <CaseStudyMeta items={meta} />

      <div className="space-y-14 md:space-y-16">
        <CaseStudySection title="Project Overview">
          <p>{project.summary}</p>
        </CaseStudySection>

        <CaseStudySection title="The Problem">
          <p>{detail.problem}</p>
        </CaseStudySection>

        <CaseStudySection title="The Solution">
          <p>{detail.solution}</p>
        </CaseStudySection>

        <CaseStudySection title="Process">
          <ol className="space-y-3">
            {detail.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </CaseStudySection>
      </div>

      <RelatedProjectsSection projects={suggestedProjects} />
    </article>
  );
}
