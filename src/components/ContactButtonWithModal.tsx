"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function ContactButtonWithModal({ className, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={className}
      >
        {children ?? "Contact"}
      </button>
      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
