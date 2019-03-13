import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return {
    ...createUtilitiesFromMap(
      theme.padding,
      (value) => ({
        padding: value,
      }),
      "p"
    ),
    ...createUtilitiesFromMap(
      theme.padding,
      (value) => ({
        "padding-left": value,
        "padding-right": value,
      }),
      "px"
    ),
    ...createUtilitiesFromMap(
      theme.padding,
      (value) => ({
        "padding-top": value,
        "padding-bottom": value,
      }),
      "py"
    ),
    ...createUtilitiesFromMap(
      theme.padding,
      (value) => ({
        "padding-top": value,
      }),
      "pt"
    ),
    ...createUtilitiesFromMap(
      theme.padding,
      (value) => ({
        "padding-right": value,
      }),
      "pr"
    ),
    ...createUtilitiesFromMap(
      theme.padding,
      (value) => ({
        "padding-bottom": value,
      }),
      "pb"
    ),
    ...createUtilitiesFromMap(
      theme.padding,
      (value) => ({
        "padding-left": value,
      }),
      "pl"
    ),
  }
}
