import Link from "next/link";
import RelatedProjectCard from "./RelatedProjectCard";
import type { Project } from "@/config/projects";

type Props = {
  projects: Project[];
  max?: number;
};

export default function RelatedProjectsSection({
  projects,
  max = 3,
}: Props) {
  const items = projects.slice(0, max);
  if (items.length === 0) return null;

  return (
    <section className="mt-20 border-t border-kathin-border pt-12 md:pt-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-kathin-muted">
            Explore more
          </p>
          <h2 className="mt-1 font-display text-lg font-semibold text-kathin-text sm:text-xl">
            More case studies
          </h2>
        </div>
        <Link
          href="/projects"
          className="text-xs font-medium text-kathin-muted transition hover:text-[var(--kathin-orange)]"
        >
          View all projects →
        </Link>
      </div>

      <ul className="mt-5 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 [&::-webkit-scrollbar]:hidden">
        {items.map((p) => (
          <li key={p.slug} className="w-[42%] shrink-0 sm:w-auto">
            <RelatedProjectCard
              slug={p.slug}
              title={p.title}
              category={p.category}
              image={p.image}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
