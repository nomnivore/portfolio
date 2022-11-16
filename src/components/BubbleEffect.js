import React, { useEffect, useState } from "react"
import throttle from "underscore/modules/throttle"
import random from "underscore/modules/random"
// import "../styles/BubbleEffect.css"
import { motion } from "framer-motion"

const Bubble = ({
  handleDelete,
  posX,
  posY,
  id,
  initSize = 60, // px
  variance = 150, // %
  ttl = 2500, // ms
  twColor = "bg-blue-900",
  scale = 5,
}) => {
  const moveX = random(-variance, variance)
  const moveY = random(-variance, variance)

  // using setTimeout instead of motion event due to bubbles collecting
  // while the tab is loaded but not opened
  useEffect(() => {
    setTimeout(() => {
      handleDelete(id)
    }, ttl - 1)
  }, [handleDelete, id, ttl])

  return (
    <motion.div
      className={`rounded-full ${twColor} absolute pointer-events-none`}
      initial={{
        height: initSize,
        width: initSize,
        left: posX - initSize / 2,
        top: posY - initSize / 2,
        opacity: 0.1,
      }}
      animate={{
        x: moveX,
        y: moveY,
        scale: scale,
        opacity: 0,
      }}
      transition={{
        ease: "easeOut",
        duration: ttl / 1000, // ms -> s
      }}
    ></motion.div>
  )
}

export const BubbleEffect = () => {
  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    const throttledBubbles = throttle(createBubble, 300)

    const handleMouseMove = e => {
      setTimeout(() => throttledBubbles(e), 50)
    }

    const idleBubbles = setInterval(() => {
      createBubble(
        {
          clientX: random(window.innerWidth),
          clientY: random(window.innerHeight),
        },
        {
          initSize: 200,
          variance: 50,
          ttl: 6000,
          scale: 4,
        }
      )
    }, 2000)

    document
      .getElementsByTagName("body")[0]
      .addEventListener("mousemove", handleMouseMove)

    return () => {
      clearInterval(idleBubbles)

      document
        .getElementsByTagName("body")[0]
        .removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  function deleteBubble(bubbleId) {
    setBubbles(oldBubbles => {
      return oldBubbles.filter(ele => ele.key !== bubbleId)
    })
  }

  function createBubble(e, props = {}) {
    const posX = e.clientX
    const posY = e.clientY
    const bubbleId = `${new Date().getTime()}.${posX}.${posY}`
    const bubble = (
      <Bubble
        handleDelete={deleteBubble}
        posX={posX}
        posY={posY}
        key={bubbleId}
        id={bubbleId}
        {...props}
      />
    )

    setBubbles(oldBubbles => {
      return [bubble, ...oldBubbles]
    })
  }

  return (
    <div className="absolute top-0 left-0 w-screen h-screen z-10 overflow-hidden bubble-wrapper">
      {bubbles}
    </div>
  )
}
