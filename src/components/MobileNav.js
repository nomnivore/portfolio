import React, { useEffect, useRef } from "react"
import useToggle from "../hooks/useToggle"
import { Link } from "gatsby"
import { HiBars3, HiXMark } from "react-icons/hi2"
import { motion, AnimatePresence } from "framer-motion"

const iconProps = {
  initial: {
    opacity: 0.5,
    rotate: -45,
  },
  animate: {
    opacity: 1,
    rotate: 0,
  },
  exit: {
    opacity: 0.5,
    rotate: 45,
  },

  transition: {
    duration: 0.15,
    type: "tween",
    ease: "linear",
  },
}
const iconSize = "32px"

export const MobileNav = ({ items, controls, setHeight }) => {
  const [showMobileMenu, toggleShowMobileMenu] = useToggle()
  const menuRef = useRef()

  useEffect(() => {
    setHeight(menuRef.current.offsetHeight)
  })

  function handleMenuIconClick() {
    controls.start(showMobileMenu ? "mobileHide" : "mobileShow")

    toggleShowMobileMenu()
  }

  return (
    <div className="flex md:hidden justify-end">
      <button onClick={handleMenuIconClick}>
        <AnimatePresence initial="false" mode="wait">
          {showMobileMenu && (
            <motion.div key="xmark" {...iconProps}>
              <HiXMark size={iconSize} />
            </motion.div>
          )}
          {!showMobileMenu && (
            <motion.div key="bars3" {...iconProps}>
              <HiBars3 size={iconSize} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <div
        ref={menuRef}
        className="absolute w-screen bg-gray-950 left-0 bottom-full flex flex-col p-2"
      >
        {items.map(link => {
          const props = {
            key: link.url,
            className: "transition-all link-hover py-3 px-6 ml-auto",
          }

          if (link.url.startsWith("/"))
            return (
              <Link
                to={link.url}
                {...props}
                onClick={handleMenuIconClick}
                activeClassName="text-violet-500"
              >
                {link.text}
              </Link>
            )
          else
            return (
              <a href={link.url} {...props}>
                {link.text}
              </a>
            )
        })}
      </div>
    </div>
  )
}
