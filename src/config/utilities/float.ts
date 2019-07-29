import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate() {
  return {
    clearfix: {
      "&::after": {
        content: "''",
        display: "table",
        clear: "both",
      },
    },
    ...createUtilitiesFromMap(
      ["right", "left", "none"],
      (value: string) => ({ float: value }),
      "float"
    ),
  }
}
