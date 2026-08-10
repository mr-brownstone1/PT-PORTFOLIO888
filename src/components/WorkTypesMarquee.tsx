"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export default function WorkTypesMarquee() {
  const { t } = useLocale();
  const items = t.workTypes.items;
  const loop = [...items, ...items];

  return (
    <section
      className="relative overflow-hidden border-y border-kathin-border/60 py-4 md:py-5"
      aria-label={t.workTypes.aria}
    >
      <div className="marquee-viewport overflow-hidden" data-lenis-prevent>
        <div className="marquee-track marquee-animate-left flex w-max items-center gap-3 md:gap-4">
          {loop.map((label, i) => (
            <span
              key={`${label}-${i}`}
              className="inline-flex shrink-0 items-center gap-3 md:gap-4"
            >
              <span className="rounded-full border border-kathin-border bg-kathin-surface-solid/50 px-4 py-1.5 text-xs font-medium tracking-wide text-kathin-muted sm:text-sm">
                {label}
              </span>
              <span
                className="font-display text-sm text-[var(--kathin-orange)]/70"
                aria-hidden
              >
                ·
              </span>
            </span>
          ))}
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-kathin-bg to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-kathin-bg to-transparent sm:w-16"
        aria-hidden
      />
    </section>
  );
}
