import Link from "next/link";
import { ChevronLeftIcon } from "@/components/icons/outlined";

export function CaseStudyBack() {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center gap-2 text-sm font-medium text-kathin-muted transition hover:text-kathin-text"
    >
      <ChevronLeftIcon size="sm" />
      Back to projects
    </Link>
  );
}

export function CaseStudyTags({ tags }: { tags: string[] }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-kathin-border bg-kathin-surface-solid/50 px-3 py-1 text-xs font-medium text-kathin-muted"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export function CaseStudyHero({
  title,
  subtitle,
  logoSrc,
  logoAlt,
}: {
  title?: string;
  subtitle: string;
  logoSrc?: string;
  logoAlt?: string;
}) {
  const heading = title ?? logoAlt ?? "Case study";

  return (
    <header className="mt-6 border-b border-kathin-border pb-10 md:pb-12">
      {logoSrc ? (
        <h1 className="m-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoSrc}
            alt={logoAlt ?? heading}
            className="h-14 w-auto max-w-[min(100%,22rem)] object-contain object-left sm:h-16 sm:max-w-[26rem] md:h-[4.5rem] md:max-w-[30rem] lg:h-20 lg:max-w-[34rem]"
            decoding="async"
          />
        </h1>
      ) : (
        <h1 className="font-display text-[clamp(2.25rem,6vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-kathin-text">
          {heading}
        </h1>
      )}
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-kathin-muted md:text-xl md:leading-relaxed">
        {subtitle}
      </p>
    </header>
  );
}

export type CaseStudyMetaItem = {
  label: string;
  value: string;
  href?: string;
};

export function CaseStudyMeta({ items }: { items: CaseStudyMetaItem[] }) {
  return (
    <dl className="mt-8 grid gap-6 border-b border-kathin-border pb-10 sm:grid-cols-2 md:grid-cols-3 md:pb-12">
      {items.map((item) => (
        <div key={item.label}>
          <dt className="text-xs font-medium uppercase tracking-wide text-kathin-muted">
            {item.label}
          </dt>
          <dd className="mt-2 text-sm font-medium text-kathin-text">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-kathin-border underline-offset-4 transition hover:text-[var(--kathin-orange)]"
              >
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function CaseStudySection({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`case-study-section ${className}`}>
      <h2 className="font-display text-xl font-semibold text-kathin-text md:text-2xl">
        {title}
      </h2>
      <div className="case-study-prose mt-4">{children}</div>
    </section>
  );
}

export function CaseStudySubProject({
  index,
  title,
  category,
  children,
}: {
  index: number;
  title: string;
  category: string;
  children: React.ReactNode;
}) {
  return (
    <article className="case-study-subproject border-t border-kathin-border pt-12 first:border-t-0 first:pt-0 md:pt-14">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-display text-sm font-semibold tabular-nums text-[var(--kathin-orange)]">
          {String(index).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium text-kathin-muted">{category}</span>
      </div>
      <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-kathin-text md:text-[1.75rem]">
        {title}
      </h3>
      <div className="case-study-prose mt-5">{children}</div>
    </article>
  );
}
