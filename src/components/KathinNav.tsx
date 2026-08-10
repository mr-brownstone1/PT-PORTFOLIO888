"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import ContactButtonWithModal from "./ContactButtonWithModal";
import { MenuIcon, XIcon } from "@/components/icons/outlined";
import { fadeDown, fadeOnly } from "@/lib/motion";
import { useLocale } from "@/i18n/LocaleProvider";
import LanguageSwitcher from "@/i18n/LanguageSwitcher";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function KathinNav() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { t } = useLocale();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/projects", label: t.nav.projects },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 pt-4 md:pt-5"
      initial="hidden"
      animate="visible"
      variants={reduceMotion ? fadeOnly : fadeDown}
    >
      <div className="page-container relative">
        <nav className="kathin-glass flex items-center justify-between gap-3 rounded-[var(--kathin-radius-lg)] px-4 py-2.5 sm:gap-4 sm:px-5 sm:py-3 md:px-8 md:py-4">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/avatar.png"
              alt="Suphaphorn"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="hidden font-display text-sm font-semibold text-kathin-text sm:inline">
              Suphaphorn
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`btn px-4 py-2 ${
                    isActive(pathname, link.href)
                      ? "btn-nav-active"
                      : "border-transparent bg-transparent text-kathin-muted hover:bg-white/5 hover:text-kathin-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <LanguageSwitcher />
            <ContactButtonWithModal className="btn btn-ghost min-w-[6rem] justify-center px-5 py-2.5">
              {t.nav.connect}
            </ContactButtonWithModal>
          </div>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              className="rounded-full p-2 text-kathin-text"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <XIcon size="md" /> : <MenuIcon size="md" />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] kathin-glass rounded-[var(--kathin-radius-md)] p-3 sm:p-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`btn w-full rounded-kathin-sm px-4 py-3 ${
                      isActive(pathname, link.href)
                        ? "btn-nav-active"
                        : "border-transparent bg-transparent text-kathin-muted hover:bg-white/5 hover:text-kathin-text"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-[var(--kathin-border)] pt-2">
                <ContactButtonWithModal className="btn btn-ghost w-full rounded-kathin-sm px-4 py-3">
                  {t.nav.connect}
                </ContactButtonWithModal>
              </li>
            </ul>
          </div>
        )}
      </div>
    </motion.header>
  );
}
