import createUtility from "../createUtility"

export default function generate() {
  return {
    ...createUtility("self-auto", { "align-self": "auto" }),
    ...createUtility("self-start", { "align-self": "flex-start" }),
    ...createUtility("self-end", { "align-self": "flex-end" }),
    ...createUtility("self-center", { "align-self": "center" }),
    ...createUtility("self-stretch", { "align-self": "stretch" }),
  }
}
