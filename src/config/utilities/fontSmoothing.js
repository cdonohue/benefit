export default function generate() {
  return {
    antialiased: {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "antialiased",
    },
    "subpixel-antialiased": {
      "-webkit-font-smoothing": "auto",
      "-moz-osx-font-smoothing": "auto",
    },
  }
}
