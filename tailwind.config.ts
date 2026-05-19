import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter-display)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        austin: {
          bg: "var(--austin-bg)",
          text: "var(--austin-text)",
          muted: "var(--austin-text-muted)",
          surface: "var(--austin-surface)",
          "surface-solid": "var(--austin-surface-solid)",
          green: "var(--austin-green)",
          blue: "var(--austin-blue)",
          orange: "var(--austin-orange)",
          cyan: "var(--austin-cyan)",
        },
      },
      borderRadius: {
        austin: "35px",
        "austin-md": "30px",
        "austin-sm": "25px",
      },
      maxWidth: {
        austin: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
