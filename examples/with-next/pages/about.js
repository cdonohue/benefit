import { jsx } from "../../../dist/react"

function About() {
  return (
    <div className="font-bold text-blue-600">
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
