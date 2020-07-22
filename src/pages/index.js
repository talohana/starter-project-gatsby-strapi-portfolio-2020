import { graphql } from "gatsby"
import React from "react"
import Blogs from "../components/Blogs"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Layout from "../components/Layout"
import Projects from "../components/Projects"
import Services from "../components/Services"

export default ({ data }) => {
  console.log(data)

  const {
    allStrapiProjects: { projects },
    allStrapiBlogs: { blogs },
  } = data

  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="blog" showLink />
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
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      blogs: nodes {
        slug
        content
        description
        date(formatString: "MMM, Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
