import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Services from "../components/Services"

export default ({ data }) => {
  const {
    allStrapiProjects: { projects },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiProjects(filter: { featured: { eq: true } }) {
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
