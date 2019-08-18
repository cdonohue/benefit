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
    ...createUtilitiesFromMap(displayVariants, (value: string) => ({
      display: value,
    })),
    hidden: { display: "none" },
  }
}
