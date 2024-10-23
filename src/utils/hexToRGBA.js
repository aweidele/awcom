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
