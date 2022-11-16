import React from "react"
import { Link } from "gatsby"
import { DiGithubBadge } from "react-icons/di"
import { MobileNav } from "./MobileNav"
import { motion } from "framer-motion"

const navLinks = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/contact",
    text: "Contact",
  },
  {
    url: "/projects",
    text: "Projects",
  },
]

const mobileOnlyLinks = [
  {
    url: "https://github.com/Nomnivore",
    text: "GitHub",
  },
]

export const Header = () => {
  return (
    <header className="w-screen min-h-[66px] p-3 flex gap-2 bg-gradient-to-b from-gray-950">
      <div className="grid grid-cols-3 w-full max-w-7xl mx-auto">
        <div className="flex justify-start">
          <motion.div
            className="flex"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              to="/"
              className="text-2xl md:text-3xl font-bold tracking-wider link-hover flex items-center font-mono"
            >
              {/* <StaticImage src="../images/logo.png" height="28" /> */}
              {"<KW>"}
            </Link>
          </motion.div>
        </div>
        <div className="flex items-center justify-center">
          <div className="hidden md:flex justify-center gap-5">
            {navLinks.map(link => (
              <Link
                key={link.url}
                to={link.url}
                className="link-hover align-middle px-4 py-2 border-b-2 border-transparent hover:!border-violet-800 flex items-center box-content"
                activeClassName="!border-gray-500"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <div className="hidden md:flex justify-end">
            <motion.a
              href={mobileOnlyLinks[0].url}
              className="link-hover rounded-lg flex items-center px-1"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              <DiGithubBadge size="32px" className="" />
            </motion.a>
          </div>

          <MobileNav items={[...navLinks, ...mobileOnlyLinks]} />
        </div>
      </div>
    </header>
  )
}
