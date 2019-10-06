import createHash from "./createHash"
import getProcessedRules from "./getProcessedRules"
import registry, { keys } from "./registry"
import { generatePreflightStyles } from "./preflight"

const benefitRegistry = registry.getInstance()

function createBenefitFragment(
  category: string,
  styles: string,
  transformFn?: any
) {
  const hashId = `benefit-${category}-${createHash(styles)}`
  const scope = `${
    [keys.CSS, keys.NORMALIZE].indexOf(category) > -1 ? "." : ""
  }${hashId}`
  const styleDeclarations = transformFn ? transformFn(styles, hashId) : styles
  const processedStyles = getProcessedRules(scope, styleDeclarations)
  const registryEntry = { id: hashId, rules: processedStyles }

  benefitRegistry.add(category, registryEntry)

  return hashId
}

function processCss(category: string, transformFn?: any) {
  return (strings: TemplateStringsArray, ...values: any[]) => {
    const styles = strings.map((str, i) => `${str}${values[i] || ""}`).join("")
    return createBenefitFragment(category, styles, transformFn)
  }
}

export function injectPreflight(selector: string = "") {
  createBenefitFragment(
    keys.PREFLIGHT,
    generatePreflightStyles(selector),
    (styles: string) => `
      :global() {
        ${styles}
      }
    `
  )
}

export const injectGlobal = processCss(
  keys.GLOBAL,
  (styles: string) => `
    :global() {
      ${styles}
    }
  `
)
export const keyframes = processCss(
  keys.KEYFRAMES,
  (styles: string, hashId: string) => `
    @keyframes ${hashId} {
      ${styles}
    }
  `
)

export const injectNormalize = processCss(keys.NORMALIZE)

export const css = processCss(keys.CSS)
