import type { ShowcaseMockup } from "@/config/showcaseMockups";

type Props = { item: ShowcaseMockup; priority?: boolean };

export default function MockupCard({ item }: Props) {
  return (
    <article className="mockup-card relative shrink-0 overflow-hidden rounded-kathin-md border border-white/[0.06] bg-[#141414] shadow-[0_8px_32px_-12px_rgba(0,0,0,0.45)] h-[140px] w-[200px] sm:h-[156px] sm:w-[228px] md:h-[168px] md:w-[248px]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,rgba(255,87,34,0.06),transparent_70%)]"
        aria-hidden
      />

      <div className="relative flex h-full items-center justify-center p-2.5 sm:p-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt=""
          className="max-h-full max-w-full select-none object-contain object-center drop-shadow-[0_10px_24px_rgba(0,0,0,0.4)]"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
    </article>
  );
}
