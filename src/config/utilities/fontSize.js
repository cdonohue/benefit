import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.fontSize,
    (value) => ({ "font-size": value }),
    "text"
  )
}
