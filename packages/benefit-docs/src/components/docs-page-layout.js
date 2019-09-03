/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Nav from "./nav"
import {
  jsx,
  Box,
  css,
  theme,
  injectGlobal,
  keyframes,
  ConfigConsumer,
  ConfigProvider,
  createUtilitiesFromMap,
  createVariant,
  createVariantsFromMap,
  StylesContainer,
} from "benefit-react"
import UtilityInfo from "./UtilityInfo"
import Grid from "./Grid"
import InfoBox from "./InfoBox"
import BrowserBox from "./BrowserBox"
import Phone from "./Phone"
import Tablet from "./Tablet"
import Playground from "./Playground"
import Icon from "./Icon"
import Logo from "../images/benefit-logo.svg"
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

injectGlobal`
  html {
    font-size: 12px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`

export default function PageTemplate({ data: { mdx } }) {
  const [isMenuOpen, toggleMenu] = useState(false)

  useEffect(() => {
    const sideMenu = document.querySelector(".side-menu")
    sideMenu.scrollTop = localStorage.getItem("menuScroll") || 0

    sideMenu.onscroll = ({ target }) => {
      localStorage.setItem("menuScroll", target.scrollTop)
    }
  }, [])

  return (
    <ConfigProvider
      config={config => ({
        ...config,
        injectPreflight: true,
      })}
    >
      <StylesContainer />
      <div
        className={`font-base font-sans ${
          isMenuOpen ? "overflow-y-hidden" : "overflow-y-scroll"
        }`}
        css={css`
          display: grid;
          height: 100vh;
          -webkit-overflow-scrolling: touch;
          grid-template-columns: [content-start] minmax(auto, 1024px) [content-end];
          @media (min-width: 1025px) {
            grid-template-columns:
              [fullbleed-start] minmax(1.2rem, 1fr) [content-start] minmax(
                auto,
                1024px
              )
              [content-end] minmax(1.2rem, 1fr) [fullbleed-end];
          }
        `}
      >
        <div
          css={css`
            grid-row: 1 / -1;
            grid-column: fullbleed-start / fullbleed-end;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          `}
        >
          <div
            css={css`
              background-color: ${theme.colors.gray[900]};
              background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23f6f8fa' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
              background-image: linear-gradient(
                  to left,
                  ${theme.colors.gray[900]} 520px,
                  transparent
                ),
                url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23f6f8fa' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
            `}
          />
          <div
            css={css`
              background-color: ${theme.colors.gray[200]};
              background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%2322292f' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
              background-image: linear-gradient(
                  to right,
                  ${theme.colors.gray[200]} 520px,
                  rgba(255, 255, 255, 0)
                ),
                url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%2322292f' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
            `}
          />
        </div>
        <div
          className="flex"
          css={css`
            grid-row: 1 / -1;
            grid-column: content-start / content-end;
          `}
        >
          <div
            className={`bg-gray-900 text-gray-300 md:w-64 ${
              isMenuOpen ? "z-30 block" : "hidden"
            } absolute inset-0 md:static md:block`}
          >
            <div
              className={`side-menu h-screen md:sticky top-0 ${
                isMenuOpen ? "overflow-y-auto" : "overflow-y-hidden"
              } overflow-x-hidden md:overflow-y-scroll scrolling-touch`}
            >
              <div className="py-8 pt-16 md:pt-8">
                <div className="fixed block top-0 inset-x-0 bg-gray-900 z-10 md:hidden">
                  <button
                    className="bg-gray-800 w-full shadow p-4 flex items-center justify-between"
                    type="button"
                    onClick={() => toggleMenu(!isMenuOpen)}
                  >
                    Close Menu <Icon name="x" className="text-gray-700" />
                  </button>
                </div>
                <Nav />
              </div>
            </div>
          </div>
          <div
            className={`${
              isMenuOpen ? "hidden" : "block"
            } bg-gray-200 flex-1 z-10 pt-16 md:pt-0`}
            css={css`
              background-image: linear-gradient(
                to right,
                ${theme.colors.gray["300"]},
                ${theme.colors.gray["200"]}
              );
            `}
          >
            <div
              className={`fixed top-0 inset-x-0 z-50 bg-white p-4 md:relative md:bg-transparent md:p-8 flex justify-between items-center`}
              css={css`
                background-image: linear-gradient(
                  to right,
                  white,
                  rgba(255, 255, 255, 0)
                );
                &::before {
                  content: "";
                  left: 0;
                  bottom: 0;
                  position: absolute;
                  height: 1px;
                  width: 100%;
                  background-image: linear-gradient(
                    to right,
                    ${theme.colors.gray["400"]},
                    rgba(255, 255, 255, 0)
                  );
                }
              `}
            >
              <button
                className="md:hidden"
                type="button"
                onClick={() => toggleMenu(!isMenuOpen)}
              >
                <Icon name="menu" />
              </button>
              <Link to="/">
                <img src={Logo} alt="logo" className="w-32" />
              </Link>
              <a
                href="https://www.github.com/cdonohue/benefit"
                className="text-blue-500 hover:text-blue-700"
                css={css`
                  & svg {
                    width: 20px;
                    @media (min-width: 768px) {
                      width: 25px;
                    }
                  }
                `}
              >
                <Icon name="github" />
              </a>
            </div>
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
                    p: props => (
                      <p className="mt-2 mb-4 text-gray-800" {...props} />
                    ),
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
                    hr: props => (
                      <hr className="my-4 border-gray-400" {...props} />
                    ),
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
                        <div className="font-bold">
                          {mdx.frontmatter.nextLabel}
                        </div>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
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
