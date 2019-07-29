import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme: any) {
  const { cursor = {} } = theme

  return {
    "cursor-default": {
      cursor: "default",
    },
    ...createUtilitiesFromMap(
      cursor,
      (value: string) => ({
        cursor: value,
      }),
      "cursor"
    ),
  }
}
