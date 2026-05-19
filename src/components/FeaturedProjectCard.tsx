import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/outlined";
import type { Project } from "@/config/projects";

export const projectCategoryColors: Record<string, string> = {
  "Website Design": "bg-kathin-green/15 text-kathin-green",
  "Customer Project (Web)": "bg-kathin-green/15 text-kathin-green",
  "UX/UI Design": "bg-kathin-blue/15 text-kathin-blue",
  "System Design": "bg-kathin-orange/15 text-kathin-orange",
  "Graphic Design": "bg-kathin-orange/15 text-kathin-orange",
  default: "bg-kathin-cyan/15 text-kathin-cyan",
};

export function getProjectEmoji(slug: string) {
  if (slug.includes("payment")) return "💳";
  if (slug.includes("dashboard")) return "📊";
  if (slug.includes("landing")) return "🌐";
  if (slug === "graphic") return "✨";
  if (slug.includes("booking")) return "🏝️";
  if (slug.includes("changthai")) return "🏝️";
  if (slug.includes("bermahadev")) return "🔮";
  return "🎨";
}

type Props = {
  project: Project;
  index: number;
  variant?: "carousel" | "static";
  isActive?: boolean;
  onFocus?: () => void;
};

export default function FeaturedProjectCard({
  project,
  index,
  variant = "static",
  isActive = true,
  onFocus,
}: Props) {
  const badgeClass =
    projectCategoryColors[project.category] ?? projectCategoryColors.default;
  const number = String(index).padStart(2, "0");
  const active = variant === "static" ? true : isActive;

  return (
    <Link
      href={`/case-study/${project.slug}`}
      onClick={(event) => {
        if (variant === "carousel" && !active && onFocus) {
          event.preventDefault();
          onFocus();
        }
      }}
      aria-current={active ? "true" : undefined}
      className={`group relative block h-full overflow-hidden rounded-kathin border transition-[opacity,transform,box-shadow,border-color] duration-500 ease-out ${
        active
          ? "hover-lift border-[rgba(255,87,34,0.22)] bg-kathin-surface shadow-[0_24px_64px_-24px_rgba(255,87,34,0.35)]"
          : "scale-[0.98] border-white/[0.06] bg-kathin-surface/80 opacity-55"
      }`}
    >
      <div
        className={`pointer-events-none absolute inset-0 ${
          active ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(255,87,34,0.07),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_85%_80%,rgba(255,87,34,0.05),transparent_60%)]" />
      </div>

      <div className="relative z-10 flex min-h-[300px] flex-col md:min-h-[320px] md:flex-row md:items-stretch lg:min-h-[340px]">
        <div className="md:w-[46%] md:shrink-0 p-5 sm:p-6 md:py-7 md:pl-7 md:pr-3">
            <div className="relative flex aspect-[4/3] min-h-[190px] items-center justify-center overflow-hidden rounded-kathin-md border border-white/[0.08] bg-[#141414] p-4 sm:min-h-[210px] sm:p-5 md:aspect-auto md:min-h-[220px] lg:min-h-[240px]">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(255,87,34,0.1),transparent_70%)]"
                aria-hidden
              />
              <span
                className={`pointer-events-none absolute bottom-3 right-4 z-10 select-none font-display text-4xl font-bold leading-none sm:bottom-4 sm:right-5 sm:text-5xl ${
                  active ? "text-white/[0.1]" : "text-white/[0.06]"
                }`}
                aria-hidden
              >
                {number}
              </span>
              {project.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={project.image}
                  alt=""
                  className={`relative object-contain object-center drop-shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 ${
                    project.slug === "landing-page-website"
                      ? "max-h-[72%] max-w-[58%]"
                      : "max-h-full max-w-full"
                  } ${active ? "group-hover:scale-[1.04]" : ""}`}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              ) : (
                <span
                  className={`relative text-6xl transition-transform duration-500 sm:text-7xl ${
                    active ? "group-hover:scale-110" : ""
                  }`}
                >
                  {getProjectEmoji(project.slug)}
                </span>
              )}
            </div>
        </div>

        <div className="relative z-10 flex min-w-0 flex-1 flex-col justify-between px-5 pb-6 pt-1 sm:px-6 sm:pb-7 md:py-7 md:pl-4 md:pr-8">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}
              >
                {project.category}
              </span>
            </div>

            <h3 className="mt-4 break-words font-display text-xl font-semibold leading-snug text-kathin-text sm:text-2xl lg:text-[1.65rem]">
              {project.title}
            </h3>
            <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-kathin-muted sm:text-base">
              {project.summary}
            </p>
          </div>

          <div
            className={`mt-6 flex items-center gap-2 text-sm font-medium transition-colors duration-300 md:mt-8 ${
              active
                ? "text-[var(--kathin-orange)] group-hover:text-[var(--kathin-orange-hover)]"
                : "text-kathin-muted"
            }`}
          >
            <span>View case study</span>
            <ArrowRightIcon
              size="sm"
              className={`transition-transform duration-300 ${
                active ? "group-hover:translate-x-1" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
