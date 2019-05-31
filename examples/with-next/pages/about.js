import { jsx } from "../../../dist/react"
import Link from 'next/link'

function About() {
  return <div className="font-bold text-blue-600">Welcome to About <Link href="/">
  <a className="cursor-pointer font-bold text-red-500">Back Home</a>
</Link>{' '}</div>
}

export default About