/** @jsx jsx */

import { jsx } from "../../../dist/react.m"
import React from "react"
import Head from "next/head"
import { css, Global } from "@emotion/core"

export default () => {
  return (
    <React.Fragment>
      <Global styles={css``} />
      <Head>
        <title>With Benefit</title>
      </Head>
      <div className="antialiased bg-gray-200 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="max-w-md w-full px-3">
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div
                  className="bg-cover bg-top h-40"
                  style={{
                    backgroundImage:
                      "url(https://images.unsplash.com/photo-1518296736038-a6ab5e1488fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)",
                  }}
                />
                <div className="flex pt-2 p-5">
                  <div
                    className="bg-cover bg-center w-32 h-32 -mt-16 rounded-full border-4 border-white"
                    style={{
                      backgroundImage:
                        "url(https://images.unsplash.com/photo-1520366914631-d250fd86eed2?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80)",
                    }}
                  />
                  <div className="ml-3">
                    <div className="font-bold text-2xl">Cait Genevieve</div>
                    <div className="flex items-start">
                      <span>
                        <svg
                          className="w-5 h-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path
                            className="fill-current text-gray-500"
                            d="M4.34 14.66a8 8 0 1 1 11.32 0L11.4 18.9a2 2 0 0 1-2.82 0l-4.25-4.24zm1.42-1.42L10 17.5l4.24-4.25a6 6 0 1 0-8.48 0zM10 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700 ml-2">New York, NY</span>
                    </div>
                  </div>
                </div>
                <div className="flex px-5 mt-2 mb-6 -mx-2">
                  <button className="leading-relaxed rounded-full mx-2 font-bold py-1 w-1/2 bg-blue-500 hover:bg-blue-600 text-white">
                    Follow
                  </button>
                  <button className="leading-relaxed rounded-full mx-2 font-bold py-1 w-1/2 text-gray-900 bg-white border-2 border-gray-400 hover:border-gray-500">
                    Message
                  </button>
                </div>
                <div className="border-t-2 border-gray-200 p-5">
                  <div className="flex items-start">
                    <span>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          className="fill-current text-gray-500"
                          d="M10 11a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 19a1 1 0 0 1-2 0c0-3.84 2.8-7 6.33-7h5.34c3.52 0 6.33 3.16 6.33 7a1 1 0 0 1-2 0c0-2.79-1.97-5-4.33-5H7.33C4.97 14 3 16.21 3 19z"
                        />
                      </svg>
                    </span>
                    <div className="relative">
                      <span className="font-bold text-gray-900 ml-2">12</span>
                      <span className="inline text-gray-700">
                        Followers you know
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex flex-row-reverse justify-end">
                      <div
                        className="bg-cover bg-center w-12 h-12 rounded-full border-4 border-white"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1458071103673-6a6e4c4a3413?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                        }}
                      />
                      <div
                        className="bg-cover bg-center w-12 h-12 rounded-full border-4 border-white -mr-3"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80)",
                        }}
                      />
                      <div
                        className="bg-cover bg-center w-12 h-12 rounded-full border-4 border-white -mr-3"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1470406852800-b97e5d92e2aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                        }}
                      />
                      <div
                        className="bg-cover bg-center w-12 h-12 rounded-full border-4 border-white -mr-3"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1473700216830-7e08d47f858e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
                        }}
                      />
                      <div
                        className="bg-cover bg-center w-12 h-12 rounded-full border-4 border-white -mr-3"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80)",
                        }}
                      />
                      <div
                        className="bg-cover bg-center w-12 h-12 rounded-full border-4 border-white -mr-3"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1502323777036-f29e3972d82f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60)",
                        }}
                      />
                      <div
                        className="bg-cover bg-center w-12 h-12 rounded-full border-4 border-white -mr-3"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1530424426433-967ce567454d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60)",
                        }}
                      />
                      <div
                        className="bg-cover bg-center w-12 h-12 rounded-full border-4 border-white -mr-3"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1525879000488-bff3b1c387cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60)",
                        }}
                      />
                      <div
                        className="bg-cover bg-center w-12 h-12 rounded-full border-4 border-white -mr-3"
                        style={{
                          backgroundImage:
                            "url(https://images.unsplash.com/photo-1521132293557-5b908a59d1e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=60)",
                        }}
                      />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-gray-400 text-sm font-bold text-gray-700 flex justify-center items-center">
                      +3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
