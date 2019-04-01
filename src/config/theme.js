export const colors = {
  transparent: "transparent",

  black: "#22292f",
  white: "#ffffff",

  "cool-gray": {
    900: "#29343D",
    800: "#3B4653",
    700: "#4D5A68",
    600: "#62717F",
    500: "#7B8997",
    400: "#96A2AF",
    300: "#B3BDC7",
    200: "#D4DAE1",
    100: "#F6F8FA",
  },

  "warm-gray": {
    900: "#3D3D3D",
    800: "#525252",
    700: "#686868",
    600: "#7F7F7F",
    500: "#969696",
    400: "#AEAEAE",
    300: "#C7C7C7",
    200: "#E0E0E0",
    100: "#FAFAFA",
  },

  red: {
    100: "#fff5f5",
    200: "#fed7d7",
    300: "#feb2b2",
    400: "#fc8181",
    500: "#f56565",
    600: "#e53e3e",
    700: "#c53030",
    800: "#9b2c2c",
    900: "#742a2a",
  },
  orange: {
    100: "#fffaf0",
    200: "#feebc8",
    300: "#fbd38d",
    400: "#f6ad55",
    500: "#ed8936",
    600: "#dd6b20",
    700: "#c05621",
    800: "#9c4221",
    900: "#7b341e",
  },
  yellow: {
    100: "#fffff0",
    200: "#fefcbf",
    300: "#faf089",
    400: "#f6e05e",
    500: "#ecc94b",
    600: "#d69e2e",
    700: "#b7791f",
    800: "#975a16",
    900: "#744210",
  },
  green: {
    100: "#f0fff4",
    200: "#c6f6d5",
    300: "#9ae6b4",
    400: "#68d391",
    500: "#48bb78",
    600: "#38a169",
    700: "#2f855a",
    800: "#276749",
    900: "#22543d",
  },
  teal: {
    100: "#e6fffa",
    200: "#b2f5ea",
    300: "#81e6d9",
    400: "#4fd1c5",
    500: "#38b2ac",
    600: "#319795",
    700: "#2c7a7b",
    800: "#285e61",
    900: "#234e52",
  },
  blue: {
    100: "#ebf8ff",
    200: "#bee3f8",
    300: "#90cdf4",
    400: "#63b3ed",
    500: "#4299e1",
    600: "#3182ce",
    700: "#2b6cb0",
    800: "#2c5282",
    900: "#2a4365",
  },
  indigo: {
    100: "#ebf4ff",
    200: "#c3dafe",
    300: "#a3bffa",
    400: "#7f9cf5",
    500: "#667eea",
    600: "#5a67d8",
    700: "#4c51bf",
    800: "#434190",
    900: "#3c366b",
  },
  purple: {
    100: "#faf5ff",
    200: "#e9d8fd",
    300: "#d6bcfa",
    400: "#b794f4",
    500: "#9f7aea",
    600: "#805ad5",
    700: "#6b46c1",
    800: "#553c9a",
    900: "#44337a",
  },
  pink: {
    100: "#fff5f7",
    200: "#fed7e2",
    300: "#fbb6ce",
    400: "#f687b3",
    500: "#ed64a6",
    600: "#d53f8c",
    700: "#b83280",
    800: "#97266d",
    900: "#702459",
  },
}

export const spacing = {
  px: "1px",
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "8": "2rem",
  "10": "2.5rem",
  "12": "3rem",
  "16": "4rem",
  "20": "5rem",
  "24": "6rem",
  "32": "8rem",
  "40": "10rem",
  "48": "12rem",
  "56": "14rem",
  "64": "16rem",
}

export const screens = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}

export const fontFamily = {
  sans: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    '"Noto Sans"',
    "sans-serif",
    "'Apple Color Emoji'",
    "'Segoe UI Emoji'",
    "'Segoe UI Symbol'",
    "'Noto Color Emoji'",
  ],
  serif: ["Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
  mono: [
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    '"Liberation Mono"',
    '"Courier New"',
    "monospace",
  ],
}

export const fontSize = {
  tiny: ".512rem",
  xs: ".64rem",
  sm: ".8rem",
  base: "1rem",
  lg: "1.25rem",
  xl: "1.5625rem",
  "2xl": "1.953125rem",
  "3xl": "2.44140625rem",
  "4xl": "3.051757812rem",
}

export const fontWeight = {
  hairline: 100,
  thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
}

export const lineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
}

export const letterSpacing = {
  tighter: "-.05em",
  tight: "-.025em",
  normal: "0",
  wide: ".025em",
  wider: ".05em",
  widest: ".1em",
}

export const textColor = { ...colors, gray: colors["cool-gray"] }

export const backgroundColor = { ...colors, gray: colors["cool-gray"] }

export const backgroundPosition = {
  bottom: "bottom",
  center: "center",
  left: "left",
  "left-bottom": "left bottom",
  "left-top": "left top",
  right: "right",
  "right-bottom": "right bottom",
  "right-top": "right top",
  top: "top",
}

export const backgroundSize = {
  auto: "auto",
  cover: "cover",
  contain: "contain",
}

export const borderWidth = {
  default: "1px",
  "0": "0",
  "2": "2px",
  "4": "4px",
  "8": "8px",
}

export const borderColor = {
  ...colors,
  gray: colors["cool-gray"],
  default: colors["cool-gray"]["200"],
}

export const borderRadius = {
  none: "0",
  sm: ".125rem",
  default: ".25rem",
  lg: ".5rem",
  full: "9999px",
}

export const cursor = {
  auto: "auto",
  default: "default",
  pointer: "pointer",
  wait: "wait",
  move: "move",
  "not-allowed": "not-allowed",
  help: "help",
  "context-menu": "context-menu",
  text: "text",
  alias: "alias",
  copy: "copy",
  grab: "grab",
  grabbing: "grabbing",
}

export const width = {
  auto: "auto",
  ...spacing,
  "1/2": "50%",
  "1/3": "33.33333%",
  "2/3": "66.66667%",
  "1/4": "25%",
  "3/4": "75%",
  "1/5": "20%",
  "2/5": "40%",
  "3/5": "60%",
  "4/5": "80%",
  "1/6": "16.66667%",
  "5/6": "83.33333%",
  full: "100%",
  screen: "100vw",
}

export const height = {
  auto: "auto",
  ...spacing,
  full: "100%",
  screen: "100vh",
}

export const minWidth = {
  "0": "0",
  full: "100%",
}

export const minHeight = {
  "0": "0",
  full: "100%",
  screen: "100vh",
}

export const maxWidth = {
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "7xl": "72rem",
  "8xl": "80rem",
  "9xl": "90rem",
  full: "100%",
  screen: "100vw",
}

export const maxHeight = {
  full: "100%",
  screen: "100vh",
}

export const padding = {
  ...spacing,
}

export const margin = {
  auto: "auto",
  ...spacing,
}

export const negativeMargin = {
  ...spacing,
}

export const objectPosition = {
  bottom: "bottom",
  center: "center",
  left: "left",
  "left-bottom": "left bottom",
  "left-top": "left top",
  right: "right",
  "right-bottom": "right bottom",
  "right-top": "right top",
  top: "top",
}

export const boxShadow = {
  default: "0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, .25)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  outline: "0 0 0 3px rgba(66,153,225,0.5)",
  none: "none",
}

export const zIndex = {
  auto: "auto",
  "0": 0,
  "10": 10,
  "20": 20,
  "30": 30,
  "40": 40,
  "50": 50,
}

export const opacity = {
  "0": "0",
  "25": ".25",
  "50": ".5",
  "75": ".75",
  "100": "1",
}

export const fill = {
  current: "currentColor",
}

export const stroke = {
  current: "currentColor",
}

export const gridGap = {
  ...spacing,
}

export const gridColumns = {}

export const gridRows = {}

export const flex = {
  "1": "1 1 0%",
  auto: "1 1 auto",
  initial: "0 1 auto",
  none: "none",
}

export const flexGrow = {
  "0": 0,
  default: 1,
}

export const flexShrink = {
  "0": 0,
  default: 1,
}

export const listStyleType = {
  none: "none",
  circle: "circle",
  disc: "disc",
  decimal: "decimal",
  square: "square",
}

export const inset = {
  "0": 0,
  auto: "auto",
}

export default {
  colors,
  spacing,
  screens,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textColor,
  backgroundColor,
  backgroundPosition,
  backgroundSize,
  borderWidth,
  borderColor,
  borderRadius,
  cursor,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  padding,
  margin,
  negativeMargin,
  objectPosition,
  boxShadow,
  zIndex,
  opacity,
  fill,
  stroke,
  flex,
  flexGrow,
  flexShrink,
  listStyleType,
  inset,
}
