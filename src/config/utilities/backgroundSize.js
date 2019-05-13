import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { backgroundSize } = theme
  return createUtilitiesFromMap(
    backgroundSize,
    (value) => ({
      "background-size": value,
    }),
    "bg"
  )
}
