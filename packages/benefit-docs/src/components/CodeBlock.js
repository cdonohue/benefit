/** @jsx jsx */
import {
  jsx,
  css,
  theme as benefitTheme,
  ConfigConsumer,
  Box,
} from "benefit-react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import { transform } from "@babel/standalone"
import prettier from "prettier/standalone"

const stripLastLine = css`
  /* .token-line:last-child {
    display: none;
  } */
`

var theme /*: PrismTheme */ = {
  plain: {
    color: benefitTheme.colors.gray["100"],
    backgroundColor: benefitTheme.colors.gray["800"],
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: benefitTheme.colors.gray["500"],
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: benefitTheme.colors.red["300"],
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: benefitTheme.colors.gray["400"],
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: {
        color: benefitTheme.colors.teal["300"],
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: benefitTheme.colors.blue["300"],
      },
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: benefitTheme.colors.blue["200"],
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: benefitTheme.colors.purple["300"],
      },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: benefitTheme.colors.blue["300"],
      },
    },
  ],
}

export default ({ children, className, live }) => {
  const language = className.replace(/language-/, "")
  if (live) {
    return (
      <div className="shadow-lg">
        <div className="rounded overflow-hidden mb-4 focus-within:shadow-outline">
          <LiveProvider
            code={children}
            theme={theme}
            scope={{ jsx, css }}
            transformCode={code => {
              try {
                const transformedCode = transform(code, {
                  plugins: [
                    [
                      "transform-react-jsx",
                      {
                        pragma: "jsx",
                      },
                    ],
                  ],
                }).code

                return prettier.format(transformedCode, {
                  semi: false,
                  parser: "babylon",
                })
              } catch {
                return code
              }
            }}
          >
            <div className="bg-white p-4 font-sans">
              <LivePreview />
            </div>

            <div
              className={`relative leading-tight ${stripLastLine}`}
              css={css`
                & textarea {
                  outline: none !important;
                }
              `}
            >
              <LiveEditor />
              <LiveError />
            </div>
          </LiveProvider>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded relative mb-4 border-t-4 border-blue-300 shadow-lg">
      <div className="inline-block absolute right-0 bg-blue-300 text-blue-800 font-bold py-px px-2 rounded-bl text-xs uppercase font-mono">
        {language}
      </div>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} ${stripLastLine} whitespace-pre-wrap text-xs p-4`}
            style={{ ...style }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
