"use client";

import ContactButtonWithModal from "./ContactButtonWithModal";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <div className="kathin-glass-card kathin-glass-specular relative overflow-hidden rounded-[var(--kathin-radius-lg)]">
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="relative z-10 flex flex-1 flex-col justify-center px-5 py-10 sm:px-10 sm:py-14 md:px-12 md:py-14 md:pr-8 lg:px-14 lg:py-16 lg:pr-10">
                <h2 className="font-display text-[clamp(1.75rem,5vw,2.75rem)] font-bold leading-tight text-kathin-text">
                  Let&apos;s Connect
                </h2>
                <p className="mt-4 max-w-md text-sm sm:text-base leading-relaxed text-kathin-muted md:text-lg">
                  Open to full-time UX/UI roles, freelance work, and design projects.
                </p>
                <div className="btn-row mt-6 sm:mt-8">
                  <ContactButtonWithModal className="btn btn-accent hover-lift px-7 py-3.5 text-[0.9375rem]">
                    Connect
                  </ContactButtonWithModal>
                </div>
              </div>

              <div className="relative mx-auto h-[150px] w-full max-w-[240px] shrink-0 sm:h-[180px] sm:max-w-[280px] md:absolute md:inset-y-0 md:right-0 md:mx-0 md:h-auto md:max-w-none md:w-[42%] lg:w-[40%]">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_75%_85%,rgba(255,87,34,0.08),transparent_70%)]"
                  aria-hidden
                />
                <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 max-w-full -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 lg:right-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/contact-avatar.png"
                    alt=""
                    className="h-[150px] w-auto max-w-[min(100%,240px)] sm:h-[200px] sm:max-w-[280px] object-contain object-bottom drop-shadow-[0_20px_48px_rgba(0,0,0,0.4)] md:h-[250px] lg:h-[280px]"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
