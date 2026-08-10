"use client";

import dynamic from "next/dynamic";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

const IntroSplash = dynamic(() => import("@/components/IntroSplash"), {
  ssr: false,
});

/** Heavy client-only chrome — deferred so first page compile stays lighter */
export default function ClientChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <IntroSplash />
      {children}
    </SmoothScroll>
  );
}
