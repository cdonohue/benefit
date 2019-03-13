import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return {
    ...createUtilitiesFromMap(
      theme.height,
      (value) => ({
        height: value,
      }),
      "h"
    ),
    ...createUtilitiesFromMap(
      theme.maxHeight,
      (value) => ({
        height: value,
      }),
      "max-h"
    ),
    ...createUtilitiesFromMap(
      theme.minHeight,
      (value) => ({
        height: value,
      }),
      "min-h"
    ),
  }
}
