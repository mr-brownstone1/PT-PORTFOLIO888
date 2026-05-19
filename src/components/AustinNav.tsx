"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ContactButtonWithModal from "./ContactButtonWithModal";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/stack", label: "Stack" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function AustinNav() {
  const pathname = usePathname() ?? "";
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 md:pt-5">
      <div className="page-container relative">
        <nav className="austin-glass flex items-center justify-between gap-4 rounded-austin px-5 py-3 md:px-8 md:py-4">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
            <Image
              src="/avatar.png"
              alt="Suphaphorn"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
            <span className="hidden font-display text-sm font-semibold text-austin-text sm:inline">
              Suphaphorn
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive(pathname, link.href)
                      ? "bg-austin-text text-austin-bg"
                      : "text-austin-muted hover:text-austin-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <ContactButtonWithModal className="rounded-full bg-austin-text px-5 py-2.5 text-sm font-medium text-austin-bg transition-all duration-300 hover:opacity-90">
              Connect
            </ContactButtonWithModal>
          </div>

          <button
            type="button"
            className="rounded-full p-2 text-austin-text md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {open && (
          <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] austin-glass rounded-austin-md p-4 md:hidden">
            <ul className="flex flex-col gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded-austin-sm px-4 py-3 text-sm font-medium ${
                      isActive(pathname, link.href)
                        ? "bg-austin-text text-austin-bg"
                        : "text-austin-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 border-t border-[var(--austin-border)] pt-2">
                <ContactButtonWithModal className="block w-full rounded-austin-sm bg-austin-text px-4 py-3 text-center text-sm font-medium text-austin-bg">
                  Connect
                </ContactButtonWithModal>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
