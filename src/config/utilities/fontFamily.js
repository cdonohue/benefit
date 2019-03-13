import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.fontFamily,
    (value) => ({
      "font-family": value.join(","),
    }),
    "font"
  )
}
