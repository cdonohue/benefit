import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { flexGrow = {} } = theme
  return createUtilitiesFromMap(
    flexGrow,
    (value: string) => ({ "flex-grow": value }),
    "flex-grow"
  )
}
