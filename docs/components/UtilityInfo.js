/** @jsx jsx */
import { useMenus, Link, theme } from "docz"
import { css } from "emotion"
import { jsx, ConfigConsumer } from "../../dist/react.js"

import ConfigPropertyList from "./ConfigPropertyList"
import Color from "./Color"
import Icon from "./Icons"
import Grid from "./Grid"

const styledLink = css`
  transition: 0.1s ease-in-out;
`

function renderProperties(themeProperty, hasColors = false) {
  if (hasColors) {
    return (
      <ConfigConsumer>
        {({ config }) => {
          const propertyValue = config.theme[themeProperty]
          const singleColors = Object.keys(propertyValue).filter(
            (c) => typeof propertyValue[c] === "string"
          )
          const multipleColors = Object.keys(propertyValue).filter(
            (c) => typeof propertyValue[c] !== "string"
          )
          return (
            <div>
              <Grid minWidth="200px" className="p-4 border-t mb-0" important>
                {multipleColors.map((key) => (
                  <Color name={key} colors={propertyValue[key]} />
                ))}
              </Grid>

              <Grid minWidth="200px" className="p-4 border-t mb-0" important>
                {singleColors.map((key) => (
                  <Color name={key} colors={propertyValue[key]} />
                ))}
              </Grid>
            </div>
          )
        }}
      </ConfigConsumer>
    )
  }

  return (
    <div className="p-4 border-t">
      <ConfigPropertyList property={themeProperty} />
    </div>
  )
}

export default function UtilityInfo({
  className,
  pattern,
  themeProperty,
  hasColors = false,
}) {
  return (
    <div className={`overflow-hidden bg-white rounded shadow-lg ${className}`}>
      <div className="p-4 bg-blue-400 text-white">
        <code className="font-mono inline-block px-2 py-1 rounded bg-blue-500">
          {pattern.split("").map((char) => (
            <span
              className={`${
                char.match(/[{}()|?]/) ? "text-blue-300" : "text-white"
              }`}
            >
              {char}
            </span>
          ))}
        </code>
      </div>
      {themeProperty && (
        <div>
          <div className="p-4">
            Generated from{" "}
            <code className="font-mono inline-block px-2 py-px rounded bg-gray-300">
              theme.{themeProperty}
            </code>
          </div>
          {renderProperties(themeProperty, hasColors)}
        </div>
      )}
    </div>
  )
}
