"use client";

type Props = {
  frameSrc: string;
  contentSrc: string;
  contentAlt: string;
  className?: string;
};

/** MacBook frame with scrollable screenshot on the screen area */
export default function MacBookScrollDemo({
  frameSrc,
  contentSrc,
  contentAlt,
  className = "",
}: Props) {
  return (
    <div className={className}>
      <p className="mb-4 text-center text-xs text-kathin-muted sm:text-sm">
        Scroll inside the screen to explore the page
      </p>

      <div className="relative mx-auto w-full max-w-4xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={frameSrc}
          alt=""
          className="relative z-0 block w-full select-none"
          draggable={false}
          decoding="async"
        />

        <div
          className="absolute z-10 overflow-y-auto overscroll-y-contain scroll-smooth bg-white [scrollbar-color:rgba(255,87,34,0.45)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--kathin-orange)]/45"
          style={{
            top: "6.9%",
            left: "10.55%",
            width: "78.9%",
            height: "73.5%",
            borderRadius: "0.45rem",
          }}
          aria-label={contentAlt}
          tabIndex={0}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={contentSrc}
            alt={contentAlt}
            className="block w-full min-w-0"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
}
