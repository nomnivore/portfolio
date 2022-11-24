import { Link } from "gatsby"
import * as React from "react"
import { MotionPage } from "../components/MotionPage"

import Seo from "../components/seo"

const NotFoundPage = () => (
  <MotionPage key="404" className="mx-3 mt-6 flex flex-col gap-2 w-full">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4">Oops!</h1>
    <p className="max-w-prose md:w-5/6 text-lg md:text-xl pb-3 border-b-2">
      The page you requested does not exist. (404 Not Found)
    </p>
    <p className="max-w-prose md:w-5/6 text-lg md:text-xl">
      <Link to="/" className="link-hover underline">
        Return to Home
      </Link>
    </p>
  </MotionPage>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
