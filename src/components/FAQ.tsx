"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "What kind of work do you specialize in?",
    a: "End-to-end UX/UI for web and software — user research, wireframes, design systems, responsive UI, and developer handoff. I have delivered website design, admin systems, ERP, POS, CRM, and inventory products.",
  },
  {
    q: "What is your design process?",
    a: "I start with understanding users and business goals, then move through flows and wireframes, high-fidelity UI, usability testing, and clear specs for development — iterating with product and engineering teams.",
  },
  {
    q: "What systems have you designed?",
    a: "Website design, administrative management, accounting, ERP, POS, stock & inventory, travel, and CRM systems — mainly for TTD GLOBAL, Jeweal Prosoft, and freelance clients.",
  },
  {
    q: "What tools do you use?",
    a: "Figma and Framer for product design; Illustrator and Photoshop for visual work; basic HTML, CSS, React, and Next.js when collaborating on implementation.",
  },
  {
    q: "How can we work together?",
    a: "I am open to full-time roles and freelance projects — product design, web design, mobile app UI, and UX consulting. Reach out via the contact form or email to discuss scope and timeline.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <SectionHeader
            eyebrow="FAQ"
            title="Got Questions? I Got Answers!"
            description="Common questions about my experience, process, and how we can collaborate."
          />
        </ScrollReveal>

        <ul className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="austin-card flex w-full items-start justify-between gap-4 p-6 text-left md:p-8"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-semibold text-austin-text md:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`mt-1 shrink-0 text-xl text-austin-muted transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="austin-card-inner mx-2 -mt-2 rounded-b-austin-md px-6 pb-6 pt-2 md:px-8 md:pb-8">
                    <p className="text-sm leading-relaxed text-austin-muted md:text-base">
                      {item.a}
                    </p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
