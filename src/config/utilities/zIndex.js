import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.zIndex,
    (value) => ({
      "z-index": value,
    }),
    "z"
  )
}
