import getPreflightStyles from "./getPreflightStyles"
import initializeContainers from "./initializeContainers"
import isBrowser from "./isBrowser"
import { injectGlobal } from "./css"

export default function injectPreflight() {
  if (isBrowser()) {
    initializeContainers()

    injectGlobal`
      ${getPreflightStyles()}
    `
  }
}
