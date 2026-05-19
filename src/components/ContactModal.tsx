"use client";

import { useEffect } from "react";

const PHONE = "0984630999";
const EMAIL = "Spp.kng1998@gmail.com";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-zinc-900/40 backdrop-blur-[2px] transition-opacity"
        aria-label="ปิด"
      />
      <div className="relative w-full max-w-sm rounded-2xl border border-[var(--kathin-border)] bg-kathin-bg p-6 shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1 text-kathin-muted transition hover:bg-kathin-surface hover:text-kathin-text"
          aria-label="ปิด"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2
          id="contact-modal-title"
          className="text-sm font-semibold uppercase tracking-wider text-kathin-muted"
        >
          Contact
        </h2>
        <dl className="mt-4 space-y-3">
          <div>
            <dt className="text-xs text-kathin-muted">Phone Number</dt>
            <dd>
              <a href={`tel:${PHONE}`} className="text-kathin-text hover:text-[var(--kathin-orange)] hover:underline">
                {PHONE}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-xs text-kathin-muted">Email</dt>
            <dd>
              <a href={`mailto:${EMAIL}`} className="text-kathin-text hover:text-[var(--kathin-orange)] hover:underline">
                {EMAIL}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
