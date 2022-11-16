import * as React from "react"
import { Header } from "./Header"
import { useEffect } from "react"
import { BubbleEffect } from "./BubbleEffect"
import { Shutter } from "./Shutter"

export const Layout = ({ children }) => {
  useEffect(() => {
    console.log("mounted")
    return () => {
      console.log("unmounted")
    }
  }, [])

  return (
    <>
      <Shutter />
      <div id="app" className="min-h-screen relative flex flex-col z-20">
        <Header />

        <main className="mx-auto mt-4 flex-grow flex">{children}</main>

        <footer className="flex p-2 bg-gradient-to-t from-gray-950">
          <div className="w-full mx-auto flex justify-between">
            <span className="text-sm text-gray-400">&copy; 2022</span>
          </div>
        </footer>
      </div>
      <BubbleEffect />
    </>
  )
}
