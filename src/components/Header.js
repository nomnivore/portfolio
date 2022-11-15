import React from "react"
import { Link } from "gatsby"
import useToggle from "../hooks/useToggle"
import { DiGithubBadge } from "react-icons/di"
import { HiBars3 } from "react-icons/hi2"

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
  const [showMobileMenu, toggleShowMobileMenu] = useToggle()

  return (
    <header className="w-screen min-h-[66px] p-3 flex gap-2 bg-gradient-to-b from-gray-950">
      <div className="grid grid-cols-3 w-full max-w-7xl mx-auto">
        <div className="flex justify-start">
          <Link
            to="/"
            className="text-2xl md:text-3xl font-bold tracking-wider link-hover flex items-center font-mono"
          >
            {/* <StaticImage src="../images/logo.png" height="28" /> */}
            {"<KW>"}
          </Link>
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
            <a
              href={mobileOnlyLinks[0].url}
              className="link-hover rounded-lg flex items-center px-1 hover:bg-gray-800"
            >
              <DiGithubBadge size="32px" className="" />
            </a>
          </div>

          {/* TODO: extract to MobileNav component */}
          <div className="flex md:hidden justify-end">
            <button onClick={() => toggleShowMobileMenu()}>
              <HiBars3 size="32px" />
            </button>
            {/* mobile nav menu items */}
            {/* TODO: implement framer motion */}
            <div
              className={`flex-col gap-3 absolute top-11 p-3 py-5 backdrop-blur-md border-4 border-gray-800 rounded-md shadow-xl rounded-tr-none text-xl transition-all ${
                showMobileMenu ? "flex" : "hidden"
              }`}
            >
              {[...navLinks, ...mobileOnlyLinks].map(link => {
                const props = {
                  key: link.url,
                  className: "transition-all link-hover py-3 px-5",
                  onClick: () => {
                    toggleShowMobileMenu(false)
                  },
                }

                if (link.url.startsWith("/"))
                  return (
                    <Link
                      to={link.url}
                      {...props}
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
        </div>
      </div>
    </header>
  )
}
