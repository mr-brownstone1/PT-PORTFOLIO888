"use client";

import { useCallback, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@/components/icons/outlined";
import { fadeOnly, fadeUpBlur, staggerContainer } from "@/lib/motion";
import { useLocale } from "@/i18n/LocaleProvider";

const ProjectMockupMarquee = dynamic(() => import("./ProjectMockupMarquee"), {
  ssr: false,
});

const nameLines = ["Suphaphorn", "Khan-Ngoen"];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const item = reduceMotion ? fadeOnly : fadeUpBlur;
  const container = staggerContainer(0.12, 0.15);
  const { t } = useLocale();
  const glowRef = useRef<HTMLDivElement>(null);

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      if (reduceMotion) return;
      const el = glowRef.current;
      if (!el) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--hero-mx", `${x}%`);
      el.style.setProperty("--hero-my", `${y}%`);
    },
    [reduceMotion]
  );

  return (
    <section
      className="relative pb-12 pt-2 sm:pb-16 md:pb-28 md:pt-4"
      onPointerMove={onPointerMove}
    >
      <div
        ref={glowRef}
        className="hero-cursor-glow pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden
      />

      <motion.div
        className="page-container hero-glow"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.p
          variants={item}
          className="hero-greeting font-display text-kathin-text"
        >
          {t.hero.greeting}{" "}
          <span className="wave-emoji" aria-hidden>
            👋
          </span>
          {t.hero.im ? <> {t.hero.im}</> : null}
        </motion.p>

        <div className="mt-1">
          {nameLines.map((line) => (
            <motion.span
              key={line}
              variants={item}
              className="hero-title font-display block text-gradient-orange text-gradient-orange-animated"
            >
              {line}
            </motion.span>
          ))}
        </div>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-base leading-relaxed text-kathin-muted md:mt-10 md:text-lg md:leading-relaxed"
        >
          {t.hero.bioBefore}{" "}
          <strong className="font-semibold text-kathin-text">
            {t.hero.roleStrong}
          </strong>{" "}
          {t.hero.bioMid}{" "}
          <strong className="font-semibold text-kathin-text">
            {t.hero.bioStrong}
          </strong>
          {t.hero.bioAfter}
        </motion.p>

        <motion.div variants={item} className="btn-row mt-8 md:mt-12">
          <Link
            href="/projects"
            className="btn btn-accent hover-lift px-7 py-3.5 text-[0.9375rem] sm:px-8 sm:py-4"
          >
            {t.hero.cta}
            <ArrowRightIcon size="sm" />
          </Link>
          <Link
            href="/#contact"
            className="btn btn-outline hover-lift px-7 py-3.5 text-[0.9375rem] sm:px-8 sm:py-4"
          >
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>
      </motion.div>

      <ProjectMockupMarquee />
    </section>
  );
}
