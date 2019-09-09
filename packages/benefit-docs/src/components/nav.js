/** @jsx jsx */
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { jsx, ConfigConsumer, css, keyframes } from "benefit-react"
import Icon from "./Icon"

const growLeft = keyframes`
  to {
    left: 0;
  }
`

const Nav = () => {
  const allDocs = useStaticQuery(graphql`
    query docsIndex {
      allMdx {
        edges {
          node {
            id
            excerpt
            frontmatter {
              name
              route
              parent
            }
          }
        }
      }
    }
  `)

  const { edges: docs } = allDocs.allMdx

  const categories = [
    {
      name: "Layout",
      icon: "layout",
    },
    {
      name: "Typography",
      icon: "type",
    },
    {
      name: "Background",
      icon: "image",
    },
    {
      name: "Border",
      icon: "square",
    },
    {
      name: "Flexbox",
      icon: "columns",
    },
    {
      name: "Space",
      icon: "maximize",
    },
    {
      name: "Size",
      icon: "move",
    },
    {
      name: "Tables",
      icon: "align-justify",
    },
    {
      name: "Effects",
      icon: "loader",
    },
    {
      name: "Interactivity",
      icon: "mouse-pointer",
    },
    {
      name: "Svg",
      icon: "pen-tool",
    },
  ]

  return (
    <ConfigConsumer>
      {({ config }) => {
        const { colors } = config.theme

        function renderMenuHeading(label, icon) {
          return (
            <div
              className="relative uppercase tracking-wide text-xs flex justify-between items-center py-2 px-4 md:px-8 text-gray-700 mt-4"
              css={css`
                &::after {
                  content: "";
                  position: absolute;
                  bottom: 0;
                  right: 0;
                  height: 1px;
                  width: 100%;
                  background: linear-gradient(
                    to left,
                    ${colors.gray["800"]},
                    rgba(255, 255, 255, 0)
                  );
                }

                & svg {
                  width: 16px;
                }
              `}
            >
              {label}
              <Icon name={icon} className="w-4 text-gray-700" />
            </div>
          )
        }

        function renderCategoryMenu(name, icon) {
          return (
            <React.Fragment key={`${name}-${icon}`}>
              {renderMenuHeading(name, icon)}
              <ul>
                {docs
                  .filter(
                    ({ node: doc }) =>
                      doc.frontmatter &&
                      doc.frontmatter.parent &&
                      doc.frontmatter.parent === name
                  )
                  .sort(({ node: a }, { node: b }) => {
                    if (a.frontmatter.name < b.frontmatter.name) {
                      return -1
                    }
                    if (a.frontmatter.name > b.frontmatter.name) {
                      return 1
                    }

                    return 0
                  })
                  .map(({ node: doc }) => (
                    <li key={doc.id}>
                      <Link
                        activeClassName="active"
                        to={doc.frontmatter.route}
                        className={`px-4 md:px-8 py-2 no-underline hover:text-white block relative overflow-hidden flex items-center ${styledLink}`}
                      >
                        {doc.frontmatter.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </React.Fragment>
          )
        }

        const styledLink = css`
          &,
          &:visited,
          &:active {
            text-decoration: none;
            color: ${colors.gray["500"]} !important;
          }

          &,
          &::before {
            transition: 0.15s ease-in-out;
          }

          &::before {
            content: "";
            left: 100%;
            right: 0;
            top: 0;
            bottom: 0;
            position: absolute;

            z-index: -1;
            background-image: linear-gradient(
              to left,
              ${colors.gray["700"]},
              ${colors.gray["800"]}
            );
            box-shadow: 0 4px 18px rgba(0, 0, 0, 0.26),
              inset -4px 0 5px -2px rgba(0, 0, 0, 0.26);
            @media (min-width: 1025px) {
              border-top-left-radius: 0.25rem;
              border-bottom-left-radius: 0.25rem;
            }
          }

          &:hover:not(.active) {
            color: white !important;
          }

          &.active {
            color: white !important;
            text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.26);
            &::before {
              animation: ${growLeft} 0.25s ease-out forwards;
            }
          }
        `

        return (
          <div className="">
            <Link
              activeClassName="active"
              className={`px-4 md:px-8 py-2 no-underline hover:text-white block relative overflow-hidden flex items-center ${styledLink}`}
              to="/"
            >
              Introduction
            </Link>
            {renderCategoryMenu("Installation", "download")}
            {/* {renderCategoryMenu("Helpers", "life-buoy")} */}
            {renderMenuHeading("Customization", "settings")}
            <ul>
              <li>
                <Link
                  activeClassName="active"
                  className={`px-4 md:px-8 py-2 no-underline hover:text-white block relative overflow-hidden flex items-center ${styledLink}`}
                  to="/customization/overview/"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  activeClassName="active"
                  className={`px-4 md:px-8 py-2 no-underline hover:text-white block relative overflow-hidden flex items-center ${styledLink}`}
                  to="/customization/theme/"
                >
                  Theme
                </Link>
              </li>
              {/* <li>
                <Link
                  className={`px-4 md:px-8 py-2 no-underline hover:text-white block relative overflow-hidden flex items-center ${styledLink}`}
                  to="/customization/normalize"
                >
                  Normalize
                </Link>
              </li> */}
              <li>
                <Link
                  activeClassName="active"
                  className={`px-4 md:px-8 py-2 no-underline hover:text-white block relative overflow-hidden flex items-center ${styledLink}`}
                  to="/customization/utilities/"
                >
                  Utilities
                </Link>
              </li>
              <li>
                <Link
                  activeClassName="active"
                  className={`px-4 md:px-8 py-2 no-underline hover:text-white block relative overflow-hidden flex items-center ${styledLink}`}
                  to="/customization/variants/"
                >
                  Variants
                </Link>
              </li>
              <li>
                <Link
                  activeClassName="active"
                  className={`px-4 md:px-8 py-2 no-underline hover:text-white block relative overflow-hidden flex items-center ${styledLink}`}
                  to="/customization/apply/"
                >
                  Apply
                </Link>
              </li>
            </ul>
            {categories.map(({ name, icon }) => renderCategoryMenu(name, icon))}
          </div>
        )
      }}
    </ConfigConsumer>
  )
}

export default Nav
