import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { fontSize = {} } = theme
  return createUtilitiesFromMap(
    fontSize,
    (value) => ({ "font-size": value }),
    "text"
  )
}
