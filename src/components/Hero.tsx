"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import ProjectMockupMarquee from "./ProjectMockupMarquee";
import { ArrowRightIcon } from "@/components/icons/outlined";
import { fadeOnly, fadeUpBlur, staggerContainer } from "@/lib/motion";

const nameLines = ["Suphaphorn", "Khan-Ngoen"];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const item = reduceMotion ? fadeOnly : fadeUpBlur;
  const container = staggerContainer(0.12, 0.15);

  return (
    <section className="pb-12 pt-2 sm:pb-16 md:pb-28 md:pt-4">
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
          Hello!{" "}
          <span className="wave-emoji" aria-hidden>
            👋
          </span>{" "}
          I&apos;m
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
          I&apos;m a{" "}
          <strong className="font-semibold text-kathin-text">UX/UI Designer</strong>{" "}
          crafting intuitive{" "}
          <strong className="font-semibold text-kathin-text">web and software systems</strong>
          — from user research and wireframes to design systems and developer handoff.
        </motion.p>

        <motion.div variants={item} className="btn-row mt-8 md:mt-12">
          <Link href="/projects" className="btn btn-accent hover-lift px-7 py-3.5 text-[0.9375rem] sm:px-8 sm:py-4">
            View Portfolio
            <ArrowRightIcon size="sm" />
          </Link>
        </motion.div>
      </motion.div>

      <ProjectMockupMarquee />
    </section>
  );
}
