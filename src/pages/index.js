import * as React from "react"
import { Link } from "gatsby"
import { HoverText } from "../components/HoverText"
import { HiArrowRight } from "react-icons/hi2"
import { motion } from "framer-motion"

import Seo from "../components/seo"

const IndexPage = () => (
  <div className="flex flex-col items-center gap-2 px-2 self-center">
    <h1 className="text-4xl sm:text-6xl font-bold text-center my-2">
      <HoverText text="Kyle Warner" className="hover:text-violet-600" />
    </h1>
    <h2 className="text-2xl sm:text-4xl text-violet-600 font-semibold text-center">
      <HoverText
        text="Full Stack Web Developer"
        className="hover:text-gray-300"
      />
    </h2>

    <p className="max-w-prose text-center lg:text-lg">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa minima
      deserunt impedit, pariatur, nemo modi maiores recusandae placeat
      molestiae, laborum ratione perspiciatis saepe maxime at hic deleniti enim.
      Maxime, labore!
    </p>

    <div className="flex gap-5 mt-6">
      <motion.div
        className="rounded-xl bg-size-200 bg-gradient-to-tl from-purple-800 via-purple-800 to-indigo-600"
        variants={{
          initial: { backgroundPosition: "0% 0%" },
          hover: { backgroundPosition: "100% 100%", scale: 1.05 },
          click: { scale: 0.95 },
        }}
        initial="initial"
        whileHover="hover"
        whileTap="click"
        transition={{
          duration: 0.2,
          backgroundPosition: { stiffness: 0 },
        }}
      >
        <Link to="/projects" className="px-4 py-4 flex items-center gap-2">
          See my work <HiArrowRight size="20px" />
        </Link>
      </motion.div>
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
