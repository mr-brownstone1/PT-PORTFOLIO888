import type { CaseStudyNarrative as Narrative } from "@/config/caseStudyNarrative";
import { CaseStudySection } from "./CaseStudyLayout";

type Props = {
  narrative: Narrative;
  className?: string;
};

export default function CaseStudyNarrativeBlock({
  narrative,
  className = "mt-10 md:mt-12",
}: Props) {
  const processSteps = Array.isArray(narrative.process)
    ? narrative.process
    : [narrative.process];

  return (
    <div className={`space-y-14 md:space-y-16 ${className}`}>
      <CaseStudySection title="The Problem">
        <p>{narrative.problem}</p>
      </CaseStudySection>

      <CaseStudySection title="Process">
        <ol className="space-y-3">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </CaseStudySection>

      <CaseStudySection title="Outcome">
        <p>{narrative.outcome}</p>
        {narrative.learnings && narrative.learnings.length > 0 ? (
          <>
            <p className="mt-6 font-medium text-kathin-text">Key learnings</p>
            <ul className="mt-3 space-y-2">
              {narrative.learnings.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        ) : null}
      </CaseStudySection>
    </div>
  );
}
