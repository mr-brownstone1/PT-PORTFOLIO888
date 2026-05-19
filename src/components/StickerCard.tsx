"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";

type Props = {
  sticker?: string;
  fallbackEmoji?: string;
  titleLead: string;
  titleBold: string;
  className?: string;
  wide?: boolean;
};

export default function StickerCard({
  sticker,
  fallbackEmoji = "✨",
  titleLead,
  titleBold,
  className = "",
  wide = false,
}: Props) {
  const [imageFailed, setImageFailed] = useState(!sticker);
  const showEmoji = imageFailed || !sticker;

  return (
    <div
      className={`group kathin-card relative flex h-full min-h-[220px] flex-col overflow-hidden sm:min-h-[240px] ${className}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_42%,rgba(255,87,34,0.05),transparent_70%)]" />

      <div className="relative flex min-h-[148px] flex-1 items-center justify-center px-4 py-5 sm:min-h-[168px] sm:px-6 sm:py-6">
        {showEmoji ? (
          <span
            className={`bento-sticker-float bento-emoji select-none leading-none ${
              wide
                ? "text-[5.5rem] sm:text-[6.5rem]"
                : "text-[4.75rem] sm:text-[5.5rem]"
            }`}
            aria-hidden
          >
            {fallbackEmoji}
          </span>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={sticker}
            alt=""
            className={`bento-sticker-float w-auto max-w-[85%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] ${
              wide
                ? "max-h-[150px] sm:max-h-[170px]"
                : "max-h-[130px] sm:max-h-[150px]"
            }`}
            onError={() => setImageFailed(true)}
            draggable={false}
            loading="lazy"
            decoding="async"
          />
        )}
      </div>

      <div className="relative z-10 mt-auto px-6 pb-7 pt-1 sm:px-8 sm:pb-8">
        <p className="text-left text-base leading-snug text-kathin-muted sm:text-lg">
          {titleLead}
        </p>
        <p className="mt-0.5 text-left font-display text-xl font-semibold leading-snug text-kathin-text sm:text-2xl">
          {titleBold}
        </p>
      </div>
    </div>
  );
}
