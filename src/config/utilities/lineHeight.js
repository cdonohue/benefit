import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { lineHeight = {} } = theme
  return createUtilitiesFromMap(
    lineHeight,
    (value) => ({
      "line-height": value,
    }),
    "leading"
  )
}
