import defaultConfig from "./config/defaultConfig"
import createUtilityMap from "./util/createUtilityMap"
import createVariantMap from "./util/createVariantMap"
import parseDeclarations from "./util/parseDeclarations"
import getProcessedRules from "./util/getProcessedRules"
import createHash from "./util/createHash"

import createCache from "./util/createCache"

function createStyleTag(className: string, rule: string) {
  const styleTag = document.createElement("style")

  styleTag.dataset.benefit = className
  styleTag.innerHTML = rule

  return styleTag
}

interface Options {
  prefix?: string
  theme?: { [key: string]: any }
  normalize?: (theme?: { [key: string]: any }) => { [key: string]: any }
  utilities?: Array<(theme?: { [key: string]: any }) => { [key: string]: any }>
  variants?: any
  apply?: any
}

export default function createBenefit(
  configFn: (defaultConfig?: Options) => Options = () => defaultConfig
) {
  const isBrowser = typeof window !== "undefined"
  // const isDevMode = process.env.NODE_ENV === "development"
  const config = configFn(defaultConfig)

  const {
    prefix = "",
    theme = {},
    utilities = [],
    variants = [],
    apply = {},
  } = config

  const generatedUtilities: any = createUtilityMap(utilities, theme)

  const generatedVariants: any = createVariantMap(
    variants,
    generatedUtilities,
    theme
  )

  const prefixStr = prefix ? `${prefix}-` : ""

  const utilityClasses: any = {}
  Object.keys(generatedUtilities).forEach(
    (key) => (utilityClasses[`${prefixStr}${key}`] = generatedUtilities[key])
  )
  Object.keys(generatedVariants).forEach(
    (key) => (utilityClasses[`${prefixStr}${key}`] = generatedVariants[key])
  )

  const cssForUtility = (className: string, isImportant: boolean = false) =>
    parseDeclarations(utilityClasses[className], isImportant).join(" ")

  // Not actually sorted, but we rely on the key order
  const sortedUtilityClasses = Object.keys(utilityClasses).reduce(
    (map: any, key, i) => {
      map[key] = i
      return map
    },
    {}
  )

  let cache: any

  if (isBrowser) {
    let container = document.querySelector("[data-benefit-container]")
    if (!container) {
      container = document.createElement("div")
      container.setAttribute("data-benefit-container", "")
      document.head.appendChild(container)
    }

    const preloadedUtilities =
      process.env.NODE_ENV === "development"
        ? Object.keys(utilityClasses).map((className) => {
            return {
              index: Object.keys(sortedUtilityClasses[className]),
              className,
              rules: parseDeclarations(utilityClasses[className]).join(""),
            }
          })
        : []

    cache = createCache(preloadedUtilities)
    // DEV ENVIRONMENT
    if (process.env.NODE_ENV === "development") {
      const fragment = document.createDocumentFragment()

      cache.getUtilities().forEach((u: any) => {
        const utilityStyle = createStyleTag(
          u.className,
          getProcessedRules(`.${u.className}`, u.rules)
        )
        fragment.appendChild(utilityStyle)
      })

      container.appendChild(fragment)
    }
  }

  const getDeclarationsForClasses = (
    classNames: string = "",
    isImportant: boolean,
    css: string
  ) => {
    const activeApply = classNames.split(" ").filter((name) => apply[name])

    const classList = classNames
      .split(" ")
      .map((className) => className.trim())
      .filter(Boolean)
      .sort((a, b) => sortedUtilityClasses[a] - sortedUtilityClasses[b])

    for (let i = 0; i < activeApply.length; i++) {
      const applyClasses = apply[activeApply[i]]
      Array.prototype.push.apply(classList, applyClasses)
    }

    const ignoredClasses = []
    const activeDeclarations = []

    for (let i = 0; i < classList.length; i++) {
      const className = classList[i]

      if (utilityClasses[className]) {
        activeDeclarations.push({
          index: Object.keys(sortedUtilityClasses[className]),
          className,
          rules: parseDeclarations(utilityClasses[className], isImportant).join(
            ""
          ),
        })
      } else {
        ignoredClasses.push(className)
      }
    }

    let localSelector

    if (css) {
      const rules = css

      localSelector = `benefit-${createHash(rules)}`

      // Ensure it's always appended to the end
      activeDeclarations.push({
        index: Infinity,
        className: localSelector,
        rules,
      })
    }

    return {
      declarations: activeDeclarations,
      localSelector,
      ignoredClasses,
    }
  }

  const styleWith = (
    classNames: string = "",
    options: {
      isImportant?: boolean
      css: string
    }
  ): string => {
    const { isImportant = false, css = "" } = options

    const { declarations, localSelector } = getDeclarationsForClasses(
      classNames,
      isImportant,
      css
    )

    declarations.forEach((declaration) => {
      if (isBrowser) {
        const newUtilityIndex = cache.addUtility(declaration)
        const existingStyle = document.querySelector(
          `[data-benefit=${declaration.className}]`
        )

        if (newUtilityIndex > -1 && !existingStyle) {
          const stylesheetRule = getProcessedRules(
            `.${declaration.className}`,
            declaration.rules
          )

          const styleTag = createStyleTag(declaration.className, stylesheetRule)

          const addedStyles = document.querySelectorAll("[data-benefit]")
          const container = document.querySelector("[data-benefit-container]")

          if (container) {
            container.insertBefore(styleTag, addedStyles[newUtilityIndex])
          }
        }
      }
    })

    const localClassName = localSelector ? `${localSelector}` : ""

    return `${classNames} ${localClassName}`.trim()
  }

  return {
    config,
    cssForUtility,
    getDeclarationsForClasses,
    styleWith,
    utilities: utilityClasses,
  }
}
