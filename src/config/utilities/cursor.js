import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme = {}) {
  const { cursor = {} } = theme

  return {
    "cursor-default": {
      cursor: "default",
    },
    ...createUtilitiesFromMap(
      cursor,
      (value) => ({
        cursor: value,
      }),
      "cursor"
    ),
  }
}
