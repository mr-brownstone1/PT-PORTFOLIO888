"use client";

import { useLocale } from "./LocaleProvider";
import type { Locale } from "./types";

function GlobeIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <circle cx="10" cy="10" r="8.25" />
      <ellipse cx="10" cy="10" rx="3.5" ry="8.25" />
      <line x1="1.75" y1="7.5" x2="18.25" y2="7.5" />
      <line x1="1.75" y1="12.5" x2="18.25" y2="12.5" />
    </svg>
  );
}

const OPTIONS: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "th", label: "TH" },
];

/**
 * Horizontal slide — layout/motion from the provided LanguageSwitch sample.
 * Width/height fixed so the header does not shift.
 */
export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale, t } = useLocale();
  const active = locale === "th" ? 1 : 0;

  return (
    <button
      type="button"
      onClick={() => setLocale(active === 0 ? "th" : "en")}
      aria-label={t.lang.switchTo}
      className={`lang-switch relative inline-flex shrink-0 cursor-pointer items-center border-0 ${className}`}
      style={{
        width: 136,
        height: 44,
        padding: 5,
        borderRadius: 999,
        backgroundColor: "#1f2229",
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          width: 62,
          left: active === 0 ? 4 : 70,
          borderRadius: 999,
          backgroundColor: "var(--kathin-orange)",
          boxShadow: "0 2px 10px var(--kathin-orange-glow)",
          transition: "left 0.28s cubic-bezier(0.4, 0, 0.2, 1)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {OPTIONS.map((lang, i) => {
        const isActive = active === i;
        return (
          <span
            key={lang.code}
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              width: 66,
              height: 34,
              flexShrink: 0,
            }}
          >
            {i === 0 ? (
              <span
                style={{
                  color: isActive ? "#ffffff" : "#6b7280",
                  transition: "color 0.2s ease",
                  display: "flex",
                }}
              >
                <GlobeIcon size={13} />
              </span>
            ) : null}
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: isActive ? "#ffffff" : "#6b7280",
                transition: "color 0.2s ease",
              }}
            >
              {lang.label}
            </span>
          </span>
        );
      })}
    </button>
  );
}
