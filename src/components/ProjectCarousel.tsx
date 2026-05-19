"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/icons/outlined";
import {
  motion,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import FeaturedProjectCard from "./FeaturedProjectCard";
import type { Project } from "@/config/projects";

const AUTO_PLAY_MS = 4500;


type Props = { projects: Project[] };

export default function ProjectCarousel({ projects }: Props) {
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const updateOffset = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;

    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    const viewportCenter = viewport.clientWidth / 2;
    setOffset(viewportCenter - cardCenter);
  }, [index]);

  useLayoutEffect(() => {
    updateOffset();
  }, [updateOffset, projects.length]);

  useEffect(() => {
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, [updateOffset]);

  const prev = useCallback(
    () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1)),
    [projects.length]
  );

  const next = useCallback(
    () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1)),
    [projects.length]
  );

  useEffect(() => {
    if (reduceMotion || paused || isDragging || projects.length <= 1) return;

    const timer = window.setInterval(next, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [reduceMotion, paused, isDragging, next, projects.length]);

  const handlePanEnd = (_: unknown, info: PanInfo) => {
    setIsDragging(false);
    const { offset: panOffset, velocity } = info;

    if (panOffset.x < -60 || velocity.x < -350) {
      next();
      return;
    }
    if (panOffset.x > 60 || velocity.x > 350) {
      prev();
    }
  };

  if (projects.length === 0) return null;

  const activeProject = projects[index];
  const progress = ((index + 1) / projects.length) * 100;

  return (
    <div className="relative mt-10 w-full">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setPaused(false);
          }
        }}
      >
        <div
          ref={viewportRef}
          className="cursor-grab overflow-hidden active:cursor-grabbing"
          data-lenis-prevent
        >
          <motion.div
            ref={trackRef}
            className="flex items-stretch gap-4 px-4 sm:gap-5 sm:px-6 md:gap-6"
            animate={{ x: offset }}
            drag={reduceMotion ? false : "x"}
            dragElastic={0.12}
            dragMomentum={false}
            onDragStart={() => {
              setIsDragging(true);
              setPaused(true);
            }}
            onDragEnd={(_, info) => {
              setIsDragging(false);
              setPaused(false);
              handlePanEnd(_, info);
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 1.15, ease: [0.33, 1, 0.68, 1] }
            }
          >
            {projects.map((project, i) => (
              <div
                key={project.slug}
                className="w-[min(740px,88vw)] shrink-0 sm:w-[min(800px,80vw)] lg:w-[min(860px,74vw)]"
              >
                <FeaturedProjectCard
                  project={project}
                  index={i + 1}
                  variant="carousel"
                  isActive={i === index}
                  onFocus={() => setIndex(i)}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-kathin-bg via-kathin-bg/85 to-transparent sm:w-20 md:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-kathin-bg via-kathin-bg/85 to-transparent sm:w-20 md:w-28"
          aria-hidden
        />

        <button
          type="button"
          onClick={prev}
          aria-label="Previous project"
          className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-kathin-surface-solid/90 text-kathin-text shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] backdrop-blur-sm transition hover:scale-105 hover:border-[rgba(255,87,34,0.35)] hover:text-[var(--kathin-orange)] sm:left-4 sm:h-12 sm:w-12 md:left-8"
        >
          <ChevronLeftIcon size="md" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next project"
          className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-kathin-surface-solid/90 text-kathin-text shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)] backdrop-blur-sm transition hover:scale-105 hover:border-[rgba(255,87,34,0.35)] hover:text-[var(--kathin-orange)] sm:right-4 sm:h-12 sm:w-12 md:right-8"
        >
          <ChevronRightIcon size="md" />
        </button>
      </div>

      <div className="page-container mt-8">
        <div className="mx-auto flex max-w-md flex-col items-center gap-4">
          <div className="flex w-full items-center gap-3">
            <span className="w-7 shrink-0 font-display text-sm font-semibold tabular-nums text-[var(--kathin-orange)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-kathin-muted/20">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[var(--kathin-orange-deep)] via-[var(--kathin-orange)] to-[var(--kathin-orange-gradient-mid)]"
                animate={{ width: `${progress}%` }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.55, ease: [0.33, 1, 0.68, 1] }
                }
              />
            </div>
            <span className="w-7 shrink-0 text-right font-display text-sm tabular-nums text-kathin-muted">
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>

          <p className="text-center font-display text-base font-medium text-kathin-text sm:text-lg">
            {activeProject.title}
          </p>

          <div className="flex justify-center gap-2">
            {projects.map((project, i) => (
              <button
                key={project.slug}
                type="button"
                aria-label={`Go to ${project.title}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-7 bg-[var(--kathin-orange)]"
                    : "w-1.5 bg-kathin-muted/35 hover:bg-kathin-muted/55"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
