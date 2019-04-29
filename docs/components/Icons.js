import React from "react"
import { css } from "emotion"
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

export function Layout({ className }) {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#layout`} />
    </svg>
  )
}

export function Menu({ className }) {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#layout`} />
    </svg>
  )
}

export function Type({ className }) {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#type`} />
    </svg>
  )
}

export function Background({ className }) {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#image`} />
    </svg>
  )
}

export function Border({ className }) {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#square`} />
    </svg>
  )
}

export function Space({ className }) {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#maximize`} />
    </svg>
  )
}

export function Size({ className }) {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#move`} />
    </svg>
  )
}

export function Effects({ className }) {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#loader`} />
    </svg>
  )
}

export function Interactivity({ className }) {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#mouse-pointer`} />
    </svg>
  )
}

export function Svg({ className }) {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#pen-tool`} />
    </svg>
  )
}

export function Flexbox() {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#columns`} />
    </svg>
  )
}

export function Table() {
  return (
    <svg className={iconStyles}>
      <use xlinkHref={`${sprites}#align-justify`} />
    </svg>
  )
}
