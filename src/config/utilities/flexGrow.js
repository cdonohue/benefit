import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return createUtilitiesFromMap(
    theme.flexGrow,
    (value) => ({ "flex-grow": value }),
    "flex-grow"
  )
}
