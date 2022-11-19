import React from "react"
import { motion } from "framer-motion"

export const MotionPage = props => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, ease: "linear" }}
      {...props}
    >
      {props.children}
    </motion.div>
  )
}
