"use client";

import Link from "next/link";
import type { PortfolioIntro } from "@/config/caseStudyNarrative";
import CaseStudyNarrativeBlock from "./CaseStudyNarrative";
import { useLocale } from "@/i18n/LocaleProvider";

type Props = {
  intro: PortfolioIntro;
};

export default function CaseStudyIntroBlock({ intro }: Props) {
  const { t } = useLocale();
  const related = intro.relatedCaseStudy;
  const highlights = intro.highlights?.filter(Boolean) ?? [];
  const hasOverview = Boolean(intro.overview?.trim());

  return (
    <div className="mt-6 border-b border-kathin-border pb-10 md:pb-12">
      {hasOverview ? (
        <p className="max-w-xl text-sm leading-relaxed text-kathin-muted sm:text-base">
          {intro.overview}
        </p>
      ) : null}

      {highlights.length > 0 ? (
        <div className={hasOverview ? "mt-6" : undefined}>
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

      {intro.narrative ? (
        <CaseStudyNarrativeBlock
          narrative={intro.narrative}
          className={
            highlights.length > 0 || hasOverview ? "mt-8 md:mt-10" : "mt-0"
          }
        />
      ) : null}

      {related ? (
        <p className="mt-8 text-sm leading-relaxed text-kathin-muted">
          {related.description}{" "}
          <Link
            href={related.href}
            className="font-medium text-[var(--kathin-orange)] underline decoration-[var(--kathin-orange)]/30 underline-offset-4 transition hover:decoration-[var(--kathin-orange)]"
          >
            {related.label}
          </Link>
        </p>
      ) : null}
    </div>
  );
}
