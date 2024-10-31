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

export const nl2br = (str, is_xhtml) => {
  if (typeof str === "undefined" || str === null) {
    return "";
  }
  var breakTag = is_xhtml || typeof is_xhtml === "undefined" ? "<br />" : "<br>";
  return (str + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + breakTag + "$2");
};

export const nl2p = (string) =>
  string
    .split(/\r?\n/)
    .map((paragraph) => (paragraph ? `<p>${paragraph}</p>` : ""))
    .join("");

export const nl2array = (string) => string.split(/\r?\n/).filter((p) => !/^\s*$/.test(p));
