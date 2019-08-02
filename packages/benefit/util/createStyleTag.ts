export default function createStyleTag(
  id: string,
  rules: string,
  options: { label?: string; index?: string } = {}
) {
  const { label = "", index = "" } = options

  const styleTag = document.createElement("style")

  styleTag.setAttribute("id", id)
  styleTag.setAttribute(`data-benefit${label ? `-${label}` : ""}`, "")
  if (index) {
    styleTag.setAttribute("data-benefit-index", index)
  }

  styleTag.innerHTML = rules

  return styleTag
}
