"use client";

import Link from "next/link";

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-[var(--background)]/90 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Suphaphorn
          </Link>
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            UX/UI Designer
          </span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            About
          </Link>
          <Link
            href="/#projects"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/#work-with-me"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Work with me
          </Link>
          <Link
            href="/#stack"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            Stack
          </Link>
          <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-400">
            Available for work
          </span>
        </div>
        <button
          type="button"
          className="md:hidden rounded-lg p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}
