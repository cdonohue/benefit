import createUtilitiesFromMap from "../createUtilitiesFromMap"

const backgroundRepeat = ["repeat", "no-repeat", "repeat-x", "repeat-y"]

export default function generate() {
  return createUtilitiesFromMap(
    backgroundRepeat,
    (value) => ({
      "background-repeat": value,
    }),
    "bg"
  )
}
