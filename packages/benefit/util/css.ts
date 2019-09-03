import createHash from "./createHash"
import getProcessedRules from "./getProcessedRules"
import registry from "./registry"

const benefitRegistry = registry.getInstance()

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

    const registryEntry = { id: hashId, rules: processedStyles }

    benefitRegistry.add(label, registryEntry)

    return hashId
  }
}

export const css = createCss()

export const injectGlobal = createCss(true)

export const keyframes = createCss(false, true)
