"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  prominent?: boolean;
};

export default function CaseStudyMockup({
  src,
  alt,
  caption,
  className = "",
  prominent = false,
}: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={className}>
      {failed ? (
        <div
          className={`flex flex-col items-center justify-center gap-3 rounded-kathin-md border border-dashed border-white/15 bg-[#141414] px-6 py-12 text-center ${
            prominent
              ? "min-h-[280px] sm:min-h-[360px]"
              : "min-h-[220px] sm:min-h-[280px]"
          }`}
        >
          <span className="text-3xl opacity-40" aria-hidden>
            🖼️
          </span>
          <p className="text-sm font-medium text-kathin-text">Mockup placeholder</p>
          <p className="max-w-sm text-xs leading-relaxed text-kathin-muted">
            Drop your image at{" "}
            <code className="rounded bg-kathin-surface-solid px-1.5 py-0.5 text-[0.7rem] text-kathin-text">
              public{src}
            </code>
          </p>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          className={`w-full border border-white/[0.08] object-cover object-center ${
            prominent ? "rounded-kathin-lg" : "rounded-kathin-md"
          }`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-kathin-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
