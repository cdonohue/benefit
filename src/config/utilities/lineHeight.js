import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.lineHeight,
    (value) => ({
      "line-height": value,
    }),
    "leading"
  )
}
