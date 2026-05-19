import PageLayout from "@/components/PageLayout";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { projectCategories } from "@/config/projectCategories";
import { getProjectsBySystemType } from "@/config/projects";

export default function ProjectsPage() {
  return (
    <PageLayout>
      <div className="page-container pb-16 md:pb-20">
        
          <ScrollReveal>
            <SectionHeader
              eyebrow="Projects"
              title="My Latest Works"
              description="Top-tier projects crafted with passion, simplicity, and attention to detail — company and freelance."
            />
          </ScrollReveal>

          {projectCategories.map((cat) => {
            const list = getProjectsBySystemType(cat.slug);
            return (
              <section key={cat.slug} id={cat.slug} className="mt-14 scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold text-austin-text">
                  {cat.label}
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((p) => (
                    <ProjectCard key={p.slug} {...p} />
                  ))}
                </div>
                {list.length === 0 && (
                  <p className="mt-4 text-sm text-austin-muted">
                    ยังไม่มีโปรเจกต์ในหมวดนี้
                  </p>
                )}
              </section>
            );
          })}
      </div>
    </PageLayout>
  );
}
