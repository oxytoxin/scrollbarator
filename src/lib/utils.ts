export const generateTricolorCombination = () => {
  // Generate random hue values for each color
  const hue1 = Math.floor(Math.random() * 360);
  const hue2 = (hue1 + 120) % 360;
  const hue3 = (hue2 + 120) % 360;

  // Convert hue values to RGB
  const color1 = hslToHex(hue1, 50, 50);
  const color2 = hslToHex(hue2, 50, 50);
  const color3 = hslToHex(hue3, 50, 50);

  // Return the generated colors
  return [color1, color2, color3];
}
function hslToHex(h: number, s: number, l: number) {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hueToRgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  const toHex = (x: number) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}