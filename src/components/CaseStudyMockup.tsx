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

  const frameClass = prominent
    ? "glass-frame-tight-prominent rounded-[var(--kathin-radius-lg)] sm:min-h-[260px] sm:p-4"
    : "glass-frame-tight rounded-[var(--kathin-radius-md)] sm:min-h-[220px] sm:p-3";

  return (
    <figure className={className}>
      {failed ? (
        <div
          className={`glass-frame kathin-glass-specular flex flex-col items-center justify-center gap-3 border-dashed px-6 py-12 text-center ${frameClass}`}
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
        <div
          className={`glass-frame kathin-glass-specular flex w-full items-center justify-center ${frameClass}`}
        >
          <div className="glass-frame-surface flex h-full w-full items-center justify-center rounded-[calc(var(--kathin-radius-md)-10px)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="max-h-[min(48vh,22rem)] w-full object-contain object-center sm:max-h-[min(68vh,520px)]"
              loading="lazy"
              decoding="async"
              onError={() => setFailed(true)}
            />
          </div>
        </div>
      )}
      {caption && (
        <figcaption className="mt-3 text-center text-xs text-kathin-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
