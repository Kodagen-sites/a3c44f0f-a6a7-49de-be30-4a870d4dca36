import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg-primary)",
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          tertiary: "var(--bg-tertiary)",
          accent: "var(--bg-accent)",
        },
        ink: {
          DEFAULT: "var(--ink-primary)",
          primary: "var(--ink-primary)",
          body: "var(--ink-body)",
          muted: "var(--ink-muted)",
          eyebrow: "var(--ink-eyebrow)",
        },
        primary: "var(--brand-accent)",
        accent: "var(--brand-accent)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.3em",
        wider4: "0.4em",
      },
    },
  },
  plugins: [],
};
export default config;
