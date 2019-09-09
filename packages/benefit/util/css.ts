import createHash from "./createHash"
import getProcessedRules from "./getProcessedRules"
import registry, { keys } from "./registry"

const benefitRegistry = registry.getInstance()

function createBenefitFragment(category: string, transformFn?: any) {
  return (strings: TemplateStringsArray, ...values: any[]) => {
    const styles = strings.map((str, i) => `${str}${values[i] || ""}`).join("")

    const hashId = `benefit-${category}-${createHash(styles)}`

    const scope = `${category === keys.CSS ? "." : ""}${hashId}`

    const styleDeclarations = transformFn ? transformFn(styles, hashId) : styles

    const processedStyles = getProcessedRules(scope, styleDeclarations)

    const registryEntry = { id: hashId, rules: processedStyles }

    benefitRegistry.add(category, registryEntry)

    return hashId
  }
}

export const preflight = createBenefitFragment(
  keys.PREFLIGHT,
  (styles: string) => `
    :global() {
      ${styles}
    }
  `
)

export const global = createBenefitFragment(
  keys.GLOBAL,
  (styles: string) => `
    :global() {
      ${styles}
    }
  `
)
export const keyframes = createBenefitFragment(
  keys.KEYFRAMES,
  (styles: string, hashId: string) => `
    @keyframes ${hashId} {
      ${styles}
    }
  `
)
export const css = createBenefitFragment(keys.CSS)
