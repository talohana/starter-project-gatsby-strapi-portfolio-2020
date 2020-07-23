import { graphql } from "gatsby"
import Image from "gatsby-image"
import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"

const About = ({ data: { about } }) => {
  const { title, info, image, stack } = about

  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(({ id, title }) => (
                <span key={id}>{title}</span>
              ))}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    about: strapiAbout {
      title
      info
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
`

export default About
