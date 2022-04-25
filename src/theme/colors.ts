import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
    primary: "#111f8c",
    primaryBright: "#111f8c",
    primaryDark: "#111f8c",
    secondary: "#1a1873",
    success: "#31D0AA",
    warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#f1f0f0",
  backgroundDisabled: "#E9EAEB",
  contrast: "#0b2b27",
  invertedContrast: "#FFFFFF",
  input: "#ebf4ea",
  tertiary: "#EFF4F5",
  text: "#1a1873",
  textDisabled: "#BDC2C4",
  textSubtle: "#1e5951",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #D4D9FF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#111f8c",
  background: "#343135",
  backgroundDisabled: "#2832a3",
  contrast: "#FFFFFF",
  invertedContrast: "#0d4039",
  input: "#D1A5041",
  primaryDark: "#D1A5041",
  tertiary: "#2832a3",
  text: "#FFFFFF",
  textDisabled: "#cccccc",
  textSubtle: "#c9c4d4",
  borderColor: "#2832a3",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #111f8c 0%, #213BA3 100%)",
  },
};
