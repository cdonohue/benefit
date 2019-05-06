/** @jsx jsx */
import { css, keyframes } from "emotion"
import { jsx } from "../../../dist/react.js"

const scale = keyframes`
  0% {
    transform: scale(0.0);
    opacity: 0;
  }
  5% {
    opacity: 1;
  }
  100% {
    transform: scale(1.0);
    opacity: 0;
  }
`

const ball = css`
  position: absolute;
  left: -30px;
  top: 0;
  opacity: 0;
  margin: 0;
  width: 60px;
  height: 60px;
  background: red;
  border-radius: 100%;
  animation: ${scale} 1s 0s linear infinite;

  &:nth-of-type(2) {
    animation-delay: -0.4s;
  }

  &:nth-child(3) {
    animation-delay: -0.2s;
  }
`

export default function Loader() {
  return (
    <div className="relative">
      <div className={ball} />
      <div className={ball} />
      <div className={ball} />
    </div>
  )
}
