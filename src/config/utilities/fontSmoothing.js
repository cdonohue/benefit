import createUtility from "../createUtility"

export default function generate() {
  return {
    ...createUtility("antialiased", {
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "antialiased",
    }),
    ...createUtility("subpixel-antialiased", {
      "-webkit-font-smoothing": "auto",
      "-moz-osx-font-smoothing": "auto",
    }),
  }
}
