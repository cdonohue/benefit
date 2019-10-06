/** @jsx jsx */
import { useState, useEffect, Fragment } from "react"
import { Link } from "gatsby"

import Nav from "./nav"
import { jsx, css, theme, injectGlobal, Preflight } from "benefit-react"

import Icon from "./Icon"
import Logo from "../images/benefit-logo.svg"

injectGlobal`
  html {
    font-size: 14px;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`

export default function Layout({ children }) {
  const [isMenuOpen, toggleMenu] = useState(false)

  useEffect(() => {
    const sideMenu = document.querySelector(".side-menu")
    sideMenu.scrollTop = sessionStorage.getItem("menuScroll") || 0

    return () => {
      sessionStorage.setItem("menuScroll", sideMenu.scrollTop)
    }
  }, [])

  return (
    <Fragment>
      <Preflight />
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
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  )
}
