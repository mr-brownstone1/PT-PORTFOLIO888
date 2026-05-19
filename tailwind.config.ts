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
        kathin: {
          bg: "var(--kathin-bg)",
          text: "var(--kathin-text)",
          muted: "var(--kathin-text-muted)",
          surface: "var(--kathin-surface)",
          "surface-solid": "var(--kathin-surface-solid)",
          green: "var(--kathin-green)",
          blue: "var(--kathin-blue)",
          orange: "var(--kathin-orange)",
          cyan: "var(--kathin-cyan)",
        },
      },
      borderRadius: {
        kathin: "35px",
        "kathin-md": "30px",
        "kathin-sm": "25px",
      },
      maxWidth: {
        kathin: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
