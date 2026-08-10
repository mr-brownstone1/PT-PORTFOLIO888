"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRightIcon } from "@/components/icons/outlined";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { getFeaturedProjects } from "@/config/projects";
import { useLocale } from "@/i18n/LocaleProvider";

const ProjectCarousel = dynamic(() => import("./ProjectCarousel"), {
  ssr: false,
  loading: () => (
    <div className="mx-auto mt-10 h-64 max-w-5xl animate-pulse rounded-[var(--kathin-radius-lg)] bg-kathin-surface-solid/40" />
  ),
});

export default function Projects() {
  const featured = getFeaturedProjects();
  const { t } = useLocale();

  return (
    <section id="projects" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <SectionHeader
            eyebrow={t.featured.eyebrow}
            title={t.featured.title}
            description={t.featured.description}
          />
        </ScrollReveal>
      </div>
      <ProjectCarousel projects={featured} />
      <div className="page-container mt-10 text-center">
        <Link
          href="/projects"
          className="btn btn-outline hover-lift px-6 py-3"
        >
          {t.featured.viewAll}
          <ArrowRightIcon size="sm" />
        </Link>
      </div>
    </section>
  );
}
