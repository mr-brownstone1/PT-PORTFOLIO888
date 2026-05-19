import Link from "next/link";
import {
  getMockupAccent,
  type ShowcaseMockup,
} from "@/config/showcaseMockups";

function PhoneFrame({
  children,
  className = "",
  tall = false,
}: {
  children: React.ReactNode;
  className?: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[14px] border border-white/10 bg-zinc-900 shadow-lg ${tall ? "h-[88%] w-[22%]" : "h-[72%] w-[20%]"} ${className}`}
    >
      <div className="absolute left-1/2 top-1 z-10 h-1 w-6 -translate-x-1/2 rounded-full bg-zinc-700" />
      {children}
    </div>
  );
}

function MockupScene({ item }: { item: ShowcaseMockup }) {
  const { from, to, ui } = getMockupAccent(item.accent);

  if (item.variant === "phones-trio") {
    return (
      <div className="flex h-full items-end justify-center gap-[6%] px-[8%] pb-[10%]">
        <PhoneFrame className="-rotate-6 translate-y-2 opacity-90">
          <div className="h-full w-full p-1.5" style={{ background: `linear-gradient(160deg, ${from}, ${to})` }}>
            <div className="mt-2 h-2 w-8 rounded bg-white/30" />
            <div className="mt-3 space-y-1 px-0.5">
              <div className="h-8 rounded-md bg-white/20" />
              <div className="h-3 w-full rounded bg-white/15" />
            </div>
          </div>
        </PhoneFrame>
        <PhoneFrame tall>
          <div className="h-full w-full p-2" style={{ background: ui }}>
            <div className="h-16 rounded-lg" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }} />
            <div className="mt-2 h-2 w-10 rounded bg-zinc-300" />
            <div className="mt-2 grid grid-cols-2 gap-1">
              <div className="h-6 rounded bg-zinc-200" />
              <div className="h-6 rounded bg-zinc-200" />
            </div>
          </div>
        </PhoneFrame>
        <PhoneFrame className="rotate-6 translate-y-2 opacity-90">
          <div className="h-full w-full p-1.5 bg-zinc-950">
            <div className="flex h-8 items-center justify-center rounded-md" style={{ background: from }}>
              <div className="h-2 w-6 rounded-full bg-white/40" />
            </div>
            <div className="mt-2 space-y-1">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-2 rounded bg-zinc-800" />
              ))}
            </div>
          </div>
        </PhoneFrame>
      </div>
    );
  }

  if (item.variant === "phone-single") {
    return (
      <div className="flex h-full items-center justify-center px-[15%]">
        <PhoneFrame tall className="!h-[85%] !w-[42%]">
          <div className="h-full w-full p-2" style={{ background: ui }}>
            <div className="rounded-lg p-2" style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}>
              <div className="h-2 w-12 rounded bg-white/40" />
              <div className="mt-3 h-10 rounded bg-white/25" />
            </div>
            <div className="mt-2 space-y-1.5">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="flex gap-1">
                  <div className="h-4 w-4 rounded bg-zinc-300" />
                  <div className="h-4 flex-1 rounded bg-zinc-200" />
                </div>
              ))}
            </div>
          </div>
        </PhoneFrame>
      </div>
    );
  }

  if (item.variant === "laptop") {
    return (
      <div className="flex h-full flex-col items-center justify-end px-[10%] pb-[8%]">
        <div className="relative w-[88%] overflow-hidden rounded-t-lg border border-b-0 border-white/10 bg-zinc-900 shadow-xl">
          <div className="aspect-[16/10] w-full p-2" style={{ background: ui }}>
            <div className="mb-2 flex gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-red-400/80" />
              <div className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
              <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="h-[55%] rounded-md" style={{ background: `linear-gradient(120deg, ${from}, ${to})` }} />
            <div className="mt-2 flex gap-2">
              <div className="h-2 flex-1 rounded bg-zinc-300" />
              <div className="h-2 w-8 rounded bg-zinc-300" />
            </div>
          </div>
        </div>
        <div className="h-1.5 w-[95%] rounded-b-md bg-zinc-700" />
        <div className="h-0.5 w-[70%] rounded-b-lg bg-zinc-600" />
      </div>
    );
  }

  if (item.variant === "dashboard") {
    return (
      <div className="flex h-full items-center justify-center p-[10%]">
        <div className="h-full w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-950 shadow-inner">
          <div className="flex h-6 items-center gap-1 border-b border-white/5 px-2">
            <div className="h-1 w-8 rounded bg-zinc-700" />
          </div>
          <div className="grid h-[calc(100%-1.5rem)] grid-cols-3 gap-1 p-1.5">
            <div className="col-span-2 space-y-1">
              <div className="h-[45%] rounded" style={{ background: `linear-gradient(135deg, ${from}88, ${to}44)` }} />
              <div className="grid grid-cols-3 gap-1">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="h-8 rounded bg-zinc-800" />
                ))}
              </div>
            </div>
            <div className="space-y-1">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-5 rounded bg-zinc-800/80" />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* desktop-wide */
  return (
    <div className="flex h-full items-center justify-center p-[8%]">
      <div className="w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-2xl">
        <div className="flex h-5 items-center gap-1 border-b border-white/5 bg-zinc-950 px-2">
          <div className="h-1 w-1 rounded-full bg-red-500/70" />
          <div className="h-1 w-1 rounded-full bg-amber-500/70" />
          <div className="h-1 w-1 rounded-full bg-green-500/70" />
          <div className="ml-2 h-1.5 flex-1 max-w-[40%] rounded-full bg-zinc-800" />
        </div>
        <div className="aspect-[16/9] p-2" style={{ background: ui }}>
          <div className="flex h-full gap-2">
            <div className="w-1/4 space-y-1">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-2 rounded bg-zinc-300/80" />
              ))}
            </div>
            <div className="flex-1 rounded-md p-2" style={{ background: `linear-gradient(145deg, ${from}, ${to})` }}>
              <div className="h-3 w-16 rounded bg-white/30" />
              <div className="mt-4 grid grid-cols-3 gap-1">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="aspect-square rounded bg-white/20" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Props = { item: ShowcaseMockup };

export default function MockupCard({ item }: Props) {
  const inner = (
    <article className="mockup-card group relative h-[200px] w-[min(72vw,300px)] shrink-0 overflow-hidden rounded-austin-md bg-[#1a1a1a] sm:h-[220px] sm:w-[320px] md:h-[240px] md:w-[360px]">
      <MockupScene item={item} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-[10px] font-medium uppercase tracking-wider text-white/60">
          {item.category}
        </p>
        <p className="font-display text-sm font-semibold text-white">{item.title}</p>
      </div>
    </article>
  );

  if (item.slug) {
    return (
      <Link href={`/case-study/${item.slug}`} className="shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-austin-blue">
        {inner}
      </Link>
    );
  }

  return <div className="shrink-0">{inner}</div>;
}
