import React from "react"

import { Box } from "../../src"

export default function SectionHeading({ children, pattern }) {
  return (
    <Box
      is="h4"
      className="border-b border-dashed border-cool-gray-100 text-xl pb-2 mt-8 mb-4"
    >
      <Box>{children}</Box>
      {!!pattern && (
        <Box
          is="code"
          className="text-base inline-block font-mono px-2 py-1 rounded bg-cool-gray-50"
        >
          {pattern.split("").map((char) => (
            <Box
              is="span"
              className={`inline-block text-cool-gray-${
                char.match(/[{}|?]/) ? "100" : 400
              }`}
            >
              {char}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}
