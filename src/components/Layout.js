import * as React from "react"
import { Link } from "gatsby"
import { Header } from "./Header"
import { useEffect } from "react"

export const Layout = ({ children }) => {
  useEffect(() => {
    console.log("mounted")
    return () => {
      console.log("unmounted")
    }
  }, [])

  return (
    <div id="app" className="min-h-screen flex flex-col">
      <Header />

      <main className="mx-auto mt-4 flex-grow flex">{children}</main>

      <footer className="w-screen p-2 bg-gradient-to-t from-gray-950">
        <span className="text-sm">&copy; 2022</span>
      </footer>
    </div>
  )
}
