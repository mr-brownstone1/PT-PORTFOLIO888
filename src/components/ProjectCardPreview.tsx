"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

type Props = {
  lottie?: string;
  image?: string;
  emoji: string;
  hoverScale?: boolean;
  className?: string;
  /** การ์ดเล็ก (related projects) */
  compact?: boolean;
};

export default function ProjectCardPreview({
  lottie,
  image,
  emoji,
  hoverScale = false,
  className = "relative max-h-full max-w-full",
  compact = false,
}: Props) {
  const lottieClass = compact
    ? "h-full w-full max-h-[min(100%,140px)]"
    : "h-full w-full max-h-[min(100%,200px)] sm:max-h-[min(100%,220px)]";
  const emojiClass = compact
    ? "relative text-4xl sm:text-5xl"
    : "relative text-6xl sm:text-7xl";

  if (lottie) {
    return (
      <div
        className={`${className} flex h-full w-full max-w-[85%] items-center justify-center transition-transform duration-500 ${
          hoverScale ? "group-hover:scale-[1.04]" : ""
        }`}
      >
        <DotLottieReact src={lottie} loop autoplay className={lottieClass} />
      </div>
    );
  }

  if (image) {
    return (
      /* eslint-disable-next-line @next/next/no-img-element */
      <img
        src={image}
        alt=""
        className={`${className} object-contain object-center drop-shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 ${
          hoverScale ? "group-hover:scale-[1.04]" : ""
        }`}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    );
  }

  return (
    <span
      className={`${emojiClass} transition-transform duration-500 ${
        hoverScale ? "group-hover:scale-110" : ""
      }`}
    >
      {emoji}
    </span>
  );
}
