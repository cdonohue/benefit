import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { padding = {} } = theme
  return {
    ...createUtilitiesFromMap(
      padding,
      (value: string) => ({
        padding: value,
      }),
      "p"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value: string) => ({
        "padding-left": value,
        "padding-right": value,
      }),
      "px"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value: string) => ({
        "padding-top": value,
        "padding-bottom": value,
      }),
      "py"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value: string) => ({
        "padding-top": value,
      }),
      "pt"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value: string) => ({
        "padding-right": value,
      }),
      "pr"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value: string) => ({
        "padding-bottom": value,
      }),
      "pb"
    ),
    ...createUtilitiesFromMap(
      padding,
      (value: string) => ({
        "padding-left": value,
      }),
      "pl"
    ),
  }
}
