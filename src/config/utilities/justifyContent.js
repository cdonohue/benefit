import createUtility from "../createUtility"

export default function generate() {
  return {
    ...createUtility("justify-start", { "justify-content": "flex-start" }),
    ...createUtility("justify-end", { "justify-content": "flex-end" }),
    ...createUtility("justify-center", { "justify-content": "center" }),
    ...createUtility("justify-between", { "justify-content": "space-between" }),
    ...createUtility("justify-around", { "justify-content": "space-around" }),
  }
}
