"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ProjectMockupMarquee from "./ProjectMockupMarquee";

const lines = ["Hello!", "I'm", "Suphaphorn", "Khan-Ngoen"];

export default function Hero() {
  return (
    <section className="pb-16 pt-8 md:pb-24 md:pt-12">
      <div className="page-container">
        <div className="space-y-0">
          {lines.map((line, i) => (
            <motion.h1
              key={line}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="font-display text-[clamp(2.75rem,10vw,4.6875rem)] font-extrabold leading-[0.9] tracking-tight text-austin-text"
            >
              {line}
            </motion.h1>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="mt-8 max-w-xl text-base leading-relaxed text-austin-muted md:mt-10 md:text-lg"
        >
          UX/UI Designer crafting intuitive web and software systems — from user
          research and wireframes to design systems and developer handoff.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
          className="mt-10"
        >
          <Link
            href="/projects"
            className="hover-lift inline-flex items-center gap-2 rounded-full bg-austin-text px-7 py-3.5 text-sm font-medium text-austin-bg"
          >
            View portfolio
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>

      <ProjectMockupMarquee />
    </section>
  );
}
