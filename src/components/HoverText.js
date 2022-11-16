import React from "react"
import { motion } from "framer-motion"
import random from "underscore/modules/random"

export const HoverText = ({ text, className = "" }) => {
  const chars = text.replaceAll(" ", "\u00A0").split("")

  return chars.map(char => (
    <motion.span
      layout
      className={`inline-block cursor-default ${className}`}
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", bounce: 0.5 }}
    >
      {char}
    </motion.span>
  ))
}
