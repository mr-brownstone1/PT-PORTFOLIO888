import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectCard from "@/components/ProjectCard";
import PageLayout from "@/components/PageLayout";
import { projects } from "@/config/projects";

const caseStudyDetails: Record<
  string,
  {
    role: string;
    problem: string;
    solution: string;
    process: string[];
    website?: string;
  }
> = {
  "changthai-thappraya-website": {
    role: "Web Designer / Developer",
    problem:
      "ต้องการเว็บสำหรับนำเสนอกิจกรรมและข้อมูลบริการ พร้อมระบบหลังบ้านให้ทีมอัปเดตข้อมูลสินค้าได้เอง",
    solution:
      "ออกแบบและพัฒนาเว็บไซต์พร้อม Back office เพื่อจัดการข้อมูลกิจกรรมและ Product ได้ง่าย รองรับการเพิ่ม ลบ และแก้ไขข้อมูล",
    process: [
      "Requirement Gathering",
      "UI Design",
      "Frontend Development",
      "Back Office Development",
    ],
  },
  "bermahadev-website": {
    role: "Web Designer / Developer",
    problem:
      "ต้องการเว็บไซต์หลักพร้อมฟีเจอร์ทำนายเบอร์มงคล และมีระบบหลังบ้านให้ทีมงานจัดการข้อมูลได้เอง",
    solution:
      "ออกแบบหน้าเว็บให้ใช้งานง่าย พร้อมเชื่อมระบบจัดการ Back office สำหรับเพิ่ม ลบ และแก้ไขข้อมูลได้อย่างยืดหยุ่น",
    process: [
      "Information Architecture",
      "UI Design",
      "Frontend Development",
      "Back Office Setup",
    ],
    website: "https://bermahadev.com",
  },
  "payment-system": {
    role: "UX/UI Designer",
    problem: "Users struggled to understand the payment flow.",
    solution:
      "Redesigned the payment process to reduce steps and improve clarity.",
    process: [
      "User Research",
      "Wireframe",
      "Prototype",
      "Usability Testing",
    ],
  },
  dashboard: {
    role: "UX/UI Designer",
    problem: "—",
    solution: "—",
    process: ["Context", "Problem / Opportunity", "Process", "Outcomes"],
  },
};

function pickSuggestedProjects(currentSlug: string, count = 3) {
  const candidates = projects
    .filter((p) => p.slug !== currentSlug)
    .sort((a, b) => a.slug.localeCompare(b.slug));
  return candidates.slice(0, Math.min(count, candidates.length));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const detail = caseStudyDetails[slug] ?? {
    role: "UX/UI Designer",
    problem: "อยู่ระหว่างสรุปปัญหาและบริบทของโปรเจกต์",
    solution: "อยู่ระหว่างอัปเดตแนวทางและผลลัพธ์ของงาน",
    process: ["Context", "Problem / Opportunity", "Process", "Outcomes"],
  };
  const suggestedProjects = pickSuggestedProjects(slug, 3);

  return (
    <PageLayout>
      <article className="page-container max-w-3xl py-8 pb-20 md:py-12">
        <p className="text-xs font-medium text-austin-muted">{detail.role}</p>
        <h1 className="mt-2 font-display text-4xl font-bold leading-tight tracking-tight text-austin-text sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-sm text-austin-muted">
          {project.category} • {project.date}
        </p>

        <div className="mt-14 space-y-6">
          <section className="austin-card p-8">
            <h2 className="text-xs font-medium text-austin-muted">Problem</h2>
            <p className="mt-3 text-lg leading-relaxed text-austin-text">{detail.problem}</p>
          </section>
          <section className="austin-card p-8">
            <h2 className="text-xs font-medium text-austin-muted">Solution</h2>
            <p className="mt-3 text-lg leading-relaxed text-austin-text">{detail.solution}</p>
          </section>
          <section className="austin-card p-8">
            <h2 className="text-xs font-medium text-austin-muted">Process</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-austin-muted">
              {detail.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>
          {detail.website && (
            <section className="austin-card p-8">
              <h2 className="text-xs font-medium text-austin-muted">Website</h2>
              <a
                href={detail.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-medium text-austin-text underline hover:opacity-70"
              >
                {detail.website}
              </a>
            </section>
          )}
        </div>

        <section className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-austin-text">
            More projects
          </h2>
          <p className="mt-2 text-sm text-austin-muted">
            You might also want to explore these case studies.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {suggestedProjects.map((p) => (
              <ProjectCard key={p.slug} {...p} />
            ))}
          </div>
        </section>

        <div className="mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-austin-text hover:opacity-70"
          >
            ← Back to projects
          </Link>
        </div>
      </article>
    </PageLayout>
  );
}
