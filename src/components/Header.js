import * as React from "react"
import { Link } from "gatsby"
import { DiGithubBadge } from "react-icons/di"

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

export const Header = () => {
  return (
    <header className="w-screen p-3 flex gap-2 bg-gradient-to-b from-gray-950">
      <div className="grid grid-cols-3 w-full max-w-7xl mx-auto">
        <div className="flex justify-start">
          <Link
            to="/"
            className="text-xl lg:text-2xl font-bold tracking-wider link-hover flex items-center"
          >
            KW
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <div className="hidden md:flex justify-center gap-5">
            {navLinks.map(link => (
              <Link
                key={link.url}
                to={link.url}
                className="transition-all link-hover align-middle px-4 py-2 hover:bg-gray-800 rounded-lg flex items-center"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <a
            href="https://github.com/Nomnivore"
            className="link-hover rounded-lg flex items-center px-1 hover:bg-gray-800"
          >
            <DiGithubBadge size="32px" className="ml-auto" />
          </a>
        </div>
      </div>
    </header>
  )
}
