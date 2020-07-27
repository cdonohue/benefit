import isBrowser from "./isBrowser"

function getMainContainer() {
  const container = document.getElementById("benefit-container")
  if (container) {
    return container
  }

  const benefitContainer = document.createElement("div")
  benefitContainer.setAttribute("id", "benefit-container")
  document.body.insertBefore(benefitContainer, document.body.firstChild)

  return benefitContainer
}

function initializeContainer(label: string) {
  const name = `benefit-${label}`
  const container = document.getElementById(name)
  if (!container) {
    const newContainer = document.createElement("div")
    newContainer.setAttribute("id", name)
    getMainContainer().appendChild(newContainer)
  }
}

export default function initializeContainers(): void {
  if (isBrowser()) {
    initializeContainer("preflight")
    initializeContainer("global")
    initializeContainer("keyframes")
    initializeContainer("normalize")
    initializeContainer("utilities")
    initializeContainer("css")
  }
}
