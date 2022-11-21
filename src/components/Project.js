import React from "react"
import { HiHome } from "react-icons/hi2"
import { DiGithubBadge } from "react-icons/di"
import { motion } from "framer-motion"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

const previewQuery = graphql`
  query MyQuery {
    photos: allFile(
      filter: { relativeDirectory: { eq: "projects" }, base: { glob: "*.png" } }
    ) {
      edges {
        node {
          base
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`

const badgeStyles = [
  "bg-purple-900 border-purple-500 text-purple-100",
  "bg-emerald-900 border-emerald-500 text-emerald-100",
  "bg-sky-900 border-sky-500 text-sky-100",
  "bg-yellow-900 border-yellow-500 text-yellow-100",
]
// TODO: make it use props
// TODO: add like 3-4 badge colors that are either cycled or randomized (probably cycled?)
const projVariants = {
  off: {
    x: "25%",
    opacity: 0,
  },
  on: {
    x: "0",
    opacity: 1,
  },
}
const previewImgProps = {
  className: "w-72 h-48 rounded-md border-2 border-gray-600",
}

// mini component scoped to this component
const ProjectLink = ({ to, children }) => {
  return (
    <motion.a
      className="py-2 px-3 link-hover flex items-center rounded-md gap-2 hover:shadow-lg hover:bg-gray-950"
      href={to}
      whileHover={{
        scale: 1.05,
        y: "-3px",
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      {children}
    </motion.a>
  )
}

export const Project = ({
  title,
  badges = "",
  image,
  desc,
  sourceUrl,
  liveUrl,
}) => {
  badges = badges.split(",")
  const data = useStaticQuery(previewQuery)
  const previewImg = data?.photos?.edges?.find(img => img.node.base === image)
  console.log(previewImg)
  return (
    <motion.div
      variants={projVariants}
      className="px-3 py-6 flex flex-col gap-2"
    >
      <div className="flex flex-col gap-4 md:flex-row items-center sm:items-start">
        {previewImg ? (
          <GatsbyImage
            image={getImage(previewImg.node)}
            alt={`${previewImg.node.base.split(".")[0]} preview`}
            {...previewImgProps}
          />
        ) : (
          <img
            src="https://via.placeholder.com/300x200/101010/FFFFFF/?text=No%20Preview%20Available"
            alt="placeholder preview"
            {...previewImgProps}
          />
        )}
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-bold text-center sm:text-left">{title}</p>
          <div className="flex flex-wrap gap-1.5 md:max-w-md">
            {badges.map((badge, idx) => (
              <span
                key={badge}
                className={`px-3 py-1.5 mb-1 rounded-full text-sm border-2 ${
                  badgeStyles[idx % badgeStyles.length]
                }`}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className="max-w-prose text-lg">{desc}</p>
      </div>
      <div className="flex gap-8 justify-left">
        {sourceUrl && (
          <ProjectLink to={sourceUrl}>
            <DiGithubBadge size="24" />
            View Source
          </ProjectLink>
        )}
        {liveUrl && (
          <ProjectLink to={liveUrl}>
            <HiHome size="24" />
            View Live
          </ProjectLink>
        )}
      </div>
    </motion.div>
  )
}
