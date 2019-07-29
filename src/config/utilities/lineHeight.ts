import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { lineHeight = {} } = theme
  return createUtilitiesFromMap(
    lineHeight,
    (value: string) => ({
      "line-height": value,
    }),
    "leading"
  )
}
