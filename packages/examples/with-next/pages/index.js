/** @jsx jsx */
import { css, jsx } from "benefit-react"

function Home() {
  return (
    <div className="text-primary font-sans">
      Welcome to Next.js! Click{" "}
      <a
        className="cursor-pointer font-bold text-red-500 no-underline"
        href="/about"
      >
        here
      </a>{" "}
      to read more
      <div className="bg-primary mb-8 p-4 text-white rounded">lorem ipsum</div>
      <div
        className="bg-yellow-500"
        css={css`
          text-shadow: 2px 3px 1px rgba(0, 0, 0, 0.12);
        `}
      >
        Hello
      </div>
      <div className="bg-blue-500">World</div>
    </div>
  )
}

export default Home
