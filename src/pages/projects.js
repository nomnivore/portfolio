import React from "react"
import { MotionPage } from "../components/MotionPage"
import Seo from "../components/seo"
import { motion } from "framer-motion"
import { Project } from "../components/Project"

// ? should this be converted to markdown
const projects = [
  {
    title: "My Portfolio",
    desc: `You are here! Building upon my React fundamentals, I used this project
        not only as a way to demonstrate my abilities, but also learn some new skills
        along the way. Created using Gatsby and sprinkled with animations using Framer Motion, with a
        CI/CD pipeline to automatically build and publish live when changes submitted to the main branch.`,
    sourceUrl: "https://github.com/nomnivore/portfolio",
    liveUrl: "/",
    image: "portfolio.png",
    badges:
      "HTML,Tailwind CSS,JavaScript,React,Gatsby,Framer Motion,GitHub Pages",
  },
  {
    title: "TypeScript Project Creator",
    desc: `This is a CLI tool I created to help solve the problem that configuring new TypeScript apps
          can be very cumbersome, especially when you are trying to set up several tools to work in harmony around
          the new ESM standard. <code>"create-ts-init"</code> creates a new TypeScript project with options for a pre-configured
          Jest testing environment as well as ESLint and Prettier for linting and formatting. Ultimately, you get
          a good developer experience for TypeScript out of the box in just a few seconds.`,
    sourceUrl: "https://github.com/nomnivore/create-ts-init",
    liveUrl: "https://www.npmjs.com/package/create-ts-init",
    image: "create-ts-init.png",
    badges: "TypeScript, Node.js, CLI, NPM Registry, Jest, ESLint",
  },
  {
    title: "React Training Module",
    desc: `Created for CIT255 course at NMC. Groups were tasked with creating educational material
          for learning a new technology not previously covered in the program, including a lecture,
          demonstration, and short assessment. I created a module for learning React, setting up a
          development environment with Vite, and building a Tic-Tac-Toe game that demonstrates all learning outcomes.`,
    sourceUrl: "https://github.com/nomnivore/react-tictactoe",
    liveUrl: "https://nomnivore.github.io/react-tictactoe/",
    image: "tictactoe.png",
    badges: "HTML,CSS,JavaScript,React,Vite,GitHub Pages,GitHub Wiki",
  },
  {
    title: "The Arkade",
    desc: `A collection of three games using core web technologies created for the
          CIT190 - JS & jQuery course at NMC. Games include a fully-featured Sudoku game leveraging
          the public 'sugoku' API, a sliding grid puzzle that allows you to upload your own pictures,
          and an HTML5 Canvas game focus on dodging obstacles.`,
    sourceUrl: "https://github.com/nomnivore/NMC-CIT190-Term-Project",
    liveUrl: "https://nomnivore.github.io/NMC-CIT190-Term-Project/",
    image: "arkade.png",
    badges: "HTML,CSS,JavaScript,jQuery,sugoku,Canvas,GitHub Pages",
  },
]

const ProjectsPage = () => {
  return (
    <MotionPage key="projects" className="mt-0">
      <motion.div
        className="divide-y-2 mx-4 md:ml-0 divide-gray-400 max-w-5xl"
        initial="off"
        animate="on"
        transition={{
          delayChildren: 0.1,
          staggerChildren: 0.1,
        }}
      >
        {projects.map((proj, idx) => (
          <Project key={idx} {...proj} />
        ))}
      </motion.div>
    </MotionPage>
  )
}

export const Head = () => <Seo title="Projects" />

export default ProjectsPage
