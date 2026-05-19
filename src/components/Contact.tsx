"use client";

import ContactButtonWithModal from "./ContactButtonWithModal";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="page-section">
      <div className="page-container">
        <ScrollReveal>
          <div className="kathin-card relative overflow-visible border border-white/[0.06]">
            <div className="relative flex flex-col md:flex-row md:items-center">
              <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 md:px-12 md:py-14 md:pr-8 lg:px-14 lg:py-16 lg:pr-10">
                <h2 className="font-display text-[clamp(2rem,4.5vw,2.75rem)] font-bold leading-tight text-kathin-text">
                  Let&apos;s Connect
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-kathin-muted md:text-lg">
                  Open to full-time UX/UI roles, freelance, and design projects.
                </p>
                <div className="mt-8">
                  <ContactButtonWithModal className="btn btn-accent hover-lift px-7 py-3.5 text-[0.9375rem]">
                    Get in Touch
                  </ContactButtonWithModal>
                </div>
              </div>

              <div className="relative mx-auto h-[180px] w-full max-w-[280px] shrink-0 sm:h-[200px] sm:max-w-[300px] md:absolute md:inset-y-0 md:right-0 md:mx-0 md:h-auto md:max-w-none md:w-[42%] lg:w-[40%]">
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_75%_85%,rgba(255,87,34,0.08),transparent_70%)]"
                  aria-hidden
                />
                <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 -translate-x-1/2 md:left-auto md:right-4 md:translate-x-0 lg:right-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/contact-avatar.png"
                    alt=""
                    className="h-[200px] w-auto max-w-none object-contain object-bottom drop-shadow-[0_20px_48px_rgba(0,0,0,0.4)] sm:h-[220px] md:h-[250px] lg:h-[280px]"
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
