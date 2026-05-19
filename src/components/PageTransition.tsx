"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { easeOutExpo } from "@/lib/motion";

const variants = {
  initial: {
    opacity: 1,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOutExpo },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.35, ease: easeOutExpo },
  },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={variants}
        className="min-h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
