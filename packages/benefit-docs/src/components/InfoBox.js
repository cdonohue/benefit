import React from "react"
import { Box } from "benefit-react"

export default function LayoutBox({
  color = "gray",
  caption,
  children,
  pattern,
  isDefault,
  className,
}) {
  return (
    <div
      className={`bg-white p-4 relative rounded shadow overflow-hidden ${className}`}
    >
      {isDefault && (
        <div
          className={`uppercase font-semibold bg-${color}-200 text-xs text-${color}-600 p-1 rounded-bl absolute top-0 right-0`}
        >
          Default
        </div>
      )}
      {caption && (
        <h4 className={`text-${color}-800 text-base font-semibold mb-1`}>
          {caption}
        </h4>
      )}
      {pattern && (
        <span className="font-mono text-blue-500 text-sm block">{pattern}</span>
      )}
      <div className="mt-2">{children}</div>
    </div>
  )
}
