"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { introSplash } from "@/config/intro";

export default function IntroSplash() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);
  const exitStarted = useRef(false);

  const finish = useCallback(() => {
    try {
      sessionStorage.setItem(introSplash.sessionKey, "1");
    } catch {
      /* private browsing */
    }
    document.documentElement.classList.remove("intro-splash-active");
    setVisible(false);
  }, []);

  const startExit = useCallback(() => {
    if (exitStarted.current) return;
    exitStarted.current = true;
    setExiting(true);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    let seen = false;
    try {
      seen = sessionStorage.getItem(introSplash.sessionKey) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;

    document.documentElement.classList.add("intro-splash-active");
    setVisible(true);

    const timer = window.setTimeout(startExit, introSplash.displayMs);

    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("intro-splash-active");
    };
  }, [reduceMotion, startExit]);

  if (!visible) return null;

  return (
    <motion.div
      className="intro-splash"
      role="dialog"
      aria-label="Site introduction"
      tabIndex={-1}
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{
        duration: introSplash.exitMs / 1000,
        ease: [0.4, 0, 0.2, 1],
      }}
      onAnimationComplete={() => {
        if (exiting) finish();
      }}
      onClick={startExit}
      onKeyDown={(e) => {
        if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          startExit();
        }
      }}
    >
      <motion.div
        className="intro-splash-glow"
        aria-hidden
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="intro-splash-lottie-wrap"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <DotLottieReact
          src={introSplash.src}
          autoplay
          loop
          className="intro-splash-lottie"
        />
      </motion.div>
    </motion.div>
  );
}
