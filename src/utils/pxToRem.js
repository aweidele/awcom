export const pxToRem = (px, base = 16) => `${px / base}rem`;
export const pxToEm = (px, base = 16) => `${Math.round((base / px) * 100) / 100}em`;
