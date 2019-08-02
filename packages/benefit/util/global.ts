import createHash from "./createHash"
import getProcessedRules from "./getProcessedRules"

function createGlobalStyleTag(rule: string, id: string) {
  const styleTag = document.createElement("style")

  styleTag.setAttribute("id", id)
  styleTag.innerHTML = rule

  return styleTag
}

export default function global(
  strings: TemplateStringsArray,
  ...values: any[]
) {
  const isBrowser = typeof window !== "undefined"

  if (isBrowser) {
    const globalStyles = strings
      .map((str: string, i: number) => `${str}${values[i] || ""}`)
      .join("")

    const processedRules = getProcessedRules("", globalStyles)
    const identifier = `benefit-global-${createHash(processedRules)}`

    if (!document.getElementById(identifier)) {
      const styleTag = createGlobalStyleTag(processedRules, identifier)

      document.head.insertAdjacentElement("afterbegin", styleTag)
    }
  }
}
