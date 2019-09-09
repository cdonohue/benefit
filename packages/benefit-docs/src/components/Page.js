/** @jsx jsx */
import React, { useState, useEffect, Fragment } from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./PageLayout"
import {
  jsx,
  Box,
  css,
  theme,
  global,
  keyframes,
  ConfigConsumer,
  ConfigProvider,
  createUtilitiesFromMap,
  createVariant,
  createVariantsFromMap,
} from "benefit-react"
import UtilityInfo from "./UtilityInfo"
import Grid from "./Grid"
import InfoBox from "./InfoBox"
import BrowserBox from "./BrowserBox"
import Phone from "./Phone"
import Tablet from "./Tablet"
import Playground from "./Playground"
import Icon from "./Icon"
import CodeBlock from "./CodeBlock"

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(25px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(-25px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`

global`
  html {
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`

export default function PageTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <div
        className=""
        css={css`
          animation: ${fadeInUp} 0.4s ease forwards;
        `}
      >
        <div className="text-5xl font-thin text-gray-700 p-4 md:p-8 relative">
          <div className="text-sm uppercase font-hairline text-gray-500">
            {mdx.frontmatter.parent}
          </div>
          <div
            className={`py-4`}
            css={css`
              position: relative;
              text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.12);
              display: inline-block;
              &::before {
                content: "";
                left: 0;
                bottom: 0;
                position: absolute;
                height: 3px;
                border-radius: 2px;
                width: 30%;
                background: #63b3ed;
              }
            `}
          >
            {mdx.frontmatter.name}
          </div>
        </div>
        <div className="border-t border-gray-400 mx-4 md:mx-8"></div>
        <div className="p-4 md:p-8">
          <MDXProvider
            components={{
              Phone,
              Tablet,
              BrowserBox,
              ConfigConsumer,
              ConfigProvider,
              UtilityInfo,
              InfoBox,
              Grid,
              Box,
              Playground,
              Icon,
              createUtilitiesFromMap,
              createVariant,
              createVariantsFromMap,
              p: props => <p className="mt-2 mb-4 text-gray-800" {...props} />,
              h1: props => (
                <h1
                  style={{ lineHeight: ".7" }}
                  className="text-4xl mt-0 mb-8 pb-4 border-b"
                  {...props}
                />
              ),
              h2: props => (
                <h2
                  className="text-2xl leading-tight mb-4 border-b pb-2 border-gray-400 text-gray-800"
                  {...props}
                />
              ),
              h3: props => (
                <h3
                  className="text-xl leading-tight mb-4 mt-2 border-b py-2 border-gray-400 text-gray-800"
                  {...props}
                />
              ),
              hr: props => <hr className="my-4 border-gray-400" {...props} />,
              ul: props => (
                <ul
                  className="border-0 m-0 pb-4 list-inside list-disc"
                  {...props}
                />
              ),
              li: props => <li className="pt-2" {...props} />,
              a: props => (
                <a
                  className="text-blue-600 no-underline hover:text-blue-800"
                  css={css`
                    transition: 0.1s ease;
                  `}
                  {...props}
                />
              ),
              blockquote: props => (
                <blockquote
                  className="border-l-4 border-gray-500 overflow-hidden rounded-sm p-4 text-gray-200 mb-4"
                  css={css`
                    background-image: linear-gradient(
                      to right,
                      ${theme.colors.gray["400"]},
                      ${theme.colors.gray["300"]}
                    );

                    & p {
                      margin: 0;
                    }
                    & p + p {
                      margin-top: 1rem;
                    }
                  `}
                  {...props}
                />
              ),
              inlineCode: props => (
                <span
                  className="rounded-sm bg-white overflow-hidden px-1 font-mono text-gray-700 shadow"
                  {...props}
                />
              ),
              code: props => <CodeBlock {...props} />,
            }}
          >
            <div
              className="opacity-0"
              css={css`
                animation: ${fadeInUp} 0.4s ease 0.2s forwards;
              `}
            >
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </div>
          </MDXProvider>
          <div className="flex justify-between border-0 border-t mt-8 pt-4 border-gray-400 border-dashed">
            <div>
              {mdx.frontmatter.previousRoute && (
                <Link
                  className={`text-blue-500 no-underline hover:text-blue-700 opacity-0`}
                  to={mdx.frontmatter.previousRoute}
                  css={css`
                    animation: ${fadeInRight} 0.4s ease 0.4s forwards;
                    & svg {
                      width: 16px;
                    }

                    min-width: 6rem;

                    &,
                    &:visited,
                    &:active {
                      display: inline-block;
                      text-decoration: none;
                      color: ${theme.colors.blue["500"]};
                      transition: all 0.2s ease;
                    }

                    &:hover {
                      transform: translateY(-1px);
                    }
                  `}
                >
                  <div className="flex justify-between items-center text-sm">
                    <Icon name="arrow-left" />
                    Previous
                  </div>
                  <div className="font-bold text-right">
                    {mdx.frontmatter.previousLabel}
                  </div>
                </Link>
              )}
            </div>
            <div>
              {mdx.frontmatter.nextRoute && (
                <Link
                  className={`text-blue-500 no-underline hover:text-blue-700 opacity-0`}
                  to={mdx.frontmatter.nextRoute}
                  css={css`
                    animation: ${fadeInLeft} 0.4s ease 0.4s forwards;
                    & svg {
                      width: 16px;
                    }

                    min-width: 6rem;

                    transition: all 0.2s ease;

                    &,
                    &:visited,
                    &:active {
                      display: inline-block;
                      text-decoration: none;
                      color: ${theme.colors.blue["500"]};
                    }

                    &:hover {
                      transform: translateY(-1px);
                    }
                  `}
                >
                  <div className="flex justify-between items-center text-sm">
                    Next
                    <Icon name="arrow-right" />
                  </div>
                  <div className="font-bold">{mdx.frontmatter.nextLabel}</div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query DocQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        name
        parent
        route
        nextRoute
        nextLabel
        previousRoute
        previousLabel
      }
    }
  }
`
