import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import { Layout } from "../components/Layout"

const IndexPage = () => (
  <Layout>
    <h1 className="text-3xl">Welcome to my site</h1>
    <p>Work in progress...</p>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
