import React from "react"
import { Box } from "../../dist/react.js"

export default function Tablet(props) {
  return (
    <Box className="bg-gray-700 w-48 mx-auto p-2 rounded-lg overflow-hidden flex">
      <Box className="flex mr-2 items-center justify-center">
        <Box className="w-1 h-1 rounded-full bg-gray-900" />
      </Box>
      <Box className="relative bg-gray-100 text-tiny leading-tight p-1 rounded-sm h-32 overflow-hidden overflow-y-auto">
        {props.children}
      </Box>
      <Box className="flex ml-2 items-center justify-center">
        <Box className="w-3 h-3 rounded-full bg-gray-900" />
      </Box>
    </Box>
  )
}
