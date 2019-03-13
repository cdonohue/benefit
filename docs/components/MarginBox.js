import React from "react"
import { Box } from "../../src"

export default function MarginBox({ caption, pattern, marginModifier }) {
  return (
    <Box className="bg-orange-50 p-2 min-h-32 rounded-lg overflow-hidden">
      <Box is="h4" className="text-orange-700 text-base font-bold">
        {caption}
      </Box>
      <Box is="code" className="font-mono text-orange-700 text-sm block mb-2">
        {pattern}
      </Box>
      <Box className="bg-orange-100 rounded border border-orange-100">
        <Box
          className={`h-8 px-2 bg-white rounded border-orange-300 border-4 ${marginModifier}`}
        />
      </Box>
    </Box>
  )
}
