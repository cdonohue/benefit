import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { padding = {} } = theme
  return {
    ...createUtilitiesFromMap(
      padding,
      (value) => ({
        padding: value,
      }),
      "p"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value) => ({
        "padding-left": value,
        "padding-right": value,
      }),
      "px"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value) => ({
        "padding-top": value,
        "padding-bottom": value,
      }),
      "py"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value) => ({
        "padding-top": value,
      }),
      "pt"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value) => ({
        "padding-right": value,
      }),
      "pr"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value) => ({
        "padding-bottom": value,
      }),
      "pb"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value) => ({
        "padding-left": value,
      }),
      "pl"
    ),
  }
}
