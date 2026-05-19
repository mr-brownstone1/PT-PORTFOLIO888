"use client";

import ContactButtonWithModal from "./ContactButtonWithModal";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <div className="austin-card px-6 py-16 text-center md:px-12 md:py-20">
            <h2 className="font-display text-[clamp(2rem,5vw,3rem)] font-bold leading-tight text-austin-text">
              Let&apos;s Connect
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-austin-muted md:text-lg">
              I&apos;m open to full-time opportunities, freelance projects, and good
              conversations about design and product.
            </p>
            <ContactButtonWithModal className="hover-lift mt-8 inline-flex items-center gap-2 rounded-full bg-austin-text px-8 py-4 text-sm font-medium text-austin-bg">
              Get in Touch
            </ContactButtonWithModal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
