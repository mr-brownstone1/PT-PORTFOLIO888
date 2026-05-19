"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { contactInfo, contactLinks, contactModalCopy } from "@/config/contact";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type Channel = {
  label: string;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
};

const channels: Channel[] = [
  {
    label: "Mail",
    href: contactLinks.mail,
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    href: contactLinks.phone,
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.75}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: contactLinks.whatsapp,
    external: true,
    icon: (
      <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const contentStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const contentItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 420, damping: 30 },
  },
};

const channelStagger: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.28 },
  },
};

const channelItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.88 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 460, damping: 26 },
  },
};

export default function ContactModal({ isOpen, onClose }: Props) {
  const [mounted, setMounted] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const backdropTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const };

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 30, mass: 0.85 };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="contact-modal-root"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2 }}
        >
          <motion.button
            type="button"
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-[6px]"
            aria-label="Close"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={backdropTransition}
          />

          <motion.div
            className="kathin-glass-card kathin-glass-specular relative z-10 max-h-[min(92dvh,40rem)] w-full max-w-lg overflow-y-auto overscroll-contain rounded-[var(--kathin-radius-md)] px-5 py-8 text-center shadow-[0_24px_80px_rgba(0,0,0,0.55)] sm:px-10 sm:py-12"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 14 }}
            transition={panelTransition}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,87,34,0.14),transparent_55%)]"
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.15, duration: 0.45 }}
            />

            <motion.button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full p-2 text-kathin-muted transition hover:bg-white/10 hover:text-kathin-text"
              aria-label="Close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.2, duration: 0.25 }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              variants={reduceMotion ? undefined : contentStagger}
              initial="hidden"
              animate="show"
            >
              <motion.span
                variants={reduceMotion ? undefined : contentItem}
                className="relative inline-flex rounded-full border border-[var(--kathin-border)] bg-kathin-surface px-4 py-1.5 text-xs font-medium tracking-wide text-kathin-muted"
              >
                {contactModalCopy.badge}
              </motion.span>

              <motion.h2
                id="contact-modal-title"
                variants={reduceMotion ? undefined : contentItem}
                className="relative mt-6 font-display text-[clamp(1.5rem,5vw,2.25rem)] font-bold tracking-tight text-kathin-text sm:text-4xl"
              >
                {contactModalCopy.title}
              </motion.h2>

              <motion.p
                variants={reduceMotion ? undefined : contentItem}
                className="relative mx-auto mt-4 max-w-md text-sm leading-relaxed text-kathin-muted sm:text-[0.9375rem]"
              >
                {contactModalCopy.description}
              </motion.p>
            </motion.div>

            <motion.ul
              className="relative mt-8 flex items-start justify-center gap-4 sm:mt-10 sm:gap-10"
              variants={reduceMotion ? undefined : channelStagger}
              initial="hidden"
              animate="show"
            >
              {channels.map((channel) => (
                <motion.li key={channel.label} variants={reduceMotion ? undefined : channelItem}>
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex flex-col items-center gap-3"
                  >
                    <motion.span
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--kathin-orange-deep)] via-[var(--kathin-orange)] to-[var(--kathin-orange-gradient-mid)] text-white shadow-[0_12px_32px_var(--kathin-orange-glow)] sm:h-[4.5rem] sm:w-[4.5rem]"
                      whileHover={reduceMotion ? undefined : { scale: 1.08, y: -3 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 500, damping: 22 }}
                    >
                      {channel.icon}
                    </motion.span>
                    <span className="text-sm font-medium text-kathin-text transition group-hover:text-[var(--kathin-orange)]">
                      {channel.label}
                    </span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className="relative mt-6 break-words px-1 text-[0.6875rem] leading-relaxed text-kathin-muted/70 sm:mt-8 sm:text-xs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduceMotion ? 0 : 0.55, duration: 0.35 }}
            >
              {contactInfo.email} · {contactInfo.phoneDisplay}
            </motion.p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
