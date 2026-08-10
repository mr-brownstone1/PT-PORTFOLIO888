"use client";

import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { useLocale } from "@/i18n/LocaleProvider";

export default function ProjectsPageHeader() {
  const { t } = useLocale();

  return (
    <ScrollReveal>
      <SectionHeader
        eyebrow={t.projectsPage.eyebrow}
        title={t.projectsPage.title}
        description={t.projectsPage.description}
      />
    </ScrollReveal>
  );
}
