import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        flockie: {
          blue: "#4A9FD4",
          orange: "#E8704E",
        },
        ink: "#1A1A1A",
        muted: "#6B7280",
        soft: {
          bg: "#F7F7F7",
          blue: "#EAF4FB",
          orange: "#FDEEE7",
        },
      },
      fontFamily: {
        // Wired up to the CSS variables set by next/font in layout.tsx
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-instrument-serif)", "Georgia", "serif"],
        dm: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
