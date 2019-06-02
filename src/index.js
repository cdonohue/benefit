import { css, cx } from "emotion"

import createUtilitiesFromConfig from "./initialization/createUtilitiesFromConfig"

export default function benefit(configFn) {
  const {
    config,
    cssForUtility,
    getDeclarationsForClasses,
    utilities,
  } = createUtilitiesFromConfig(configFn)

  const styleWith = (classNames = "", isImportant = false) => {
    const { declarations, ignoredClasses } = getDeclarationsForClasses(
      classNames,
      isImportant
    )

    return [
      ...declarations.map(
        (declaration) =>
          css`
            ${declaration}
          `
      ),
      ...ignoredClasses,
    ].join(" ")
  }

  return {
    config,
    cssForUtility,
    cx(...args) {
      const appliedClasses = cx(...args)
      const styledClasses = styleWith(appliedClasses)

      return cx(styledClasses)
    },
    getDeclarationsForClasses,
    styleWith,
    utilities,
  }
}
