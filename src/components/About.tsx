"use client";

import Link from "next/link";
import SectionHeader from "./SectionHeader";
import SpotlightCardGrid from "./SpotlightCardGrid";
import ScrollReveal from "./ScrollReveal";
import { skillCategories } from "@/config/skills";
import { useLocale } from "@/i18n/LocaleProvider";

export default function About() {
  const { t } = useLocale();

  const cards = skillCategories.map((card, i) => ({
    ...card,
    title: t.skills.cards[i]?.title ?? card.title,
    description: t.skills.cards[i]?.description ?? card.description,
  }));

  return (
    <section id="skills" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <SectionHeader
            eyebrow={t.skills.eyebrow}
            title={t.skills.title}
            description={t.skills.description}
          />
        </ScrollReveal>

        <SpotlightCardGrid cards={cards} />

        <ScrollReveal>
          <p className="mt-8 text-center text-sm text-kathin-muted">
            <Link
              href="/about#stack"
              className="font-medium text-[var(--kathin-orange)] hover:underline"
            >
              {t.skills.viewProfile}
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
