import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { letterSpacing = {} } = theme
  return createUtilitiesFromMap(
    letterSpacing,
    (value: string) => ({
      "letter-spacing": value,
    }),
    "tracking"
  )
}
