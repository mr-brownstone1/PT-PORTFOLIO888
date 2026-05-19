"use client";

import Link from "next/link";
import ProjectCardPreview from "./ProjectCardPreview";
import { getProjectEmoji, projectCategoryColors } from "./FeaturedProjectCard";
import type { Project } from "@/config/projects";

type Props = {
  project: Project;
};

export default function RelatedProjectCard({ project }: Props) {
  const badgeClass =
    projectCategoryColors[project.category] ?? projectCategoryColors.default;

  return (
    <Link
      href={`/case-study/${project.slug}`}
      className="group flex h-full min-w-[10.5rem] flex-col overflow-hidden rounded-kathin-md border border-white/[0.06] bg-kathin-surface transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(255,87,34,0.22)] hover:shadow-[0_12px_40px_-16px_rgba(255,87,34,0.2)] sm:min-w-0"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-b border-white/[0.06] bg-[#141414] p-3 sm:p-3.5">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(255,87,34,0.1),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
        <ProjectCardPreview
          lottie={project.lottie}
          image={project.image}
          emoji={getProjectEmoji(project.slug)}
          hoverScale
          compact
          className="relative z-[1] max-h-full max-w-full"
        />
      </div>

      <div className="flex flex-1 flex-col px-3 pb-3 pt-2.5 sm:px-3.5 sm:pb-3.5">
        <span
          className={`w-fit rounded-full px-2 py-0.5 text-[0.65rem] font-medium leading-none ${badgeClass}`}
        >
          {project.category}
        </span>
        <p className="mt-1.5 line-clamp-2 font-display text-xs font-semibold leading-snug text-kathin-text sm:text-sm">
          {project.title}
        </p>
        <p className="mt-1 line-clamp-2 text-[0.7rem] leading-relaxed text-kathin-muted sm:text-xs">
          {project.summary}
        </p>
      </div>
    </Link>
  );
}
