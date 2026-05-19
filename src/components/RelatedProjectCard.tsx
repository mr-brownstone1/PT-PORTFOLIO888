import Link from "next/link";
import { getProjectEmoji, projectCategoryColors } from "./FeaturedProjectCard";

type Props = {
  slug: string;
  title: string;
  category: string;
  image?: string;
};

export default function RelatedProjectCard({
  slug,
  title,
  category,
  image,
}: Props) {
  const badgeClass =
    projectCategoryColors[category] ?? projectCategoryColors.default;

  return (
    <Link
      href={`/case-study/${slug}`}
      className="group flex h-full min-w-[10.5rem] flex-col overflow-hidden rounded-kathin-md bg-kathin-surface transition duration-300 hover:-translate-y-0.5 hover:bg-[#1a1a1a] hover:shadow-[0_12px_40px_-16px_rgba(255,87,34,0.2)] sm:min-w-0"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#141414] p-3">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(255,87,34,0.08),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
        {image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={image}
            alt=""
            className="relative max-h-full max-w-full object-contain object-center transition duration-300 group-hover:scale-[1.03]"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="relative text-3xl transition duration-300 group-hover:scale-110">
            {getProjectEmoji(slug)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-2.5 sm:px-3.5 sm:pb-3.5">
        <span
          className={`w-fit rounded-full px-2 py-0.5 text-[0.65rem] font-medium leading-none ${badgeClass}`}
        >
          {category}
        </span>
        <p className="mt-1.5 line-clamp-2 font-display text-xs font-semibold leading-snug text-kathin-text sm:text-sm">
          {title}
        </p>
      </div>
    </Link>
  );
}
