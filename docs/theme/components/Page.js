import React from "react"
import { useEffect } from "react"
import { useConfig, useMenus, useDocs, Link, doczState } from "docz"
import { css, keyframes } from "emotion"
import { ArrowLeft, ArrowRight, GitHub, ChevronsRight } from "react-feather"
import { Box, ConfigConsumer } from "../../../dist/benefit.js"
import Container from "./Container"
import Logo from "../../components/Logo"
import { colors } from "../../../src/config/theme"
import {
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

const page = css`
  display: grid;
  height: 100vh;
  overflow: auto;
  grid-template-columns: [content-start] minmax(auto, 960px) [content-end];
  @media (min-width: 961px) {
    grid-template-columns:
      [fullbleed-start] minmax(1.2rem, 1fr) [content-start] minmax(auto, 960px)
      [content-end] minmax(1.2rem, 1fr) [fullbleed-end];
  }
`

function PageContainer({ children }) {
  return <Box className={page}>{children}</Box>
}

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
      <Box className="bg-black" />
      <Box className="bg-gray-100" />
    </Box>
  )
}

function Header() {
  return (
    <Box className="z-10 bg-white border-b fixed w-full">
      <Container className="p-4 flex justify-between">
        <Box>asdf</Box>
        <Box className="flex">
          {useMenus().map((menuItem) => (
            <Box className="ml-2">{menuItem.name}</Box>
          ))}
        </Box>
      </Container>
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
    color: ${colors["cool-gray"]["300"]};
  }
  padding: 0.5rem 2rem;
  display: block;
  cursor: pointer;
  &:hover {
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.03),
      transparent
    );
  }
  &.active {
    position: relative;

    &:before {
      content: "";
      background: ${colors["cool-gray"]["500"]};
      width: 0;
      top: 0;
      right: 0;
      bottom: 0;
      position: absolute;
    }

    font-weight: bold;
    color: white;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    /* background: linear-gradient(
      to left,
      ${colors["cool-gray"]["800"]},
      ${colors.black}
    ); */
  }
`

const menuHeading = css`
  background: linear-gradient(
    to left,
    ${colors["cool-gray"]["900"]},
    ${colors.black}
  );

  & svg {
    width: 16px;
  }
`

const pagingLink = css`
  & svg {
    width: 16px;
  }

  min-width: 8rem;

  &,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${colors["cool-gray"]["300"]};
  }
`

function renderSubMenu(menuItems, category, MenuIcon) {
  return (
    <>
      <Box
        className={`${menuHeading} ${partialUnderline} uppercase tracking-wide text-xs flex justify-between items-center py-2 px-8 text-gray-500 mt-4`}
      >
        {category}
        {MenuIcon && <MenuIcon className="w-4 text-gray-200" />}
      </Box>
      {menuItems
        .filter((item) => item.parent === category)
        .map((item) => (
          <Link className={`${styledLink}`} key={item.id} to={item.route}>
            {item.name}
          </Link>
        ))}
    </>
  )
}

function SideBar() {
  const menuItems = useMenus()

  useEffect(() => {
    const sideMenu = document.querySelector(".side-menu")
    sideMenu.scrollTop = localStorage.getItem("menuScroll") || 0

    sideMenu.onscroll = ({ target }) => {
      localStorage.setItem("menuScroll", target.scrollTop)
    }
  })

  return (
    <Box className="bg-black text-gray-300 relative md:w-64">
      <Box className="side-menu py-8 h-screen md:sticky pin-t overflow-auto">
        <Box>
          <Link className={`${styledLink}`} to="/">
            Installation
          </Link>
          <Link className={`${styledLink}`} to="getting-started">
            Getting Started
          </Link>

          {renderSubMenu(menuItems, "Layout", Layout)}
          {renderSubMenu(menuItems, "Typography", Type)}
          {renderSubMenu(menuItems, "Background", Background)}
          {renderSubMenu(menuItems, "Border", Border)}
          {renderSubMenu(menuItems, "Flexbox", Flexbox)}
          {renderSubMenu(menuItems, "Space", Space)}
          {renderSubMenu(menuItems, "Size", Size)}
          {renderSubMenu(menuItems, "Tables", Table)}
          {renderSubMenu(menuItems, "Effects", Effects)}
          {renderSubMenu(menuItems, "Interactivity", Interactivity)}
          {renderSubMenu(menuItems, "Svg", Svg)}
        </Box>
      </Box>
    </Box>
  )
}

function Content({ children }) {
  return <Box className="bg-gray-100 flex-1 z-10">{children}</Box>
}

function Icon(props) {
  const icon = css`
    & svg {
      width: 16px;
    }
  `

  return (
    <Box className={`${icon}`}>
      <ChevronRight />
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
    background-image: linear-gradient(to right, #d4dae1, transparent);
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
  return (
    <PageContainer>
      <FullBleed />
      <Main>
        <SideBar />
        <Content>
          <Box
            className={`p-8 flex justify-between items-center ${fadingBorder}`}
            style={{
              backgroundImage: "linear-gradient(to right, white, transparent)",
            }}
          >
            <Logo className="w-24" />
            <Box
              className={`${css`
                & svg {
                  width: 20px;
                }
              `} text-blue-500 rounded-full inline-flex items-center justify-center`}
            >
              <GitHub />
            </Box>
          </Box>
          <Box className="p-8">
            <Box
              className={`${accent} pb-4 mb-8 text-4xl font-thin text-gray-700`}
            >
              {doc.name}
            </Box>
            {children}

            <Box className="flex justify-between border-t mt-8 pt-4 border-dashed">
              {doc.previousRoute && (
                <Link className={pagingLink} to={doc.previousRoute}>
                  <Box className="flex justify-between items-center text-sm">
                    <ArrowLeft />
                    Previous
                  </Box>
                  <Box className="font-bold">{doc.previousLabel}</Box>
                </Link>
              )}
              {doc.nextRoute && (
                <Link className={pagingLink} to={doc.nextRoute}>
                  <Box className="flex justify-between items-center text-sm">
                    Next
                    <ArrowRight />
                  </Box>
                  <Box className="font-bold text-right">{doc.nextLabel}</Box>
                </Link>
              )}
            </Box>
          </Box>
        </Content>
      </Main>
    </PageContainer>
  )
}
