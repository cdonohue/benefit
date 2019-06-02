import { css, cx } from "emotion"

import createUtilitiesFromConfig from "./initialization/createUtilitiesFromConfig"

export default function benefit(config) {
  return createUtilitiesFromConfig(config, {
    processDeclarationFn: (declaration) => css`
      ${declaration}
    `,
    cxFn: (styleWith, ...args) => {
      const appliedClasses = cx(...args)
      const styledClasses = styleWith(appliedClasses)

      return cx(styledClasses)
    },
  })
}
