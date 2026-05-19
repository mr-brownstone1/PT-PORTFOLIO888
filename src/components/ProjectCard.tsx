import Link from "next/link";

const categoryColors: Record<string, string> = {
  "Website Design": "bg-kathin-green/15 text-kathin-green",
  "UX/UI Design": "bg-kathin-blue/15 text-kathin-blue",
  "System Design": "bg-kathin-orange/15 text-kathin-orange",
  "Graphic Design": "bg-kathin-orange/15 text-kathin-orange",
  default: "bg-kathin-cyan/15 text-kathin-cyan",
};

function getEmoji(slug: string) {
  if (slug === "payment-system") return "💳";
  if (slug === "dashboard") return "📊";
  if (slug === "graphic") return "✨";
  if (slug.includes("booking") || slug.includes("changthai")) return "🏝️";
  if (slug.includes("bermahadev")) return "🔮";
  return "🎨";
}

type Props = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image?: string;
};

export default function ProjectCard({
  slug,
  title,
  category,
  summary,
  image,
}: Props) {
  const badgeClass = categoryColors[category] ?? categoryColors.default;

  return (
    <Link
      href={`/case-study/${slug}`}
      className="kathin-card group block overflow-hidden hover-lift"
    >
      <div className="flex aspect-[4/3] items-center justify-center bg-kathin-surface-solid p-4 text-5xl">
        {image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={image}
            alt=""
            className="max-h-full max-w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="transition-transform duration-500 group-hover:scale-110">
            {getEmoji(slug)}
          </span>
        )}
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
