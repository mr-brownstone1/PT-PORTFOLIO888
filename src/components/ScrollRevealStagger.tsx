"use client";

import { cloneElement, useRef, Children, isValidElement } from "react";
import { motion, useInView } from "framer-motion";

import { easeOutExpo } from "@/lib/motion";

const DURATION = 0.6;
const Y_OFFSET = 20;
const STAGGER_DELAY = 0.09;

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
  hidden: { opacity: 0, y: Y_OFFSET, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION, ease: easeOutExpo },
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
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) {
          return (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          );
        }

        const childProps = child.props as { className?: string };
        const itemClassName = childProps.className;

        return (
          <motion.div
            key={child.key ?? index}
            variants={itemVariants}
            className={itemClassName}
          >
            {itemClassName
              ? cloneElement(child, { className: undefined } as Record<string, unknown>)
              : child}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
