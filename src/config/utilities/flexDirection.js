import createUtility from "../createUtility"

export default function generate() {
  return {
    ...createUtility("flex-row", { "flex-direction": "row" }),
    ...createUtility("flex-row-reverse", { "flex-direction": "row-reverse" }),
    ...createUtility("flex-col", { "flex-direction": "column" }),
    ...createUtility("flex-col-reverse", {
      "flex-direction": "column-reverse",
    }),
  }
}
