import createUtility from "../createUtility"

export default function generate() {
  return {
    ...createUtility("content-start", { "align-content": "flex-start" }),
    ...createUtility("content-end", { "align-content": "flex-end" }),
    ...createUtility("content-center", { "align-content": "center" }),
    ...createUtility("content-between", { "align-content": "space-between" }),
    ...createUtility("content-around", { "align-content": "space-around" }),
  }
}
