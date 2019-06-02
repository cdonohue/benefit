import { jsx } from "../../../dist/react"

function Home() {
  return (
    <div className="text-primary">
      Welcome to Next.js! Click{" "}
      <a
        className="cursor-pointer font-bold text-red-500 no-underline"
        href="/about"
      >
        here
      </a>{" "}
      to read more
    </div>
  )
}

export default Home
