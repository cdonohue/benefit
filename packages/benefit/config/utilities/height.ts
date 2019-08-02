import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { height = {}, maxHeight = {}, minHeight = {} } = theme
  return {
    ...createUtilitiesFromMap(
      height,
      (value: string) => ({
        height: value,
      }),
      "h"
    ),
    ...createUtilitiesFromMap(
      maxHeight,
      (value: string) => ({
        "max-height": value,
      }),
      "max-h"
    ),
    ...createUtilitiesFromMap(
      minHeight,
      (value: string) => ({
        "min-height": value,
      }),
      "min-h"
    ),
  }
}
