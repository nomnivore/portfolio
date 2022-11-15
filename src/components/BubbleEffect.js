import React, { useEffect, useState } from "react"
import throttle from "underscore/modules/throttle"
import random from "underscore/modules/random"
import "../styles/BubbleEffect.css"

const Bubble = ({
  handleDelete,
  posX,
  posY,
  id,
  initSize,
  variance,
  ttl,
  twColor,
  scale,
}) => {
  initSize ||= 60 // px
  variance ||= 150 // %
  ttl ||= 2500 // ms
  twColor ||= "bg-blue-900"
  scale ||= 5

  useEffect(() => {
    setTimeout(() => {
      handleDelete(id)
    }, ttl)
  }, [handleDelete, id, ttl])

  return (
    <div
      className={`rounded-full ${twColor} absolute bubble pointer-events-none`}
      style={{
        height: initSize,
        width: initSize,
        left: posX - initSize / 2,
        top: posY - initSize / 2,
        animationDuration: `${ttl + 5}ms`,
        "--move-x": `${random(-variance, variance)}%`,
        "--move-y": `${random(-variance, variance)}%`,
        "--scale": scale,
      }}
    ></div>
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
