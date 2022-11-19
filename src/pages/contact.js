import React from "react"
import { MotionPage } from "../components/MotionPage"
import Seo from "../components/seo"

const ContactPage = () => {
  return (
    <MotionPage key="contact" className="text-center max-w-prose">
      Contact coming soon...
    </MotionPage>
  )
}

export const Head = () => <Seo title="Contact" />

export default ContactPage
