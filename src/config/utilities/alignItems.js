import createUtility from "../createUtility"

export default function generate() {
  return {
    ...createUtility("items-start", { "align-items": "flex-start" }),
    ...createUtility("items-end", { "align-items": "flex-end" }),
    ...createUtility("items-center", { "align-items": "center" }),
    ...createUtility("items-baseline", { "align-items": "baseline" }),
    ...createUtility("items-stretch", { "align-items": "stretch" }),
  }
}
