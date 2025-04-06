export const hexToRGBA = (hex, a) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export const darkenHexColor = (hex, percent) => {
  // Ensure the input is a valid hex color
  let color = hex.startsWith("#") ? hex.slice(1) : hex;

  // Convert 3-digit hex to 6-digit hex
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }

  // Convert hex to RGB
  const r = parseInt(color.slice(0, 2), 16);
  const g = parseInt(color.slice(2, 4), 16);
  const b = parseInt(color.slice(4, 6), 16);

  // Calculate the darker shade by reducing each color channel
  const darken = (channel) => Math.max(0, Math.min(255, Math.floor(channel * (1 - percent / 100))));

  // Create the new darkened RGB color
  const newR = darken(r);
  const newG = darken(g);
  const newB = darken(b);

  // Convert the RGB values back to hex
  const toHex = (channel) => channel.toString(16).padStart(2, "0");

  return `#${toHex(newR)}${toHex(newG)}${toHex(newB)}`;
};

export const pxToRem = (px, base = 16) => `${px / base}rem`;
export const pxToEm = (px, base = 16) => `${Math.round((base / px) * 100) / 100}em`;

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
