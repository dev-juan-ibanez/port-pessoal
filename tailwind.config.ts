import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          400: "#818cf8",
          500: "#6366f1",
          600: "#5457dc",
        },
        cyan: {
          400: "#22d3ee",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 16px 50px -18px rgba(99, 102, 241, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
