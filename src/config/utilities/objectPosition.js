import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.objectPosition,
    (value) => ({
      "object-position": value,
    }),
    "object"
  )
}
