import React from "react"
import useToggle from "../hooks/useToggle"
import { Link } from "gatsby"
import { HiBars3 } from "react-icons/hi2"

export const MobileNav = ({ items }) => {
  const [showMobileMenu, toggleShowMobileMenu] = useToggle()

  return (
    <div className="flex md:hidden justify-end">
      <button onClick={() => toggleShowMobileMenu()}>
        <HiBars3 size="32px" />
      </button>

      {/* TODO: implement framer motion */}
      <div
        className={`flex-col gap-3 absolute top-16 right-0 p-5 py-7 backdrop-blur-md border-4 border-gray-800 rounded-md shadow-xl rounded-tr-none text-xl transition-all ${
          showMobileMenu ? "flex" : "hidden"
        }`}
      >
        {items.map(link => {
          const props = {
            key: link.url,
            className: "transition-all link-hover py-3 px-5",
            onClick: () => {
              toggleShowMobileMenu(false)
            },
          }

          if (link.url.startsWith("/"))
            return (
              <Link to={link.url} {...props} activeClassName="text-violet-500">
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
  )
}
