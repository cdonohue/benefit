import Link from 'next/link'
import { jsx } from "../../../dist/react"

function Home() {
  return (
    <div className="text-primary">
      Welcome to Next.js! Click{" "}
      <Link href="/about">
        <a className="cursor-pointer font-bold text-red-500">here</a>
      </Link>{" "}
      to read more
    </div>
  )
}

export default Home
