import createUtilitiesFromMap from "../createUtilitiesFromMap"

const displayVariants = [
  "block",
  "inline-block",
  "inline",
  "table",
  "table-row",
  "table-cell",
  "flex",
  "inline-flex",
]

export default function generate() {
  return {
    ...createUtilitiesFromMap(displayVariants, (value) => ({
      display: value,
    })),
    hidden: { display: "none" },
  }
}
