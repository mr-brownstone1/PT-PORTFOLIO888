"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { designTools } from "@/config/designTools";

type Props = {
  titleLead: string;
  titleBold: string;
  className?: string;
};

function ToolBadge({
  tool,
  paused,
}: {
  tool: (typeof designTools)[number];
  paused: boolean;
}) {
  const size = tool.size ?? 48;

  return (
    <div
      className="bento-tool-float flex items-center justify-center overflow-hidden rounded-full shadow-[0_8px_24px_-8px_rgba(0,0,0,0.55)] ring-1 ring-white/10 transition-transform duration-300 hover:scale-110"
      style={{
        width: size,
        height: size,
        background: tool.bg ?? "#1a1a1a",
        animationDelay: `${tool.floatDelay ?? 0}s`,
        animationDuration: `${tool.floatDuration ?? 5}s`,
        animationPlayState: paused ? "paused" : "running",
      }}
      title={tool.name}
    >
      {tool.image ? (
        <Image
          src={tool.image}
          alt={tool.name}
          width={size - 8}
          height={size - 8}
          className="h-[calc(100%-8px)] w-[calc(100%-8px)] object-contain"
          draggable={false}
        />
      ) : (
        <span
          className="select-none text-sm font-bold"
          style={{ color: tool.abbrColor ?? "#fff" }}
        >
          {tool.abbr}
        </span>
      )}
    </div>
  );
}

export default function FloatingToolsCard({
  titleLead,
  titleBold,
  className = "",
}: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [isDragging, setIsDragging] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.7 });
  const springY = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.7 });

  const parallaxX = useTransform(springX, [-0.5, 0.5], [-16, 16]);
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-12, 12]);

  const floatPaused = isDragging;

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || isDragging || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <div
      ref={cardRef}
      className={`group kathin-card relative flex h-full min-h-[220px] flex-col overflow-hidden sm:min-h-[240px] ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_42%,rgba(255,87,34,0.06),transparent_70%)]" />

      <div className="relative flex min-h-[148px] flex-1 items-center justify-center overflow-hidden px-3 pt-2 sm:min-h-[168px] sm:px-4">
        <motion.div
          className="relative h-[128px] w-full max-w-[300px] cursor-grab touch-pan-y active:cursor-grabbing sm:h-[138px]"
          style={reduceMotion ? undefined : { x: parallaxX, y: parallaxY }}
          drag={reduceMotion ? false : true}
          dragConstraints={{ left: -24, right: 24, top: -18, bottom: 18 }}
          dragElastic={0.14}
          dragMomentum={false}
          dragTransition={{ bounceStiffness: 280, bounceDamping: 24 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
          data-lenis-prevent
        >
          {designTools.map((tool) => (
            <div
              key={tool.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${tool.x}%`, top: `${tool.y}%` }}
            >
              <ToolBadge tool={tool} paused={floatPaused} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mt-auto px-6 pb-7 pt-1 sm:px-8 sm:pb-8">
        <p className="text-left text-base leading-snug text-kathin-muted sm:text-lg">
          {titleLead}
        </p>
        <p className="mt-0.5 text-left font-display text-xl font-semibold leading-snug text-kathin-text sm:text-2xl">
          {titleBold}
        </p>
      </div>
    </div>
  );
}
