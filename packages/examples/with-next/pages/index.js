/** @jsx jsx */
import { css, jsx } from "benefit-react"

function Home() {
  return (
    <div className="font-sans mx-auto max-w-xl p-8">
      <h1
        className="text-5xl font-thin mb-8 text-primary"
        css={css`
          text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.12);
        `}
      >
        Heading
      </h1>
      <h3 className="text-2xl font-semibold mb-8">Sub-heading</h3>
      <div
        className="bg-primary shadow-lg py-8 mb-8 text-primary-contrast"
        css={css`
          transition: 0.2s ease;
          margin-left: calc(50% - 50vw);
          margin-right: calc(50% - 50vw);
          padding-left: calc(50vw - 50%);
          padding-right: calc(50vw - 50%);
        `}
      >
        <p className="mb-4">
          This background should be the{" "}
          <code className="bg-primary-contrast rounded-sm inline-block px-1 py-px text-primary">
            primary
          </code>{" "}
          color defined in the benefit configuration.
        </p>
        <p>
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </p>
      </div>
      <p className="mb-4">
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
        collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment.
      </p>
      <p>
        Bring to the table win-win survival strategies to ensure proactive
        domination. At the end of the day, going forward, a new normal that has
        evolved from generation X is on the runway heading towards a streamlined
        cloud solution. User generated content in real-time will have multiple
        touchpoints for offshoring.
      </p>
    </div>
  )
}

export default Home
