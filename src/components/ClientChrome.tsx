"use client";

import dynamic from "next/dynamic";
import { LocaleProvider } from "@/i18n/LocaleProvider";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

const IntroSplash = dynamic(() => import("@/components/IntroSplash"), {
  ssr: false,
});

/**
 * Locale + optional heavy chrome (Lenis + Lottie splash).
 * Splash/Lenis skipped in development to cut RAM / first-compile cost.
 */
export default function ClientChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const body =
    process.env.NODE_ENV === "development" ? (
      <>{children}</>
    ) : (
      <SmoothScroll>
        <IntroSplash />
        {children}
      </SmoothScroll>
    );

  return <LocaleProvider>{body}</LocaleProvider>;
}
