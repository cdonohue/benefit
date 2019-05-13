import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { opacity = {} } = theme
  return createUtilitiesFromMap(
    opacity,
    (value) => ({
      opacity: value,
    }),
    "opacity"
  )
}
