/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import "./src/styles/global.css"

import React from "react"
import { Layout } from "./src/components/Layout"
import { AnimatePresence, MotionConfig } from "framer-motion"

// sets a constant layout that wont re-mount on each page change
export const wrapPageElement = ({ element, props }) => {
  return (
    <MotionConfig reducedMotion="user">
      <Layout {...props}>
        <AnimatePresence mode="wait">{element}</AnimatePresence>
      </Layout>
    </MotionConfig>
  )
}
