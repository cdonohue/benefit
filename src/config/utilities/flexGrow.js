import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { flexGrow = {} } = theme
  return createUtilitiesFromMap(
    flexGrow,
    (value) => ({ "flex-grow": value }),
    "flex-grow"
  )
}
