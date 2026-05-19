import Link from "next/link";
import SectionHeader from "./SectionHeader";
import SpotlightCardGrid from "./SpotlightCardGrid";
import ScrollReveal from "./ScrollReveal";
import { skillCategories } from "@/config/skills";

export default function About() {
  return (
    <section id="skills" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Expertise"
            title="My Skills"
            description="UX/UI, visual design, and front-end basics—in one glance."
          />
        </ScrollReveal>

        <SpotlightCardGrid cards={skillCategories} />

        <ScrollReveal>
          <p className="mt-8 text-center text-sm text-kathin-muted">
            <Link
              href="/about#skills"
              className="font-medium text-[var(--kathin-orange)] hover:underline"
            >
              View full profile & experience →
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
