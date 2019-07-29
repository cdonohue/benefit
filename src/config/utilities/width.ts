import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { width = {}, maxWidth = {}, minWidth = {} } = theme
  return {
    ...createUtilitiesFromMap(
      width,
      (value: string) => ({
        width: value,
      }),
      "w"
    ),
    ...createUtilitiesFromMap(
      maxWidth,
      (value: string) => ({
        "max-width": value,
      }),
      "max-w"
    ),
    ...createUtilitiesFromMap(
      minWidth,
      (value: string) => ({
        "min-width": value,
      }),
      "min-w"
    ),
  }
}
