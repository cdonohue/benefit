import React from "react"
import { ConfigConsumer } from "./ConfigContext"

function renderStyleContainers(props: any) {
  return (
    <ConfigConsumer>
      {({ benefitRegistry }) => {
        const {
          css,
          global,
          keyframes,
          preflight,
          utilities,
        } = benefitRegistry.getRegistry()

        return (
          <div id="benefit-container">
            {!props.isBrowser && (
              <script
                {...{
                  dangerouslySetInnerHTML: {
                    __html: `window.benefit = ${JSON.stringify(
                      benefitRegistry.getRegistry()
                    )}`,
                  },
                }}
              ></script>
            )}
            <div id="benefit-preflight">
              {preflight.map((s: any) => (
                <style
                  data-benefit-preflight
                  {...{
                    id: s.id,
                    key: `${s.id}`,
                    dangerouslySetInnerHTML: {
                      __html: s.rules,
                    },
                  }}
                ></style>
              ))}
            </div>
            <div id="benefit-global">
              {global.map((s: any) => (
                <style
                  data-benefit-global
                  {...{
                    id: s.id,
                    key: `${s.id}`,
                    dangerouslySetInnerHTML: {
                      __html: s.rules,
                    },
                  }}
                ></style>
              ))}
            </div>
            <div id="benefit-keyframes">
              {keyframes.map((s: any) => (
                <style
                  data-benefit-keyframes
                  {...{
                    id: s.id,
                    key: `${s.id}`,
                    dangerouslySetInnerHTML: {
                      __html: s.rules,
                    },
                  }}
                ></style>
              ))}
            </div>
            <div id="benefit-utilities">
              {utilities.map((s: any) => (
                <style
                  data-benefit-utility
                  data-benefit-index={s.index}
                  {...{
                    id: s.id,
                    key: `${s.id}`,
                    dangerouslySetInnerHTML: {
                      __html: s.rules,
                    },
                  }}
                ></style>
              ))}
            </div>
            <div id="benefit-css">
              {css.map((s: any) => (
                <style
                  data-benefit-css
                  {...{
                    id: s.id,
                    key: `${s.id}`,
                    dangerouslySetInnerHTML: {
                      __html: s.rules,
                    },
                  }}
                ></style>
              ))}
            </div>
          </div>
        )
      }}
    </ConfigConsumer>
  )
}

export default function StylesContainer() {
  const isBrowser = typeof window !== "undefined"

  if (
    !isBrowser ||
    (isBrowser && !document.getElementById("benefit-container"))
  ) {
    return renderStyleContainers(isBrowser)
  }

  return null
}
