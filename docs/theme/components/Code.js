import React from "react"
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live"
import { css } from "emotion"
import { Box } from "../../../dist/react.js"
import Icon from "../../components/Icons"

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
  console.log(props)

  return (
    <LiveProvider code={props.children.props.children} disabled theme={theme}>
      <Box className="overflow-hidden bg-gray-800 rounded relative mb-4 border-t-4 border-blue-300">
        <Box className="inline-block absolute right-0 bg-blue-300 text-blue-700 font-bold py-px px-2 rounded-bl text-xs uppercase font-mono">
          {props.children.props.className.split("-")[1]}
        </Box>
        <Box
          className={`${formattedCode} p-4 text-sm leading-relaxed select-text`}
        >
          <LiveEditor />
        </Box>
      </Box>
    </LiveProvider>
  )
}
