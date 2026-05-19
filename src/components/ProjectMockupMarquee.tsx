"use client";

import MockupCard from "./MockupCard";
import {
  showcaseRowBottom,
  showcaseRowTop,
  type ShowcaseMockup,
} from "@/config/showcaseMockups";

function MarqueeTrack({
  items,
  direction,
}: {
  items: ShowcaseMockup[];
  direction: "left" | "right";
}) {
  const loop = [...items, ...items];

  return (
    <div className="marquee-viewport overflow-hidden">
      <div
        className={`marquee-track flex w-max gap-4 ${direction === "right" ? "marquee-animate-right" : "marquee-animate-left"}`}
        aria-hidden={false}
      >
        {loop.map((item, i) => (
          <MockupCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function ProjectMockupMarquee() {
  return (
    <section
      className="relative mt-12 w-full overflow-hidden md:mt-16"
      aria-label="Project mockups showcase"
    >
      <div className="space-y-4 md:space-y-5">
        <MarqueeTrack items={showcaseRowTop} direction="left" />
        <MarqueeTrack items={showcaseRowBottom} direction="right" />
      </div>
      {/* fade ขอบซ้าย–ขวา */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-austin-bg to-transparent sm:w-16 md:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-austin-bg to-transparent sm:w-16 md:w-24"
        aria-hidden
      />
    </section>
  );
}
