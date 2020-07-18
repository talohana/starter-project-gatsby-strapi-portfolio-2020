import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import Projects from "../components/Projects"

export const query = graphql`
  query {
    allStrapiProjects {
      projects: nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

const ProjectsPage = ({ data }) => {
  const {
    allStrapiProjects: { projects },
  } = data

  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} />
      </section>
    </Layout>
  )
}

export default ProjectsPage
