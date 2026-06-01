"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons/outlined";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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

const THUMB_SCROLL_PX = 260;

const navButtonClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-kathin-surface-solid/90 text-kathin-text shadow-[0_8px_32px_-8px_rgba(0,0,0,0.45)] backdrop-blur-sm transition hover:scale-105 hover:border-[rgba(255,87,34,0.35)] hover:text-[var(--kathin-orange)] focus-visible:scale-105 focus-visible:border-[rgba(255,87,34,0.35)] focus-visible:text-[var(--kathin-orange)] focus-visible:outline-none sm:h-11 sm:w-11";

function preloadImage(src: string) {
  const img = new Image();
  img.src = src;
}

export default function ProjectImageGallery({
  images,
  title,
  className = "",
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const thumbListRef = useRef<HTMLDivElement>(null);
  const thumbButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const galleryRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

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

  useEffect(() => {
    if (images.length <= 1) return;
    const nextIndex = (activeIndex + 1) % images.length;
    const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    preloadImage(images[nextIndex].src);
    preloadImage(images[prevIndex].src);
  }, [activeIndex, images]);

  useEffect(() => {
    const node = galleryRef.current;
    if (!node || images.length <= 1) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };

    node.addEventListener("keydown", onKeyDown);
    return () => node.removeEventListener("keydown", onKeyDown);
  }, [goPrev, goNext, images.length]);

  if (images.length === 0) return null;

  const active = images[activeIndex];
  const showThumbNav = images.length > 1;
  const progress = ((activeIndex + 1) / images.length) * 100;

  return (
    <div
      ref={galleryRef}
      tabIndex={showThumbNav ? 0 : undefined}
      className={`project-gallery relative left-1/2 mt-8 w-[min(56rem,calc(100vw-1.5rem))] -translate-x-1/2 outline-none ${className}`}
      aria-label={`${title} screen gallery`}
    >
      <div className="group/main flex items-center gap-2 sm:gap-3">
        {showThumbNav && (
          <button
            type="button"
            onClick={goPrev}
            className={`${navButtonClass} opacity-100 sm:opacity-0 sm:group-hover/main:opacity-100 sm:group-focus-within/main:opacity-100`}
            aria-label="Previous screen"
          >
            <ChevronLeftIcon size="md" />
          </button>
        )}

        <figure className="glass-frame kathin-glass-specular min-w-0 flex-1 overflow-hidden rounded-[var(--kathin-radius-lg)]">
          <div className="glass-frame-gallery-surface relative flex min-h-[min(52vh,20rem)] w-full items-center justify-center p-3 sm:min-h-[min(62vh,28rem)] sm:p-5 md:min-h-[min(68vh,32rem)]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active.src}
                className="flex h-full w-full items-center justify-center"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.985 }}
                transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={active.src}
                  alt={active.alt}
                  className="max-h-[min(52vh,20rem)] max-w-full object-contain object-center drop-shadow-[0_12px_40px_rgba(0,0,0,0.35)] sm:max-h-[min(62vh,28rem)] md:max-h-[min(68vh,32rem)]"
                  loading={activeIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <figcaption className="sr-only">{active.alt}</figcaption>
        </figure>

        {showThumbNav && (
          <button
            type="button"
            onClick={goNext}
            className={`${navButtonClass} opacity-100 sm:opacity-0 sm:group-hover/main:opacity-100 sm:group-focus-within/main:opacity-100`}
            aria-label="Next screen"
          >
            <ChevronRightIcon size="md" />
          </button>
        )}
      </div>

      {showThumbNav && (
        <div className="mt-3 flex flex-col gap-2.5 sm:mt-4">
          <div className="flex items-center justify-between gap-3 text-xs sm:text-sm">
            <p className="min-w-0 truncate font-medium text-kathin-text" aria-live="polite">
              {active.alt}
            </p>
            <span className="shrink-0 tabular-nums text-kathin-muted">
              {activeIndex + 1} / {images.length}
            </span>
          </div>

          <div
            className="h-0.5 overflow-hidden rounded-full bg-white/[0.08]"
            role="progressbar"
            aria-valuenow={activeIndex + 1}
            aria-valuemin={1}
            aria-valuemax={images.length}
            aria-label="Gallery progress"
          >
            <div
              className="h-full rounded-full bg-[var(--kathin-orange)] transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="relative">
            {canScrollLeft && (
              <>
                <div
                  className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-kathin-bg to-transparent sm:w-14"
                  aria-hidden
                />
                <button
                  type="button"
                  onClick={() => scrollThumbs(-1)}
                  className="absolute left-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-kathin-surface-solid/95 text-kathin-text shadow-md transition hover:border-[var(--kathin-orange)]/40 hover:text-[var(--kathin-orange)]"
                  aria-label="Scroll thumbnails left"
                >
                  <ChevronLeftIcon size="sm" />
                </button>
              </>
            )}

            <div
              ref={thumbListRef}
              onWheel={onThumbWheel}
              className={`flex gap-2.5 overflow-x-auto overscroll-x-contain scroll-smooth py-0.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
                canScrollLeft ? "pl-10 sm:pl-12" : ""
              } ${canScrollRight ? "pr-10 sm:pr-12" : ""}`}
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
                    className={`glass-frame relative flex h-[4.25rem] w-[5.5rem] shrink-0 items-center justify-center overflow-hidden rounded-kathin-sm border-2 transition-all duration-200 sm:h-20 sm:w-[7.25rem] ${
                      isActive
                        ? "scale-[1.03] border-[var(--kathin-orange)] opacity-100 shadow-[0_0_0_1px_rgba(255,87,34,0.2),0_8px_24px_-8px_rgba(255,87,34,0.35)] ring-2 ring-[var(--kathin-orange)]/20"
                        : "border-[var(--glass-border)] opacity-55 hover:scale-[1.02] hover:border-[var(--glass-border-hover)] hover:opacity-90"
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt=""
                      className="max-h-full max-w-full object-contain object-center p-1"
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                  </button>
                );
              })}
            </div>

            {canScrollRight && (
              <>
                <div
                  className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-kathin-bg to-transparent sm:w-14"
                  aria-hidden
                />
                <button
                  type="button"
                  onClick={() => scrollThumbs(1)}
                  className="absolute right-0 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-kathin-surface-solid/95 text-kathin-text shadow-md transition hover:border-[var(--kathin-orange)]/40 hover:text-[var(--kathin-orange)]"
                  aria-label="Scroll thumbnails right"
                >
                  <ChevronRightIcon size="sm" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
