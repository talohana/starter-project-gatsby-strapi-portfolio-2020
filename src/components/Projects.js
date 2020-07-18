import { Link } from "gatsby"
import React from "react"
import Project from "./Project"
import Title from "./Title"
const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center"></div>
      {projects.map((project, index) => {
        return <Project key={project.id} index={index} {...project} />
      })}
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  )
}

export default Projects
