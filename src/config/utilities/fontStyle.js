import createUtility from "../createUtility"

export default function generate() {
  return {
    ...createUtility("italic", {
      "font-style": "italic",
    }),
    ...createUtility("not-italic", {
      "font-style": "normal",
    }),
  }
}
