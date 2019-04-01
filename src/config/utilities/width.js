import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return {
    ...createUtilitiesFromMap(
      theme.width,
      (value) => ({
        width: value,
      }),
      "w"
    ),
    ...createUtilitiesFromMap(
      theme.maxWidth,
      (value) => ({
        "max-width": value,
      }),
      "max-w"
    ),
    ...createUtilitiesFromMap(
      theme.minWidth,
      (value) => ({
        "min-width": value,
      }),
      "min-w"
    ),
  }
}
