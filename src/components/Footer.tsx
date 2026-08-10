"use client";

import Link from "next/link";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="pb-12 pt-8">
      <div className="page-container">
        <div className="kathin-glass-card kathin-glass-specular relative grid grid-cols-1 gap-8 overflow-hidden rounded-[var(--kathin-radius-lg)] p-6 sm:gap-10 sm:p-8 md:grid-cols-3 md:p-10">
          <div>
            <p className="font-display text-lg font-bold text-kathin-text">
              Suphaphorn Khan-Ngoen
            </p>
            <p className="mt-1 text-sm text-kathin-muted">{t.footer.role}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-kathin-muted">{t.footer.pages}</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/" className="text-sm text-kathin-text hover:opacity-70">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-sm text-kathin-text hover:opacity-70"
                >
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-kathin-text hover:opacity-70"
                >
                  {t.nav.about}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-kathin-muted">{t.footer.info}</p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/#contact"
                  className="text-sm text-kathin-text hover:opacity-70"
                >
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <a
                  href="mailto:spp.kng1998@gmail.com"
                  className="text-sm text-kathin-text hover:opacity-70"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-kathin-muted">
          © {new Date().getFullYear()} Suphaphorn · Portfolio
        </p>
      </div>
    </footer>
  );
}
