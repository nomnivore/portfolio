import { StaticImage } from "gatsby-plugin-image"
import React, { useRef } from "react"
import useToggle from "../hooks/useToggle"
import "../styles/Shutter.css"

// TODO: integrate framer-motion here
export const Shutter = () => {
  const shutterRef = useRef(null)
  const [visible, toggleVisible] = useToggle(true)
  return visible ? (
    <div
      ref={shutterRef}
      onAnimationEnd={ev =>
        ev.target === shutterRef.current && toggleVisible(false)
      }
      className="shutter absolute top-0 left-0 w-full h-full bg-neutral-900 z-50 flex justify-center items-center shadow-2xl"
    >
      <StaticImage
        src="../images/logo.png"
        className="shutter-logo max-w-2xl mx-3"
        alt="KW logo"
        placeholder="none"
      />
    </div>
  ) : (
    <></>
  )
}
