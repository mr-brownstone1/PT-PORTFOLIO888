"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons/outlined";
import { useCallback, useEffect, useRef, useState } from "react";

export type GalleryImage = {
  src: string;
  alt: string;
};

type Props = {
  images: GalleryImage[];
  title: string;
  className?: string;
};

const THUMB_SCROLL_PX = 220;

export default function ProjectImageGallery({
  images,
  title,
  className = "mt-6",
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const thumbListRef = useRef<HTMLDivElement>(null);
  const thumbButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const goTo = useCallback(
    (index: number) => {
      if (index < 0 || index >= images.length) return;
      setActiveIndex(index);
    },
    [images.length]
  );

  const goPrev = useCallback(() => {
    goTo(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  }, [activeIndex, goTo, images.length]);

  const goNext = useCallback(() => {
    goTo(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, goTo, images.length]);

  const updateScrollHints = useCallback(() => {
    const el = thumbListRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  const scrollThumbs = useCallback((direction: -1 | 1) => {
    thumbListRef.current?.scrollBy({
      left: direction * THUMB_SCROLL_PX,
      behavior: "smooth",
    });
  }, []);

  const onThumbWheel = useCallback((e: React.WheelEvent<HTMLDivElement>) => {
    const el = thumbListRef.current;
    if (!el) return;
    if (el.scrollWidth <= el.clientWidth) return;

    const dominantVertical = Math.abs(e.deltaY) >= Math.abs(e.deltaX);
    if (!dominantVertical) return;

    e.preventDefault();
    el.scrollLeft += e.deltaY;
  }, []);

  useEffect(() => {
    const el = thumbListRef.current;
    if (!el) return;

    updateScrollHints();
    el.addEventListener("scroll", updateScrollHints, { passive: true });
    window.addEventListener("resize", updateScrollHints);

    return () => {
      el.removeEventListener("scroll", updateScrollHints);
      window.removeEventListener("resize", updateScrollHints);
    };
  }, [images.length, updateScrollHints]);

  useEffect(() => {
    thumbButtonRefs.current[activeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeIndex]);

  if (images.length === 0) return null;

  const active = images[activeIndex];
  const showThumbNav = images.length > 1;

  return (
    <div className={className} aria-label={`${title} screen gallery`}>
      <figure className="relative overflow-hidden rounded-kathin-lg border border-white/[0.08] bg-[#0a0a0a]">
        <div className="flex aspect-[16/10] max-h-[min(72vh,560px)] w-full items-center justify-center p-3 sm:aspect-[2/1] sm:p-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={active.src}
            src={active.src}
            alt={active.alt}
            className="max-h-full max-w-full object-contain object-center transition-opacity duration-300"
            loading={activeIndex === 0 ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />
        </div>
        <figcaption className="sr-only">{active.alt}</figcaption>
        <span
          className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-medium tabular-nums text-white backdrop-blur-sm"
          aria-hidden
        >
          {activeIndex + 1} / {images.length}
        </span>

        {showThumbNav && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 sm:left-3 sm:h-10 sm:w-10"
              aria-label="Previous screen"
            >
              <ChevronLeftIcon size="sm" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="absolute right-2 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70 sm:right-3 sm:h-10 sm:w-10"
              aria-label="Next screen"
            >
              <ChevronRightIcon size="sm" />
            </button>
          </>
        )}
      </figure>

      {showThumbNav && (
        <div className="relative mt-3">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scrollThumbs(-1)}
              className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a]/95 text-kathin-text shadow-md transition hover:border-[var(--kathin-orange)]/40 hover:text-[var(--kathin-orange)]"
              aria-label="Scroll thumbnails left"
            >
              <ChevronLeftIcon size="sm" />
            </button>
          )}

          <div
            ref={thumbListRef}
            onWheel={onThumbWheel}
            className={`flex gap-2 overflow-x-auto overscroll-x-contain scroll-smooth pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
              canScrollLeft ? "pl-9" : ""
            } ${canScrollRight ? "pr-9" : ""}`}
            role="tablist"
            aria-label="Select screen"
          >
            {images.map((img, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={img.src}
                  ref={(el) => {
                    thumbButtonRefs.current[index] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${img.alt} (${index + 1} of ${images.length})`}
                  onClick={() => goTo(index)}
                  className={`relative flex h-14 w-[4.5rem] shrink-0 items-center justify-center overflow-hidden rounded-kathin-md border-2 bg-[#0a0a0a] transition-all duration-200 sm:h-16 sm:w-24 ${
                    isActive
                      ? "border-[var(--kathin-orange)] ring-2 ring-[var(--kathin-orange)]/25"
                      : "border-white/10 opacity-70 hover:border-white/25 hover:opacity-100"
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img.src}
                    alt=""
                    className="max-h-full max-w-full object-contain object-center p-0.5"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </button>
              );
            })}
          </div>

          {canScrollRight && (
            <button
              type="button"
              onClick={() => scrollThumbs(1)}
              className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#1a1a1a]/95 text-kathin-text shadow-md transition hover:border-[var(--kathin-orange)]/40 hover:text-[var(--kathin-orange)]"
              aria-label="Scroll thumbnails right"
            >
              <ChevronRightIcon size="sm" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
