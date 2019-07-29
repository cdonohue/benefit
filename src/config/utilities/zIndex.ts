import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { zIndex } = theme
  return createUtilitiesFromMap(
    zIndex,
    (value: string) => ({
      "z-index": value,
    }),
    "z"
  )
}
