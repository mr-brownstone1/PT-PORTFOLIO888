/** Full-screen intro splash — shown once per browser session on first visit */
export const introSplash = {
  src: "/intro-splash.lottie",
  /** How long the animation stays fully visible before fade-out */
  displayMs: 3000,
  /** Fade-out duration (ms) */
  exitMs: 650,
  sessionKey: "sppux-intro-seen",
} as const;
