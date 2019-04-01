import createUtilitiesFromMap from "../createUtilitiesFromMap"

export default function generate(theme) {
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
      (value) => ({ float: value }),
      "float"
    ),
  }
}
