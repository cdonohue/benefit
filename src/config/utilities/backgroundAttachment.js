import createUtilitiesFromMap from "../createUtilitiesFromMap"

const backgroundAttachment = ["fixed", "local", "scroll"]

export default function generate() {
  return createUtilitiesFromMap(
    backgroundAttachment,
    (value) => ({
      "background-attachment": value,
    }),
    "bg"
  )
}
