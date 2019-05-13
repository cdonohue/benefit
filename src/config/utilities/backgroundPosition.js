import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { backgroundPosition = {} } = theme
  return createUtilitiesFromMap(
    backgroundPosition,
    (value) => ({
      "background-position": value,
    }),
    "bg"
  )
}
