import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.opacity,
    (value) => ({
      opacity: value,
    }),
    "opacity"
  )
}
