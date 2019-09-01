import initializeContainers from "./initializeContainers"
const isBrowser = typeof window !== "undefined"

function createStyleTag(
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

export default function insertStyle(type: any, entry: any, index: any) {
  if (isBrowser) {
    initializeContainers()
    if (type === "utilities") {
      const existingIndex = document.querySelector(
        `[data-benefit-index='${entry.index}']`
      )

      if (existingIndex) {
        existingIndex.remove()
      }

      const styleTag = createStyleTag(entry.id, entry.rules, {
        label: "utility",
        index: entry.index,
      })

      const addedStyles = document.querySelectorAll("[data-benefit-utility]")

      const container = document.getElementById("benefit-utilities")

      if (container) {
        container.insertBefore(styleTag, addedStyles[index])
      }
    } else {
      if (!document.getElementById(entry.id)) {
        const container = document.getElementById(`benefit-${type}`)
        if (container) {
          container.appendChild(createStyleTag(entry.id, entry.rules))
        }
      }
    }
  }
}
