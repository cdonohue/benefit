import React from "react"
import { Box } from "../../src"

export default function ShadowBox({ caption, shadowModifier }) {
  return (
    <Box className="bg-cool-gray-100 p-4 min-h-32 rounded-lg overflow-hidden">
      <Box is="h4" className="text-cool-gray-700 text-base font-bold">
        {caption}
      </Box>
      <Box
        is="code"
        className="font-mono text-cool-gray-700 text-sm block mb-2"
      >
        {shadowModifier}
      </Box>
      <Box className="flex items-center justify-center">
        <Box
          className={`h-16 w-full px-2 bg-white rounded ${shadowModifier}`}
        />
      </Box>
    </Box>
  )
}
