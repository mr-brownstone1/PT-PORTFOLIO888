"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/config/projects";

const categoryColors: Record<string, string> = {
  "Website Design": "bg-austin-green/15 text-austin-green",
  "UX/UI Design": "bg-austin-blue/15 text-austin-blue",
  "Graphic Design": "bg-austin-orange/15 text-austin-orange",
  default: "bg-austin-cyan/15 text-austin-cyan",
};

function getEmoji(slug: string) {
  if (slug.includes("payment")) return "💳";
  if (slug.includes("dashboard")) return "📊";
  if (slug.includes("brand")) return "✨";
  if (slug.includes("changthai")) return "🏝️";
  if (slug.includes("bermahadev")) return "🔮";
  return "🎨";
}

type Props = { projects: Project[] };

export default function ProjectCarousel({ projects }: Props) {
  const [index, setIndex] = useState(0);
  const current = projects[index];
  const badgeClass = categoryColors[current?.category] ?? categoryColors.default;

  const prev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  if (!current) return null;

  return (
    <div className="mt-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.slug}
          initial={ { opacity: 0, x: 24 } }
          animate={ { opacity: 1, x: 0 } }
          exit={ { opacity: 0, x: -24 } }
          transition={ { duration: 0.35, ease: "easeOut" } }
        >
          <Link
            href={`/case-study/${current.slug}`}
            className="austin-card group block overflow-hidden hover-lift"
          >
            <div className="flex aspect-[16/10] items-center justify-center bg-austin-surface-solid text-7xl md:aspect-[2/1] md:text-8xl">
              <span className="transition-transform duration-500 group-hover:scale-110">
                {getEmoji(current.slug)}
              </span>
            </div>
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${badgeClass}`}>
                  {current.category}
                </span>
                <span className="rounded-full bg-austin-surface-solid px-3 py-1 text-xs font-medium text-austin-muted">
                  {current.group === "company" ? "Company" : "Freelance"}
                </span>
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-austin-text md:text-3xl">
                {current.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-austin-muted">
                {current.summary}
              </p>
              <p className="mt-6 text-sm font-medium text-austin-text">
                Read case study →
              </p>
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous project"
          className="austin-card-inner flex h-12 w-12 items-center justify-center text-austin-text transition hover:scale-105"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex gap-2">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              aria-label={`Go to ${p.title}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-austin-text" : "w-2 bg-austin-muted/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next project"
          className="austin-card-inner flex h-12 w-12 items-center justify-center text-austin-text transition hover:scale-105"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
