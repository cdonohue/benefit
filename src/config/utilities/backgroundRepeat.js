import createUtilitiesFromMap from "../createUtilitiesFromMap"

const backgroundRepeat = [
  "repeat",
  "no-repeat",
  "repeat-x",
  "repeat-y",
  "space",
  "round",
]

export default function generate() {
  return createUtilitiesFromMap(
    backgroundRepeat,
    (value) => ({
      "background-repeat": value,
    }),
    "bg"
  )
}
