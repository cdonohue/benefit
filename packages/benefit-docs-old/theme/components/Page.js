/** @jsx jsx */
import React, { useEffect, useState } from "react"
import { useConfig, useMenus, useDocs, Link, doczState } from "docz"
import { css, keyframes } from "emotion"
import { ArrowLeft, ArrowRight, GitHub, ChevronsRight } from "react-feather"
import { Box, ConfigConsumer, jsx } from "benefit-react"
import Container from "./Container"
import Logo from "../../components/Logo"
import { theme } from "benefit"
import Icon, {
  Layout,
  Type,
  Background,
  Border,
  Space,
  Size,
  Effects,
  Interactivity,
  Svg,
  Flexbox,
  Table,
} from "../../components/Icons.js"
import Loader from "./Loader.js"

const { colors } = theme

const page = css`
  display: grid;
  height: 100vh;
  -webkit-overflow-scrolling: touch;
  grid-template-columns: [content-start] minmax(auto, 1024px) [content-end];
  @media (min-width: 1025px) {
    grid-template-columns:
      [fullbleed-start] minmax(1.2rem, 1fr) [content-start] minmax(auto, 1024px)
      [content-end] minmax(1.2rem, 1fr) [fullbleed-end];
  }
`

function PageContainer({ children, isMenuOpen }) {
  return (
    <Box
      className={`${page} ${
        isMenuOpen ? "overflow-y-hidden" : "overflow-y-scroll"
      }`}
    >
      {children}
    </Box>
  )
}

const rightBg = css`
  background-color: ${colors.gray[200]};
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%2322292f' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-image: linear-gradient(
      to right,
      ${colors.gray[200]} 520px,
      rgba(255, 255, 255, 0)
    ),
    url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%2322292f' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
`

const leftBg = css`
  background-color: ${colors.gray[900]};
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23f6f8fa' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-image: linear-gradient(
      to left,
      ${colors.gray[900]} 520px,
      transparent
    ),
    url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23f6f8fa' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
`

function FullBleed() {
  return (
    <Box
      style={{
        gridRow: "1 / -1",
        gridColumn: "fullbleed-start / fullbleed-end",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <Box className={leftBg} />
      <Box className={rightBg} />
    </Box>
  )
}

function Main({ children }) {
  return (
    <Box
      style={{
        gridRow: "1 / -1",
        gridColumn: "content-start / content-end",
      }}
      className="flex"
    >
      {children}
    </Box>
  )
}

const partialUnderline = css`
  /* position: relative;

  &:before {
    content: "";
    background: rgba(255, 255, 255, 0.06);
    width: auto;
    left: 2rem;
    right: 2rem;
    border-radius: 12px;
    height: 1px;
    bottom: 0;
    position: absolute;
  } */
`

const styledLink = css`
  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${colors.gray["500"]} !important;
  }

  transition: 0.15s ease-in-out;

  &:hover:not(.active) {
    transform: translateX(0.25rem);
  }

  &.active {
    color: white !important;
    background: linear-gradient(
      to left,
      ${colors.gray["800"]},
      ${colors.gray["900"]}
    );
  }
`

const menuHeading = css`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0.25rem,
      ${colors.gray["800"]},
      rgba(255, 255, 255, 0)
    );
  }

  & svg {
    width: 16px;
  }
`

const pagingLink = css`
  & svg {
    width: 16px;
  }

  min-width: 6rem;

  &,
  &:visited,
  &:active {
    display: inline-block;
    text-decoration: none;
    color: ${colors.blue["500"]};
    transition: all 0.2s ease;
  }

  &:hover {
    transform: translateY(-1px);
  }
`

function renderSubMenu(menuItems, category, iconName) {
  return (
    <React.Fragment>
      <Box
        className={`${menuHeading} ${partialUnderline} uppercase tracking-wide text-xs flex justify-between items-center py-2 px-4 md:px-8 text-gray-700 mt-4`}
      >
        {category}
        <Icon name={iconName} className="w-4 text-gray-700" />
      </Box>
      {menuItems
        .filter((item) => item.parent === category)
        .map((item) => (
          <Link
            className={`px-4 md:px-8 py-2 no-underline hover:text-white block ${styledLink}`}
            key={item.id}
            to={item.route}
          >
            {item.name}
          </Link>
        ))}
    </React.Fragment>
  )
}

const sideMenuHeader = css`
  position: relative;
  &::before {
    content: "";
    left: 0;
    bottom: 0;
    position: absolute;
    height: 1px;
    width: 100%;
    background-image: linear-gradient(
      to left,
      ${colors.gray["800"]},
      transparent
    );
  }
`

function SideBar({ isOpen, onClose }) {
  const menuItems = useMenus()

  useEffect(() => {
    const sideMenu = document.querySelector(".side-menu")
    sideMenu.scrollTop = localStorage.getItem("menuScroll") || 0

    sideMenu.onscroll = ({ target }) => {
      localStorage.setItem("menuScroll", target.scrollTop)
    }
  })

  return (
    <Box
      className={`bg-gray-900 text-gray-300 md:w-64 ${
        isOpen ? "z-30 block" : "hidden"
      } absolute inset-0 md:static md:block`}
    >
      <Box
        className={`side-menu h-screen md:sticky top-0 ${
          isOpen ? "overflow-y-auto" : "overflow-y-hidden"
        } overflow-x-hidden md:overflow-y-scroll scrolling-touch`}
      >
        <Box className="py-8 pt-16 md:pt-8">
          <Box className="fixed block top-0 inset-x-0 bg-gray-900 z-10 md:hidden">
            <Box
              is="button"
              className="bg-gray-800 w-full shadow p-4 flex items-center justify-between"
              type="button"
              onClick={onClose}
            >
              Close Menu <Icon name="x" className="text-gray-700" />
            </Box>
          </Box>
          <Link
            className={`px-4 md:px-8 py-2 no-underline hover:text-white block ${styledLink}`}
            to="/"
          >
            Introduction
          </Link>
          <Link
            className={`px-4 md:px-8 py-2 no-underline hover:text-white block ${styledLink}`}
            to="/getting-started"
          >
            Getting Started
          </Link>
          <Box
            className={`${menuHeading} ${partialUnderline} uppercase tracking-wide text-xs flex justify-between items-center py-2 px-4 md:px-8 text-gray-700 mt-4`}
          >
            Customization
            <Icon name="settings" className="w-4 text-gray-700" />
          </Box>
          <Link
            className={`px-4 md:px-8 py-2 no-underline hover:text-white block ${styledLink}`}
            to="/customization/overview"
          >
            Overview
          </Link>
          <Link
            className={`px-4 md:px-8 py-2 no-underline hover:text-white block ${styledLink}`}
            to="/customization/theme"
          >
            Theme
          </Link>
          <Link
            className={`px-4 md:px-8 py-2 no-underline hover:text-white block ${styledLink}`}
            to="/customization/normalize"
          >
            Normalize
          </Link>
          <Link
            className={`px-4 md:px-8 py-2 no-underline hover:text-white block ${styledLink}`}
            to="/customization/utilities"
          >
            Utilities
          </Link>
          <Link
            className={`px-4 md:px-8 py-2 no-underline hover:text-white block ${styledLink}`}
            to="/customization/variants"
          >
            Variants
          </Link>
          <Link
            className={`px-4 md:px-8 py-2 no-underline hover:text-white block ${styledLink}`}
            to="/customization/apply"
          >
            Apply
          </Link>

          {renderSubMenu(menuItems, "Layout", "layout")}
          {renderSubMenu(menuItems, "Typography", "type")}
          {renderSubMenu(menuItems, "Background", "image")}
          {renderSubMenu(menuItems, "Border", "square")}
          {renderSubMenu(menuItems, "Flexbox", "columns")}
          {renderSubMenu(menuItems, "Space", "maximize")}
          {renderSubMenu(menuItems, "Size", "move")}
          {renderSubMenu(menuItems, "Tables", "align-justify")}
          {renderSubMenu(menuItems, "Effects", "loader")}
          {renderSubMenu(menuItems, "Interactivity", "mouse-pointer")}
          {renderSubMenu(menuItems, "Svg", "pen-tool")}
        </Box>
      </Box>
    </Box>
  )
}

function Content({ children, isMenuOpen }) {
  return (
    <Box
      className={`${
        isMenuOpen ? "hidden" : "block"
      } bg-gray-200 flex-1 z-10 pt-16 md:pt-0`}
    >
      {children}
    </Box>
  )
}

const accent = css`
  position: relative;
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
`

const fadingBorder = css`
  position: relative;
  &::before {
    content: "";
    left: 0;
    bottom: 0;
    position: absolute;
    height: 1px;
    width: 100%;
    background-image: linear-gradient(
      to right,
      #d4dae1,
      rgba(255, 255, 255, 0)
    );
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

function contentEnter(delay = "0s") {
  return css`
    animation: ${fadeIn} 0.2s ${delay} ease-in-out;
  `
}

export default function Page({ children, doc, location }) {
  const [isMenuOpen, toggleMenu] = useState(false)

  return (
    <PageContainer isMenuOpen={isMenuOpen}>
      <FullBleed />
      <Main>
        <SideBar isOpen={isMenuOpen} onClose={() => toggleMenu(!isMenuOpen)} />
        <Content isMenuOpen={isMenuOpen}>
          <Box
            className={`fixed top-0 inset-x-0 z-50 bg-white p-4 md:relative md:bg-transparent md:p-8 flex justify-between items-center ${fadingBorder}`}
            style={{
              backgroundImage:
                "linear-gradient(to right, white, rgba(255, 255, 255, 0))",
            }}
          >
            <Box
              is="button"
              className="md:hidden"
              type="button"
              onClick={() => toggleMenu(!isMenuOpen)}
            >
              <Icon name="menu" />
            </Box>
            <Link to="/">
              <Logo className="w-24" />
            </Link>
            <Box
              className={`${css`
                & svg {
                  width: 20px;
                }
              `} text-blue-500 rounded-full inline-flex items-center justify-center`}
            >
              <Box
                is="a"
                href="https://github.com/cdonohue/benefit"
                className="hover:text-blue-800"
              >
                <GitHub />
              </Box>
            </Box>
          </Box>
          <Box className="p-4 md:p-8">
            <Box className="text-5xl mb-8 font-thin text-gray-700">
              <Box className="text-sm uppercase font-hairline text-gray-500">
                {doc.parent}
              </Box>
              <Box className={`${accent} py-4`}>{doc.name}</Box>
            </Box>

            {children}

            <Box className="flex justify-between border-t mt-8 pt-4 border-gray-400 border-dashed">
              <div>
                {doc.previousRoute && (
                  <Link
                    className={`${pagingLink} text-blue-500 no-underline hover:text-blue-700`}
                    to={doc.previousRoute}
                  >
                    <Box className="flex justify-between items-center text-sm">
                      <ArrowLeft />
                      Previous
                    </Box>
                    <Box className="font-bold text-right">
                      {doc.previousLabel}
                    </Box>
                  </Link>
                )}
              </div>
              <div>
                {doc.nextRoute && (
                  <Link
                    className={`${pagingLink} text-blue-500 no-underline hover:text-blue-700`}
                    to={doc.nextRoute}
                  >
                    <Box className="flex justify-between items-center text-sm">
                      Next
                      <ArrowRight />
                    </Box>
                    <Box className="font-bold">{doc.nextLabel}</Box>
                  </Link>
                )}
              </div>
            </Box>
          </Box>
        </Content>
      </Main>
    </PageContainer>
  )
}
