import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { flex = {} } = theme
  return createUtilitiesFromMap(
    flex,
    (value) => ({
      flex: value,
    }),
    "flex"
  )
}
