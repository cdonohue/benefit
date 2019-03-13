import createUtility from "../createUtility"

export default function generate() {
  return {
    ...createUtility("flex-wrap", { "flex-wrap": "wrap" }),
    ...createUtility("flex-wrap-reverse", { "flex-wrap": "wrap-reverse" }),
    ...createUtility("flex-no-wrap", { "flex-wrap": "nowrap" }),
  }
}
