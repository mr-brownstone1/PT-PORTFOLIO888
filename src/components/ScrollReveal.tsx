"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

import { easeOutExpo } from "@/lib/motion";

const DURATION = 0.65;
const Y_OFFSET = 24;

const defaultVariants = {
  hidden: { opacity: 0, y: Y_OFFSET, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION, ease: easeOutExpo },
  },
};

type Props = {
  children: React.ReactNode;
  /** Delay in seconds before animation starts */
  delay?: number;
  /** Trigger when this fraction of element is visible (0–1). Default 0.15 */
  amount?: number;
  /** Only animate once (Apple-style). Default true */
  once?: boolean;
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  amount = 0.15,
  once = true,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount, once });
  const reduceMotion = useReducedMotion();
  const hidden = reduceMotion
    ? { opacity: 0, y: Y_OFFSET }
    : defaultVariants.hidden;
  const visible = reduceMotion
    ? { opacity: 1, y: 0, transition: { duration: 0.4, delay, ease: easeOutExpo } }
    : {
        ...defaultVariants.visible,
        transition: { ...defaultVariants.visible.transition, delay },
      };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{ hidden, visible }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
