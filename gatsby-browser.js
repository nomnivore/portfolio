/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import "./src/styles/global.css"

import React from "react"
import { Layout } from "./src/components/Layout"
import { AnimatePresence } from "framer-motion"

// sets a constant layout that wont re-mount on each page change
export const wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      <AnimatePresence initial={false} mode="wait">
        {element}
      </AnimatePresence>
    </Layout>
  )
}
