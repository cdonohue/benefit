import Link from "next/link"
import { jsx } from "../../../dist/react"

function About() {
  return (
    <div className="font-bold text-blue-600">
      Welcome to About{" "}
      <Link href="/">
        <a className="cursor-pointer font-bold text-red-500">Back Home</a>
      </Link>{" "}
    </div>
  )
}

export default About
