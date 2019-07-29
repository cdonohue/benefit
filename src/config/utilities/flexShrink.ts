import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { flexShrink = {} } = theme
  return createUtilitiesFromMap(
    flexShrink,
    (value: string) => ({ "flex-shrink": value }),
    "flex-shrink"
  )
}
