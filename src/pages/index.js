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

const hoverTextVariants = {
  off: {
    opacity: 0,
  },

  on: {
    opacity: 1,
  },
}

const IndexPage = () => {
  return (
    <MotionPage
      key="index"
      className="flex flex-col gap-2 px-2 self-center mx-1"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold my-2"
        initial="off"
        animate="on"
        transition={{
          delayChildren: 0.1,
          staggerChildren: 0.03,
        }}
      >
        <HoverText
          text={pageContent.title}
          variants={hoverTextVariants}
          className="hover:text-violet-600"
        />
      </motion.h1>
      <motion.h2
        className="text-[1.375rem] md:text-4xl text-violet-600 font-semibold"
        initial="off"
        animate="on"
        transition={{
          delayChildren: 0.3,
          staggerChildren: 0.02,
        }}
      >
        <HoverText
          text={pageContent.subtitle}
          variants={hoverTextVariants}
          className="hover:text-gray-300"
        />
      </motion.h2>

      <motion.p
        className="max-w-prose md:text-xl"
        initial={{
          y: "-10%",
          opacity: 0,
        }}
        animate={{
          y: "0",
          opacity: 1,
        }}
        transition={{
          delay: 0.4,
          duration: 0.6,
        }}
      >
        {pageContent.body}
      </motion.p>

      <motion.div
        initial={{ x: "5%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex gap-5 mt-6 flex-wrap justify-start"
      >
        <motion.div
          key="1"
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
          key="2"
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
      </motion.div>
    </MotionPage>
  )
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Kyle Warner" />

export default IndexPage
