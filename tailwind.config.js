/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Syne", "sans-serif"],
        mono: ["DM Mono", "monospace"],
      },
      colors: {
        // darker neutral background to match the screenshot
        bg: "#0b0b0b",
        surface: "#111111",
        border: "#171717",
        muted: "#232323",
        dim: "#3a3a3a",
        soft: "#4f4f4f",
        light: "#8b8b8b",
        bright: "#ffffff",
        // site accent color (applied across pages)
        accent: "#eaff00",
      },
    },
  },
  plugins: [],
};
