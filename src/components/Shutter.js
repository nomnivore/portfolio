import { StaticImage } from "gatsby-plugin-image"
import React, { useRef } from "react"
import useToggle from "../hooks/useToggle"
// import "../styles/Shutter.css"
import { motion } from "framer-motion"

// TODO: integrate framer-motion here
export const Shutter = () => {
  const shutterRef = useRef(null)
  const [visible, toggleVisible] = useToggle(true)
  return visible ? (
    <motion.div
      ref={shutterRef}
      className="fixed top-0 left-0 w-full h-full bg-neutral-900 z-50 flex justify-center items-center shadow-2xl"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ delay: 1.5, duration: 1.5, ease: [0.39, 0.1, 0.25, 0.9] }}
      onAnimationComplete={() => toggleVisible(false)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 1, delay: 0.2 }}
        className="flex justify-center items-center"
      >
        <StaticImage
          src="../images/logo.png"
          className="max-w-2xl mx-3"
          alt="KW logo"
          placeholder="none"
        />
      </motion.div>
    </motion.div>
  ) : (
    <></>
  )
}
