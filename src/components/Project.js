import Image from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const Project = ({ description, title, github, stack, url, image, index }) => {
  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      <div className="project-info">
        <span className="project-number">0{index + 1}</span>
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-stack">
          {stack.map(({ id, title }) => (
            <span key={id}>{title}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url}>
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
