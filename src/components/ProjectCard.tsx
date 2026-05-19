import Link from "next/link";

const categoryColors: Record<string, string> = {
  "Website Design": "bg-austin-green/15 text-austin-green",
  "UX/UI Design": "bg-austin-blue/15 text-austin-blue",
  "Graphic Design": "bg-austin-orange/15 text-austin-orange",
  default: "bg-austin-cyan/15 text-austin-cyan",
};

function getEmoji(slug: string) {
  if (slug === "payment-system") return "💳";
  if (slug === "dashboard") return "📊";
  if (slug === "brand-identity") return "✨";
  if (slug.includes("changthai")) return "🏝️";
  if (slug.includes("bermahadev")) return "🔮";
  return "🎨";
}

type Props = {
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
};

export default function ProjectCard({
  slug,
  title,
  category,
  date,
  summary,
}: Props) {
  const badgeClass = categoryColors[category] ?? categoryColors.default;

  return (
    <Link
      href={`/case-study/${slug}`}
      className="austin-card group block overflow-hidden hover-lift"
    >
      <div className="flex aspect-[4/3] items-center justify-center bg-austin-surface-solid text-5xl">
        <span className="transition-transform duration-500 group-hover:scale-110">
          {getEmoji(slug)}
        </span>
      </div>
      <div className="p-6">
        <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}>
          {category}
        </span>
        <h3 className="mt-3 font-display text-lg font-semibold text-austin-text">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-austin-muted line-clamp-2">
          {summary}
        </p>
        <p className="mt-4 flex items-center justify-between text-xs text-austin-muted">
          <span>Case study</span>
          <span>{date}</span>
        </p>
      </div>
    </Link>
  );
}
