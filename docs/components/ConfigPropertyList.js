import React from "react"
import { Box, ConfigConsumer } from "../../src"

export default function ConfigPropertyList({ property }) {
  return (
    <ConfigConsumer>
      {({ config }) => (
        <Box className="my-4">
          <Box className="mb-2 text-cool-gray-600">
            <Box is="span" className="capitalize">
              {property}
            </Box>{" "}
            sizes
          </Box>
          <Box className="flex flex-wrap">
            {Object.keys(config.theme[property]).map((key) => (
              <Box className="flex flex-column rounded-sm font-mono text-sm overflow-hidden mr-2 mb-2">
                <Box className="bg-cool-gray-400 text-xs flex justify-center items-center px-2 text-white">
                  {key}
                </Box>
                <Box className="bg-cool-gray-100 flex justify-center text-xs items-center px-3">
                  {config.theme[property][key]}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </ConfigConsumer>
  )
}
