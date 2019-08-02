import createStyleTag from "./createStyleTag"
import createHash from "./createHash"
import getProcessedRules from "./getProcessedRules"
import isBrowser from "./isBrowser"

export function createCss(config?: any) {
  return (strings: TemplateStringsArray, ...values: any[]) => {
    const processedValues = values.map((value) => {
      if (typeof value === "function") {
        return value(config)
      }

      return value
    })

    const styles = strings
      .map((str, i) => `${str}${processedValues[i] || ""}`)
      .join("")

    const hashId = `benefit-${createHash(styles)}`

    const processedStyles = getProcessedRules(`.${hashId}`, styles)

    if (isBrowser()) {
      // Check for duplicates
      if (!document.getElementById(hashId)) {
        document.head.appendChild(createStyleTag(hashId, processedStyles))
      }
    }

    return hashId
  }
}

const css = createCss()

export default css
