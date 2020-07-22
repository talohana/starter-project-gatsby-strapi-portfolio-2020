import { graphql, Link } from "gatsby"
import React from "react"
import ReactMarkdown from "react-markdown"
import Layout from "../components/Layout"

const BlogTemplate = ({ data }) => {
  return (
    <Layout>
      <section className="blog-template">
        <div className="section-center">
          <article className="blog-content">
            <ReactMarkdown source={data.blog.content} />
          </article>
          <Link to="/blog" className="btn center-btn">
            blogs
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

export default BlogTemplate
