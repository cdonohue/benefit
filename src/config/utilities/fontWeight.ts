import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { fontWeight = {} } = theme
  return createUtilitiesFromMap(
    fontWeight,
    (value: string) => ({
      "font-weight": value,
    }),
    "font"
  )
}
