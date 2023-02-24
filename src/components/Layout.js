import React, { useRef } from "react"
import { Header } from "./Header"
import { useEffect } from "react"
import { BubbleEffect } from "./BubbleEffect"
import { Shutter } from "./Shutter"

export const Layout = ({ children, location }) => {
  const currentPage = location ? location.pathname : ""
  const firstLoad = useRef(true)
  const isIndex = currentPage === "/"

  useEffect(() => {
    firstLoad.current = false
  }, [])

  const renderShutter = () =>
    firstLoad.current && isIndex ? <Shutter /> : null

  return (
    <>
      {/* {renderShutter()} */}
      <div id="app" className="min-h-screen relative flex flex-col z-20">
        <Header />

        <main className="container lg:max-w-screen-lg px-1 sm:px-4 mx-auto mt-4 flex-grow flex z-10">
          {children}
        </main>

        <footer className="flex p-2 bg-gradient-to-t from-gray-950">
          <div className="w-full mx-auto flex justify-between">
            <span className="text-sm text-gray-400">&copy; 2023</span>
          </div>
        </footer>
      </div>
      <BubbleEffect />
    </>
  )
}
