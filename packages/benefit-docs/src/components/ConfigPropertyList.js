/** @jsx jsx */
import React from "react"
import { Box, ConfigConsumer, jsx } from "benefit-react"
import Color from "./Color"

export default function ConfigPropertyList({ property }) {
  return (
    <ConfigConsumer>
      {({ config }) => {
        const propertyValue = config.theme[property]

        return (
          <Box className="flex flex-wrap">
            {Object.keys(propertyValue).map((key) => {
              const variant = propertyValue[key]
              if (Array.isArray(variant)) {
                return (
                  <div>
                    <div className="text-sm w-full font-mono pb-2 rounded-sm text-gray-600 py-px mb-2 border-b">
                      {key}
                    </div>
                    <div className="mb-2">
                      {variant.map((item) => (
                        <div className="rounded-sm font-mono text-sm bg-gray-600 text-white mr-2 mb-2 py-px px-3 inline-block">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }

              if (property === "boxShadow") {
                return (
                  <div className="w-full mb-4">
                    <div className="text-sm w-full font-mono pb-2 rounded-sm text-gray-600 py-px">
                      {key}
                    </div>
                    <div className="rounded-sm font-mono text-sm bg-gray-200 p-2 block">
                      {variant}
                    </div>
                  </div>
                )
              }

              return (
                <Box
                  key={`${property}-${key}`}
                  className="flex flex-column rounded-sm font-mono text-sm overflow-hidden mr-3 mb-3"
                >
                  <Box className="bg-gray-600 text-sm flex justify-center items-center px-2 py-px text-white">
                    {key}
                  </Box>
                  <Box className="bg-gray-400 flex justify-center text-sm items-center py-px px-3">
                    {variant}
                  </Box>
                </Box>
              )
            })}
          </Box>
        )
      }}
    </ConfigConsumer>
  )
}
