import Link from "next/link";
import type { PortfolioIntro } from "@/config/caseStudyNarrative";
import { CaseStudyCallout } from "./CaseStudyLayout";
import CaseStudyNarrativeBlock from "./CaseStudyNarrative";

type Props = {
  intro: PortfolioIntro;
};

export default function CaseStudyIntroBlock({ intro }: Props) {
  const related = intro.relatedCaseStudy;

  return (
    <>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-kathin-muted sm:text-base">
        {intro.overview}
      </p>

      {related ? (
        <CaseStudyCallout>
          {related.description}{" "}
          <Link
            href={related.href}
            className="font-medium text-[var(--kathin-orange)] underline decoration-[var(--kathin-orange)]/30 underline-offset-4 transition hover:decoration-[var(--kathin-orange)]"
          >
            {related.label}
          </Link>
          .
        </CaseStudyCallout>
      ) : null}

      {intro.narrative ? (
        <CaseStudyNarrativeBlock narrative={intro.narrative} />
      ) : null}
    </>
  );
}
