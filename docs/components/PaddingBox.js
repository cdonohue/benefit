import React from "react"
import { Box } from "../../src"

export default function PaddingBox({ caption, pattern, paddingModifier }) {
  return (
    <Box className="bg-green-50 p-2 min-h-32 rounded-lg overflow-hidden">
      <Box is="h4" className="text-green-700 text-base font-bold">
        {caption}
      </Box>
      <Box is="code" className="font-mono text-green-700 text-sm block mb-2">
        {pattern}
      </Box>
      <Box
        className={`bg-green-100 rounded border-green-300 border-4 ${paddingModifier}`}
      >
        <Box className="h-8 bg-white" />
      </Box>
    </Box>
  )
}
