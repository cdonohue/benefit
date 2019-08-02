/** @jsx jsx */
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Nav from "./nav"
import { jsx, Box, css, theme, global, baseStyles } from "benefit-react"
import UtilityInfo from "./UtilityInfo"
import Grid from "./Grid"
import InfoBox from "./InfoBox"

export default function PageTemplate({ data: { mdx } }) {
  global`
    ${baseStyles}
  `

  return (
    <div
      className="font-sans"
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
        <div className="bg-gray-900 text-gray-300 md:w-64 hidden absolute inset-0 md:static md:block">
          <Nav />
        </div>
        <div className="bg-gray-200 flex-1 z-10 pt-16 md:pt-0">
          <div
            className={`fixed top-0 inset-x-0 z-50 bg-white p-4 md:relative md:bg-transparent md:p-8 flex justify-between items-center`}
            style={{
              backgroundImage:
                "linear-gradient(to right, white, rgba(255, 255, 255, 0))",
            }}
          ></div>
          <div className="p-4 md:p-8">
            <div className="text-5xl mb-8 font-thin text-gray-700">
              <div className="text-sm uppercase font-hairline text-gray-500">
                {mdx.frontmatter.parent}
              </div>
              <div className={`py-4`}>{mdx.frontmatter.name}</div>
            </div>
            <MDXProvider
              components={{
                UtilityInfo,
                InfoBox,
                Grid,
                Box,
                p: props => (
                  <p className="mt-2 mb-4 leading-relaxed" {...props} />
                ),
                // notFound: components.NotFound,
                // render: components.Render,

                h1: props => (
                  <h1
                    style={{ lineHeight: ".7" }}
                    className="text-4xl mt-0 mb-8 pb-4 border-b"
                    {...props}
                  />
                ),
                h2: props => (
                  <h2
                    className="text-2xl leading-tight mt-6 mb-4 pb-2 text-gray-800"
                    {...props}
                  />
                ),
                h3: props => (
                  <h3
                    className="text-xl leading-tight mt-6 mb-4 border-b pb-2 border-gray-400 text-gray-800"
                    {...props}
                  />
                ),
                hr: props => <hr className="my-4 border-gray-400" {...props} />,
                // h3: components.H3,
                // h4: components.H4,
                // h5: components.H5,
                // h6: components.H6,
                // ul: components.List,
                // table: components.Table,
                ul: props => (
                  <ul
                    className="border-0 m-0 border-t border-b border-gray-400 border-dashed pt-2 pb-4 list-inside"
                    {...props}
                  />
                ),
                li: props => <li className="pt-2" {...props} />,
                a: props => (
                  <a
                    className="text-blue-500 no-underline hover:text-blue-700"
                    {...props}
                  />
                ),
                // pre: Code,
                blockquote: props => (
                  <blockquote
                    className="border-l-4 border-blue-400 rounded-sm italic overflow-hidden bg-gray-300 px-4 py-2 text-gray-800 my-4"
                    css={css`
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
                    className="rounded-sm bg-white overflow-hidden px-1 font-mono text-gray-700 border"
                    {...props}
                  />
                ),
              }}
            >
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
            <div className="flex justify-between border-0 border-t mt-8 pt-4 border-gray-400 border-dashed">
              <div>
                {mdx.frontmatter.previousRoute && (
                  <Link
                    className={`text-blue-500 no-underline hover:text-blue-700`}
                    to={mdx.frontmatter.previousRoute}
                    css={css`
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
                      {/* <ArrowLeft /> */}
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
                    className={`text-blue-500 no-underline hover:text-blue-700`}
                    to={mdx.frontmatter.nextRoute}
                    css={css`
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
                      Next
                      {/* <ArrowRight /> */}
                    </div>
                    <div className="font-bold">{mdx.frontmatter.nextLabel}</div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query DocQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        name
        route
        nextRoute
        nextLabel
      }
    }
  }
`
