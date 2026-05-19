"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ContactModal from "./ContactModal";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function ContactButtonWithModal({ className, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {children ?? "Contact"}
      </motion.button>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
