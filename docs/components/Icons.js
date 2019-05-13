/** @jsx jsx */
import { css } from "emotion"
import { jsx } from "../../dist/react"
import sprites from "../svg/sprites.svg"

const iconStyles = css`
  width: 24px;
  height: 24px;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`

export default function Icon(props) {
  const { className, name, ...remainingProps } = props

  return (
    <svg className={`${iconStyles} ${className}`} {...remainingProps}>
      <use xlinkHref={`${sprites}#${name}`} />
    </svg>
  )
}
