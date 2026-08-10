"use client";

import type { ShowcaseMockup } from "@/config/showcaseMockups";

type Props = { item: ShowcaseMockup; priority?: boolean };

export default function MockupCard({ item }: Props) {
  return (
    <article className="glass-frame kathin-glass-specular mockup-card group/mockup relative h-[140px] w-[200px] shrink-0 overflow-hidden rounded-kathin-md transition-transform duration-300 ease-out will-change-transform hover:-translate-y-1 hover:rotate-[-1.5deg] sm:h-[156px] sm:w-[228px] md:h-[168px] md:w-[248px] md:hover:rotate-[-2deg]">
      <div className="glass-frame-surface relative flex h-full items-center justify-center p-2.5 sm:p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt=""
          className="max-h-full max-w-full select-none object-contain object-center drop-shadow-[0_10px_24px_rgba(0,0,0,0.4)] transition-transform duration-300 ease-out group-hover/mockup:scale-[1.04]"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
    </article>
  );
}
