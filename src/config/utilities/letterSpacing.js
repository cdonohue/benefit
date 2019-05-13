import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { letterSpacing = {} } = theme
  return createUtilitiesFromMap(
    letterSpacing,
    (value) => ({
      "letter-spacing": value,
    }),
    "tracking"
  )
}
