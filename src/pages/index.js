import * as React from "react"

import Seo from "../components/seo"

const IndexPage = () => (
  <div className="flex flex-col items-center gap-2 px-2 self-center">
    <h1 className="text-4xl sm:text-6xl font-bold text-center">Kyle Warner</h1>
    <h2 className="text-2xl sm:text-4xl text-violet-600 font-semibold text-center">
      Full Stack Web Developer
    </h2>

    <p className="max-w-prose text-center lg:text-lg">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa minima
      deserunt impedit, pariatur, nemo modi maiores recusandae placeat
      molestiae, laborum ratione perspiciatis saepe maxime at hic deleniti enim.
      Maxime, labore!
    </p>

    <div className="flex gap-5 mt-6">
      <button className="px-4 py-3 border-4 border-violet-900 rounded-xl">
        HelloWorld
      </button>
      <button className="px-4 py-3 border-4 border-violet-900 rounded-xl">
        HelloWorld
      </button>
    </div>
  </div>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
