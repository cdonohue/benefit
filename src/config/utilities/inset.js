import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
  return {
    ...createUtilitiesFromMap(
      theme.inset,
      (value) => ({
        top: value,
        right: value,
        bottom: value,
        left: value,
      }),
      "inset"
    ),
    ...createUtilitiesFromMap(
      theme.inset,
      (value) => ({
        right: value,
        left: value,
      }),
      "inset-x"
    ),
    ...createUtilitiesFromMap(
      theme.inset,
      (value) => ({
        top: value,
        bottom: value,
      }),
      "inset-y"
    ),
    ...createUtilitiesFromMap(
      theme.inset,
      (value) => ({
        top: value,
      }),
      "top"
    ),
    ...createUtilitiesFromMap(
      theme.inset,
      (value) => ({
        right: value,
      }),
      "right"
    ),
    ...createUtilitiesFromMap(
      theme.inset,
      (value) => ({
        bottom: value,
      }),
      "bottom"
    ),
    ...createUtilitiesFromMap(
      theme.inset,
      (value) => ({
        left: value,
      }),
      "left"
    ),
  }
}
