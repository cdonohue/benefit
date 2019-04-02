import React from "react"
import { Box } from "../../src"

export default function BrowserBox({ children }) {
  return (
    <Box className="bg-gray-200 p-2 rounded overflow-hidden">
      <Box className="flex mb-2 items-center">
        <Box className="w-2 h-2 flex-shrink-0 rounded-full bg-gray-300" />
        <Box className="w-2 ml-1 h-2 flex-shrink-0 rounded-full bg-gray-500" />
        <Box className="w-2 ml-1 h-2 flex-shrink-0 rounded-full bg-gray-700" />
        <Box className="h-4 ml-2 bg-white w-full rounded-full" />
      </Box>
      <Box className="relative bg-gray-100 text-sm p-2 rounded-sm h-24 overflow-auto">
        {children}
      </Box>
    </Box>
  )
}
