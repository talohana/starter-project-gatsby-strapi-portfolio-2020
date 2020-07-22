import { graphql } from "gatsby"
import React from "react"
import Blogs from "../components/Blogs"
import Layout from "../components/Layout"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="latest articles" showLink={false} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allStrapiBlogs {
      nodes {
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

export default Blog
