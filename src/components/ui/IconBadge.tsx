"use client";

import { motion, useReducedMotion } from "framer-motion";

export type IconBadgeSize = "sm" | "md" | "lg";

const boxClass: Record<IconBadgeSize, string> = {
  sm: "h-11 w-11 rounded-xl",
  md: "h-14 w-14 rounded-2xl",
  lg: "h-16 w-16 rounded-[1.125rem]",
};

type Props = {
  children: React.ReactNode;
  size?: IconBadgeSize;
  /** แอนิเมชัน float */
  animate?: boolean;
  floatDelay?: number;
  className?: string;
};

export default function IconBadge({
  children,
  size = "md",
  animate = false,
  floatDelay = 0,
  className = "",
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`icon-badge flex shrink-0 items-center justify-center bg-[var(--kathin-orange)]/12 text-[var(--kathin-orange)] ${boxClass[size]} ${className}`.trim()}
      style={animate && !reduceMotion ? { animationDelay: `${floatDelay}s` } : undefined}
      whileHover={reduceMotion ? undefined : { scale: 1.06 }}
      transition={{ type: "spring", stiffness: 380, damping: 18 }}
    >
      <motion.div
        className={animate && !reduceMotion ? "bento-icon-float flex items-center justify-center" : "flex items-center justify-center"}
        style={animate && !reduceMotion ? { animationDelay: `${floatDelay}s` } : undefined}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
