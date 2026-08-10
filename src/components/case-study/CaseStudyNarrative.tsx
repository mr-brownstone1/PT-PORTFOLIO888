"use client";

import type { CaseStudyNarrative as Narrative } from "@/config/caseStudyNarrative";
import { useLocale } from "@/i18n/LocaleProvider";

type Props = {
  narrative: Narrative;
  className?: string;
};

/** Compact numbered process strip — scannable, no essay sections */
export default function CaseStudyNarrativeBlock({
  narrative,
  className = "mt-8 md:mt-10",
}: Props) {
  const { t } = useLocale();
  const processSteps = Array.isArray(narrative.process)
    ? narrative.process
    : [narrative.process];

  if (processSteps.length === 0) return null;

  return (
    <section className={className} aria-labelledby="case-study-process">
      <h2
        id="case-study-process"
        className="text-xs font-medium uppercase tracking-wide text-kathin-muted"
      >
        {t.caseStudy.process}
      </h2>
      <ol className="mt-4 grid gap-4 sm:grid-cols-3 sm:gap-5">
        {processSteps.map((step, index) => (
          <li key={step} className="min-w-0">
            <span className="font-display text-sm font-semibold tabular-nums text-[var(--kathin-orange)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-sm leading-snug text-kathin-text sm:text-[0.9375rem]">
              {step}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
