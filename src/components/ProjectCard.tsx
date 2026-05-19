import Link from "next/link";
import ProjectCardPreview from "./ProjectCardPreview";
import { getProjectEmoji } from "./FeaturedProjectCard";

const categoryColors: Record<string, string> = {
  "Website Design": "bg-kathin-green/15 text-kathin-green",
  "UX/UI Design": "bg-kathin-blue/15 text-kathin-blue",
  "System Design": "bg-kathin-orange/15 text-kathin-orange",
  "Graphic Design": "bg-kathin-orange/15 text-kathin-orange",
  default: "bg-kathin-cyan/15 text-kathin-cyan",
};

type Props = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image?: string;
  lottie?: string;
};

export default function ProjectCard({
  slug,
  title,
  category,
  summary,
  image,
  lottie,
}: Props) {
  const badgeClass = categoryColors[category] ?? categoryColors.default;

  return (
    <Link
      href={`/case-study/${slug}`}
      className="kathin-card group block overflow-hidden hover-lift"
    >
      <div className="flex aspect-[4/3] items-center justify-center border-b border-[var(--glass-border)] bg-[var(--glass-bg-elevated)] p-4 text-5xl">
        <ProjectCardPreview
          lottie={lottie}
          image={image}
          emoji={getProjectEmoji(slug)}
          hoverScale
        />
      </div>
      <div className="p-6">
        <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}>
          {category}
        </span>
        <h3 className="mt-3 font-display text-lg font-semibold text-kathin-text">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-kathin-muted line-clamp-2">
          {summary}
        </p>
        <p className="mt-4 text-xs text-kathin-muted">Case study</p>
      </div>
    </Link>
  );
}
