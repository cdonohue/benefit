import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { flexShrink = {} } = theme
  return createUtilitiesFromMap(
    flexShrink,
    (value) => ({ "flex-shrink": value }),
    "flex-shrink"
  )
}
