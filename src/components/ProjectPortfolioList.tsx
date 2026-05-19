"use client";

import FeaturedProjectCard from "./FeaturedProjectCard";
import type { Project } from "@/config/projects";

type Props = {
  projects: Project[];
};

export default function ProjectPortfolioList({ projects }: Props) {
  return (
    <div className="mt-10 flex flex-col gap-6 md:mt-14 md:gap-8">
      {projects.map((project, i) => (
        <FeaturedProjectCard
          key={project.slug}
          project={project}
          index={i + 1}
          variant="static"
        />
      ))}
    </div>
  );
}
