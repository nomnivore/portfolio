import * as React from "react"
import { Link } from "gatsby"
import { HoverText } from "../components/HoverText"
import { HiArrowRight, HiOutlineEnvelope } from "react-icons/hi2"
import { motion } from "framer-motion"

import Seo from "../components/seo"
import { MotionPage } from "../components/MotionPage"


const pageContent = {
  title: "Kyle Warner",
  subtitle: "Full Stack Web Developer",
  body: `Hi, I'm a US-based software development student graduating in May 2023 and currently
        seeking remote work. I have a passion for building intuitive user experiences
        and writing quality code that helps boost overall productivity. I'm always interested
        in learning new technologies and growing my skillset as a developer. Let's talk!`,
}

const ctaProps = {
  variants: {
    initial: { backgroundPosition: "0% 0%" },
    hover: { backgroundPosition: "100% 100%", scale: 1.05 },
    click: { scale: 0.95 },
  },
  initial: "initial",
  whileHover: "hover",
  whileTap: "click",
  transition: {
    duration: 0.2,
    backgroundPosition: { stiffness: 0 },
  },
}

const IndexPage = () => (
  <MotionPage key="index" className="flex flex-col gap-2 px-2 self-center mx-1">
    <h1 className="text-5xl md:text-6xl font-bold my-2">
      <HoverText text={pageContent.title} className="hover:text-violet-600" />
    </h1>
    <h2 className="text-[1.375rem] md:text-4xl text-violet-600 font-semibold">
      <HoverText text={pageContent.subtitle} className="hover:text-gray-300" />
    </h2>

    <p className="max-w-prose md:text-xl">{pageContent.body}</p>

    <div className="flex gap-5 mt-6 flex-wrap justify-start">
      <motion.div
        className="flex rounded-xl p-1 bg-size-200 bg-gradient-to-tl from-purple-800 via-purple-800 to-indigo-600"
        {...ctaProps}
      >
        <Link
          to="/contact"
          className="py-3 px-5 flex items-center gap-2 text-lg bg-gray-900 rounded-lg"
        >
          Say hello
          <motion.div variants={{ hover: { rotate: [0, 7, -7, 0] } }}>
            <HiOutlineEnvelope size="20px" />
          </motion.div>
        </Link>
      </motion.div>

      <motion.div
        className="rounded-xl bg-size-200 bg-gradient-to-tl from-purple-800 via-purple-800 to-indigo-600"
        {...ctaProps}
      >
        <Link
          to="/projects"
          className="px-4 py-4 flex items-center gap-2 text-lg"
        >
          See my work
          <motion.div
            variants={{ hover: { x: [0, 3, 0, 3, 0] } }}
            transition={{}}
          >
            <HiArrowRight size="20px" />
          </motion.div>
        </Link>
      </motion.div>
    </div>
  </MotionPage>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
