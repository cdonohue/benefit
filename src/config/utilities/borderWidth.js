import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return {
    ...createUtilitiesFromMap(
      theme.borderWidth,
      (value) => ({
        "border-width": value,
      }),
      "border"
    ),
    ...createUtilitiesFromMap(
      theme.borderWidth,
      (value) => ({
        "border-top-width": value,
      }),
      "border-t"
    ),
    ...createUtilitiesFromMap(
      theme.borderWidth,
      (value) => ({
        "border-right-width": value,
      }),
      "border-r"
    ),
    ...createUtilitiesFromMap(
      theme.borderWidth,
      (value) => ({
        "border-bottom-width": value,
      }),
      "border-b"
    ),
    ...createUtilitiesFromMap(
      theme.borderWidth,
      (value) => ({
        "border-left-width": value,
      }),
      "border-l"
    ),
  }
}
