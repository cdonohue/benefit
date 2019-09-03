/** @jsx jsx */
import { jsx } from "benefit-react"

function About() {
  return (
    <div className="font-bold text-primary text-5xl bg-gray-100 p-8">
      Welcome to About{" "}
      <a
        className="cursor-pointer font-bold text-red-500 no-underline"
        href="/"
      >
        Back Home
      </a>{" "}
    </div>
  )
}

export default About
