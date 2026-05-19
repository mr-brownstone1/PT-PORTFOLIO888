"use client";

import SectionHeader from "./SectionHeader";
import SpotlightCardGrid from "./SpotlightCardGrid";
import ScrollReveal from "./ScrollReveal";
import { whatIBringCards } from "@/config/whatIBring";

export default function WorkWithMe() {
  return (
    <section id="work-with-me" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Value"
            title="What I Bring"
            description="Clarity, craft, and collaboration—from research to launch."
          />
        </ScrollReveal>

        <SpotlightCardGrid cards={whatIBringCards} bento />
      </div>
    </section>
  );
}
