import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { borderWidth = {} } = theme
  return {
    ...createUtilitiesFromMap(
      borderWidth,
      (value) => ({
        "border-width": value,
      }),
      "border"
    ),
    ...createUtilitiesFromMap(
      borderWidth,
      (value) => ({
        "border-top-width": value,
      }),
      "border-t"
    ),
    ...createUtilitiesFromMap(
      borderWidth,
      (value) => ({
        "border-right-width": value,
      }),
      "border-r"
    ),
    ...createUtilitiesFromMap(
      borderWidth,
      (value) => ({
        "border-bottom-width": value,
      }),
      "border-b"
    ),
    ...createUtilitiesFromMap(
      borderWidth,
      (value) => ({
        "border-left-width": value,
      }),
      "border-l"
    ),
  }
}
