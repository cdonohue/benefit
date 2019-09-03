import React from "react"
import { registry } from "benefit"

function createContainer(label: string, styles: any[]) {
  return (
    <div id={`benefit-${label}`}>
      {styles.map((s: any) => (
        <style
          {...{
            ...(s.index && { "data-benefit-index": s.index }),
            [`data-benefit-${label}`]: true,
            id: s.id,
            key: `${s.id}`,
            dangerouslySetInnerHTML: {
              __html: s.rules,
            },
          }}
        ></style>
      ))}
    </div>
  )
}

export default function StylesContainer() {
  const benefitRegistry = registry.getInstance()
  const {
    css,
    global,
    keyframes,
    preflight,
    utilities,
  } = benefitRegistry.getRegistry()

  return (
    <div id="benefit-container">
      <script
        {...{
          dangerouslySetInnerHTML: {
            __html: `window.benefit = ${JSON.stringify(
              benefitRegistry.getRegistry()
            )}`,
          },
        }}
      ></script>
      {createContainer("preflight", preflight)}
      {createContainer("global", global)}
      {createContainer("keyframes", keyframes)}
      {createContainer("utilities", utilities)}
      {createContainer("css", css)}
    </div>
  )
}
