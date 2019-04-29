import React from "react"
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live"
import { css } from "emotion"
import { Box } from "../../../dist/benefit.js"

const theme = {
  plain: {
    color: "#F8F8F2",
    backgroundColor: "#282A36",
  },
  styles: [
    {
      types: ["prolog", "constant", "builtin"],
      style: {
        color: "#81e6d9",
      },
    },
    {
      types: ["inserted", "function"],
      style: {
        color: "#d6bcfa",
      },
    },
    {
      types: ["deleted"],
      style: {
        color: "#dd6b20",
      },
    },
    {
      types: ["changed"],
      style: {
        color: "#f6ad55",
      },
    },
    {
      types: ["punctuation", "symbol"],
      style: {
        color: "#B3BDC7",
      },
    },
    {
      types: ["string", "char", "tag", "selector"],
      style: {
        color: "#feb2b2",
      },
    },
    {
      types: ["keyword", "variable"],
      style: {
        color: "#90cdf4",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#319795",
        fontStyle: "italic",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#fefcbf",
      },
    },
  ],
}

const formattedCode = css`
  & textarea {
    padding: 0 !important;
  }
  & pre {
    padding: 0 !important;
  }

  & pre .token-line:last-child {
    display: none;
  }
`

export default function Code(props) {
  const [_, language] = props.children.props.props.className.split("-")
  return (
    <LiveProvider code={props.children.props.children} disabled theme={theme}>
      <Box
        className={`${formattedCode} bg-gray-900 p-4 mb-4 text-sm rounded leading-relaxed relative overflow-hidden shadow-inner`}
      >
        <LiveEditor />
      </Box>
    </LiveProvider>
  )
}
