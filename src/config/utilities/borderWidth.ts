import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { borderWidth = {} } = theme
  return {
    ...createUtilitiesFromMap(
      borderWidth,
      (value: string) => ({
        "border-width": value,
      }),
      "border"
    ),
    ...createUtilitiesFromMap(
      borderWidth,
      (value: string) => ({
        "border-top-width": value,
      }),
      "border-t"
    ),
    ...createUtilitiesFromMap(
      borderWidth,
      (value: string) => ({
        "border-right-width": value,
      }),
      "border-r"
    ),
    ...createUtilitiesFromMap(
      borderWidth,
      (value: string) => ({
        "border-bottom-width": value,
      }),
      "border-b"
    ),
    ...createUtilitiesFromMap(
      borderWidth,
      (value: string) => ({
        "border-left-width": value,
      }),
      "border-l"
    ),
  }
}
