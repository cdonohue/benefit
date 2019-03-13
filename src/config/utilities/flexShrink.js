import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.flexShrink,
    (value) => ({ "flex-shrink": value }),
    "flex-shrink"
  )
}
