import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { zIndex } = theme
  return createUtilitiesFromMap(
    zIndex,
    (value) => ({
      "z-index": value,
    }),
    "z"
  )
}
