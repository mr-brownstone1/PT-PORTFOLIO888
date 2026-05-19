"use client";

import { motion, useReducedMotion } from "framer-motion";
import MockupCard from "./MockupCard";
import {
  showcaseRowBottom,
  showcaseRowTop,
  type ShowcaseMockup,
} from "@/config/showcaseMockups";
import { easeOutExpo } from "@/lib/motion";

function MarqueeTrack({
  items,
  direction,
}: {
  items: ShowcaseMockup[];
  direction: "left" | "right";
}) {
  const loop = [...items, ...items];

  return (
    <div className="marquee-viewport overflow-hidden" data-lenis-prevent>
      <motion.div
        className={`marquee-track flex w-max gap-3 md:gap-3.5 ${direction === "right" ? "marquee-animate-right" : "marquee-animate-left"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9, ease: easeOutExpo }}
      >
        {loop.map((item, i) => (
          <MockupCard key={`${item.id}-${i}`} item={item} />
        ))}
      </motion.div>
    </div>
  );
}

export default function ProjectMockupMarquee() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      className="relative mt-12 w-full overflow-hidden md:mt-16"
      aria-label="Project mockups showcase"
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 56 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.55, ease: easeOutExpo }}
    >
      <div className="space-y-3 md:space-y-4">
        <MarqueeTrack items={showcaseRowTop} direction="left" />
        <MarqueeTrack items={showcaseRowBottom} direction="right" />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-kathin-bg to-transparent sm:w-16 md:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-kathin-bg to-transparent sm:w-16 md:w-24"
        aria-hidden
      />
    </motion.section>
  );
}
