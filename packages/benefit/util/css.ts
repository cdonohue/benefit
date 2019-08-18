import createStyleTag from "./createStyleTag"
import createHash from "./createHash"
import getProcessedRules from "./getProcessedRules"
import isBrowser from "./isBrowser"
import initializeContainers from "./initializeContainers"

function createCss(isGlobal: boolean = false, isKeyframes: boolean = false) {
  return (strings: TemplateStringsArray, ...values: any[]) => {
    const styles = strings.map((str, i) => `${str}${values[i] || ""}`).join("")

    const label = isGlobal ? "global" : isKeyframes ? "keyframes" : "css"

    const hashId = `benefit-${label}-${createHash(styles)}`

    // Wrap with keyframes
    const addsKeyframes = isKeyframes
      ? `
      @keyframes ${hashId} {
        ${styles}
      }
    `
      : styles

    // Wrap with global
    const addsGlobal = isGlobal
      ? `
      :global() {
        ${addsKeyframes}
      }
    `
      : addsKeyframes

    const scope = `${!(isGlobal || isKeyframes) ? "." : ""}${hashId}`

    const processedStyles = getProcessedRules(scope, addsGlobal)

    initializeContainers()

    if (isBrowser()) {
      // Check for duplicates
      if (!document.getElementById(hashId)) {
        const container = document.getElementById(`benefit-${label}`)
        if (container) {
          container.appendChild(createStyleTag(hashId, processedStyles))
        }
      }
    }

    return hashId
  }
}

export const css = createCss()

export const global = createCss(true)

export const keyframes = createCss(false, true)
