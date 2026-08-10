import CaseStudyMockup from "@/components/CaseStudyMockup";
import ProjectImageGallery from "@/components/ProjectImageGallery";
import type { RattanaPortfolioProject } from "@/config/rattanaPortfolio";

type Props = {
  item: RattanaPortfolioProject;
  index: number;
  /** Extra content after summary (e.g. MacBook demo) — skips default gallery */
  children?: React.ReactNode;
};

export default function CaseStudyWorkSection({
  item,
  index,
  children,
}: Props) {
  return (
    <article className="border-t border-kathin-border pt-10 first:border-t-0 first:pt-0 md:pt-12">
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-display text-sm font-semibold tabular-nums text-[var(--kathin-orange)]">
          {String(index).padStart(2, "0")}
        </span>
        <span className="text-xs font-medium text-kathin-muted">
          {item.category}
        </span>
      </div>

      <h2 className="mt-2 font-display text-xl font-semibold leading-snug text-kathin-text sm:text-2xl">
        {item.title}
      </h2>

      <p className="mt-2 max-w-xl text-sm leading-relaxed text-kathin-muted sm:text-[0.9375rem]">
        {item.summary}
      </p>

      {children ? (
        children
      ) : item.images && item.images.length > 0 ? (
        <ProjectImageGallery
          images={item.images}
          title={item.title}
          className="!mt-5 md:!mt-6"
        />
      ) : item.image ? (
        <CaseStudyMockup
          src={item.image}
          alt={item.title}
          className="mt-5 md:mt-6"
          prominent
        />
      ) : null}
    </article>
  );
}
