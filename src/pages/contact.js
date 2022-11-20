import React from "react"
import { MotionPage } from "../components/MotionPage"
import Seo from "../components/seo"
import { SiLinkedin, SiGithub, SiMaildotru } from "react-icons/si"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

// stacking columns on mobile, side-by-side on desktop

const pageContent = {
  title: "Let's get in touch.",
  body: `If you'd like the latest copy of my resume or to chat about
        potential work, you can reach me at the following email address and
        I'll get back to you as soon as I can.`,
  contactEmail: "myemail@mydomain.com",
  cardName: "Kyle Warner",
}

const cardLinks = [
  {
    name: "Email",
    icon: props => <SiMaildotru {...props} />,
    url: `mailto:${pageContent.contactEmail}`,
  },
  {
    name: "LinkedIn",
    icon: props => <SiLinkedin {...props} />,
    url: "https://www.linkedin.com/in/kyle-warner-972227206/",
  },
  {
    name: "GitHub",
    icon: props => <SiGithub {...props} />,
    url: "https://github.com/Nomnivore",
  },
]

const ContactPage = () => {
  return (
    <MotionPage key="contact" className="mx-3 self-center flex flex-col gap-2">
      <div className="flex flex-col">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          {pageContent.title}
        </h1>
        <p className="max-w-prose md:w-5/6 text-lg md:text-xl">
          {pageContent.body}
        </p>
        <p className="text-xl sm:text-2xl my-4 md:text-4xl text-violet-600 font-semibold">
          <a href={`mailto:${pageContent.contactEmail}`}>
            {pageContent.contactEmail}
          </a>
        </p>
      </div>
      <div className="">
        <motion.div
          className="bg-gray-950 rounded-xl drop-shadow-lg p-6 flex flex-col gap-4 items-center md:flex-row max-w-fit md:px-10 md:pr-32"
          variants={{
            out: {
              y: "20%",
              opacity: 0,
            },
            in: {
              y: "0",
              opacity: 1,
            },
          }}
          initial="out"
          animate="in"
          transition={{
            duration: 0.3,
            delayChildren: 0.2,
            staggerChildren: 0.1,
          }}
        >
          <div className="flex flex-col gap-2">
            <StaticImage
              src="https://avatars.githubusercontent.com/u/6979410?v=4"
              alt="github profile avatar"
              className="rounded-full w-36 border-4 border-purple-800"
              placeholder="blurred"
            />
            <p className="text-xl md:text-2xl text-center">
              {pageContent.cardName}
            </p>
          </div>
          <div className="flex gap-2 md:flex-col">
            {cardLinks.map(link => (
              <motion.a
                href={link.url}
                className="p-3 flex gap-4 items-center link-hover"
                key={link.name}
                variants={{
                  out: {
                    y: "-35%",
                    opacity: 0,
                  },
                  in: {
                    y: "0",
                    opacity: 1,
                  },
                }}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                <link.icon size="32" />
                <span className="hidden md:inline text-lg">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </MotionPage>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage
