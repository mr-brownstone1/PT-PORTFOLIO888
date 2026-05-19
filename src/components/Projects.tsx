import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";
import { projects } from "@/config/projects";

export default function Projects() {
  const featured = projects.slice(0, 4);

  return (
    <section id="projects" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Projects"
            title="Featured Work"
            description="Selected projects from company work and freelance — web, systems, and product design."
          />
        </ScrollReveal>
        <ProjectCarousel projects={featured} />
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="hover-lift inline-flex items-center gap-2 rounded-full border border-[var(--austin-border)] bg-austin-surface px-6 py-3 text-sm font-medium text-austin-text"
          >
            View all projects
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
