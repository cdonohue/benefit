import isBrowser from "./isBrowser"

export default function initializeContainers(): void {
  if (isBrowser()) {
    let benefitContainer = document.getElementById("benefit-container")
    let globalContainer = document.getElementById("benefit-global")
    let keyframesContainer = document.getElementById("benefit-keyframes")
    let utilityContainer = document.getElementById("benefit-utilities")
    let cssContainer = document.getElementById("benefit-css")

    if (!benefitContainer) {
      benefitContainer = document.createElement("div")
      benefitContainer.setAttribute("id", "benefit-container")
      document.head.appendChild(benefitContainer)
    }

    if (!globalContainer) {
      globalContainer = document.createElement("div")
      globalContainer.setAttribute("id", "benefit-global")
      benefitContainer.appendChild(globalContainer)
    }

    if (!keyframesContainer) {
      keyframesContainer = document.createElement("div")
      keyframesContainer.setAttribute("id", "benefit-keyframes")
      benefitContainer.appendChild(keyframesContainer)
    }

    if (!utilityContainer) {
      utilityContainer = document.createElement("div")
      utilityContainer.setAttribute("id", "benefit-utilities")
      benefitContainer.appendChild(utilityContainer)
    }

    if (!cssContainer) {
      cssContainer = document.createElement("div")
      cssContainer.setAttribute("id", "benefit-css")
      benefitContainer.appendChild(cssContainer)
    }
  }
}
