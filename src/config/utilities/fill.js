import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.fill,
    (value) => ({ fill: value }),
    "fill"
  )
}
