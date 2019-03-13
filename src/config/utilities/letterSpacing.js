import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.letterSpacing,
    (value) => ({
      "letter-spacing": value,
    }),
    "tracking"
  )
}
