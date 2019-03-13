import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    ["right", "left", "none"],
    (value) => ({ float: value }),
    "float"
  )
}
