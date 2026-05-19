"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DURATION = 0.5;
const Y_OFFSET = 16;

const defaultVariants = {
  hidden: { opacity: 0, y: Y_OFFSET },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: "easeOut" as const },
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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: defaultVariants.hidden,
        visible: {
          ...defaultVariants.visible,
          transition: {
            ...defaultVariants.visible.transition,
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
