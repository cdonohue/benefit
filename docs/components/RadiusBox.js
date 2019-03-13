import React from "react"
import { Box } from "../../src"

export default function RadiusBox({ caption, radiusModifier }) {
  return (
    <Box className="bg-red-50 p-2 min-h-32 rounded-lg overflow-hidden">
      <Box is="h4" className="text-red-700 text-base font-bold">
        {caption}
      </Box>
      <Box is="code" className="font-mono text-red-700 text-sm block mb-2">
        {radiusModifier}
      </Box>
      <Box
        className={`h-8 px-2 bg-red-100 border-4 border-red-300 ${radiusModifier}`}
      />
    </Box>
  )
}
