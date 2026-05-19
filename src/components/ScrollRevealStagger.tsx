"use client";

import { useRef, Children, isValidElement } from "react";
import { motion, useInView } from "framer-motion";

const DURATION = 0.5;
const Y_OFFSET = 16;
const STAGGER_DELAY = 0.08;

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_DELAY,
      delayChildren: 0.03,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: Y_OFFSET },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: "easeOut" as const },
  },
};

type Props = {
  children: React.ReactNode;
  /** Trigger when this fraction of container is visible. Default 0.12 */
  amount?: number;
  /** Only animate once. Default true */
  once?: boolean;
  className?: string;
};

export default function ScrollRevealStagger({
  children,
  amount = 0.12,
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
      variants={containerVariants}
      className={className}
    >
      {Children.map(children, (child, index) =>
        isValidElement(child) ? (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ) : (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        )
      )}
    </motion.div>
  );
}
