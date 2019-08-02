/** @jsx jsx */
import { jsx, ConfigConsumer } from "benefit-react"

import ConfigPropertyList from "./ConfigPropertyList"
import Color from "./Color"
import Grid from "./Grid"

function renderProperties(themeProperty, hasColors = false) {
  if (hasColors) {
    return (
      <ConfigConsumer>
        {({ config }) => {
          const propertyValue = config.theme[themeProperty]
          const singleColors = Object.keys(propertyValue).filter(
            c => typeof propertyValue[c] === "string"
          )
          const multipleColors = Object.keys(propertyValue).filter(
            c => typeof propertyValue[c] !== "string"
          )
          return (
            <div>
              <Grid minWidth="200px" className="p-4 border-t mb-0" important>
                {multipleColors.map(key => (
                  <Color name={key} colors={propertyValue[key]} />
                ))}
              </Grid>

              <Grid minWidth="200px" className="p-4 border-t mb-0" important>
                {singleColors.map(key => (
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
        <span className="font-mono inline-block px-2 py-1 rounded bg-blue-500">
          {pattern.split("").map((char, i) => (
            <span
              className={`${
                char.match(/[{}()|?]/) ? "text-blue-300" : "text-white"
              }`}
              key={`${char}${i}`}
            >
              {char}
            </span>
          ))}
        </span>
      </div>
      {themeProperty && (
        <div>
          <div className="p-4">
            Generated from{" "}
            <span className="font-mono inline-block px-2 py-px rounded bg-gray-300">
              theme.{themeProperty}
            </span>
          </div>
          {renderProperties(themeProperty, hasColors)}
        </div>
      )}
    </div>
  )
}
