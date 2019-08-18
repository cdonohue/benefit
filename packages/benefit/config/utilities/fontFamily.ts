import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { fontFamily = {} } = theme
  return createUtilitiesFromMap(
    fontFamily,
    (value: string[]) => ({
      "font-family": value.join(","),
    }),
    "font"
  )
}
