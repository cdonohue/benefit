import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { objectPosition = {} } = theme
  return createUtilitiesFromMap(
    objectPosition,
    (value) => ({
      "object-position": value,
    }),
    "object"
  )
}
