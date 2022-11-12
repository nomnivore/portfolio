import React, { useEffect, useState } from "react"
import _ from "underscore"
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
        "--move-x": `${_.random(-variance, variance)}%`,
        "--move-y": `${_.random(-variance, variance)}%`,
        "--scale": scale,
      }}
    ></div>
  )
}

export const BubbleEffect = () => {
  const [bubbles, setBubbles] = useState([])

  useEffect(() => {
    const throttledBubbles = _.throttle(createBubble, 300)

    const handleMouseMove = e => {
      throttledBubbles(e)
    }

    const idleBubbles = setInterval(() => {
      throttledBubbles(
        {
          clientX: _.random(window.innerWidth),
          clientY: _.random(window.innerHeight),
        },
        {
          variance: 50,
          ttl: 4000,
          scale: 13,
        }
      )
    }, 500)

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
