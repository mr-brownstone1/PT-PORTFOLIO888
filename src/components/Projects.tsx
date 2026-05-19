import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/outlined";
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
            description="Selected UX/UI and product design — from research and flows to polished interfaces."
          />
        </ScrollReveal>
      </div>
      <ProjectCarousel projects={featured} />
      <div className="page-container mt-10 text-center">
        <Link
          href="/projects"
          className="btn btn-outline hover-lift px-6 py-3"
        >
          View all projects
          <ArrowRightIcon size="sm" />
        </Link>
      </div>
    </section>
  );
}
