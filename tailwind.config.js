/** @type {import('tailwindcss').Config} */

// import { splitFontSizes } from "./src/utils/fontsizes";
// import { pxToRem } from "./src/utils/pxToRem";
// import { hexToRGBA, darkenHexColor } from "./src/utils/hexToRGBA";

import { splitFontSizes, pxToRem, hexToRGBA, darkenHexColor } from "./utils/tailwind-utils";

const fontSizes = {
  xxs: [12, 12, 12],
  xs: [14, 14, 14],
  sm: [23, 14, 37],
  base: [29, 18, 46],
  lg: [37, 23, 58],
  xl: [47, 29, 72],
  "2xl": [60, 37, 91],
  "3xl": [76, 47, 114],
  reg: [16, 16, 24],
};

export const colors = {
  p: "#151E29",
  p2: "#F4843F",
  "p2-dk": "#F3772B",
  "p2-menu": "#C6530C",
  s: "#083D77",
  s2: "#2E4057",
  "s2-lt": "#d2e0f1",
  "s2-lt2": "#afbfd5",
  a1: "#DA4167",
  a2: "#2CA58D",
  white: "#F2F4F8",
  glight: "#ADC0D9",
};
//afbfd5

Object.keys(colors).forEach((key) => {
  const darkKey = `${key}-dk`;
  if (!colors.hasOwnProperty(darkKey)) {
    colors[darkKey] = darkenHexColor(colors[key], 30);
  }
});

// export const colorsDk = Object.keys(colors).map((key) );

const logosize = [69, 58];

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
        ...colors,
        "p-20": hexToRGBA(colors.p, 0.2),
        wt: hexToRGBA("#FFFFFF", 0),
        s2dk: darkenHexColor(colors.s2),
      },
      minHeight: {
        home: "calc(100vh - 64px)",
        100: pxToRem(400),
      },
      maxWidth: {
        c: pxToRem(1270),
        h: pxToRem(1536),
      },
      width: {
        logo: pxToRem(logosize[0]),
        "logo-m": pxToRem(logosize[0] * 0.6),
        42: pxToRem(60),
        84: pxToRem(90),
      },
      height: {
        logo: pxToRem(logosize[1]),
        "logo-m": pxToRem(logosize[1] * 0.6),
        42: pxToRem(60),
      },
      spacing: {
        42: pxToRem(60),
        logo: "85.5%",
        "04em": "0.4em",
      },
      keyframes: {
        menuOpenTop: {
          "0%": { transform: "rotate(0deg) translateY(-12px)" },
          "50%": { transform: "rotate(0deg) translateY(0)" },
          "100%": { transform: "rotate(45deg) translateY(0)" },
        },
        menuOpenBottom: {
          "0%": { transform: "rotate(0deg) translateY(12px)" },
          "50%": { transform: "rotate(0deg) translateY(0)" },
          "100%": { transform: "rotate(-45deg) translateY(0)" },
        },
      },
      animation: {
        menuOpenTop: "menuOpenTop 3s ease-in-out",
        menuOpenBottom: "menuOpenBottom 3s ease-in-out",
        menuCloseTop: "menuOpenTop 3s ease-in-out reverse",
        menuCloseBottom: "menuOpenBottom 3s ease-in-out reverse",
      },
      gridTemplateRows: {
        timeline: `auto ${14 / 16}rem auto`,
      },
      gridTemplateColumns: {
        timeline: `auto ${14 / 16}rem auto`,
      },
      skew: {
        tl: "45deg",
      },
      screens: { xs: "321px", desktopXl: "1440px" },
    },
  },
  plugins: [],
};
