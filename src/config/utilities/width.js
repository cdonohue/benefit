import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { width = {}, maxWidth = {}, minWidth = {} } = theme
  return {
    ...createUtilitiesFromMap(
      width,
      (value) => ({
        width: value,
      }),
      "w"
    ),
    ...createUtilitiesFromMap(
      maxWidth,
      (value) => ({
        "max-width": value,
      }),
      "max-w"
    ),
    ...createUtilitiesFromMap(
      minWidth,
      (value) => ({
        "min-width": value,
      }),
      "min-w"
    ),
  }
}
