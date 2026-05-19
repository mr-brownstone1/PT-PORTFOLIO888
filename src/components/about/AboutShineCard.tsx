"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function AboutShineCard({ children, className = "" }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={`group relative ${className}`}
      initial={false}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      transition={{ type: "spring", stiffness: 380, damping: 32 }}
    >
      <div className="kathin-glass-card kathin-glass-specular relative overflow-hidden rounded-2xl p-6 md:p-8">
        <span
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          aria-hidden
        />
        <motion.div className="relative">{children}</motion.div>
      </div>
    </motion.article>
  );
}
