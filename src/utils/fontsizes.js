import { pxToRem, pxToEm } from "./pxToRem";

export const splitFontSizes = (fontsizes) => {
  const sizes = {};
  const sizesM = {};
  const lineheights = {};

  Object.entries(fontsizes).forEach(([key, value]) => {
    sizes[key] = pxToRem(value[0]);
    sizesM[`${key}-m`] = pxToRem(value[1]);
    lineheights[key] = pxToEm(value[0], value[2]);
  });

  return { sizes, sizesM, lineheights };
};
