import React from "react"
import { MotionPage } from "../components/MotionPage"
import Seo from "../components/seo"

const ProjectsPage = () => {
  return (
    <MotionPage key="projects" className="text-center max-w-prose">
      Projects coming soon...
    </MotionPage>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectsPage
