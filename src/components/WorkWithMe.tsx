"use client";

import SectionHeader from "./SectionHeader";
import SpotlightCardGrid from "./SpotlightCardGrid";
import ScrollReveal from "./ScrollReveal";
import { whatIBringCards } from "@/config/whatIBring";
import { useLocale } from "@/i18n/LocaleProvider";

export default function WorkWithMe() {
  const { t } = useLocale();

  const cards = whatIBringCards.map((card, i) => {
    const copy = t.value.cards[i];
    if (!copy) return card;
    return { ...card, titleLead: copy.lead, titleBold: copy.bold };
  });

  return (
    <section id="work-with-me" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <SectionHeader
            eyebrow={t.value.eyebrow}
            title={t.value.title}
            description={t.value.description}
          />
        </ScrollReveal>

        <SpotlightCardGrid cards={cards} bento />
      </div>
    </section>
  );
}
