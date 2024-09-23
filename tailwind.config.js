/** @type {import('tailwindcss').Config} */

import { splitFontSizes } from "./src/utils/fontsizes";

const fontSizes = {
  sm: [23, 14, 37],
  base: [29, 18, 46],
  lg: [37, 23, 58],
  xl: [47, 29, 72],
  "2xl": [60, 37, 91],
  "3xl": [76, 47, 114],
};

const { sizes, sizesM, lineheights } = splitFontSizes(fontSizes);

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["PT Serif", "serif"],
      },
      fontSize: { ...sizes, ...sizesM },
      lineHeight: { ...lineheights },
      colors: {
        p: "#151E29",
        p2: "#F4843F",
        s: "#083D77",
        s2: "#2E4057",
        a1: "#DA4167",
        a2: "#2CA58D",
      },
    },
  },
  plugins: [],
};
