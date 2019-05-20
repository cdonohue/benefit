import createUtilitiesFromMap from "../createUtilitiesFromMap"

const backgroundRepeat = {
  repeat: "repeat",
  "repeat-round": "round",
  "repeat-space": "space",
  "no-repeat": "no-repeat",
  "repeat-x": "repeat-x",
  "repeat-y": "repeat-y",
  space: "space",
  round: "round",
}

export default function generate() {
  return createUtilitiesFromMap(
    backgroundRepeat,
    (value) => ({
      "background-repeat": value,
    }),
    "bg"
  )
}
