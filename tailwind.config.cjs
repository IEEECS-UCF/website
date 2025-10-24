import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
mopule.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ieee-blue": "#0077C8",
        "ieee-orange": "#FF8200",
        pink: colors.pink,
      },
    },
  },
  plugins: [],
  safelist: ["text-ieee-blue"],
};
