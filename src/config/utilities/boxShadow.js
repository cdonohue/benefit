import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { boxShadow = {} } = theme
  return createUtilitiesFromMap(
    boxShadow,
    (value) => ({
      "box-shadow": value,
    }),
    "shadow"
  )
}
