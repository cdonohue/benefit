/** @jsx jsx */
import { useMenus, Link } from "docz"
import { css } from "emotion"
import { jsx } from "../../dist/benefit.js"

import Icon from "./Icons"
import Grid from "./Grid"

const styledLink = css`
  transition: 0.1s ease-in-out;
`

export default function UtilityBox({ category, icon }) {
  const menuItems = useMenus()

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="flex justify-between items-center text-gray-600 border-b p-4">
        <h4 className="font-semibold">{category}</h4>
      </div>
      <div className="p-4 flex flex-wrap">
        {menuItems
          .filter((item) => item.parent === category)
          .map((item) => (
            <Link
              className={`px-4 py-1 mr-2 mb-2 border border-blue-200 hover:bg-blue-400 hover:text-white font-semibold inline-block no-decoration text-sm rounded text-blue-500 ${styledLink}`}
              key={item.id}
              to={item.route}
            >
              {item.name}
            </Link>
          ))}
      </div>
    </div>
  )
}
