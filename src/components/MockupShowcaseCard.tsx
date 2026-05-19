"use client";

type Props = {
  image: string;
  titleLead: string;
  titleBold: string;
  className?: string;
  wide?: boolean;
};

/** การ์ด mockup — รูปกลางการ์ด + หัวข้อล่าง */
export default function MockupShowcaseCard({
  image,
  titleLead,
  titleBold,
  className = "",
  wide = false,
}: Props) {
  return (
    <div
      className={`group kathin-card relative flex h-full min-h-[220px] flex-col overflow-hidden sm:min-h-[240px] ${className}`}
    >
      <div className="relative flex min-h-[148px] flex-1 items-center justify-center overflow-hidden px-4 py-5 sm:min-h-[168px] sm:px-6 sm:py-6">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(255,87,34,0.06),transparent_70%)]"
          aria-hidden
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className={`relative w-full object-contain object-center drop-shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.02] ${
            wide
              ? "max-h-[132px] sm:max-h-[158px]"
              : "max-h-[120px] sm:max-h-[140px]"
          }`}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
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
